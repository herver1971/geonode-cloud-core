(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[40353],{179682:(t,r,n)=>{"use strict";function e(t,r,n){for(var e,o,s=n||i,a=0,u=t.length,h=!1;a<u;)(o=+s(t[e=a+(u-a>>1)],r))<0?a=e+1:(u=e,h=!o);return h?a:~a}function i(t,r){return t>r?1:t<r?-1:0}function o(t,r){return t.indexOf(r)>=0}function s(t,r,n){var e,i=t.length;if(t[0]<=r)return 0;if(r<=t[i-1])return i-1;if(n>0){for(e=1;e<i;++e)if(t[e]<r)return e-1}else if(n<0){for(e=1;e<i;++e)if(t[e]<=r)return e}else for(e=1;e<i;++e){if(t[e]==r)return e;if(t[e]<r)return t[e-1]-r<r-t[e]?e-1:e}return i-1}function a(t,r,n){for(;r<n;){var e=t[r];t[r]=t[n],t[n]=e,++r,--n}}function u(t,r){for(var n=Array.isArray(r)?r:[r],e=n.length,i=0;i<e;i++)t[t.length]=n[i]}function h(t,r){var n=t.indexOf(r),e=n>-1;return e&&t.splice(n,1),e}function f(t,r){var n=t.length;if(n!==r.length)return!1;for(var e=0;e<n;e++)if(t[e]!==r[e])return!1;return!0}function l(t,r){var n,e=t.length,i=Array(t.length);for(n=0;n<e;n++)i[n]={index:n,value:t[n]};for(i.sort((function(t,n){return r(t.value,n.value)||t.index-n.index})),n=0;n<t.length;n++)t[n]=i[n].value}function d(t,r,n){var e=r||i;return t.every((function(r,i){if(0===i)return!0;var o=e(t[i-1],r);return!(o>0||n&&0===o)}))}n.d(r,{ry:()=>e,kK:()=>i,q9:()=>o,h7:()=>s,FZ:()=>a,l7:()=>u,Od:()=>h,fS:()=>f,XV:()=>l,pT:()=>d})},640353:(t,r,n)=>{"use strict";n.d(r,{iu:()=>F,ZP:()=>P,Bb:()=>N,oJ:()=>m});var e=n(179682),i=n(421915),o=n(303696),s=n(28795),a=n(432538),u=n(832562),h=n(583729),f=n(438667),l=n(686204),d=n(862418),v=function(t){function r(r,n){t.call(this),this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===n||Array.isArray(r[0])?this.setCoordinates(r,n):this.setFlatCoordinates(n,r)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.clone=function(){return new r(this.flatCoordinates.slice(),this.layout)},r.prototype.closestPointXY=function(t,r,n,e){return e<(0,i.qf)(this.getExtent(),t,r)?e:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,r,n,e))},r.prototype.getArea=function(){return(0,u.QQ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},r.prototype.getCoordinates=function(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},r.prototype.getSimplifiedGeometryInternal=function(t){var n=[];return n.length=(0,d.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new r(n,o.Z.XY)},r.prototype.getType=function(){return s.Z.LINEAR_RING},r.prototype.intersectsExtent=function(t){return!1},r.prototype.setCoordinates=function(t,r){this.setLayout(r,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,f.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},r}(a.ZP);const c=v;var g=n(752043),p=n(870295),_=n(430197),C=n(538529),y=n(260897),R=n(680793),x=n(921882),I=function(t){function r(r,n,e){t.call(this),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,void 0!==n&&e?(this.setFlatCoordinates(n,r),this.ends_=e):this.setCoordinates(r,n)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.appendLinearRing=function(t){this.flatCoordinates?(0,e.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},r.prototype.clone=function(){return new r(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},r.prototype.closestPointXY=function(t,r,n,e){return e<(0,i.qf)(this.getExtent(),t,r)?e:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,r,n,e))},r.prototype.containsXY=function(t,r){return(0,_.wY)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,r)},r.prototype.getArea=function(){return(0,u.KP)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},r.prototype.getCoordinates=function(t){var r;return void 0!==t?(r=this.getOrientedFlatCoordinates().slice(),(0,R.zX)(r,0,this.ends_,this.stride,t)):r=this.flatCoordinates,(0,l.o1)(r,0,this.ends_,this.stride)},r.prototype.getEnds=function(){return this.ends_},r.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var t=(0,i.qg)(this.getExtent());this.flatInteriorPoint_=(0,C.X)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},r.prototype.getInteriorPoint=function(){return new g.Z(this.getFlatInteriorPoint(),o.Z.XYM)},r.prototype.getLinearRingCount=function(){return this.ends_.length},r.prototype.getLinearRing=function(t){return t<0||this.ends_.length<=t?null:new c(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},r.prototype.getLinearRings=function(){for(var t=this.layout,r=this.flatCoordinates,n=this.ends_,e=[],i=0,o=0,s=n.length;o<s;++o){var a=n[o],u=new c(r.slice(i,a),t);e.push(u),i=a}return e},r.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,R.iH)(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,R.zX)(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},r.prototype.getSimplifiedGeometryInternal=function(t){var n=[],e=[];return n.length=(0,d.Zh)(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),n,0,e),new r(n,o.Z.XY,e)},r.prototype.getType=function(){return s.Z.POLYGON},r.prototype.intersectsExtent=function(t){return(0,y.ac)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)},r.prototype.setCoordinates=function(t,r){this.setLayout(r,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var n=(0,f._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===n.length?0:n[n.length-1],this.changed()},r}(a.ZP);const P=I;function F(t,r,n,i){for(var s=n||32,a=[],u=0;u<s;++u)(0,e.l7)(a,(0,p.cv)(t,r,2*Math.PI*u/s,i));return a.push(a[0],a[1]),new I(a,o.Z.XY,[a.length])}function m(t){var r=t[0],n=t[1],e=t[2],i=t[3],s=[r,n,r,i,e,i,e,n,r,n];return new I(s,o.Z.XY,[s.length])}function N(t,r,n){for(var e=r||32,i=t.getStride(),o=t.getLayout(),s=t.getCenter(),a=i*(e+1),u=new Array(a),h=0;h<a;h+=i){u[h]=0,u[h+1]=0;for(var f=2;f<i;f++)u[h+f]=s[f]}var l=[u.length],d=new I(u,o,l);return function(t,r,n,e){for(var i=t.getFlatCoordinates(),o=t.getStride(),s=i.length/o-1,a=e||0,u=0;u<=s;++u){var h=u*o,f=a+2*(0,x.$W)(u,s)*Math.PI/s;i[h]=r[0]+n*Math.cos(f),i[h+1]=r[1]+n*Math.sin(f)}t.changed()}(d,s,t.getRadius(),n),d}},832562:(t,r,n)=>{"use strict";function e(t,r,n,e){for(var i=0,o=t[n-e],s=t[n-e+1];r<n;r+=e){var a=t[r],u=t[r+1];i+=s*a-o*u,o=a,s=u}return i/2}function i(t,r,n,i){for(var o=0,s=0,a=n.length;s<a;++s){var u=n[s];o+=e(t,r,u,i),r=u}return o}function o(t,r,n,e){for(var o=0,s=0,a=n.length;s<a;++s){var u=n[s];o+=i(t,r,u,e),r=u[u.length-1]}return o}n.d(r,{QQ:()=>e,KP:()=>i,Eu:()=>o})},583729:(t,r,n)=>{"use strict";n.d(r,{Bv:()=>o,Af:()=>s,sD:()=>a,H$:()=>u,Xl:()=>h,gI:()=>f});var e=n(921882);function i(t,r,n,i,o,s,a){var u,h=t[r],f=t[r+1],l=t[n]-h,d=t[n+1]-f;if(0===l&&0===d)u=r;else{var v=((o-h)*l+(s-f)*d)/(l*l+d*d);if(v>1)u=n;else{if(v>0){for(var c=0;c<i;++c)a[c]=(0,e.t7)(t[r+c],t[n+c],v);return void(a.length=i)}u=r}}for(var g=0;g<i;++g)a[g]=t[u+g];a.length=i}function o(t,r,n,i,o){var s=t[r],a=t[r+1];for(r+=i;r<n;r+=i){var u=t[r],h=t[r+1],f=(0,e.bI)(s,a,u,h);f>o&&(o=f),s=u,a=h}return o}function s(t,r,n,e,i){for(var s=0,a=n.length;s<a;++s){var u=n[s];i=o(t,r,u,e,i),r=u}return i}function a(t,r,n,e,i){for(var o=0,a=n.length;o<a;++o){var u=n[o];i=s(t,r,u,e,i),r=u[u.length-1]}return i}function u(t,r,n,o,s,a,u,h,f,l,d){if(r==n)return l;var v,c;if(0===s){if((c=(0,e.bI)(u,h,t[r],t[r+1]))<l){for(v=0;v<o;++v)f[v]=t[r+v];return f.length=o,c}return l}for(var g=d||[NaN,NaN],p=r+o;p<n;)if(i(t,p-o,p,o,u,h,g),(c=(0,e.bI)(u,h,g[0],g[1]))<l){for(l=c,v=0;v<o;++v)f[v]=g[v];f.length=o,p+=o}else p+=o*Math.max((Math.sqrt(c)-Math.sqrt(l))/s|0,1);if(a&&(i(t,n-o,r,o,u,h,g),(c=(0,e.bI)(u,h,g[0],g[1]))<l)){for(l=c,v=0;v<o;++v)f[v]=g[v];f.length=o}return l}function h(t,r,n,e,i,o,s,a,h,f,l){for(var d=l||[NaN,NaN],v=0,c=n.length;v<c;++v){var g=n[v];f=u(t,r,g,e,i,o,s,a,h,f,d),r=g}return f}function f(t,r,n,e,i,o,s,a,u,f,l){for(var d=l||[NaN,NaN],v=0,c=n.length;v<c;++v){var g=n[v];f=h(t,r,g,e,i,o,s,a,u,f,d),r=g[g.length-1]}return f}},430197:(t,r,n)=>{"use strict";n.d(r,{uG:()=>i,TG:()=>o,wY:()=>s,Zl:()=>a});var e=n(421915);function i(t,r,n,i,s){return!(0,e.H6)(s,(function(e){return!o(t,r,n,i,e[0],e[1])}))}function o(t,r,n,e,i,o){for(var s=0,a=t[n-e],u=t[n-e+1];r<n;r+=e){var h=t[r],f=t[r+1];u<=o?f>o&&(h-a)*(o-u)-(i-a)*(f-u)>0&&s++:f<=o&&(h-a)*(o-u)-(i-a)*(f-u)<0&&s--,a=h,u=f}return 0!==s}function s(t,r,n,e,i,s){if(0===n.length)return!1;if(!o(t,r,n[0],e,i,s))return!1;for(var a=1,u=n.length;a<u;++a)if(o(t,n[a-1],n[a],e,i,s))return!1;return!0}function a(t,r,n,e,i,o){if(0===n.length)return!1;for(var a=0,u=n.length;a<u;++a){var h=n[a];if(s(t,r,h,e,i,o))return!0;r=h[h.length-1]}return!1}},686204:(t,r,n)=>{"use strict";function e(t,r,n,e,i){for(var o=void 0!==i?i:[],s=0,a=r;a<n;a+=e)o[s++]=t.slice(a,a+e);return o.length=s,o}function i(t,r,n,i,o){for(var s=void 0!==o?o:[],a=0,u=0,h=n.length;u<h;++u){var f=n[u];s[a++]=e(t,r,f,i,s[a]),r=f}return s.length=a,s}function o(t,r,n,e,o){for(var s=void 0!==o?o:[],a=0,u=0,h=n.length;u<h;++u){var f=n[u];s[a++]=i(t,r,f,e,s[a]),r=f[f.length-1]}return s.length=a,s}n.d(r,{Ml:()=>e,o1:()=>i,ug:()=>o})},538529:(t,r,n)=>{"use strict";n.d(r,{X:()=>o,U:()=>s});var e=n(179682),i=n(430197);function o(t,r,n,o,s,a,u){for(var h,f,l,d,v,c,g,p=s[a+1],_=[],C=0,y=n.length;C<y;++C){var R=n[C];for(d=t[R-o],c=t[R-o+1],h=r;h<R;h+=o)v=t[h],g=t[h+1],(p<=c&&g<=p||c<=p&&p<=g)&&(l=(p-c)/(g-c)*(v-d)+d,_.push(l)),d=v,c=g}var x=NaN,I=-1/0;for(_.sort(e.kK),d=_[0],h=1,f=_.length;h<f;++h){v=_[h];var P=Math.abs(v-d);P>I&&(l=(d+v)/2,(0,i.wY)(t,r,n,o,l,p)&&(x=l,I=P)),d=v}return isNaN(x)&&(x=s[a]),u?(u.push(x,p,I),u):[x,p,I]}function s(t,r,n,e,i){for(var s=[],a=0,u=n.length;a<u;++a){var h=n[a];s=o(t,r,h,e,i,2*a,s),r=h[h.length-1]}return s}},260897:(t,r,n)=>{"use strict";n.d(r,{Kz:()=>s,AW:()=>a,ac:()=>u,oW:()=>h});var e=n(421915),i=n(430197),o=n(95173);function s(t,r,n,i,s){var a=(0,e.qP)((0,e.lJ)(),t,r,n,i);return!!(0,e.kK)(s,a)&&(!!(0,e.r4)(s,a)||a[0]>=s[0]&&a[2]<=s[2]||a[1]>=s[1]&&a[3]<=s[3]||(0,o.E)(t,r,n,i,(function(t,r){return(0,e.I7)(s,t,r)})))}function a(t,r,n,e,i){for(var o=0,a=n.length;o<a;++o){if(s(t,r,n[o],e,i))return!0;r=n[o]}return!1}function u(t,r,n,e,o){if(!function(t,r,n,e,o){return!!(s(t,r,n,e,o)||(0,i.TG)(t,r,n,e,o[0],o[1])||(0,i.TG)(t,r,n,e,o[0],o[3])||(0,i.TG)(t,r,n,e,o[2],o[1])||(0,i.TG)(t,r,n,e,o[2],o[3]))}(t,r,n[0],e,o))return!1;if(1===n.length)return!0;for(var a=1,u=n.length;a<u;++a)if((0,i.uG)(t,n[a-1],n[a],e,o)&&!s(t,n[a-1],n[a],e,o))return!1;return!0}function h(t,r,n,e,i){for(var o=0,s=n.length;o<s;++o){var a=n[o];if(u(t,r,a,e,i))return!0;r=a[a.length-1]}return!1}},680793:(t,r,n)=>{"use strict";function e(t,r,n,e){for(;r<n-e;){for(var i=0;i<e;++i){var o=t[r+i];t[r+i]=t[n-e+i],t[n-e+i]=o}r+=e,n-=e}}function i(t,r,n,e){for(var i=0,o=t[n-e],s=t[n-e+1];r<n;r+=e){var a=t[r],u=t[r+1];i+=(a-o)*(u+s),o=a,s=u}return i>0}function o(t,r,n,e,o){for(var s=void 0!==o&&o,a=0,u=n.length;a<u;++a){var h=n[a],f=i(t,r,h,e);if(0===a){if(s&&f||!s&&!f)return!1}else if(s&&!f||!s&&f)return!1;r=h}return!0}function s(t,r,n,e,i){for(var s=0,a=n.length;s<a;++s)if(!o(t,r,n[s],e,i))return!1;return!0}function a(t,r,n,o,s){for(var a=void 0!==s&&s,u=0,h=n.length;u<h;++u){var f=n[u],l=i(t,r,f,o);(0===u?a&&l||!a&&!l:a&&!l||!a&&l)&&e(t,r,f,o),r=f}return r}function u(t,r,n,e,i){for(var o=0,s=n.length;o<s;++o)r=a(t,r,n[o],e,i);return r}n.d(r,{bt:()=>i,iH:()=>o,$v:()=>s,zX:()=>a,dL:()=>u})},95173:(t,r,n)=>{"use strict";function e(t,r,n,e,i,o){for(var s,a=[t[r],t[r+1]],u=[];r+e<n;r+=e){if(u[0]=t[r+e],u[1]=t[r+e+1],s=i.call(o,a,u))return s;a[0]=u[0],a[1]=u[1]}return!1}n.d(r,{E:()=>e})},862418:(t,r,n)=>{"use strict";n.d(r,{dt:()=>i,UJ:()=>o,uZ:()=>s,Zh:()=>u,Pp:()=>h});var e=n(921882);function i(t,r,n,i,o,s,a){var u=(n-r)/i;if(u<3){for(;r<n;r+=i)s[a++]=t[r],s[a++]=t[r+1];return a}var h=new Array(u);h[0]=1,h[u-1]=1;for(var f=[r,n-i],l=0;f.length>0;){for(var d=f.pop(),v=f.pop(),c=0,g=t[v],p=t[v+1],_=t[d],C=t[d+1],y=v+i;y<d;y+=i){var R=t[y],x=t[y+1],I=(0,e.rU)(R,x,g,p,_,C);I>c&&(l=y,c=I)}c>o&&(h[(l-r)/i]=1,v+i<l&&f.push(v,l),l+i<d&&f.push(l,d))}for(var P=0;P<u;++P)h[P]&&(s[a++]=t[r+P*i],s[a++]=t[r+P*i+1]);return a}function o(t,r,n,e,o,s,a,u){for(var h=0,f=n.length;h<f;++h){var l=n[h];a=i(t,r,l,e,o,s,a),u.push(a),r=l}return a}function s(t,r){return r*Math.round(t/r)}function a(t,r,n,e,i,o,a){if(r==n)return a;var u,h,f=s(t[r],i),l=s(t[r+1],i);r+=e,o[a++]=f,o[a++]=l;do{if(u=s(t[r],i),h=s(t[r+1],i),(r+=e)==n)return o[a++]=u,o[a++]=h,a}while(u==f&&h==l);for(;r<n;){var d=s(t[r],i),v=s(t[r+1],i);if(r+=e,d!=u||v!=h){var c=u-f,g=h-l,p=d-f,_=v-l;c*_==g*p&&(c<0&&p<c||c==p||c>0&&p>c)&&(g<0&&_<g||g==_||g>0&&_>g)?(u=d,h=v):(o[a++]=u,o[a++]=h,f=u,l=h,u=d,h=v)}}return o[a++]=u,o[a++]=h,a}function u(t,r,n,e,i,o,s,u){for(var h=0,f=n.length;h<f;++h){var l=n[h];s=a(t,r,l,e,i,o,s),u.push(s),r=l}return s}function h(t,r,n,e,i,o,s,a){for(var h=0,f=n.length;h<f;++h){var l=n[h],d=[];s=u(t,r,l,e,i,o,s,d),a.push(d),r=l[l.length-1]}return s}}}]);