(window.webpackJsonp=window.webpackJsonp||[]).push([[46,75,89],{246:function(t,e,n){},247:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return l})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return h})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"g",(function(){return b}));n(91);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=a(t);return s.test(i)?t:i+".html"+n}function l(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=a(e);for(let e=0;e<t.length;e++)if(a(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,r){const{pages:i,themeConfig:s}=n,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return d(t);const a=o.sidebar||s.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,a);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function d(t){const e=f(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function f(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},249:function(t,e,n){"use strict";n.r(e);var r={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},i=(n(250),n(7)),s=Object(i.a)(r,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},250:function(t,e,n){"use strict";n(246)},259:function(t,e,n){},278:function(t,e,n){"use strict";n(259)},285:function(t,e,n){"use strict";n.r(e);var r=n(247);function i(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"toc-sidebar-link":!0}},n)}function s(t,e,n,o,a,u=1){return!e||u>a?null:t("ul",{class:"toc-sidebar-sub-headers"},e.map(e=>{const c=Object(r.d)(o,n+"#"+e.slug);return t("li",{class:"toc-sidebar-sub-header"},[i(t,n+"#"+e.slug,e.title,c),s(t,e.children,n,o,a,u+1)])}))}var o={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:o,$themeConfig:a,$themeLocaleConfig:u},props:{item:c,sidebarDepth:l}}){const p=Object(r.d)(o,c.path),h="auto"===c.type?p||c.children.some(t=>Object(r.d)(o,c.basePath+"#"+t.slug)):p,d="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"toc-sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):i(t,c.path,c.title||c.path,h),f=[e.frontmatter.sidebarDepth,l,u.sidebarDepth,a.sidebarDepth,1].find(t=>void 0!==t),b=u.displayAllHeaders||a.displayAllHeaders;if("auto"===c.type)return[d,s(t,c.children,c.basePath,o,f)];if((h||b)&&c.headers&&!r.c.test(c.path)){return[d,s(t,Object(r.b)(c.headers),c.path,o,f)]}return d}},a=(n(278),n(7)),u=Object(a.a)(o,void 0,void 0,!1,null,null,null);e.default=u.exports},313:function(t,e,n){"use strict";n.r(e);var r=n(285),i=n(249),s=n(247);function o(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?o(t,e):"page"===e.type&&Object(s.d)(t,e.path))}var a={name:"PageSidebarToc",components:{PageSidebarTocLink:r.default,DropdownTransition:i.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(o(t,r))return n}return-1}(this.$route,this.items[0].children);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.d)(this.$route,t.regularPath)}}},u=n(7),c=Object(u.a)(a,(function(){var t=this,e=t._self._c;return e("DropdownTransition",[t.items[0].children.length?e("ul",{staticClass:"toc-sidebar-links"},t._l(t.items[0].children,(function(n,r){return e("li",{key:r},[e("PageSidebarTocLink",{attrs:{sidebarDepth:t.sidebarDepth,item:n}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=c.exports}}]);