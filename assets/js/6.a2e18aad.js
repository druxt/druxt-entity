(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{300:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(300),i={mixins:[{props:{context:{type:Object,default:function(){return Object(r.a)({},this.$parent.context)}}}}],props:{inner:{type:Object,default:function(){return{component:"div",props:{}}}},items:{type:Array,required:!0},schema:{type:Object,required:!0},wrapper:{type:Object,default:function(){return{component:"div",props:{}}}}}}},311:function(t,e,n){"use strict";var r=n(1),i=n(312);r({target:"String",proto:!0,forced:n(313)("link")},{link:function(t){return i(this,"a","href",t)}})},312:function(t,e,n){var r=n(20),i=/"/g;t.exports=function(t,e,n,o){var a=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+a+"</"+e+">"}},313:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},316:function(t,e,n){"use strict";var r=n(1),i=n(28).find,o=n(95),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},424:function(t,e,n){"use strict";n.r(e);var r=n(300),i=n(44),o=(n(91),n(316),n(93),n(160),n(311),n(21),n(22),n(301)),a=n(303),c={name:"DruxtFieldEntityReferenceLabel",mixins:[o.a],fetch:function(){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t.items);case 1:if((e.t1=e.t0()).done){e.next=12;break}return n=e.t1.value,r=t.items[n],e.next=6,t.getResource({id:r.uuid,type:r.type});case 6:i=e.sent,t.entities||(t.entities=[]),t.entities[n]={props:!1,text:i.data.attributes[Object.keys(i.data.attributes).find((function(t){return["name","title"].includes(t)}))]},((t.schema.settings||{}).display||{}).link&&i.data.attributes.path.alias&&(t.component="nuxt-link",t.entities[n].props={to:i.data.attributes.path.alias}),e.next=1;break;case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{component:"span",entities:!1,loading:!1}},methods:Object(r.a)({},Object(a.a)({getResource:"druxt/getResource"}))},u=n(42),s=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n(t.wrapper.component,t._b({tag:"component"},"component",t.wrapper.props,!1),[t.$slots["label-above"]?n("div",[t._t("label-above")],2):t._e(),t._v(" "),t.$slots["label-inline"]?t._t("label-inline"):t._e(),t._v(" "),t._l(t.entities,(function(e,r){return n(t.component,t._b({key:r,tag:"component"},"component",e.props||!1,!1),[t._v("\n    "+t._s(e.text)+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=s.exports}}]);