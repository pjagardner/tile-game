// Compiled by ClojureScript 0.0-2127
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj8070 = {};return obj8070;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.prevent_default[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.prevent_default["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.target[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.current_target[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.current_target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.event_type[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.event_type["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4011__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.raw_event[goog.typeOf(x__4011__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.raw_event["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){if(cljs.core.contains_QMARK_.call(null,domina.events.builtin_events,evt_type))
{return cljs.core.name.call(null,evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t8074 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t8074 = (function (evt,f,create_listener_function,meta8075){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8075 = meta8075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8074.cljs$lang$type = true;
domina.events.t8074.cljs$lang$ctorStr = "domina.events/t8074";
domina.events.t8074.cljs$lang$ctorPrWriter = (function (this__3952__auto__,writer__3953__auto__,opt__3954__auto__){return cljs.core._write.call(null,writer__3953__auto__,"domina.events/t8074");
});
domina.events.t8074.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t8074.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3403__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return not_found;
}
});
domina.events.t8074.prototype.domina$events$Event$ = true;
domina.events.t8074.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t8074.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t8074.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t8074.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t8074.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t8074.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t8074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8076){var self__ = this;
var _8076__$1 = this;return self__.meta8075;
});
domina.events.t8074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8076,meta8075__$1){var self__ = this;
var _8076__$1 = this;return (new domina.events.t8074(self__.evt,self__.f,self__.create_listener_function,meta8075__$1));
});
domina.events.__GT_t8074 = (function __GT_t8074(evt__$1,f__$1,create_listener_function__$1,meta8075){return (new domina.events.t8074(evt__$1,f__$1,create_listener_function__$1,meta8075));
});
}
return (new domina.events.t8074(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = domina.events.find_builtin_type.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4101__auto__ = (function iter__8081(s__8082){return (new cljs.core.LazySeq(null,(function (){var s__8082__$1 = s__8082;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8082__$1);if(temp__4092__auto__)
{var s__8082__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8082__$2))
{var c__4099__auto__ = cljs.core.chunk_first.call(null,s__8082__$2);var size__4100__auto__ = cljs.core.count.call(null,c__4099__auto__);var b__8084 = cljs.core.chunk_buffer.call(null,size__4100__auto__);if((function (){var i__8083 = 0;while(true){
if((i__8083 < size__4100__auto__))
{var node = cljs.core._nth.call(null,c__4099__auto__,i__8083);cljs.core.chunk_append.call(null,b__8084,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__8085 = (i__8083 + 1);
i__8083 = G__8085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8084),iter__8081.call(null,cljs.core.chunk_rest.call(null,s__8082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8084),null);
}
} else
{var node = cljs.core.first.call(null,s__8082__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8081.call(null,cljs.core.rest.call(null,s__8082__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4101__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__8094 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8095 = null;var count__8096 = 0;var i__8097 = 0;while(true){
if((i__8097 < count__8096))
{var node = cljs.core._nth.call(null,chunk__8095,i__8097);goog.events.removeAll(node);
{
var G__8102 = seq__8094;
var G__8103 = chunk__8095;
var G__8104 = count__8096;
var G__8105 = (i__8097 + 1);
seq__8094 = G__8102;
chunk__8095 = G__8103;
count__8096 = G__8104;
i__8097 = G__8105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8094);if(temp__4092__auto__)
{var seq__8094__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8094__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__8094__$1);{
var G__8106 = cljs.core.chunk_rest.call(null,seq__8094__$1);
var G__8107 = c__4132__auto__;
var G__8108 = cljs.core.count.call(null,c__4132__auto__);
var G__8109 = 0;
seq__8094 = G__8106;
chunk__8095 = G__8107;
count__8096 = G__8108;
i__8097 = G__8109;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8094__$1);goog.events.removeAll(node);
{
var G__8110 = cljs.core.next.call(null,seq__8094__$1);
var G__8111 = null;
var G__8112 = 0;
var G__8113 = 0;
seq__8094 = G__8110;
chunk__8095 = G__8111;
count__8096 = G__8112;
i__8097 = G__8113;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = domina.events.find_builtin_type.call(null,type);var seq__8098 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8099 = null;var count__8100 = 0;var i__8101 = 0;while(true){
if((i__8101 < count__8100))
{var node = cljs.core._nth.call(null,chunk__8099,i__8101);goog.events.removeAll(node,type__$1);
{
var G__8114 = seq__8098;
var G__8115 = chunk__8099;
var G__8116 = count__8100;
var G__8117 = (i__8101 + 1);
seq__8098 = G__8114;
chunk__8099 = G__8115;
count__8100 = G__8116;
i__8101 = G__8117;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8098);if(temp__4092__auto__)
{var seq__8098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8098__$1))
{var c__4132__auto__ = cljs.core.chunk_first.call(null,seq__8098__$1);{
var G__8118 = cljs.core.chunk_rest.call(null,seq__8098__$1);
var G__8119 = c__4132__auto__;
var G__8120 = cljs.core.count.call(null,c__4132__auto__);
var G__8121 = 0;
seq__8098 = G__8118;
chunk__8099 = G__8119;
count__8100 = G__8120;
i__8101 = G__8121;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8098__$1);goog.events.removeAll(node,type__$1);
{
var G__8122 = cljs.core.next.call(null,seq__8098__$1);
var G__8123 = null;
var G__8124 = 0;
var G__8125 = 0;
seq__8098 = G__8122;
chunk__8099 = G__8123;
count__8100 = G__8124;
i__8101 = G__8125;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__8126 = parent;
var G__8127 = cljs.core.cons.call(null,parent,so_far);
n = G__8126;
so_far = G__8127;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__8136_8144 = cljs.core.seq.call(null,ancestors);var chunk__8137_8145 = null;var count__8138_8146 = 0;var i__8139_8147 = 0;while(true){
if((i__8139_8147 < count__8138_8146))
{var n_8148 = cljs.core._nth.call(null,chunk__8137_8145,i__8139_8147);if(cljs.core.truth_(n_8148.propagationStopped))
{} else
{evt.currentTarget = n_8148;
goog.events.fireListeners(n_8148,evt.type,true,evt);
}
{
var G__8149 = seq__8136_8144;
var G__8150 = chunk__8137_8145;
var G__8151 = count__8138_8146;
var G__8152 = (i__8139_8147 + 1);
seq__8136_8144 = G__8149;
chunk__8137_8145 = G__8150;
count__8138_8146 = G__8151;
i__8139_8147 = G__8152;
continue;
}
} else
{var temp__4092__auto___8153 = cljs.core.seq.call(null,seq__8136_8144);if(temp__4092__auto___8153)
{var seq__8136_8154__$1 = temp__4092__auto___8153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8136_8154__$1))
{var c__4132__auto___8155 = cljs.core.chunk_first.call(null,seq__8136_8154__$1);{
var G__8156 = cljs.core.chunk_rest.call(null,seq__8136_8154__$1);
var G__8157 = c__4132__auto___8155;
var G__8158 = cljs.core.count.call(null,c__4132__auto___8155);
var G__8159 = 0;
seq__8136_8144 = G__8156;
chunk__8137_8145 = G__8157;
count__8138_8146 = G__8158;
i__8139_8147 = G__8159;
continue;
}
} else
{var n_8160 = cljs.core.first.call(null,seq__8136_8154__$1);if(cljs.core.truth_(n_8160.propagationStopped))
{} else
{evt.currentTarget = n_8160;
goog.events.fireListeners(n_8160,evt.type,true,evt);
}
{
var G__8161 = cljs.core.next.call(null,seq__8136_8154__$1);
var G__8162 = null;
var G__8163 = 0;
var G__8164 = 0;
seq__8136_8144 = G__8161;
chunk__8137_8145 = G__8162;
count__8138_8146 = G__8163;
i__8139_8147 = G__8164;
continue;
}
}
} else
{}
}
break;
}
var seq__8140_8165 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__8141_8166 = null;var count__8142_8167 = 0;var i__8143_8168 = 0;while(true){
if((i__8143_8168 < count__8142_8167))
{var n_8169 = cljs.core._nth.call(null,chunk__8141_8166,i__8143_8168);if(cljs.core.truth_(n_8169.propagationStopped))
{} else
{evt.currentTarget = n_8169;
goog.events.fireListeners(n_8169,evt.type,false,evt);
}
{
var G__8170 = seq__8140_8165;
var G__8171 = chunk__8141_8166;
var G__8172 = count__8142_8167;
var G__8173 = (i__8143_8168 + 1);
seq__8140_8165 = G__8170;
chunk__8141_8166 = G__8171;
count__8142_8167 = G__8172;
i__8143_8168 = G__8173;
continue;
}
} else
{var temp__4092__auto___8174 = cljs.core.seq.call(null,seq__8140_8165);if(temp__4092__auto___8174)
{var seq__8140_8175__$1 = temp__4092__auto___8174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8140_8175__$1))
{var c__4132__auto___8176 = cljs.core.chunk_first.call(null,seq__8140_8175__$1);{
var G__8177 = cljs.core.chunk_rest.call(null,seq__8140_8175__$1);
var G__8178 = c__4132__auto___8176;
var G__8179 = cljs.core.count.call(null,c__4132__auto___8176);
var G__8180 = 0;
seq__8140_8165 = G__8177;
chunk__8141_8166 = G__8178;
count__8142_8167 = G__8179;
i__8143_8168 = G__8180;
continue;
}
} else
{var n_8181 = cljs.core.first.call(null,seq__8140_8175__$1);if(cljs.core.truth_(n_8181.propagationStopped))
{} else
{evt.currentTarget = n_8181;
goog.events.fireListeners(n_8181,evt.type,false,evt);
}
{
var G__8182 = cljs.core.next.call(null,seq__8140_8175__$1);
var G__8183 = null;
var G__8184 = 0;
var G__8185 = 0;
seq__8140_8165 = G__8182;
chunk__8141_8166 = G__8183;
count__8142_8167 = G__8184;
i__8143_8168 = G__8185;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3391__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3391__auto__))
{return o.dispatchEvent;
} else
{return and__3391__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(domina.events.find_builtin_type.call(null,type)));var seq__8192_8198 = cljs.core.seq.call(null,evt_map);var chunk__8193_8199 = null;var count__8194_8200 = 0;var i__8195_8201 = 0;while(true){
if((i__8195_8201 < count__8194_8200))
{var vec__8196_8202 = cljs.core._nth.call(null,chunk__8193_8199,i__8195_8201);var k_8203 = cljs.core.nth.call(null,vec__8196_8202,0,null);var v_8204 = cljs.core.nth.call(null,vec__8196_8202,1,null);(evt[k_8203] = v_8204);
{
var G__8205 = seq__8192_8198;
var G__8206 = chunk__8193_8199;
var G__8207 = count__8194_8200;
var G__8208 = (i__8195_8201 + 1);
seq__8192_8198 = G__8205;
chunk__8193_8199 = G__8206;
count__8194_8200 = G__8207;
i__8195_8201 = G__8208;
continue;
}
} else
{var temp__4092__auto___8209 = cljs.core.seq.call(null,seq__8192_8198);if(temp__4092__auto___8209)
{var seq__8192_8210__$1 = temp__4092__auto___8209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8192_8210__$1))
{var c__4132__auto___8211 = cljs.core.chunk_first.call(null,seq__8192_8210__$1);{
var G__8212 = cljs.core.chunk_rest.call(null,seq__8192_8210__$1);
var G__8213 = c__4132__auto___8211;
var G__8214 = cljs.core.count.call(null,c__4132__auto___8211);
var G__8215 = 0;
seq__8192_8198 = G__8212;
chunk__8193_8199 = G__8213;
count__8194_8200 = G__8214;
i__8195_8201 = G__8215;
continue;
}
} else
{var vec__8197_8216 = cljs.core.first.call(null,seq__8192_8210__$1);var k_8217 = cljs.core.nth.call(null,vec__8197_8216,0,null);var v_8218 = cljs.core.nth.call(null,vec__8197_8216,1,null);(evt[k_8217] = v_8218);
{
var G__8219 = cljs.core.next.call(null,seq__8192_8210__$1);
var G__8220 = null;
var G__8221 = 0;
var G__8222 = 0;
seq__8192_8198 = G__8219;
chunk__8193_8199 = G__8220;
count__8194_8200 = G__8221;
i__8195_8201 = G__8222;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = domina.events.find_builtin_type.call(null,type);return cljs.core.mapcat.call(null,(function (p1__8223_SHARP_){return goog.events.getListeners(p1__8223_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
