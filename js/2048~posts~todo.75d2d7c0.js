(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2048~posts~todo"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),r=n("5530"),a=(n("4b85"),n("2b0e")),o=n("d9f7"),s=n("80d2"),u=["sm","md","lg","xl"],c=["start","end","center"];function l(t,e){return u.reduce((function(n,i){return n[t+Object(s["w"])(i)]=e(),n}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:h}})),y={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var i=b[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var w=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:h}},g),render:function(t,e){var n=e.props,r=e.data,a=e.children,s="";for(var u in n)s+=String(n[u]);var c=w.get(s);return c||function(){var t,e;for(e in c=[],y)y[e].forEach((function(t){var i=n[t],r=x(e,t,i);r&&c.push(r)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(s,c)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:c}),a)}})},"4b85":function(t,e,n){},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),p=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,c){var l=t((function(t,i){s(t,l,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=i&&u(i,t[c],t,n)})),v=h(e),g=function(t,e,n){var i,r,a=v(t),o=y(t,e);return o?o.value=n:(a.last=o={index:r=f(e,!0),key:e,value:n,previous:i=a.last,next:void 0,removed:!1},a.first||(a.first=o),i&&(i.next=o),d?a.size++:t.size++,"F"!==r&&(a.index[r]=o)),t},y=function(t,e){var n,i=v(t),r=f(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return a(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=y(e,t);if(i){var r=i.next,a=i.previous;delete n.index[i.index],i.removed=!0,a&&(a.next=r),r&&(r.previous=a),n.first==i&&(n.first=r),n.last==i&&(n.last=a),d?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),a(l.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&i(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=h(e),a=h(i);c(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),u=n("2266"),c=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=h?"set":"add",b=r[t],x=b&&b.prototype,w=b,j={},O=function(t){var e=x[t];o(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof b||!(g||x.forEach&&!d((function(){(new b).entries().next()})))))w=n.getConstructor(e,t,h,y),s.REQUIRED=!0;else if(a(t,!0)){var m=new w,k=m[y](g?{}:-0,1)!=m,C=d((function(){m.has(1)})),z=f((function(t){new b(t)})),D=!g&&d((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));z||(w=e((function(e,n){c(e,w,t);var i=p(new b,e,w);return void 0!=n&&u(n,i[y],i,h),i})),w.prototype=x,x.constructor=w),(C||D)&&(O("delete"),O("has"),h&&O("get")),(D||k)&&O(y),g&&x.clear&&delete x.clear}return j[t]=w,i({global:!0,forced:w!=b},j),v(w,t),g||n.setStrong(w,t,h),w}},"9d65":function(t,e,n){"use strict";var i=n("d9bd"),r=n("2b0e");e["a"]=r["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(i["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b848:function(t,e,n){"use strict";var i=n("2909"),r=n("58df");function a(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];r.isActive&&r.isDependent?e.push(r):e.push.apply(e,Object(i["a"])(a(r.$children)))}return e}e["a"]=Object(r["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,Object(i["a"])(e[n].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(i["a"])(this.getOpenDependentElements())),t}}})}}]);
//# sourceMappingURL=2048~posts~todo.75d2d7c0.js.map