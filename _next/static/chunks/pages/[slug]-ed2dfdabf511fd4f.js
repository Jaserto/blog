(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{5332:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return t(7616)}])},7616:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return h},default:function(){return b}});var r={};t.r(r),t.d(r,{MDXContext:function(){return a},MDXProvider:function(){return d},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var i=t(5893),o=t(7294),c=t(2746);const a=o.createContext({});function l(n){return function(e){const t=u(e.components);return o.createElement(n,{...e,allComponents:t})}}function u(n){const e=o.useContext(a);return o.useMemo((()=>"function"===typeof n?n(e):{...e,...n}),[e,n])}const s={};function d({components:n,children:e,disableParentContext:t}){let r=u(n);return t&&(r=n||s),o.createElement(a.Provider,{value:r},e)}function f({compiledSource:n,frontmatter:e,scope:t,components:i={},lazy:a}){const[l,u]=(0,o.useState)(!a||"undefined"===typeof window);(0,o.useEffect)((()=>{if(a){const n=window.requestIdleCallback((()=>{u(!0)}));return()=>window.cancelIdleCallback(n)}}),[]);const s=(0,o.useMemo)((()=>{const i=Object.assign({opts:{...r,...c.c}},{frontmatter:e},t),o=Object.keys(i),a=Object.values(i),l=Reflect.construct(Function,o.concat(`${n}`));return l.apply(l,a).default}),[t,n]);if(!l)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=o.createElement(d,{components:i},o.createElement(s,null));return a?o.createElement("div",null,f):f}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout((function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)});var p=t(2125);t(7138),t(838);function x(){var n,e,t=(n=['\noverflow:hidden;\n  height:100%;\n  width: 100%;\n  display:flex;\n  font-size: 16px;\n  flex-direction: column;\n  text-align:left;\n  align-items:center;\n  line-height: 1.7;\n  max-width: 800px;\n  padding: 0 25px; \n  font-family: "Inter"; \n  article{\n    width: 100%;\n    margin:0;\n  }\n  strong{\n    font-size:14px;\n    font-weight: normal;\n    color:white;\n    margin:0 2px;\n    border-radius:0.2em;\n    padding: 1px 2px;\n    background-color: #4c4c4c;\n  }\n  img{ \n      display:flex; \n      flex:1;\n      border-radius: 33px;\n     margin:auto;\n     max-width:400px;\n      padding:30px;  \n  }\n  .cabecera{\n    width:100%;\n    display:flex;\n    justify-content:center;\n    flex-direction:column;\n    text-align:left;\n  }\n  .div3{\n    display:flex;\n    flex-direction: column;\n  }\n  .tags{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    }\n  .tag2{\n    color:#444444;\n    border-radius:5px;\n    padding:1px 7px;\n    font-size:12px;\n    background-color:#C9FFDC;\n    margin: 0 7px;\n  }\n  .tag1{\n      background-color:#900C3F;\n      color:white;\n      border-radius:5px;\n      padding:2px 7px;\n      font-size:12px;\n  }\n\n  h1{\n    font-size: 40px;\n    color: #f3f3f3;\n  }\n  h2{\n    margin:40px 0 0 0;\n    color: #f3f3f3;\n  }\n  p{\n    color: #eaeaea;\n    font-size:15px;\n    font-weight: 400;\n    line-height:1.75;\n    margin-bottom:20px;\n  }\n  \n  @media (max-width: 830px) {\n    padding: 0 0px;  \narticle{\n  width: 100%;\n  margin:0;\n\n}\nh1{\n  font-size: 20px;\n  width: 100%;\n}\n.cabecera{\n  width: 100%;\n}\n.tags{\n  display:flex;\n  flex-direction:row;\n  width: 100%;\n  span{\n    font-size:11px;\n  }\n}\n.tag1{\n  padding:1px 3px;\n  margin:0;\n}\n.tag2{\n  padding:1px 3px;\n  margin: 0 3px;\n}\nimg{\n  width: 100%;\n} \np{\n  font-size:16px;\n}\n  }\n  \n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return x=function(){return t},t}var m=p.ZP.div(x());function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){g(n,e,t[e])}))}return n}var h=!0;function b(n){var e,t=n.source,r=n.frontmatter;return(0,i.jsxs)(m,{children:[(0,i.jsxs)("div",{className:"cabecera",children:[(0,i.jsx)("h1",{children:r.title}),(0,i.jsxs)("div",{className:"tags",children:[(0,i.jsx)("span",{className:"tag1",children:r.date}),null===(e=r.tags)||void 0===e?void 0:e.split(",").map((function(n){return(0,i.jsx)("span",{className:"tag2",children:n},n)}))]})]}),(0,i.jsx)("article",{children:(0,i.jsx)(f,w({},t))})]})}},2746:function(n,e,t){const r=t(5893);n.exports.c=r}},function(n){n.O(0,[774,888,179],(function(){return e=5332,n(n.s=e);var e}));var e=n.O();_N_E=e}]);