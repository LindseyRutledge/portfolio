(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/profile-image.a6b90a10.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(6),i=n.n(c),r=n(4),o=(n(12),n(1)),m=n(3),s=n(2),u=n.n(s),d=(n(15),function(){return l.createElement("div",{className:"LinksSection"},l.createElement("a",{href:"https://www.linkedin.com/in/lindsey-rutledge-414875b4/"},l.createElement("div",{className:"LinksSection-link"},l.createElement(o.f,null),l.createElement("div",{className:"LinksSection-link-label"},"LinkedIn"))),l.createElement("a",{href:"https://github.com/LindseyRutledge/"},l.createElement("div",{className:"LinksSection-link"},l.createElement(o.d,null),l.createElement("div",{className:"LinksSection-link-label"},"GitHub"))),l.createElement("div",{className:"LinksSection-link"},l.createElement(o.c,null),l.createElement("div",{className:"LinksSection-link-label"},"Resume")))}),E=(n(16),function(){return l.createElement("div",{className:"AboutSection"},l.createElement("div",{className:"AboutSection-avatar"},l.createElement("img",{className:"AboutSection-avatar-image",src:n(17),alt:"Avatar",title:"Image Credit: ummmmandy.tumblr.com"}),l.createElement("a",{className:"AboutSection-avatar-redirect",href:"https://picrew.me/image_maker/114808",title:"Picrew Avatar Creator - by ummmmandy"},l.createElement(o.i,null))),l.createElement("div",{className:"AboutSection-content"},l.createElement("p",null,"Hi, I'm ",l.createElement("em",null,"Lindsey Rutledge"),"!"),l.createElement("p",null,"I am a Full Stack ",l.createElement("em",null,"Web Developer")," specializing in ",l.createElement("em",null,"Front-end")," web development."),l.createElement("p",null,"Currently based in ",l.createElement("em",null,"Bellevue, WA"),".")))}),f=(n(18),function(){return l.createElement("div",{className:"SkillsSection"},l.createElement("div",{className:"SkillsSection-description"},"Here are a few technologies I have been using lately:"),l.createElement("ul",{className:"SkillsSection-list"},l.createElement("li",null,l.createElement("em",null,"React")),l.createElement("li",null,l.createElement("em",null,"TypeScript")),l.createElement("li",null,l.createElement("em",null,"JavaScript (ES6+)")),l.createElement("li",null,l.createElement("em",null,"SCSS"),"/",l.createElement("em",null,"CSS")),l.createElement("li",null,l.createElement("em",null,"HTML")),l.createElement("li",null,l.createElement("em",null,"Java")),l.createElement("li",null,l.createElement("em",null,"Kotlin")),l.createElement("li",null,l.createElement("em",null,"Cloud Foundry"))))}),v=function(){var e=Object(l.useState)("dark-theme"),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),i=Object(r.a)(c,2),s=i[0],v=i[1],h=Object(l.useRef)(null),g=Object(l.useRef)([]),b=Object(l.useRef)([]),k=[{id:"about",label:"About",icon:l.createElement(o.b,null),section:l.createElement(E,null)},{id:"skills",label:"Skills",icon:l.createElement(o.e,null),section:l.createElement(f,null)},{id:"work-history",label:"Work History",icon:l.createElement(o.a,null)},{id:"projects",label:"Projects",icon:l.createElement(o.d,null)},{id:"links",label:"Links",icon:l.createElement(o.g,null),section:l.createElement(d,null)}],p=function(){var e=h.current;if(e){var t=e.offsetHeight,n=e.scrollTop,l=n+t,a=n+t===e.scrollHeight;window.location.hash&&!s?(console.log("hash"),N(),v(!0)):a?(console.log("bottom"),P(k.length-1)):(console.log("position"),w(n,l))}},S=m.throttle(p,100);Object(l.useEffect)(p,[]),Object(l.useEffect)((function(){var e;return null===(e=h.current)||void 0===e||e.addEventListener("scroll",S),function(){var e;null===(e=h.current)||void 0===e||e.removeEventListener("scroll",S)}}),[s]);var P=function(e){var t;k.forEach((function(e,t){var n;null===(n=g.current[t])||void 0===n||n.classList.remove("selected")})),null===(t=g.current[e])||void 0===t||t.classList.add("selected")},N=function(){var e=window.location.hash.replace("#",""),t=k.findIndex((function(t){return t.id===e}));P(t)},w=function(e,t){var n=h.current;if(n){var l=[];k.forEach((function(a,c){var i=b.current[c];if(i){var r=i.offsetHeight,o=i.offsetTop-n.offsetTop,m=o+r,s=Math.max(Math.min(t,m)-Math.max(e,o),0)/r;l[c]=s}})),P(l.indexOf(Math.max.apply(Math,l)))}},L=m.debounce((function(){var e;null===(e=h.current)||void 0===e||e.addEventListener("scroll",S)}),1e3);return l.createElement("div",{className:u()("PortfolioPage",n)},l.createElement("div",{className:"PortfolioPage-header"},l.createElement("div",{className:"PortfolioPage-title"},l.createElement("div",{className:"PortfolioPage-name"},"Lindsey"),l.createElement("div",{className:"PortfolioPage-name"},"Rutledge"),l.createElement("div",{className:"PortfolioPage-themeToggle",onClick:function(){return a("dark-theme"===n?"light-theme":"dark-theme")},title:"Change theme"},"dark-theme"===n?l.createElement(o.h,null):l.createElement(o.j,null))),l.createElement("div",{className:"PortfolioPage-header-icons"},k.map((function(e,t){return l.createElement("a",{key:e.id,href:"#".concat(e.id),onClick:function(){var e;null===(e=h.current)||void 0===e||e.removeEventListener("scroll",S),L(),P(t)}},l.createElement("div",{className:"PortfolioPage-header-iconGroup",ref:function(e){return e?g.current[t]=e:void 0}},l.createElement("div",{className:u()("PortfolioPage-header-icon","".concat(e.id,"-icon"))},e.icon),l.createElement("div",{className:u()("PortfolioPage-header-iconLabel","".concat(e.id,"-label"))},e.label)))})))),l.createElement("div",{className:"PortfolioPage-content",ref:h},k.map((function(e,t){return l.createElement("div",{key:e.id,id:e.id,className:"PortfolioPage-section",ref:function(e){return e?b.current[t]=e:void 0}},l.createElement("div",{className:"PortfolioPage-heading"},l.createElement("span",{className:"PortfolioPage-heading-text"},e.label)),e.section?e.section:void 0)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d98088e3.chunk.js.map