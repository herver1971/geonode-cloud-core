(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[99955],{138108:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>A});var o=r(124852),n=r.n(o),i=r(675263),u=r.n(i),c=r(171703),s=r(22222),l=r(867076),a=r(322843),f=r(800827),p=r(401757),d=r(557579),y=r(10473),g=r(154414),b=r(691380),v=r(264945),h=r(55105);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function w(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,C(o.key),o)}}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function W(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return(e=C(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){var e=function(t,e){if("object"!=m(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:String(e)}var k=(0,l.compose)((0,c.connect)((0,s.P1)(f.J9,p.E5,p.p,p.Jb,p.h9,(function(t){return(0,h.ic)(t,{right:!0})}),(function(t){return t.browser&&t.browser.mobile}),p.zm,(function(t,e,r,o,n,i,u,c){return{id:t,widgets:e,layouts:r,maximized:o,dependencies:n,mapLayout:i,isMobileAgent:u,dropdownWidgets:c}})),{editWidget:d.uT,updateWidgetProperty:d.Ij,exportCSV:d.sD,toggleCollapse:d.f,toggleCollapseAll:d.Ff,toggleMaximize:d.Pt,exportImage:d.Rb,deleteWidget:d.E9,onLayoutChange:d.c_}),(0,l.compose)((0,b.Gv)({debounceTime:20,closest:!0,querySelector:".fill"}),(0,b.ZY)({overrideWidthProvider:!1}),(0,l.withProps)((function(t){var e,r=t.isMobileAgent,o=t.width,n=t.mapLayout,i=t.singleWidgetLayoutBreakpoint,u=void 0===i?1024:i,c=null!==(e=null==n?void 0:n.right)&&void 0!==e?e:0,s=r||o<=u,l=s?0:500;return{backgroundSelectorOffset:s?r?40:60:0,isSingleWidgetLayout:s,viewWidth:o-(c+55+l),rightOffset:c,leftOffset:l,singleWidgetLayoutBreakpoint:u}})),(0,l.withProps)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,r=t.height,o=t.maximized,n=t.leftOffset,i=t.viewWidth,u=t.isSingleWidgetLayout,c=t.singleWidgetLayoutMaxHeight,s=void 0===c?300:c,l=t.singleWidgetLayoutMinHeight,a=void 0===l?200:l,f=t.backgroundSelectorOffset,p=u?(r-f-120)/2:r-f-120,d=u?1:4,y=u?p>s?s:p<a?a:s:Math.floor(p/d-20),g=null!=o&&o.widget?{width:"100%",height:"100%",marginTop:0,bottom:"auto",top:0,left:0,zIndex:1330}:{},b=null!=o&&o.widget?{width:e,useDefaultWidthProvider:!1,rowHeight:r-50,breakpoints:{xxs:0},cols:{xxs:1}}:{},v=e?{width:i-1}:{},h=u?y:Math.floor((r-100)/(y+10))*(y+10);return W(W({rowHeight:y,className:"on-map",breakpoints:u?{xxs:0}:{md:0},cols:{md:6,xxs:1}},v),{},{useDefaultWidthProvider:!1,style:W({left:n+"px",bottom:65+f,height:h,width:i+"px",position:"absolute",zIndex:50},g)},b)}))),(0,l.compose)((0,l.defaultProps)({toolsOptions:{showPin:"user.role===ADMIN",seeHidden:"user.role===ADMIN",showHide:!1,showCollapse:!0,showMaximize:!0}}),(0,y.Z)("toolsOptions",{asObject:!0}),(0,l.compose)((0,c.connect)((0,s.P1)(p.Xu,(function(t){return{tray:t}}))),(0,l.withPropsOnChange)(["toolsOptions","tray"],(function(t){var e=t.toolsOptions,r=t.tray;return{toolsOptions:e?W(W({},e),{},{showCollapse:e.showCollapse&&r}):e}}))),(0,l.withPropsOnChange)(["widgets","toolsOptions"],(function(t){var e=t.widgets,r=void 0===e?[]:e,o=t.toolsOptions,n=void 0===o?{}:o;return{widgets:r.filter((function(t){return!t.hide||n.seeHidden}))}})),(0,l.compose)((0,l.withState)("activeWidget","setActiveWidget",!1),(0,l.withHandlers)({toggleCollapse:function(t){return function(e){var r,o=null===(r=t.widgets)||void 0===r?void 0:r.find((function(e){var r;return e.id===(null===(r=t.activeWidget)||void 0===r?void 0:r.id)}));t.isSingleWidgetLayout&&o?t.toggleCollapseAll():t.toggleCollapse(e)}}}),(0,l.withPropsOnChange)(["dropdownWidgets","toolsOptions"],(function(t){var e=t.dropdownWidgets,r=void 0===e?[]:e,o=t.toolsOptions,n=void 0===o?{}:o;return{dropdownWidgets:r.filter((function(t){return!t.hide||n.seeHidden}))}})),(0,l.withPropsOnChange)(["widgets","isSingleWidgetLayout","id"],(function(t){var e=t.widgets,r=t.isSingleWidgetLayout,o=t.activeWidget,n=t.setActiveWidget;e.length&&r&&!o&&n(e[0])})),(0,l.withPropsOnChange)(["activeWidget","isSingleWidgetLayout","widgets"],(function(t){var e,r=t.activeWidget,o=t.dropdownWidgets,n=t.isSingleWidgetLayout,i=t.widgets,u=t.toolsOptions,c=t.layouts,s=t.setActiveWidget;if(r&&n&&i.length){var l,a=W(W({},r),{},{options:W(W({activeWidget:r,dropdownWidgets:o},null!==(l=r.options)&&void 0!==l?l:{}),{},{singleWidget:!0,setActiveWidget:s})});return{canEdit:!1,toolsOptions:W(W({},u),{},{showPin:!1}),layouts:W(W({},c),{},{xxs:(e=c.xxs.map((function(t){return W(W({},t),{},{h:1,w:1,x:0,y:0})})),function(t){if(Array.isArray(t))return S(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}),widgets:[a]}}return!1})))))(v.Z),L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(c,t);var e,r,o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(o);if(i){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),u.apply(this,arguments)}return e=c,(r=[{key:"render",value:function(){return this.props.enabled?n().createElement(k,this.props):null}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),c}(n().Component);x(L,"propTypes",{enabled:u().bool}),x(L,"defaultProps",{enabled:!0});var _=(0,g.Z)(L);const A=(0,a.rx)("WidgetsPlugin",{component:_,containers:{TOC:{doNotHide:!0,name:"Widgets"}},reducers:{widgets:r(875859).Z},epics:r(688395).ZP})},154414:(t,e,r)=>{"use strict";r.d(e,{Z:()=>c});var o=r(22222),n=r(171703),i=r(55105),u=r(93152);const c=(0,n.connect)((0,o.P1)(i.Jz,i.VM,u.c0,(function(t,e,r){return{enabled:!t&&!e&&!r}})))},10473:(t,e,r)=>{"use strict";r.d(e,{Z:()=>O});var o=r(867076),n=r(171703),i=r(22222),u=r(800827),c=r(274621),s=r(227361),l=r.n(s),a=r(984596),f=r.n(a),p=r(66604),d=r.n(p),y=r(747037),g=r.n(y),b=r(701469),v=r.n(b);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var m=function t(e){var r=e.accessInfo,o=e.postProcessValue,n=e.reduceFun;return function(e){var i=f()(e),u=n;return i.length>1&&"__OR__"===i[0]&&(u=function(t,e){return t||e},i=i.slice(1)),i.map((function(e){var i=e;if(v()(i))return t({accessInfo:r,postProcessValue:o,reduceFun:n})(i);var u=!1;i&&g()(i)&&i.startsWith("!")&&(u=!0,i=i.substr(1));var c=function(t){return u?!t:t},s=g()(i)&&i.split(":");if(s&&s[0]){var a=s[0].split(/\!\=\=?/),f=s[0].split(/\=\=?\=?/);return a.length>1?c(o(l()(r,a[0]),i)!==a[1]):f.length>1?c(o(l()(r,f[0]),i)===f[1]):c(o(l()(r,s[0]),i))}return i})).reduce(u||function(t,e){return t&&e})}};const w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.asObject,n=void 0!==r&&r,i=e.postProcessValue,u=void 0===i?function(t){return t}:i,c=e.reduceFun,s=e.accessInfo,l=void 0===s?"accessInfo":s;return(0,o.withPropsOnChange)([t,l],(function(){var e,r,o,i,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e={},r=t,o=n?d()(s[t],m({accessInfo:s[l],postProcessValue:u,reduceFun:c})):m({accessInfo:s[l],postProcessValue:u,reduceFun:c})(s[t]),i=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==h(i)?i:String(i))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}))},O=function(){return(0,o.compose)((0,n.connect)((0,i.P1)(u.J9,u._H,c.np,(function(t,e,r){return{accessInfo:{mapId:t,mapInfo:e,user:r}}}))),w.apply(void 0,arguments))}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>y,Nr:()=>g,ic:()=>v,Jz:()=>h,VM:()=>m,CF:()=>w,Ju:()=>O});var o=r(91175),n=r.n(o),i=r(288306),u=r.n(i),c=r(800827),s=r(552259),l=r(737275);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){var o;return o=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==a(o)?o:String(o))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=function(t){return t.maplayout&&t.maplayout.layout||{}},g=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},b=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},v=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=y(t),n=b(t);return o&&Object.keys(o).filter((function(t){return e[t]})).reduce((function(t,e){var i;return p(p({},t),{},d({},e,r&&null!==(i=n[e])&&void 0!==i?i:o[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(y(t))+JSON.stringify(b(t))+JSON.stringify(e)+(r?"_isDock":"")})),h=function(t){var e;return!(null===(e=y(t))||void 0===e||!e.rightPanel)},m=function(t){var e,r=l.ZP.getConfigProp("mapLayout")||s.DEFAULT_MAP_LAYOUT;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=y(t);return!!n()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},w=function(t){var e=(0,c.Od)(t),r=g(t);return r&&e&&e.size&&{left:(0,s.parseLayoutValue)(r.left,e.size.width),bottom:(0,s.parseLayoutValue)(r.bottom,e.size.height),right:(0,s.parseLayoutValue)(r.right,e.size.width),top:(0,s.parseLayoutValue)(r.top,e.size.height)}},O=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}}}}]);