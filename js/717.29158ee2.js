"use strict";(self["webpackChunkrapsodo_test_case"]=self["webpackChunkrapsodo_test_case"]||[]).push([[717],{2717:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{row:"",wrap:"","justify-center":"","pa-4":""}},[e("v-flex",{attrs:{md8:"",xs12:"","pa-2":""}},[e("v-card",{staticClass:"align-center"},[e("v-card-title",{staticClass:"pr-6 gray-bg"},[e("h3",{staticClass:"black--text"},[t._v("Products")]),e("v-spacer"),e("router-link",{staticClass:"no-text-decoration",attrs:{to:"/"}},[e("v-icon",{staticClass:"mr-2 mb-1"},[t._v("mdi-keyboard-backspace")]),e("span",[t._v("Continue Shopping")])],1)],1),e("v-card-text",[t.basketItems.length?e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.basketItems,(function(t,a){return e("v-flex",{key:a,attrs:{xs12:"","pa-2":""}},[e("item-card",{attrs:{item:t,"is-basket-item":""}})],1)})),1):e("v-layout",{attrs:{row:"",wrap:"","py-4":"","align-center":"","justify-center":""}},[e("v-flex",{attrs:{grow:""}},[e("h4",[t._v(" There is no item on basket yet you can go to our store and add products to your basket ")])]),e("v-flex",{staticClass:"mx-4 text-center",attrs:{shrink:""}},[e("router-link",{staticClass:"no-text-decoration",attrs:{to:"/"}},[e("v-btn",{attrs:{outlined:"",large:"",fab:"",color:"black"}},[e("v-icon",[t._v(" mdi-store ")])],1)],1)],1)],1)],1)],1)],1),e("v-flex",{attrs:{md4:"",xs12:"","pa-2":""}},[e("basket-summary")],1)],1)},r=[],n=e(629),o=e(201),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"text-center"},[e("v-card-title",{staticClass:"gray-bg"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"","mx-2":"","px-4":""}},[e("h3",[t._v("Basket Summary")])])],1)],1),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"","py-9":""}},[e("h2",[t._v("SubTotal: $"+t._s(t.basketSubTotal))])])],1)],1)],1)},c=[],u={name:"BasketSummary",computed:{...(0,n.rn)(["basketItems"]),basketSubTotal(){const t=this.basketItems.reduce(((t,a)=>{const e=t+a.amount*a.quantity;return e}),0);return t}}},i=u,d=e(1001),m=e(3453),v=e.n(m),p=e(3237),x=e(7118),k=e(5972),b=e(4470),y=(0,d.Z)(i,l,c,!1,null,null,null),f=y.exports;v()(y,{VCard:p.Z,VCardText:x.ZB,VCardTitle:x.EB,VFlex:k.Z,VLayout:b.Z});var C={name:"Basket",components:{ItemCard:o.Z,BasketSummary:f},computed:{...(0,n.rn)(["basketItems"])}},_=C,h=e(1565),Z=e(6428),w=e(9762),V=(0,d.Z)(_,s,r,!1,null,null,null),g=V.exports;v()(V,{VBtn:h.Z,VCard:p.Z,VCardText:x.ZB,VCardTitle:x.EB,VFlex:k.Z,VIcon:Z.Z,VLayout:b.Z,VSpacer:w.Z})}}]);
//# sourceMappingURL=717.29158ee2.js.map