(ns letters
	(:require
		[clojure.string :as str]
		[clojure.walk :as walk]
		[domina :as dom]
		[domina.events :as events]
		[domina.css :as css]
		[goog.string :as gs]
		[goog.string.format]
		[domina.xpath :as xpath]))

(declare on-board-click)
(declare on-hand-click)
(declare on-clear-click)
(declare on-hand-mouse-down)

(def letter-scores {
	\a 1, \b 3, \c 3, \d 2, \e 1, \f 4, \g 2, \h 4, \i 1, \j 8, \k 5, \l 1, \m 3, \n 1, \o 1, \p 3, \q 10, \r 1, \s 1, \t 1, \u 1, \v 4, \w 4, \x 8, \y 4, \z 10})

(def world (atom {
	:grid nil
	:current-player-id 0
	:tile-moved? false
	:players []}))

(defn player-count [world] (count (:players world)))
(defn grid-size [world] [(count ((:grid world) 0)) (count (:grid world))])

(defn split [sep s]
	(str/split s sep))

(def donut-board
"....######....
..####..####..
..##......##..
..####..####..
....######....")

(def test-neighbors-list
	(map (fn [x] [[0 x] [3 x]])
		(range 4)))

(def z-board
"#########
#########
###......
.###.....
..###....
...###...
....###..
.....###.
......###
#########
#########")

(def test-board-1
"#######
#.###.#
#######
###.###
#######
#.###.#
#######")

(def corners-board
"###...###
###...###
###...###
..#####..
..#####..
..#####..
###...###
###...###
###...###")

(def test2
"#####################
###.###.#####.###.###
#####################")

(def world-board
"...............##...#.####.##.##.....................................
...........#.##########.....###......####...###.....######....###....
..##############.####.##....##......####.##########......############
..#####################.##########.##############################.##.
..###################.###.#......##.##########################..##...
###......#################.......###.....######################......
..........#############..........#############.################......
...........#########............#######.##################.###.......
............########...........#########.#################..#........
.............#####..#####################.####.##..##..####..........
...............####..##.......############.###...###.######..........
.................########.......###########.##....#..######..........
...................########.......#.########.........############....
...................##########........######..#........####.##.#.###..
....................#########........######.##............###.#...##.
.....................#######..........########..........########...##
....................#######...........####..............#########..#.
....................######.............#.................#####.#...#.
....................######....................................##...#.
....................####......................................#......
....................###..............................................
......................##.............................................")

(def tile-turns-per-bonus 20)

(defn hand [] (dom/by-id :hand))
(defn played-words-table [] (dom/by-id :played-words))
(defn board [] (dom/by-id :board))
(defn alert [] (dom/by-id :alert))
(defn submit-button [] (dom/by-id :submit))
(defn clear-button [] (dom/by-id :clear))
(defn pass-button [] (dom/by-id :pass))

(defn current-player [world]
	((:players world) (:current-player-id world)))

(defn darken-color [color]
	(into {} (map (fn [[k v]] [k (.round js/Math (* 0.7 v))]) color)))

(defn hex-color->map [hex-color]
	(zipmap
		[:red :green :blue]
		(map #(js/parseInt % 16) (re-seq #".." hex-color))))

(def player-colors
	(vec (map hex-color->map [
		"ff8080" "78bef0" "ded16f" "cc66c9" "5dbaac" "f2a279" "7182e3" "92d169" "bf607c" "7cddf7"]))) 

(defn gen-players [player-count]
	(vec (for [n (range player-count)]
		{:id n :color (player-colors n) :name (str "Player " (inc n)) :played-words [] :tile-turns 0 :score 0})))

(defn color->css [color]
	(gs/format "rgb(%s)" (str/join "," 
		(map color [:red :green :blue]))))

(defn css-text [world]
	(apply str
		(for [{:keys [id color name]} (:players world)]
			(let [c (color->css color)]
				(gs/format 
					"#hand .player%d, #board .player%d {background-color: %s}
						#played-words .player%d {color: %s}
						#played-words td {width: %d%%}
						#hand .player%d.protected, #board .player%d.protected {background-color: %s}
						#played-words td:nth-child(%d) {color: %s}"
					id id c
						id c
						(/ 100 (player-count world))
						id id (color->css (darken-color color))
						(inc id) c)))))

(defn set-alert! [string]
	(dom/set-text! (alert) string))

(defn set-current-player-indicator! [player-id]
	(dom/remove-class! (css/sel (played-words-table) "th") "current")
	(dom/add-class! (css/sel (played-words-table) (str "th.player" player-id)) "current"))

(defn gen-css! [world]
	(dom/append! (css/sel "head")
		(dom/html-to-dom (gs/format "<style>%s</style>" (css-text world)))))

(defn gen-score-tds! [world]
	(doseq [n (range (player-count world))]
		(dom/append! (css/sel (played-words-table) "thead tr")
			(doto (dom/html-to-dom "<th>")
				(dom/add-class! (gs/format "player%d" n))
				(dom/set-text! "Z")))))

(defn make-td [tile row-index col-index]
	(if tile
		(doto (dom/html-to-dom "<td/>")
			(dom/set-text! (str (:letter tile)))
			(dom/append! (dom/html-to-dom
				(gs/format "<span>%d</span>" (letter-scores (:letter tile)))))
			(dom/set-attr! :id (str "board-" row-index "-" col-index))
			(events/listen! :click on-board-click))
		(dom/html-to-dom "<td/>")))

(defn make-tr [row row-index]
	(let [node (dom/html-to-dom "<tr/>")]
		(doseq [col-index (range (count row))]
			(dom/append! node (make-td (row col-index) row-index col-index)))
		node))

(defn gen-grid! [grid]
	(doseq [row-index (range (count grid))]
		(dom/append! (css/sel (board) "tbody")
			(make-tr (grid row-index) row-index))))

(defn gen-html! [world]
	(gen-score-tds! world)
	(gen-grid! (:grid world)))

(def tile-moved? (atom false))

(defn prrt 
	([thing]
		(.log js/console (str thing "\n"))
		thing)
	([label thing]
		(.log js/console (str label ": " thing "\n"))
		thing))


(def alphabet [\a \b \c \d \e \f \g \h \i \j \k \l \m \n \o \p \q \r \s \t \u \v \w \x \y \z])

(def vowels [\a \e \i \o \u])

(def weighted-alphabet {\e 15 \t 13 \a 14 \o 10 \i 12 \n 12 \s 12 \r 12 \h 7 \d 10 \l 9 \u 8 \c 7 \m 9 \f 9 \y 2 \w 2 \g 13 \p 2 \b 3 \v 2 \k 1 \x 2 \q 2 \j 2 \z 2})

;;(defn random-letter [] (alphabet (rand-int (count alphabet))))

;; This function is from the Clojure library "roul". I have copied it here because of difficulties using said library in ClojureScript.
(defn rand-nth-weighted [coll]
	(let [total (reduce + (map second coll))]
		(loop [
					i (rand total)
					[[choice weight] & remaining] (seq coll)]
			(if (>= weight i)
				choice
				(recur (- i weight) remaining)))))

(defn random-letter [] (rand-nth-weighted weighted-alphabet))

(defn make-tile [row col] {:letter (random-letter) :player-id nil :pos [row col] :neighbors []})

;coordinate pair list must be thus: [[[tile1row tile1column] [t2r t2c]] [[t3...

(defn connect-tiles [grid [[ay ax] [by bx]]]
	(-> grid
		(update-in [ay ax :neighbors] conj [by bx])
		(update-in [by bx :neighbors] conj [ay ax])))

;;(defn parse-neighbors [s]
;;	(partition 2 (partition 2
;;		(map js/parseInt
;;			(mapcat (partial split #" ")
;;				(str/splitlines s))))))

;"0,0 4,0
;0,1 4,1" etc.
;->
;[[[0 0] [4 0]]
;[[0 1] [4 1]]] etc.
(defn parse-neighbors [s]
	(walk/prewalk (fn [x] (if (string? x) (js/parseInt x) x))
		(map (partial map (partial split #","))
			(map (partial split #" ")
				(str/split-lines s)))))

(defn char->tile [row col tile-char]
	(condp = tile-char
		\# (make-tile row col)
		\. nil))

(defn char-row->tile-row [char-row row-index]
	(vec (map (partial char->tile row-index) (range (count char-row)) char-row)))

(defn parse-board [board-str]
	(let [rows (str/split board-str #"\n")]
		(vec (map char-row->tile-row rows (range (count rows))))))

(defn parse-level [level-text]
	(let [[board-text neighbors-text] (split #"\n\n" (str/trim level-text))]
		(reduce connect-tiles 
			(parse-board board-text)
			(parse-neighbors neighbors-text))))

(defn get-file [filename]
	(.-responseText
		(doto (js/XMLHttpRequest.)
			(.open "GET" filename false)
			(.send nil))))

;;(defn make-null-tile [] {:letter nil})

(defn make-row [w row-index] 
	(vec (map (partial make-tile row-index) (range w))))

(defn tile-seq [grid]
	(apply concat grid))

(defn scorable-tiles [grid]
	(count (filter (comp not nil? :letter) (tile-seq grid))))

(defn letter-in-grid? [letter grid]
	(some (comp #{letter} :letter) (tile-seq grid)))

;;(defn grid-ok? [grid]
;;	(let [
;;			current-letters (get-value-list grid :letter)
;;			current-vowels (filter (set vowels) current-letters)
;;			vowel-percentage (/ (count current-vowels) (count current-letters))]
;;        (and
;;            (< 0.2 vowel-percentage 0.5)
;;            (and
;;                (letter-in-grid? \q grid)
;;                (not (letter-in-grid? \i grid))))))

(defn grid-ok? [grid]
	true)

(defn make-grid-draft [w h]
	(vec
		(map (partial make-row w) (range h))))

(defn make-grid [w h]
	(first (filter grid-ok? (repeatedly (partial make-grid-draft w h)))))

(defn fix-grid [grid]
	(let [
			current-letters (map :letter (tile-seq grid))
			current-vowels (filter (set vowels) current-letters)
			row (rand-int (count grid))
			col (rand-int (count (grid 0)))]
		(cond 
			(> 5 (count current-vowels))
				(fix-grid (assoc-in grid [row col :letter] (vowels (rand-int 5))))
			(and
				(letter-in-grid? \q grid)
				(not (letter-in-grid? \i grid)))
					(assoc-in grid [row col :letter] \i)
			:else
				grid)))

(defn index-in [coll tile]
	(first (keep-indexed 
		(fn [col-index item]
			(when (identical? item tile)
				col-index))
		coll)))

(defn square->str [{:keys [letter player]}]
	(str (str/upper-case letter) ({0 \* 1 \#} player \space)))

(defn row->str [row]
	(str/join (map square->str row)))

(defn grid->str [grid]
	(str/join "\n" (map row->str grid)))

(defn parse-int-string [[c1 c2]]
	(map #(Integer/parseInt (str %)) [c1 c2]))

(defn parse-move [movestr]
	(map parse-int-string (str/split movestr #" ")))

(defn load-dict []
	(reduce conj #{}
		(str/split-lines
			(get-file "dict.txt"))))

(def dict (load-dict))

(defn grid-size [grid]
	(vec (map count [(grid 0) grid])))

(defn in-grid? [grid movelet]
	(and
		(not-any? neg? movelet)	
		(every? identity (map > (grid-size grid) movelet))))

(defn move->word [move]
	(str/join (map :letter move)))

(defn is-prefix? [s1 s2]
	(let [n (count s1)]
		(and 
			(<= n (count s2))
			(= (subs s2 0 n) s1))))

(defn hand-table->move [grid]
	(for [td (dom/children (css/sel (hand) "tbody tr"))]
		(get-in grid (map js/parseInt (rest (str/split (dom/attr td :id) "-"))))))

(defn hand-empty? [grid]
	(empty? (hand-table->move grid)))

(defn neighbors [grid {[row col] :pos :as tile}]
	(keep (partial get-in grid) 
		(concat (:neighbors tile) [
			[(dec row) col]
			[row (dec col)]
			[(inc row) col]
			[row (inc col)]])))

(defn depth-first-search [grid tilesets tile]
	(if ((apply some-fn tilesets) tile)
		(reduce (partial depth-first-search grid)
			(map #(disj % tile) tilesets)
			(neighbors grid tile))
		tilesets))

(defn player-tiles [grid player]
	(filter (comp #{(:id player)} :player-id) (tile-seq grid)))

;;(defn inc-tile-turns [world]
;;	(let [player (current-player world)]
;;		(update-in world [:players (:current-player-id world) :tile-turns] + 
;;			(count (filter (comp #{(:id player)} :player-id) (tile-seq (:grid world)))))))

(defn tile-list-score [tile-list]
	(apply + (map letter-scores (map :letter tile-list))))

(defn inc-tile-turns [world]
	(let [player (current-player world)]
		(update-in world [:players (:current-player-id world) :tile-turns] + 
			(tile-list-score (filter (comp #{(:id player)} :player-id) (tile-seq (:grid world)))))))

(defn inc-scores [world]
	(let [player (current-player world)]
		(update-in world [:players (:current-player-id world) :score] +
			(apply + (map letter-scores
				(map :letter (player-tiles (:grid world) player)))))))

(defn adjacent-unowned-tiles [world]
	(let [
			player (current-player world)
			grid (:grid world)]
		(filter (comp not #{(:id player)} :player-id)
			(mapcat (partial neighbors grid)
				(player-tiles grid player)))))

(defn unreachable-tiles [grid move player]
	(loop [[owned-tiles hand-tiles] (map set [(player-tiles grid player) move])]
		(if-let [tile (first owned-tiles)]
			(recur (depth-first-search grid [owned-tiles hand-tiles] tile))
			hand-tiles)))

(defn move-invalidation [world move]
	(let [
			word (move->word move)
			all-played-words (mapcat :played-words (:players world))
			prefix (first (filter (partial is-prefix? word) all-played-words))
			unreachable-tiles (unreachable-tiles (:grid world) move (current-player world))
			first-move? (empty? (:played-words (current-player world)))]
		(cond
			prefix
				(gs/format "%s, which begins with %s, has already been played." (str/upper-case prefix) (str/upper-case word))
			(not (dict word))
				(gs/format "%s is not in the current word list." (str/upper-case word))
			(and first-move? (seq (second (depth-first-search (:grid world) [#{} (set move)] (first move)))))
				"Your first move must be continuous."
			(and (not first-move?) (seq unreachable-tiles))
				"Your move must be continuous with your territory.")))

(defn get-tile [grid td]
	(when-let [id (dom/attr td :id)]
		(get-in grid (map js/parseInt (rest (str/split id "-"))))))

;;	(get-in grid (map js/parseInt (rest (str/split (dom/attr td :id) "-")))))

(declare add-hand-tile!)

(declare apply-move-to-grid)

(defn tile-protected? [grid tile]
	(and
		(:player-id tile)
		(apply = (map :player-id (conj (neighbors grid tile) tile)))))

;Old version - 1 pt per tile
;;(defn player-score [grid player]
;;	(count (filter (comp #{(:id player)} :player-id) (tile-seq grid))))

(defn player-score [grid player]
	(tile-list-score (filter (comp #{(:id player)} :player-id) (tile-seq grid))))

;Also old version
;;(defn adjusted-score [world player move]
;;	(+ (player-score (:grid world) player)
;;		(if (= (:id player) (:current-player-id world))
;;			(count (remove (comp #{(:id player)} :player-id) move))
;;			(- (count (filter (comp #{(:id player)} :player-id) move))))))

(defn adjusted-score [world player move]
	(+ (player-score (:grid world) player)
		(if (= (:id player) (:current-player-id world))
			(tile-list-score (remove (comp #{(:id player)} :player-id) move))
			(- (tile-list-score (filter (comp #{(:id player)} :player-id) move))))))

(defn redraw-score! [world move player]
	(dom/set-text! (css/sel (played-words-table) (str "thead .player" (:id player)))
		(str (adjusted-score world player move) " " "(" (quot (:tile-turns player) tile-turns-per-bonus) ")")))

(defn redraw-scores! [world move]
	(doseq [player (:players world)]
		(redraw-score! world move player)))
;;		(dom/set-text! (css/sel (played-words-table) (str "thead .player" (:id player)))
;;			(str (adjusted-score world player move)))))

(defn vec-dissoc [v i]
	(vec (concat (take i v) (drop (inc i) v))))

(declare redraw-board!)

(declare redraw-tile!)

(defn ^:export sortChange [{td :target}]
	(reset! tile-moved? true))

(defn add-hand-tile! [grid tile]
	(let [[col row] (:pos tile)]
		(dom/append! (css/sel (hand) "tbody tr")
			(doto (dom/html-to-dom "<td/>")
				(dom/set-text! (:letter tile))
				(dom/append! (dom/html-to-dom
					(gs/format "<span>%d</span>" (letter-scores (:letter tile)))))
				(events/listen! :mousedown on-hand-mouse-down)
				(events/listen! :mouseup on-hand-click)
				(dom/set-attr! :id (str "hand-" col "-" row))
				(dom/set-classes! 
					(filter identity [
						(str "player" (:player-id tile))
						(when (tile-protected? grid tile) "protected")]))))))

;;(defn redraw-tile [td]
;;	(let [tile (get-tile td)]
;;		(dom/set-classes! td
;;			(filter identity [
;;				(str "player" (:player tile))
;;				(when (tile-protected? tile) "protected")
;;				(when (some #{tile} @hand) "hidden")]))))

(defn redraw-tile! [grid tile move]
	(let [[y x] (:pos tile)]
		(dom/set-classes! (dom/by-id (gs/format "board-%d-%d" y x))
			(filter identity [
				(str "player" (:player-id tile))
				(when (tile-protected? grid tile) "protected")
				(when (some #{tile} move) "hidden")]))))

(defn redraw-board! [world]
	(doseq [td (dom/children (css/sel (board) "tr"))]
		(let [tile (get-tile (:grid world) td)]
			(dom/set-classes! td
				(filter identity [
					(str "player" (:player-id tile))
					(when-not tile "hidden")
					(when (tile-protected? (:grid world) tile) "protected")])))))

(defn apply-move-to-grid [grid move player]
	(reduce
		(fn [grid tile]
			(let [[col row] (:pos tile)]
				(if (tile-protected? grid tile) grid
					(assoc-in grid [col row :player-id] (:id player)))))
		grid
		move))

;;(defn grant-bonus-tiles [world]
;;	(let [
;;			player (current-player world)
;;			bonus-tile-count (quot (:tile-turns player) tile-turns-per-bonus)
;;			bonus-tiles 
;;				(take bonus-tile-count 
;;					(shuffle (adjacent-unowned-tiles world)))]
;;		(-> world
;;			(update-in [:grid] 
;;				apply-move-to-grid bonus-tiles ((:players world) (:current-player-id world)))
;;			(update-in [:players (:current-player-id world) :tile-turns]
;;				- (* bonus-tile-count tile-turns-per-bonus)))))

(defn clear-hand! []
	(dom/destroy-children! (css/sel (hand) "tbody tr")))

(defn add-text [element text]
	(let [
			current (dom/text element)
			extra (when-not (= "" current) " ")]
	(dom/set-text! element (str current extra text))))

(defn increment-turn [world]
	(update-in world [:current-player-id] (fn [id] (mod (inc id) (player-count world)))))

(defn apply-move [world move]
	(-> world
		(update-in [:grid] 
			apply-move-to-grid move ((:players world) (:current-player-id world)))
		(update-in [:players (:current-player-id world) :played-words]
			conj (move->word move))
		(increment-turn)
		(inc-tile-turns)
		(inc-scores)))
;;		(grant-bonus-tiles)))

(defn redraw-played-words! [world]
	(let [
			tbody (css/sel (played-words-table) "tbody")
			players (:players world)]
		(dom/destroy-children! tbody)
		(doseq [n (range (count (:played-words (players 0))))]
			(dom/append! tbody 
				(reduce dom/append! (dom/html-to-dom "<tr/>")
					(for [player players]
						(dom/html-to-dom (gs/format "<td>%s</td>"
							(let [word (get (:played-words player) n)]
								(condp = word
									"" "-"
									nil ""
									word))))))))))

(defn redraw! [world]
	(redraw-played-words! world)
	(redraw-board! world)
	(set-alert! "")
	(redraw-scores! world (hand-table->move (:grid world)))
	(set-current-player-indicator! (:current-player-id world)))

(defn victory-message [world]
	(let [
			players-with-scores
				(for [player (:players world)]
					(merge player {:score (player-score (:grid world) player)}))
			max-score (apply max (map :score players-with-scores))
			winning-players (filter (comp #{max-score} :score) players-with-scores)]
		(condp = (count winning-players)
			1
				(gs/format "%s has emerged victorious!" (:name (first winning-players)))
			2
				(apply gs/format "The game is a draw between %s and %s!" (map :name winning-players))
			(str "The game is a draw among " (apply str/join (map :name (butlast winning-players)) ", ") ", and " (:name (last winning-players)) "!"))))

(defn on-submit-click []
	(let [
			world-state @world
			move (hand-table->move (:grid world-state))
			word (move->word move)]
		(if-let [error (move-invalidation world-state move)]
			(set-alert! error)
			(let [
					world (reset! world (apply-move world-state move))	
					scores (map (partial player-score (:grid world)) (:players world))]
				(clear-hand!)
				(redraw! world)
				(when (empty? (filter :letter (remove (partial = (:current-player-id world-state)) (tile-seq (:grid world)))))
;;				(when (empty? (filter :letter (remove :player-id (tile-seq (:grid world)))))
					(set-alert! (victory-message world)))))))

(defn on-pass-click []
	(clear-hand!)
	(redraw! (swap! world apply-move [])))

(defn grab-bonus-tile! [tile]
	(let [
			[row col] (:pos tile)
			current-player-id (:current-player-id @world)]
		(swap! world assoc-in [:grid row col :player-id] (:current-player-id @world))
		(redraw! (swap! world update-in [:players current-player-id :tile-turns] - tile-turns-per-bonus))))

(defn on-board-click [e]
	(let [
			td (:target e)
			{grid :grid :as world} @world
			tile (get-tile grid td)]
		(when-not (and (tile-protected? grid tile) (not= (:player-id tile) (:current-player-id world)))
			(if-not (:shiftKey e)
				(do
					(add-hand-tile! grid tile)
					(let [move (hand-table->move grid)]
						(redraw-scores! world move)
						(redraw-tile! grid tile move)))
				(when (and
					(hand-empty? grid)
					(not (seq (unreachable-tiles grid (conj (hand-table->move grid) tile) (current-player world))))
					(>= (:tile-turns (current-player world)) tile-turns-per-bonus))
					(grab-bonus-tile! tile))))))

(defn on-hand-mouse-down [{div :target}]
	(reset! tile-moved? false))

(defn on-hand-click [{td :target}]
	(let [
			world @world
			board-tile (get-in (:grid world) (map js/parseInt (rest (str/split (dom/attr td :id) "-"))))
			move (hand-table->move (:grid world))]
		(when-not @tile-moved?
;;			(reset! current-grid (apply-move @grid move @current-player))
			(reset! tile-moved? false)
			(dom/destroy! td)
			(let [move (hand-table->move (:grid world))]
				(redraw-scores! world move)
				(redraw-tile! (:grid world) board-tile move)))))

(defn on-clear-click []
	(let [world @world]
		(clear-hand!)
		(set-alert! "")
		(redraw-scores! world (hand-table->move (:grid world)))
		(redraw-board! world)))

(defn param-map []
	(into {} 
		(map (fn [[k v]]
			[(keyword k)
				(if (#{"players" "width" "height"} k)
					(js/parseInt v)
					v)])
			(map (partial split "=")
				(split "&"
					(second (split  "?" (.-URL js/document))))))))

(defn ^:export main []
	(let [
			{:keys [players width height level]} (param-map)
			players (gen-players players)
			world 
				(swap! world merge {
					:grid (make-grid width height)
;;					:grid
;;						(parse-level (get-file (str "levels/" level)))
					:players players})]
		(gen-css! world)
		(gen-html! world)
		(set-current-player-indicator! 0)
		(redraw! world)
		(events/listen! (clear-button) :click on-clear-click)
		(events/listen! (submit-button) :click on-submit-click)
		(events/listen! (pass-button) :click on-pass-click)))
