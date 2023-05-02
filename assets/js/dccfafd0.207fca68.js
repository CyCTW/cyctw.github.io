"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4075],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>x});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(t),c=l,x=m["".concat(o,".").concat(c)]||m[c]||s[c]||i;return t?a.createElement(x,r(r({ref:n},p),{},{components:t})):a.createElement(x,r({ref:n},p))}));function x(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[m]="string"==typeof e?e:l,r[1]=d;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const i={},r="MongoDB Index",d={unversionedId:"Database\ud83d\uddc3/MongoDB/Index/indexintro",id:"Database\ud83d\uddc3/MongoDB/Index/indexintro",title:"MongoDB Index",description:"MongoDB\u4e2d\u6709\u8a31\u591a\u4e0d\u540c\u7a2e\u985e\u3001\u4e0d\u540c\u7279\u6027\u7684Index\u3002",source:"@site/docs/Database\ud83d\uddc3/MongoDB/Index/indexintro.md",sourceDirName:"Database\ud83d\uddc3/MongoDB/Index",slug:"/Database\ud83d\uddc3/MongoDB/Index/indexintro",permalink:"/Database\ud83d\uddc3/MongoDB/Index/indexintro",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Database\ud83d\uddc3/MongoDB/Index/indexintro.md",tags:[],version:"current",lastUpdatedBy:"cyctw",lastUpdatedAt:1682992027,formattedLastUpdatedAt:"2023\u5e745\u67082\u65e5",frontMatter:{},sidebar:"mySidebar",previous:{title:"What is a Document Database?",permalink:"/Database\ud83d\uddc3/MongoDB/DocumentDB"},next:{title:"Compound Index",permalink:"/Database\ud83d\uddc3/MongoDB/Index/compoundIndex"}},o={},u=[{value:"What is index?",id:"what-is-index",level:2},{value:"Index type",id:"index-type",level:2},{value:"Single Field Index",id:"single-field-index",level:3},{value:"Compound index",id:"compound-index",level:3},{value:"MultiKey Index",id:"multikey-index",level:3},{value:"Hashed Index",id:"hashed-index",level:3},{value:"Index Properties",id:"index-properties",level:2},{value:"TTL Index",id:"ttl-index",level:3},{value:"Unique index",id:"unique-index",level:3},{value:"Sparse index",id:"sparse-index",level:3},{value:"Partial index",id:"partial-index",level:3},{value:"TradeOff",id:"tradeoff",level:4},{value:"Common question",id:"common-question",level:2},{value:"Reference",id:"reference",level:2}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb-index"},"MongoDB Index"),(0,l.kt)("p",null,"MongoDB\u4e2d\u6709\u8a31\u591a\u4e0d\u540c\u7a2e\u985e\u3001\u4e0d\u540c\u7279\u6027\u7684Index\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6703\u4ecb\u7d39\u90e8\u5206\u5b98\u65b9\u6587\u4ef6\u4e0a\u7684\u7a2e\u985e\uff0c\u67d0\u4e9b\u8f03\u96e3\u7406\u89e3\u7684\u6703\u958b\u65b0\u7684\u5206\u9801\u8aaa\u660e\u3002"),(0,l.kt)("h2",{id:"what-is-index"},"What is index?"),(0,l.kt)("p",null,"Index\u70ba\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff0c\u5132\u5b58\u4e86Collection\u4e2d\u67d0\u500b\u6216\u67d0\u4e9bfield\u7684value\uff0c\u4e26\u4f9d\u7167\u9806\u5e8f\u6392\u5e8f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5047\u8a2d\u5728Person Collection\u4e0a\u5e6bname field\u52a0\u4e0aIndex\uff0cIndex\u8cc7\u6599\u7d50\u69cb\u770b\u8d77\u4f86\u6703\u50cf\u662f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amy"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bob"),(0,l.kt)("td",{parentName:"tr",align:null},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Carol"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("p",null,"...\n\u56e0\u6b64\uff0c\u7576\u6211\u5011\u8981\u67e5\u8a62",(0,l.kt)("inlineCode",{parentName:"p"},'db.Person.find({name: "Bob"})'),"\uff0c\u900f\u904eIndex\u6709\u6392\u5e8f\u7684\u7279\u6027\uff0c\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u7684\u627e\u5230Bob\u7684\u8cc7\u6599(\u5229\u7528\u985e\u4f3cBinary search\u7684\u65b9\u6cd5)"),(0,l.kt)("p",null,"\u5efa\u7acbIndex\u53ef\u4ee5\u5e6b\u52a9\u67d0\u4e9bRead Query\u66f4\u6709\u6548\u7684\u88ab\u57f7\u884c\u3002\n\u4e00\u822c\u7684Query\u662f\u4f7f\u7528Collection Scan\uff0c\u4e5f\u5c31\u662f\u8981\u5728\u67d0\u500bCollection\u627e\u5230\u67d0\u500b\u7279\u5b9a\u689d\u4ef6\u7684\u8cc7\u6599\u6642\uff0c\u9700\u8981\u6383\u904e\u6574\u500bCollection\u624d\u80fd\u627e\u5230(\u56e0\u70ba\u4e0d\u77e5\u9053\u5728\u54ea\uff0c\u4ee5\u53ca\u7b26\u5408\u689d\u4ef6\u7684\u6709\u591a\u5c11)\u3002"),(0,l.kt)("h2",{id:"index-type"},"Index type"),(0,l.kt)("h3",{id:"single-field-index"},"Single Field Index"),(0,l.kt)("p",null,"\u70ba\u67d0\u500bfield\u52a0\u4e0aIndex\uff0c\u5c31\u5982\u540c\u4e0a\u8ff0\u4f8b\u5b50\u3002"),(0,l.kt)("p",null,"\u8a9e\u6cd5:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"db.Person.createIndex({ name: 1})"))),(0,l.kt)("p",null,"\u70baEmbedded document field\u52a0index\u4e5f\u53ef\u4ee5\n",(0,l.kt)("inlineCode",{parentName:"p"},'db.Person.createIndex({ "Embedded.name": 1})'),"\u3002\u9019\u6a23Query",(0,l.kt)("inlineCode",{parentName:"p"},"Embedded.name"),"\u6642\u5c31\u53ef\u4ee5\u5229\u7528Index\u4e86\u3002"),(0,l.kt)("h3",{id:"compound-index"},(0,l.kt)("a",{parentName:"h3",href:"/Database%F0%9F%97%83/MongoDB/Index/compoundIndex"},"Compound index")),(0,l.kt)("h3",{id:"multikey-index"},(0,l.kt)("a",{parentName:"h3",href:"/Database%F0%9F%97%83/MongoDB/Index/multikeyIndex"},"MultiKey Index")),(0,l.kt)("h3",{id:"hashed-index"},"Hashed Index"),(0,l.kt)("p",null,"\u628aIndex field value\u505aHash\u5f8c\u5b58\u8d77\u4f86\u3002"),(0,l.kt)("p",null,"\u80cc\u5f8c\u4f7f\u7528Hash data structure\u7576\u4f5cindex\uff0c\u800c\u4e0d\u662fB-tree\u3002"),(0,l.kt)("p",null,"\u512a\u9ede\u662f\u63d0\u4f9bO(1)\u5feb\u901f\u67e5\u8a62\uff0c\u800c\u4e0d\u7528\u50cfB-tree\u8981\u904d\u6b77\u6a39\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u7528\u5728Hashed base sharding\u4e0a\uff0c\u53ef\u4ee5\u5229\u7528Hash\u7684\u7279\u6027\u8b93\u8cc7\u6599\u80fd\u5920\u66f4\u5e73\u5747\u7684\u5206\u4f48\u5728\u4e0d\u540cShard\u4e4b\u4e2d\u3002"),(0,l.kt)("h2",{id:"index-properties"},"Index Properties"),(0,l.kt)("h3",{id:"ttl-index"},"TTL Index"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8a2d\u5b9aDocument\u7684expiration time\uff0c\u7576\u904e\u671f\u6642\u9593\u5230\u4e86\uff0cMongoDB\u6703\u81ea\u52d5\u628a\u8cc7\u6599\u522a\u6389\u3002"),(0,l.kt)("p",null,"\u8a9e\u6cd5:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"}," ",(0,l.kt)("inlineCode",{parentName:"p"},'db.Person.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 3600 } )'))),(0,l.kt)("p",null,"Note: Index\u7684\u6b04\u4f4d\u578b\u614b\u5fc5\u9808\u662fDate\uff0c\u56e0\u6b64\u4e0a\u8ff0\u8a9e\u6cd5\u7684\u904e\u671f\u6642\u9593\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"createdAt"),"\u6b04\u4f4d\u7684\u6642\u9593\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"expireAfterSeconds"),"\u3002\u5982\u679c\u578b\u614b\u4e0d\u662fDate\u5247\u4e0d\u6703\u904e\u671f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u522a\u9664\u65b9\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MongoDB\u6703\u8dd1background job\uff0c\u6bcf60\u79d2\u6aa2\u67e5Document\u662f\u5426\u904e\u671f\u3002")))),(0,l.kt)("h3",{id:"unique-index"},"Unique index"),(0,l.kt)("p",null,"\u78ba\u4fddIndex\u7684value\u70baunique\nE.g. \u50cf\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"_id"),"\u6b04\u4f4d\u5c31\u662f\u4e00\u500b\u9810\u8a2d\u5efa\u7acb\u7684unique index\u3002"),(0,l.kt)("h3",{id:"sparse-index"},"Sparse index"),(0,l.kt)("p",null,"Sparse index\u53ea\u6703\u5c0d\u6709\u8a72field\u7684document\u5efa\u7acbIndex\u3002\u85c9\u6b64\uff0c\u53ef\u80fd\u53ef\u4ee5\u6e1b\u5c11Index\u8cc7\u6599\u7d50\u69cb\u7684\u5927\u5c0f\u3002"),(0,l.kt)("h3",{id:"partial-index"},"Partial index"),(0,l.kt)("p",null,"Partial index\u53ea\u6703\u5c0d\u7b26\u5408\u67d0\u6307\u5b9a\u689d\u4ef6\u7684document\u5efa\u7acbIndex\u3002"),(0,l.kt)("p",null,"\u8a9e\u6cd5:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"db.Person.createIndex(\n   { name: 1 },\n   { partialFilterExpression: { age: { $gt: 5 } } }\n)"))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u8a9e\u6cd5\u53ea\u6709age\u5927\u65bc5\u7684document\u624d\u6703\u88ab\u5b58\u5728Index\u88e1\u9762\u3002\u689d\u4ef6\u6307\u5b9a\u7684field\u53ef\u4ee5\u8ddfindex field\u4e0d\u4e00\u6a23\u3002"),(0,l.kt)("h4",{id:"tradeoff"},"TradeOff"),(0,l.kt)("p",null,"\u96d6\u7136Partial Index\u53ef\u4ee5\u6e1b\u5c11index size\uff0c\u4f46\u662f\u8a72index\u53ea\u80fd\u88ab\u7528\u5728query \u5305\u542b\u8a2d\u5b9a\u7684\u689d\u4ef6\u7bc4\u570d\u5167\u7684Document\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"E.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"db.Person.find( { age: { $gt: 8}})"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9019\u7b46query\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0\u8a2d\u5b9a\u7684partial index\uff0c\u56e0\u70baquery\u7684\u7bc4\u570d\u5728\u689d\u4ef6\u5167(",(0,l.kt)("inlineCode",{parentName:"li"},"$gt: 5"),")"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db.Person.find( { age: { $lt: 8}})"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9019\u7b46Query\u5247\u7121\u6cd5\u5229\u7528\u4e0a\u8ff0\u7684Partial index\uff0c\u56e0\u70ba\u53ef\u80fd\u6703\u6709\u8cc7\u6599\u4e0d\u5728index\u5167"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'db.Person.find( { name: "Bob", age: { $gt: 8}})'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u540c\u6a23\u5730\u9019\u7b46\u4e5f\u4e0d\u884c\uff0c\u56e0\u70ba\u4e0d\u78ba\u5b9a",(0,l.kt)("inlineCode",{parentName:"li"},"name: Bob"),"\u7684\u662f\u5426\u90fd\u5728index\u5167")))),(0,l.kt)("p",null,"Note: Sparse index\u70bapartial index\u7684\u5b50\u96c6\u5408\u3002"),(0,l.kt)("h2",{id:"common-question"},"Common question"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u500bfield\u6709\u4e0d\u540ctype\u6642\uff0cindex\u5982\u4f55\u5efa\u7acb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/4887727/mongodb-index-on-different-types"},"Solution"))))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.mongodb.com/docs/manual/indexes/"},"https://www.mongodb.com/docs/manual/indexes/"))))}m.isMDXComponent=!0}}]);