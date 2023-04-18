"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64926],{20830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(67294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},89754:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(87462),r=n(67294),l=n(73935),o=n(52263),c=n(16550),s=n(44996),i=n(36742),u=n(99105),m=n(2644);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(20830),f=["translations"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(s){c=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p="Ctrl";var k=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=E(e,f),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,u=v((0,r.useState)(null),2),m=u[0],g=u[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?g("\u2318"):g(p))}),[]),r.createElement("button",b({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==m&&r.createElement(r.Fragment,null,r.createElement("kbd",{className:"DocSearch-Button-Key"},m===p?r.createElement(d,null):m),r.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),y=n(96730),Z=n(13018);function _(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,y.useAllDocsData)(),n=(0,y.useActivePluginAndVersion)(),a=(0,Z.Oh)(),r=[Z.HX,...Object.keys(t).map((function(e){const r=n?.activePlugin?.pluginId===e?n.activeVersion:void 0,l=a[e],o=t[e].versions.find((e=>e.isLast)),c=r??l??o;return(0,Z.os)(e,c.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}var w=n(24973);const C={searchBox:"searchBox_Bc3W"};let N=null;function S(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function L(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,m.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function D(e){let{contextualSearch:t,...i}=e;const{siteMetadata:m}=(0,o.Z)(),d=_(),h=i.searchParameters?.facetFilters??[],f=t?[...d,...h]:h,b={...i.searchParameters,facetFilters:f},{withBaseUrl:v}=(0,s.C)(),g=(0,c.k6)(),E=(0,r.useRef)(null),p=(0,r.useRef)(null),[y,Z]=(0,r.useState)(!1),[D,I]=(0,r.useState)(null),A=(0,r.useCallback)((()=>N?Promise.resolve():Promise.all([n.e(12431).then(n.bind(n,12431)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(55040)]).then(n.bind(n,55040))]).then((e=>{let[{DocSearchModal:t}]=e;N=t}))),[]),T=(0,r.useCallback)((()=>{A().then((()=>{E.current=document.createElement("div"),document.body.insertBefore(E.current,document.body.firstChild),Z(!0)}))}),[A,Z]),B=(0,r.useCallback)((()=>{Z(!1),E.current.remove()}),[Z]),x=(0,r.useCallback)((e=>{A().then((()=>{Z(!0),I(e.key)}))}),[A,Z,I]),M=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;g.push(t)}}).current,P=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:v(`${t.pathname}${t.hash}`)}})))).current,R=(0,r.useMemo)((()=>e=>r.createElement(L,(0,a.Z)({},e,{onClose:B}))),[B]),O=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",m.docusaurusVersion),e)),[m.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key.toLowerCase()&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:y,onOpen:T,onClose:B,onInput:x,searchButtonRef:p});const U=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${i.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:C.searchBox},r.createElement(k,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:T,ref:p,translations:{buttonText:U,buttonAriaLabel:U}})),y&&(0,l.createPortal)(r.createElement(N,(0,a.Z)({onClose:B,initialScrollY:window.scrollY,initialQuery:D,navigator:M,transformItems:P,hitComponent:S,resultsFooterComponent:R,transformSearchClient:O},i,{searchParameters:b})),E.current))}const I=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(D,e.themeConfig.algolia)}},2644:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(16550),r=n(10412),l=n(52263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}},18617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},64926:(e,t,n)=>{n.d(t,{Z:()=>ve});var a=n(67294),r=n(86010),l=n(16550),o=n(24973),c=n(13018);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_axC9",d="announcementBarClose_A3A1",h="announcementBarContent_6uhP",f="announcementBarCloseable_y4cp";const b=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:u}=n;return!l||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:l}}),u?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var v=n(87462),g=n(89754),E=n(52263);const p={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},Z=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));function _(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),{isClient:o}=(0,E.Z)();return a.createElement(Z,(0,v.Z)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(y,{icon:r,style:l})}},e))}var w=n(85350),C=n(77898);const N=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,C.Z)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};const S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(93783),D=n(17193),I=n(55537);const A=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,v.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},T="toggle_2i4l",B="navbarHideable_RReh",x="navbarHidden_FBwS",M="right";function P(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,w.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function O(e){let{sidebarShown:t,toggleSidebar:n}=e;S(t);const l=P(),s=R(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(I.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&a.createElement(_,{checked:s.isDarkTheme,onChange:s.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(D.Z,(0,v.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const U=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),{navbarRef:o,isNavbarVisible:s}=N(e),i=P(),u=i.some((e=>"search"===e.type)),{leftItems:m,rightItems:d}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??M))),rightItems:e.filter((e=>"right"===(e.position??M)))}}(i);return a.createElement("nav",{ref:o,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[B]:e,[x]:e&&!s})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},i?.length>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(A,null)),a.createElement(I.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),m.map(((e,t)=>a.createElement(D.Z,(0,v.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},d.map(((e,t)=>a.createElement(D.Z,(0,v.Z)({},e,{key:t})))),!l.disabled&&a.createElement(_,{className:T,checked:l.isDarkTheme,onChange:l.toggle}),!u&&a.createElement(g.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(O,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(36742),$=n(44996),H=n(13919);const j="footerLogoLink_SRtH";var F=n(98465),W=n(18617);function q(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,$.Z)(t),s=(0,$.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,v.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,H.Z)(n)?a.createElement("span",null,r,a.createElement(W.Z,null)):r)}const K=e=>{let{sources:t,alt:n}=e;return a.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};const z=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,$.Z)(l.src),dark:(0,$.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(q,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:j},a.createElement(K,{alt:l.alt,sources:o})):a.createElement(K,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var Y=n(10412);const G=(0,c.WA)("theme"),X="light",Q="dark",J=e=>e===Q?Q:X,ee=e=>{(0,c.WA)("theme").set(J(e))},te=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>Y.Z.canUseDOM?J(document.documentElement.getAttribute("data-theme")):J(e))(e)),o=(0,a.useCallback)((()=>{l(X),ee(X)}),[]),s=(0,a.useCallback)((()=>{l(Q),ee(Q)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",J(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=G.get();null!==e&&l(J(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?Q:X)}))}),[]),{isDarkTheme:r===Q,setLightTheme:o,setDarkTheme:s}};var ne=n(82924);const ae=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=te();return a.createElement(ne.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},re="docusaurus.tab.",le=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`${re}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(re)){const n=t.substring(15);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},oe=(0,a.createContext)(void 0);const ce=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=le();return a.createElement(oe.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function se(e){let{children:t}=e;return a.createElement(ae,null,a.createElement(c.pl,null,a.createElement(ce,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var ie=n(99105);function ue(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(ie.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var me=n(41217);function de(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.Z)(),n=(0,c.l5)();return a.createElement(ie.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.Z)(),r=function(){const{siteConfig:{url:e}}=(0,E.Z)(),{pathname:t}=(0,l.TH)();return e+(0,$.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(ie.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function fe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:l,localeConfigs:o}}=(0,E.Z)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,$.Z)(t),f=(0,c.pe)(s),b=l,g=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(ie.Z,null,a.createElement("html",{lang:b,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),u||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(me.Z,{description:i,keywords:m,image:u}),a.createElement(he,null),a.createElement(de,null),a.createElement(ue,(0,v.Z)({tag:c.HX,locale:l},d)),a.createElement(ie.Z,null,n.map(((e,t)=>a.createElement("meta",(0,v.Z)({key:`metadata_${t}`},e))))))}const be=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ve=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return be(),a.createElement(se,null,a.createElement(fe,e),a.createElement(u,null),a.createElement(b,null),a.createElement(U,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(z,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(36742),o=n(98465),c=n(44996),s=n(52263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.Z)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,c.Z)(i.href||"/"),b={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(o.Z,{key:u,className:m,sources:b,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>m,Z:()=>f});var a=n(87462),r=n(67294),l=n(86010),o=n(36742),c=n(44996),s=n(18617),i=n(13919);const u="dropdown__link--active";function m(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:d,activeClassName:h="navbar__link--active",prependBaseUrlToHref:f,...b}=e;const v=(0,c.Z)(l),g=(0,c.Z)(t),E=(0,c.Z)(m,{forcePrependBaseUrl:!0}),p=d&&m&&!(0,i.Z)(m),k=h===u;return r.createElement(o.Z,(0,a.Z)({},m?{href:f?E:m}:{isNavLink:!0,activeClassName:h,to:v,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}:null},b),p?r.createElement("span",null,d,r.createElement(s.Z,k&&{width:12,height:12})):d)}function d(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(m,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function h(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const f=function(e){let{mobile:t=!1,position:n,...a}=e;const l=t?h:d;return r.createElement(l,a)}},76400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(86010),s=n(13018),i=n(18780);function u(e){let{docId:t,activeSidebarClassName:n,label:u,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.useActiveDocContext)(m),{preferredVersion:b}=(0,s.J)(m),v=(0,o.useLatestVersion)(m),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,i.uniq)([h,b,v].filter(Boolean)),t);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[n]:f&&f.sidebar===g.sidebar}),label:u??g.id,to:g.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(23154),c=n(96730),s=n(13018);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:m,dropdownItemsAfter:d,...h}=e;const f=(0,c.useActiveDocContext)(n),b=(0,c.useVersions)(n),v=(0,c.useLatestVersion)(n),{preferredVersion:g,savePreferredVersionName:E}=(0,s.J)(n);const p=function(){const e=b.map((e=>{const t=f?.alternateDocVersions[e.name]||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{E(e.name)}}}));return[...m,...e,...d]}(),k=f.activeVersion??g??v,y=t&&p?"Versions":k.label,Z=t&&p?void 0:i(k).path;return p.length<=1?r.createElement(l.Z,(0,a.Z)({},h,{mobile:t,label:y,to:Z,isActive:u?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},h,{mobile:t,label:y,to:Z,items:p,isActive:u?()=>!1:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(13018);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...u}=e;const m=(0,o.useActiveVersion)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.useLatestVersion)(i),f=m??d??h,b=t??f.label,v=n??s(f).path;return r.createElement(l.Z,(0,a.Z)({},u,{label:b,to:v}))}},23154:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),l=n(86010),o=n(13018),c=n(5525),s=n(17193);const i="dropdown__link--active";function u(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:n,className:o,...u}=e;const m=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",o)},u,{onClick:u.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!h))}}),u.children??u.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:n}))))))}function d(e){let{items:t,className:n,position:i,...m}=e;const d=(0,o.be)(),h=u(t,d),{collapsed:f,toggleCollapsed:b,setCollapsed:v}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[d,h]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},m,{onClick:e=>{e.preventDefault(),b()}}),m.children??m.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const h=function(e){let{mobile:t=!1,...n}=e;const a=t?d:m;return r.createElement(a,n)}},17193:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(67294),r=n(5525),l=n(23154),o=n(87462),c=n(42086),s=n(52263),i=n(13018);function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:m,locales:d,localeConfigs:h}}=(0,s.Z)(),f=(0,i.l5)();function b(e){return h[e].label}const v=[...n,...d.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===m?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],g=t?"Languages":b(m);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,g)),items:v}))}var m=n(89754);function d(e){let{mobile:t}=e;return t?null:a.createElement(m.Z,null)}const h={default:()=>r.Z,localeDropdown:()=>u,search:()=>d,dropdown:()=>l.Z,docsVersion:()=>n(47250).Z,docsVersionDropdown:()=>n(59308).Z,doc:()=>n(76400).Z},f=e=>{const t=h[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};function b(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=f(r);return a.createElement(l,n)}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},98465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(86010),o=n(52263),c=n(85350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],u)},d)))))}},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},85350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(82924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);