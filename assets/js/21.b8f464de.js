(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22],{302:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return a}))},303:function(t,e,r){r(1)({target:"Array",stat:!0},{isArray:r(43)})},312:function(t,e,r){var n=r(1),i=r(315).entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},313:function(t,e){},315:function(t,e,r){var n=r(7),i=r(48),a=r(11),o=r(65).f,s=function(t){return function(e){for(var r,s=a(e),u=i(s),c=u.length,f=0,p=[];c>f;)r=u[f++],n&&!o.call(s,r)||p.push(t?[r,s[r]]:s[r]);return p}};t.exports={entries:s(!0),values:s(!1)}},319:function(t,e,r){"use strict";r.r(e);var n=r(68),i=r(49);var a=r(27),o=r(302),s=r(47),u=(r(93),r(96),r(28),r(62),r(94),r(155),r(156),r(158),r(303),r(312),r(317)),c=r.n(u),f=r(318),p=r(314),d=r(310),l={name:"DruxtEntity",extends:p.c,props:{mode:{type:String,default:"default"},type:{type:String,required:!0},uuid:{type:[Boolean,String],default:!1},schemaType:{type:String,default:void 0}},fetch:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var r,n,i,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getSchema({resourceType:t.type,mode:t.mode,schemaType:t.schemaType||"view"});case 3:t.schema=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return r=t.getModuleComponents(),n={is:((r.filter((function(t){return t.global}))||[])[0]||{}).name||"DruxtWrapper",options:r.map((function(t){return t.name}))||[]},e.next=12,t.getWrapperData(n.is);case 12:if(i=e.sent,n.settings=c()((t.$druxtEntity||{}).options||{},i.druxt||{},{arrayMerge:function(t,e){return e}}),!t.uuid||t.value){e.next=20;break}return a=t.getQuery(n.settings),e.next=18,t.getResource({type:t.type,id:t.uuid,query:a});case 18:s=e.sent.data,t.model=JSON.parse(JSON.stringify(s||{}));case 20:n.slots=Object.keys(t.getScopedSlots()),n=Object(o.a)(Object(o.a)({},n),t.getModulePropsData(i.props)),t.component=n;case 23:case"end":return e.stop()}}),e,null,[[0,6]])})))()},fetchKey:function(t){var e=["DruxtEntity",this.type,this.uuid,this.mode,this.schemaType].filter((function(t){return t}));return[].concat(Object(a.a)(e),[t(e.join(":"))]).join(":")},data:function(t){var e=t.type,r=t.value;return{model:Object(o.a)({attributes:{},relationships:{},type:e},r),schema:null}},computed:{entity:function(t){var e=t.model;return Object(o.a)({},e)},fields:function(t){var e=t.errors,r=t.isEmpty,n=t.model,a=t.schema,s=t.schemaType;if(!a)return!1;var u,c={},f=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(i.a)(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw o}}}}(a.fields);try{var p=function(){var t=u.value,i=!!((t.settings||{}).storage||{}).target_type||!!(n.relationships||{})[t.id],f=i?((n||{}).relationships||{})[t.id]:((n||{}).attributes||{})[t.id];if("form"!==s&&r(f))return"continue";c[t.id]={id:t.id,data:f,errors:(e||[]).filter((function(e){return((e.source||{}).pointer||"").startsWith("/data/attributes/".concat(t.id))})),relationship:i,schema:Object(o.a)({config:a.config},t),value:f}};for(f.s();!(u=f.n()).done;)p()}catch(t){f.e(t)}finally{f.f()}return c}},watch:{mode:function(){this.$fetch()},schemaType:function(){this.$fetch()},type:function(){this.$fetch()},uuid:function(){this.$fetch()}},methods:Object(o.a)({getQuery:function(t){var e=new f.DrupalJsonApiParams,r=(t.query||{}).schema?[].concat(Object(a.a)(((this.schema||{}).fields||[]).map((function(t){return t.id}))),Object(a.a)((t.query||{}).fields||[])):(t.query||{}).fields||[];return!!r.length&&(e.addFields(this.type,r),e)},isEmpty:function(t){return void 0===t||(!t||(!(!Array.isArray(t.data)||t.data.length)||void 0!==t.data&&!t.data))}},Object(d.a)({getResource:"druxt/getResource",getSchema:"druxtSchema/get"})),druxt:{componentOptions:function(t){var e=t.mode,r=t.schema,n=t.schemaType,i=t.type;return[[(r||{}).resourceType||i,((r||{}).config||{}).mode||e,((r||{}).config||{}).schemaType||n||"view"],[((r||{}).config||{}).mode||e]]},propsData:function(t){var e=t.fields,r=t.model;return{entity:r,fields:e,schema:t.schema,value:r}},slots:function(t){var e=this,r={};return this.schema?(Object.entries(this.fields).map((function(i){var a=Object(n.a)(i,2),o=a[0],s=a[1];r[o]=function(r){return t("DruxtField",{attrs:r,key:o,props:s,on:{input:function(t){var r=s.relationship?"relationships":"attributes";e.model[r][o]=t,e.$emit("input",e.model)}},ref:o})}})),r.default=function(t){return Object.entries(e.fields).map((function(e){var i=Object(n.a)(e,1)[0];return r[i](t)}))},r):(this.$nuxt.context.isDev&&(r.default=function(r){return t("details",{attrs:r,style:{border:"2px dashed lightgrey",margin:"0.5em 0",padding:"1em"}},[t("summary",["[DruxtEntity] Missing schema for '".concat(e.type,"--").concat(e.mode,"'")]),t("br"),t("label",["Component options:",t("ul",e.component.options.map((function(e){return t("li",[e])})))]),t("br"),t("label",["Entity:",t("pre",[JSON.stringify(e.entity,null,"  ")])])])}),r)}}},m=r(42),y=Object(m.a)(l,void 0,void 0,!1,null,null,null);e.default=y.exports},478:function(t,e,r){"use strict";r.r(e);var n=r(68),i=r(27),a=r(302),o=r(47),s=(r(93),r(155),r(156),r(62),r(312),r(319)),u={name:"DruxtEntityForm",extends:s.default,props:{schemaType:{type:String,default:"form"}},data:function(){return{response:void 0,submitting:!1}},computed:{errors:function(t){return(t.response||{}).errors}},methods:{onReset:function(){this.model=JSON.parse(JSON.stringify(this.entity)),this.response=void 0,this.$emit("reset")},onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.submitting){e.next=2;break}return e.abrupt("return",!1);case 2:return t.submitting=!0,r=t.schema.config.href,n="post",t.entity.id&&(r=[r,t.entity.id].join("/"),n="patch"),e.prev=6,e.next=9,t.$druxt.axios[n](r,{data:t.model},{headers:{"Content-Type":"application/vnd.api+json"}});case 9:t.response=e.sent,i=t.response.data.data,i.type,i.id,t.$store.commit("druxt/addResource",{resource:i}),t.$emit("submit",i),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),t.response=(e.t0.response||{}).data||e.t0.message,t.$emit("error",t.response);case 20:t.submitting=!1;case 21:case"end":return e.stop()}}),e,null,[[6,16]])})))()}},druxt:Object(a.a)(Object(a.a)({},s.default.druxt),{},{slots:function(t){var e=this,r=s.default.druxt.slots.call(this,t);return r.buttons=function(r){return t("DruxtEntityFormButtons",{attrs:r,on:{reset:e.onReset,submit:e.onSubmit},props:{schema:e.schema||{}},ref:"buttons"})},r.default=function(t){return[].concat(Object(i.a)(Object.entries(e.fields).map((function(e){var i=Object(n.a)(e,1)[0];return r[i](t)}))),[r.buttons(t)])},r}})},c=r(42),f=Object(c.a)(u,void 0,void 0,!1,null,null,null);e.default=f.exports}}]);