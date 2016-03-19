// Compiled by ClojureScript 0.0-2127
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_8254 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_8255 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_8256 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_8255,table_section_wrapper_8255,opt_wrapper_8254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_8256,table_section_wrapper_8255,cell_wrapper_8256,opt_wrapper_8254,table_section_wrapper_8255,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_8255]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3391__auto__ = div.firstChild;if(cljs.core.truth_(and__3391__auto__))
{return div.firstChild.childNodes;
} else
{return and__3391__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__8261 = cljs.core.seq.call(null,tbody);var chunk__8262 = null;var count__8263 = 0;var i__8264 = 0;while(true){
if((i__8264 < count__8263))
{var child = cljs.core._nth.call(null,chunk__8262,i__8264);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8265 = seq__8261;
var G__8266 = chunk__8262;
var G__8267 = count__8263;
var G__8268 = (i__8264 + 1);
seq__8261 = G__8265;
chunk__8262 = G__8266;
count__8263 = G__8267;
i__8264 = G__8268;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8261);if(temp__4092__auto__)
{var seq__8261__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__8261__$1);{
var G__8269 = cljs.core.chunk_rest.call(null,seq__8261__$1);
var G__8270 = c__4132__auto__;
var G__8271 = cljs.core.count.call(null,c__4132__auto__);
var G__8272 = 0;
seq__8261 = G__8269;
chunk__8262 = G__8270;
count__8263 = G__8271;
i__8264 = G__8272;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__8261__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__8273 = cljs.core.next.call(null,seq__8261__$1);
var G__8274 = null;
var G__8275 = 0;
var G__8276 = 0;
seq__8261 = G__8273;
chunk__8262 = G__8274;
count__8263 = G__8275;
i__8264 = G__8276;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__8278 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__8278,0,null);var start_wrap = cljs.core.nth.call(null,vec__8278,1,null);var end_wrap = cljs.core.nth.call(null,vec__8278,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__8279 = wrapper.lastChild;
var G__8280 = (level - 1);
wrapper = G__8279;
level = G__8280;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3391__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3391__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj8282 = {};return obj8282;
})();
domina.nodes = (function nodes(content){if((function (){var and__3391__auto__ = content;if(and__3391__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3391__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4011__auto__ = (((content == null))?null:content);return (function (){var or__3403__auto__ = (domina.nodes[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.nodes["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3391__auto__ = nodeseq;if(and__3391__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3391__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4011__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3403__auto__ = (domina.single_node[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.single_node["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3391__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3391__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3391__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__8283){
var mesg = cljs.core.seq(arglist__8283);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__8284){
var mesg = cljs.core.seq(arglist__8284);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){if(typeof domina.t8288 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.t8288 = (function (class_name,by_class,meta8289){
this.class_name = class_name;
this.by_class = by_class;
this.meta8289 = meta8289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t8288.cljs$lang$type = true;
domina.t8288.cljs$lang$ctorStr = "domina/t8288";
domina.t8288.cljs$lang$ctorPrWriter = (function (this__3952__auto__,writer__3953__auto__,opt__3954__auto__){return cljs.core._write.call(null,writer__3953__auto__,"domina/t8288");
});
domina.t8288.prototype.domina$DomContent$ = true;
domina.t8288.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t8288.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t8288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8290){var self__ = this;
var _8290__$1 = this;return self__.meta8289;
});
domina.t8288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8290,meta8289__$1){var self__ = this;
var _8290__$1 = this;return (new domina.t8288(self__.class_name,self__.by_class,meta8289__$1));
});
domina.__GT_t8288 = (function __GT_t8288(class_name__$1,by_class__$1,meta8289){return (new domina.t8288(class_name__$1,by_class__$1,meta8289));
});
}
return (new domina.t8288(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__8291){
var contents = cljs.core.seq(arglist__8291);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__8292_SHARP_){return p1__8292_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__8293_SHARP_,p2__8294_SHARP_){return goog.dom.insertChildAt(p1__8293_SHARP_,p2__8294_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8296_SHARP_,p2__8295_SHARP_){return goog.dom.insertSiblingBefore(p2__8295_SHARP_,p1__8296_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__8298_SHARP_,p2__8297_SHARP_){return goog.dom.insertSiblingAfter(p2__8297_SHARP_,p1__8298_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__8300_SHARP_,p2__8299_SHARP_){return goog.dom.replaceNode(p2__8299_SHARP_,p1__8300_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__8305_8309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8306_8310 = null;var count__8307_8311 = 0;var i__8308_8312 = 0;while(true){
if((i__8308_8312 < count__8307_8311))
{var n_8313 = cljs.core._nth.call(null,chunk__8306_8310,i__8308_8312);goog.style.setStyle(n_8313,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8314 = seq__8305_8309;
var G__8315 = chunk__8306_8310;
var G__8316 = count__8307_8311;
var G__8317 = (i__8308_8312 + 1);
seq__8305_8309 = G__8314;
chunk__8306_8310 = G__8315;
count__8307_8311 = G__8316;
i__8308_8312 = G__8317;
continue;
}
} else
{var temp__4092__auto___8318 = cljs.core.seq.call(null,seq__8305_8309);if(temp__4092__auto___8318)
{var seq__8305_8319__$1 = temp__4092__auto___8318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8305_8319__$1))
{var c__4132__auto___8320 = cljs.core.chunk_first.call(null,seq__8305_8319__$1);{
var G__8321 = cljs.core.chunk_rest.call(null,seq__8305_8319__$1);
var G__8322 = c__4132__auto___8320;
var G__8323 = cljs.core.count.call(null,c__4132__auto___8320);
var G__8324 = 0;
seq__8305_8309 = G__8321;
chunk__8306_8310 = G__8322;
count__8307_8311 = G__8323;
i__8308_8312 = G__8324;
continue;
}
} else
{var n_8325 = cljs.core.first.call(null,seq__8305_8319__$1);goog.style.setStyle(n_8325,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8326 = cljs.core.next.call(null,seq__8305_8319__$1);
var G__8327 = null;
var G__8328 = 0;
var G__8329 = 0;
seq__8305_8309 = G__8326;
chunk__8306_8310 = G__8327;
count__8307_8311 = G__8328;
i__8308_8312 = G__8329;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8330){
var content = cljs.core.first(arglist__8330);
arglist__8330 = cljs.core.next(arglist__8330);
var name = cljs.core.first(arglist__8330);
var value = cljs.core.rest(arglist__8330);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__8335_8339 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8336_8340 = null;var count__8337_8341 = 0;var i__8338_8342 = 0;while(true){
if((i__8338_8342 < count__8337_8341))
{var n_8343 = cljs.core._nth.call(null,chunk__8336_8340,i__8338_8342);n_8343.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8344 = seq__8335_8339;
var G__8345 = chunk__8336_8340;
var G__8346 = count__8337_8341;
var G__8347 = (i__8338_8342 + 1);
seq__8335_8339 = G__8344;
chunk__8336_8340 = G__8345;
count__8337_8341 = G__8346;
i__8338_8342 = G__8347;
continue;
}
} else
{var temp__4092__auto___8348 = cljs.core.seq.call(null,seq__8335_8339);if(temp__4092__auto___8348)
{var seq__8335_8349__$1 = temp__4092__auto___8348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_8349__$1))
{var c__4132__auto___8350 = cljs.core.chunk_first.call(null,seq__8335_8349__$1);{
var G__8351 = cljs.core.chunk_rest.call(null,seq__8335_8349__$1);
var G__8352 = c__4132__auto___8350;
var G__8353 = cljs.core.count.call(null,c__4132__auto___8350);
var G__8354 = 0;
seq__8335_8339 = G__8351;
chunk__8336_8340 = G__8352;
count__8337_8341 = G__8353;
i__8338_8342 = G__8354;
continue;
}
} else
{var n_8355 = cljs.core.first.call(null,seq__8335_8349__$1);n_8355.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__8356 = cljs.core.next.call(null,seq__8335_8349__$1);
var G__8357 = null;
var G__8358 = 0;
var G__8359 = 0;
seq__8335_8339 = G__8356;
chunk__8336_8340 = G__8357;
count__8337_8341 = G__8358;
i__8338_8342 = G__8359;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__8360){
var content = cljs.core.first(arglist__8360);
arglist__8360 = cljs.core.next(arglist__8360);
var name = cljs.core.first(arglist__8360);
var value = cljs.core.rest(arglist__8360);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__8365_8369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8366_8370 = null;var count__8367_8371 = 0;var i__8368_8372 = 0;while(true){
if((i__8368_8372 < count__8367_8371))
{var n_8373 = cljs.core._nth.call(null,chunk__8366_8370,i__8368_8372);n_8373.removeAttribute(cljs.core.name.call(null,name));
{
var G__8374 = seq__8365_8369;
var G__8375 = chunk__8366_8370;
var G__8376 = count__8367_8371;
var G__8377 = (i__8368_8372 + 1);
seq__8365_8369 = G__8374;
chunk__8366_8370 = G__8375;
count__8367_8371 = G__8376;
i__8368_8372 = G__8377;
continue;
}
} else
{var temp__4092__auto___8378 = cljs.core.seq.call(null,seq__8365_8369);if(temp__4092__auto___8378)
{var seq__8365_8379__$1 = temp__4092__auto___8378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8365_8379__$1))
{var c__4132__auto___8380 = cljs.core.chunk_first.call(null,seq__8365_8379__$1);{
var G__8381 = cljs.core.chunk_rest.call(null,seq__8365_8379__$1);
var G__8382 = c__4132__auto___8380;
var G__8383 = cljs.core.count.call(null,c__4132__auto___8380);
var G__8384 = 0;
seq__8365_8369 = G__8381;
chunk__8366_8370 = G__8382;
count__8367_8371 = G__8383;
i__8368_8372 = G__8384;
continue;
}
} else
{var n_8385 = cljs.core.first.call(null,seq__8365_8379__$1);n_8385.removeAttribute(cljs.core.name.call(null,name));
{
var G__8386 = cljs.core.next.call(null,seq__8365_8379__$1);
var G__8387 = null;
var G__8388 = 0;
var G__8389 = 0;
seq__8365_8369 = G__8386;
chunk__8366_8370 = G__8387;
count__8367_8371 = G__8388;
i__8368_8372 = G__8389;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__8391 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__8391,0,null);var v = cljs.core.nth.call(null,vec__8391,1,null);if(cljs.core.truth_((function (){var and__3391__auto__ = k;if(cljs.core.truth_(and__3391__auto__))
{return v;
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__8392_SHARP_){var attr = attrs__$1.item(p1__8392_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__8399_8405 = cljs.core.seq.call(null,styles);var chunk__8400_8406 = null;var count__8401_8407 = 0;var i__8402_8408 = 0;while(true){
if((i__8402_8408 < count__8401_8407))
{var vec__8403_8409 = cljs.core._nth.call(null,chunk__8400_8406,i__8402_8408);var name_8410 = cljs.core.nth.call(null,vec__8403_8409,0,null);var value_8411 = cljs.core.nth.call(null,vec__8403_8409,1,null);domina.set_style_BANG_.call(null,content,name_8410,value_8411);
{
var G__8412 = seq__8399_8405;
var G__8413 = chunk__8400_8406;
var G__8414 = count__8401_8407;
var G__8415 = (i__8402_8408 + 1);
seq__8399_8405 = G__8412;
chunk__8400_8406 = G__8413;
count__8401_8407 = G__8414;
i__8402_8408 = G__8415;
continue;
}
} else
{var temp__4092__auto___8416 = cljs.core.seq.call(null,seq__8399_8405);if(temp__4092__auto___8416)
{var seq__8399_8417__$1 = temp__4092__auto___8416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8399_8417__$1))
{var c__4132__auto___8418 = cljs.core.chunk_first.call(null,seq__8399_8417__$1);{
var G__8419 = cljs.core.chunk_rest.call(null,seq__8399_8417__$1);
var G__8420 = c__4132__auto___8418;
var G__8421 = cljs.core.count.call(null,c__4132__auto___8418);
var G__8422 = 0;
seq__8399_8405 = G__8419;
chunk__8400_8406 = G__8420;
count__8401_8407 = G__8421;
i__8402_8408 = G__8422;
continue;
}
} else
{var vec__8404_8423 = cljs.core.first.call(null,seq__8399_8417__$1);var name_8424 = cljs.core.nth.call(null,vec__8404_8423,0,null);var value_8425 = cljs.core.nth.call(null,vec__8404_8423,1,null);domina.set_style_BANG_.call(null,content,name_8424,value_8425);
{
var G__8426 = cljs.core.next.call(null,seq__8399_8417__$1);
var G__8427 = null;
var G__8428 = 0;
var G__8429 = 0;
seq__8399_8405 = G__8426;
chunk__8400_8406 = G__8427;
count__8401_8407 = G__8428;
i__8402_8408 = G__8429;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__8436_8442 = cljs.core.seq.call(null,attrs);var chunk__8437_8443 = null;var count__8438_8444 = 0;var i__8439_8445 = 0;while(true){
if((i__8439_8445 < count__8438_8444))
{var vec__8440_8446 = cljs.core._nth.call(null,chunk__8437_8443,i__8439_8445);var name_8447 = cljs.core.nth.call(null,vec__8440_8446,0,null);var value_8448 = cljs.core.nth.call(null,vec__8440_8446,1,null);domina.set_attr_BANG_.call(null,content,name_8447,value_8448);
{
var G__8449 = seq__8436_8442;
var G__8450 = chunk__8437_8443;
var G__8451 = count__8438_8444;
var G__8452 = (i__8439_8445 + 1);
seq__8436_8442 = G__8449;
chunk__8437_8443 = G__8450;
count__8438_8444 = G__8451;
i__8439_8445 = G__8452;
continue;
}
} else
{var temp__4092__auto___8453 = cljs.core.seq.call(null,seq__8436_8442);if(temp__4092__auto___8453)
{var seq__8436_8454__$1 = temp__4092__auto___8453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436_8454__$1))
{var c__4132__auto___8455 = cljs.core.chunk_first.call(null,seq__8436_8454__$1);{
var G__8456 = cljs.core.chunk_rest.call(null,seq__8436_8454__$1);
var G__8457 = c__4132__auto___8455;
var G__8458 = cljs.core.count.call(null,c__4132__auto___8455);
var G__8459 = 0;
seq__8436_8442 = G__8456;
chunk__8437_8443 = G__8457;
count__8438_8444 = G__8458;
i__8439_8445 = G__8459;
continue;
}
} else
{var vec__8441_8460 = cljs.core.first.call(null,seq__8436_8454__$1);var name_8461 = cljs.core.nth.call(null,vec__8441_8460,0,null);var value_8462 = cljs.core.nth.call(null,vec__8441_8460,1,null);domina.set_attr_BANG_.call(null,content,name_8461,value_8462);
{
var G__8463 = cljs.core.next.call(null,seq__8436_8454__$1);
var G__8464 = null;
var G__8465 = 0;
var G__8466 = 0;
seq__8436_8442 = G__8463;
chunk__8437_8443 = G__8464;
count__8438_8444 = G__8465;
i__8439_8445 = G__8466;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__8471_8475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8472_8476 = null;var count__8473_8477 = 0;var i__8474_8478 = 0;while(true){
if((i__8474_8478 < count__8473_8477))
{var node_8479 = cljs.core._nth.call(null,chunk__8472_8476,i__8474_8478);goog.dom.classes.add(node_8479,class$);
{
var G__8480 = seq__8471_8475;
var G__8481 = chunk__8472_8476;
var G__8482 = count__8473_8477;
var G__8483 = (i__8474_8478 + 1);
seq__8471_8475 = G__8480;
chunk__8472_8476 = G__8481;
count__8473_8477 = G__8482;
i__8474_8478 = G__8483;
continue;
}
} else
{var temp__4092__auto___8484 = cljs.core.seq.call(null,seq__8471_8475);if(temp__4092__auto___8484)
{var seq__8471_8485__$1 = temp__4092__auto___8484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8471_8485__$1))
{var c__4132__auto___8486 = cljs.core.chunk_first.call(null,seq__8471_8485__$1);{
var G__8487 = cljs.core.chunk_rest.call(null,seq__8471_8485__$1);
var G__8488 = c__4132__auto___8486;
var G__8489 = cljs.core.count.call(null,c__4132__auto___8486);
var G__8490 = 0;
seq__8471_8475 = G__8487;
chunk__8472_8476 = G__8488;
count__8473_8477 = G__8489;
i__8474_8478 = G__8490;
continue;
}
} else
{var node_8491 = cljs.core.first.call(null,seq__8471_8485__$1);goog.dom.classes.add(node_8491,class$);
{
var G__8492 = cljs.core.next.call(null,seq__8471_8485__$1);
var G__8493 = null;
var G__8494 = 0;
var G__8495 = 0;
seq__8471_8475 = G__8492;
chunk__8472_8476 = G__8493;
count__8473_8477 = G__8494;
i__8474_8478 = G__8495;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__8500_8504 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8501_8505 = null;var count__8502_8506 = 0;var i__8503_8507 = 0;while(true){
if((i__8503_8507 < count__8502_8506))
{var node_8508 = cljs.core._nth.call(null,chunk__8501_8505,i__8503_8507);goog.dom.classes.remove(node_8508,class$);
{
var G__8509 = seq__8500_8504;
var G__8510 = chunk__8501_8505;
var G__8511 = count__8502_8506;
var G__8512 = (i__8503_8507 + 1);
seq__8500_8504 = G__8509;
chunk__8501_8505 = G__8510;
count__8502_8506 = G__8511;
i__8503_8507 = G__8512;
continue;
}
} else
{var temp__4092__auto___8513 = cljs.core.seq.call(null,seq__8500_8504);if(temp__4092__auto___8513)
{var seq__8500_8514__$1 = temp__4092__auto___8513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8500_8514__$1))
{var c__4132__auto___8515 = cljs.core.chunk_first.call(null,seq__8500_8514__$1);{
var G__8516 = cljs.core.chunk_rest.call(null,seq__8500_8514__$1);
var G__8517 = c__4132__auto___8515;
var G__8518 = cljs.core.count.call(null,c__4132__auto___8515);
var G__8519 = 0;
seq__8500_8504 = G__8516;
chunk__8501_8505 = G__8517;
count__8502_8506 = G__8518;
i__8503_8507 = G__8519;
continue;
}
} else
{var node_8520 = cljs.core.first.call(null,seq__8500_8514__$1);goog.dom.classes.remove(node_8520,class$);
{
var G__8521 = cljs.core.next.call(null,seq__8500_8514__$1);
var G__8522 = null;
var G__8523 = 0;
var G__8524 = 0;
seq__8500_8504 = G__8521;
chunk__8501_8505 = G__8522;
count__8502_8506 = G__8523;
i__8503_8507 = G__8524;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_8533__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__8529_8534 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8530_8535 = null;var count__8531_8536 = 0;var i__8532_8537 = 0;while(true){
if((i__8532_8537 < count__8531_8536))
{var node_8538 = cljs.core._nth.call(null,chunk__8530_8535,i__8532_8537);goog.dom.classes.set(node_8538,classes_8533__$1);
{
var G__8539 = seq__8529_8534;
var G__8540 = chunk__8530_8535;
var G__8541 = count__8531_8536;
var G__8542 = (i__8532_8537 + 1);
seq__8529_8534 = G__8539;
chunk__8530_8535 = G__8540;
count__8531_8536 = G__8541;
i__8532_8537 = G__8542;
continue;
}
} else
{var temp__4092__auto___8543 = cljs.core.seq.call(null,seq__8529_8534);if(temp__4092__auto___8543)
{var seq__8529_8544__$1 = temp__4092__auto___8543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_8544__$1))
{var c__4132__auto___8545 = cljs.core.chunk_first.call(null,seq__8529_8544__$1);{
var G__8546 = cljs.core.chunk_rest.call(null,seq__8529_8544__$1);
var G__8547 = c__4132__auto___8545;
var G__8548 = cljs.core.count.call(null,c__4132__auto___8545);
var G__8549 = 0;
seq__8529_8534 = G__8546;
chunk__8530_8535 = G__8547;
count__8531_8536 = G__8548;
i__8532_8537 = G__8549;
continue;
}
} else
{var node_8550 = cljs.core.first.call(null,seq__8529_8544__$1);goog.dom.classes.set(node_8550,classes_8533__$1);
{
var G__8551 = cljs.core.next.call(null,seq__8529_8544__$1);
var G__8552 = null;
var G__8553 = 0;
var G__8554 = 0;
seq__8529_8534 = G__8551;
chunk__8530_8535 = G__8552;
count__8531_8536 = G__8553;
i__8532_8537 = G__8554;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__8559_8563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8560_8564 = null;var count__8561_8565 = 0;var i__8562_8566 = 0;while(true){
if((i__8562_8566 < count__8561_8565))
{var node_8567 = cljs.core._nth.call(null,chunk__8560_8564,i__8562_8566);goog.dom.setTextContent(node_8567,value);
{
var G__8568 = seq__8559_8563;
var G__8569 = chunk__8560_8564;
var G__8570 = count__8561_8565;
var G__8571 = (i__8562_8566 + 1);
seq__8559_8563 = G__8568;
chunk__8560_8564 = G__8569;
count__8561_8565 = G__8570;
i__8562_8566 = G__8571;
continue;
}
} else
{var temp__4092__auto___8572 = cljs.core.seq.call(null,seq__8559_8563);if(temp__4092__auto___8572)
{var seq__8559_8573__$1 = temp__4092__auto___8572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8559_8573__$1))
{var c__4132__auto___8574 = cljs.core.chunk_first.call(null,seq__8559_8573__$1);{
var G__8575 = cljs.core.chunk_rest.call(null,seq__8559_8573__$1);
var G__8576 = c__4132__auto___8574;
var G__8577 = cljs.core.count.call(null,c__4132__auto___8574);
var G__8578 = 0;
seq__8559_8563 = G__8575;
chunk__8560_8564 = G__8576;
count__8561_8565 = G__8577;
i__8562_8566 = G__8578;
continue;
}
} else
{var node_8579 = cljs.core.first.call(null,seq__8559_8573__$1);goog.dom.setTextContent(node_8579,value);
{
var G__8580 = cljs.core.next.call(null,seq__8559_8573__$1);
var G__8581 = null;
var G__8582 = 0;
var G__8583 = 0;
seq__8559_8563 = G__8580;
chunk__8560_8564 = G__8581;
count__8561_8565 = G__8582;
i__8562_8566 = G__8583;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__8588_8592 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8589_8593 = null;var count__8590_8594 = 0;var i__8591_8595 = 0;while(true){
if((i__8591_8595 < count__8590_8594))
{var node_8596 = cljs.core._nth.call(null,chunk__8589_8593,i__8591_8595);goog.dom.forms.setValue(node_8596,value);
{
var G__8597 = seq__8588_8592;
var G__8598 = chunk__8589_8593;
var G__8599 = count__8590_8594;
var G__8600 = (i__8591_8595 + 1);
seq__8588_8592 = G__8597;
chunk__8589_8593 = G__8598;
count__8590_8594 = G__8599;
i__8591_8595 = G__8600;
continue;
}
} else
{var temp__4092__auto___8601 = cljs.core.seq.call(null,seq__8588_8592);if(temp__4092__auto___8601)
{var seq__8588_8602__$1 = temp__4092__auto___8601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8588_8602__$1))
{var c__4132__auto___8603 = cljs.core.chunk_first.call(null,seq__8588_8602__$1);{
var G__8604 = cljs.core.chunk_rest.call(null,seq__8588_8602__$1);
var G__8605 = c__4132__auto___8603;
var G__8606 = cljs.core.count.call(null,c__4132__auto___8603);
var G__8607 = 0;
seq__8588_8592 = G__8604;
chunk__8589_8593 = G__8605;
count__8590_8594 = G__8606;
i__8591_8595 = G__8607;
continue;
}
} else
{var node_8608 = cljs.core.first.call(null,seq__8588_8602__$1);goog.dom.forms.setValue(node_8608,value);
{
var G__8609 = cljs.core.next.call(null,seq__8588_8602__$1);
var G__8610 = null;
var G__8611 = 0;
var G__8612 = 0;
seq__8588_8592 = G__8609;
chunk__8589_8593 = G__8610;
count__8590_8594 = G__8611;
i__8591_8595 = G__8612;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3391__auto__ = allows_inner_html_QMARK_;if(and__3391__auto__)
{var and__3391__auto____$1 = (function (){var or__3403__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3391__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{var value_8623 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__8619_8624 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8620_8625 = null;var count__8621_8626 = 0;var i__8622_8627 = 0;while(true){
if((i__8622_8627 < count__8621_8626))
{var node_8628 = cljs.core._nth.call(null,chunk__8620_8625,i__8622_8627);goog.events.removeAll(node_8628);
node_8628.innerHTML = value_8623;
{
var G__8629 = seq__8619_8624;
var G__8630 = chunk__8620_8625;
var G__8631 = count__8621_8626;
var G__8632 = (i__8622_8627 + 1);
seq__8619_8624 = G__8629;
chunk__8620_8625 = G__8630;
count__8621_8626 = G__8631;
i__8622_8627 = G__8632;
continue;
}
} else
{var temp__4092__auto___8633 = cljs.core.seq.call(null,seq__8619_8624);if(temp__4092__auto___8633)
{var seq__8619_8634__$1 = temp__4092__auto___8633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8619_8634__$1))
{var c__4132__auto___8635 = cljs.core.chunk_first.call(null,seq__8619_8634__$1);{
var G__8636 = cljs.core.chunk_rest.call(null,seq__8619_8634__$1);
var G__8637 = c__4132__auto___8635;
var G__8638 = cljs.core.count.call(null,c__4132__auto___8635);
var G__8639 = 0;
seq__8619_8624 = G__8636;
chunk__8620_8625 = G__8637;
count__8621_8626 = G__8638;
i__8622_8627 = G__8639;
continue;
}
} else
{var node_8640 = cljs.core.first.call(null,seq__8619_8634__$1);goog.events.removeAll(node_8640);
node_8640.innerHTML = value_8623;
{
var G__8641 = cljs.core.next.call(null,seq__8619_8634__$1);
var G__8642 = null;
var G__8643 = 0;
var G__8644 = 0;
seq__8619_8624 = G__8641;
chunk__8620_8625 = G__8642;
count__8621_8626 = G__8643;
i__8622_8627 = G__8644;
continue;
}
}
} else
{}
}
break;
}
}catch (e8618){if((e8618 instanceof Error))
{var e_8645 = e8618;domina.replace_children_BANG_.call(null,content,value_8623);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8618;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3391__auto__ = bubble;if(cljs.core.truth_(and__3391__auto__))
{return (value == null);
} else
{return and__3391__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3403__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__8652_8656 = cljs.core.seq.call(null,children);var chunk__8653_8657 = null;var count__8654_8658 = 0;var i__8655_8659 = 0;while(true){
if((i__8655_8659 < count__8654_8658))
{var child_8660 = cljs.core._nth.call(null,chunk__8653_8657,i__8655_8659);frag.appendChild(child_8660);
{
var G__8661 = seq__8652_8656;
var G__8662 = chunk__8653_8657;
var G__8663 = count__8654_8658;
var G__8664 = (i__8655_8659 + 1);
seq__8652_8656 = G__8661;
chunk__8653_8657 = G__8662;
count__8654_8658 = G__8663;
i__8655_8659 = G__8664;
continue;
}
} else
{var temp__4092__auto___8665 = cljs.core.seq.call(null,seq__8652_8656);if(temp__4092__auto___8665)
{var seq__8652_8666__$1 = temp__4092__auto___8665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8652_8666__$1))
{var c__4132__auto___8667 = cljs.core.chunk_first.call(null,seq__8652_8666__$1);{
var G__8668 = cljs.core.chunk_rest.call(null,seq__8652_8666__$1);
var G__8669 = c__4132__auto___8667;
var G__8670 = cljs.core.count.call(null,c__4132__auto___8667);
var G__8671 = 0;
seq__8652_8656 = G__8668;
chunk__8653_8657 = G__8669;
count__8654_8658 = G__8670;
i__8655_8659 = G__8671;
continue;
}
} else
{var child_8672 = cljs.core.first.call(null,seq__8652_8666__$1);frag.appendChild(child_8672);
{
var G__8673 = cljs.core.next.call(null,seq__8652_8666__$1);
var G__8674 = null;
var G__8675 = 0;
var G__8676 = 0;
seq__8652_8656 = G__8673;
chunk__8653_8657 = G__8674;
count__8654_8658 = G__8675;
i__8655_8659 = G__8676;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8646_SHARP_,p2__8647_SHARP_){return f.call(null,p1__8646_SHARP_,p2__8647_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3391__auto__ = obj;if(cljs.core.truth_(and__3391__auto__))
{return obj.length;
} else
{return and__3391__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8678 = list_thing;if(G__8678)
{var bit__4034__auto__ = (G__8678.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4034__auto__) || (G__8678.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8678);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8678);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__8679 = content;if(G__8679)
{var bit__4034__auto__ = (G__8679.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4034__auto__) || (G__8679.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8679.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8679);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8679);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__8680 = content;if(G__8680)
{var bit__4034__auto__ = (G__8680.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4034__auto__) || (G__8680.cljs$core$ISeqable$))
{return true;
} else
{if((!G__8680.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__8680);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
