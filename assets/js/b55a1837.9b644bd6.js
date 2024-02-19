"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,d=p["".concat(u,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Ch1 \u958b\u59cb\u5165\u9580",l={unversionedId:"ProgrammingLanguages/Rust/rust-book/Ch1",id:"ProgrammingLanguages/Rust/rust-book/Ch1",title:"Ch1 \u958b\u59cb\u5165\u9580",description:"Install Rustup",source:"@site/docs/ProgrammingLanguages/Rust/rust-book/Ch1.md",sourceDirName:"ProgrammingLanguages/Rust/rust-book",slug:"/ProgrammingLanguages/Rust/rust-book/Ch1",permalink:"/ProgrammingLanguages/Rust/rust-book/Ch1",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/ProgrammingLanguages/Rust/rust-book/Ch1.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:'Rust: what "&" means when iterating a vector',permalink:"/ProgrammingLanguages/Rust/CommonQuestions/IteratingVector"},next:{title:"\u8a2d\u8a08\u731c\u8b0e\u904a\u6232\u7a0b\u5f0f",permalink:"/ProgrammingLanguages/Rust/rust-book/ch2"}},u={},s=[{value:"Install Rustup",id:"install-rustup",level:2},{value:"Compile &amp; Run",id:"compile--run",level:2},{value:"Cargo",id:"cargo",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ch1-\u958b\u59cb\u5165\u9580"},"Ch1 \u958b\u59cb\u5165\u9580"),(0,a.kt)("h2",{id:"install-rustup"},"Install Rustup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rustup\u8ca0\u8cac\u7ba1\u7406rust\u7248\u672c\u53ca\u76f8\u95dc\u5de5\u5177")),(0,a.kt)("h2",{id:"compile--run"},"Compile & Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"rustc {filename} // generate exe file\n./{filename}\n")),(0,a.kt)("h2",{id:"cargo"},"Cargo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5957\u4ef6\u7ba1\u7406\u5de5\u5177"),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406dependencies\n\u5e38\u7528\u6307\u4ee4:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo new <project_name>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Create new project with default settings."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo build"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Compile and generate exe."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo run"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Build and run."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cargo check"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Check if it can compile.")))))}p.isMDXComponent=!0}}]);