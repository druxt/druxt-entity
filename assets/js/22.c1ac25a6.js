(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{300:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return a}))},307:function(e,t,r){r(1)({target:"Array",stat:!0},{isArray:r(47)})},310:function(e,t,r){var n=r(1),i=r(313).entries;n({target:"Object",stat:!0},{entries:function(e){return i(e)}})},311:function(e,t){},313:function(e,t,r){var n=r(7),i=r(48),a=r(11),o=r(64).f,u=function(e){return function(t){for(var r,u=a(t),c=i(u),s=c.length,f=0,l=[];s>f;)r=c[f++],n&&!o.call(u,r)||l.push(e?[r,u[r]]:u[r]);return l}};e.exports={entries:u(!0),values:u(!1)}},316:function(e,t,r){"use strict";r.r(t);var n=r(66),i=r(49);var a=r(28),o=r(300),u=r(46),c=(r(92),r(95),r(27),r(62),r(153),r(154),r(155),r(310),r(307),r(314)),s=r.n(c),f=r(315),l=r(312),p=r(308),d={name:"DruxtEntity",extends:l.c,props:{mode:{type:String,default:"default"},type:{type:String,required:!0},uuid:{type:[Boolean,String],default:!1},schemaType:{type:String,default:void 0},value:{type:Object,default:void 0}},fetch:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark((function t(){var r,n,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSchema({resourceType:e.type,mode:e.mode,schemaType:e.schemaType||"view"});case 2:return e.schema=t.sent,r=e.getModuleComponents(),n={is:((r.filter((function(e){return e.global}))||[])[0]||{}).name||"DruxtWrapper",options:r.map((function(e){return e.name}))||[]},t.next=7,e.getWrapperData(n.is);case 7:if(i=t.sent,n.settings=s()((e.$druxtEntity||{}).options||{},i.druxt||{},{arrayMerge:function(e,t){return t}}),!e.uuid||e.value){t.next=15;break}return a=e.getQuery(n.settings),t.next=13,e.getResource({type:e.type,id:e.uuid,query:a});case 13:e.entity=t.sent.data,e.model=JSON.parse(JSON.stringify(e.entity||{}));case 15:n=Object(o.a)(Object(o.a)({},n),e.getModulePropsData(i.props)),e.component=n;case 17:case"end":return t.stop()}}),t)})))()},fetchKey:function(e){var t=["DruxtEntity",this.type,this.uuid,this.mode,this.schemaType].filter((function(e){return e}));return[].concat(Object(a.a)(t),[e(t.join(":"))]).join(":")},data:function(e){var t=e.type,r=e.value;return{entity:Object(o.a)({attributes:{},relationships:{},type:t},r),model:Object(o.a)({attributes:{},relationships:{},type:t},r),schema:null}},computed:{fields:function(){var e=this;if(!this.schema)return!1;var t,r=Object(o.a)(Object(o.a)({},this.model.attributes||{}),this.model.relationships||{}),n={},a=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(i.a)(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw o}}}}(this.schema.fields);try{var u=function(){var i=t.value;if("form"!==e.schemaType&&e.isEmpty(r[i.id]))return"continue";n[i.id]={id:i.id,data:r[i.id],errors:(e.errors||[]).filter((function(e){return((e.source||{}).pointer||"").startsWith("/data/attributes/".concat(i.id))})),relationship:!!((i.settings||{}).storage||{}).target_type||!!(e.model.relationships||{})[i.id],schema:Object(o.a)({config:e.schema.config},i),value:r[i.id]}};for(a.s();!(t=a.n()).done;)u()}catch(e){a.e(e)}finally{a.f()}return n}},methods:Object(o.a)({getQuery:function(e){var t=new f.DrupalJsonApiParams,r=(e.query||{}).schema?[].concat(Object(a.a)(this.schema.fields.map((function(e){return e.id}))),Object(a.a)((e.query||{}).fields||[])):(e.query||{}).fields||[];return!!r.length&&(t.addFields(this.type,r),t)},getScopedSlots:function(){var e=this,t={};return Object.entries(this.fields).map((function(r){var i=Object(n.a)(r,2),a=i[0],o=i[1];t[a]=function(t){return e.$createElement("DruxtField",{attrs:t,key:a,props:o,on:{input:function(t){var r=o.relationship?"relationships":"attributes";e.model[r][a]=t,e.$emit("input",e.model)}},ref:a})}})),t.default=function(r){return Object.entries(e.fields).map((function(e){var i=Object(n.a)(e,1)[0];return t[i](r)}))},t},isEmpty:function(e){return void 0===e||(!e||(!(!Array.isArray(e.data)||e.data.length)||void 0!==e.data&&!e.data))}},Object(p.a)({getResource:"druxt/getResource",getSchema:"druxtSchema/get"})),druxt:{componentOptions:function(e){var t=e.schema;return[[t.resourceType,t.config.mode,t.config.schemaType],[t.config.mode]]},propsData:function(e){var t=e.entity,r=e.fields,n=e.model;return{entity:t,fields:r,schema:e.schema,value:n}}}},y=r(42),m=Object(y.a)(d,void 0,void 0,!1,null,null,null);t.default=m.exports}}]);