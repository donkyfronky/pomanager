webpackJsonp([1],{134:function(t,e,r){t.exports=r(135)},135:function(t,e,r){var n=r(66);function o(t){let e=document.getElementById("msgid-list"),r=e.getElementsByTagName("tbody")[0],n=document.createElement("tbody");t.map(t=>{let e=n.insertRow(n.rows.length);e.addEventListener("click",function(t){});let r=e.insertCell(0);r.addEventListener("click",e=>{s({text:t.msgid,id:t._id,title:"Edit singular"})});let o=e.insertCell(1),i=(e.insertCell(2),document.createTextNode(t.msgid)),a=document.createTextNode("");o.addEventListener("click",t=>{s(event,Elem)}),t.msgid_plural&&(a=document.createTextNode(t.msgid_plural)),r.appendChild(i),o.appendChild(a)}),e.replaceChild(n,r)}let i;function s(t,e){n.editMsgid({_id:"5aa50dada17502005a8e67af",msgid:"genio",msgid_plural:""}).then(t=>{},t=>void 0)}document.getElementById("search-control").addEventListener("keyup",function(t){let e=t.target.value,r=new RegExp(e,"i");o(i.filter(t=>{if(r.test(t.msgid))return t}))}),n.loaderMsgidList().then(t=>{o(i=Object.values(t))})},31:function(t,e,r){"use strict";(function(t){var r={defaults:{},errorType:null,polyfills:{fetch:null,FormData:null,URLSearchParams:null,performance:null,PerformanceObserver:null,AbortController:null},polyfill:function(e,r,n){void 0===r&&(r=!0),void 0===n&&(n=!1);for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var s=this.polyfills[e]||("undefined"!=typeof self?self[e]:null)||(void 0!==t?t[e]:null);if(r&&!s)throw new Error(e+" is not defined");return n&&s?new(s.bind.apply(s,[void 0].concat(o))):s}};e.a=r}).call(e,r(51))},47:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o=function(t,e,r){if(void 0===r&&(r=!1),!t||!e||"object"!=typeof t||"object"!=typeof e)return t;var i=n({},t);for(var s in e)e.hasOwnProperty(s)&&(e[s]instanceof Array&&t[s]instanceof Array?i[s]=r?t[s].concat(e[s]):e[s]:"object"==typeof e[s]&&"object"==typeof t[s]?i[s]=o(t[s],e[s],r):i[s]=e[s]);return i}},66:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=r(68);const n=Object(e.a)().auth("JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZG8iLCJmdWxsTmFtZSI6ImRhZG8iLCJfaWQiOiJkYWRvIiwiaWF0IjoxNTIwMzcxODc4fQ.TP4qPWliOzjJeZib6RU91kvUuhVj7Yjug7Ll-G2F6R0");t.exports={loaderMsgidList:function(){return n.url("//api.pomanager.it/msgids").get().json()},editMsgid:function(t){return n.url("//api.pomanager.it/msgids").json(t).post().json()}},Array.from(document.getElementsByClassName("nav-link")).forEach(t=>{t.addEventListener("click",function(t){document.getElementsByClassName("nav-link active")[0].classList.remove("active"),this.classList.add("active")})})}.call(e,r(67)(t))},67:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},68:function(t,e,r){"use strict";var n=r(69),o=n.a.factory;o.default=n.a.factory,e.a=o},69:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(47),o=r(31),i=r(70),s=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a=function(){function t(t,e,r,n,o){void 0===r&&(r=new Map),void 0===n&&(n=[]),void 0===o&&(o=[]),this._url=t,this._options=e,this._catchers=r,this._resolvers=n,this._middlewares=o}return t.factory=function(e,r){return void 0===e&&(e=""),void 0===r&&(r={}),new t(e,r)},t.prototype.selfFactory=function(e){var r=void 0===e?{}:e,n=r.url,o=void 0===n?this._url:n,i=r.options,s=void 0===i?this._options:i,a=r.catchers,u=void 0===a?this._catchers:a,c=r.resolvers,l=void 0===c?this._resolvers:c,f=r.middlewares;return new t(o,s,u,l,void 0===f?this._middlewares:f)},t.prototype.defaults=function(t,e){return void 0===e&&(e=!1),o.a.defaults=e?Object(n.a)(o.a.defaults,t):t,this},t.prototype.errorType=function(t){return o.a.errorType=t,this},t.prototype.polyfills=function(t){return o.a.polyfills=s({},o.a.polyfills,t),this},t.prototype.url=function(t,e){return void 0===e&&(e=!1),e?this.selfFactory({url:t}):this.selfFactory({url:this._url+t})},t.prototype.options=function(t,e){return void 0===e&&(e=!0),this.selfFactory({options:e?Object(n.a)(this._options,t):t})},t.prototype.query=function(t){return this.selfFactory({url:u(this._url,t)})},t.prototype.headers=function(t){return this.selfFactory({options:Object(n.a)(this._options,{headers:t})})},t.prototype.accept=function(t){return this.headers({Accept:t})},t.prototype.content=function(t){return this.headers({"Content-Type":t})},t.prototype.auth=function(t){return this.headers({Authorization:t})},t.prototype.catcher=function(t,e){var r=new Map(this._catchers);return r.set(t,e),this.selfFactory({catchers:r})},t.prototype.signal=function(t){return this.selfFactory({options:s({},this._options,{signal:t.signal})})},t.prototype.resolve=function(t,e){return void 0===e&&(e=!1),this.selfFactory({resolvers:e?[t]:this._resolvers.concat([t])})},t.prototype.middlewares=function(t,e){return void 0===e&&(e=!1),this.selfFactory({middlewares:e?t:this._middlewares.concat(t)})},t.prototype.method=function(t,e){return Object(i.a)(this.options(s({},e,{method:t})))},t.prototype.get=function(t){return void 0===t&&(t={}),this.method("GET",t)},t.prototype.delete=function(t){return void 0===t&&(t={}),this.method("DELETE",t)},t.prototype.put=function(t){return void 0===t&&(t={}),this.method("PUT",t)},t.prototype.post=function(t){return void 0===t&&(t={}),this.method("POST",t)},t.prototype.patch=function(t){return void 0===t&&(t={}),this.method("PATCH",t)},t.prototype.head=function(t){return void 0===t&&(t={}),this.method("HEAD",t)},t.prototype.opts=function(t){return void 0===t&&(t={}),this.method("OPTIONS",t)},t.prototype.body=function(t){return this.selfFactory({options:s({},this._options,{body:t})})},t.prototype.json=function(t){return this.content("application/json").body(JSON.stringify(t))},t.prototype.formData=function(t){return this.body(c(t))},t.prototype.formUrl=function(t){return this.body("string"==typeof t?t:l(t)).content("application/x-www-form-urlencoded")},t}(),u=function(t,e){var r=o.a.polyfill("URLSearchParams",!0,!0),n=t.indexOf("?");for(var i in e)if(e[i]instanceof Array)for(var s=0,a=e[i];s<a.length;s++){var u=a[s];r.append(i,u)}else r.append(i,e[i]);return~n?t.substring(0,n)+"?"+r.toString():t+"?"+r.toString()},c=function(t){var e=o.a.polyfill("FormData",!0,!0);for(var r in t)if(t[r]instanceof Array)for(var n=0,i=t[r];n<i.length;n++){var s=i[n];e.append(r+"[]",s)}else e.append(r,t[r]);return e},l=function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"==typeof t[e]?JSON.stringify(t[e]):t[e])}).join("&")}},70:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(47),o=r(31),i=r(71),s=r(72),a=function(t){var e=t._url,r=t._catchers,a=t._resolvers,u=t._middlewares,c=t._options,l=Object(n.a)(o.a.defaults,c),f=o.a.polyfill("AbortController",!1,!0);!l.signal&&f&&(l.signal=f.signal);var d=Object(s.a)(u)(o.a.polyfill("fetch"))(e,l),p=d.then(function(t){return t.ok?t:t[o.a.errorType||"text"]().then(function(e){var r=new Error(e);throw r[o.a.errorType]=e,r.status=t.status,r.response=t,r})}),h=function(e){return e.catch(function(e){if(r.has(e.status))return r.get(e.status)(e,t);if(r.has(e.name))return r.get(e.name)(e,t);throw e})},y=function(t){return function(e){return h(t?p.then(function(e){return e&&e[t]()}).then(function(t){return t&&e&&e(t)||t}):p.then(function(t){return t&&e&&e(t)||t}))}},v={res:y(null),json:y("json"),blob:y("blob"),formData:y("formData"),arrayBuffer:y("arrayBuffer"),text:y("text"),perfs:function(t){return d.then(function(e){return i.a.observe(e.url,t)}),v},setTimeout:function(t,e){return void 0===e&&(e=f),setTimeout(function(){return e.abort()},t),v},controller:function(){return[f,v]},error:function(t,e){return r.set(t,e),v},badRequest:function(t){return v.error(400,t)},unauthorized:function(t){return v.error(401,t)},forbidden:function(t){return v.error(403,t)},notFound:function(t){return v.error(404,t)},timeout:function(t){return v.error(408,t)},internalError:function(t){return v.error(500,t)},onAbort:function(t){return v.error("AbortError",t)}};return a.reduce(function(e,r){return r(e,t)},v)}},71:function(t,e,r){"use strict";var n=r(31),o=function(t,e,r,n){var o=t.getEntriesByName(e);return!!(o&&o.length>0)&&(r(o.reverse()[0]),n.clearMeasures(e),i.callbacks.delete(e),i.callbacks.size<1&&(i.observer.disconnect(),n.clearResourceTimings&&n.clearResourceTimings()),!0)},i={callbacks:new Map,observer:null,observe:function(t,e){if(t&&e){var r=n.a.polyfill("performance",!1);(function(t,e){return!i.observer&&t&&e&&(i.observer=new e(function(e){i.callbacks.forEach(function(r,n){o(e,n,r,t)})}),t.clearResourceTimings&&t.clearResourceTimings()),i.observer})(r,n.a.polyfill("PerformanceObserver",!1))&&(o(r,t,e,r)||(i.callbacks.size<1&&i.observer.observe({entryTypes:["resource","measure"]}),i.callbacks.set(t,e)))}}};e.a=i},72:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(t){return function(e){return 0===t.length?e:1===t.length?t[0](e):t.reduceRight(function(r,n,o){return o===t.length-2?n(r(e)):n(r)})}}}},[134]);