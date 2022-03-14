(function(){"use strict";var t={206:function(t,e,s){var a=s(144),n=s(4765),i=s.n(n),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("app-toolbar"),s("v-main",[s("router-view")],1),s("notifications",{attrs:{position:"bottom right","close-on-click":!0}})],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"#232021",dark:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{shrink:""}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"rapsodo-logo",contain:"",src:s(4972),transition:"scale-transition",width:"40"}})],1),a("v-flex",{staticClass:"hidden-xs-only",attrs:{shrink:""}},[a("h2",{staticClass:"ml-2"},[t._v("Rapsodo Store")])]),a("v-spacer"),a("v-flex",{attrs:{shrink:""}},[a("router-link",{staticClass:"no-text-decoration",attrs:{to:"/"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",text:"",icon:""}},[a("v-icon",[t._v(" mdi-store ")])],1)],1),a("router-link",{staticClass:"no-text-decoration",attrs:{to:"/basket"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",text:"",icon:""}},[a("v-icon",[t._v(" "+t._s(t.basketIcon)+" ")])],1)],1)],1)],1)],1)},u=[],l=s(629),m={name:"AppToolbar",computed:{...(0,l.rn)(["basketItems"]),basketIcon(){return this.basketItems.length?"mdi-cart":"mdi-cart-outline"}}},d=m,f=s(1001),p=s(3453),h=s.n(p),v=s(3583),y=s(1565),k=s(5972),b=s(6428),I=s(7047),g=s(4470),x=s(9762),w=(0,f.Z)(d,c,u,!1,null,null,null),Q=w.exports;h()(w,{VAppBar:v.Z,VBtn:y.Z,VFlex:k.Z,VIcon:b.Z,VImg:I.Z,VLayout:g.Z,VSpacer:x.Z});var Z={name:"App",components:{AppToolbar:Q}},_=Z,B=s(7524),S=s(7877),C=(0,f.Z)(_,r,o,!1,null,null,null),O=C.exports;h()(C,{VApp:B.Z,VMain:S.Z});var T=s(8345),V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[s("v-flex",{attrs:{xs8:""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.productList,(function(t,e){return s("v-flex",{key:e,attrs:{xs12:"",md6:"",lg4:"","pa-4":""}},[s("item-card",{attrs:{item:t}})],1)})),1)],1)],1)},j=[],q=s(201),E={name:"Products",components:{ItemCard:q.Z},data(){return{productList:[]}},created(){this.fetchProductList().then((({data:t})=>{this.productList=t}))},methods:{...(0,l.nv)(["fetchProductList"])}},F=E,M=(0,f.Z)(F,V,j,!1,null,null,null),P=M.exports;h()(M,{VFlex:k.Z,VLayout:g.Z}),a["default"].use(T.Z);const L=[{path:"/",name:"products",component:P},{path:"/basket",name:"basket",component:()=>s.e(717).then(s.bind(s,2717))}],N=new T.Z({mode:"history",base:"/rapsodo-test-case/",routes:L});var A=N,$=()=>({basketItems:JSON.parse(localStorage.getItem("basketItems"))||[]}),J=s(9669),z=s.n(J),D={fetchProductList(){return z().get("https://test-case-eeca77cfvq-ue.a.run.app/")},increaseItemQuantity({commit:t},e){t("increaseItemQuantity",e)},decreaseItemQuantity({commit:t},e){t("decreaseItemQuantity",e)},addItemToBasket({commit:t},e){t("addItemToBasket",e)},removeItemFromBasket({commit:t},e){t("removeItemFromBasket",e)},setItemQuantity({commit:t},e){t("setItemQuantity",e)}},W={increaseItemQuantity(t,e){t.basketItems.find((t=>t.name===e.name)).quantity+=1,localStorage.setItem("basketItems",JSON.stringify(t.basketItems))},decreaseItemQuantity(t,e){t.basketItems.find((t=>t.name===e.name)).quantity-=1,localStorage.setItem("basketItems",JSON.stringify(t.basketItems))},addItemToBasket(t,e){const s={...e,quantity:1};t.basketItems=[...t.basketItems,s],localStorage.setItem("basketItems",JSON.stringify(t.basketItems))},removeItemFromBasket(t,e){const s=t.basketItems.findIndex((t=>t.name===e.name));t.basketItems.splice(s,1),localStorage.setItem("basketItems",JSON.stringify(t.basketItems))},setItemQuantity(t,e){const s=t.basketItems.find((t=>t.name===e.item.name));s.quantity=e.newQuantity,localStorage.setItem("basketItems",JSON.stringify(t.basketItems))}};a["default"].use(l.ZP);var Y=new l.ZP.Store({state:$,actions:D,mutations:W}),R=s(1910);a["default"].use(R.Z);var G=new R.Z({});a["default"].use(i()),a["default"].config.productionTip=!1,new a["default"]({router:A,store:Y,vuetify:G,render:t=>t(O)}).$mount("#app")},201:function(t,e,s){s.d(e,{Z:function(){return w}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",{staticClass:"text-center"},[a("v-layout",{class:t.isBasketItem?"row":"column"},[a("v-flex",{attrs:{xs4:""}},[a("v-img",{staticClass:"centerized",attrs:{alt:"item-photo",src:s(190),"max-width":"240","max-height":"240",lazy:""}})],1),a("v-divider"),a("v-flex",{class:t.isBasketItem?"centerized":"",attrs:{xs4:"","text-start":"","pa-2":""}},[a("h2",{staticClass:"py-1 px-6 bold"},[t._v(t._s(t.item.name))]),a("h4",{staticClass:"py-1 px-6"},[t._v("Size: "+t._s(t.item.size))]),a("h4",{staticClass:"py-1 px-6"},[t._v("Color: "+t._s(t.item.color))]),a("h3",{staticClass:"py-1 px-6"},[t._v("$"+t._s(t.item.amount))])]),t.calculateItemQuantity(t.item)?a("v-flex",{attrs:{xs4:""}},[a("v-layout",{class:t.isBasketItem?"column":"row",attrs:{"justify-center":"","align-center":"","fill-height":""}},[a("v-flex",{attrs:{shrink:""}},[a("v-btn",{attrs:{text:"",block:"",left:"",color:"black"},on:{click:function(e){return t.decreaseQuantity(t.item)}}},[a("v-icon",[t._v(" mdi-minus ")])],1)],1),a("v-flex",{class:t.isBasketItem?"basket-quantity":"",attrs:{md4:"",xs6:"","pa-2":""}},[a("v-text-field",{attrs:{value:t.calculateItemQuantity(t.item),name:"quantity",type:"number",color:"black",outlined:"",flat:"",dense:"","hide-details":"","hide-spin-buttons":""},on:{input:t.setQuantity}})],1),a("v-flex",{attrs:{shrink:""}},[a("v-btn",{attrs:{text:"",block:"",right:"",color:"black"},on:{click:function(e){return t.increaseQuantity(t.item)}}},[a("v-icon",[t._v(" mdi-plus ")])],1)],1)],1)],1):a("v-flex",{attrs:{xs4:"","pa-2":""}},[a("v-btn",{staticClass:"no-text-transform",attrs:{block:""},on:{click:function(e){return t.addToBasket(t.item)}}},[t._v("Add To Basket")])],1)],1)],1)],1)},n=[],i=s(629),r={data(){return{options:{duration:3e3,speed:500,ignoreDuplicates:!0}}},methods:{showSuccessMessage(t){this.$notify({type:"success",text:t,title:"Success",...this.options})},showErrorMessage(t){this.$notify({type:"error",text:t,title:"Error",...this.options})},showInfoMessage(t){this.$notify({text:t,title:"Info",...this.options})},showWarningMessage(t){this.$notify({type:"warn",text:t,title:"Warning",...this.options})}}},o={mixins:[r],computed:{...(0,i.rn)(["basketItems"])},methods:{...(0,i.nv)(["increaseItemQuantity","decreaseItemQuantity","addItemToBasket","removeItemFromBasket","setItemQuantity"]),increaseQuantity(t){this.calculateItemQuantity(t)>0&&this.calculateItemQuantity(t)<t.stock?(this.increaseItemQuantity(t),this.showSuccessMessage("Item's quantity increased successfully")):this.calculateItemQuantity(t)>=t.stock?this.showErrorMessage("You reached item's stock. Can't increased quantity"):this.addToBasket(t)},decreaseQuantity(t){this.calculateItemQuantity(t)>1?(this.decreaseItemQuantity(t),this.showSuccessMessage("Item's quantity decreased successfully")):this.removeFromBasket(t)},removeFromBasket(t){console.log("aaa"),this.removeItemFromBasket(t),this.showSuccessMessage("Item removed from basket successfully")},addToBasket(t){this.addItemToBasket(t),this.showSuccessMessage("Item added to basket successfully")},calculateItemQuantity(t){const e=this.basketItems.find((e=>e.name===t.name));return e?e.quantity:0},setQuantity(t){if("0"===t)this.removeFromBasket(this.item);else if(t<=this.item.stock){const e={item:this.item,newQuantity:Number(t)};this.setItemQuantity(e)}else{const t={item:this.item,newQuantity:Number(this.item.stock)};this.setItemQuantity(t),this.showErrorMessage("Your requested quentity was bigger than stock. Quantity setted to stock")}}}},c={name:"ItemCard",mixins:[o],props:{item:{type:Object,required:!0},isBasketItem:{type:Boolean,default:!1}}},u=c,l=s(1001),m=s(3453),d=s.n(m),f=s(1565),p=s(3237),h=s(7118),v=s(1418),y=s(5972),k=s(6428),b=s(7047),I=s(4470),g=s(7086),x=(0,l.Z)(u,a,n,!1,null,"57809413",null),w=x.exports;d()(x,{VBtn:f.Z,VCard:p.Z,VCardText:h.ZB,VDivider:v.Z,VFlex:y.Z,VIcon:k.Z,VImg:b.Z,VLayout:I.Z,VTextField:g.Z})},190:function(t,e,s){t.exports=s.p+"img/item-image.facac208.png"},4972:function(t,e,s){t.exports=s.p+"img/rapsodo-logo.441d452d.png"}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,i){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],i=t[l][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[a,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+".29158ee2.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rapsodo-test-case:";s.l=function(a,n,i,r){if(t[a])t[a].push(n);else{var o,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var m=u[l];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==e+i){o=m;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+i),o.src=a),t[a]=[n];var d=function(e,s){o.onerror=o.onload=null,clearTimeout(f);var n=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/rapsodo-test-case/"}(),function(){var t={143:0};s.f.j=function(e,a){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(s,a){n=t[e]=[s,a]}));a.push(n[2]=i);var r=s.p+s.u(e),o=new Error,c=function(a){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,n[1](o)}};s.l(r,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,i,r=a[0],o=a[1],c=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var l=c(s)}for(e&&e(a);u<r.length;u++)i=r[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},a=self["webpackChunkrapsodo_test_case"]=self["webpackChunkrapsodo_test_case"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(206)}));a=s.O(a)})();
//# sourceMappingURL=app.c41a2819.js.map