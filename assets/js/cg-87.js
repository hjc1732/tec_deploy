(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{280:function(t,o,s){},293:function(t,o,s){"use strict";s(280)},316:function(t,o,s){"use strict";s.r(o);var r=s(45),l=s.n(r),e={name:"BackToTop",props:{threshold:{type:Number,default:300}},data:()=>({scrollTop:null}),computed:{show(){return this.scrollTop>this.threshold}},mounted(){this.scrollTop=this.getScrollTop(),window.addEventListener("scroll",l()(()=>{this.scrollTop=this.getScrollTop()},100))},methods:{getScrollTop:()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,scrollToTop(){window.scrollTo({top:0,behavior:"smooth"}),this.scrollTop=0}}},n=(s(293),s(7)),c=Object(n.a)(e,(function(){var t=this._self._c;return t("transition",{attrs:{name:"fade"}},[this.show?t("svg",{staticClass:"go-to-top",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.484 28.284"},on:{click:this.scrollToTop}},[t("g",{attrs:{transform:"translate(-229 -126.358)"}},[t("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(229 151.107) rotate(-45)"}}),this._v(" "),t("rect",{attrs:{fill:"currentColor",width:"35",height:"5",rx:"2",transform:"translate(274.949 154.642) rotate(-135)"}})])]):this._e()])}),[],!1,null,"66f85bc3",null);o.default=c.exports}}]);