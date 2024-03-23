"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),d=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,g=s["".concat(m,".").concat(p)]||s[p]||u[p]||r;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={},l="MongoDB Schema Design Pattern",i={unversionedId:"Database\ud83d\uddc3/MongoDB/MongoPattern",id:"Database\ud83d\uddc3/MongoDB/MongoPattern",title:"MongoDB Schema Design Pattern",description:"Foreword",source:"@site/docs/Database\ud83d\uddc3/MongoDB/MongoPattern.md",sourceDirName:"Database\ud83d\uddc3/MongoDB",slug:"/Database\ud83d\uddc3/MongoDB/MongoPattern",permalink:"/Database\ud83d\uddc3/MongoDB/MongoPattern",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Database\ud83d\uddc3/MongoDB/MongoPattern.md",tags:[],version:"current",lastUpdatedBy:"cyctw",lastUpdatedAt:1682992027,formattedLastUpdatedAt:"2023\u5e745\u67082\u65e5",frontMatter:{},sidebar:"mySidebar",previous:{title:"Multikey Index",permalink:"/Database\ud83d\uddc3/MongoDB/Index/multikeyIndex"},next:{title:"C++ Algorithm library by examples",permalink:"/ProgrammingLanguages/C++/Algorithm"}},m={},d=[{value:"Foreword",id:"foreword",level:2},{value:"One-to-few",id:"one-to-few",level:2},{value:"One-to-many",id:"one-to-many",level:2},{value:"One-to-squillions",id:"one-to-squillions",level:2},{value:"Recap",id:"recap",level:2},{value:"Two-way referencing",id:"two-way-referencing",level:2},{value:"Denormalization with one-to-many relationship",id:"denormalization-with-one-to-many-relationship",level:2},{value:"Database denormalization from many to one",id:"database-denormalization-from-many-to-one",level:3},{value:"Database denormalization rule:",id:"database-denormalization-rule",level:2},{value:"Reference",id:"reference",level:2}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb-schema-design-pattern"},"MongoDB Schema Design Pattern"),(0,a.kt)("h2",{id:"foreword"},"Foreword"),(0,a.kt)("p",null,"MongoDB \u70ba ",(0,a.kt)("a",{parentName:"p",href:"/Database%F0%9F%97%83/MongoDB/DocumentDB"},"Document Database"),"\uff0c\u662f\u4e00\u7a2e NoSQL \u8cc7\u6599\u5eab\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u8cc7\u6599\u5eab\u7684 Schema \u8a2d\u8a08\u4e0a\u6703\u8ddf SQL \u6709\u4e9b\u4e0d\u540c\u7684\u5730\u65b9\u3002\n\u8209\u4f8b\u4f86\u8aaa\uff0c\u50cf\u662f\u4e00\u822c\u7684 one-to-many relation\uff0c\u5728 Document Database \u6703\u9700\u8981\u60f3\u7684\u66f4\u6df1\uff0c\u8981\u8003\u616e\u9019\u500b relationship \u7684 cardinality \u6709\u591a\u5c11\uff0c\u9032\u800c\u62c6\u6210 one-to-few, one-to-many, one-to-squillions"),(0,a.kt)("h2",{id:"one-to-few"},"One-to-few"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff1aPerson \u8207 Adress \u7684\u95dc\u4fc2\u3002"),(0,a.kt)("p",null,"\u9019\u6a23\u7684\u597d\u8655\u662f Query \u53ea\u9700\u8981\u4e00\u6b21\u5c31\u53ef\u4ee5\u628a\u8cc7\u6599\u53d6\u56de\uff0c\u7f3a\u9ede\u662f\u7121\u6cd5\u8f03\u96e3\u91dd\u5c0d embedded document \u53bb\u505a\u67e5\u8a62\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4455).Z,width:"1262",height:"390"})),(0,a.kt)("h2",{id:"one-to-many"},"One-to-many"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff1a\u7522\u54c1 (Product) \u8207\u96f6\u4ef6 (Part) \u7684\u95dc\u4fc2\n\u901a\u5e38\u4e00\u500b\u7522\u54c1\u53ef\u80fd\u6703\u6709\u5e7e\u767e\u7684\u96f6\u4ef6\uff0c\u4f46\u4e0d\u6703\u8d85\u904e\u5343\u7684\u91cf\u7d1a\u3002"),(0,a.kt)("p",null,"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u6bcf\u500b\u96f6\u4ef6\u6703\u6709\u5404\u81ea\u7684 Document\uff0c\u800c\u7522\u54c1 Collection \u5247\u5229\u7528 reference\uff08\u5b58\u53d6\u96f6\u4ef6 id) \u4f86\u505a\u5230\u95dc\u806f\u6027\u3002\n",(0,a.kt)("img",{src:n(2180).Z,width:"997",height:"701"})),(0,a.kt)("p",null,"\u7576\u6709\u9700\u8981\u5c0d\u7522\u54c1\u53ca\u96f6\u4ef6\u505a Query \u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 Application-level join \u4f86\u9054\u6210\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application level join:\n\u5728 Application \u5c64\u505a join\uff0c\u56e0\u6b64\u5982\u4e0b\u5716\u6240\u793a\u6703\u9700\u8981\u5169\u7b46 Query \u4f86\u9054\u6210",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7b46 Query \u62ff\u5230\u60f3\u8981\u7684 Product\uff0c\u4ee5\u53ca Parts \u7684 id"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7b46 Query \u628a\u9019\u4e9b id \u8ddf\u8207 Parts collection \u505a join")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1967).Z,width:"1033",height:"203"})),(0,a.kt)("p",null,"\u9019\u7a2e\u4f5c\u6cd5\u8207\u7b2c\u4e00\u7a2e embedding \u7684\u505a\u6cd5\u76f8\u6bd4\uff0cTrade off \u70ba"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Embedding \u7684 Read \u901f\u5ea6\u8f03\u5feb"),(0,a.kt)("li",{parentName:"ol"},"Reference \u53ef\u4ee5\u91dd\u5c0d\u5404\u81ea\u4e0d\u540c\u7684 collection \u505a\u67e5\u8a62\u53ca\u66f4\u65b0")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: Product \u8207 Part \u7684\u95dc\u4fc2\u6709\u53ef\u80fd\u70ba N-to-N\uff0c\u5047\u5982\u4e0d\u540c Product \u53ef\u4ee5\u5171\u7528\u96f6\u4ef6")),(0,a.kt)("h2",{id:"one-to-squillions"},"One-to-squillions"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff1a\u50cf\u662f Host \u8207 Log\uff0c\u4e00\u500b Host \u53ef\u80fd\u6703\u6709\u975e\u5e38\u591a\u7684 Log"),(0,a.kt)("p",null,"\u9019\u7a2e\u60c5\u6cc1\u53ef\u4ee5\u8b93 log \u53bb\u5132\u5b58 host id\uff0c\u7528\u4f86\u77e5\u9053\u6b64 log \u5c6c\u65bc\u54ea\u500b host\n\u540c\u6a23\u5730\u4e5f\u53ef\u4ee5\u5229\u7528 Application join \u53bb\u505a\u67e5\u8a62"),(0,a.kt)("h2",{id:"recap"},"Recap"),(0,a.kt)("p",null,"\u5f9e\u4ee5\u4e0a\u7684\u4f8b\u5b50\u4f86\u770b\uff0c\u5728\u8a2d\u8a08 schema \u524d\u9700\u5148\u8003\u616e\u5169\u500b\u554f\u984c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 One-to-N \u88e1\uff0cN \u90a3\u908a\u7684\u8cc7\u6599\u662f\u5426\u6709\u9700\u8981\u88ab\u7368\u81ea\u67e5\u8a62\u6216\u4fee\u6539\uff1f"),(0,a.kt)("li",{parentName:"ol"},"One-to-N \u7684 cardinality \u70ba\u4f55\uff1f")),(0,a.kt)("h2",{id:"two-way-referencing"},"Two-way referencing"),(0,a.kt)("p",null,"\u628a\u5728 One-to-many \u8207 One-to-squillion \u4f7f\u7528\u5230\u7684\u6a21\u578b\u505a\u7d50\u5408\uff0c\u8b93\u5169\u908a\u90fd\u5b58\u5f7c\u6b64\u7684 id\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u5728 One-to-Many \u6216\u662f Many-to-Many \u7684\u60c5\u6cc1\u4e0b\nE.g. \u4e0a\u8ff0 Products \u8ddf Parts \u7684\u4f8b\u5b50\u4e2d\uff0cParts \u5728\u591a\u4e00\u500b\u6b04\u4f4d\u5b58\u4ed6\u662f\u5c6c\u65bc\u54ea\u500b Product \u7684")),(0,a.kt)("p",null,"\u9019\u6a23\u505a\u7684\u597d\u8655\u662f\u5728 Relation \u7684\u5169\u908a\u90fd\u53ef\u4ee5\u53bb\u505a Query\u3002\n\u7f3a\u9ede\u70ba"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u591a\u5b58\u4e00\u500b\u6b04\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u7576\u9700\u8981\u4fee\u6539\u8cc7\u6599\u6642\uff0c\u5169\u908a\u7684 Collection \u90fd\u9700\u8981\u88ab\u4fee\u6539")),(0,a.kt)("h2",{id:"denormalization-with-one-to-many-relationship"},"Denormalization with one-to-many relationship"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u4ee5\u4e0a Model \u6642\uff0c\u53ef\u4ee5\u9069\u5ea6\u5730\u4f9d\u7167\u9700\u6c42\uff0c\u53bb\u505a denormalization \u4f86\u589e\u52a0\u6548\u7387"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u907f\u514d\u4f7f\u7528 application level join",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"TradeOff: denormalization \u70ba\u4fee\u6539\u589e\u52a0\u4e86\u8907\u96dc\u5ea6")))),(0,a.kt)("h3",{id:"database-denormalization-from-many-to-one"},"Database denormalization from many to one"),(0,a.kt)("p",null,"\u5ef6\u7e8c\u4e0a\u8ff0 Products \u7684\u4f8b\u5b50\uff0c\u82e5\u7cfb\u7d71\u7684 Query \u5e38\u5e38\u9700\u8981\u53d6\u5f97 Parts \u7684 name\uff0c\u53ef\u4ee5\u628a Name \u505a denormalize\uff0c\u591a\u5beb\u5230 Product collection \u88e1\u9762\u3002\n",(0,a.kt)("img",{src:n(6555).Z,width:"1005",height:"395"})),(0,a.kt)("p",null,"\u9019\u6a23\u7576 Query Products \u6642\u53c8\u53ea\u9700\u8981 Parts name \u7684\u8cc7\u6599\uff0c\u5c31\u4e0d\u5fc5\u505a application level join\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note: \u505a Denormalization \u8981\u8003\u616e\u5230 read/write ratio\u3002\u82e5\u9019\u500b field \u6709 high read ratio\uff0c\u800c\u4e14\u8f03\u5c11\u6539\u8b8a\uff0c\u5247\u53ef\u4ee5\u8003\u616e denormalization\u3002")),(0,a.kt)("h2",{id:"database-denormalization-rule"},"Database denormalization rule:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Embedding document"),(0,a.kt)("li",{parentName:"ol"},"\u7576\u88ab embedded \u7684 document \u9700\u8981\u55ae\u7368\u88ab\u67e5\u8a62\u3001\u66f4\u52d5\uff0c\u5247\u4f7f\u7528 reference"),(0,a.kt)("li",{parentName:"ol"},"Document \u88e1\u7684 Array \u4e0d\u80fd\u7121\u4e0a\u9650\u7684\u64f4\u5f35\u3002(Document \u6709 16MB size limit) \u5982\u679c Array \u5927\u5c0f\u6703\u8d85\u904e\u5e7e\u5343\u7684\u91cf\u7d1a\uff0c\u5247\u8003\u616e\u4f7f\u7528 one-to-squillion \u7684 model \u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u7528\u5bb3\u6015 application level join\u3002\u82e5\u6709\u8a2d\u5b9a\u597d index \u5247\u4e0d\u6703\u6bd4 database-side join \u5dee\u592a\u591a ($in Query \u4e5f\u53ef\u4ee5\u5229\u7528 index)\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u89c0\u5bdf document field \u7684 read-to-write ratio\uff0c\u4e26\u8003\u616e\u505a denormalization"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u64da\u8981\u958b\u767c\u7684 Application \u7684\u7279\u5b9a\u8cc7\u6599\u683c\u5f0f\u53bb\u505a schema design")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design"},"https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/"},"https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-summary/"))))}s.isMDXComponent=!0},4455:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongo1-1-269faaafd88232734871ee71d58fc5a1.png"},2180:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongo1-2-bac2f6d6bccd2624ef30a56ed370e489.png"},1967:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongo1-3-048e885f4e7bad087aab82878dca5bf1.png"},6555:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mongo1-4-5cf50cbeef8966fca6c8dc35d677f61b.png"}}]);