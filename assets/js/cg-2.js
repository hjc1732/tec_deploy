(window.webpackJsonp=window.webpackJsonp||[]).push([[2,62,77,93,94,114],{245:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return p}));n(91);const s=/#.*$/,r=/\.(md|html)$/,i=/\/$/,o=/^[a-z]+:/i;function a(e){return decodeURI(e).replace(s,"").replace(r,"")}function l(e){return o.test(e)}function u(e){return/^mailto:/.test(e)}function c(e){return/^tel:/.test(e)}function h(e){if(l(e))return e;const t=e.match(s),n=t?t[0]:"",r=a(e);return i.test(r)?e:r+".html"+n}function f(e,t){const n=decodeURIComponent(e.hash),r=function(e){const t=e.match(s);if(t)return t[0]}(t);if(r&&n!==r)return!1;return a(e.path)===a(t)}function d(e,t,n){if(l(t))return{type:"external",path:t};n&&(t=function(e,t,n){const s=e.charAt(0);if("/"===s)return e;if("?"===s||"#"===s)return t+e;const r=t.split("/");n&&r[r.length-1]||r.pop();const i=e.replace(/^\//,"").split("/");for(let e=0;e<i.length;e++){const t=i[e];".."===t?r.pop():"."!==t&&r.push(t)}""!==r[0]&&r.unshift("");return r.join("/")}(t,n));const s=a(t);for(let t=0;t<e.length;t++)if(a(e[t].regularPath)===s)return Object.assign({},e[t],{type:"page",path:h(e[t].path)});return console.error(`[vuepress] No matching page found for sidebar item "${t}"`),{}}function p(e){let t;return(e=e.map(e=>Object.assign({},e))).forEach(e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)}),e.filter(e=>2===e.level)}},248:function(e,t,n){"use strict";n.r(t);var s=n(245),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},i=n(7),o=Object(i.a)(r,(function(){var e=this,t=e._self._c;return e.isInternal?t("RouterLink",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(t){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?t("OutboundLink"):e._e()],1)}),[],!1,null,null,null);t.default=o.exports},253:function(e,t,n){},255:function(e,t,n){"use strict";var s=TypeError;e.exports=function(e,t){if(e<t)throw new s("Not enough arguments");return e}},257:function(e,t,n){},258:function(e,t,n){},263:function(e,t,n){"use strict";n(253)},264:function(e,t,n){"use strict";n.r(t);var s=n(281),r=n(265),i=n(245);function o(e,t){if("group"===t.type){const n=t.path&&Object(i.e)(e,t.path),s=t.children.some(t=>"group"===t.type?o(e,t):"page"===t.type&&Object(i.e)(e,t.path));return n||s}return!1}var a={name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const e=function(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(o(e,s))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(i.e)(this.$route,e.regularPath)}}},l=n(7),u=Object(l.a)(a,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,s){return t("li",{key:s},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:s===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(s)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},265:function(e,t,n){"use strict";n.r(t);var s=n(245);function r(e,t,n,s,r){const i={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return r>2&&(i.style={"padding-left":r+"rem"}),e("RouterLink",i,n)}function i(e,t,n,o,a,l=1){return!t||l>a?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const u=Object(s.e)(o,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,n+"#"+t.slug,t.title,u,t.level-1),i(e,t.children,n,o,a,l+1)])}))}var o={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:o,$themeConfig:a,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const h=Object(s.e)(o,u.path),f="auto"===u.type?h||u.children.some(e=>Object(s.e)(o,u.basePath+"#"+e.slug)):h,d="external"===u.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,u.path,u.title||u.path):r(e,u.path,u.title||u.path,f),p=[t.frontmatter.sidebarDepth,c,l.sidebarDepth,a.sidebarDepth,1].find(e=>void 0!==e),g=l.displayAllHeaders||a.displayAllHeaders;if("auto"===u.type)return[d,i(e,u.children,u.basePath,o,p)];if((f||g)&&u.headers&&!s.d.test(u.path)){return[d,i(e,Object(s.c)(u.headers),u.path,o,p)]}return d}},a=(n(263),n(7)),l=Object(a.a)(o,void 0,void 0,!1,null,null,null);t.default=l.exports},266:function(e,t,n){"use strict";var s=n(92),r=n(2),i=n(93),o=n(255),a=URLSearchParams,l=a.prototype,u=r(l.append),c=r(l.delete),h=r(l.forEach),f=r([].push),d=new a("a=1&a=2&b=3");d.delete("a",1),d.delete("b",void 0),d+""!="a=2"&&s(l,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var s=[];h(this,(function(e,t){f(s,{key:t,value:e})})),o(t,1);for(var r,a=i(e),l=i(n),d=0,p=0,g=!1,m=s.length;d<m;)r=s[d++],g||r.key===a?(g=!0,c(this,r.key)):p++;for(;p<m;)(r=s[p++]).key===a&&r.value===l||u(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},267:function(e,t,n){"use strict";var s=n(92),r=n(2),i=n(93),o=n(255),a=URLSearchParams,l=a.prototype,u=r(l.getAll),c=r(l.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||s(l,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return c(this,e);var s=u(this,e);o(t,1);for(var r=i(n),a=0;a<s.length;)if(s[a++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},268:function(e,t,n){"use strict";var s=n(4),r=n(2),i=n(269),o=URLSearchParams.prototype,a=r(o.forEach);s&&!("size"in o)&&i(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},269:function(e,t,n){"use strict";var s=n(95),r=n(15);e.exports=function(e,t,n){return n.get&&s(n.get,t,{getter:!0}),n.set&&s(n.set,t,{setter:!0}),r.f(e,t,n)}},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n(257)},276:function(e,t,n){"use strict";n(258)},277:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var s=n(245),r={name:"SidebarGroup",components:{DropdownTransition:n(249).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(264).default},methods:{isActive:s.e}},i=(n(276),n(7)),o=Object(i.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=o.exports},282:function(e,t,n){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,s=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,r=n.length,i={};s<r;s++)if((e=n[s])&&e[1]in t){for(s=0;s<e.length;s++)i[n[0][s]]=e[s];return i}return!1}(),r={change:s.fullscreenchange,error:s.fullscreenerror},i={request:function(e,n){return new Promise(function(r,i){var o=function(){this.off("change",o),r()}.bind(this);this.on("change",o);var a=(e=e||t.documentElement)[s.requestFullscreen](n);a instanceof Promise&&a.then(o).catch(i)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var i=t[s.exitFullscreen]();i instanceof Promise&&i.then(r).catch(n)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var s=r[e];s&&t.addEventListener(s,n,!1)},off:function(e,n){var s=r[e];s&&t.removeEventListener(s,n,!1)},raw:s};s?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[s.fullscreenEnabled])}}}),n?e.exports=i:window.screenfull=i):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},284:function(e,t,n){"use strict";n.r(t);n(273);var s=n(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.default=r.exports},286:function(e,t,n){"use strict";n(271)},287:function(e,t,n){"use strict";n(272)},291:function(e,t,n){"use strict";n(277)},300:function(e,t,n){"use strict";n(91);var s=n(96),r=n.n(s),i=(e,t,n=null)=>{let s=r()(t,"title","");return r()(t,"frontmatter.tags")&&(s+=" "+t.frontmatter.tags.join(" ")),n&&(s+=" "+n),o(e,s)};const o=(e,t)=>{const n=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),r=e.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e);if(s.test(e))return r.some(e=>t.toLowerCase().indexOf(e)>-1);{const s=e.endsWith(" ");return new RegExp(r.map((e,t)=>r.length!==t+1||s?`(?=.*\\b${n(e)}\\b)`:`(?=.*\\b${n(e)})`).join("")+".+","gi").test(t)}};var a={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:t}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,r=[];for(let o=0;o<t.length&&!(r.length>=n);o++){const a=t[o];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(i(e,a))r.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(r.length>=n);t++){const n=a.headers[t];n.title&&i(e,a,n.title)&&r.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return r},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(e){for(const t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable(e){let t=null;return null===t||(t=Array.isArray(t)?t:new Array(t),t.filter(t=>e.path.match(t)).length>0)},onHotkey(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},l=(n(287),n(7)),u=Object(l.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-box"},[t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(n,s){return t("li",{key:s,staticClass:"suggestion",class:{focused:s===e.focusIndex},on:{mousedown:function(t){return e.go(s)},mouseenter:function(t){return e.focus(s)}}},[t("a",{attrs:{href:n.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(n.title||n.path))]),e._v(" "),n.header?t("span",{staticClass:"header"},[e._v("> "+e._s(n.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=u.exports},309:function(e,t,n){"use strict";n.r(t);var s={name:"Home",components:{NavLink:n(248).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(286),n(7)),i=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"home",attrs:{"aria-labelledby":null!==e.data.heroText?"main-title":null}},[t("header",{staticClass:"hero"},[e.data.heroImage?t("img",{attrs:{src:e.$withBase(e.data.heroImage),alt:e.data.heroAlt||"hero"}}):e._e(),e._v(" "),null!==e.data.heroText?t("h1",{attrs:{id:"main-title"}},[e._v("\n      "+e._s(e.data.heroText||e.$title||"Hello")+"\n    ")]):e._e(),e._v(" "),null!==e.data.tagline?t("p",{staticClass:"description"},[e._v("\n      "+e._s(e.data.tagline||e.$description||"Welcome to your VuePress site")+"\n    ")]):e._e(),e._v(" "),e.data.actionText&&e.data.actionLink?t("p",{staticClass:"action"},[t("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()]),e._v(" "),e.data.features&&e.data.features.length?t("div",{staticClass:"features"},e._l(e.data.features,(function(n,s){return t("div",{key:s,staticClass:"feature"},[t("h2",[e._v(e._s(n.title))]),e._v(" "),t("p",[e._v(e._s(n.details))])])})),0):e._e(),e._v(" "),t("Content",{staticClass:"theme-default-content custom"}),e._v(" "),e.data.footer?t("div",{staticClass:"footer"},[e._v("\n    "+e._s(e.data.footer)+"\n  ")]):t("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);t.default=i.exports},312:function(e,t,n){"use strict";n.r(t);var s=n(264),r=n(261),i={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:r.default},props:["items"]},o=(n(291),n(7)),a=Object(o.a)(i,(function(){var e=this._self._c;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=a.exports}}]);