!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=73)}([function(t,e){t.exports=React},function(t,e,n){t.exports=n(43)()},function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(12),o=n(29),i=n(22),c=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(32),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(3),o=n(2),i=n(28),c=n(11),a=n(6),u=function(t,e,n){var s,l,f,p=t&u.F,h=t&u.G,d=t&u.S,v=t&u.P,m=t&u.B,b=t&u.W,y=h?o:o[e]||(o[e]={}),g=y.prototype,w=h?r:d?r[e]:(r[e]||{}).prototype;h&&(n=e);for(s in n)(l=!p&&w&&void 0!==w[s])&&a(y,s)||(f=l?w[s]:n[s],y[s]=h&&"function"!=typeof w[s]?n[s]:m&&l?i(f,r):b&&w[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((y.virtual||(y.virtual={}))[s]=f,t&u.R&&g&&!g[s]&&c(g,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var r=n(7),o=n(15);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},,,function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},,,function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(31),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(25)("keys"),o=n(19);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o=n(3),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(38);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(4)&&!n(8)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(5),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(6),o=n(9),i=n(39)(!1),c=n(24)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(9),o=n(40),i=n(41);t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),l=i(c,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(17),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function h(t,e){if(null==t)return{};var n,r,o=p(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}function m(t){return b(t)||y(t)||g()}function b(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function y(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function w(t,e){return e||(e=0),Number(Math.round(t+"e"+e)+"e-"+e)}function _(t){return w(t.width/t.height,2)}function O(t){var e=t.photos,n=t.columns,r=t.width,o=t.margin;if(!r)return[];var i=e.reduce(function(t,e,r){var o=Math.floor(r/n);return t[o]=t[o]?[].concat(m(t[o]),[e]):[e],t},[]),c=[];return i.map(function(t,a){var s=t.reduce(function(t,e){return t+_(e)},0),l=r-t.length*(2*o);a!==i.length-1&&c.push(s);var f=t.length===n?l/s:e.length<n?l/s*(t.length/n):l/(c.reduce(function(t,e){return t+e},0)/(i.length-1));return t.map(function(t){return u({},t,{height:w(f,1),width:w(f*_(t),1)})})}).reduce(function(t,e){return[].concat(m(t),m(e))},[])}function E(t){for(var e=t.photos,n=t.columns,r=t.width,o=t.margin,i=(r-2*o*n)/n,c=e.map(function(t){var e=t.height/t.width*i;return u({},t,{width:w(i,1),height:w(e,1)})}),a=[],s=[],l=0;l<n;l++)a[l]=w(l*(i+2*o),1),s[l]=0;return c.map(function(t){var e=s.reduce(function(t,e,n){return t=e<s[t]?n:t},0);t.top=s[e],t.left=a[e],s[e]=s[e]+t.height+2*o;var n=s.reduce(function(t,e,n){return t=e>s[t]?n:t},0);return t.containerHeight=s[n],t})}var x=n(0),j=n.n(x),M=n(1),k=n.n(M),T=n(45),P={cursor:"pointer"},S=function(t){var e=t.index,n=t.onClick,r=t.photo,o=t.margin,i=t.direction,c=t.top,s=t.left,l={margin:o};"column"===i&&(l.position="absolute",l.left=s,l.top=c);var f=function(t){n(t,{photo:r,index:e})};return j.a.createElement("img",a({style:n?u({},l,P):l},r,{onClick:n?f:null}))},C=k.a.shape({src:k.a.string.isRequired,width:k.a.number.isRequired,height:k.a.number.isRequired,alt:k.a.string,title:k.a.string,srcSet:k.a.oneOfType([k.a.string,k.a.array]),sizes:k.a.oneOfType([k.a.string,k.a.array])});S.propTypes={index:k.a.number.isRequired,onClick:k.a.func,photo:C.isRequired,margin:k.a.number,top:function(t){if("column"===t.direction&&"number"!=typeof t.top)return new Error("top is a required number when direction is set to `column`")},left:function(t){if("column"===t.direction&&"number"!=typeof t.left)return new Error("left is a required number when direction is set to `column`")},direction:k.a.string};var R=function(t){function e(){var t,n;r(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=v(this,(t=l(e)).call.apply(t,[this].concat(i))),c(d(d(n)),"state",{containerWidth:0}),c(d(d(n)),"handleClick",function(t,e){var r=e.index,o=n.props,i=o.photos;(0,o.onClick)(t,{index:r,photo:i[r],previous:i[r-1]||null,next:i[r+1]||null})}),n}return s(e,t),i(e,[{key:"componentDidMount",value:function(){var t=this;this.animationFrameID=null,this.observer=new T.a(function(e){var n=e[0].contentRect.width;t.state.containerWidth!==n&&(t.animationFrameID=window.requestAnimationFrame(function(){t.setState({containerWidth:Math.floor(n)})}))}),this.observer.observe(this._gallery)}},{key:"componentWillUnmount",value:function(){this.observer.disconnect(),window.cancelAnimationFrame(this.animationFrameID)}},{key:"render",value:function(){var t=this,e=this.state.containerWidth;if(!e)return j.a.createElement("div",{ref:function(e){return t._gallery=e}}," ");var n=this.props.ImageComponent,r=void 0===n?S:n,o=this.props,i=o.margin,c=o.onClick,a=o.direction,u=this.props.columns;"function"==typeof u&&(u=u(e)),void 0===u&&(u=1,e>=500&&(u=2),e>=900&&(u=3),e>=1500&&(u=4));var s,l,f=this.props.photos,p=e-1;return"row"===a&&(s={display:"flex",flexWrap:"wrap",flexDirection:"row"},l=O({width:p,columns:u,margin:i,photos:f})),"column"===a&&(s={position:"relative"},l=E({width:p,columns:u,margin:i,photos:f}),s.height=l[l.length-1].containerHeight),j.a.createElement("div",{className:"react-photo-gallery--gallery"},j.a.createElement("div",{ref:function(e){return t._gallery=e},style:s},l.map(function(e,n){var o=e.left,u=e.top,s=(e.containerHeight,h(e,["left","top","containerHeight"]));return j.a.createElement(r,{key:e.key||e.src,margin:i,index:n,photo:s,direction:a,left:o,top:u,onClick:c?t.handleClick:null})})))}}]),e}(j.a.Component);R.propTypes={photos:k.a.arrayOf(C).isRequired,direction:k.a.string,onClick:k.a.func,columns:k.a.oneOfType([k.a.func,k.a.number]),margin:k.a.number,ImageComponent:k.a.func},R.defaultProps={margin:2,direction:"row"},e.a=R},function(t,e,n){"use strict";function r(){}var o=n(44);t.exports=function(){function t(t,e,n,r,i,c){if(c!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";(function(t){function n(t,e){function n(){i&&(i=!1,t()),c&&o()}function r(){v(n)}function o(){var t=Date.now();if(i){if(t-a<m)return;c=!0}else i=!0,c=!1,setTimeout(r,e);a=t}var i=!1,c=!1,a=0;return o}function r(t){return parseFloat(t)||0}function o(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+r(t["border-"+n+"-width"])},0)}function i(t){for(var e=["top","right","bottom","left"],n={},o=0,i=e;o<i.length;o++){var c=i[o],a=t["padding-"+c];n[c]=r(a)}return n}function c(t){var e=t.getBBox();return f(0,0,e.width,e.height)}function a(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return E;var c=O(t).getComputedStyle(t),a=i(c),s=a.left+a.right,l=a.top+a.bottom,p=r(c.width),h=r(c.height);if("border-box"===c.boxSizing&&(Math.round(p+s)!==e&&(p-=o(c,"left","right")+s),Math.round(h+l)!==n&&(h-=o(c,"top","bottom")+l)),!u(t)){var d=Math.round(p+s)-e,v=Math.round(h+l)-n;1!==Math.abs(d)&&(p-=d),1!==Math.abs(v)&&(h-=v)}return f(a.left,a.top,p,h)}function u(t){return t===O(t).document.documentElement}function s(t){return h?x(t)?c(t):a(t):E}function l(t){var e=t.x,n=t.y,r=t.width,o=t.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(i.prototype);return _(c,{x:e,y:n,width:r,height:o,top:n,right:e+r,bottom:o+n,left:e}),c}function f(t,e,n,r){return{x:t,y:e,width:n,height:r}}var p=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),h="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,d=function(){return void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")()}(),v=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame.bind(d):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),m=2,b=20,y=["top","right","bottom","left","width","height","size","weight"],g="undefined"!=typeof MutationObserver,w=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=n(this.refresh.bind(this),b)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){h&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){h&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;y.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),_=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},O=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||d},E=f(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof O(t).SVGGraphicsElement}:function(t){return t instanceof O(t).SVGElement&&"function"==typeof t.getBBox}}(),j=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=f(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=s(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),M=function(){function t(t,e){var n=l(e);_(this,{target:t,contentRect:n})}return t}(),k=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new p,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new j(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof O(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new M(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),T="undefined"!=typeof WeakMap?new WeakMap:new p,P=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=w.getInstance(),r=new k(e,n,this);T.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){P.prototype[t]=function(){var e;return(e=T.get(this))[t].apply(e,arguments)}});var S=function(){return void 0!==d.ResizeObserver?d.ResizeObserver:P}();e.a=S}).call(e,n(36))},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(74)},function(t,e,n){"use strict";var r=n(75),o=n.n(r),i=n(79),c=n(80),a=(n.n(c),n(81)),u=(n.n(a),n(42)),s=wp.element.Fragment,l=wp.i18n.__,f=wp.blocks.registerBlockType,p=wp.editor,h=p.InspectorControls,d=p.MediaUpload,v=p.MediaPlaceholder,m=p.BlockControls,b=wp.components,y=b.IconButton,g=b.PanelBody,w=b.PanelRow,_=b.RadioControl,O=b.ToggleControl,E=b.Toolbar;f("jsforwpadvblocks/gallery",{title:l("Gallery","jsforwpadvblocks"),description:l("A demo custom gallery block.","jsforwpadvblocks"),category:"jsforwpadvblocks",icon:i.a,keywords:[l("Masonry","jsforwpadvblocks"),l("Images Media","jsforwpadvblocks"),l("Lightbox","jsforwpadvblocks")],attributes:{images:{type:"array",default:[]},direction:{type:"string",default:"row"},isLightboxEnabled:{type:"boolean",default:!0}},supports:{align:["full","wide"]},edit:function(t){var e=t.attributes,n=e.direction,r=e.images,c=e.isLightboxEnabled,a=t.className,f=t.setAttributes,p=function(t){var e=t.map(function(t){return o()({},{src:t.sizes.large.url,width:t.sizes.large.width,height:t.sizes.large.height,id:t.id,alt:t.alt,caption:t.caption})});f({images:e})};return wp.element.createElement(s,null,wp.element.createElement(h,null,wp.element.createElement(g,{title:l("Gallery Settings","jsforwpadvblocks"),initialOpen:!0},wp.element.createElement(w,null,wp.element.createElement(_,{label:l("Grid Style","jsforwpblocks"),selected:n,options:[{label:"Rows",value:"row"},{label:"Columns",value:"column"}],onChange:function(t){return f({direction:t})}})),wp.element.createElement(w,null,wp.element.createElement(O,{label:"Enable / disable lightbox",checked:c,onChange:function(t){return f({isLightboxEnabled:t})}})))),wp.element.createElement(m,null,!!r.length&&wp.element.createElement(E,null,wp.element.createElement(d,{onSelect:p,allowedTypes:["image"],multiple:!0,gallery:!0,value:r.map(function(t){return t.id}),render:function(t){var e=t.open;return wp.element.createElement(y,{className:"components-toolbar__control",label:l("Edit Gallery"),icon:"edit",onClick:e})}}))),wp.element.createElement("div",{className:a+" "+n},!r.length&&wp.element.createElement(s,null,wp.element.createElement(v,{icon:i.a,labels:{title:l("Gallery"),instructions:l("Drag images, upload new ones or select files from your library.")},onSelect:p,accept:"image/*",multiple:!0})),!!r.length&&wp.element.createElement(u.a,{photos:r,direction:n})))},save:function(t){var e=t.attributes,n=e.direction,r=e.images,o=e.isLightboxEnabled;return wp.element.createElement("div",{className:""+n,"data-direction":n,"data-lightbox":o},wp.element.createElement("div",{class:"react-photo-gallery--gallery server-side"},wp.element.createElement("div",{style:"display: flex; flex-flow: row wrap;"},r.map(function(t){return wp.element.createElement("img",{src:t.src,alt:t.alt,title:t.caption,width:t.width,height:t.height,"data-id":t.id,style:{width:t.width,height:t.height}})}))))}})},function(t,e,n){t.exports={default:n(76),__esModule:!0}},function(t,e,n){n(77),t.exports=n(2).Object.assign},function(t,e,n){var r=n(10);r(r.S+r.F,"Object",{assign:n(78)})},function(t,e,n){"use strict";var r=n(23),o=n(34),i=n(27),c=n(35),a=n(32),u=Object.assign;t.exports=!u||n(8)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=c(t),u=arguments.length,s=1,l=o.f,f=i.f;u>s;)for(var p,h=a(arguments[s++]),d=l?r(h).concat(l(h)):r(h),v=d.length,m=0;v>m;)f.call(h,p=d[m++])&&(n[p]=h[p]);return n}:u},function(t,e,n){"use strict";var r=wp.element.createElement("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("path",{d:"M67.5,23.7v12.9c0,1.8-1.5,3.3-3.3,3.3H51.3c-1.8,0-3.3-1.5-3.3-3.3V23.7c0-1.8,1.5-3.3,3.3-3.3h12.9 C66,20.4,67.5,21.9,67.5,23.7z M78.9,39.9h12.9c1.8,0,3.3-1.5,3.3-3.3V23.7c0-1.8-1.5-3.3-3.3-3.3H78.9c-1.8,0-3.3,1.5-3.3,3.3v12.9 C75.5,38.4,77,39.9,78.9,39.9z M51.3,67.5h12.9c1.8,0,3.3-1.5,3.3-3.3V51.3c0-1.8-1.5-3.3-3.3-3.3H51.3c-1.8,0-3.3,1.5-3.3,3.3v12.9 C47.9,66,49.4,67.5,51.3,67.5z M75.5,64.2c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V51.3c0-1.8-1.5-3.3-3.3-3.3H78.9 c-1.8,0-3.3,1.5-3.3,3.3V64.2z M39.9,51.3c0-1.8-1.5-3.3-3.3-3.3H23.7c-1.8,0-3.3,1.5-3.3,3.3v12.9c0,1.8,1.5,3.3,3.3,3.3h12.9 c1.8,0,3.3-1.5,3.3-3.3V51.3z M47.9,91.8c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9c0-1.8-1.5-3.3-3.3-3.3H51.3 c-1.8,0-3.3,1.5-3.3,3.3V91.8z M75.5,91.8c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9c0-1.8-1.5-3.3-3.3-3.3H78.9 c-1.8,0-3.3,1.5-3.3,3.3V91.8z M36.6,75.5H23.7c-1.8,0-3.3,1.5-3.3,3.3v12.9c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9 C39.9,77,38.4,75.5,36.6,75.5z M40,34.8c0,2.9-2.3,5.2-5.2,5.2H9.5c-2.5,0-4.6-2-4.6-4.6V10.1c0-2.9,2.3-5.2,5.2-5.2h24.7 c2.9,0,5.2,2.3,5.2,5.2V34.8z M31.6,13.2H13.3v18.4h18.4V13.2z"}));e.a=r},function(t,e){},function(t,e){}]);
//# sourceMappingURL=blocks.editor.js.map