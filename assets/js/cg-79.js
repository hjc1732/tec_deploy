(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1182:function(t,e,i){"use strict";i(302)},1192:function(t,e,i){"use strict";i.r(e);var o={name:"LockArticle",data:()=>({value:""}),mounted:function(){this.isLock()&&setTimeout(()=>{let t=this.articleObj();this._detect(t,this),setInterval(()=>{this._detect(t,this),console.log(t,"wenzhang")},5e3)},100)},methods:{isLock(){return"need"===this.$page.frontmatter.lock},articleObj:function(){let t=$(".theme-default-content");return t.length<=0?null:{article:t,height:t[0].clientHeight}},_detect:function(t,e){if(null==t)return;if("success"===this.getCookie("_unlock"))return;let i=e.getToken();this.value=i,$.ajax({url:"https://520.hjcwzx.top/jeecg-boot/tec/getIsHaveAuthority",type:"GET",dataType:"text",data:{token:i},success:function(i){"refuse"===i?e._lock(t):(e._unlock(t),e.setCookie("_unlock","success",1))},error:function(i){e._unlock(t)}})},_lock:function(t){let e=t.article,i=t.height;if(e.length<=0)return;let o=.3*i;if(this.os().isPc&&o>10){let t=this.getToken();if($("#hutec-token").text(t),e.hasClass("lock"))return;e.css({height:o+"px"}),e.addClass("lock"),e.remove("#read-more-wrap");let i=$(".read-more-wrap").clone();i.attr("id","read-more-wrap"),i.css("display","block"),i.find("#read-more-btn").click((function(){i.find("#btw-modal-wrap").css("display","block")})),i.find("#btw-modal-close-btn").click((function(){i.find("#btw-modal-wrap").css("display","none")})),e.append(i)}},_unlock:function(t){let e=t.article;e.hasClass("lock")&&(e.css("height","initial"),e.removeClass("lock"),$("#read-more-wrap").remove())},getToken:function(){if(navigator.cookieEnabled){let t=this.getCookie("UM_distinctid");return t?t.substring(t.length-6).toUpperCase():this.getFingerprintId()}return this.getFingerprintId()},getFingerprintId:function(){return(new Fingerprint2).get((function(t,e){let i=t.toUpperCase(),o=i.substring(i.length-6).toUpperCase();$("#hutec-token").text(o)})),$("#hutec-token").text()},getUUID:function(){return"xxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},getCookie:function(t){let e=("; "+document.cookie).split("; "+t+"=");if(2===e.length)return e.pop().split(";").shift()},setCookie:function(t,e,i){let o=new Date;o.setTime(o.getTime()+60*i*60*1e3),document.cookie=t+"="+escape(e)+";path=/;expires="+o.toGMTString()},os:function(){let t=navigator.userAgent,e=/(?:Windows Phone)/.test(t),i=/(?:SymbianOS)/.test(t)||e,o=/(?:Android)/.test(t),n=/(?:Firefox)/.test(t),r=(/(?:Chrome|CriOS)/.test(t),/(?:iPad|PlayBook)/.test(t)||o&&!/(?:Mobile)/.test(t)||n&&/(?:Tablet)/.test(t)),s=/(?:iPhone)/.test(t)&&!r;return{isTablet:r,isPhone:s,isAndroid:o,isPc:!s&&!o&&!i}}}},n=(i(1182),i(7)),r=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"read-more-wrap",staticStyle:{display:"none",position:"absolute",bottom:"0px","z-index":"9999",width:"100%","margin-top":"-100px","font-family":"PingFangSC-Regular, sans-serif"}},[e("div",{staticStyle:{position:"relative",height:"200px",background:"-webkit-gradient(linear, 0 0%, 0 100%, from(rgba(255, 255, 255, 0)), to(rgb(255, 255, 255)))"},attrs:{id:"read-more-mask"}}),t._v(" "),e("a",{staticStyle:{position:"absolute",left:"50%",top:"70%",bottom:"30px",transform:"translate(-50%, -50%)",width:"160px",height:"36px","line-height":"36px","font-size":"15px","text-align":"center",border:"1px solid rgb(222, 104, 109)",color:"rgb(222, 104, 109)",background:"rgb(255, 255, 255)",cursor:"pointer","border-radius":"6px"},attrs:{id:"read-more-btn",target:"_self"}},[t._v("阅读全文")]),t._v(" "),e("div",{staticStyle:{display:"none"},attrs:{id:"btw-modal-wrap"}},[e("div",{staticStyle:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",opacity:"0.7","z-index":"999",background:"rgb(0, 0, 0)"},attrs:{id:"btw-mask"}}),t._v(" "),e("div",{staticStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300px","text-align":"center","font-size":"13px",background:"rgb(255, 255, 255)","border-radius":"10px","z-index":"9999","font-family":"PingFangSC-Regular, sans-serif"},attrs:{id:"btw-modal"}},[e("span",{staticStyle:{position:"absolute",top:"5px",right:"15px","line-height":"34px","font-size":"34px",cursor:"pointer",opacity:"0.2","z-index":"9999",color:"rgb(0, 0, 0)",background:"none",border:"none",outline:"none"},attrs:{id:"btw-modal-close-btn"}},[t._v("×")]),t._v(" "),e("p",{staticStyle:{"margin-top":"40px","line-height":"1.8","font-size":"13px"},attrs:{id:"btw-modal-header"}},[t._v("\n            微信扫码或搜索："),e("span",{staticStyle:{color:"#E9405A","font-weight":"bold"}},[t._v("智慧对话的未来")]),t._v(" "),e("br"),t._v("发送："),e("span",{staticClass:"token",staticStyle:{color:"#e9415a","font-weight":"bold","font-size":"17px","margin-bottom":"45px"},attrs:{id:"hutec-token"}},[t._v(t._s(t.value)+"}")]),t._v(" "),e("br"),t._v("即可"),e("span",{staticStyle:{color:"#e9415a","font-weight":"bold"}},[t._v("立即永久")]),t._v("解锁本站全部文章")]),t._v(" "),e("img",{staticStyle:{width:"180px","margin-top":"10px","margin-bottom":"30px",border:"8px solid rgb(230, 230, 230)"},attrs:{src:"/images/personal/qrcode.png"}})])])])}),[],!1,null,null,null);e.default=r.exports},302:function(t,e,i){}}]);