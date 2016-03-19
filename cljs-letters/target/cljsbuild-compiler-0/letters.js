// Compiled by ClojureScript 0.0-2127
goog.provide('letters');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('domina.events');
goog.require('goog.string');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.string.format');
goog.require('clojure.walk');
goog.require('domina.xpath');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.string');
goog.require('domina.css');
goog.require('domina.css');
goog.require('domina.xpath');
letters.letter_scores = cljs.core.PersistentHashMap.fromArrays(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],[1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]);
letters.world = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid","grid",1017085624),null,new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501),0,new cljs.core.Keyword(null,"tile-moved?","tile-moved?",2075190109),false,new cljs.core.Keyword(null,"players","players",520336676),cljs.core.PersistentVector.EMPTY], null));
letters.player_count = (function player_count(world){return cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));
});
letters.grid_size = (function grid_size(world){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world).call(null,0)),cljs.core.count.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world))], null);
});
letters.split = (function split(sep,s){return clojure.string.split.call(null,s,sep);
});
letters.donut_board = "....######....\n..####..####..\n..##......##..\n..####..####..\n....######....";
letters.test_neighbors_list = cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,x], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,x], null)], null);
}),cljs.core.range.call(null,4));
letters.z_board = "#########\n#########\n###......\n.###.....\n..###....\n...###...\n....###..\n.....###.\n......###\n#########\n#########";
letters.test_board_1 = "#######\n#.###.#\n#######\n###.###\n#######\n#.###.#\n#######";
letters.corners_board = "###...###\n###...###\n###...###\n..#####..\n..#####..\n..#####..\n###...###\n###...###\n###...###";
letters.test2 = "#####################\n###.###.#####.###.###\n#####################";
letters.world_board = "...............##...#.####.##.##.....................................\n...........#.##########.....###......####...###.....######....###....\n..##############.####.##....##......####.##########......############\n..#####################.##########.##############################.##.\n..###################.###.#......##.##########################..##...\n###......#################.......###.....######################......\n..........#############..........#############.################......\n...........#########............#######.##################.###.......\n............########...........#########.#################..#........\n.............#####..#####################.####.##..##..####..........\n...............####..##.......############.###...###.######..........\n.................########.......###########.##....#..######..........\n...................########.......#.########.........############....\n...................##########........######..#........####.##.#.###..\n....................#########........######.##............###.#...##.\n.....................#######..........########..........########...##\n....................#######...........####..............#########..#.\n....................######.............#.................#####.#...#.\n....................######....................................##...#.\n....................####......................................#......\n....................###..............................................\n......................##.............................................";
letters.tile_turns_per_bonus = 20;
letters.hand = (function hand(){return domina.by_id.call(null,new cljs.core.Keyword(null,"hand","hand",1017099233));
});
letters.played_words_table = (function played_words_table(){return domina.by_id.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945));
});
letters.board = (function board(){return domina.by_id.call(null,new cljs.core.Keyword(null,"board","board",1107812952));
});
letters.alert = (function alert__$1(){return domina.by_id.call(null,new cljs.core.Keyword(null,"alert","alert",1106803918));
});
letters.submit_button = (function submit_button(){return domina.by_id.call(null,new cljs.core.Keyword(null,"submit","submit",4417336202));
});
letters.clear_button = (function clear_button(){return domina.by_id.call(null,new cljs.core.Keyword(null,"clear","clear",1108650431));
});
letters.pass_button = (function pass_button(){return domina.by_id.call(null,new cljs.core.Keyword(null,"pass","pass",1017337731));
});
letters.current_player = (function current_player(world){return new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world).call(null,new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world));
});
letters.darken_color = (function darken_color(color){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__59611){var vec__59612 = p__59611;var k = cljs.core.nth.call(null,vec__59612,0,null);var v = cljs.core.nth.call(null,vec__59612,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,Math.round((0.7 * v))], null);
}),color));
});
letters.hex_color__GT_map = (function hex_color__GT_map(hex_color){return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"blue","blue",1016931276)], null),cljs.core.map.call(null,(function (p1__59613_SHARP_){return parseInt(p1__59613_SHARP_,16);
}),cljs.core.re_seq.call(null,/../,hex_color)));
});
letters.player_colors = cljs.core.vec.call(null,cljs.core.map.call(null,letters.hex_color__GT_map,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ff8080","78bef0","ded16f","cc66c9","5dbaac","f2a279","7182e3","92d169","bf607c","7cddf7"], null)));
letters.gen_players = (function gen_players(player_count){return cljs.core.vec.call(null,(function (){var iter__4101__auto__ = (function iter__59618(s__59619){return (new cljs.core.LazySeq(null,(function (){var s__59619__$1 = s__59619;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__59619__$1);if(temp__4092__auto__)
{var s__59619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59619__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59619__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59621 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59620 = 0;while(true){
if((i__59620 < size__4100__auto__))
{var n = cljs.core._nth.call(null,c__4099__auto__,i__59620);cljs.core.chunk_append.call(null,b__59621,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",1013907597),n,new cljs.core.Keyword(null,"color","color",1108746965),letters.player_colors.call(null,n),new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Player "),cljs.core.str((n + 1))].join(''),new cljs.core.Keyword(null,"played-words","played-words",4431286945),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425),0,new cljs.core.Keyword(null,"score","score",1123168772),0], null));
{
var G__59622 = (i__59620 + 1);
i__59620 = G__59622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59621),iter__59618.call(null,cljs.core.chunk_rest.call(null,s__59619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59621),null);
}
} else
{var n = cljs.core.first.call(null,s__59619__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",1013907597),n,new cljs.core.Keyword(null,"color","color",1108746965),letters.player_colors.call(null,n),new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Player "),cljs.core.str((n + 1))].join(''),new cljs.core.Keyword(null,"played-words","played-words",4431286945),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425),0,new cljs.core.Keyword(null,"score","score",1123168772),0], null),iter__59618.call(null,cljs.core.rest.call(null,s__59619__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4101__auto__.call(null,cljs.core.range.call(null,player_count));
})());
});
letters.color__GT_css = (function color__GT_css(color){return goog.string.format("rgb(%s)",clojure.string.join.call(null,",",cljs.core.map.call(null,color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",1014017027),new cljs.core.Keyword(null,"green","green",1112523381),new cljs.core.Keyword(null,"blue","blue",1016931276)], null))));
});
letters.css_text = (function css_text(world){return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4101__auto__ = (function iter__59631(s__59632){return (new cljs.core.LazySeq(null,(function (){var s__59632__$1 = s__59632;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__59632__$1);if(temp__4092__auto__)
{var s__59632__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59632__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59632__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59634 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59633 = 0;while(true){
if((i__59633 < size__4100__auto__))
{var map__59637 = cljs.core._nth.call(null,c__4099__auto__,i__59633);var map__59637__$1 = ((cljs.core.seq_QMARK_.call(null,map__59637))?cljs.core.apply.call(null,cljs.core.hash_map,map__59637):map__59637);var name = cljs.core.get.call(null,map__59637__$1,new cljs.core.Keyword(null,"name","name",1017277949));var color = cljs.core.get.call(null,map__59637__$1,new cljs.core.Keyword(null,"color","color",1108746965));var id = cljs.core.get.call(null,map__59637__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.chunk_append.call(null,b__59634,(function (){var c = letters.color__GT_css.call(null,color);return goog.string.format("#hand .player%d, #board .player%d {background-color: %s}\n\t\t\t\t\t\t#played-words .player%d {color: %s}\n\t\t\t\t\t\t#played-words td {width: %d%%}\n\t\t\t\t\t\t#hand .player%d.protected, #board .player%d.protected {background-color: %s}\n\t\t\t\t\t\t#played-words td:nth-child(%d) {color: %s}",id,id,c,id,c,(100 / letters.player_count.call(null,world)),id,id,letters.color__GT_css.call(null,letters.darken_color.call(null,color)),(id + 1),c);
})());
{
var G__59639 = (i__59633 + 1);
i__59633 = G__59639;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59634),iter__59631.call(null,cljs.core.chunk_rest.call(null,s__59632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59634),null);
}
} else
{var map__59638 = cljs.core.first.call(null,s__59632__$2);var map__59638__$1 = ((cljs.core.seq_QMARK_.call(null,map__59638))?cljs.core.apply.call(null,cljs.core.hash_map,map__59638):map__59638);var name = cljs.core.get.call(null,map__59638__$1,new cljs.core.Keyword(null,"name","name",1017277949));var color = cljs.core.get.call(null,map__59638__$1,new cljs.core.Keyword(null,"color","color",1108746965));var id = cljs.core.get.call(null,map__59638__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.cons.call(null,(function (){var c = letters.color__GT_css.call(null,color);return goog.string.format("#hand .player%d, #board .player%d {background-color: %s}\n\t\t\t\t\t\t#played-words .player%d {color: %s}\n\t\t\t\t\t\t#played-words td {width: %d%%}\n\t\t\t\t\t\t#hand .player%d.protected, #board .player%d.protected {background-color: %s}\n\t\t\t\t\t\t#played-words td:nth-child(%d) {color: %s}",id,id,c,id,c,(100 / letters.player_count.call(null,world)),id,id,letters.color__GT_css.call(null,letters.darken_color.call(null,color)),(id + 1),c);
})(),iter__59631.call(null,cljs.core.rest.call(null,s__59632__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4101__auto__.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));
})());
});
letters.set_alert_BANG_ = (function set_alert_BANG_(string){return domina.set_text_BANG_.call(null,letters.alert.call(null),string);
});
letters.set_current_player_indicator_BANG_ = (function set_current_player_indicator_BANG_(player_id){domina.remove_class_BANG_.call(null,domina.css.sel.call(null,letters.played_words_table.call(null),"th"),"current");
return domina.add_class_BANG_.call(null,domina.css.sel.call(null,letters.played_words_table.call(null),[cljs.core.str("th.player"),cljs.core.str(player_id)].join('')),"current");
});
letters.gen_css_BANG_ = (function gen_css_BANG_(world){return domina.append_BANG_.call(null,domina.css.sel.call(null,"head"),domina.html_to_dom.call(null,goog.string.format("<style>%s</style>",letters.css_text.call(null,world))));
});
letters.gen_score_tds_BANG_ = (function gen_score_tds_BANG_(world){var seq__59646 = cljs.core.seq.call(null,cljs.core.range.call(null,letters.player_count.call(null,world)));var chunk__59647 = null;var count__59648 = 0;var i__59649 = 0;while(true){
if((i__59649 < count__59648))
{var n = cljs.core._nth.call(null,chunk__59647,i__59649);domina.append_BANG_.call(null,domina.css.sel.call(null,letters.played_words_table.call(null),"thead tr"),(function (){var G__59650 = domina.html_to_dom.call(null,"<th>");domina.add_class_BANG_.call(null,G__59650,goog.string.format("player%d",n));
domina.set_text_BANG_.call(null,G__59650,"Z");
return G__59650;
})());
{
var G__59652 = seq__59646;
var G__59653 = chunk__59647;
var G__59654 = count__59648;
var G__59655 = (i__59649 + 1);
seq__59646 = G__59652;
chunk__59647 = G__59653;
count__59648 = G__59654;
i__59649 = G__59655;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__59646);if(temp__4092__auto__)
{var seq__59646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59646__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__59646__$1);{
var G__59656 = cljs.core.chunk_rest.call(null,seq__59646__$1);
var G__59657 = c__4132__auto__;
var G__59658 = cljs.core.count.call(null,c__4132__auto__);
var G__59659 = 0;
seq__59646 = G__59656;
chunk__59647 = G__59657;
count__59648 = G__59658;
i__59649 = G__59659;
continue;
}
} else
{var n = cljs.core.first.call(null,seq__59646__$1);domina.append_BANG_.call(null,domina.css.sel.call(null,letters.played_words_table.call(null),"thead tr"),(function (){var G__59651 = domina.html_to_dom.call(null,"<th>");domina.add_class_BANG_.call(null,G__59651,goog.string.format("player%d",n));
domina.set_text_BANG_.call(null,G__59651,"Z");
return G__59651;
})());
{
var G__59660 = cljs.core.next.call(null,seq__59646__$1);
var G__59661 = null;
var G__59662 = 0;
var G__59663 = 0;
seq__59646 = G__59660;
chunk__59647 = G__59661;
count__59648 = G__59662;
i__59649 = G__59663;
continue;
}
}
} else
{return null;
}
}
break;
}
});
letters.make_td = (function make_td(tile,row_index,col_index){if(cljs.core.truth_(tile))
{var G__59665 = domina.html_to_dom.call(null,"<td/>");domina.set_text_BANG_.call(null,G__59665,[cljs.core.str(new cljs.core.Keyword(null,"letter","letter",4202698648).cljs$core$IFn$_invoke$arity$1(tile))].join(''));
domina.append_BANG_.call(null,G__59665,domina.html_to_dom.call(null,goog.string.format("<span>%d</span>",letters.letter_scores.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648).cljs$core$IFn$_invoke$arity$1(tile)))));
domina.set_attr_BANG_.call(null,G__59665,new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str("board-"),cljs.core.str(row_index),cljs.core.str("-"),cljs.core.str(col_index)].join(''));
domina.events.listen_BANG_.call(null,G__59665,new cljs.core.Keyword(null,"click","click",1108654330),letters.on_board_click);
return G__59665;
} else
{return domina.html_to_dom.call(null,"<td/>");
}
});
letters.make_tr = (function make_tr(row,row_index){var node = domina.html_to_dom.call(null,"<tr/>");var seq__59670_59674 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row)));var chunk__59671_59675 = null;var count__59672_59676 = 0;var i__59673_59677 = 0;while(true){
if((i__59673_59677 < count__59672_59676))
{var col_index_59678 = cljs.core._nth.call(null,chunk__59671_59675,i__59673_59677);domina.append_BANG_.call(null,node,letters.make_td.call(null,row.call(null,col_index_59678),row_index,col_index_59678));
{
var G__59679 = seq__59670_59674;
var G__59680 = chunk__59671_59675;
var G__59681 = count__59672_59676;
var G__59682 = (i__59673_59677 + 1);
seq__59670_59674 = G__59679;
chunk__59671_59675 = G__59680;
count__59672_59676 = G__59681;
i__59673_59677 = G__59682;
continue;
}
} else
{var temp__4092__auto___59683 = cljs.core.seq.call(null,seq__59670_59674);if(temp__4092__auto___59683)
{var seq__59670_59684__$1 = temp__4092__auto___59683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59670_59684__$1))
{var c__4132__auto___59685 = cljs.core.chunk_first.call(null,seq__59670_59684__$1);{
var G__59686 = cljs.core.chunk_rest.call(null,seq__59670_59684__$1);
var G__59687 = c__4132__auto___59685;
var G__59688 = cljs.core.count.call(null,c__4132__auto___59685);
var G__59689 = 0;
seq__59670_59674 = G__59686;
chunk__59671_59675 = G__59687;
count__59672_59676 = G__59688;
i__59673_59677 = G__59689;
continue;
}
} else
{var col_index_59690 = cljs.core.first.call(null,seq__59670_59684__$1);domina.append_BANG_.call(null,node,letters.make_td.call(null,row.call(null,col_index_59690),row_index,col_index_59690));
{
var G__59691 = cljs.core.next.call(null,seq__59670_59684__$1);
var G__59692 = null;
var G__59693 = 0;
var G__59694 = 0;
seq__59670_59674 = G__59691;
chunk__59671_59675 = G__59692;
count__59672_59676 = G__59693;
i__59673_59677 = G__59694;
continue;
}
}
} else
{}
}
break;
}
return node;
});
letters.gen_grid_BANG_ = (function gen_grid_BANG_(grid){var seq__59699 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,grid)));var chunk__59700 = null;var count__59701 = 0;var i__59702 = 0;while(true){
if((i__59702 < count__59701))
{var row_index = cljs.core._nth.call(null,chunk__59700,i__59702);domina.append_BANG_.call(null,domina.css.sel.call(null,letters.board.call(null),"tbody"),letters.make_tr.call(null,grid.call(null,row_index),row_index));
{
var G__59703 = seq__59699;
var G__59704 = chunk__59700;
var G__59705 = count__59701;
var G__59706 = (i__59702 + 1);
seq__59699 = G__59703;
chunk__59700 = G__59704;
count__59701 = G__59705;
i__59702 = G__59706;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__59699);if(temp__4092__auto__)
{var seq__59699__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59699__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__59699__$1);{
var G__59707 = cljs.core.chunk_rest.call(null,seq__59699__$1);
var G__59708 = c__4132__auto__;
var G__59709 = cljs.core.count.call(null,c__4132__auto__);
var G__59710 = 0;
seq__59699 = G__59707;
chunk__59700 = G__59708;
count__59701 = G__59709;
i__59702 = G__59710;
continue;
}
} else
{var row_index = cljs.core.first.call(null,seq__59699__$1);domina.append_BANG_.call(null,domina.css.sel.call(null,letters.board.call(null),"tbody"),letters.make_tr.call(null,grid.call(null,row_index),row_index));
{
var G__59711 = cljs.core.next.call(null,seq__59699__$1);
var G__59712 = null;
var G__59713 = 0;
var G__59714 = 0;
seq__59699 = G__59711;
chunk__59700 = G__59712;
count__59701 = G__59713;
i__59702 = G__59714;
continue;
}
}
} else
{return null;
}
}
break;
}
});
letters.gen_html_BANG_ = (function gen_html_BANG_(world){letters.gen_score_tds_BANG_.call(null,world);
return letters.gen_grid_BANG_.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world));
});
letters.tile_moved_QMARK_ = cljs.core.atom.call(null,false);
letters.prrt = (function() {
var prrt = null;
var prrt__1 = (function (thing){console.log([cljs.core.str(thing),cljs.core.str("\n")].join(''));
return thing;
});
var prrt__2 = (function (label,thing){console.log([cljs.core.str(label),cljs.core.str(": "),cljs.core.str(thing),cljs.core.str("\n")].join(''));
return thing;
});
prrt = function(label,thing){
switch(arguments.length){
case 1:
return prrt__1.call(this,label);
case 2:
return prrt__2.call(this,label,thing);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prrt.cljs$core$IFn$_invoke$arity$1 = prrt__1;
prrt.cljs$core$IFn$_invoke$arity$2 = prrt__2;
return prrt;
})()
;
letters.alphabet = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], null);
letters.vowels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e","i","o","u"], null);
letters.weighted_alphabet = cljs.core.PersistentHashMap.fromArrays(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],[14,3,7,10,15,9,13,7,12,2,1,9,9,12,10,2,2,12,12,13,8,2,2,2,2,2]);
letters.rand_nth_weighted = (function rand_nth_weighted(coll){var total = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.second,coll));var i = cljs.core.rand.call(null,total);var G__59724 = cljs.core.seq.call(null,coll);var vec__59725 = G__59724;var vec__59726 = cljs.core.nth.call(null,vec__59725,0,null);var choice = cljs.core.nth.call(null,vec__59726,0,null);var weight = cljs.core.nth.call(null,vec__59726,1,null);var remaining = cljs.core.nthnext.call(null,vec__59725,1);var i__$1 = i;var G__59724__$1 = G__59724;while(true){
var i__$2 = i__$1;var vec__59727 = G__59724__$1;var vec__59728 = cljs.core.nth.call(null,vec__59727,0,null);var choice__$1 = cljs.core.nth.call(null,vec__59728,0,null);var weight__$1 = cljs.core.nth.call(null,vec__59728,1,null);var remaining__$1 = cljs.core.nthnext.call(null,vec__59727,1);if((weight__$1 >= i__$2))
{return choice__$1;
} else
{{
var G__59729 = (i__$2 - weight__$1);
var G__59730 = remaining__$1;
i__$1 = G__59729;
G__59724__$1 = G__59730;
continue;
}
}
break;
}
});
letters.random_letter = (function random_letter(){return letters.rand_nth_weighted.call(null,letters.weighted_alphabet);
});
letters.make_tile = (function make_tile(row,col){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"letter","letter",4202698648),letters.random_letter.call(null),new cljs.core.Keyword(null,"player-id","player-id",3436779257),null,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),new cljs.core.Keyword(null,"neighbors","neighbors",1439078195),cljs.core.PersistentVector.EMPTY], null);
});
letters.connect_tiles = (function connect_tiles(grid,p__59731){var vec__59735 = p__59731;var vec__59736 = cljs.core.nth.call(null,vec__59735,0,null);var ay = cljs.core.nth.call(null,vec__59736,0,null);var ax = cljs.core.nth.call(null,vec__59736,1,null);var vec__59737 = cljs.core.nth.call(null,vec__59735,1,null);var by = cljs.core.nth.call(null,vec__59737,0,null);var bx = cljs.core.nth.call(null,vec__59737,1,null);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ay,ax,new cljs.core.Keyword(null,"neighbors","neighbors",1439078195)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [by,bx], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [by,bx,new cljs.core.Keyword(null,"neighbors","neighbors",1439078195)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ay,ax], null));
});
letters.parse_neighbors = (function parse_neighbors(s){return clojure.walk.prewalk.call(null,(function (x){if(typeof x === 'string')
{return parseInt(x);
} else
{return x;
}
}),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.partial.call(null,letters.split,/,/)),cljs.core.map.call(null,cljs.core.partial.call(null,letters.split,/ /),clojure.string.split_lines.call(null,s))));
});
letters.char__GT_tile = (function char__GT_tile(row,col,tile_char){var pred__59741 = cljs.core._EQ_;var expr__59742 = tile_char;if(cljs.core.truth_(pred__59741.call(null,"#",expr__59742)))
{return letters.make_tile.call(null,row,col);
} else
{if(cljs.core.truth_(pred__59741.call(null,".",expr__59742)))
{return null;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__59742)].join('')));
}
}
});
letters.char_row__GT_tile_row = (function char_row__GT_tile_row(char_row,row_index){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,letters.char__GT_tile,row_index),cljs.core.range.call(null,cljs.core.count.call(null,char_row)),char_row));
});
letters.parse_board = (function parse_board(board_str){var rows = clojure.string.split.call(null,board_str,/\n/);return cljs.core.vec.call(null,cljs.core.map.call(null,letters.char_row__GT_tile_row,rows,cljs.core.range.call(null,cljs.core.count.call(null,rows))));
});
letters.parse_level = (function parse_level(level_text){var vec__59745 = letters.split.call(null,/\n\n/,clojure.string.trim.call(null,level_text));var board_text = cljs.core.nth.call(null,vec__59745,0,null);var neighbors_text = cljs.core.nth.call(null,vec__59745,1,null);return cljs.core.reduce.call(null,letters.connect_tiles,letters.parse_board.call(null,board_text),letters.parse_neighbors.call(null,neighbors_text));
});
letters.get_file = (function get_file(filename){return (function (){var G__59747 = (new XMLHttpRequest());G__59747.open("GET",filename,false);
G__59747.send(null);
return G__59747;
})().responseText;
});
letters.make_row = (function make_row(w,row_index){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,letters.make_tile,row_index),cljs.core.range.call(null,w)));
});
letters.tile_seq = (function tile_seq(grid){return cljs.core.apply.call(null,cljs.core.concat,grid);
});
letters.scorable_tiles = (function scorable_tiles(grid){return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"letter","letter",4202698648)),letters.tile_seq.call(null,grid)));
});
letters.letter_in_grid_QMARK_ = (function letter_in_grid_QMARK_(letter,grid){return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([letter], true),new cljs.core.Keyword(null,"letter","letter",4202698648)),letters.tile_seq.call(null,grid));
});
letters.grid_ok_QMARK_ = (function grid_ok_QMARK_(grid){return true;
});
letters.make_grid_draft = (function make_grid_draft(w,h){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,letters.make_row,w),cljs.core.range.call(null,h)));
});
letters.make_grid = (function make_grid(w,h){return cljs.core.first.call(null,cljs.core.filter.call(null,letters.grid_ok_QMARK_,cljs.core.repeatedly.call(null,cljs.core.partial.call(null,letters.make_grid_draft,w,h))));
});
letters.fix_grid = (function fix_grid(grid){var current_letters = cljs.core.map.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648),letters.tile_seq.call(null,grid));var current_vowels = cljs.core.filter.call(null,cljs.core.set.call(null,letters.vowels),current_letters);var row = cljs.core.rand_int.call(null,cljs.core.count.call(null,grid));var col = cljs.core.rand_int.call(null,cljs.core.count.call(null,grid.call(null,0)));if((5 > cljs.core.count.call(null,current_vowels)))
{return fix_grid.call(null,cljs.core.assoc_in.call(null,grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col,new cljs.core.Keyword(null,"letter","letter",4202698648)], null),letters.vowels.call(null,cljs.core.rand_int.call(null,5))));
} else
{if(cljs.core.truth_((function (){var and__3391__auto__ = letters.letter_in_grid_QMARK_.call(null,"q",grid);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not.call(null,letters.letter_in_grid_QMARK_.call(null,"i",grid));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.assoc_in.call(null,grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col,new cljs.core.Keyword(null,"letter","letter",4202698648)], null),"i");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return grid;
} else
{return null;
}
}
}
});
letters.index_in = (function index_in(coll,tile){return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (col_index,item){if((item === tile))
{return col_index;
} else
{return null;
}
}),coll));
});
letters.square__GT_str = (function square__GT_str(p__59748){var map__59750 = p__59748;var map__59750__$1 = ((cljs.core.seq_QMARK_.call(null,map__59750))?cljs.core.apply.call(null,cljs.core.hash_map,map__59750):map__59750);var player = cljs.core.get.call(null,map__59750__$1,new cljs.core.Keyword(null,"player","player",4323118675));var letter = cljs.core.get.call(null,map__59750__$1,new cljs.core.Keyword(null,"letter","letter",4202698648));return [cljs.core.str(clojure.string.upper_case.call(null,letter)),cljs.core.str(new cljs.core.PersistentArrayMap(null, 2, [0,"*",1,"#"], null).call(null,player," "))].join('');
});
letters.row__GT_str = (function row__GT_str(row){return clojure.string.join.call(null,cljs.core.map.call(null,letters.square__GT_str,row));
});
letters.grid__GT_str = (function grid__GT_str(grid){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,letters.row__GT_str,grid));
});
letters.parse_int_string = (function parse_int_string(p__59752){var vec__59754 = p__59752;var c1 = cljs.core.nth.call(null,vec__59754,0,null);var c2 = cljs.core.nth.call(null,vec__59754,1,null);return cljs.core.map.call(null,(function (p1__59751_SHARP_){return Integer.parseInt.call(null,[cljs.core.str(p1__59751_SHARP_)].join(''));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});
letters.parse_move = (function parse_move(movestr){return cljs.core.map.call(null,letters.parse_int_string,clojure.string.split.call(null,movestr,/ /));
});
letters.load_dict = (function load_dict(){return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,clojure.string.split_lines.call(null,letters.get_file.call(null,"dict.txt")));
});
letters.dict = letters.load_dict.call(null);
letters.grid_size = (function grid_size(grid){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid.call(null,0),grid], null)));
});
letters.in_grid_QMARK_ = (function in_grid_QMARK_(grid,movelet){return (cljs.core.not_any_QMARK_.call(null,cljs.core.neg_QMARK_,movelet)) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._GT_,letters.grid_size.call(null,grid),movelet)));
});
letters.move__GT_word = (function move__GT_word(move){return clojure.string.join.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648),move));
});
letters.is_prefix_QMARK_ = (function is_prefix_QMARK_(s1,s2){var n = cljs.core.count.call(null,s1);return ((n <= cljs.core.count.call(null,s2))) && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,s2,0,n),s1));
});
letters.hand_table__GT_move = (function hand_table__GT_move(grid){var iter__4101__auto__ = (function iter__59759(s__59760){return (new cljs.core.LazySeq(null,(function (){var s__59760__$1 = s__59760;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__59760__$1);if(temp__4092__auto__)
{var s__59760__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59760__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59760__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59762 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59761 = 0;while(true){
if((i__59761 < size__4100__auto__))
{var td = cljs.core._nth.call(null,c__4099__auto__,i__59761);cljs.core.chunk_append.call(null,b__59762,cljs.core.get_in.call(null,grid,cljs.core.map.call(null,parseInt,cljs.core.rest.call(null,clojure.string.split.call(null,domina.attr.call(null,td,new cljs.core.Keyword(null,"id","id",1013907597)),"-")))));
{
var G__59763 = (i__59761 + 1);
i__59761 = G__59763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59762),iter__59759.call(null,cljs.core.chunk_rest.call(null,s__59760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59762),null);
}
} else
{var td = cljs.core.first.call(null,s__59760__$2);return cljs.core.cons.call(null,cljs.core.get_in.call(null,grid,cljs.core.map.call(null,parseInt,cljs.core.rest.call(null,clojure.string.split.call(null,domina.attr.call(null,td,new cljs.core.Keyword(null,"id","id",1013907597)),"-")))),iter__59759.call(null,cljs.core.rest.call(null,s__59760__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4101__auto__.call(null,domina.children.call(null,domina.css.sel.call(null,letters.hand.call(null),"tbody tr")));
});
letters.hand_empty_QMARK_ = (function hand_empty_QMARK_(grid){return cljs.core.empty_QMARK_.call(null,letters.hand_table__GT_move.call(null,grid));
});
letters.neighbors = (function neighbors(grid,p__59764){var map__59767 = p__59764;var map__59767__$1 = ((cljs.core.seq_QMARK_.call(null,map__59767))?cljs.core.apply.call(null,cljs.core.hash_map,map__59767):map__59767);var tile = map__59767__$1;var vec__59768 = cljs.core.get.call(null,map__59767__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var row = cljs.core.nth.call(null,vec__59768,0,null);var col = cljs.core.nth.call(null,vec__59768,1,null);return cljs.core.keep.call(null,cljs.core.partial.call(null,cljs.core.get_in,grid),cljs.core.concat.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1439078195).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - 1),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col - 1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + 1),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + 1)], null)], null)));
});
letters.depth_first_search = (function depth_first_search(grid,tilesets,tile){if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.some_fn,tilesets).call(null,tile)))
{return cljs.core.reduce.call(null,cljs.core.partial.call(null,depth_first_search,grid),cljs.core.map.call(null,(function (p1__59769_SHARP_){return cljs.core.disj.call(null,p1__59769_SHARP_,tile);
}),tilesets),letters.neighbors.call(null,grid,tile));
} else
{return tilesets;
}
});
letters.player_tiles = (function player_tiles(grid,player){return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),letters.tile_seq.call(null,grid));
});
letters.tile_list_score = (function tile_list_score(tile_list){return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,letters.letter_scores,cljs.core.map.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648),tile_list)));
});
letters.inc_tile_turns = (function inc_tile_turns(world){var player = letters.current_player.call(null,world);return cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425)], null),cljs.core._PLUS_,letters.tile_list_score.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),letters.tile_seq.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world)))));
});
letters.inc_scores = (function inc_scores(world){var player = letters.current_player.call(null,world);return cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"score","score",1123168772)], null),cljs.core._PLUS_,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,letters.letter_scores,cljs.core.map.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648),letters.player_tiles.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),player)))));
});
letters.adjacent_unowned_tiles = (function adjacent_unowned_tiles(world){var player = letters.current_player.call(null,world);var grid = new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world);return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),cljs.core.mapcat.call(null,cljs.core.partial.call(null,letters.neighbors,grid),letters.player_tiles.call(null,grid,player)));
});
letters.unreachable_tiles = (function unreachable_tiles(grid,move,player){var G__59775 = cljs.core.map.call(null,cljs.core.set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [letters.player_tiles.call(null,grid,player),move], null));var vec__59776 = G__59775;var owned_tiles = cljs.core.nth.call(null,vec__59776,0,null);var hand_tiles = cljs.core.nth.call(null,vec__59776,1,null);var G__59775__$1 = G__59775;while(true){
var vec__59777 = G__59775__$1;var owned_tiles__$1 = cljs.core.nth.call(null,vec__59777,0,null);var hand_tiles__$1 = cljs.core.nth.call(null,vec__59777,1,null);var temp__4090__auto__ = cljs.core.first.call(null,owned_tiles__$1);if(cljs.core.truth_(temp__4090__auto__))
{var tile = temp__4090__auto__;{
var G__59778 = letters.depth_first_search.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [owned_tiles__$1,hand_tiles__$1], null),tile);
G__59775__$1 = G__59778;
continue;
}
} else
{return hand_tiles__$1;
}
break;
}
});
letters.move_invalidation = (function move_invalidation(world,move){var word = letters.move__GT_word.call(null,move);var all_played_words = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945),new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));var prefix = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,letters.is_prefix_QMARK_,word),all_played_words));var unreachable_tiles = letters.unreachable_tiles.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),move,letters.current_player.call(null,world));var first_move_QMARK_ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(letters.current_player.call(null,world)));if(cljs.core.truth_(prefix))
{return goog.string.format("%s, which begins with %s, has already been played.",clojure.string.upper_case.call(null,prefix),clojure.string.upper_case.call(null,word));
} else
{if(cljs.core.not.call(null,letters.dict.call(null,word)))
{return goog.string.format("%s is not in the current word list.",clojure.string.upper_case.call(null,word));
} else
{if((first_move_QMARK_) && (cljs.core.seq.call(null,cljs.core.second.call(null,letters.depth_first_search.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.set.call(null,move)], null),cljs.core.first.call(null,move))))))
{return "Your first move must be continuous.";
} else
{if((!(first_move_QMARK_)) && (cljs.core.seq.call(null,unreachable_tiles)))
{return "Your move must be continuous with your territory.";
} else
{return null;
}
}
}
}
});
letters.get_tile = (function get_tile(grid,td){var temp__4092__auto__ = domina.attr.call(null,td,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(temp__4092__auto__))
{var id = temp__4092__auto__;return cljs.core.get_in.call(null,grid,cljs.core.map.call(null,parseInt,cljs.core.rest.call(null,clojure.string.split.call(null,id,"-"))));
} else
{return null;
}
});
letters.tile_protected_QMARK_ = (function tile_protected_QMARK_(grid,tile){var and__3391__auto__ = new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"player-id","player-id",3436779257),cljs.core.conj.call(null,letters.neighbors.call(null,grid,tile),tile)));
} else
{return and__3391__auto__;
}
});
letters.player_score = (function player_score(grid,player){return letters.tile_list_score.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),letters.tile_seq.call(null,grid)));
});
letters.adjusted_score = (function adjusted_score(world,player,move){return (letters.player_score.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),player) + ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world)))?letters.tile_list_score.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),move)):(- letters.tile_list_score.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player)], true),new cljs.core.Keyword(null,"player-id","player-id",3436779257)),move)))));
});
letters.redraw_score_BANG_ = (function redraw_score_BANG_(world,move,player){return domina.set_text_BANG_.call(null,domina.css.sel.call(null,letters.played_words_table.call(null),[cljs.core.str("thead .player"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player))].join('')),[cljs.core.str(letters.adjusted_score.call(null,world,player,move)),cljs.core.str(" "),cljs.core.str("("),cljs.core.str(cljs.core.quot.call(null,new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425).cljs$core$IFn$_invoke$arity$1(player),letters.tile_turns_per_bonus)),cljs.core.str(")")].join(''));
});
letters.redraw_scores_BANG_ = (function redraw_scores_BANG_(world,move){var seq__59783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));var chunk__59784 = null;var count__59785 = 0;var i__59786 = 0;while(true){
if((i__59786 < count__59785))
{var player = cljs.core._nth.call(null,chunk__59784,i__59786);letters.redraw_score_BANG_.call(null,world,move,player);
{
var G__59787 = seq__59783;
var G__59788 = chunk__59784;
var G__59789 = count__59785;
var G__59790 = (i__59786 + 1);
seq__59783 = G__59787;
chunk__59784 = G__59788;
count__59785 = G__59789;
i__59786 = G__59790;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__59783);if(temp__4092__auto__)
{var seq__59783__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59783__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__59783__$1);{
var G__59791 = cljs.core.chunk_rest.call(null,seq__59783__$1);
var G__59792 = c__4132__auto__;
var G__59793 = cljs.core.count.call(null,c__4132__auto__);
var G__59794 = 0;
seq__59783 = G__59791;
chunk__59784 = G__59792;
count__59785 = G__59793;
i__59786 = G__59794;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__59783__$1);letters.redraw_score_BANG_.call(null,world,move,player);
{
var G__59795 = cljs.core.next.call(null,seq__59783__$1);
var G__59796 = null;
var G__59797 = 0;
var G__59798 = 0;
seq__59783 = G__59795;
chunk__59784 = G__59796;
count__59785 = G__59797;
i__59786 = G__59798;
continue;
}
}
} else
{return null;
}
}
break;
}
});
letters.vec_dissoc = (function vec_dissoc(v,i){return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,i,v),cljs.core.drop.call(null,(i + 1),v)));
});
letters.sortChange = (function sortChange(p__59799){var map__59801 = p__59799;var map__59801__$1 = ((cljs.core.seq_QMARK_.call(null,map__59801))?cljs.core.apply.call(null,cljs.core.hash_map,map__59801):map__59801);var td = cljs.core.get.call(null,map__59801__$1,new cljs.core.Keyword(null,"target","target",4427965699));return cljs.core.reset_BANG_.call(null,letters.tile_moved_QMARK_,true);
});
goog.exportSymbol('letters.sortChange', letters.sortChange);
letters.add_hand_tile_BANG_ = (function add_hand_tile_BANG_(grid,tile){var vec__59804 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(tile);var col = cljs.core.nth.call(null,vec__59804,0,null);var row = cljs.core.nth.call(null,vec__59804,1,null);return domina.append_BANG_.call(null,domina.css.sel.call(null,letters.hand.call(null),"tbody tr"),(function (){var G__59805 = domina.html_to_dom.call(null,"<td/>");domina.set_text_BANG_.call(null,G__59805,new cljs.core.Keyword(null,"letter","letter",4202698648).cljs$core$IFn$_invoke$arity$1(tile));
domina.append_BANG_.call(null,G__59805,domina.html_to_dom.call(null,goog.string.format("<span>%d</span>",letters.letter_scores.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648).cljs$core$IFn$_invoke$arity$1(tile)))));
domina.events.listen_BANG_.call(null,G__59805,new cljs.core.Keyword(null,"mousedown","mousedown",1600748089),letters.on_hand_mouse_down);
domina.events.listen_BANG_.call(null,G__59805,new cljs.core.Keyword(null,"mouseup","mouseup",2256972146),letters.on_hand_click);
domina.set_attr_BANG_.call(null,G__59805,new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str("hand-"),cljs.core.str(col),cljs.core.str("-"),cljs.core.str(row)].join(''));
domina.set_classes_BANG_.call(null,G__59805,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("player"),cljs.core.str(new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile))].join(''),(cljs.core.truth_(letters.tile_protected_QMARK_.call(null,grid,tile))?"protected":null)], null)));
return G__59805;
})());
});
letters.redraw_tile_BANG_ = (function redraw_tile_BANG_(grid,tile,move){var vec__59807 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(tile);var y = cljs.core.nth.call(null,vec__59807,0,null);var x = cljs.core.nth.call(null,vec__59807,1,null);return domina.set_classes_BANG_.call(null,domina.by_id.call(null,goog.string.format("board-%d-%d",y,x)),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("player"),cljs.core.str(new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile))].join(''),(cljs.core.truth_(letters.tile_protected_QMARK_.call(null,grid,tile))?"protected":null),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tile], true),move))?"hidden":null)], null)));
});
letters.redraw_board_BANG_ = (function redraw_board_BANG_(world){var seq__59812 = cljs.core.seq.call(null,domina.children.call(null,domina.css.sel.call(null,letters.board.call(null),"tr")));var chunk__59813 = null;var count__59814 = 0;var i__59815 = 0;while(true){
if((i__59815 < count__59814))
{var td = cljs.core._nth.call(null,chunk__59813,i__59815);var tile_59816 = letters.get_tile.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),td);domina.set_classes_BANG_.call(null,td,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("player"),cljs.core.str(new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile_59816))].join(''),(cljs.core.truth_(tile_59816)?null:"hidden"),(cljs.core.truth_(letters.tile_protected_QMARK_.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),tile_59816))?"protected":null)], null)));
{
var G__59817 = seq__59812;
var G__59818 = chunk__59813;
var G__59819 = count__59814;
var G__59820 = (i__59815 + 1);
seq__59812 = G__59817;
chunk__59813 = G__59818;
count__59814 = G__59819;
i__59815 = G__59820;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__59812);if(temp__4092__auto__)
{var seq__59812__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59812__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__59812__$1);{
var G__59821 = cljs.core.chunk_rest.call(null,seq__59812__$1);
var G__59822 = c__4132__auto__;
var G__59823 = cljs.core.count.call(null,c__4132__auto__);
var G__59824 = 0;
seq__59812 = G__59821;
chunk__59813 = G__59822;
count__59814 = G__59823;
i__59815 = G__59824;
continue;
}
} else
{var td = cljs.core.first.call(null,seq__59812__$1);var tile_59825 = letters.get_tile.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),td);domina.set_classes_BANG_.call(null,td,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("player"),cljs.core.str(new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile_59825))].join(''),(cljs.core.truth_(tile_59825)?null:"hidden"),(cljs.core.truth_(letters.tile_protected_QMARK_.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),tile_59825))?"protected":null)], null)));
{
var G__59826 = cljs.core.next.call(null,seq__59812__$1);
var G__59827 = null;
var G__59828 = 0;
var G__59829 = 0;
seq__59812 = G__59826;
chunk__59813 = G__59827;
count__59814 = G__59828;
i__59815 = G__59829;
continue;
}
}
} else
{return null;
}
}
break;
}
});
letters.apply_move_to_grid = (function apply_move_to_grid(grid,move,player){return cljs.core.reduce.call(null,(function (grid__$1,tile){var vec__59831 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(tile);var col = cljs.core.nth.call(null,vec__59831,0,null);var row = cljs.core.nth.call(null,vec__59831,1,null);if(cljs.core.truth_(letters.tile_protected_QMARK_.call(null,grid__$1,tile)))
{return grid__$1;
} else
{return cljs.core.assoc_in.call(null,grid__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row,new cljs.core.Keyword(null,"player-id","player-id",3436779257)], null),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(player));
}
}),grid,move);
});
letters.clear_hand_BANG_ = (function clear_hand_BANG_(){return domina.destroy_children_BANG_.call(null,domina.css.sel.call(null,letters.hand.call(null),"tbody tr"));
});
letters.add_text = (function add_text(element,text){var current = domina.text.call(null,element);var extra = ((cljs.core._EQ_.call(null,"",current))?null:" ");return domina.set_text_BANG_.call(null,element,[cljs.core.str(current),cljs.core.str(extra),cljs.core.str(text)].join(''));
});
letters.increment_turn = (function increment_turn(world){return cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501)], null),(function (id){return cljs.core.mod.call(null,(id + 1),letters.player_count.call(null,world));
}));
});
letters.apply_move = (function apply_move(world,move){return letters.inc_scores.call(null,letters.inc_tile_turns.call(null,letters.increment_turn.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,world,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",1017085624)], null),letters.apply_move_to_grid,move,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world).call(null,new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world),new cljs.core.Keyword(null,"played-words","played-words",4431286945)], null),cljs.core.conj,letters.move__GT_word.call(null,move)))));
});
letters.redraw_played_words_BANG_ = (function redraw_played_words_BANG_(world){var tbody = domina.css.sel.call(null,letters.played_words_table.call(null),"tbody");var players = new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world);domina.destroy_children_BANG_.call(null,tbody);
var seq__59868 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(players.call(null,0)))));var chunk__59869 = null;var count__59870 = 0;var i__59871 = 0;while(true){
if((i__59871 < count__59870))
{var n = cljs.core._nth.call(null,chunk__59869,i__59871);domina.append_BANG_.call(null,tbody,cljs.core.reduce.call(null,domina.append_BANG_,domina.html_to_dom.call(null,"<tr/>"),(function (){var iter__4101__auto__ = ((function (seq__59868,chunk__59869,count__59870,i__59871,n){
return (function iter__59872(s__59873){return (new cljs.core.LazySeq(null,((function (seq__59868,chunk__59869,count__59870,i__59871,n){
return (function (){var s__59873__$1 = s__59873;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__59873__$1);if(temp__4092__auto__)
{var s__59873__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59873__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59873__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59875 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59874 = 0;while(true){
if((i__59874 < size__4100__auto__))
{var player = cljs.core._nth.call(null,c__4099__auto__,i__59874);cljs.core.chunk_append.call(null,b__59875,domina.html_to_dom.call(null,goog.string.format("<td>%s</td>",(function (){var word = cljs.core.get.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(player),n);var pred__59882 = cljs.core._EQ_;var expr__59883 = word;if(cljs.core.truth_(pred__59882.call(null,"",expr__59883)))
{return "-";
} else
{if(cljs.core.truth_(pred__59882.call(null,null,expr__59883)))
{return "";
} else
{return word;
}
}
})())));
{
var G__59904 = (i__59874 + 1);
i__59874 = G__59904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59875),iter__59872.call(null,cljs.core.chunk_rest.call(null,s__59873__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59875),null);
}
} else
{var player = cljs.core.first.call(null,s__59873__$2);return cljs.core.cons.call(null,domina.html_to_dom.call(null,goog.string.format("<td>%s</td>",(function (){var word = cljs.core.get.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(player),n);var pred__59885 = cljs.core._EQ_;var expr__59886 = word;if(cljs.core.truth_(pred__59885.call(null,"",expr__59886)))
{return "-";
} else
{if(cljs.core.truth_(pred__59885.call(null,null,expr__59886)))
{return "";
} else
{return word;
}
}
})())),iter__59872.call(null,cljs.core.rest.call(null,s__59873__$2)));
}
} else
{return null;
}
break;
}
});})(seq__59868,chunk__59869,count__59870,i__59871,n))
,null,null));
});})(seq__59868,chunk__59869,count__59870,i__59871,n))
;return iter__4101__auto__.call(null,players);
})()));
{
var G__59905 = seq__59868;
var G__59906 = chunk__59869;
var G__59907 = count__59870;
var G__59908 = (i__59871 + 1);
seq__59868 = G__59905;
chunk__59869 = G__59906;
count__59870 = G__59907;
i__59871 = G__59908;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__59868);if(temp__4092__auto__)
{var seq__59868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59868__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__59868__$1);{
var G__59909 = cljs.core.chunk_rest.call(null,seq__59868__$1);
var G__59910 = c__4132__auto__;
var G__59911 = cljs.core.count.call(null,c__4132__auto__);
var G__59912 = 0;
seq__59868 = G__59909;
chunk__59869 = G__59910;
count__59870 = G__59911;
i__59871 = G__59912;
continue;
}
} else
{var n = cljs.core.first.call(null,seq__59868__$1);domina.append_BANG_.call(null,tbody,cljs.core.reduce.call(null,domina.append_BANG_,domina.html_to_dom.call(null,"<tr/>"),(function (){var iter__4101__auto__ = ((function (seq__59868,chunk__59869,count__59870,i__59871,n,seq__59868__$1,temp__4092__auto__){
return (function iter__59888(s__59889){return (new cljs.core.LazySeq(null,((function (seq__59868,chunk__59869,count__59870,i__59871,n,seq__59868__$1,temp__4092__auto__){
return (function (){var s__59889__$1 = s__59889;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__59889__$1);if(temp__4092__auto____$1)
{var s__59889__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__59889__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59889__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59891 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59890 = 0;while(true){
if((i__59890 < size__4100__auto__))
{var player = cljs.core._nth.call(null,c__4099__auto__,i__59890);cljs.core.chunk_append.call(null,b__59891,domina.html_to_dom.call(null,goog.string.format("<td>%s</td>",(function (){var word = cljs.core.get.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(player),n);var pred__59898 = cljs.core._EQ_;var expr__59899 = word;if(cljs.core.truth_(pred__59898.call(null,"",expr__59899)))
{return "-";
} else
{if(cljs.core.truth_(pred__59898.call(null,null,expr__59899)))
{return "";
} else
{return word;
}
}
})())));
{
var G__59913 = (i__59890 + 1);
i__59890 = G__59913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59891),iter__59888.call(null,cljs.core.chunk_rest.call(null,s__59889__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59891),null);
}
} else
{var player = cljs.core.first.call(null,s__59889__$2);return cljs.core.cons.call(null,domina.html_to_dom.call(null,goog.string.format("<td>%s</td>",(function (){var word = cljs.core.get.call(null,new cljs.core.Keyword(null,"played-words","played-words",4431286945).cljs$core$IFn$_invoke$arity$1(player),n);var pred__59901 = cljs.core._EQ_;var expr__59902 = word;if(cljs.core.truth_(pred__59901.call(null,"",expr__59902)))
{return "-";
} else
{if(cljs.core.truth_(pred__59901.call(null,null,expr__59902)))
{return "";
} else
{return word;
}
}
})())),iter__59888.call(null,cljs.core.rest.call(null,s__59889__$2)));
}
} else
{return null;
}
break;
}
});})(seq__59868,chunk__59869,count__59870,i__59871,n,seq__59868__$1,temp__4092__auto__))
,null,null));
});})(seq__59868,chunk__59869,count__59870,i__59871,n,seq__59868__$1,temp__4092__auto__))
;return iter__4101__auto__.call(null,players);
})()));
{
var G__59914 = cljs.core.next.call(null,seq__59868__$1);
var G__59915 = null;
var G__59916 = 0;
var G__59917 = 0;
seq__59868 = G__59914;
chunk__59869 = G__59915;
count__59870 = G__59916;
i__59871 = G__59917;
continue;
}
}
} else
{return null;
}
}
break;
}
});
letters.redraw_BANG_ = (function redraw_BANG_(world){letters.redraw_played_words_BANG_.call(null,world);
letters.redraw_board_BANG_.call(null,world);
letters.set_alert_BANG_.call(null,"");
letters.redraw_scores_BANG_.call(null,world,letters.hand_table__GT_move.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world)));
return letters.set_current_player_indicator_BANG_.call(null,new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world));
});
letters.victory_message = (function victory_message(world){var players_with_scores = (function (){var iter__4101__auto__ = (function iter__59925(s__59926){return (new cljs.core.LazySeq(null,(function (){var s__59926__$1 = s__59926;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__59926__$1);if(temp__4092__auto__)
{var s__59926__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59926__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__59926__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__59928 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__59927 = 0;while(true){
if((i__59927 < size__4100__auto__))
{var player = cljs.core._nth.call(null,c__4099__auto__,i__59927);cljs.core.chunk_append.call(null,b__59928,cljs.core.merge.call(null,player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"score","score",1123168772),letters.player_score.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),player)], null)));
{
var G__59932 = (i__59927 + 1);
i__59927 = G__59932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59928),iter__59925.call(null,cljs.core.chunk_rest.call(null,s__59926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59928),null);
}
} else
{var player = cljs.core.first.call(null,s__59926__$2);return cljs.core.cons.call(null,cljs.core.merge.call(null,player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"score","score",1123168772),letters.player_score.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),player)], null)),iter__59925.call(null,cljs.core.rest.call(null,s__59926__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4101__auto__.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));
})();var max_score = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"score","score",1123168772),players_with_scores));var winning_players = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.fromArray([max_score], true),new cljs.core.Keyword(null,"score","score",1123168772)),players_with_scores);var pred__59929 = cljs.core._EQ_;var expr__59930 = cljs.core.count.call(null,winning_players);if(cljs.core.truth_(pred__59929.call(null,1,expr__59930)))
{return goog.string.format("%s has emerged victorious!",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,winning_players)));
} else
{if(cljs.core.truth_(pred__59929.call(null,2,expr__59930)))
{return cljs.core.apply.call(null,goog.string.format,"The game is a draw between %s and %s!",cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),winning_players));
} else
{return [cljs.core.str("The game is a draw among "),cljs.core.str(cljs.core.apply.call(null,clojure.string.join,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.butlast.call(null,winning_players)),", ")),cljs.core.str(", and "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,winning_players))),cljs.core.str("!")].join('');
}
}
});
letters.on_submit_click = (function on_submit_click(){var world_state = cljs.core.deref.call(null,letters.world);var move = letters.hand_table__GT_move.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world_state));var word = letters.move__GT_word.call(null,move);var temp__4090__auto__ = letters.move_invalidation.call(null,world_state,move);if(cljs.core.truth_(temp__4090__auto__))
{var error = temp__4090__auto__;return letters.set_alert_BANG_.call(null,error);
} else
{var world = cljs.core.reset_BANG_.call(null,letters.world,letters.apply_move.call(null,world_state,move));var scores = cljs.core.map.call(null,cljs.core.partial.call(null,letters.player_score,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world)),new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(world));letters.clear_hand_BANG_.call(null);
letters.redraw_BANG_.call(null,world);
if(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"letter","letter",4202698648),cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world_state)),letters.tile_seq.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world))))))
{return letters.set_alert_BANG_.call(null,letters.victory_message.call(null,world));
} else
{return null;
}
}
});
letters.on_pass_click = (function on_pass_click(){letters.clear_hand_BANG_.call(null);
return letters.redraw_BANG_.call(null,cljs.core.swap_BANG_.call(null,letters.world,letters.apply_move,cljs.core.PersistentVector.EMPTY));
});
letters.grab_bonus_tile_BANG_ = (function grab_bonus_tile_BANG_(tile){var vec__59934 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(tile);var row = cljs.core.nth.call(null,vec__59934,0,null);var col = cljs.core.nth.call(null,vec__59934,1,null);var current_player_id = new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,letters.world));cljs.core.swap_BANG_.call(null,letters.world,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",1017085624),row,col,new cljs.core.Keyword(null,"player-id","player-id",3436779257)], null),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,letters.world)));
return letters.redraw_BANG_.call(null,cljs.core.swap_BANG_.call(null,letters.world,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),current_player_id,new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425)], null),cljs.core._,letters.tile_turns_per_bonus));
});
letters.on_board_click = (function on_board_click(e){var td = new cljs.core.Keyword(null,"target","target",4427965699).cljs$core$IFn$_invoke$arity$1(e);var map__59936 = cljs.core.deref.call(null,letters.world);var map__59936__$1 = ((cljs.core.seq_QMARK_.call(null,map__59936))?cljs.core.apply.call(null,cljs.core.hash_map,map__59936):map__59936);var world = map__59936__$1;var grid = cljs.core.get.call(null,map__59936__$1,new cljs.core.Keyword(null,"grid","grid",1017085624));var tile = letters.get_tile.call(null,grid,td);if(cljs.core.truth_((function (){var and__3391__auto__ = letters.tile_protected_QMARK_.call(null,grid,tile);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"player-id","player-id",3436779257).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"current-player-id","current-player-id",2134766501).cljs$core$IFn$_invoke$arity$1(world));
} else
{return and__3391__auto__;
}
})()))
{return null;
} else
{if(cljs.core.not.call(null,new cljs.core.Keyword(null,"shiftKey","shiftKey",4783490543).cljs$core$IFn$_invoke$arity$1(e)))
{letters.add_hand_tile_BANG_.call(null,grid,tile);
var move = letters.hand_table__GT_move.call(null,grid);letters.redraw_scores_BANG_.call(null,world,move);
return letters.redraw_tile_BANG_.call(null,grid,tile,move);
} else
{if((letters.hand_empty_QMARK_.call(null,grid)) && (cljs.core.not.call(null,cljs.core.seq.call(null,letters.unreachable_tiles.call(null,grid,cljs.core.conj.call(null,letters.hand_table__GT_move.call(null,grid),tile),letters.current_player.call(null,world))))) && ((new cljs.core.Keyword(null,"tile-turns","tile-turns",3271536425).cljs$core$IFn$_invoke$arity$1(letters.current_player.call(null,world)) >= letters.tile_turns_per_bonus)))
{return letters.grab_bonus_tile_BANG_.call(null,tile);
} else
{return null;
}
}
}
});
letters.on_hand_mouse_down = (function on_hand_mouse_down(p__59937){var map__59939 = p__59937;var map__59939__$1 = ((cljs.core.seq_QMARK_.call(null,map__59939))?cljs.core.apply.call(null,cljs.core.hash_map,map__59939):map__59939);var div = cljs.core.get.call(null,map__59939__$1,new cljs.core.Keyword(null,"target","target",4427965699));return cljs.core.reset_BANG_.call(null,letters.tile_moved_QMARK_,false);
});
letters.on_hand_click = (function on_hand_click(p__59940){var map__59942 = p__59940;var map__59942__$1 = ((cljs.core.seq_QMARK_.call(null,map__59942))?cljs.core.apply.call(null,cljs.core.hash_map,map__59942):map__59942);var td = cljs.core.get.call(null,map__59942__$1,new cljs.core.Keyword(null,"target","target",4427965699));var world = cljs.core.deref.call(null,letters.world);var board_tile = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),cljs.core.map.call(null,parseInt,cljs.core.rest.call(null,clojure.string.split.call(null,domina.attr.call(null,td,new cljs.core.Keyword(null,"id","id",1013907597)),"-"))));var move = letters.hand_table__GT_move.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world));if(cljs.core.truth_(cljs.core.deref.call(null,letters.tile_moved_QMARK_)))
{return null;
} else
{cljs.core.reset_BANG_.call(null,letters.tile_moved_QMARK_,false);
domina.destroy_BANG_.call(null,td);
var move__$1 = letters.hand_table__GT_move.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world));letters.redraw_scores_BANG_.call(null,world,move__$1);
return letters.redraw_tile_BANG_.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world),board_tile,move__$1);
}
});
letters.on_clear_click = (function on_clear_click(){var world = cljs.core.deref.call(null,letters.world);letters.clear_hand_BANG_.call(null);
letters.set_alert_BANG_.call(null,"");
letters.redraw_scores_BANG_.call(null,world,letters.hand_table__GT_move.call(null,new cljs.core.Keyword(null,"grid","grid",1017085624).cljs$core$IFn$_invoke$arity$1(world)));
return letters.redraw_board_BANG_.call(null,world);
});
letters.param_map = (function param_map(){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__59945){var vec__59946 = p__59945;var k = cljs.core.nth.call(null,vec__59946,0,null);var v = cljs.core.nth.call(null,vec__59946,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["width",null,"height",null,"players",null], null), null).call(null,k))?parseInt(v):v)], null);
}),cljs.core.map.call(null,cljs.core.partial.call(null,letters.split,"="),letters.split.call(null,"&",cljs.core.second.call(null,letters.split.call(null,"?",document.URL))))));
});
letters.main = (function main(){var map__59948 = letters.param_map.call(null);var map__59948__$1 = ((cljs.core.seq_QMARK_.call(null,map__59948))?cljs.core.apply.call(null,cljs.core.hash_map,map__59948):map__59948);var level = cljs.core.get.call(null,map__59948__$1,new cljs.core.Keyword(null,"level","level",1116770038));var height = cljs.core.get.call(null,map__59948__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__59948__$1,new cljs.core.Keyword(null,"width","width",1127031096));var players = cljs.core.get.call(null,map__59948__$1,new cljs.core.Keyword(null,"players","players",520336676));var players__$1 = letters.gen_players.call(null,players);var world = cljs.core.swap_BANG_.call(null,letters.world,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",1017085624),letters.make_grid.call(null,width,height),new cljs.core.Keyword(null,"players","players",520336676),players__$1], null));letters.gen_css_BANG_.call(null,world);
letters.gen_html_BANG_.call(null,world);
letters.set_current_player_indicator_BANG_.call(null,0);
letters.redraw_BANG_.call(null,world);
domina.events.listen_BANG_.call(null,letters.clear_button.call(null),new cljs.core.Keyword(null,"click","click",1108654330),letters.on_clear_click);
domina.events.listen_BANG_.call(null,letters.submit_button.call(null),new cljs.core.Keyword(null,"click","click",1108654330),letters.on_submit_click);
return domina.events.listen_BANG_.call(null,letters.pass_button.call(null),new cljs.core.Keyword(null,"click","click",1108654330),letters.on_pass_click);
});
goog.exportSymbol('letters.main', letters.main);
