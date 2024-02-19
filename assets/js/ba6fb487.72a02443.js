"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[932],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(g,l(l({ref:r},p),{},{components:t})):n.createElement(g,l({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9534:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={},l="Universal Reference",o={unversionedId:"ProgrammingLanguages/C++/universalReference",id:"ProgrammingLanguages/C++/universalReference",title:"Universal Reference",description:"Introduction",source:"@site/docs/ProgrammingLanguages/C++/universalReference.md",sourceDirName:"ProgrammingLanguages/C++",slug:"/ProgrammingLanguages/C++/universalReference",permalink:"/ProgrammingLanguages/C++/universalReference",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/ProgrammingLanguages/C++/universalReference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Ranges / Views",permalink:"/ProgrammingLanguages/C++/Ranges"},next:{title:"Variadic Template",permalink:"/ProgrammingLanguages/C++/variadicTemplate"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Named return value optimization",id:"named-return-value-optimization",level:2},{value:"Universal reference",id:"universal-reference-1",level:2}],p={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"universal-reference"},"Universal Reference"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lvalue: \u6709name\u7684value",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g. variables, functions"))),(0,a.kt)("li",{parentName:"ul"},"rvalue: \u6c92\u6709name\u7684value",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'E.g. 1, "abc", MyStruct{} '),(0,a.kt)("li",{parentName:"ul"},"Temporary value")))),(0,a.kt)("h2",{id:"named-return-value-optimization"},"Named return value optimization"),(0,a.kt)("p",null,"\u7576function return temporary object\u6216\u662flocal object\u6642\uff0ccompiler (After c++17)\u53ef\u4ee5\u505a\u512a\u5316\uff0c\u76f4\u63a5\u628areturn value construct\u5728\u63a5\u6536function return value\u7684\u8b8a\u6578\u4e0a\u3002"),(0,a.kt)("p",null,"\u9019\u6a23\u5c31\u4e0d\u6703\u547c\u53eb\u5230 copy/move constructor"),(0,a.kt)("h2",{id:"universal-reference-1"},"Universal reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4e00\u500btemplate function\u7406\uff0c\u5ba3\u544a\u53c3\u6578 ",(0,a.kt)("inlineCode",{parentName:"p"},"(T&& param)")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"T\u662f\u4e00\u500b\u672a\u88ab\u63a8\u65b7\u51fa\u4f86\u7684type"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"reference collapsing"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7576universal reference\u51fa\u73fe\u591a\u65bc\u5169\u500b\u4ee5\u4e0a\u7684&\u6642\uff0c\u63a8\u5012\u7d50\u679c\u7684\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u51fa\u73fe\u56db\u500b&\uff0c\u5247\u63a8\u65b7\u6210rvalue\uff0c\u5176\u9918\u5247\u63a8\u65b7\u6210lvalue")))))}m.isMDXComponent=!0}}]);