(()=>{var o={241:(o,e,r)=>{"use strict";function t(o,e){return o+e}r.r(e),r.d(e,{add:()=>t})},802:(o,e,r)=>{"use strict";function t(o){return 0===o?1:o*t(o-1)}r.r(e),r.d(e,{factorial:()=>t})},190:(o,e,r)=>{"use strict";function t(o){return o<2?o:t(o-1)+t(o-2)}r.r(e),r.d(e,{fibonacci:()=>t})}},e={};function r(t){var n=e[t];if(void 0!==n)return n.exports;var c=e[t]={exports:{}};return o[t](c,c.exports,r),c.exports}r.d=(o,e)=>{for(var t in e)r.o(e,t)&&!r.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},r.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),r.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{for(let o=0;o<10;o++){console.log(o);const e=r(802);console.log(e(o));const t=r(241);console.log(t(o,o));const n=r(190);console.log(n(o))}})()})();