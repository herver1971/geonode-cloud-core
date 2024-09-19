define(["./when-4bbc8319","./Matrix2-860854d4","./ArcType-fc72c06c","./GeometryOffsetAttribute-24539cee","./BoundingRectangle-aee525c0","./Transforms-0becfc64","./RuntimeError-1349fdaf","./ComponentDatatype-8f55628c","./EllipsoidGeodesic-0a6aa4ee","./EllipsoidTangentPlane-407b38a6","./GeometryAttribute-4590b388","./GeometryInstance-ace7be43","./GeometryPipeline-8721156a","./IndexDatatype-1d853600","./PolygonGeometryLibrary-70493175","./PolygonPipeline-bfbb6016","./VertexFormat-b8b51b88","./combine-e9466e32","./WebGLConstants-508b9636","./AxisAlignedBoundingBox-ebc959c9","./IntersectionTests-1d677ce2","./Plane-0e4269ac","./AttributeCompression-5f6be9e6","./EncodedCartesian3-6e74751e","./arrayRemoveDuplicates-b1a32b72","./EllipsoidRhumbLine-d4d43630","./GeometryAttributes-7827a6c2"],(function(e,t,o,i,n,r,a,s,l,c,u,p,m,y,g,d,h,f,b,_,P,x,w,C,T,I,A){"use strict";const E=new t.Cartographic,v=new t.Cartographic;function G(e,t,o,i){const n=i.cartesianToCartographic(e,E).height,r=i.cartesianToCartographic(t,v);r.height=n,i.cartographicToCartesian(r,t);const a=i.cartesianToCartographic(o,v);a.height=n-100,i.cartographicToCartesian(a,o)}const O=new n.BoundingRectangle,V=new t.Cartesian3,F=new t.Cartesian3,D=new t.Cartesian3,L=new t.Cartesian3,N=new t.Cartesian3,H=new t.Cartesian3;let R=new t.Cartesian3,M=new t.Cartesian3,S=new t.Cartesian3;const B=new t.Cartesian2,k=new t.Cartesian2,z=new t.Cartesian3,W=new r.Quaternion,Y=new t.Matrix3,U=new t.Matrix3;function j(o){const n=o.vertexFormat,a=o.geometry,l=o.shadowVolume,c=a.attributes.position.values;let p=c.length;const m=o.wall,y=o.top||m,g=o.bottom||m;if(n.st||n.normal||n.tangent||n.bitangent||l){const e=o.boundingRectangle,i=o.tangentPlane,d=o.ellipsoid,h=o.stRotation,f=o.perPositionHeight,b=B;b.x=e.x,b.y=e.y;const _=n.st?new Float32Array(p/3*2):void 0;let P;n.normal&&(P=f&&y&&!m?a.attributes.normal.values:new Float32Array(p));const x=n.tangent?new Float32Array(p):void 0,w=n.bitangent?new Float32Array(p):void 0,C=l?new Float32Array(p):void 0;let T=0,I=0,A=F,E=D,v=L,O=!0,j=Y,Q=U;if(0!==h){let e=r.Quaternion.fromAxisAngle(i._plane.normal,h,W);j=t.Matrix3.fromQuaternion(e,j),e=r.Quaternion.fromAxisAngle(i._plane.normal,-h,W),Q=t.Matrix3.fromQuaternion(e,Q)}else j=t.Matrix3.clone(t.Matrix3.IDENTITY,j),Q=t.Matrix3.clone(t.Matrix3.IDENTITY,Q);let q=0,K=0;y&&g&&(q=p/2,K=p/3,p/=2);for(let r=0;r<p;r+=3){const a=t.Cartesian3.fromArray(c,r,z);if(n.st){let o=t.Matrix3.multiplyByVector(j,a,V);o=d.scaleToGeodeticSurface(o,o);const n=i.projectPointOntoPlane(o,k);t.Cartesian2.subtract(n,b,n);const r=s.CesiumMath.clamp(n.x/e.width,0,1),l=s.CesiumMath.clamp(n.y/e.height,0,1);g&&(_[T+K]=r,_[T+1+K]=l),y&&(_[T]=r,_[T+1]=l),T+=2}if(n.normal||n.tangent||n.bitangent||l){const e=I+1,i=I+2;if(m){if(r+3<p){const e=t.Cartesian3.fromArray(c,r+3,N);if(O){const o=t.Cartesian3.fromArray(c,r+p,H);f&&G(a,e,o,d),t.Cartesian3.subtract(e,a,e),t.Cartesian3.subtract(o,a,o),A=t.Cartesian3.normalize(t.Cartesian3.cross(o,e,A),A),O=!1}t.Cartesian3.equalsEpsilon(e,a,s.CesiumMath.EPSILON10)&&(O=!0)}(n.tangent||n.bitangent)&&(v=d.geodeticSurfaceNormal(a,v),n.tangent&&(E=t.Cartesian3.normalize(t.Cartesian3.cross(v,A,E),E)))}else A=d.geodeticSurfaceNormal(a,A),(n.tangent||n.bitangent)&&(f&&(R=t.Cartesian3.fromArray(P,I,R),M=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,R,M),M=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(Q,M,M),M),n.bitangent&&(S=t.Cartesian3.normalize(t.Cartesian3.cross(R,M,S),S))),E=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,A,E),E=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(Q,E,E),E),n.bitangent&&(v=t.Cartesian3.normalize(t.Cartesian3.cross(A,E,v),v)));n.normal&&(o.wall?(P[I+q]=A.x,P[e+q]=A.y,P[i+q]=A.z):g&&(P[I+q]=-A.x,P[e+q]=-A.y,P[i+q]=-A.z),(y&&!f||m)&&(P[I]=A.x,P[e]=A.y,P[i]=A.z)),l&&(m&&(A=d.geodeticSurfaceNormal(a,A)),C[I+q]=-A.x,C[e+q]=-A.y,C[i+q]=-A.z),n.tangent&&(o.wall?(x[I+q]=E.x,x[e+q]=E.y,x[i+q]=E.z):g&&(x[I+q]=-E.x,x[e+q]=-E.y,x[i+q]=-E.z),y&&(f?(x[I]=M.x,x[e]=M.y,x[i]=M.z):(x[I]=E.x,x[e]=E.y,x[i]=E.z))),n.bitangent&&(g&&(w[I+q]=v.x,w[e+q]=v.y,w[i+q]=v.z),y&&(f?(w[I]=S.x,w[e]=S.y,w[i]=S.z):(w[I]=v.x,w[e]=v.y,w[i]=v.z))),I+=3}}n.st&&(a.attributes.st=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:_})),n.normal&&(a.attributes.normal=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P})),n.tangent&&(a.attributes.tangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:x})),n.bitangent&&(a.attributes.bitangent=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),l&&(a.attributes.extrudeDirection=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}))}if(o.extrude&&e.defined(o.offsetAttribute)){const e=c.length/3;let t=new Uint8Array(e);if(o.offsetAttribute===i.GeometryOffsetAttribute.TOP)y&&g||m?t=i.arrayFill(t,1,0,e/2):y&&(t=i.arrayFill(t,1));else{const e=o.offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1;t=i.arrayFill(t,e)}a.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return a}const Q=new t.Cartographic,q=new t.Cartographic,K={westOverIDL:0,eastOverIDL:0};let Z=new l.EllipsoidGeodesic;function J(i,n,r,a,c){if(c=e.defaultValue(c,new t.Rectangle),!e.defined(i)||i.length<3)return c.west=0,c.north=0,c.south=0,c.east=0,c;if(r===o.ArcType.RHUMB)return t.Rectangle.fromCartesianArray(i,n,c);Z.ellipsoid.equals(n)||(Z=new l.EllipsoidGeodesic(void 0,void 0,n)),c.west=Number.POSITIVE_INFINITY,c.east=Number.NEGATIVE_INFINITY,c.south=Number.POSITIVE_INFINITY,c.north=Number.NEGATIVE_INFINITY,K.westOverIDL=Number.POSITIVE_INFINITY,K.eastOverIDL=Number.NEGATIVE_INFINITY;const u=1/s.CesiumMath.chordLength(a,n.maximumRadius),p=i.length;let m,y=n.cartesianToCartographic(i[0],q),g=Q;for(let e=1;e<p;e++)m=g,g=y,y=n.cartesianToCartographic(i[e],m),Z.setEndPoints(g,y),$(Z,u,c,K);return m=g,g=y,y=n.cartesianToCartographic(i[0],m),Z.setEndPoints(g,y),$(Z,u,c,K),c.east-c.west>K.eastOverIDL-K.westOverIDL&&(c.west=K.westOverIDL,c.east=K.eastOverIDL,c.east>s.CesiumMath.PI&&(c.east=c.east-s.CesiumMath.TWO_PI),c.west>s.CesiumMath.PI&&(c.west=c.west-s.CesiumMath.TWO_PI)),c}const X=new t.Cartographic;function $(e,t,o,i){const n=e.surfaceDistance,r=Math.ceil(n*t),a=r>0?n/(r-1):Number.POSITIVE_INFINITY;let l=0;for(let t=0;t<r;t++){const t=e.interpolateUsingSurfaceDistance(l,X);l+=a;const n=t.longitude,r=t.latitude;o.west=Math.min(o.west,n),o.east=Math.max(o.east,n),o.south=Math.min(o.south,r),o.north=Math.max(o.north,r);const c=n>=0?n:n+s.CesiumMath.TWO_PI;i.westOverIDL=Math.min(i.westOverIDL,c),i.eastOverIDL=Math.max(i.eastOverIDL,c)}}const ee=[];function te(e,t,o,i,n,r,a,s,l){const u={walls:[]};let m;if(r||a){const i=g.PolygonGeometryLibrary.createGeometryFromPositions(e,t,o,n,s,l),c=i.attributes.position.values,d=i.indices;let h,f;if(r&&a){const e=c.concat(c);h=e.length/3,f=y.IndexDatatype.createTypedArray(h,2*d.length),f.set(d);const t=d.length,o=h/2;for(m=0;m<t;m+=3){const e=f[m]+o,i=f[m+1]+o,n=f[m+2]+o;f[m+t]=n,f[m+1+t]=i,f[m+2+t]=e}if(i.attributes.position.values=e,n&&s.normal){const t=i.attributes.normal.values;i.attributes.normal.values=new Float32Array(e.length),i.attributes.normal.values.set(t)}i.indices=f}else if(a){for(h=c.length/3,f=y.IndexDatatype.createTypedArray(h,d.length),m=0;m<d.length;m+=3)f[m]=d[m+2],f[m+1]=d[m+1],f[m+2]=d[m];i.indices=f}u.topAndBottom=new p.GeometryInstance({geometry:i})}let h=i.outerRing,f=c.EllipsoidTangentPlane.fromPoints(h,e),b=f.projectPointsOntoPlane(h,ee),_=d.PolygonPipeline.computeWindingOrder2D(b);_===d.WindingOrder.CLOCKWISE&&(h=h.slice().reverse());let P=g.PolygonGeometryLibrary.computeWallGeometry(h,e,o,n,l);u.walls.push(new p.GeometryInstance({geometry:P}));const x=i.holes;for(m=0;m<x.length;m++){let t=x[m];f=c.EllipsoidTangentPlane.fromPoints(t,e),b=f.projectPointsOntoPlane(t,ee),_=d.PolygonPipeline.computeWindingOrder2D(b),_===d.WindingOrder.COUNTER_CLOCKWISE&&(t=t.slice().reverse()),P=g.PolygonGeometryLibrary.computeWallGeometry(t,e,o,n,l),u.walls.push(new p.GeometryInstance({geometry:P}))}return u}function oe(i){const n=i.polygonHierarchy,r=e.defaultValue(i.vertexFormat,h.VertexFormat.DEFAULT),a=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(i.granularity,s.CesiumMath.RADIANS_PER_DEGREE),c=e.defaultValue(i.stRotation,0),u=e.defaultValue(i.perPositionHeight,!1),p=u&&e.defined(i.extrudedHeight);let m=e.defaultValue(i.height,0),y=e.defaultValue(i.extrudedHeight,m);if(!p){const e=Math.max(m,y);y=Math.min(m,y),m=e}this._vertexFormat=h.VertexFormat.clone(r),this._ellipsoid=t.Ellipsoid.clone(a),this._granularity=l,this._stRotation=c,this._height=m,this._extrudedHeight=y,this._closeTop=e.defaultValue(i.closeTop,!0),this._closeBottom=e.defaultValue(i.closeBottom,!0),this._polygonHierarchy=n,this._perPositionHeight=u,this._perPositionHeightExtrude=p,this._shadowVolume=e.defaultValue(i.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=i.offsetAttribute,this._arcType=e.defaultValue(i.arcType,o.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(n)+t.Ellipsoid.packedLength+h.VertexFormat.packedLength+12}oe.fromPositions=function(t){return new oe({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType})},oe.pack=function(o,i,n){return n=e.defaultValue(n,0),n=g.PolygonGeometryLibrary.packPolygonHierarchy(o._polygonHierarchy,i,n),t.Ellipsoid.pack(o._ellipsoid,i,n),n+=t.Ellipsoid.packedLength,h.VertexFormat.pack(o._vertexFormat,i,n),n+=h.VertexFormat.packedLength,i[n++]=o._height,i[n++]=o._extrudedHeight,i[n++]=o._granularity,i[n++]=o._stRotation,i[n++]=o._perPositionHeightExtrude?1:0,i[n++]=o._perPositionHeight?1:0,i[n++]=o._closeTop?1:0,i[n++]=o._closeBottom?1:0,i[n++]=o._shadowVolume?1:0,i[n++]=e.defaultValue(o._offsetAttribute,-1),i[n++]=o._arcType,i[n]=o.packedLength,i};const ie=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),ne=new h.VertexFormat,re={polygonHierarchy:{}};return oe.unpack=function(o,i,n){i=e.defaultValue(i,0);const r=g.PolygonGeometryLibrary.unpackPolygonHierarchy(o,i);i=r.startingIndex,delete r.startingIndex;const a=t.Ellipsoid.unpack(o,i,ie);i+=t.Ellipsoid.packedLength;const s=h.VertexFormat.unpack(o,i,ne);i+=h.VertexFormat.packedLength;const l=o[i++],c=o[i++],u=o[i++],p=o[i++],m=1===o[i++],y=1===o[i++],d=1===o[i++],f=1===o[i++],b=1===o[i++],_=o[i++],P=o[i++],x=o[i];return e.defined(n)||(n=new oe(re)),n._polygonHierarchy=r,n._ellipsoid=t.Ellipsoid.clone(a,n._ellipsoid),n._vertexFormat=h.VertexFormat.clone(s,n._vertexFormat),n._height=l,n._extrudedHeight=c,n._granularity=u,n._stRotation=p,n._perPositionHeightExtrude=m,n._perPositionHeight=y,n._closeTop=d,n._closeBottom=f,n._shadowVolume=b,n._offsetAttribute=-1===_?void 0:_,n._arcType=P,n.packedLength=x,n},oe.computeRectangle=function(i,n){const r=e.defaultValue(i.granularity,s.CesiumMath.RADIANS_PER_DEGREE),a=e.defaultValue(i.arcType,o.ArcType.GEODESIC),l=i.polygonHierarchy,c=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84);return J(l.positions,c,a,r,n)},oe.createGeometry=function(t){const o=t._vertexFormat,n=t._ellipsoid,a=t._granularity,l=t._stRotation,h=t._polygonHierarchy,f=t._perPositionHeight,b=t._closeTop,_=t._closeBottom,P=t._arcType;let x=h.positions;if(x.length<3)return;const w=c.EllipsoidTangentPlane.fromPoints(x,n),C=g.PolygonGeometryLibrary.polygonsFromHierarchy(h,w.projectPointsOntoPlane.bind(w),!f,n),T=C.hierarchy,I=C.polygons;if(0===T.length)return;x=T[0].outerRing;const A=g.PolygonGeometryLibrary.computeBoundingRectangle(w.plane.normal,w.projectPointOntoPlane.bind(w),x,l,O),E=[],v=t._height,G=t._extrudedHeight,V={perPositionHeight:f,vertexFormat:o,geometry:void 0,tangentPlane:w,boundingRectangle:A,ellipsoid:n,stRotation:l,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:P};let F;if(t._perPositionHeightExtrude||!s.CesiumMath.equalsEpsilon(v,G,0,s.CesiumMath.EPSILON2))for(V.extrude=!0,V.top=b,V.bottom=_,V.shadowVolume=t._shadowVolume,V.offsetAttribute=t._offsetAttribute,F=0;F<I.length;F++){const e=te(n,I[F],a,T[F],f,b,_,o,P);let t;b&&_?(t=e.topAndBottom,V.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,v,G,n,f)):b?(t=e.topAndBottom,t.geometry.attributes.position.values=d.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,v,n,!f),V.geometry=t.geometry):_&&(t=e.topAndBottom,t.geometry.attributes.position.values=d.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,G,n,!0),V.geometry=t.geometry),(b||_)&&(V.wall=!1,t.geometry=j(V),E.push(t));const i=e.walls;V.wall=!0;for(let e=0;e<i.length;e++){const t=i[e];V.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,v,G,n,f),t.geometry=j(V),E.push(t)}}else for(F=0;F<I.length;F++){const r=new p.GeometryInstance({geometry:g.PolygonGeometryLibrary.createGeometryFromPositions(n,I[F],a,f,o,P)});if(r.geometry.attributes.position.values=d.PolygonPipeline.scaleToGeodeticHeight(r.geometry.attributes.position.values,v,n,!f),V.geometry=r.geometry,r.geometry=j(V),e.defined(t._offsetAttribute)){const e=r.geometry.attributes.position.values.length,o=new Uint8Array(e/3),n=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1;i.arrayFill(o,n),r.geometry.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o})}E.push(r)}const D=m.GeometryPipeline.combineInstances(E)[0];D.attributes.position.values=new Float64Array(D.attributes.position.values),D.indices=y.IndexDatatype.createTypedArray(D.attributes.position.values.length/3,D.indices);const L=D.attributes,N=r.BoundingSphere.fromVertices(L.position.values);return o.position||delete L.position,new u.Geometry({attributes:L,indices:D.indices,primitiveType:D.primitiveType,boundingSphere:N,offsetAttribute:t._offsetAttribute})},oe.createShadowVolume=function(e,t,o){const i=e._granularity,n=e._ellipsoid,r=t(i,n),a=o(i,n);return new oe({polygonHierarchy:e._polygonHierarchy,ellipsoid:n,stRotation:e._stRotation,granularity:i,perPositionHeight:!1,extrudedHeight:r,height:a,vertexFormat:h.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(oe.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){const e=this._polygonHierarchy.positions;this._rectangle=J(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){const t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];const o=e._ellipsoid,i=e._polygonHierarchy.positions,n=e.rectangle;return u.Geometry._textureCoordinateRotationPoints(i,t,o,n)}(this)),this._textureCoordinateRotationPoints}}}),function(o,i){return e.defined(i)&&(o=oe.unpack(o,i)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),oe.createGeometry(o)}}));
