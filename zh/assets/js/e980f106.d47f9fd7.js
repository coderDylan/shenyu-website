"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[96002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,c=d["".concat(p,".").concat(s)]||d[s]||k[s]||l;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92994:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"},r="2.4.1",o={unversionedId:"2.4.1-release",id:"2.4.1-release",isDocsHomePage:!1,title:"2.4.1",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.1-release.md",sourceDirName:".",slug:"/2.4.1-release",permalink:"/zh/event/2.4.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.1-release.md",version:"current",lastUpdatedBy:"\u613f\u51cc\u98de",lastUpdatedAt:1673841153,formattedLastUpdatedAt:"2023/1/16",sidebarPosition:6,frontMatter:{title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"}},p=[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"API \u66f4\u6539",id:"api-\u66f4\u6539",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"241"},"2.4.1"),(0,a.kt)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin"),"\u7aef\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u52a8\u6001\u52a0\u8f7d\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u672c\u5730\u4fee\u6539\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"Websocket"),"\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"CryptorRequest"),"\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"CryptorResponse"),"\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"Spring Cloud"),"\u7070\u5ea6\u53d1\u5e03\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"Apache Dubbo"),"\u7070\u5ea6\u53d1\u5e03\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo"),"\u7684\u5f02\u6b65\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8\u8de8\u57df\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"Sign"),"\u63d2\u4ef6\u7684\u81ea\u5b9a\u4e49\u3002")),(0,a.kt)("h2",{id:"api-\u66f4\u6539"},"API \u66f4\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u6784",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu"),"\u914d\u7f6e\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo")," \u7684\u5f02\u6b65\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u8d1f\u8f7d\u5747\u8861\u516c\u5171\u6a21\u5757\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"SQL"),"\u521d\u59cb\u5316\u8bed\u53e5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u6784",(0,a.kt)("inlineCode",{parentName:"li"},"Admin"),"\u7aef\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"PageHelper"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"GlobalErrorHandler"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"ShenyuPlugin"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"skip"),"\u65b9\u6cd5\u63a5\u53e3\u7684\u8fd4\u56de\u503c\u4f18\u5316\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6ce8\u518c\u89c4\u5219"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"sofa"),"\u53c2\u6570\u89e3\u6790\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u6784",(0,a.kt)("inlineCode",{parentName:"li"},"sign"),"\u63d2\u4ef6\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"li"},"websocket"),"\u8fc7\u6ee4\u5668\u3002")),(0,a.kt)("h2",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"li"},"lombok"),"\u4f9d\u8d56\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"li"},"mapstruct"),"\u4f9d\u8d56\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"JDK8 ~ JDK15"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"motan"),"\u63d2\u4ef6\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"plugin_handle"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"SQL"),"\u8bed\u53e5\u3002")),(0,a.kt)("h2",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"jwt"),"\u63d2\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"JsonSyntaxException"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"resilience4j"),"\u63d2\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"sql"),"\u811a\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"disruptor"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"HealthCheckTask"),"\u6b7b\u9501\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"client"),"\u91cd\u8bd5\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),"\u9ed8\u8ba4\u5206\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"maven"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"docker"),"\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"admin"),"\u8fd4\u56de\u503c\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"LDAP"),"\u67e5\u8be2\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740\u67e5\u8be2\u9519\u8bef\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"Gson"),"\u5e8f\u5217\u5316\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"context path"),"\u63d2\u4ef6\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"monitor"),"\u63d2\u4ef6\u521d\u59cb\u5316\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"bug"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"GlobalErrorHandler"),"\u5bf9\u8c61\u6620\u5c04\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"modify response"),"\u63d2\u4ef6\u6392\u5e8f\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d\u6ce8\u518c\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"sofa"),"\u63d2\u4ef6\u6ce8\u518c\u5143\u6570\u636e\u548c\u53c2\u6570\u89e3\u6790\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"motan")," ,",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"sofa"),"\u63d2\u4ef6\u5143\u6570\u636e\u521d\u59cb\u5316\u3002")))}u.isMDXComponent=!0}}]);