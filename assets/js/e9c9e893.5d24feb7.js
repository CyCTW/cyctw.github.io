"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5569],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,d=p["".concat(c,".").concat(g)]||p[g]||s[g]||i;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},l="CRTP & \u975c\u614b\u591a\u578b",o={unversionedId:"ProgrammingLanguages/C++/CRTP",id:"ProgrammingLanguages/C++/CRTP",title:"CRTP & \u975c\u614b\u591a\u578b",description:"Introduction",source:"@site/docs/ProgrammingLanguages/C++/CRTP.md",sourceDirName:"ProgrammingLanguages/C++",slug:"/ProgrammingLanguages/C++/CRTP",permalink:"/ProgrammingLanguages/C++/CRTP",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/ProgrammingLanguages/C++/CRTP.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"C++ Algorithm library by examples",permalink:"/ProgrammingLanguages/C++/Algorithm"},next:{title:"Static binding v.s. Dynamic binding",permalink:"/ProgrammingLanguages/C++/DynamicPolymorphism"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"CRTP",id:"crtp",level:2},{value:"\u975c\u614b\u591a\u578b",id:"\u975c\u614b\u591a\u578b",level:2},{value:"\u975c\u614b v.s. \u52d5\u614b\u591a\u578b",id:"\u975c\u614b-vs-\u52d5\u614b\u591a\u578b",level:2},{value:"Ref:",id:"ref",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crtp--\u975c\u614b\u591a\u578b"},"CRTP & \u975c\u614b\u591a\u578b"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Curiously Recurring Template Pattern"),(0,a.kt)("li",{parentName:"ul"},"Static Polymorphism")),(0,a.kt)("h2",{id:"crtp"},"CRTP"),(0,a.kt)("p",null,"\u4e00\u7a2eC++\u7a0b\u5f0f\u7e7c\u5de7\uff0c\u9808\u7b26\u5408\u4ee5\u4e0b\u689d\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Derived class \u5fc5\u9808\u7e7c\u627f\u67d0\u500b\u6a23\u677f\u985e\u5225"),(0,a.kt)("li",{parentName:"ol"},"\u7e7c\u627f\u6642\uff0c\u8a72\u6a23\u677f\u985e\u5225\u8981\u4f7f\u7528Derived class\u70baparameter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"template<typename T>\nclass Base{}\n\n\nclass Derived: public Base<Derived>\n{\n\n}\n")),(0,a.kt)("h2",{id:"\u975c\u614b\u591a\u578b"},"\u975c\u614b\u591a\u578b"),(0,a.kt)("p",null,"\u4f7f\u7528CRTP\uff0c\u7576\u8981implement\u4e00\u500bmember function\u6642\uff0c\u5728Base class\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"static_cast<>"),"\u628a this \u8f49\u6210type T\uff0c\u518d\u53bb\u547c\u53ebmember function\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Derived \u7528 Base class \u5ba3\u544a\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"Base<Derived>"),"\u7684\u5f62\u5f0f")),(0,a.kt)("p",null,"\u975c\u614b\u591a\u578b\u7684\u95dc\u9375\u5728\u4f7f\u7528CRTP"),(0,a.kt)("h2",{id:"\u975c\u614b-vs-\u52d5\u614b\u591a\u578b"},"\u975c\u614b v.s. \u52d5\u614b\u591a\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975c\u614b\u591a\u578b\u53ef\u4ee5\u5728compile time\u5c31\u6c7a\u5b9a\u578b\u5225"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u9700\u8981\u4f9d\u64da\u4f7f\u7528\u8005input\u6c7a\u5b9a\u578b\u614b\u6642\uff0c\u5fc5\u9808\u8981\u7528\u52d5\u614b\u591a\u578b\uff0c\u5728runtime\u6c7a\u5b9a\u578b\u5225")),(0,a.kt)("h2",{id:"ref"},"Ref:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tjsw.medium.com/%E6%BD%AE-c-crtp-%E5%92%8C%E9%9D%9C%E6%85%8B%E5%A4%9A%E5%9E%8B-96a91b9e4db6"},"https://tjsw.medium.com/%E6%BD%AE-c-crtp-%E5%92%8C%E9%9D%9C%E6%85%8B%E5%A4%9A%E5%9E%8B-96a91b9e4db6"))))}p.isMDXComponent=!0}}]);