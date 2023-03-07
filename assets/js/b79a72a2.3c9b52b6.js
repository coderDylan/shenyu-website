"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50696:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},i=void 0,p={unversionedId:"deployment/deployment-package",id:"version-2.4.2/deployment/deployment-package",isDocsHomePage:!1,title:"Binary Packages Deployment",description:"Binary Packages Deployment",source:"@site/versioned_docs/version-2.4.2/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/docs/2.4.2/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/deployment/deployment-package.md",version:"2.4.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Binary Packages Deployment",keywords:["Deployment"],description:"Binary Packages Deployment"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Local Quick Deployment",permalink:"/docs/2.4.2/deployment/deployment-quick"},next:{title:"Docker-compose Deployment",permalink:"/docs/2.4.2/deployment/deployment-docker-compose"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]},{value:"Start ShenYu Bootstrap with ShenYu Agent",id:"start-shenyu-bootstrap-with-shenyu-agent",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article introduces the deployment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway using the binary packages."),(0,r.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-admin-bin.tar.gz"},"apache-shenyu-incubating-2.4.2-admin-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.2-admin-bin.tar.gz"),"\u3002 go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use ",(0,r.kt)("inlineCode",{parentName:"p"},"h2")," to store data\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"MySQL")," to store data, copy ",(0,r.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," to /$(your_work_dir)/ext-lib, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/conf")," directory, and modify the configuration of ",(0,r.kt)("inlineCode",{parentName:"li"},"mysql")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/conf")," directory, and  modify ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.profiles.active")," of the configuration in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"pg"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windows: start.bat \n\n> linux: ./start.sh \n")),(0,r.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"download ",(0,r.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.2/apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz"},"apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-2.4.2-bootstrap-bin.tar.gz"),"\u3002 go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,r.kt)("h3",{id:"start-shenyu-bootstrap-with-shenyu-agent"},"Start ShenYu Bootstrap with ShenYu Agent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.4.2 version started to support shenyu-agent")),(0,r.kt)("p",null,"Agent related configuration is in ",(0,r.kt)("inlineCode",{parentName:"p"},"./agent/conf"),". For detailed configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.2/user-guide/observability/observability"},"Observability")),(0,r.kt)("p",null,"If you want to start bootstrap with shenyu-agent, you just need to add one parameter at startup: agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./start.sh agent\n")))}u.isMDXComponent=!0}}]);