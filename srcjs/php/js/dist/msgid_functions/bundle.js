webpackJsonp([0],{142:function(e,t,r){e.exports=r(143)},143:function(e,t,r){var n=r(66);let a;r(144);function o(e){let t=document.getElementById("msgid-list"),r=t.getElementsByTagName("tbody")[0],n=document.createElement("tbody");e.map(e=>{let t=n.insertRow(n.rows.length);t.addEventListener("click",function(e){});let r=t.insertCell(0);r.addEventListener("click",t=>{i(t,e)});let a=t.insertCell(1),o=(t.insertCell(2),document.createTextNode(e.msgid)),l=document.createTextNode("");a.addEventListener("click",t=>{i(t,e)}),e.msgid_plural&&(l=document.createTextNode(e.msgid_plural)),r.appendChild(o),a.appendChild(l)}),t.replaceChild(n,r)}function i(e,t){window.location="/edit.php?msgid="+t._id}document.getElementById("search-control").addEventListener("keyup",function(e){let t=e.target.value,r=new RegExp(t,"i");o(a.filter(e=>{if(r.test(e.msgid))return e}))}),n.loaderMsgidList().then(e=>{o(a=Object.values(e))})},144:function(e,t,r){var n=r(145);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,n,a){var o,i=null!=t?t:e.nullContext||{},l=r.helperMissing,s=e.escapeExpression;return'<div id="dialog'+s("function"==typeof(o=null!=(o=r.id||(null!=t?t.id:t))?o:l)?o.call(i,{name:"id",hash:{},data:a}):o)+'" data-role="page">\n    <h1>'+s("function"==typeof(o=null!=(o=r.type||(null!=t?t.type:t))?o:l)?o.call(i,{name:"type",hash:{},data:a}):o)+"</h1>\n</div>"},useData:!0})},145:function(e,t,r){e.exports=r(146).default},146:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var o=a(r(96)),i=n(r(158)),l=n(r(47)),s=a(r(27)),u=a(r(159)),c=n(r(160));function d(){var e=new o.HandlebarsEnvironment;return s.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},147:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){a.default(e),o.default(e),i.default(e),l.default(e),s.default(e),u.default(e),c.default(e)};var a=n(r(148)),o=n(r(149)),i=n(r(150)),l=n(r(151)),s=n(r(152)),u=n(r(153)),c=n(r(154))},148:function(e,t,r){"use strict";t.__esModule=!0;var n=r(27);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var a=r.inverse,o=r.fn;if(!0===t)return o(this);if(!1===t||null==t)return a(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):a(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return o(t,r)})},e.exports=t.default},149:function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(27),o=r(47),i=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r=t.fn,n=t.inverse,o=0,l="",s=void 0,u=void 0;function c(t,n,o){s&&(s.key=t,s.index=n,s.first=0===n,s.last=!!o,u&&(s.contextPath=u+t)),l+=r(e[t],{data:s,blockParams:a.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(s=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var d=e.length;o<d;o++)o in e&&c(o,o,o===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&c(f,o-1),f=p,o++);void 0!==f&&c(f,o-1,!0)}return 0===o&&(l=n(this)),l})},e.exports=t.default},150:function(e,t,r){"use strict";t.__esModule=!0;var n,a=r(47),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},151:function(e,t,r){"use strict";t.__esModule=!0;var n=r(27);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},152:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var a=1;null!=r.hash.level?a=r.hash.level:r.data&&null!=r.data.level&&(a=r.data.level),t[0]=a,e.log.apply(e,t)})},e.exports=t.default},153:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},154:function(e,t,r){"use strict";t.__esModule=!0;var n=r(27);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:a,blockParams:n.blockParams([e],[a&&a.contextPath])})})},e.exports=t.default},155:function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var n,a=r(156),o=(n=a)&&n.__esModule?n:{default:n}},156:function(e,t,r){"use strict";t.__esModule=!0;var n=r(27);t.default=function(e){e.registerDecorator("inline",function(e,t,r,a){var o=e;return t.partials||(t.partials={},o=function(a,o){var i=r.partials;r.partials=n.extend({},i,t.partials);var l=e(a,o);return r.partials=i,l}),t.partials[a.args[0]]=a.fn,o})},e.exports=t.default},157:function(e,t,r){"use strict";t.__esModule=!0;var n=r(27),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o]}}};t.default=a,e.exports=t.default},158:function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},159:function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=l.COMPILER_REVISION;if(t!==r){if(t<r){var n=l.REVISION_CHANGES[r],a=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=a.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var l=t.VM.invokePartial.call(this,r,n,o);null==l&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),l=o.partials[o.name](n,o));if(null!=l){if(o.indent){for(var s=l.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=o.indent+s[u];l=s.join("\n")}return l}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,a){var o=this.programs[e],i=this.fn(e);return t||a||n||r?o=s(this,e,i,t,r,n,a):o||(o=this.programs[e]=s(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=a.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function n(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=a.data;n._setup(a),!a.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?l.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,s=e.useBlockParams?[]:void 0;function u(t){return""+e.main(r,t,r.helpers,r.partials,o,s,i)}return e.useDepths&&(i=a.depths?t!=a.depths[0]?[t].concat(a.depths):a.depths:[t]),(u=c(e.main,u,r,a.depths||[],o,s))(t,a)}return n.isTop=!0,n._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=r.merge(n.decorators,t.decorators)))},n._child=function(t,n,a,o){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!o)throw new i.default("must pass parent depths");return s(r,t,e[t],n,0,a,o)},n},t.wrapProgram=s,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==u&&function(){r.data=l.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=l.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=a.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=u;var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(27)),o=r(47),i=(n=o)&&n.__esModule?n:{default:n},l=r(96);function s(e,t,r,n,a,o,i){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),r(e,t,e.helpers,e.partials,a.data||n,o&&[a.blockParams].concat(o),l)}return(l=c(r,l,e,i,n,o)).program=t,l.depth=i?i.length:0,l.blockParams=a||0,l}function u(){return""}function c(e,t,r,n,o,i){if(e.decorator){var l={};t=e.decorator(t,l,r,n&&n[0],o,i,n),a.extend(t,l)}return t}},160:function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,r(51))},27:function(e,t,r){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(a,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},47:function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,o=void 0,i=void 0;r&&(e+=" - "+(o=r.start.line)+":"+(i=r.start.column));for(var l=Error.prototype.constructor.call(this,e),s=0;s<n.length;s++)this[n[s]]=l[n[s]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=o,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},96:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var a=r(27),o=n(r(47)),i=r(147),l=r(155),s=n(r(157));t.VERSION="4.0.11";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))a.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;t.log=c,t.createFrame=a.createFrame,t.logger=s.default}},[142]);