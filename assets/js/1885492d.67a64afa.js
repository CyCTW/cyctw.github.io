"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,b=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return a?n.createElement(b,l(l({ref:t},m),{},{components:a})):n.createElement(b,l({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={},l="What is a Document Database?",i={unversionedId:"Database\ud83d\uddc3/MongoDB/DocumentDB",id:"Database\ud83d\uddc3/MongoDB/DocumentDB",title:"What is a Document Database?",description:"\u5b9a\u7fa9: \u5c07\u8cc7\u6599\u4ee5\u6587\u4ef6(Document)\u7684\u683c\u5f0f\u53bb\u5132\u5b58",source:"@site/docs/Database\ud83d\uddc3/MongoDB/DocumentDB.md",sourceDirName:"Database\ud83d\uddc3/MongoDB",slug:"/Database\ud83d\uddc3/MongoDB/DocumentDB",permalink:"/Database\ud83d\uddc3/MongoDB/DocumentDB",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Database\ud83d\uddc3/MongoDB/DocumentDB.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"R Tree",permalink:"/Database\ud83d\uddc3/Index/R-Tree"},next:{title:"MongoDB Index",permalink:"/Database\ud83d\uddc3/MongoDB/Index/indexintro"}},c={},u=[{value:"What are Doucments?",id:"what-are-doucments",level:2},{value:"Collections",id:"collections",level:2},{value:"Advantage of Document Database",id:"advantage-of-document-database",level:2},{value:"Compare with Relation database",id:"compare-with-relation-database",level:2},{value:"Reference",id:"reference",level:2}],m={toc:u};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-document-database"},"What is a Document Database?"),(0,r.kt)("p",null,"\u5b9a\u7fa9: \u5c07\u8cc7\u6599\u4ee5\u6587\u4ef6(Document)\u7684\u683c\u5f0f\u53bb\u5132\u5b58"),(0,r.kt)("h2",{id:"what-are-doucments"},"What are Doucments?"),(0,r.kt)("p",null,"Document\u5c07\u8cc7\u6599\u4ee5Field-value \u5c0d\u7684\u65b9\u5f0f\u5132\u5b58\uff0c\u5e38\u898b\u7684\u683c\u5f0f\u70baJSON\u3002\n\u7531\u65bc\u6b64\u7279\u6027\uff0cvalue\u4e5f\u53ef\u4ee5\u5132\u5b58\u8f03\u8907\u96dc\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u50cf\u662fArray\u6216\u662fembedded document\u3002\n",(0,r.kt)("img",{src:a(8681).Z,width:"891",height:"550"})),(0,r.kt)("h2",{id:"collections"},"Collections"),(0,r.kt)("p",null,"Collection\u70ba\u76f8\u95dcDocument\u7684\u96c6\u5408\u3002\u540c\u500bCollection\u7684\u4e0d\u540cDocument\u53ef\u4ee5\u6709\u4e0d\u4e00\u6a23\u7684field\uff0c\u751a\u81f3\u662f\u540c\u500bfield\u53ef\u4ee5\u6709\u4e0d\u540c\u7684type\u3002"),(0,r.kt)("h2",{id:"advantage-of-document-database"},"Advantage of Document Database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f4\u89c0\u7684Data model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u683c\u5f0f\u8207\u7a0b\u5f0f\u5167\u7684Object\u683c\u5f0f\u76f8\u50cf\uff0c\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u8f03\u5feb\u901f\u7684\u53bb\u5132\u5b58\u8cc7\u6599"))),(0,r.kt)("li",{parentName:"ul"},"\u5f48\u6027\u7684Schema",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6c92\u6709\u786c\u6027\u898f\u5b9aschema\uff0c\u53ef\u4ee5\u9069\u61c9\u8b8a\u52d5")))),(0,r.kt)("h2",{id:"compare-with-relation-database"},"Compare with Relation database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f03\u76f4\u89c0\u7684Data model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728RDB\u4e2d\uff0c\u901a\u5e38\u70ba\u4e86\u8b93\u7a0b\u5f0f\u5167\u7684object\u8f49\u6210Database\u7684\u683c\u5f0f\uff0c\u6703\u4f7f\u7528Object Relational Mapping(ORM)\uff0c\u4f46\u9019\u6a23\u505a\u537b\u589e\u52a0\u4e86\u8907\u96dc\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"RDB\u901a\u5e38\u9700\u8981\u505aNormalization\uff0c\u5c0e\u81f4\u4e00\u7b46query\u53ef\u80fd\u6703\u9700\u8981join\u591a\u500btable\u624d\u80fd\u62ff\u5230\u60f3\u8981\u7684\u8cc7\u6599\u3002\u76f8\u95dc\u806f\u7684Document\u6703\u5132\u5b58\u5728\u540c\u500bCollection\u88e1\uff0c\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u8b93\u4e00\u7b46query\u5c31\u53ef\u4ee5\u62ff\u5230\u6240\u6709\u60f3\u8981\u7684\u8cc7\u6599\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5e38\u898b\u7684JSON\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u8f03\u5f48\u6027\u7684Schema",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8b93\u4f7f\u7528\u8005\u4e0d\u5fc5\u9810\u5148\u78ba\u5b9a\u597dSchema\u4fbf\u53ef\u4ee5\u5148\u5feb\u901f\u5730\u505a\u958b\u767c\u3002\u5f8c\u7e8c\u82e5\u9700\u8981\u8b8a\u52d5\u4e5f\u53ef\u4ee5\u5f88\u5f48\u6027\u7684\u505a\u5230\u3002"),(0,r.kt)("li",{parentName:"ul"},"Document Database\u4e5f\u53ef\u4ee5\u505a\u5230Schema validation\u4f86\u78ba\u4fdd\u958b\u767c\u9806\u5229\u3002")))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/document-databases"},"https://www.mongodb.com/document-databases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/compare/relational-vs-non-relational-databases"},"https://www.mongodb.com/compare/relational-vs-non-relational-databases"))))}s.isMDXComponent=!0},8681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mongo1-5821f4d4d76fbd72e8654307745fa190.png"}}]);