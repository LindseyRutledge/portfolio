(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/profile-image.f66880b4.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(6),o=n.n(c),i=n(4),r=(n(12),n(1)),s=n(3),m=n(2),u=n.n(m),d=(n(15),function(){return l.createElement("div",{className:"LinksSection"},l.createElement("a",{href:"https://www.linkedin.com/in/lindsey-rutledge-414875b4/"},l.createElement("div",{className:"LinksSection-link"},l.createElement(r.f,null),l.createElement("div",{className:"LinksSection-link-label"},"LinkedIn"))),l.createElement("a",{href:"https://github.com/LindseyRutledge/"},l.createElement("div",{className:"LinksSection-link"},l.createElement(r.d,null),l.createElement("div",{className:"LinksSection-link-label"},"GitHub"))),l.createElement("div",{className:"LinksSection-link"},l.createElement(r.c,null),l.createElement("div",{className:"LinksSection-link-label"},"Resume")))}),f=(n(16),function(){return l.createElement("div",{className:"AboutSection"},l.createElement("div",{className:"AboutSection-avatar"},l.createElement("img",{className:"AboutSection-avatar-image",src:n(17),alt:"Avatar"}),l.createElement("a",{className:"AboutSection-avatar-redirect",href:"https://picrew.me/image_maker/257476",title:"Image Credit"},l.createElement(r.i,null))),l.createElement("div",{className:"AboutSection-content"},l.createElement("p",null,"Hi, I'm ",l.createElement("em",null,"Lindsey Rutledge"),"!"),l.createElement("p",null,"I am a Full Stack ",l.createElement("em",null,"Web Developer")," specializing in ",l.createElement("em",null,"Front-end")," web development."),l.createElement("p",null,"I currently based in ",l.createElement("em",null,"Bellevue, WA"),".")))}),v=function(){var e=Object(l.useState)("dark-theme"),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),o=Object(i.a)(c,2),m=o[0],v=o[1],E=Object(l.useRef)(null),h=Object(l.useRef)([]),g=Object(l.useRef)([]),b=[{id:"about",label:"About",icon:l.createElement(r.b,null),section:l.createElement(f,null)},{id:"skills",label:"Skills",icon:l.createElement(r.e,null)},{id:"work-history",label:"Work History",icon:l.createElement(r.a,null)},{id:"projects",label:"Projects",icon:l.createElement(r.d,null)},{id:"links",label:"Links",icon:l.createElement(r.g,null),section:l.createElement(d,null)}],k=function(){var e=E.current;if(e){var t=e.offsetHeight,n=e.scrollTop,l=n+t,a=n+t===e.scrollHeight;window.location.hash&&!m?(console.log("hash"),N(),v(!0)):a?(console.log("bottom"),P(b.length-1)):(console.log("position"),L(n,l))}},p=s.throttle(k,100);Object(l.useEffect)(k,[]),Object(l.useEffect)((function(){var e;return null===(e=E.current)||void 0===e||e.addEventListener("scroll",p),function(){var e;null===(e=E.current)||void 0===e||e.removeEventListener("scroll",p)}}),[m]);var P=function(e){var t;b.forEach((function(e,t){var n;null===(n=h.current[t])||void 0===n||n.classList.remove("selected")})),null===(t=h.current[e])||void 0===t||t.classList.add("selected")},N=function(){var e=window.location.hash.replace("#",""),t=b.findIndex((function(t){return t.id===e}));P(t)},L=function(e,t){var n=E.current;if(n){var l=[];b.forEach((function(a,c){var o=g.current[c];if(o){var i=o.offsetHeight,r=o.offsetTop-n.offsetTop,s=r+i,m=Math.max(Math.min(t,s)-Math.max(e,r),0)/i;l[c]=m}})),P(l.indexOf(Math.max.apply(Math,l)))}},w=s.debounce((function(){var e;null===(e=E.current)||void 0===e||e.addEventListener("scroll",p)}),1e3);return l.createElement("div",{className:u()("PortfolioPage",n)},l.createElement("div",{className:"PortfolioPage-header"},l.createElement("div",{className:"PortfolioPage-title"},l.createElement("div",{className:"PortfolioPage-name"},"Lindsey"),l.createElement("div",{className:"PortfolioPage-name"},"Rutledge"),l.createElement("div",{className:"PortfolioPage-themeToggle",onClick:function(){return a("dark-theme"===n?"light-theme":"dark-theme")},title:"Change theme"},"dark-theme"===n?l.createElement(r.h,null):l.createElement(r.j,null))),l.createElement("div",{className:"PortfolioPage-header-icons"},b.map((function(e,t){return l.createElement("a",{key:e.id,href:"#".concat(e.id),onClick:function(){var e;null===(e=E.current)||void 0===e||e.removeEventListener("scroll",p),w(),P(t)}},l.createElement("div",{className:"PortfolioPage-header-iconGroup",ref:function(e){return e?h.current[t]=e:void 0}},l.createElement("div",{className:u()("PortfolioPage-header-icon","".concat(e.id,"-icon"))},e.icon),l.createElement("div",{className:u()("PortfolioPage-header-iconLabel","".concat(e.id,"-label"))},e.label)))})))),l.createElement("div",{className:"PortfolioPage-content",ref:E},b.map((function(e,t){return l.createElement("div",{key:e.id,id:e.id,className:"PortfolioPage-section",ref:function(e){return e?g.current[t]=e:void 0}},l.createElement("div",{className:"PortfolioPage-heading"},l.createElement("span",{className:"PortfolioPage-heading-text"},e.label)),e.section?e.section:void 0)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c1766151.chunk.js.map