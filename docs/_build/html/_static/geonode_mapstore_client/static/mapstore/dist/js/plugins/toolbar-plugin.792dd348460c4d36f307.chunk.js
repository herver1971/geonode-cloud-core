(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[22794,47310],{921914:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>l,e8:()=>s,E0:()=>p,F9:()=>f,X_:()=>y,pb:()=>b,qb:()=>v,Re:()=>m,ih:()=>O,xy:()=>d,jL:()=>g,oz:()=>E,ph:()=>h,lF:()=>P,gG:()=>S,cb:()=>_,GI:()=>T,B1:()=>j,fv:()=>I,gc:()=>w,zX:()=>N,ZF:()=>R,Zb:()=>D,DW:()=>A,Xp:()=>F,Fm:()=>C,sV:()=>G,LU:()=>M,XP:()=>L,WU:()=>k,JB:()=>U,g:()=>Y,ws:()=>x,HP:()=>V,aN:()=>q,Pg:()=>H,u0:()=>W,TM:()=>Z,PM:()=>B,lK:()=>X,sv:()=>J,MO:()=>K,oO:()=>Q,Mc:()=>$,Zw:()=>tt,RA:()=>et,am:()=>rt,ZM:()=>nt,wm:()=>ot,Y$:()=>it,Qu:()=>ut,kT:()=>at});var n=r(647310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",l="PURGE_MAPINFO_RESULTS",s="CHANGE_MAPINFO_FORMAT",p="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",b="HIDE_REVERSE_GEOCODE",v="GET_VECTOR_INFO",m="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",d="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",E="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",h="TOGGLE_MAPINFO_STATE",P="UPDATE_CENTER_TO_MARKER",S="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",T="IDENTIFY:CHANGE_FORMAT",j="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",I="IDENTIFY:EDIT_LAYER_FEATURES",w="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",N="IDENTIFY:SET_MAP_TRIGGER",R="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP",A="IDENTIFY:IDENTIFY_IS_MOUNTED",F="IDENTIFY:INIT_PLUGIN";function C(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function G(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function M(){return{type:m}}function L(){return{type:O}}function k(t,e){return{type:c,reqId:t,request:e}}function U(t,e,r,n){return{type:v,layer:t,request:e,metadata:r,queryableLayers:n}}function Y(){return{type:l}}function x(t){return{type:s,infoFormat:t}}function V(){return{type:p}}function q(){return{type:f}}function z(t){return{type:y,reverseGeocodeData:t.data}}function H(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(z(t))})).catch((function(t){e(z(t))}))}}function W(){return{type:b}}function Z(){return{type:h}}function B(t){return{type:P,status:t}}function X(t,e){return{type:d,point:t,layer:e,filterNameList:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],overrideParams:arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},itemId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:null}}function J(t){return{type:g,point:t}}function K(t){return{type:E,enabled:t}}function Q(t){return{type:S,index:t}}var $=function(){return{type:_}},tt=function(t){return{type:T,format:t}},et=function(t){return{type:j,showCoordinateEditor:t}},rt=function(t){return{type:I,layer:t}},nt=function(t){return{type:w,query:t}},ot=function(t){return{type:N,trigger:t}},it=function(t){return{type:D,value:t}},ut=function(t){return{type:A,isMounted:t}},at=function(t){return{type:F,cfg:t}}},647310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(375875),o=r.n(n),i=r(472500),u=r.n(i),a=r(727418),c=r.n(a),l={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(t,e){var r=c()({q:t},l,e||{}),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},l),n=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},683520:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>G});var n=r(124852),o=r.n(n),i=r(675263),u=r.n(i),a=r(171703),c=r(264317),l=r(731255),s=r(55105),p=r(22222),f=r(727418),y=r.n(f),b=r(658252);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}var m=["children"],O=["children"];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return(e=j(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},h.apply(this,arguments)}function P(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,j(n.key),n)}}function T(t,e,r){return e&&_(t.prototype,e),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function j(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:String(e)}function I(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=D(t);if(e){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}(this,r)}}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var A=function(t){I(r,t);var e=N(r);function r(){return S(this,r),e.apply(this,arguments)}return T(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=P(t,m);return o().createElement(c.CSSTransitionGroup,h({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),e)}}]),r}(o().Component),F=function(t){I(r,t);var e=N(r);function r(){return S(this,r),e.apply(this,arguments)}return T(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=P(t,O);return o().createElement("div",r,e)}}]),r}(o().Component),C=function(t){I(r,t);var e=N(r);function r(){var t;S(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return E(R(t=e.call.apply(e,[this].concat(o))),"getPanel",(function(t){return!0===t.panel?t.plugin:t.panel})),E(R(t),"getPanels",(function(){return t.getTools().filter((function(t){return t.panel})).map((function(e){return{name:e.name,title:e.title,cfg:e.cfg,panel:t.getPanel(e),items:e.items,wrap:e.wrap||!1}}))})),E(R(t),"getTools",(function(){var e=t.props.items.filter((function(t){return!t.alwaysVisible}))||[];return t.props.items.filter((function(r){return r.alwaysVisible||1===e.length||t.props.allVisible})).filter((function(e){return!e.showWhen||e.showWhen(t.props)})).map((function(t,e){return y()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),t}return T(r,[{key:"render",value:function(){var t=this.props.disableAnimation?F:A;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:t,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:"vertical"!==this.props.layout?g(g({},this.props.style),{},{display:"flex"}):this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);E(C,"propTypes",{id:u().string,tools:u().array,mapType:u().string,style:u().object,panelStyle:u().object,panelClassName:u().string,disableAnimation:u().bool,active:u().string,items:u().array,allVisible:u().bool,layout:u().string,stateSelector:u().string,buttonStyle:u().string,buttonSize:u().string,pressedButtonStyle:u().string,btnConfig:u().object}),E(C,"contextTypes",{messages:u().object,router:u().object}),E(C,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});const G={ToolbarPlugin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,a.connect)(function(t){return(0,p.P1)([function(e){return e.controls&&e.controls[t]&&e.controls[t].active},function(e){return e.controls&&e.controls[t]&&e.controls[t].expanded},l.Rd,function(t){return(0,s.ic)(t,{right:!0,bottom:!0})}],(function(e,r,n,o){return{active:e,allVisible:r,stateSelector:t,layout:n?"horizontal":"vertical",style:o}}))}(t))(C)},reducers:{controls:r(925108).Z}}},925108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(782904),o=r(727418),i=r.n(o),u=r(921914);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){var n;return n=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==a(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return i()({},t,s({},e.control,i()({},t[e.control],s({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?i()({},t,s({},e.control,i()({},t[e.control],s({},e.property,void 0)))):i()({},t,s({},e.control,i()({},t[e.control],s({},e.property,e.value))));case n.dc:return i()({},t,s({},e.control,i()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})).reduce((function(e,r){return i()(e,s({},r,i()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return i()({},t,o);case u.DW:return l(l({},t),{},{info:l(l({},t.info),{},{available:e.isMounted})});default:return t}}},55105:(t,e,r)=>{"use strict";r.d(e,{Ss:()=>b,Nr:()=>v,ic:()=>O,Jz:()=>d,VM:()=>g,CF:()=>E,Ju:()=>h});var n=r(91175),o=r.n(n),i=r(288306),u=r.n(i),a=r(800827),c=r(552259),l=r(737275);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=function(t){return t.maplayout&&t.maplayout.layout||{}},v=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},m=function(t){return t.maplayout&&t.maplayout.boundingSidebarRect||{}},O=u()((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=b(t),o=m(t);return n&&Object.keys(n).filter((function(t){return e[t]})).reduce((function(t,e){var i;return f(f({},t),{},y({},e,r&&null!==(i=o[e])&&void 0!==i?i:n[e]))}),{})||{}}),(function(t,e,r){return JSON.stringify(b(t))+JSON.stringify(m(t))+JSON.stringify(e)+(r?"_isDock":"")})),d=function(t){var e;return!(null===(e=b(t))||void 0===e||!e.rightPanel)},g=function(t){var e,r=l.ZP.getConfigProp("mapLayout")||c.DEFAULT_MAP_LAYOUT;return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=b(t);return!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})))}(t,[{key:"bottom",value:null!==(e=null==r?void 0:r.bottom.sm)&&void 0!==e?e:0,type:"not"}])},E=function(t){var e=(0,a.Od)(t),r=v(t);return r&&e&&e.size&&{left:(0,c.parseLayoutValue)(r.left,e.size.width),bottom:(0,c.parseLayoutValue)(r.bottom,e.size.height),right:(0,c.parseLayoutValue)(r.right,e.size.width),top:(0,c.parseLayoutValue)(r.top,e.size.height)}},h=function(t){var e,r;return null!==(e=null==t||null===(r=t.maplayout)||void 0===r?void 0:r.dockPanels)&&void 0!==e?e:{left:[],right:[]}}},887157:(t,e,r)=>{var n=r(640554),o=r(588958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},441761:(t,e,r)=>{var n=r(644239),o=r(637005);t.exports=function(t){return o(t)&&"[object Date]"==n(t)}},819873:(t,e,r)=>{var n=r(887157),o=r(816612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},647960:(t,e,r)=>{var n=r(441761),o=r(307518),i=r(531167),u=i&&i.isDate,a=u?o(u):n;t.exports=a},588958:(t,e,r)=>{var n=r(829750),o=r(640554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},264317:(t,e,r)=>{"use strict";var n=i(r(1174)),o=i(r(692381));function i(t){return t&&t.__esModule?t:{default:t}}t.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}}}]);