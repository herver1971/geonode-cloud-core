(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3526],{903526:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var n=t(253772),o=t.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){var n,o,i;n=e,o=r,i=t[r],(o=a(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function a(e){var r=function(e,r){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(r)?r:String(r)}const s=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.drawIcons,n=r.getImageIdFromSymbolizer;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this._parser=new(o()),this._drawIcons=t||function(){return Promise.resolve(null)},this._getImageIdFromSymbolizer=n||function(e){return e.symbolizerId}}var r,t;return r=e,t=[{key:"readStyle",value:function(e){return e?this._parser.readStyle(e):Promise.reject("No style provided")}},{key:"writeStyle",value:function(e){var r=this;return e?this._drawIcons(e).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=c(c({},e),{},{rules:((null==e?void 0:e.rules)||[]).map((function(e){return c(c({},e),{},{symbolizers:((null==e?void 0:e.symbolizers)||[]).map((function(e){if("Icon"===e.kind){var n=t.find((function(t){return t.id===r._getImageIdFromSymbolizer(e)}))||{},o=n.image,i=n.width,u=n.height;if(o&&i&&u){var l=i>u?i:u,a=e.size/l;return c(c({},e),{},{size:a})}}return"Fill"===e.kind||"Mark"===e.kind?c(c({},e),{},{opacity:e.fillOpacity}):e}))})}))});return r._parser.writeStyle(n)})):Promise.reject("No style provided")}}],t&&l(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}()}}]);