(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),l=n.n(r),c=n(4),i=(n(12),n(1)),s=n(3),u=n(2),d=n.n(u),f=function(){var e=Object(o.useState)("dark-theme"),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(!1),l=Object(c.a)(r,2),u=l[0],f=l[1],m=Object(o.useRef)(null),v=Object(o.useRef)([]),h=Object(o.useRef)([]),g=[{id:"about",label:"About",icon:o.createElement(i.b,null)},{id:"skills",label:"Skills",icon:o.createElement(i.d,null)},{id:"work-history",label:"Work History",icon:o.createElement(i.a,null)},{id:"projects",label:"Projects",icon:o.createElement(i.c,null)},{id:"links",label:"Links",icon:o.createElement(i.e,null)}],E=function(){var e=m.current;if(e){var t=e.offsetHeight,n=e.scrollTop,o=n+t,a=n+t===e.scrollHeight;window.location.hash&&!u?(console.log("hash"),p(),f(!0)):a?(console.log("bottom"),b(g.length-1)):(console.log("position"),k(n,o))}},P=s.throttle(E,100);Object(o.useEffect)(E,[]),Object(o.useEffect)((function(){var e;return null===(e=m.current)||void 0===e||e.addEventListener("scroll",P),function(){var e;null===(e=m.current)||void 0===e||e.removeEventListener("scroll",P)}}),[u]);var b=function(e){var t;g.forEach((function(e,t){var n;null===(n=v.current[t])||void 0===n||n.classList.remove("selected")})),null===(t=v.current[e])||void 0===t||t.classList.add("selected")},p=function(){var e=window.location.hash.replace("#",""),t=g.findIndex((function(t){return t.id===e}));b(t)},k=function(e,t){var n=m.current;if(n){var o=[];g.forEach((function(a,r){var l=h.current[r];if(l){var c=l.offsetHeight,i=l.offsetTop-n.offsetTop,s=i+c,u=Math.max(Math.min(t,s)-Math.max(e,i),0)/c;o[r]=u}})),b(o.indexOf(Math.max.apply(Math,o)))}},w=s.debounce((function(){var e;null===(e=m.current)||void 0===e||e.addEventListener("scroll",P)}),1e3);return o.createElement("div",{className:d()("PortfolioPage",n)},o.createElement("div",{className:"PortfolioPage-header"},o.createElement("div",{className:"PortfolioPage-title"},o.createElement("div",{className:"PortfolioPage-name"},"Lindsey"),o.createElement("div",{className:"PortfolioPage-name"},"Rutledge"),o.createElement("div",{className:"PortfolioPage-themeToggle",onClick:function(){return a("dark-theme"===n?"light-theme":"dark-theme")},title:"Change theme"},"dark-theme"===n?o.createElement(i.f,null):o.createElement(i.g,null))),o.createElement("div",{className:"PortfolioPage-header-icons"},g.map((function(e,t){return o.createElement("a",{key:e.id,href:"#".concat(e.id),onClick:function(){var e;null===(e=m.current)||void 0===e||e.removeEventListener("scroll",P),w(),b(t)}},o.createElement("div",{className:"PortfolioPage-header-iconGroup",ref:function(e){return e?v.current[t]=e:void 0}},o.createElement("div",{className:d()("PortfolioPage-header-icon","".concat(e.id,"-icon"))},e.icon),o.createElement("div",{className:d()("PortfolioPage-header-iconLabel","".concat(e.id,"-label"))},e.label)))})))),o.createElement("div",{className:"PortfolioPage-content",ref:m},g.map((function(e,t){return o.createElement("div",{key:e.id,id:e.id,className:"PortfolioPage-section",ref:function(e){return e?h.current[t]=e:void 0}},o.createElement("div",{className:"PortfolioPage-heading"},e.label))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.5b97ac32.chunk.js.map