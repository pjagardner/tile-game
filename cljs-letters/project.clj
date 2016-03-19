(defproject cljs-letters "1.0.0-SNAPSHOT"
;;	:main letters
	:description "An implementation and expansion of Letterpress in Clojurescript"
;;	:source-paths ["clojurescript/src/cljs" "clojurescript/src/clj"]
	:dependencies [
					[org.clojure/clojurescript "0.0-2127"]
					[org.clojure/clojure "1.5.1"]
					[domina "1.0.1"]
					[org.clojure/data.json "0.2.2"]]
	:externs ["redips-drag-min.js"]
	:plugins [[lein-cljsbuild "1.0.1"]]
	:cljsbuild {
		:builds [{
			:source-paths ["src"]}]})
