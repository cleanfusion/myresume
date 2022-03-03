/*!
 * purecounter.js - A simple yet configurable native javascript counter which you can count on.
 * Author: Stig Rex
 * Version: 1.4.0
 * Url: https://github.com/srexi/purecounterjs
 * License: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PureCounter=t():e.PureCounter=t()}(self,(function(){return function(){var e={3:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,{Z:function(){return s}});var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e),this.defaults={start:0,end:100,duration:2e3,delay:10,once:!0,pulse:!1,decimals:0,legacy:!0,filesizing:!1,currency:!1,separator:!1,selector:".purecounter"},this.configOptions=this.setOptions(t,this.defaults),this.elements=document.querySelectorAll(this.configOptions.selector),this.intersectionSupport=this.intersectionListenerSupported(),this.registerEventListeners()}var t,r,i;return t=e,r=[{key:"setOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={};for(var n in e)if(t=={}||t.hasOwnProperty(n)){var i=this.parseValue(e[n]);r[n]=i,n.match(/duration|pulse/)&&(r[n]="boolean"!=typeof i?1e3*i:i)}return Object.assign({},t,r)}},{key:"registerEventListeners",value:function(){var e=this.elements;if(0!==e.length)if(this.intersectionSupport){var t=new IntersectionObserver(this.animateElements.bind(this),{root:null,rootMargin:"20px",threshold:.5});e.forEach((function(e){t.observe(e)}))}else window.addEventListener&&(this.animateLegacy(e),window.addEventListener("scroll",(function(t){this.animateLegacy(e)}),{passive:!0}))}},{key:"animateLegacy",value:function(e){var t=this;e.forEach((function(e){!0===t.parseConfig(e).legacy&&t.elementIsInView(e)&&t.animateElements([e])}))}},{key:"animateElements",value:function(e,t){var r=this;e.forEach((function(e){var n=e.target||e,i=r.parseConfig(n);if(i.duration<=0)return n.innerHTML=r.formatNumber(i.end,i);if(!t&&!r.elementIsInView(e)||t&&e.intersectionRatio<.5){var o=i.start>i.end?i.end:i.start;return n.innerHTML=r.formatNumber(o,i)}setTimeout((function(){return r.startCounter(n,i)}),i.delay)}))}},{key:"startCounter",value:function(e,t){var r=this,n=(t.end-t.start)/(t.duration/t.delay),i="inc";t.start>t.end&&(i="dec",n*=-1);var o=this.parseValue(t.start);e.innerHTML=this.formatNumber(o,t),!0===t.once&&e.setAttribute("data-purecounter-duration",0);var a=setInterval((function(){var s=r.nextNumber(o,n,i);e.innerHTML=r.formatNumber(s,t),((o=s)>=t.end&&"inc"==i||o<=t.end&&"dec"==i)&&(e.innerHTML=r.formatNumber(t.end,t),!t.once&&t.pulse&&(e.setAttribute("data-purecounter-duration",0),setTimeout((function(){e.setAttribute("data-purecounter-duration",t.duration/1e3)}),t.pulse)),clearInterval(a))}),t.delay)}},{key:"parseConfig",value:function(e){var t=this,r=[].filter.call(e.attributes,(function(e){return/^data-purecounter-/.test(e.name)})),i=0!=r.length?Object.assign.apply(Object,[{}].concat(n(r.map((function(e){var r=e.name,n=e.value;return function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},r.replace("data-purecounter-","").toLowerCase(),t.parseValue(n))}))))):{};return this.setOptions(i,this.configOptions)}},{key:"nextNumber",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"inc";return e=this.parseValue(e),t=this.parseValue(t),parseFloat("inc"===r?e+t:e-t)}},{key:"convertNumber",value:function(e,t){if(t.filesizing||t.currency){e=Math.abs(Number(e));var r=1e3,n=t.currency&&"string"==typeof t.currency?t.currency:"",i=t.decimals||1,o=["","K","M","B","T"],a="";t.filesizing&&(r=1024,o=["bytes","KB","MB","GB","TB"]);for(var s=4;s>=0;s--)if(0===s&&(a="".concat(e.toFixed(i)," ").concat(o[s])),e>=this.getFilesizeThreshold(r,s)){a="".concat((e/this.getFilesizeThreshold(r,s)).toFixed(i)," ").concat(o[s]);break}return n+a}return parseFloat(e)}},{key:"getFilesizeThreshold",value:function(e,t){return Math.pow(e,t)}},{key:"applySeparator",value:function(e,t){if(!t.separator)return e.replace(new RegExp(/,/gi,"gi"),"");var r="string"==typeof t.separator?t.separator:",";return e.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,").replace(new RegExp(/,/gi,"gi"),r)}},{key:"formatNumber",value:function(e,t){var r={minimumFractionDigits:t.decimals,maximumFractionDigits:t.decimals};return e=this.convertNumber(e,t),this.applySeparator(e.toLocaleString(void 0,r),t)}},{key:"parseValue",value:function(e){return/^[0-9]+\.[0-9]+$/.test(e)?parseFloat(e):/^[0-9]+$/.test(e)?parseInt(e):/^true|false/i.test(e)?/^true/i.test(e):e}},{key:"elementIsInView",value:function(e){for(var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,i=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return t>=window.pageYOffset&&r>=window.pageXOffset&&t+i<=window.pageYOffset+window.innerHeight&&r+n<=window.pageXOffset+window.innerWidth}},{key:"intersectionListenerSupported",value:function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}}],r&&a(t.prototype,r),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()},634:function(e,t,r){var n=r(3).Z;e.exports=n}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(634)}()}));
//# sourceMappingURL=purecounter.js.map