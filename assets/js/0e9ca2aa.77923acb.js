"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={},r="Client Side Caching in Redis",c={unversionedId:"Backend/Cache/Redis/client-side-cache",id:"Backend/Cache/Redis/client-side-cache",title:"Client Side Caching in Redis",description:"\u672c\u6587\u70ba\u6b64\u7bc7 \u6587\u7ae0 \u7684\u7b46\u8a18\u3002",source:"@site/docs/Backend/Cache/Redis/client-side-cache.md",sourceDirName:"Backend/Cache/Redis",slug:"/Backend/Cache/Redis/client-side-cache",permalink:"/Backend/Cache/Redis/client-side-cache",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Backend/Cache/Redis/client-side-cache.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Parse Server",permalink:"/Backend/Backend-as-a-Service/Parse Server/Introduction"},next:{title:"RabbitMQ official docs",permalink:"/Backend/MessageQueue/RabbitMQ/official-docs"}},o={},p=[{value:"Foreword",id:"foreword",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Problems with above pattern",id:"problems-with-above-pattern",level:3},{value:"Implementation of Client side caching in Redis",id:"implementation-of-client-side-caching-in-redis",level:2},{value:"Two connections mode",id:"two-connections-mode",level:2},{value:"What tracking tracks?",id:"what-tracking-tracks",level:2},{value:"Cache specific key",id:"cache-specific-key",level:3},{value:"NOLOOP option",id:"noloop-option",level:2},{value:"Avoid Race condition",id:"avoid-race-condition",level:2},{value:"What to cache",id:"what-to-cache",level:2},{value:"Other hints",id:"other-hints",level:2},{value:"Reference:",id:"reference",level:2}],s={toc:p};function d(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-side-caching-in-redis"},"Client Side Caching in Redis"),(0,i.kt)("p",null,"\u672c\u6587\u70ba\u6b64\u7bc7 ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/client-side-caching/"},"\u6587\u7ae0")," \u7684\u7b46\u8a18\u3002"),(0,i.kt)("h2",{id:"foreword"},"Foreword"),(0,i.kt)("p",null,"\u672c\u6587\u7684 Client Side caching in Redis \u70ba\u4ee5\u4e0b\u67b6\u69cb\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5 Redis \u7576\u4f5c\u4e3b\u8981 Database \uff08\u4e0d\u662f\u4f5c\u70ba cache \u4f7f\u7528\uff09"),(0,i.kt)("li",{parentName:"ul"},"Client side cache \u6307\u7684\u662f Application(Server machine) \u7684 local memory cache\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u6587\u5167\u7684 Client \u6307\u7684\u662f Application\uff0cServer \u6307\u7684\u662f Redis Server(Database)")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Client side cache \u5c0d\u63d0\u5347\u7cfb\u7d71\u6548\u80fd\u6709\u5f88\u5927\u7684\u5e6b\u52a9\u3002\u7576 Application \u767c\u9001\u8acb\u6c42\u5230 Database\uff0c\u4e26\u5f9e Database \u62ff\u5230\u67d0\u7b46\u8cc7\u6599\u5f8c\u4fbf\u53ef\u4ee5\u628a\u8cc7\u6599\u5b58\u5728 Application \u5167\u7684 Local memory\u3002\u7576\u4e0b\u6b21\u8981\u767c\u9001\u76f8\u540c\u8acb\u6c42\u6642\uff0c\u4fbf\u53ef\u4ee5\u76f4\u63a5\u5f9e Memory \u62ff\u53d6\uff0c\u800c\u7701\u6389\u8207 Database \u7684\u6e9d\u901a\u6642\u9593\uff0c\u4ee5\u53ca Database \u8dd1 Query \u7684\u6642\u9593\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u767c\u9001\u8acb\u6c42\u81f3\u8cc7\u6599\u5eab\uff0c\u4e26\u628a\u7d50\u679c\u5b58\u5728 Memory",(0,i.kt)("img",{src:a(3760).Z,width:"1272",height:"300"})),(0,i.kt)("li",{parentName:"ul"},"\u4e0b\u6b21\u8acb\u6c42\u6642\uff0c\u4e0d\u5fc5\u8207\u8cc7\u6599\u5eab\u6e9d\u901a\uff01",(0,i.kt)("a",{target:"_blank",href:a(1372).Z}))),(0,i.kt)("p",null,"\u901a\u5e38 Cache \u6703\u5b58\u53d6 High Read \u7684\u8cc7\u6599\u3002\u5176\u4ed6\u7684\u7279\u6027\u5982 Not frequently change \u4ee5\u53ca Computed expensive \u4e5f\u53ef\u4ee5\u8003\u616e\u3002"),(0,i.kt)("h3",{id:"problems-with-above-pattern"},"Problems with above pattern"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7576\u8cc7\u6599\u767c\u751f\u8b8a\u52d5\u6642\uff0c\u5982\u4f55\u53bb\u66f4\u65b0\u6216\u522a\u9664 Cache \u88e1\u7684\u820a\u8cc7\u6599\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5c24\u5176\u7576\u7cfb\u7d71\u5167\u6709\u591a\u53f0 Machine \u904b\u884c\u6642\uff0c\u60c5\u6cc1\u66f4\u8907\u96dc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53ef\u80fd\u89e3\u6cd5"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Simple: Time-to-Live index(TTL)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a Cache \u8cc7\u6599\u7684\u904e\u671f\u6642\u9593"))),(0,i.kt)("li",{parentName:"ol"},"Complex: \u5075\u6e2c Database \u66f4\u65b0\u7684 Event\uff0c\u7576\u767c\u751f\u8b8a\u52d5\u6642\u901a\u77e5 Cache \u66f4\u6539",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 Pub/Sub system\u3002\u767c\u751f\u8b8a\u52d5\u6642 Publish message\uff0c\u4e26\u50b3\u7d66\u6240\u6709 Subscribe \u6b64 Event \u7684 Machine\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7f3a\u9ede\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pub/Sub \u901a\u5e38\u6703\u9001\u901a\u77e5\u7d66\u6240\u6709 Machine\uff0c\u56e0\u70ba\u4e0d\u77e5\u9053\u8ab0\u6709 Cache \u8cc7\u6599\uff0c\u8ab0\u6c92\u6709\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u8907\u96dc"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Redis 6 \u652f\u63f4\u4e86 Client-side caching\uff0c\u8b93\u4e0a\u8ff0 Pattern \u53ef\u4ee5\u7c21\u55ae\u4e14\u6709\u6548\u7387\u7684\u9054\u6210"))),(0,i.kt)("h2",{id:"implementation-of-client-side-caching-in-redis"},"Implementation of Client side caching in Redis"),(0,i.kt)("p",null,"Two modes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Default mode\nRedis Server(Database) \u6703\u8a18\u9304\u6bcf\u500b Client \u6709\u5b58\u53d6\u904e\u90a3\u4e9b Key\uff0c\u7576 key \u767c\u751f\u8b8a\u52d5\u6642\uff0c\u767c\u9001 invalidation \u8a0a\u606f\u7d66\u90a3\u4e9b Clients\u3002"),(0,i.kt)("li",{parentName:"ol"},"Broadcasting mode\n\u4e0d\u7d00\u9304\u8ab0\u5b58\u4e86\u54ea\u4e9bkey\uff0c\u767c\u9001\u901a\u77e5\u7d66\u6240\u6709Clients")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Default mode\u9700\u5148ENABLE TRACKING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Redis Server\u5982\u4f55\u8a18\u9304 client-side caching?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Invalidation table(\u5b58\u5728memory)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7d00\u9304\u5404\u500bClient\u7684key\u5b58\u53d6\u7d00\u9304"),(0,i.kt)("li",{parentName:"ul"},"\u7576Table\u6eff\u4e86\uff0c\u5247\u628aold key evict\uff0c\u4e26\u901a\u77e5\u6709\u8a18\u9304\u6b64Key\u7684client\u7576\u4f5c\u9019\u500bkey\u5df2\u7d93\u904e\u671f\u3002")))))),(0,i.kt)("h2",{id:"two-connections-mode"},"Two connections mode"),(0,i.kt)("p",null,"\u820a\u7684Protocol\u4e2d(RESP2)\uff0cClient\u6703\u9700\u8981\u4f7f\u7528\u5169\u500bConnection\u4f86\u8207Server\u6e9d\u901a\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u4e00\u500bClient\u8ca0\u8cac\u767c\u9001Query"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4e2d\u4e00\u500bClient\u8ca0\u8cac\u63a5\u6536Invalidation message")),(0,i.kt)("p",null,"\u65b0\u7684Protocol\u4e2d(RESP3)\u53ef\u4ee5\u53ea\u7528\u4e00\u500bconnection\u5c31\u505a\u5230Query\u8ddf\u63a5\u6536Invalidation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f46\u7576Client\u4e3b\u52d5\u767c\u9001\u8a0a\u606f\u5f8c\u624d\u6703\u63a5\u6536\u5230Invalidation")),(0,i.kt)("h2",{id:"what-tracking-tracks"},"What tracking tracks?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cClient\u4e0d\u9700\u8981\u544a\u8a34Server\u4ed6\u5011\u9700\u8981cache\u7684key\u6709\u54ea\u4e9b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server \u6703cache\u6240\u6709\u88ab\u8b80\u7684key"))),(0,i.kt)("li",{parentName:"ul"},"Tradeoff",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cache All key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Client server\u6e9d\u901a\u6210\u672c\u8f03\u4f4e"),(0,i.kt)("li",{parentName:"ul"},"Server\u6703\u9808\u5b58\u53d6\u8f03\u591a\u8cc7\u6599\uff0c\u4e14Client\u53ef\u80fd\u63a5\u6536\u5230\u7121\u7528\u7684invalidation\u8a0a\u606f"))),(0,i.kt)("li",{parentName:"ul"},"Cache specific key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Client server\u6e9d\u901a\u6210\u672c\u8f03\u9ad8")))))),(0,i.kt)("h3",{id:"cache-specific-key"},"Cache specific key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OPTIN",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Client\u4e3b\u52d5\u544a\u8a34Server\u8a72cache\u90a3\u4e9bkey",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7576Read\u524d\u767c\u9001CACHING YES\u544a\u8a34server\u4e0b\u500bread\u8981cache"))),(0,i.kt)("li",{parentName:"ul"})))),(0,i.kt)("h2",{id:"noloop-option"},"NOLOOP option"),(0,i.kt)("p",null,"\u7576\u76ee\u524dClient write\u6642\uff0c\u81ea\u5df1\u4e0d\u6703\u63a5\u6536\u5230invalidation message\u3002"),(0,i.kt)("h2",{id:"avoid-race-condition"},"Avoid Race condition"),(0,i.kt)("p",null,"\u7576\u767c\u9001Read\u5f8c\uff0c\u5728\u6536\u5230\u56de\u8986\u524d\u5c31\u6536\u5230invalidation message\uff0c\u53ef\u80fd\u6703\u9020\u6210race condition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Invalidate\u5f8c\u7684Response\u53ef\u80fd\u6703\u5beb\u5165cache\n",(0,i.kt)("img",{src:a(1779).Z,width:"1257",height:"228"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u89e3\u6c7a\u65b9\u6cd5\u70ba\u5728\u767c\u9001Read query\u6642\uff0c\u540c\u6642\u4e5f\u5728local\u8a18\u9304\u6b64\u884c\u70ba\u3002\u9019\u6a23\u5728\u5f8c\u7e8c\u8655\u7406\u5c31\u4e0d\u6703\u6709\u554f\u984c\n",(0,i.kt)("img",{src:a(6869).Z,width:"1276",height:"342"})))),(0,i.kt)("h2",{id:"what-to-cache"},"What to cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u5011\u60f3\u8981cache\u7684key\u61c9\u8a72\u8981\u7b26\u5408:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5f88\u5e38\u88ab\u8b80"),(0,i.kt)("li",{parentName:"ul"},"\u8b8a\u52d5\u983b\u7387\u5728\u4e00\u500b\u5408\u7406\u7684\u7bc4\u570d\u5167")))),(0,i.kt)("h2",{id:"other-hints"},"Other hints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728Read server\u6642\u4e5f\u9806\u4fbf\u7d00\u9304TTL")),(0,i.kt)("h2",{id:"reference"},"Reference:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/docs/manual/client-side-caching/"},"https://redis.io/docs/manual/client-side-caching/"))))}d.isMDXComponent=!0},1372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/redis2-a44026985e6161f4cae7e4bb1a6d4ec9.png"},3760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis1-974e78741d14b6c25424e78d8121f8a4.png"},1779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis3-5e5275e65b2ff057cdeb466b9f68a999.png"},6869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redis4-0d19e61ee90d453d5fff112d05af6153.png"}}]);