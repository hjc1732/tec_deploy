(window.webpackJsonp=window.webpackJsonp||[]).push([[89,110],{245:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return l})),t.d(n,"i",(function(){return u})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return o})),t.d(n,"h",(function(){return a})),t.d(n,"b",(function(){return f})),t.d(n,"e",(function(){return h})),t.d(n,"j",(function(){return d})),t.d(n,"c",(function(){return m}));t(91);const r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,u=/^[a-z]+:/i;function s(e){return decodeURI(e).replace(r,"").replace(i,"")}function c(e){return u.test(e)}function o(e){return/^mailto:/.test(e)}function a(e){return/^tel:/.test(e)}function f(e){if(c(e))return e;const n=e.match(r),t=n?n[0]:"",i=s(e);return l.test(i)?e:i+".html"+t}function h(e,n){const t=decodeURIComponent(e.hash),i=function(e){const n=e.match(r);if(n)return n[0]}(n);if(i&&t!==i)return!1;return s(e.path)===s(n)}function d(e,n,t){if(c(n))return{type:"external",path:n};t&&(n=function(e,n,t){const r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return n+e;const i=n.split("/");t&&i[i.length-1]||i.pop();const l=e.replace(/^\//,"").split("/");for(let e=0;e<l.length;e++){const n=l[e];".."===n?i.pop():"."!==n&&i.push(n)}""!==i[0]&&i.unshift("");return i.join("/")}(n,t));const r=s(n);for(let n=0;n<e.length;n++)if(s(e[n].regularPath)===r)return Object.assign({},e[n],{type:"page",path:f(e[n].path)});return console.error(`[vuepress] No matching page found for sidebar item "${n}"`),{}}function m(e){let n;return(e=e.map(e=>Object.assign({},e))).forEach(e=>{2===e.level?n=e:n&&(n.children||(n.children=[])).push(e)}),e.filter(e=>2===e.level)}},248:function(e,n,t){"use strict";t.r(n);var r=t(245),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},l=t(7),u=Object(l.a)(i,(function(){var e=this,n=e._self._c;return e.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(n){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?n("OutboundLink"):e._e()],1)}),[],!1,null,null,null);n.default=u.exports},282:function(e,n,t){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=e.exports,r=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=t.length,l={};r<i;r++)if((e=t[r])&&e[1]in n){for(r=0;r<e.length;r++)l[t[0][r]]=e[r];return l}return!1}(),i={change:r.fullscreenchange,error:r.fullscreenerror},l={request:function(e,t){return new Promise(function(i,l){var u=function(){this.off("change",u),i()}.bind(this);this.on("change",u);var s=(e=e||n.documentElement)[r.requestFullscreen](t);s instanceof Promise&&s.then(u).catch(l)}.bind(this))},exit:function(){return new Promise(function(e,t){if(this.isFullscreen){var i=function(){this.off("change",i),e()}.bind(this);this.on("change",i);var l=n[r.exitFullscreen]();l instanceof Promise&&l.then(i).catch(t)}else e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var r=i[e];r&&n.addEventListener(r,t,!1)},off:function(e,t){var r=i[e];r&&n.removeEventListener(r,t,!1)},raw:r};r?(Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(n[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[r.fullscreenEnabled])}}}),t?e.exports=l:window.screenfull=l):t?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()}}]);