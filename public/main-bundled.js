!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var r=n(2),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:a,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(16),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(6)),s),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n(15))},function(e,t,n){"use strict";var r=n(0),i=n(17),o=n(3),a=n(19),s=n(22),c=n(23),u=n(7);e.exports=function(e){return new Promise((function(t,l){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(f+":"+m)}var y=a(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(y,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};i(t,l,r),h=null}},h.onabort=function(){h&&(l(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var g=n(24),v=(e.withCredentials||c(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),l(e),h=null)})),void 0===d&&(d=null),h.send(d)}))}},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},i=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(i,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(o,(function(i){r.isObject(t[i])?n[i]=r.deepMerge(e[i],t[i]):void 0!==t[i]?n[i]=t[i]:r.isObject(e[i])?n[i]=r.deepMerge(e[i]):void 0!==e[i]&&(n[i]=e[i])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=i.concat(o).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),i=n(2),o=n(11),a=n(8);function s(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n(5));c.Axios=o,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(25),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),i=n(3),o=n(12),a=n(13),s=n(8);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,i){return this.request(r.merge(i||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(5);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||l||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var i=n.config.validateStatus;!i||i(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(20),i=n(21);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(9);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=n(1),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainWrapper=document.querySelector("#main-wrapper"),this.viewerContainer=document.querySelector("#viewer"),this.titleBeforeSave=document.querySelector("#title-before-save"),this.listSection=document.querySelector("#list-section"),this.copyTextArea=document.querySelector("#text-area-for-copy"),this.statsNumShoppingListCreatedSofar=document.querySelector("#num-shopping-list-created"),this.noShoppingListItemsContainer=document.querySelector("#if-no-shopping-list-items"),this.events(),this.arr=[]}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.mainWrapper.addEventListener("click",(function(t){t.target&&t.target.classList.contains("checkbox-select-item")&&e.handleCheckBoxClick(t),t.target&&"category-title"==t.target.id&&e.handleOpenClose(t),t.target&&"submit-btn"==t.target.id&&e.handleSubmit(),t.target&&"delete-item"==t.target.id&&e.handleDeleteItem(t),t.target&&"copy-text-btn"==t.target.id&&e.handleCopyText(),t.target&&"increment-btn"==t.target.id&&e.handleCounterIncreaseDecrease(t),t.target&&"decrement-btn"==t.target.id&&e.handleCounterIncreaseDecrease(t)}))}},{key:"handleCopyText",value:function(){this.copyTextArea.focus(),this.copyTextArea.select(),this.copyTextArea.setSelectionRange(0,99999);try{var e=document.execCommand("copy");alert(e?"Copied":"Nothing to copy")}catch(e){alert("Text was not copied".concat(err))}}},{key:"handleDeleteItem",value:function(e){confirm("Are you sure?")&&i.post("/delete-item",{id:e.target.getAttribute("data-id"),item:e.target.getAttribute("data-item"),category:e.target.getAttribute("data-cat")}).then((function(){e.target.parentElement.remove()})).catch((function(){alert("Only admins are allowed to delete items. Message me at .... to get the username and password.")}))}},{key:"handleOpenClose",value:function(e){"none"==e.target.parentElement.children[1].style.display?(e.target.parentElement.children[1].style.display="block",e.target.children[0].innerHTML="&#8897;"):(e.target.parentElement.children[1].style.display="none",e.target.children[0].innerHTML="&#65310;")}},{key:"handleOpenCloseForSpanElem",value:function(e){"none"==e.target.parentElement.parentElement.parentElement.children[1].style.display?e.target.parentElement.parentElement.parentElement.children[1].style.display="block":e.target.parentElement.parentElement.parentElement.children[1].style.display="none"}},{key:"handleSubmit",value:function(){var e=this;0!=this.arr.length&&i.post("/add-items",{title:this.titleBeforeSave.value,items:this.arr}).then((function(t){e.noShoppingListItemsContainer&&(e.noShoppingListItemsContainer.style.display="none"),e.listSection.insertAdjacentHTML("afterbegin",e.html(t.data)),e.titleBeforeSave.value="",e.viewerContainer.innerHTML=' <div class="text-center text-gray-400"><div class="text-2xl">Empty</div><div>Selected items appear here</div></div>',e.titleBeforeSave.focus(),e.handleStatNumShopListCreated(),e.arr=[]})).catch((function(e){alert(e)}))}},{key:"handleStatNumShopListCreated",value:function(){this.statsNumShoppingListCreatedSofar.innerText=+this.statsNumShoppingListCreatedSofar.innerText+1}},{key:"html",value:function(e){return'<div class="rounded">\n            <div class="flex justify-between background-color border-b border-gray-700 rounded-tr rounded-tl rounded-tr rounded-tl text-white text-xl sm:text-base cursor-pointer uppercase">\n              <h2\n                id="list-title"\n                class="w-full p-2"\n                style="overflow-wrap: break-word; min-width: 0px;"\n              >\n                '.concat(e[0].title,'\n                <span id="items-counter" class="inline-block ml-4 rounded-full px-2 text-gray-800 bg-white goThruThisElemForEvents">').concat(e[0].items.length,'</span> items\n              </h2>\n              <button id="delete-list" data-id="').concat(e[0]._id,'" class="px-4 rounded-full hover:bg-gray-500">X</button>\n            </div>\n            <ul id="lists-wrapper" class="mb-3" style="display: none;">')+e[0].items.map((function(t){return'<div\n              class="flex justify-between border border-gray-200 bg-white px-2 py-1"\n            >\n              <li>'.concat(t,'</li>\n              <button id="delete-a-shopping-lists-item"  data-id="').concat(e[0]._id,'" data-item="').concat(t,'" class="text-red-600">Done</button>\n            </div>')})).join("")+"\n            </ul>\n        </div>\n    "}},{key:"handleCounterIncreaseDecrease",value:function(e){(""==e.target.parentElement.children[1].innerText||isNaN(+e.target.parentElement.children[1].innerText))&&(e.target.parentElement.children[1].innerText=1),+e.target.parentElement.children[1].innerText>=1&&(e.target.parentElement.children[1].innerText=+e.target.parentElement.children[1].innerText+ +e.target.getAttribute("data-inc")),+e.target.parentElement.children[1].innerText>=2&&(e.target.parentElement.children[1].innerText=+e.target.parentElement.children[1].innerText+ +e.target.getAttribute("data-dec"))}},{key:"handleCheckBoxClick",value:function(e){var t=e.target.getAttribute("data-cat")?e.target.value.concat("("+e.target.getAttribute("data-cat")+")["+e.target.parentElement.parentElement.children[0].children[1].innerText+"]"):e.target.value.concat("["+e.target.parentElement.parentElement.children[0].children[1].innerText+"]");e.srcElement.checked?this.arr.push(t):this.arr.includes(t)&&this.arr.splice(this.arr.indexOf(t),1),this.renderArray()}},{key:"renderArray",value:function(){for(var e="",t=0;t<this.arr.length;t++)e+='<li class="tag shadow-2xl font-mono">'.concat(this.htmlize(this.arr[t]),"</li>");e.length>0?this.viewerContainer.innerHTML=e:this.viewerContainer.innerHTML='<div class="text-center text-gray-400"><div class="text-2xl">Empty</div><div>Selected items appear here</div></div>',this.copyTextArea.innerText=this.arr}},{key:"htmlize",value:function(e){return e=e.replace("]","").split("["),"<span>".concat(e[0],'</span><span class="ml-2 italic" style="color:crimson">').concat(e[1],"</span>")}}])&&r(t.prototype,n),o&&r(t,o),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=n(1),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=document.querySelector("#new-item-input"),this.addNewItemBtn=document.querySelector("#add-new-item-btn"),this.checkboxes=document.querySelectorAll(".checkbox-new-item"),this.modalOverlay=document.querySelector(".modal-overlay"),this.openAddNewItemModal=document.querySelector("#open-add-modal"),this.checkboxesWrapperFruits=document.querySelector("#checkboxes-wrapper-fruits"),this.checkboxesWrapperVeg=document.querySelector("#checkboxes-wrapper-veg"),this.checkboxesWrapperCond=document.querySelector("#checkboxes-wrapper-cond"),this.checkboxesWrapperMeat=document.querySelector("#checkboxes-wrapper-meat"),this.checkboxesWrapperFresh=document.querySelector("#checkboxes-wrapper-fresh"),this.checkboxesWrapperFrozen=document.querySelector("#checkboxes-wrapper-frozen"),this.checkboxesWrapperKids=document.querySelector("#checkboxes-wrapper-kids"),this.checkboxesWrapperOthers=document.querySelector("#checkboxes-wrapper-others"),this.checkboxesWrapperHealth=document.querySelector("#checkboxes-wrapper-health"),this.checkboxesWrapperElectronics=document.querySelector("#checkboxes-wrapper-electronics"),this.checkboxesWrapperGrains=document.querySelector("#checkboxes-wrapper-grains"),this.checkboxesWrapperDairy=document.querySelector("#checkboxes-wrapper-dairy"),this.addNewItemModal=document.querySelector("#new-item-container-wrapper"),this.closeAddNewItemModal=document.querySelector("#close-add-new-item-modal"),this.noItemContainer=document.querySelector("#no-item-container"),this.arr=[],this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;Array.prototype.forEach.call(this.checkboxes,(function(t){t.addEventListener("click",(function(t){return e.handleCheckboxClick(t)}))})),this.addNewItemBtn.addEventListener("click",(function(){return e.handleSubmit()})),this.openAddNewItemModal.addEventListener("click",(function(t){return e.handleOpenModal()})),this.closeAddNewItemModal.addEventListener("click",(function(t){return e.handleCloseModal()}))}},{key:"handleCloseModal",value:function(){this.modalOverlay.classList.remove("active"),this.addNewItemModal.style.display="none",this.openAddNewItemModal.style.visibility="visible"}},{key:"handleOpenModal",value:function(){"none"==this.addNewItemModal.style.display&&(this.addNewItemModal.style.display="block",this.modalOverlay.classList.add("active"),this.addNewItemModal.classList.add("active"),this.openAddNewItemModal.style.visibility="hidden",this.input.focus())}},{key:"handleSubmit",value:function(){var e=this;this.input.value&&0!=this.arr.length&&(s.post("/add-new-item",{item:this.input.value,categories:this.arr}).then((function(t){e.yellowFifa(t.data)})).catch((function(e){alert("Oops! Please try again.")})),this.input.value="",this.input.focus())}},{key:"yellowFifa",value:function(e){for(var t=0;t<e.categories.length;t++)switch(e.categories[t].toLowerCase()){case"fruits":e.cat="Fruits",this.checkboxesWrapperFruits.insertAdjacentHTML("afterbegin",this.html(e));break;case"vegetables":e.cat="Vegetables",this.checkboxesWrapperVeg.insertAdjacentHTML("afterbegin",this.html(e));break;case"condiments":e.cat="Condiments",this.checkboxesWrapperCond.insertAdjacentHTML("afterbegin",this.html(e));break;case"meat":e.cat="Meat",this.checkboxesWrapperMeat.insertAdjacentHTML("afterbegin",this.html(e));break;case"fresh":e.cat="Fresh",this.checkboxesWrapperFresh.insertAdjacentHTML("afterbegin",this.html(e));break;case"frozen":e.cat="Frozen",this.checkboxesWrapperFrozen.insertAdjacentHTML("afterbegin",this.html(e));break;case"kids":e.cat="Kids",this.checkboxesWrapperKids.insertAdjacentHTML("afterbegin",this.html(e));break;case"others":e.cat="Others",this.checkboxesWrapperOthers.insertAdjacentHTML("afterbegin",this.html(e));break;case"health":e.cat="Health",this.checkboxesWrapperHealth.insertAdjacentHTML("afterbegin",this.html(e));break;case"electronics":e.cat="Electronics",this.checkboxesWrapperElectronics.insertAdjacentHTML("afterbegin",this.html(e));break;case"grains":e.cat="Grains",this.checkboxesWrapperGrains.insertAdjacentHTML("afterbegin",this.html(e));break;case"dairy":e.cat="Dairy",this.checkboxesWrapperDairy.insertAdjacentHTML("afterbegin",this.html(e))}}},{key:"html",value:function(e){return'\n      <div class="flex justify-between my-1">\n        <div class="flex">\n          <div id="counter-container" class="flex">\n            <button id="decrement-btn" data-dec="-1" class="value-button">\n              -\n            </button>\n            <div id="counter" contenteditable="true">1</div>\n            <button id="increment-btn" data-inc="1" class="value-button">\n              +\n            </button>\n            </div>\n            <label class="cursor-pointer ml-2" for="'.concat(e.item).concat("-"+e.cat,'"\n            >\n            <input\n              class="cursor-pointer checkbox-select-item"\n              type="checkbox"\n              id="').concat(e.item).concat("-"+e.cat,'"\n              value="').concat(e.item,'"\n              data-cat="').concat("Frozen"==e.cat||"Fresh"==e.cat?e.cat:"",'"\n            />\n            ').concat(e.item,' \n          </label>\n        </div>\n      <button id="delete-item" data-cat="').concat(e.cat,'" data-id="').concat(e._id,'" data-item="').concat(e.item,'" class="text-red-600">X</button>\n      </div>\n    ')}},{key:"handleCheckboxClick",value:function(e){e.srcElement.checked?this.arr.push(e.target.value):this.arr.splice(this.arr.indexOf(e.target.value),1)}}])&&a(t.prototype,n),r&&a(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l,d,p=n(1),h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSectionWrapper=document.querySelector("#list-section"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.listSectionWrapper.addEventListener("click",(function(t){t.target&&"list-title"==t.target.id&&e.handleCloseOpen(t),t.target&&"delete-list"==t.target.id&&e.handleDeleteShoppingList(t),t.target&&"delete-a-shopping-lists-item"==t.target.id&&e.handleDeleteShoppingListItem(t)}))}},{key:"handleDeleteShoppingListItem",value:function(e){var t=e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0];confirm("Are you sure?")&&p.post("/delete-a-shopping-list-item",{id:e.target.getAttribute("data-id"),listItem:e.target.getAttribute("data-item")}).then((function(){e.target.parentElement.remove(),t.innerHTML=+t.innerHTML-1})).catch((function(e){alert(e)}))}},{key:"handleDeleteShoppingList",value:function(e){confirm("Delete Shopping List?")&&p.post("/delete-shopping-list",{id:e.target.getAttribute("data-id")}).then((function(t){e.target.parentElement.parentElement.remove(),0==t.data.length&&location.reload()})).catch((function(e){alert(e)}))}},{key:"handleCloseOpen",value:function(e){"none"==e.target.parentElement.parentElement.children[1].style.display?e.target.parentElement.parentElement.children[1].style.display="block":e.target.parentElement.parentElement.children[1].style.display="none"}}])&&u(t.prototype,n),r&&u(t,r),e}();document.querySelector(".checkbox-select-item")&&new o,document.querySelector(".checkbox-new-item")&&new c,document.querySelector("#list-section")&&new h,l=document.getElementById("first-time-visit-btn"),d=document.getElementById("first-time-visit"),localStorage.notFirstVisit||(d.style.display="block",localStorage.notFirstVisit=!0),l.addEventListener("click",(function(){return d.style.display="none"}))}]);