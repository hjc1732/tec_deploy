(window.webpackJsonp=window.webpackJsonp||[]).push([[19,33,44,45,89,93,113],{245:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return d}));n(91);const i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",s=a(t);return r.test(s)?t:s+".html"+n}function f(t,e){const n=decodeURIComponent(t.hash),s=function(t){const e=t.match(i);if(e)return e[0]}(e);if(s&&n!==s)return!1;return a(t.path)===a(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}},246:function(t,e,n){},247:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"g",(function(){return g}));n(91);const i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return o.test(t)}function u(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",s=a(t);return r.test(s)?t:s+".html"+n}function c(t,e){const n=decodeURIComponent(t.hash),s=function(t){const e=t.match(i);if(e)return e[0]}(e);if(s&&n!==s)return!1;return a(t.path)===a(e)}function h(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,i){const{pages:s,themeConfig:r}=n,o=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||o.sidebar||r.sidebar))return p(t);const a=o.sidebar||r.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,a);return n?n.map(e=>function t(e,n,i,s=1){if("string"==typeof e)return h(n,e,i);if(Array.isArray(e))return Object.assign(h(n,e[0],i),{title:e[1]});{s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const r=e.children||[];return 0===r.length&&e.path?Object.assign(h(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}}(e,s,t)):[]}return[]}function p(t){const e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},248:function(t,e,n){"use strict";n.r(e);var i=n(245),s={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(i.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},r=n(7),o=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},249:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(250),n(7)),r=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},250:function(t,e,n){"use strict";n(246)},251:function(t,e,n){},252:function(t,e,n){},254:function(t,e,n){"use strict";n(251)},255:function(t,e,n){"use strict";var i=TypeError;t.exports=function(t,e){if(t<e)throw new i("Not enough arguments");return t}},256:function(t,e,n){},257:function(t,e,n){},260:function(t,e,n){"use strict";n.r(e);var i=n(248),s=n(249),r=n(94),o=n.n(r),a={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:s.default},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>o()(e)===t}},l=(n(254),n(7)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},261:function(t,e,n){"use strict";n.r(e);var i=n(260),s=n(247),r={components:{NavLink:n(248).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const r=t[s],o=i[s]&&i[s].label||r.lang;let a;return r.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,s),n.some(t=>t.path===a)||(a=s)),{text:o,link:a}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.g)(t),{items:(t.items||[]).map(s.g)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},o=(n(262),n(7)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports},262:function(t,e,n){"use strict";n(252)},266:function(t,e,n){"use strict";var i=n(92),s=n(2),r=n(93),o=n(255),a=URLSearchParams,l=a.prototype,u=s(l.append),c=s(l.delete),h=s(l.forEach),f=s([].push),p=new a("a=1&a=2&b=3");p.delete("a",1),p.delete("b",void 0),p+""!="a=2"&&i(l,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return c(this,t);var i=[];h(this,(function(t,e){f(i,{key:e,value:t})})),o(e,1);for(var s,a=r(t),l=r(n),p=0,d=0,g=!1,m=i.length;p<m;)s=i[p++],g||s.key===a?(g=!0,c(this,s.key)):d++;for(;d<m;)(s=i[d++]).key===a&&s.value===l||u(this,s.key,s.value)}),{enumerable:!0,unsafe:!0})},267:function(t,e,n){"use strict";var i=n(92),s=n(2),r=n(93),o=n(255),a=URLSearchParams,l=a.prototype,u=s(l.getAll),c=s(l.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||i(l,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return c(this,t);var i=u(this,t);o(e,1);for(var s=r(n),a=0;a<i.length;)if(i[a++]===s)return!0;return!1}),{enumerable:!0,unsafe:!0})},268:function(t,e,n){"use strict";var i=n(4),s=n(2),r=n(269),o=URLSearchParams.prototype,a=s(o.forEach);i&&!("size"in o)&&r(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},269:function(t,e,n){"use strict";var i=n(95),s=n(15);t.exports=function(t,e,n){return n.get&&i(n.get,e,{getter:!0}),n.set&&i(n.set,e,{setter:!0}),s.f(t,e,n)}},270:function(t,e,n){"use strict";n(256)},272:function(t,e,n){},273:function(t,e,n){"use strict";n(257)},274:function(t,e,n){},283:function(t,e,n){"use strict";n.r(e);n(266),n(267),n(268),n(91);var i={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([n.e(0),n.e(10)]).then(n.t.bind(null,1351,7)),Promise.all([n.e(0),n.e(10)]).then(n.t.bind(null,1352,7))]).then(([e])=>{e=e.default;const{algoliaOptions:n={}}=t;e(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:{...n},handleSelected:(t,e,n)=>{const{pathname:i,hash:s}=new URL(n.url),r=i.replace(this.$site.base,"/"),o=decodeURIComponent(s);this.$router.push(`${r}${o}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},s=(n(270),n(7)),r=Object(s.a)(i,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=r.exports},284:function(t,e,n){"use strict";n.r(e);n(273);var i=n(7),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=s.exports},287:function(t,e,n){"use strict";n(272)},288:function(t,e,n){"use strict";n(274)},300:function(t,e,n){"use strict";n(91);var i=n(96),s=n.n(i),r=(t,e,n=null)=>{let i=s()(e,"title","");return s()(e,"frontmatter.tags")&&(i+=" "+e.frontmatter.tags.join(" ")),n&&(i+=" "+n),o(t,i)};const o=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(i.test(t))return s.some(t=>e.toLowerCase().indexOf(t)>-1);{const i=t.endsWith(" ");return new RegExp(s.map((t,e)=>s.length!==e+1||i?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var a={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,s=[];for(let o=0;o<e.length&&!(s.length>=n);o++){const a=e[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(r(t,a))s.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(s.length>=n);e++){const n=a.headers[e];n.title&&r(t,a,n.title)&&s.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return s},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(n(287),n(7)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,i){return e("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=u.exports},310:function(t,e,n){"use strict";n.r(e);var i=n(283),s=n(300),r=n(284),o=n(261);function a(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:r.default,NavLinks:o.default,SearchBox:s.a,AlgoliaSearchBox:i.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(a(this.$el,"paddingLeft"))+parseInt(a(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},u=(n(288),n(7)),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=c.exports}}]);