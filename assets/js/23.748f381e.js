(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{377:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(378),r={props:{context:{type:Object,default:function(){return Object(i.a)({},this.$parent.context)}}}}},379:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={mixins:[n(377).a],props:{inner:{type:Object,default:function(){return{component:"div",props:{}}}},items:{type:Array,required:!0},schema:{type:Object,required:!0},wrapper:{type:Object,default:function(){return{component:"div",props:{}}}}}}},498:function(t,e,n){"use strict";n.r(e);var i=n(378),r=n(379),a=n(389),u={name:"DruxtFieldFileDefault",mixins:[r.a],data:function(){return{entities:[]}},created:function(){var t=this,e=function(e){var n=t.items[e];t.getEntity({id:n.uuid,type:n.type}).then((function(n){t.entities[e]=n,t.$forceUpdate()}))};for(var n in this.items)e(n)},methods:Object(i.a)({},Object(a.a)({getEntity:"druxtRouter/getEntity"}))},o=n(53),s=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.entities&&void 0!==t.entities[0]?n(t.wrapper.component,t._b({tag:"component"},"component",t.wrapper.props,!1),[t.$slots["label-above"]?n("div",[t._t("label-above")],2):t._e(),t._v(" "),t.$slots["label-inline"]?t._t("label-inline"):t._e(),t._v(" "),t._l(t.entities,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:e.attributes.uri.value.replace("public://","/sites/default/files/")}},[t._v("\n    "+t._s(e.attributes.filename)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=s.exports}}]);