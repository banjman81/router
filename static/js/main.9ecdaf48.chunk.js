(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{10:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(19),o=n.n(s),a=(n(25),n(10),n(1));var i=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About Page"})})},j=n(7);var u=function(){var e={color:"white",textDecoration:"none"};return Object(a.jsxs)("nav",{children:[Object(a.jsx)(j.b,{style:e,to:"/",children:Object(a.jsx)("h3",{children:"Logo"})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)(j.b,{style:e,to:"/about",children:Object(a.jsx)("li",{children:"About"})}),Object(a.jsx)(j.b,{style:e,to:"/shop",children:Object(a.jsx)("li",{children:"Shop"})})]})]})},h=n(9),l=n.n(h),b=n(12),p=n(13);var d=function(){Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.dnd5eapi.co/api/equipment-categories/armor");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),r(n.equipment);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Shop Page"}),n.map((function(e){return Object(a.jsx)("h3",{children:Object(a.jsx)(j.b,{to:"/shop/".concat(encodeURIComponent(e.url.slice(1))),children:e.name})},e.index)}))]})};var x=function(e){var t=e.match;console.log(t),Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]);var n=Object(c.useState)({}),r=Object(p.a)(n,2),s=r[0],o=r[1];function i(){return(i=Object(b.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.dnd5eapi.co/api/".concat(decodeURIComponent(t.params.url.slice(6))));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),o(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:s.name}),Object(a.jsx)("h4",{children:s.armor_category}),Object(a.jsx)("h4",{children:s.weight})]})},O=n(2);function f(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home Page"})})}var m=function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{path:"/router",exact:!0,component:f}),Object(a.jsx)(O.a,{path:"/about",exact:!0,component:i}),Object(a.jsx)(O.a,{path:"/shop",exact:!0,component:d}),Object(a.jsx)(O.a,{path:"/shop/:url",exact:!0,component:x})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.9ecdaf48.chunk.js.map