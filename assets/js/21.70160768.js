(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{300:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(300),o={mixins:[{props:{context:{type:Object,default:function(){return Object(r.a)({},this.$parent.context)}}}}],props:{inner:{type:Object,default:function(){return{component:"div",props:{}}}},items:{type:Array,required:!0},schema:{type:Object,required:!0},wrapper:{type:Object,default:function(){return{component:"div",props:{}}}}}}},426:function(e,t,n){"use strict";n.r(t);n(62),n(43);var r={name:"DruxtFieldLink",mixins:[n(301).a],computed:{links:function(){var e=[];for(var t in this.items){var n=this.items[t];e[t]={component:!1,title:this.items[t].title,props:{}},/^(?:[a-z]+:)?\/\//i.test(n.uri)?(e[t].component="a",e[t].props.href=n.uri):(e[t].component="nuxt-link",e[t].props.to=n.uri.replace(/^internal:/,""))}return e}}},o=n(42),i=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.wrapper.component,e._b({tag:"component"},"component",e.wrapper.props,!1),[e.$slots["label-above"]?n("div",[e._t("label-above")],2):e._e(),e._v(" "),e.$slots["label-inline"]?e._t("label-inline"):e._e(),e._v(" "),e._l(e.links,(function(t,r){return n(t.component,e._b({key:r,tag:"component"},"component",t.props,!1),[e._v("\n    "+e._s(t.title)+"\n  ")])}))],2)}),[],!1,null,null,null);t.default=i.exports}}]);