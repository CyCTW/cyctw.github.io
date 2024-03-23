"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9102],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),o=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(t),k=n,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=k;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},253:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=t(7462),n=(t(7294),t(3905));const l={},i="Backend as a service",s={unversionedId:"Backend/Backend-as-a-Service/Baas",id:"Backend/Backend-as-a-Service/Baas",title:"Backend as a service",description:"Introduction",source:"@site/docs/Backend/Backend-as-a-Service/Baas.md",sourceDirName:"Backend/Backend-as-a-Service",slug:"/Backend/Backend-as-a-Service/Baas",permalink:"/Backend/Backend-as-a-Service/Baas",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Backend/Backend-as-a-Service/Baas.md",tags:[],version:"current",lastUpdatedBy:"cyctw",lastUpdatedAt:1682992027,formattedLastUpdatedAt:"2023\u5e745\u67082\u65e5",frontMatter:{},sidebar:"mySidebar",previous:{title:"HOW DISCORD HANDLES TWO AND HALF MILLION CONCURRENT VOICE USERS USING WEBRTC",permalink:"/Backend/Articles/DiscordWebRTC"},next:{title:"Parse Server",permalink:"/Backend/Backend-as-a-Service/ParseServer"}},c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Feature of Baas",id:"feature-of-baas",level:2},{value:"Examples",id:"examples",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Reference",id:"reference",level:2}],u={toc:o};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backend-as-a-service"},"Backend as a service"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Baas (Backend as a service)\uff0c\u8b93\u958b\u767c\u8005\u80fd\u5920\u5c08\u6ce8\u5728\u7db2\u7ad9\u7684 UI \u4ee5\u53ca\u524d\u7aef\u7684\u908f\u8f2f\u4e0a\u9762\uff0c\u800c\u4e0d\u7528\u53bb\u7ba1\u7406\u5f8c\u7aef\u76f8\u95dc\u7684\u4e8b\u60c5\uff0c\u6709\u4e9b Baas \u6846\u67b6\u751a\u81f3\u9023 hosting \u76f8\u95dc\u7684\u4e8b\u60c5\u6703\u4e00\u8d77\u8655\u7406\u3002"),(0,n.kt)("h2",{id:"feature-of-baas"},"Feature of Baas"),(0,n.kt)("p",null,"\u4e0d\u540c\u6846\u67b6\u53ef\u80fd\u6709\u4e0d\u4e00\u6a23\u7684 feature:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Database Management",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u8cc7\u6599\u5eab\uff0c\u8b93\u524d\u7aef\u958b\u767c\u8005\u53ef\u4ee5\u4e0d\u7528\u8a8d\u77e5\u5230\u8cc7\u6599\u5eab\u7684\u5b58\u5728\uff0c\u53ea\u9700\u4f7f\u7528\u5b9a\u7fa9\u597d\u7684 API \u6216 sdk \u53bb\u62ff\u53d6\u8cc7\u6599\u5c31\u597d\u3002"))),(0,n.kt)("li",{parentName:"ul"},"Cloud Storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u4f7f\u7528\u8005\u4e0a\u50b3\u7684\u8cc7\u6599 (e.g. \u6a94\u6848\uff09\uff0c\u4e26\u5b58\u5728\u96f2\u7aef\u4e0a\u3002"))),(0,n.kt)("li",{parentName:"ul"},"User authentication",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7ba1\u7406\u4f7f\u7528\u8005\u7684\u76f8\u95dc API\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8209\u4f8b\u4f86\u8aaa\uff1a\u524d\u7aef\u547c\u53eb ",(0,n.kt)("inlineCode",{parentName:"li"},'Baas.signup("username", "password")'),"\u5f8c\uff0cBaas \u670d\u52d9\u6703\u81ea\u52d5\u5efa\u7acb\u65b0\u7684\u4f7f\u7528\u8005\uff0c\u4e26\u5c07\u4f7f\u7528\u8005\u8cc7\u6599\u5b58\u5230\u8cc7\u6599\u5eab\uff0c\u4e5f\u53ef\u80fd\u6703\u81ea\u52d5\u52a0\u5bc6\u5bc6\u78bc\u3001\u9650\u5236\u6b0a\u9650\u7b49\u7b49\u3002"))),(0,n.kt)("li",{parentName:"ul"},"Push notification",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u63a8\u9001\u901a\u77e5\u5230\u624b\u6a5f\u7684\u529f\u80fd (For Andriod, IOS)"))),(0,n.kt)("li",{parentName:"ul"},"Hosting",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u90e8\u5c6c\u5f8c\u7aef\u7684\u76f8\u95dc\u4e8b\u60c5\uff0c\u8b93\u958b\u767c\u8005\u4e0d\u9700\u8981\u81ea\u5df1\u627e\u500b server \u4e26\u90e8\u5c6c\u7a0b\u5f0f\u78bc")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.cloudflare.com/img/learning/serverless/glossary/backend-as-a-service-baas/what-is-backend-as-a-service.svg",alt:null}),"\n\uff08\u64f7\u53d6\u81ea Cloudflare)"),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"\u5e38\u898b\u7684 Baas framework \u6709"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Firebase"),(0,n.kt)("li",{parentName:"ul"},"Parse Server")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Baas \u7684\u597d\u8655\u662f\u8b93\u958b\u767c\u8005\u80fd\u5920\u5c08\u6ce8\u5728\u958b\u767c\u524d\u7aef\u7684\u908f\u8f2f\uff0c\u4e26\u4e14\u7701\u53bb\u958b\u767c\u5f8c\u7aef\u7684\u4e00\u4e9b ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Boilerplate_code"},"boilerplate code"),"\uff0c\u50cf\u662f CRUD \u4ee5\u53ca user authentication\u3002\u4e5f\u53ef\u4ee5\u60f3\u6210\u5176\u4ed6\u516c\u53f8\u6216\u662f\u793e\u7fa4\u7684\u4eba\u5e6b\u5fd9\u6211\u5011\u5beb\u4e86\u9019\u4e9b\u5e38\u898b\u7684 bolerplate code\u3002"),(0,n.kt)("p",null,"Baas \u7684\u7f3a\u9ede\u662f\u5c0d\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4f9d\u8cf4\uff0c\u7576\u4f60\u5728\u4f7f\u7528\u670d\u52d9\u63d0\u4f9b\u7684 api \u6216 sdk \u767c\u751f\u932f\u8aa4\u6642\uff0c\u4ecd\u7136\u6709\u53ef\u80fd\u9700\u8981\u53bb\u6aa2\u67e5\u539f\u59cb\u78bc\u662f\u600e\u9ebc\u5beb\u7684\u624d\u80fd\u627e\u51fa\u539f\u56e0\uff0c\u6216\u662f\u7576\u6709\u7279\u5b9a\u9700\u6c42\u662f\u670d\u52d9\u662f Baas \u6c92\u6709\u63d0\u4f9b\u7684\uff0c\u5c31\u9700\u8981\u81ea\u5df1\u5beb\uff0c\u800c\u4e14\u53ef\u80fd\u9084\u9700\u8981\u7b26\u5408 Baas \u898f\u5b9a\u7684\u7279\u6b8a\u67b6\u69cb\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u8981\u958b\u767c\u4e00\u500b\u7c21\u55ae\u529f\u80fd\u7684 Web app\uff0c\u883b\u9069\u5408\u4f7f\u7528 Frontend + Baas \u7684\uff0c\u82e5\u5f8c\u7aef\u7684\u908f\u8f2f\u8f03\u8907\u96dc\uff0c\u5247\u53ef\u80fd\u8981\u5728 Baas \u52a0\u4e0a\u81ea\u5df1\u5beb\u7684\u5f8c\u7aef code\u3002"),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/serverless/glossary/backend-as-a-service-baas/"},"https://www.cloudflare.com/learning/serverless/glossary/backend-as-a-service-baas/"))))}p.isMDXComponent=!0}}]);