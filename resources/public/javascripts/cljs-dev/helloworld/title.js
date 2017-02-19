// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.title');
goog.require('cljs.core');
goog.require('cljs.core.async');
helloworld.title.header = (function helloworld$title$header(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),message], null)], null);
});
helloworld.title.items_list = (function helloworld$title$items_list(EVENTCHANNEL,items,active_item){
var iter__16863__auto__ = (function helloworld$title$items_list_$_iter__24800(s__24801){
return (new cljs.core.LazySeq(null,(function (){
var s__24801__$1 = s__24801;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24801__$1);
if(temp__4425__auto__){
var s__24801__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24801__$2)){
var c__16861__auto__ = cljs.core.chunk_first.call(null,s__24801__$2);
var size__16862__auto__ = cljs.core.count.call(null,c__16861__auto__);
var b__24803 = cljs.core.chunk_buffer.call(null,size__16862__auto__);
if((function (){var i__24802 = (0);
while(true){
if((i__24802 < size__16862__auto__)){
var vec__24806 = cljs.core._nth.call(null,c__16861__auto__,i__24802);
var index = cljs.core.nth.call(null,vec__24806,(0),null);
var item = cljs.core.nth.call(null,vec__24806,(1),null);
cljs.core.chunk_append.call(null,b__24803,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"active item":"item"),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24802,vec__24806,index,item,c__16861__auto__,size__16862__auto__,b__24803,s__24801__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(i__24802,vec__24806,index,item,c__16861__auto__,size__16862__auto__,b__24803,s__24801__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__24808 = (i__24802 + (1));
i__24802 = G__24808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24803),helloworld$title$items_list_$_iter__24800.call(null,cljs.core.chunk_rest.call(null,s__24801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24803),null);
}
} else {
var vec__24807 = cljs.core.first.call(null,s__24801__$2);
var index = cljs.core.nth.call(null,vec__24807,(0),null);
var item = cljs.core.nth.call(null,vec__24807,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,item))?"active item":"item"),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__24807,index,item,s__24801__$2,temp__4425__auto__){
return (function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),item], null)], null));
});})(vec__24807,index,item,s__24801__$2,temp__4425__auto__))
], null),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(item)], null)], null),helloworld$title$items_list_$_iter__24800.call(null,cljs.core.rest.call(null,s__24801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16863__auto__.call(null,cljs.core.filter.call(null,((function (iter__16863__auto__){
return (function (p1__24791_SHARP_){
return cljs.core.even_QMARK_.call(null,cljs.core.first.call(null,p1__24791_SHARP_));
});})(iter__16863__auto__))
,cljs.core.map_indexed.call(null,cljs.core.vector,items)));
});

//# sourceMappingURL=title.js.map