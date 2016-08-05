/*! npm.im/object-fit-images */
var objectFitImages=function(){"use strict";function t(t){for(var e,r=getComputedStyle(t).fontFamily,i={};null!==(e=c.exec(r));)i[e[1]]=e[2];return i}function e(e,i){if(!e[n].parsingSrcset){var s=t(e);if(s["object-fit"]=s["object-fit"]||"fill",!e[n].s){if("fill"===s["object-fit"])return;if(!e[n].skipTest&&l&&!s["object-position"])return}var c=e.currentSrc||e.src;if(i)c=i;else if(e.srcset&&!a&&window.picturefill){var o=window.picturefill._.ns;e[n].parsingSrcset=!0,e[o]&&e[o].evaled||window.picturefill._.fillImg(e,{reselect:!0}),e[o].curSrc||(e[o].supported=!1,window.picturefill._.fillImg(e,{reselect:!0})),delete e[n].parsingSrcset,c=e[o].curSrc||c}if(e[n].s)e[n].s=c,i&&(e[n].srcAttr=i);else{e[n]={s:c,srcAttr:i||f.call(e,"src"),srcsetAttr:e.srcset},e.src=n;try{e.srcset&&(e.srcset="",Object.defineProperty(e,"srcset",{value:e[n].srcsetAttr})),r(e)}catch(t){}}e.style.backgroundImage='url("'+c+'")',e.style.backgroundPosition=s["object-position"]||"center",e.style.backgroundRepeat="no-repeat",/scale-down/.test(s["object-fit"])?(e[n].i||(e[n].i=new Image,e[n].i.src=c),function t(){return e[n].i.naturalWidth?void(e[n].i.naturalWidth>e.width||e[n].i.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"):void setTimeout(t,100)}()):e.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%")}}function r(t){var r={get:function(){return t[n].s},set:function(r){return delete t[n].i,e(t,r),r}};Object.defineProperty(t,"src",r),Object.defineProperty(t,"currentSrc",{get:r.get})}function i(){u||(HTMLImageElement.prototype.getAttribute=function(t){return!this[n]||"src"!==t&&"srcset"!==t?f.call(this,t):this[n][t+"Attr"]},HTMLImageElement.prototype.setAttribute=function(t,e){!this[n]||"src"!==t&&"srcset"!==t?g.call(this,t,e):this["src"===t?"src":t+"Attr"]=String(e)})}function s(t,r){var i=!A&&!t;if(r=r||{},t=t||"img",u&&!r.skipTest)return!1;"string"==typeof t?t=document.querySelectorAll("img"):t.length||(t=[t]);for(var c=0;c<t.length;c++)t[c][n]=t[c][n]||r,e(t[c]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&s(t.target,{skipTest:r.skipTest})},!0),A=!0,t="img"),r.watchMQ&&window.addEventListener("resize",s.bind(null,t,{skipTest:r.skipTest}))}var n="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",c=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,o=new Image,l="object-fit"in o.style,u="object-position"in o.style,a="string"==typeof o.currentSrc,f=o.getAttribute,g=o.setAttribute,A=!1;return s.supportsObjectFit=l,s.supportsObjectPosition=u,i(),s}();