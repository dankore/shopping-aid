!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var r=n(2),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)l(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,a=arguments.length;r<a;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),a=n(16),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(6)),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n(15))},function(e,t,n){"use strict";var r=n(0),a=n(17),o=n(3),i=n(19),s=n(22),c=n(23),l=n(7);e.exports=function(e){return new Promise((function(t,u){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(f+":"+m)}var y=i(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(y,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};a(t,u,r),h=null}},h.onabort=function(){h&&(u(l("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){u(l("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),u(l(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var g=n(24),v=(e.withCredentials||c(y))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),u(e),h=null)})),void 0===d&&(d=null),h.send(d)}))}},function(e,t,n){"use strict";var r=n(18);e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},a=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(a,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(o,(function(a){r.isObject(t[a])?n[a]=r.deepMerge(e[a],t[a]):void 0!==t[a]?n[a]=t[a]:r.isObject(e[a])?n[a]=r.deepMerge(e[a]):void 0!==e[a]&&(n[a]=e[a])})),r.forEach(i,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=a.concat(o).concat(i),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),a=n(2),o=n(11),i=n(8);function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n(5));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(25),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),a=n(3),o=n(12),i=n(13),s=n(8);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,a){return this.request(r.merge(a||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},function(e,t,n){"use strict";var r=n(0),a=n(14),o=n(4),i=n(5);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var a=n.config.validateStatus;!a||a(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(20),a=n(21);e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(9);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var a=n(1),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainWrapper=document.querySelector("#main-wrapper"),this.viewerContainer=document.querySelector("#viewer"),this.titleBeforeSave=document.querySelector("#title-before-save"),this.listSection=document.querySelector("#list-section"),this.copyTextArea=document.querySelector("#text-area-for-copy"),this.statsNumShoppingListCreatedSofar=document.querySelector("#num-shopping-list-created"),this.noShoppingListItemsContainer=document.querySelector("#if-no-shopping-list-items"),this.inputProtectWithPassword=document.querySelector("#input-protect-with-password"),this.submitBtnProtectWithPassword=document.querySelector("#submit-btn-protect-with-password"),this.modalOverlay=document.querySelector(".modal-overlay"),this.modalProtectWithPassword=document.querySelector("#modal-protect-with-password"),this.btnOpenModalNewPassword=document.querySelector("#btn-save-shopping-list-with-password"),this.events(),this.arr=[]}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.submitBtnProtectWithPassword.addEventListener("click",(function(){return e.handleSubmitPassword()})),this.mainWrapper.addEventListener("click",(function(t){t.target&&t.target.classList.contains("checkbox-select-item")&&e.handleCheckBoxClick(t),t.target&&"category-title"==t.target.id&&e.handleOpenClose(t),t.target&&"submit-btn"==t.target.id&&e.handleSubmit(),t.target&&"delete-item"==t.target.id&&e.handleDeleteItem(t),t.target&&"copy-text-btn"==t.target.id&&e.handleCopyText(),t.target&&"increment-btn"==t.target.id&&e.handleCounterIncreaseDecrease(t),t.target&&"decrement-btn"==t.target.id&&e.handleCounterIncreaseDecrease(t)}))}},{key:"handleCopyText",value:function(){this.copyTextArea.focus(),this.copyTextArea.select(),this.copyTextArea.setSelectionRange(0,99999);try{var e=document.execCommand("copy");alert(e?"Copied":"Nothing to copy")}catch(e){alert("Text was not copied".concat(err))}}},{key:"handleDeleteItem",value:function(e){confirm("Are you sure?")&&a.post("/delete-item",{id:e.target.getAttribute("data-id"),item:e.target.getAttribute("data-item"),category:e.target.getAttribute("data-cat")}).then((function(){e.target.parentElement.remove()})).catch((function(){alert("Only admins are allowed to delete items. Message me at .... to get the username and password.")}))}},{key:"handleOpenClose",value:function(e){"none"==e.target.parentElement.children[1].style.display?(e.target.parentElement.children[1].style.display="block",e.target.children[0].innerHTML="&#8897;"):(e.target.parentElement.children[1].style.display="none",e.target.children[0].innerHTML="&#65310;")}},{key:"handleSubmitPassword",value:function(){var e=this;0!=this.arr.length&&""!=this.inputProtectWithPassword.value&&a.post("/protect-with-password",{title:this.titleBeforeSave.value,items:this.arr,password:this.inputProtectWithPassword.value}).then((function(t){e.handleCloseModalProtectWithPassword(),e.callBackAfterSubmission(t.data)})).catch((function(e){alert(e)}))}},{key:"handleCloseModalProtectWithPassword",value:function(){this.modalProtectWithPassword.style.display="none",this.modalOverlay.classList.remove("active")}},{key:"handleSubmit",value:function(){var e=this;0!=this.arr.length&&a.post("/add-items",{title:this.titleBeforeSave.value,items:this.arr}).then((function(t){e.callBackAfterSubmission(t.data)})).catch((function(e){alert(e)}))}},{key:"callBackAfterSubmission",value:function(e){this.noShoppingListItemsContainer&&(this.noShoppingListItemsContainer.style.display="none"),this.listSection.insertAdjacentHTML("afterbegin",this.html(e)),this.titleBeforeSave.value="",this.viewerContainer.innerHTML=' <div class="text-center text-gray-400"><div class="text-2xl">Empty</div><div>Selected items appear here</div></div>',this.titleBeforeSave.focus(),this.handleStatNumShopListCreated(),this.arr=[],this.btnOpenModalNewPassword.disabled=!0}},{key:"handleStatNumShopListCreated",value:function(){this.statsNumShoppingListCreatedSofar.innerText=+this.statsNumShoppingListCreatedSofar.innerText+1}},{key:"html",value:function(e){return'<div class="rounded">\n            <div class="flex justify-between background-color border-b border-gray-700 rounded-tr rounded-tl rounded-tr rounded-tl text-white text-xl sm:text-base cursor-pointer uppercase">\n              <h2\n                id="'.concat(e[0].password?"list-title-password-protected":"list-title",'"\n                id="').concat(e[0].password?"list-title-password-protected":"list-title",'"\n                class="w-full p-2 flex"\n                style="overflow-wrap: break-word; min-width: 0px;"\n              >\n                ').concat(e[0].title,'\n                <span id="items-counter" class="inline-block ml-4 rounded-full px-2 text-gray-800 bg-white goThruThisElemForEvents">').concat(e[0].items.length,'</span> \n                <span class="goThruThisElemForEvents ml-1 inline-block">items</span>\n                 ').concat(e[0].password?'<img class="goThruThisElemForEvents ml-8" src="/static/lock.svg" />':"",'\n                </h2>\n              <button id="').concat(e[0].password?"delete-list-password-protected":"delete-list",'" data-id="').concat(e[0]._id,'" class="px-4 rounded-full hover:bg-gray-500">X</button>\n            </div>\n    \n    <ul id="lists-wrapper" class="mb-3" style="display: none;">')+e[0].items.map((function(t){return'<div\n              class="flex justify-between border border-gray-200 bg-white px-2 py-1"\n            >\n              <li>'.concat(t,'</li>\n              <button id="delete-a-shopping-lists-item"  data-id="').concat(e[0]._id,'" data-item="').concat(t,'" class="text-red-600">Done</button>\n            </div>')})).join("")+'\n      </ul>\n      <div\n        id="modal-protect-with-password-enter-password"\n        class="relative modal shadow-2xl bg-white p-2 max-w-md mx-auto"\n        style="display: none;"\n      >\n        <input\n          id="input-protect-with-password-enter-password"\n          type="password"\n          maxlength="32"\n          placeholder="Enter Password"\n          class="w-full bg-gray-200 rounded-tr rounded-tl shadow-inner focus:outline-0 border border-transparent py-2 pr-4 pl-10 block appearance-none leading-normal"\n        />\n        <button\n          id="'.concat(e[0].password?"submit-btn-unlock-shopping-list":"submit-btn-protect-with-password-enter-password",'"\n          class="bg-green-600 w-full preventAutoZoom hover:bg-green-800 px-6 rounded-br rounded-bl text-white py-2"\n        >\n          Submit\n        </button>\n        <button\n          class="absolute px-2 hover:bg-gray-700 rounded-full text-2xl text-white bg-gray-900"\n          style="top: 0; right: 0;"\n          id="cancel-btn-protect-with-password-enter-password"\n        >\n          X\n        </button>\n      </div>\n    </div>\n    ')}},{key:"handleCounterIncreaseDecrease",value:function(e){(""==e.target.parentElement.children[1].innerText||isNaN(+e.target.parentElement.children[1].innerText))&&(e.target.parentElement.children[1].innerText=1),+e.target.parentElement.children[1].innerText>=1&&(e.target.parentElement.children[1].innerText=+e.target.parentElement.children[1].innerText+ +e.target.getAttribute("data-inc")),+e.target.parentElement.children[1].innerText>=2&&(e.target.parentElement.children[1].innerText=+e.target.parentElement.children[1].innerText+ +e.target.getAttribute("data-dec"))}},{key:"handleCheckBoxClick",value:function(e){var t=e.target.getAttribute("data-cat")?e.target.value.concat("("+e.target.getAttribute("data-cat")+")["+e.target.parentElement.parentElement.children[0].children[1].innerText+"]"):e.target.value.concat("["+e.target.parentElement.parentElement.children[0].children[1].innerText+"]");e.srcElement.checked?this.arr.push(t):this.arr.includes(t)&&this.arr.splice(this.arr.indexOf(t),1),this.renderArray(),this.disableEnableBtn()}},{key:"disableEnableBtn",value:function(){this.arr.length>0?this.btnOpenModalNewPassword.removeAttribute("disabled",!1):this.btnOpenModalNewPassword.setAttribute("disabled",!0)}},{key:"renderArray",value:function(){for(var e="",t=0;t<this.arr.length;t++)e+='<li class="tag shadow-2xl font-mono">'.concat(this.htmlize(this.arr[t]),"</li>");e.length>0?this.viewerContainer.innerHTML=e:this.viewerContainer.innerHTML='<div class="text-center text-gray-400"><div class="text-2xl">Empty</div><div>Selected items appear here</div></div>',this.copyTextArea.innerText=this.arr}},{key:"htmlize",value:function(e){return e=e.replace("]","").split("["),"<span>".concat(e[0],'</span><span class="ml-2 italic" style="color:crimson">').concat(e[1],"</span>")}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=n(1),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=document.querySelector("#new-item-input"),this.addNewItemBtn=document.querySelector("#add-new-item-btn"),this.checkboxes=document.querySelectorAll(".checkbox-new-item"),this.modalOverlay=document.querySelector(".modal-overlay"),this.openAddNewItemModal=document.querySelector("#open-add-modal"),this.checkboxesWrapperFruits=document.querySelector("#checkboxes-wrapper-fruits"),this.checkboxesWrapperVeg=document.querySelector("#checkboxes-wrapper-veg"),this.checkboxesWrapperCond=document.querySelector("#checkboxes-wrapper-cond"),this.checkboxesWrapperMeat=document.querySelector("#checkboxes-wrapper-meat"),this.checkboxesWrapperFresh=document.querySelector("#checkboxes-wrapper-fresh"),this.checkboxesWrapperFrozen=document.querySelector("#checkboxes-wrapper-frozen"),this.checkboxesWrapperKids=document.querySelector("#checkboxes-wrapper-kids"),this.checkboxesWrapperOthers=document.querySelector("#checkboxes-wrapper-others"),this.checkboxesWrapperHealth=document.querySelector("#checkboxes-wrapper-health"),this.checkboxesWrapperElectronics=document.querySelector("#checkboxes-wrapper-electronics"),this.checkboxesWrapperGrains=document.querySelector("#checkboxes-wrapper-grains"),this.checkboxesWrapperDairy=document.querySelector("#checkboxes-wrapper-dairy"),this.addNewItemModal=document.querySelector("#new-item-container-wrapper"),this.closeAddNewItemModal=document.querySelector("#close-add-new-item-modal"),this.noItemContainer=document.querySelector("#no-item-container"),this.arr=[],this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;Array.prototype.forEach.call(this.checkboxes,(function(t){t.addEventListener("click",(function(t){return e.handleCheckboxClick(t)}))})),this.addNewItemBtn.addEventListener("click",(function(){return e.handleSubmit()})),this.openAddNewItemModal.addEventListener("click",(function(t){return e.handleOpenModal()})),this.closeAddNewItemModal.addEventListener("click",(function(t){return e.handleCloseModal()}))}},{key:"handleCloseModal",value:function(){this.modalOverlay.classList.remove("active"),this.addNewItemModal.style.display="none",this.openAddNewItemModal.style.visibility="visible"}},{key:"handleOpenModal",value:function(){"none"==this.addNewItemModal.style.display&&(this.addNewItemModal.style.display="block",this.modalOverlay.classList.add("active"),this.addNewItemModal.classList.add("active"),this.openAddNewItemModal.style.visibility="hidden",this.input.focus())}},{key:"handleSubmit",value:function(){var e=this;this.input.value&&0!=this.arr.length&&(s.post("/add-new-item",{item:this.input.value,categories:this.arr}).then((function(t){e.yellowFifa(t.data)})).catch((function(e){alert("Oops! Please try again.")})),this.input.value="",this.input.focus())}},{key:"yellowFifa",value:function(e){for(var t=0;t<e.categories.length;t++)switch(e.categories[t].toLowerCase()){case"fruits":e.cat="Fruits",this.checkboxesWrapperFruits.insertAdjacentHTML("afterbegin",this.html(e));break;case"vegetables":e.cat="Vegetables",this.checkboxesWrapperVeg.insertAdjacentHTML("afterbegin",this.html(e));break;case"condiments":e.cat="Condiments",this.checkboxesWrapperCond.insertAdjacentHTML("afterbegin",this.html(e));break;case"meat":e.cat="Meat",this.checkboxesWrapperMeat.insertAdjacentHTML("afterbegin",this.html(e));break;case"fresh":e.cat="Fresh",this.checkboxesWrapperFresh.insertAdjacentHTML("afterbegin",this.html(e));break;case"frozen":e.cat="Frozen",this.checkboxesWrapperFrozen.insertAdjacentHTML("afterbegin",this.html(e));break;case"kids":e.cat="Kids",this.checkboxesWrapperKids.insertAdjacentHTML("afterbegin",this.html(e));break;case"others":e.cat="Others",this.checkboxesWrapperOthers.insertAdjacentHTML("afterbegin",this.html(e));break;case"health":e.cat="Health",this.checkboxesWrapperHealth.insertAdjacentHTML("afterbegin",this.html(e));break;case"electronics":e.cat="Electronics",this.checkboxesWrapperElectronics.insertAdjacentHTML("afterbegin",this.html(e));break;case"grains":e.cat="Grains",this.checkboxesWrapperGrains.insertAdjacentHTML("afterbegin",this.html(e));break;case"dairy":e.cat="Dairy",this.checkboxesWrapperDairy.insertAdjacentHTML("afterbegin",this.html(e))}}},{key:"html",value:function(e){return'\n      <div class="flex justify-between my-1">\n        <div class="flex">\n          <div id="counter-container" class="flex">\n            <button id="decrement-btn" data-dec="-1" class="value-button">\n              -\n            </button>\n            <div id="counter" contenteditable="true">1</div>\n            <button id="increment-btn" data-inc="1" class="value-button">\n              +\n            </button>\n            </div>\n            <label class="cursor-pointer ml-2" for="'.concat(e.item).concat("-"+e.cat,'"\n            >\n            <input\n              class="cursor-pointer checkbox-select-item"\n              type="checkbox"\n              id="').concat(e.item).concat("-"+e.cat,'"\n              value="').concat(e.item,'"\n              data-cat="').concat("Frozen"==e.cat||"Fresh"==e.cat?e.cat:"",'"\n            />\n            ').concat(e.item,' \n          </label>\n        </div>\n      <button id="delete-item" data-cat="').concat(e.cat,'" data-id="').concat(e._id,'" data-item="').concat(e.item,'" class="text-red-600">X</button>\n      </div>\n    ')}},{key:"handleCheckboxClick",value:function(e){e.srcElement.checked?this.arr.push(e.target.value):this.arr.splice(this.arr.indexOf(e.target.value),1)}}])&&i(t.prototype,n),r&&i(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=n(1),d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSectionWrapper=document.querySelector("#list-section"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.listSectionWrapper.addEventListener("click",(function(t){t.target&&"list-title"==t.target.id&&e.handleCloseOpen(t),t.target&&"delete-list"==t.target.id&&e.handleDeleteShoppingList(t),t.target&&"delete-a-shopping-lists-item"==t.target.id&&e.handleDeleteShoppingListItem(t)}))}},{key:"handleDeleteShoppingListItem",value:function(e){var t=e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0];confirm("Are you sure?")&&u.post("/delete-a-shopping-list-item",{id:e.target.getAttribute("data-id"),listItem:e.target.getAttribute("data-item")}).then((function(){e.target.parentElement.remove(),t.innerHTML=+t.innerHTML-1})).catch((function(e){alert(e)}))}},{key:"handleDeleteShoppingList",value:function(e){confirm("Delete Shopping List?")&&u.post("/delete-shopping-list",{id:e.target.getAttribute("data-id")}).then((function(t){e.target.parentElement.parentElement.remove(),0==t.data.array.length&&location.reload()})).catch((function(e){alert(e)}))}},{key:"handleCloseOpen",value:function(e){"none"==e.target.parentElement.parentElement.children[1].style.display?e.target.parentElement.parentElement.children[1].style.display="block":e.target.parentElement.parentElement.children[1].style.display="none"}}])&&l(t.prototype,n),r&&l(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h,f,m=n(1),y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listSectionWrapper=document.querySelector("#list-section"),this.modalOverlay=document.querySelector(".modal-overlay"),this.btnOpenModalNewPassword=document.querySelector("#btn-save-shopping-list-with-password"),this.modalCreateNewPassword=document.querySelector("#modal-protect-with-password"),this.btnCancelModalCreateNewPassword=document.querySelector("#cancel-btn-protect-with-password"),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;this.listSectionWrapper.addEventListener("click",(function(t){t.target&&"delete-list-password-protected"==t.target.id&&e.handleOpenModalEnterPassword(t),t.target&&"submit-btn-protect-with-password-enter-password"==t.target.id&&e.handleDeletePasswordProtectedShoppingList(t),t.target&&"cancel-btn-protect-with-password-enter-password"==t.target.id&&e.handleCloseModals(t),t.target&&"list-title-password-protected"==t.target.id&&e.handleOpenModalEnterPassword(t),t.target&&"submit-btn-unlock-shopping-list"==t.target.id&&e.handleSubmitUnlockShoppingList(t)})),this.btnOpenModalNewPassword.addEventListener("click",(function(){return e.handleOpenModalCreatePassword()})),this.btnCancelModalCreateNewPassword.addEventListener("click",(function(t){return e.handleCloseModals(t)}))}},{key:"handleSubmitUnlockShoppingList",value:function(e){var t=this;m.post("/unlock-shopping-list",{password:e.target.parentElement.children[0].value,id:e.target.parentElement.parentElement.children[0].children[1].getAttribute("data-id")}).then((function(n){n.data.owner&&(t.modalOverlay.classList.remove("active"),e.target.parentElement.style.display="none",e.target.parentElement.parentElement.children[1].style.display="block",e.target.parentElement.parentElement.children[0].children[0].id="list-title",e.target.parentElement.parentElement.children[2].children[1].id="submit-btn-protect-with-password-enter-password",e.target.parentElement.parentElement.children[0].children[0].children[2].setAttribute("src","/static/unlock.svg")),n.data.owner||alert("Wrong Password. Please try again.")})).catch((function(e){alert(e)}))}},{key:"handleDeletePasswordProtectedShoppingList",value:function(e){var t=this;""!=e.target.parentElement.children[0].value&&m.post("/delete-shopping-list",{password:e.target.parentElement.children[0].value,id:e.target.parentElement.parentElement.children[0].children[1].getAttribute("data-id")}).then((function(n){n.data.owner&&(t.modalOverlay.classList.remove("active"),e.target.parentElement.parentElement.remove()),n.data.owner||alert("Wrong Password. Please try again."),n.data.array&&0==n.data.array.length&&location.reload()})).catch((function(e){alert(e)}))}},{key:"handleOpenModalEnterPassword",value:function(e){"none"==e.target.parentElement.parentElement.children[2].style.display&&("delete-list-password-protected"==e.target.id&&(e.target.parentElement.parentElement.children[2].children[1].id="submit-btn-protect-with-password-enter-password"),e.target.parentElement.parentElement.children[2].style.display="block",this.modalOverlay.classList.add("active"),e.target.parentElement.parentElement.children[2].classList.add("active"))}},{key:"handleCloseModals",value:function(e){e.target.parentElement.style.display="none",this.modalOverlay.classList.remove("active")}},{key:"handleOpenModalCreatePassword",value:function(){"none"==this.modalCreateNewPassword.style.display&&(this.modalCreateNewPassword.style.display="block",this.modalOverlay.classList.add("active"),this.modalCreateNewPassword.classList.add("active"))}}])&&p(t.prototype,n),r&&p(t,r),e}();document.querySelector(".checkbox-select-item")&&new o,document.querySelector(".checkbox-new-item")&&new c,document.querySelector("#list-section")&&new d,document.querySelector("#btn-save-shopping-list-with-password")&&new y,h=document.getElementById("first-time-visit-btn"),f=document.getElementById("first-time-visit"),localStorage.notFirstVisit||(f.style.display="block",localStorage.notFirstVisit=!0),h.addEventListener("click",(function(){return f.style.display="none"}))}]);