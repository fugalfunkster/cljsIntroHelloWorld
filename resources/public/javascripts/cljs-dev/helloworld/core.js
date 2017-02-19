// Compiled by ClojureScript 0.0-3308 {}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('helloworld.title');
goog.require('cljs.core.async');
if(typeof helloworld.core.app_state !== 'undefined'){
} else {
helloworld.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello from App State!",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 1"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 3"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 4"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 5"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"Item 6"], null)], null),new cljs.core.Keyword(null,"active-item","active-item",-1265645988),cljs.core.PersistentArrayMap.EMPTY], null));
}
helloworld.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
helloworld.core.EVENTS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),(function (p__24726){
var map__24727 = p__24726;
var map__24727__$1 = ((cljs.core.seq_QMARK_.call(null,map__24727))?cljs.core.apply.call(null,cljs.core.hash_map,map__24727):map__24727);
var active_item = cljs.core.get.call(null,map__24727__$1,new cljs.core.Keyword(null,"active-item","active-item",-1265645988));
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),active_item);
})], null);
var c__19052__auto___24760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19052__auto___24760){
return (function (){
var f__19053__auto__ = (function (){var switch__19031__auto__ = ((function (c__19052__auto___24760){
return (function (state_24744){
var state_val_24745 = (state_24744[(1)]);
if((state_val_24745 === (1))){
var state_24744__$1 = state_24744;
var statearr_24746_24761 = state_24744__$1;
(statearr_24746_24761[(2)] = null);

(statearr_24746_24761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (2))){
var state_24744__$1 = state_24744;
var statearr_24747_24762 = state_24744__$1;
(statearr_24747_24762[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (3))){
var inst_24742 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24744__$1,inst_24742);
} else {
if((state_val_24745 === (4))){
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24744__$1,(7),helloworld.core.EVENTCHANNEL);
} else {
if((state_val_24745 === (5))){
var state_24744__$1 = state_24744;
var statearr_24749_24763 = state_24744__$1;
(statearr_24749_24763[(2)] = null);

(statearr_24749_24763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (6))){
var inst_24740 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24750_24764 = state_24744__$1;
(statearr_24750_24764[(2)] = inst_24740);

(statearr_24750_24764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (7))){
var inst_24732 = (state_24744[(2)]);
var inst_24733 = cljs.core.nth.call(null,inst_24732,(0),null);
var inst_24734 = cljs.core.nth.call(null,inst_24732,(1),null);
var inst_24735 = inst_24733.call(null,helloworld.core.EVENTS);
var inst_24736 = inst_24735.call(null,inst_24734);
var state_24744__$1 = (function (){var statearr_24751 = state_24744;
(statearr_24751[(7)] = inst_24736);

return statearr_24751;
})();
var statearr_24752_24765 = state_24744__$1;
(statearr_24752_24765[(2)] = null);

(statearr_24752_24765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19052__auto___24760))
;
return ((function (switch__19031__auto__,c__19052__auto___24760){
return (function() {
var helloworld$core$state_machine__19032__auto__ = null;
var helloworld$core$state_machine__19032__auto____0 = (function (){
var statearr_24756 = [null,null,null,null,null,null,null,null];
(statearr_24756[(0)] = helloworld$core$state_machine__19032__auto__);

(statearr_24756[(1)] = (1));

return statearr_24756;
});
var helloworld$core$state_machine__19032__auto____1 = (function (state_24744){
while(true){
var ret_value__19033__auto__ = (function (){try{while(true){
var result__19034__auto__ = switch__19031__auto__.call(null,state_24744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19034__auto__;
}
break;
}
}catch (e24757){if((e24757 instanceof Object)){
var ex__19035__auto__ = e24757;
var statearr_24758_24766 = state_24744;
(statearr_24758_24766[(5)] = ex__19035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24767 = state_24744;
state_24744 = G__24767;
continue;
} else {
return ret_value__19033__auto__;
}
break;
}
});
helloworld$core$state_machine__19032__auto__ = function(state_24744){
switch(arguments.length){
case 0:
return helloworld$core$state_machine__19032__auto____0.call(this);
case 1:
return helloworld$core$state_machine__19032__auto____1.call(this,state_24744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$state_machine__19032__auto____0;
helloworld$core$state_machine__19032__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$state_machine__19032__auto____1;
return helloworld$core$state_machine__19032__auto__;
})()
;})(switch__19031__auto__,c__19052__auto___24760))
})();
var state__19054__auto__ = (function (){var statearr_24759 = f__19053__auto__.call(null);
(statearr_24759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19052__auto___24760);

return statearr_24759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19054__auto__);
});})(c__19052__auto___24760))
);

helloworld.core.app = (function helloworld$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.title.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-list"], null),helloworld.title.items_list.call(null,helloworld.core.EVENTCHANNEL,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state)),new cljs.core.Keyword(null,"active-item","active-item",-1265645988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,helloworld.core.app_state)))], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [helloworld.core.app], null),document.querySelector("#cljs-target"));
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,helloworld.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"New Message...");
}),(2000));

//# sourceMappingURL=core.js.map