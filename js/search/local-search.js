"use strict";function _typeof17(t){return(_typeof17="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof16(t){return(_typeof16="function"==typeof Symbol&&"symbol"==_typeof17(Symbol.iterator)?function(t){return _typeof17(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof17(t)})(t)}function _typeof15(t){return(_typeof15="function"==typeof Symbol&&"symbol"==_typeof16(Symbol.iterator)?function(t){return _typeof16(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof16(t)})(t)}function _typeof14(t){return(_typeof14="function"==typeof Symbol&&"symbol"==_typeof15(Symbol.iterator)?function(t){return _typeof15(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof15(t)})(t)}function _typeof13(t){return(_typeof13="function"==typeof Symbol&&"symbol"==_typeof14(Symbol.iterator)?function(t){return _typeof14(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof14(t)})(t)}function _typeof12(t){return(_typeof12="function"==typeof Symbol&&"symbol"==_typeof13(Symbol.iterator)?function(t){return _typeof13(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof13(t)})(t)}function _typeof11(t){return(_typeof11="function"==typeof Symbol&&"symbol"==_typeof12(Symbol.iterator)?function(t){return _typeof12(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof12(t)})(t)}function _typeof10(t){return(_typeof10="function"==typeof Symbol&&"symbol"==_typeof11(Symbol.iterator)?function(t){return _typeof11(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof11(t)})(t)}function _typeof9(t){return(_typeof9="function"==typeof Symbol&&"symbol"==_typeof10(Symbol.iterator)?function(t){return _typeof10(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof10(t)})(t)}function _typeof8(t){return(_typeof8="function"==typeof Symbol&&"symbol"==_typeof9(Symbol.iterator)?function(t){return _typeof9(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof9(t)})(t)}function _typeof7(t){return(_typeof7="function"==typeof Symbol&&"symbol"==_typeof8(Symbol.iterator)?function(t){return _typeof8(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof8(t)})(t)}function _typeof6(t){return(_typeof6="function"==typeof Symbol&&"symbol"==_typeof7(Symbol.iterator)?function(t){return _typeof7(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof7(t)})(t)}function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==_typeof6(Symbol.iterator)?function(t){return _typeof6(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof6(t)})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return c};var c={},t=Object.prototype,a=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",o=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function i(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,o){return t[e]=o}}function u(t,e,o,r){var n,i,c,u,e=e&&e.prototype instanceof l?e:l,e=Object.create(e.prototype),r=new v(r||[]);return e._invoke=(n=t,i=o,c=r,u="suspendedStart",function(t,e){if("executing"===u)throw new Error("Generator is already running");if("completed"===u){if("throw"===t)throw e;return w()}for(c.method=t,c.arg=e;;){var o=c.delegate;if(o=o&&function t(e,o){var r=e.iterator[o.method];if(void 0!==r)return"throw"===(r=y(r,e.iterator,o.arg)).type?(o.method="throw",o.arg=r.arg,o.delegate=null,f):(r=r.arg)?r.done?(o[e.resultName]=r.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=void 0),o.delegate=null,f):r:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,f);if(o.delegate=null,"throw"===o.method){if(e.iterator.return&&(o.method="return",o.arg=void 0,t(e,o),"throw"===o.method))return f;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}(o,c)){if(o===f)continue;return o}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if("suspendedStart"===u)throw u="completed",c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);if(u="executing","normal"===(o=y(n,i,c)).type){if(u=c.done?"completed":"suspendedYield",o.arg===f)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u="completed",c.method="throw",c.arg=o.arg)}}),e}function y(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}c.wrap=u;var f={};function l(){}function s(){}function p(){}i(e={},r,function(){return this});var m=Object.getPrototypeOf,h=((m=m&&m(m(g([]))))&&m!==t&&a.call(m,r)&&(e=m),p.prototype=l.prototype=Object.create(e));function b(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function d(c,u){var e;this._invoke=function(o,r){function t(){return new u(function(t,e){!function e(t,o,r,n){var i;return"throw"!==(t=y(c[t],c,o)).type?(o=(i=t.arg).value)&&"object"==_typeof(o)&&a.call(o,"__await")?u.resolve(o.__await).then(function(t){e("next",t,r,n)},function(t){e("throw",t,r,n)}):u.resolve(o).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,n)}):void n(t.arg)}(o,r,t,e)})}return e=e?e.then(t,t):t()}}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function g(e){if(e){var o,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return o=-1,(t=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:w}}function w(){return{value:void 0,done:!0}}return i(h,"constructor",s.prototype=p),i(p,"constructor",s),s.displayName=i(p,n,"GeneratorFunction"),c.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,n,"GeneratorFunction")),t.prototype=Object.create(h),t},c.awrap=function(t){return{__await:t}},b(d.prototype),i(d.prototype,o,function(){return this}),c.AsyncIterator=d,c.async=function(t,e,o,r,n){void 0===n&&(n=Promise);var i=new d(u(t,e,o,r),n);return c.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(h),i(h,n,"Generator"),i(h,r,function(){return this}),i(h,"toString",function(){return"[object Generator]"}),c.keys=function(o){var t,r=[];for(t in o)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in o)return t.value=e,t.done=!1,t}return t.done=!0,t}},c.values=g,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var r=this;function t(t,e){return i.type="throw",i.arg=o,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e],i=n.completion;if("root"===n.tryLoc)return t("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),u=a.call(n,"finallyLoc");if(c&&u){if(this.prev<n.catchLoc)return t(n.catchLoc,!0);if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return t(n.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return t(n.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;0<=o;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var n=r;break}}var i=(n=n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc?null:n)?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),S(o),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var o,r,n=this.tryEntries[e];if(n.tryLoc===t)return"throw"===(o=n.completion).type&&(r=o.arg,S(n)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:g(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),f}},c}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(o="Object"===o&&t.constructor?t.constructor.name:o)||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function asyncGeneratorStep(t,e,o,r,n,i,c){try{var u=t[i](c),a=u.value}catch(t){return void o(t)}u.done?e(a):Promise.resolve(a).then(r,n)}function _asyncToGenerator(u){return function(){var t=this,c=arguments;return new Promise(function(e,o){var r=u.apply(t,c);function n(t){asyncGeneratorStep(r,e,o,n,i,"next",t)}function i(t){asyncGeneratorStep(r,e,o,n,i,"throw",t)}n(void 0)})}}window.addEventListener("load",function(){function t(){var t=document.body.style;t.width="100%",t.overflow="hidden",btf.animateIn(c,"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout(function(){document.querySelector("#local-search-input input").focus()},100),r||(a(),r=!0),document.addEventListener("keydown",function t(e){"Escape"===e.code&&(u(),document.removeEventListener("keydown",t))})}function e(){document.querySelector("#search-button > .search").addEventListener("click",t)}function n(){return o.apply(this,arguments)}var o,r=!1,i=[],c=document.getElementById("search-mask"),u=function(){var t=document.body.style;t.width="",t.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(c,"to_hide 0.5s")},a=(o=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var o,r,n,i;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=[],t.next=3,fetch(e);case 3:if(r=t.sent,/\.json$/.test(e))return t.next=7,r.json();t.next=10;break;case 7:o=t.sent,t.next=20;break;case 10:return t.next=12,r.text();case 12:return n=t.sent,t.next=15,(new window.DOMParser).parseFromString(n,"text/xml");case 15:return n=t.sent,t.next=18,n;case 18:i=t.sent,o=_toConsumableArray(i.querySelectorAll("entry")).map(function(t){return{title:t.querySelector("title").textContent,content:t.querySelector("content")&&t.querySelector("content").textContent,url:t.querySelector("url").textContent}});case 20:return r.ok&&((i=document.getElementById("loading-database")).nextElementSibling.style.display="block",i.remove()),t.abrupt("return",o);case 22:case"end":return t.stop()}},t)})),function(){GLOBAL_CONFIG.localSearch.preload||(i=n(GLOBAL_CONFIG.localSearch.path));var t=document.querySelector("#local-search-input input"),o=document.getElementById("local-search-results"),r=document.getElementById("loading-status");t.addEventListener("input",function(){var s,e=this,p=this.value.trim().toLowerCase().split(/[\s]+/),m=(""!==p[0]&&(r.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),o.innerHTML="",'<div class="search-result-list">');p.length<=0||(s=0,i.then(function(t){t.forEach(function(t){var o,e,r,n,i,c,u=!0,a=t.title?t.title.trim().toLowerCase():"",y=t.content?t.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"",t=t.url.startsWith("/")?t.url:GLOBAL_CONFIG.root+t.url,f=-1,l=-1;""!==a||""!==y?p.forEach(function(t,e){o=a.indexOf(t),f=y.indexOf(t),o<0&&f<0?u=!1:(f<0&&(f=0),0===e&&(l=f))}):u=!1,u&&(0<=l&&(r=l+100,i=n="",0===(e=(e=l-30)<0?0:e)?r=100:n="...",r>y.length?r=y.length:i="...",c=y.substring(e,r),p.forEach(function(t){var e=new RegExp(t,"gi");c=c.replace(e,'<span class="search-keyword">'+t+"</span>"),a=a.replace(e,'<span class="search-keyword">'+t+"</span>")}),m+='<div class="local-search__hit-item"><a href="'+t+'" class="search-result-title">'+a+"</a>",s+=1,""!==y&&(m+='<p class="search-result">'+n+c+i+"</p>")),m+="</div>")}),0===s&&(m+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,e.value.trim())+"</div>"),m+="</div>",o.innerHTML=m,""!==p[0]&&(r.innerHTML=""),window.pjax&&window.pjax.refresh(o)}))})});e(),document.querySelector("#local-search .search-close-button").addEventListener("click",u),c.addEventListener("click",u),GLOBAL_CONFIG.localSearch.preload&&(i=n(GLOBAL_CONFIG.localSearch.path)),window.addEventListener("pjax:complete",function(){btf.isHidden(c)||u(),e()})});