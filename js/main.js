"use strict";function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}document.addEventListener("DOMContentLoaded",function(){function j(t){t&&(o=document.getElementById("site-name").offsetWidth,t=document.querySelectorAll("#menus .menus_item"),n=0,t.length&&t.forEach(function(t){n+=t.offsetWidth}),t=document.querySelector("#search-button"),i=t?t.offsetWidth:0,M=document.getElementById("nav")),window.innerWidth<768||o+n+i>M.offsetWidth-120?M.classList.add("hide-menu"):M.classList.remove("hide-menu")}function e(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),R=!1}var o,n,i,M,r,R=!1;function P(t){t.forEach(function(t){var e=t.getAttribute("datetime");t.innerText=btf.diffDate(e,!0),t.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){var e,o,n,i,r=t.target.id?t.target:t.target.parentNode;switch(r.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":n=r,(i=document.getElementById("rightside-config-hide").classList).toggle("show"),n.classList.contains("show")&&(i.add("status"),setTimeout(function(){i.remove("status")},300)),n.classList.toggle("show");break;case"mobile-toc-button":"0"===window.getComputedStyle(document.getElementById("card-toc")).getPropertyValue("opacity")?window.mobileToc.open():window.mobileToc.close();break;case"readmode":(e=document.body).classList.add("read-mode"),(o=document.createElement("button")).type="button",o.className="fas fa-sign-out-alt exit-readmode",e.appendChild(o),o.addEventListener("click",function t(){e.classList.remove("read-mode"),o.remove(),o.removeEventListener("click",t)});break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid();break;case"hide-aside-btn":(n=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),n.toggle("hide-aside")}}),window.refreshFn=function(){var n,i,r,c,l,a,s,u,d,f,y,m,p,e,o,b,h,g,t,S,L,_,q,D,H,v,E,A,w;function G(t,e,o){var n,i=document.createDocumentFragment();d&&((n=document.createElement("div")).className="highlight-tools ".concat(p),n.innerHTML=y+t+m,n.addEventListener("click",b),i.appendChild(n)),u&&e.offsetHeight>u+30&&((t=document.createElement("div")).className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',t.addEventListener("click",h),i.appendChild(t)),"hl"===o?e.insertBefore(i,e.firstChild):e.parentNode.insertBefore(i,e)}j(!0),M.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(B=GLOBAL_CONFIG.noticeOutdate,(C=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=B.limitDay&&((O=document.createElement("div")).className="post-outdate-notice",O.textContent=B.messagePrev+" "+C+" "+B.messageNext,C=document.getElementById("article-container"),"top"===B.position?C.insertBefore(O,C.firstChild):C.appendChild(O))),GLOBAL_CONFIG.relativeDate.post&&P(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&P(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(B=document.getElementById("runtimeshow"))&&(C=B.getAttribute("data-publishDate"),B.innerText=btf.diffDate(C)+" "+GLOBAL_CONFIG.runtime),(O=document.getElementById("last-push-date"))&&(I=O.getAttribute("data-lastPushDate"),O.innerText=btf.diffDate(I,!0)),(I=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&I.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),E=GLOBAL_CONFIG_SITE.isToc,A=GLOBAL_CONFIG.isAnchor,(w=document.getElementById("article-container"))&&(E||A)&&(E&&(t=document.getElementById("card-toc"),L=(S=t.getElementsByClassName("toc-content")[0]).querySelectorAll(".toc-link"),_=t.querySelector(".toc-percentage"),q=S.classList.contains("is-expand"),D=function(t){var e=w.clientHeight,o=document.documentElement.clientHeight,n=w.offsetTop,e=o<e?e-o:document.documentElement.scrollHeight-o,o=Math.round((t-n)/e*100);_.textContent=100<o?100:o<=0?0:o},window.mobileToc={open:function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 55px"},close:function(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)}},S.addEventListener("click",function(t){t.preventDefault();var e=t.target.classList;e.contains("toc-content")||(e=e.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close())}),g=function(t){var t=t.getBoundingClientRect().top,e=S.scrollTop;t>document.documentElement.clientHeight-100&&(S.scrollTop=e+150),t<100&&(S.scrollTop=e-150)}),H=w.querySelectorAll("h1,h2,h3,h4,h5,h6"),v="",window.tocScrollFn=function(){return btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,o=(E&&D(t),t);if(0!==o){var n="",i="";if(H.forEach(function(t,e){o>btf.getEleTop(t)-80&&(t=t.id,n=t?"#"+encodeURI(t):"",i=e)}),v!==i&&(A&&btf.updateAnchor(n),v=i,E&&(S.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),""!==n))){var e=L[i];if(e.classList.add("active"),setTimeout(function(){g(e)},0),!q)for(var r=e.parentNode;!r.matches(".toc");r=r.parentNode)r.matches("li")&&r.classList.add("active")}}},100)()},window.addEventListener("scroll",tocScrollFn)),GLOBAL_CONFIG_SITE.isHome&&(F=document.getElementById("scroll-down"))&&F.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),(B=GLOBAL_CONFIG.highlight)&&(C=B.highlightCopy,O=B.highlightLang,I=GLOBAL_CONFIG_SITE.isHighlightShrink,u=B.highlightHeightLimit,d=C||O||void 0!==I,x="highlighjs"===B.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),(d||u)&&x.length&&(f="prismjs"===B.plugin,p=!(m=y="")===I?"closed":"",void 0!==I&&(y='<i class="fas fa-angle-down expand '.concat(p,'"></i>')),C&&(m='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),e=function(t){var e,o=t.parentNode,n=(o.classList.add("copy-true"),window.getSelection()),i=document.createRange();f?i.selectNodeContents(o.querySelectorAll("pre code")[0]):i.selectNodeContents(o.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(i),n.toString(),i=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((e=i.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout(function(){e.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):i.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,n.removeAllRanges(),o.classList.remove("copy-true")},o=function(t){var e=_toConsumableArray(t.parentNode.children).slice(1);t.firstChild.classList.toggle("closed"),btf.isHidden(e[e.length-1])?e.forEach(function(t){t.style.display="block"}):e.forEach(function(t){t.style.display="none"})},b=function(t){(t=t.target.classList).contains("expand")?o(this):t.contains("copy-button")&&e(this)},h=function(){this.classList.toggle("expand-done")},O?f?x.forEach(function(t){var e=t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),G(e,t)}):x.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];G('<div class="code-lang">'.concat(e="plain"!==e&&void 0!==e?e:"Code","</div>"),t,"hl")}):f?x.forEach(function(t){btf.wrap(t,"figure",{class:"highlight"}),G("",t)}):x.forEach(function(t){G("",t,"hl")}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,o=t.parentNode,n=t.title||t.alt;n&&!o.parentNode.classList.contains("justified-gallery")&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=n,o.insertBefore(e,t.nextSibling))}),a=document.getElementById("rightside"),s=window.innerHeight+56,document.body.scrollHeight<=s?a.style.cssText="opacity: 1; transform: translateX(-58px)":(i=!(n=0),r=document.getElementById("page-header"),c="function"==typeof chatBtnHide,l="function"==typeof chatBtnShow,window.scrollCollect=function(){return btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,o=n<e;56<(n=e)?(o?(r.classList.contains("nav-visible")&&r.classList.remove("nav-visible"),l&&!0===i&&(chatBtnHide(),i=!1)):(r.classList.contains("nav-visible")||r.classList.add("nav-visible"),c&&!1===i&&(chatBtnShow(),i=!0)),r.classList.add("nav-fixed"),"0"===window.getComputedStyle(a).getPropertyValue("opacity")&&(a.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===e&&r.classList.remove("nav-fixed","nav-visible"),a.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=s&&(a.style.cssText="opacity: 0.8; transform: translateX(-58px)")},200)()},window.addEventListener("scroll",scrollCollect));var I,O,B,C,T,k,N,x,F=document.querySelectorAll("#article-container .fj-gallery");F.length&&((T=F).forEach(function(t){t.querySelectorAll("img").forEach(function(t){var e=t.getAttribute("data-lazy-src");e&&(t.src=e),btf.wrap(t,"div",{class:"fj-gallery-item"})})}),window.fjGallery?setTimeout(function(){btf.initJustifiedGallery(T)},100):((k=document.createElement("link")).rel="stylesheet",k.href=GLOBAL_CONFIG.source.justifiedGallery.css,document.body.appendChild(k),getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js)).then(function(){btf.initJustifiedGallery(T)}))),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(k=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&k.forEach(function(t){btf.wrap(t,"div",{class:"table-wrap"})}),(x=document.querySelectorAll("#article-container .hide-button")).length&&x.forEach(function(t){t.addEventListener("click",function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".fj-gallery");e.length&&btf.initJustifiedGallery(e)})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,o,n,i=this.parentNode;i.classList.contains("active")||(e=i.parentNode.nextElementSibling,(n=btf.siblings(i,".active")[0])&&n.classList.remove("active"),i.classList.add("active"),o=this.getAttribute("data-href").replace("#",""),_toConsumableArray(e.children).forEach(function(t){t.id===o?t.classList.add("active"):t.classList.remove("active")}),0<(n=e.querySelectorAll("#".concat(o," .fj-gallery"))).length&&btf.initJustifiedGallery(n))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),N=!1,(x=document.querySelector("#comment-switch > .switch-btn"))&&x.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),N||"function"!=typeof loadOtherComment||(N=!0,loadOtherComment())}),document.getElementById("toggle-menu").addEventListener("click",function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),R=!0})},refreshFn(),window.addEventListener("resize",function(){j(!1),btf.isHidden(document.getElementById("toggle-menu"))&&R&&e()}),document.getElementById("menu-mask").addEventListener("click",function(t){e()}),document.querySelectorAll("#sidebar-menus .site-page.group").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(r=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>r.limitCount?e+"\n\n\n"+r.languages.author+"\n"+r.languages.link+window.location.href+"\n"+r.languages.source+"\n"+r.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});