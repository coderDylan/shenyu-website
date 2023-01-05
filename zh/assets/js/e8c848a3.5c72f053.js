"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72365:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"ShenYu \u6027\u80fd\u4f18\u5316",keywords:["\u4f18\u5316"],description:"ShenYu \u6027\u80fd\u4f18\u5316"},i=void 0,l={unversionedId:"developer/shenyu-optimize",id:"developer/shenyu-optimize",isDocsHomePage:!1,title:"ShenYu \u6027\u80fd\u4f18\u5316",description:"ShenYu \u6027\u80fd\u4f18\u5316",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/shenyu-optimize.md",sourceDirName:"developer",slug:"/developer/shenyu-optimize",permalink:"/zh/docs/next/developer/shenyu-optimize",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/developer/shenyu-optimize.md",version:"current",frontMatter:{title:"ShenYu \u6027\u80fd\u4f18\u5316",keywords:["\u4f18\u5316"],description:"ShenYu \u6027\u80fd\u4f18\u5316"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u6a21\u5f0f",permalink:"/zh/docs/next/developer/local-model"},next:{title:"\u7ebf\u7a0b\u6a21\u578b",permalink:"/zh/docs/next/developer/thread-model"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u672c\u8eab\u6d88\u8017",id:"\u672c\u8eab\u6d88\u8017",children:[]},{value:"\u5e95\u5c42Netty\u8c03\u4f18",id:"\u5e95\u5c42netty\u8c03\u4f18",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u8fdb\u884c\u4f18\u5316\u3002")),(0,o.kt)("h2",{id:"\u672c\u8eab\u6d88\u8017"},"\u672c\u8eab\u6d88\u8017"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u672c\u8eab\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u90fd\u662f\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"JVM")," \u5185\u5b58\u6765\u5339\u914d\uff0c\u672c\u8eab\u6d88\u8017\u65f6\u95f4\u5927\u6982\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"1-3ms")," \u5de6\u53f3\u3002")),(0,o.kt)("h2",{id:"\u5e95\u5c42netty\u8c03\u4f18"},"\u5e95\u5c42Netty\u8c03\u4f18"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u5185\u7f6e\u4f9d\u8d56 ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-webflux")," \u800c\u5176\u5e95\u5c42\u662f\u4f7f\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"netty")," \u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"netty")," \u7684\u76f8\u5173\u53c2\u6570\u6765\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u4e0b\u662f\u793a\u4f8b\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'   @Bean\n    public NettyReactiveWebServerFactory nettyReactiveWebServerFactory() {\n        NettyReactiveWebServerFactory webServerFactory = new NettyReactiveWebServerFactory();\n        webServerFactory.addServerCustomizers(new EventLoopNettyCustomizer());\n        return webServerFactory;\n    }\n\n    private static class EventLoopNettyCustomizer implements NettyServerCustomizer {\n\n        @Override\n        public HttpServer apply(final HttpServer httpServer) {\n            return httpServer\n                    .tcpConfiguration(tcpServer -> tcpServer\n                            .runOn(LoopResources.create("shenyu-netty", 1, DEFAULT_IO_WORKER_COUNT, true), false)\n                            .selectorOption(ChannelOption.SO_REUSEADDR, true)\n                            .selectorOption(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT)\n                            .option(ChannelOption.TCP_NODELAY, true)\n                            .option(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT));\n        }\n    }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u7c7b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")," \u4e2d\u5df2\u7ecf\u5185\u7f6e\uff0c\u5728\u538b\u6d4b\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u8fdb\u884c\u4f18\u5316\u8bbe\u7f6e\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u7ebf\u7a0b\u6a21\u578b\uff0c\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"./thread-model"},"\u7ebf\u7a0b\u6a21\u578b")," \u3002"))))}c.isMDXComponent=!0}}]);