webpackJsonp([0],{136:function(t,r,e){t.exports=e(137)},137:function(t,r,e){e(66)},31:function(t,r,e){"use strict";(function(t){var e={defaults:{},errorType:null,polyfills:{fetch:null,FormData:null,URLSearchParams:null,performance:null,PerformanceObserver:null,AbortController:null},polyfill:function(r,e,n){void 0===e&&(e=!0),void 0===n&&(n=!1);for(var o=[],i=3;i<arguments.length;i++)o[i-3]=arguments[i];var s=this.polyfills[r]||("undefined"!=typeof self?self[r]:null)||(void 0!==t?t[r]:null);if(e&&!s)throw new Error(r+" is not defined");return n&&s?new(s.bind.apply(s,[void 0].concat(o))):s}};r.a=e}).call(r,e(51))},47:function(t,r,e){"use strict";e.d(r,"a",function(){return o});var n=this&&this.__assign||Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},o=function(t,r,e){if(void 0===e&&(e=!1),!t||!r||"object"!=typeof t||"object"!=typeof r)return t;var i=n({},t);for(var s in r)r.hasOwnProperty(s)&&(r[s]instanceof Array&&t[s]instanceof Array?i[s]=e?t[s].concat(r[s]):r[s]:"object"==typeof r[s]&&"object"==typeof t[s]?i[s]=o(t[s],r[s],e):i[s]=r[s]);return i}},66:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(t){var r=e(68);const n=Object(r.a)().auth("JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZG8iLCJmdWxsTmFtZSI6ImRhZG8iLCJfaWQiOiJkYWRvIiwiaWF0IjoxNTIwMzcxODc4fQ.TP4qPWliOzjJeZib6RU91kvUuhVj7Yjug7Ll-G2F6R0");t.exports={loaderMsgidList:function(){return n.url("//api.pomanager.it/msgids").get().json()},editMsgid:function(t){return n.url("//api.pomanager.it/msgids").json(t).post().json()}},Array.from(document.getElementsByClassName("nav-link")).forEach(t=>{t.addEventListener("click",function(t){document.getElementsByClassName("nav-link active")[0].classList.remove("active"),this.classList.add("active")})})}.call(r,e(67)(t))},67:function(t,r){t.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},68:function(t,r,e){"use strict";var n=e(69),o=n.a.factory;o.default=n.a.factory,r.a=o},69:function(t,r,e){"use strict";e.d(r,"a",function(){return u});var n=e(47),o=e(31),i=e(70),s=this&&this.__assign||Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},u=function(){function t(t,r,e,n,o){void 0===e&&(e=new Map),void 0===n&&(n=[]),void 0===o&&(o=[]),this._url=t,this._options=r,this._catchers=e,this._resolvers=n,this._middlewares=o}return t.factory=function(r,e){return void 0===r&&(r=""),void 0===e&&(e={}),new t(r,e)},t.prototype.selfFactory=function(r){var e=void 0===r?{}:r,n=e.url,o=void 0===n?this._url:n,i=e.options,s=void 0===i?this._options:i,u=e.catchers,a=void 0===u?this._catchers:u,c=e.resolvers,l=void 0===c?this._resolvers:c,f=e.middlewares;return new t(o,s,a,l,void 0===f?this._middlewares:f)},t.prototype.defaults=function(t,r){return void 0===r&&(r=!1),o.a.defaults=r?Object(n.a)(o.a.defaults,t):t,this},t.prototype.errorType=function(t){return o.a.errorType=t,this},t.prototype.polyfills=function(t){return o.a.polyfills=s({},o.a.polyfills,t),this},t.prototype.url=function(t,r){return void 0===r&&(r=!1),r?this.selfFactory({url:t}):this.selfFactory({url:this._url+t})},t.prototype.options=function(t,r){return void 0===r&&(r=!0),this.selfFactory({options:r?Object(n.a)(this._options,t):t})},t.prototype.query=function(t){return this.selfFactory({url:a(this._url,t)})},t.prototype.headers=function(t){return this.selfFactory({options:Object(n.a)(this._options,{headers:t})})},t.prototype.accept=function(t){return this.headers({Accept:t})},t.prototype.content=function(t){return this.headers({"Content-Type":t})},t.prototype.auth=function(t){return this.headers({Authorization:t})},t.prototype.catcher=function(t,r){var e=new Map(this._catchers);return e.set(t,r),this.selfFactory({catchers:e})},t.prototype.signal=function(t){return this.selfFactory({options:s({},this._options,{signal:t.signal})})},t.prototype.resolve=function(t,r){return void 0===r&&(r=!1),this.selfFactory({resolvers:r?[t]:this._resolvers.concat([t])})},t.prototype.middlewares=function(t,r){return void 0===r&&(r=!1),this.selfFactory({middlewares:r?t:this._middlewares.concat(t)})},t.prototype.method=function(t,r){return Object(i.a)(this.options(s({},r,{method:t})))},t.prototype.get=function(t){return void 0===t&&(t={}),this.method("GET",t)},t.prototype.delete=function(t){return void 0===t&&(t={}),this.method("DELETE",t)},t.prototype.put=function(t){return void 0===t&&(t={}),this.method("PUT",t)},t.prototype.post=function(t){return void 0===t&&(t={}),this.method("POST",t)},t.prototype.patch=function(t){return void 0===t&&(t={}),this.method("PATCH",t)},t.prototype.head=function(t){return void 0===t&&(t={}),this.method("HEAD",t)},t.prototype.opts=function(t){return void 0===t&&(t={}),this.method("OPTIONS",t)},t.prototype.body=function(t){return this.selfFactory({options:s({},this._options,{body:t})})},t.prototype.json=function(t){return this.content("application/json").body(JSON.stringify(t))},t.prototype.formData=function(t){return this.body(c(t))},t.prototype.formUrl=function(t){return this.body("string"==typeof t?t:l(t)).content("application/x-www-form-urlencoded")},t}(),a=function(t,r){var e=o.a.polyfill("URLSearchParams",!0,!0),n=t.indexOf("?");for(var i in r)if(r[i]instanceof Array)for(var s=0,u=r[i];s<u.length;s++){var a=u[s];e.append(i,a)}else e.append(i,r[i]);return~n?t.substring(0,n)+"?"+e.toString():t+"?"+e.toString()},c=function(t){var r=o.a.polyfill("FormData",!0,!0);for(var e in t)if(t[e]instanceof Array)for(var n=0,i=t[e];n<i.length;n++){var s=i[n];r.append(e+"[]",s)}else r.append(e,t[e]);return r},l=function(t){return Object.keys(t).map(function(r){return encodeURIComponent(r)+"="+encodeURIComponent("object"==typeof t[r]?JSON.stringify(t[r]):t[r])}).join("&")}},70:function(t,r,e){"use strict";e.d(r,"a",function(){return u});var n=e(47),o=e(31),i=e(71),s=e(72),u=function(t){var r=t._url,e=t._catchers,u=t._resolvers,a=t._middlewares,c=t._options,l=Object(n.a)(o.a.defaults,c),f=o.a.polyfill("AbortController",!1,!0);!l.signal&&f&&(l.signal=f.signal);var p=Object(s.a)(a)(o.a.polyfill("fetch"))(r,l),d=p.then(function(t){return t.ok?t:t[o.a.errorType||"text"]().then(function(r){var e=new Error(r);throw e[o.a.errorType]=r,e.status=t.status,e.response=t,e})}),h=function(r){return r.catch(function(r){if(e.has(r.status))return e.get(r.status)(r,t);if(e.has(r.name))return e.get(r.name)(r,t);throw r})},y=function(t){return function(r){return h(t?d.then(function(r){return r&&r[t]()}).then(function(t){return t&&r&&r(t)||t}):d.then(function(t){return t&&r&&r(t)||t}))}},v={res:y(null),json:y("json"),blob:y("blob"),formData:y("formData"),arrayBuffer:y("arrayBuffer"),text:y("text"),perfs:function(t){return p.then(function(r){return i.a.observe(r.url,t)}),v},setTimeout:function(t,r){return void 0===r&&(r=f),setTimeout(function(){return r.abort()},t),v},controller:function(){return[f,v]},error:function(t,r){return e.set(t,r),v},badRequest:function(t){return v.error(400,t)},unauthorized:function(t){return v.error(401,t)},forbidden:function(t){return v.error(403,t)},notFound:function(t){return v.error(404,t)},timeout:function(t){return v.error(408,t)},internalError:function(t){return v.error(500,t)},onAbort:function(t){return v.error("AbortError",t)}};return u.reduce(function(r,e){return e(r,t)},v)}},71:function(t,r,e){"use strict";var n=e(31),o=function(t,r,e,n){var o=t.getEntriesByName(r);return!!(o&&o.length>0)&&(e(o.reverse()[0]),n.clearMeasures(r),i.callbacks.delete(r),i.callbacks.size<1&&(i.observer.disconnect(),n.clearResourceTimings&&n.clearResourceTimings()),!0)},i={callbacks:new Map,observer:null,observe:function(t,r){if(t&&r){var e=n.a.polyfill("performance",!1);(function(t,r){return!i.observer&&t&&r&&(i.observer=new r(function(r){i.callbacks.forEach(function(e,n){o(r,n,e,t)})}),t.clearResourceTimings&&t.clearResourceTimings()),i.observer})(e,n.a.polyfill("PerformanceObserver",!1))&&(o(e,t,r,e)||(i.callbacks.size<1&&i.observer.observe({entryTypes:["resource","measure"]}),i.callbacks.set(t,r)))}}};r.a=i},72:function(t,r,e){"use strict";e.d(r,"a",function(){return n});var n=function(t){return function(r){return 0===t.length?r:1===t.length?t[0](r):t.reduceRight(function(e,n,o){return o===t.length-2?n(e(r)):n(e)})}}}},[136]);