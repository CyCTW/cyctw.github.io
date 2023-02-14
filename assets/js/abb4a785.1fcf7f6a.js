"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=o(a),k=r,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||s;return a?n.createElement(u,m(m({ref:t},i),{},{components:a})):n.createElement(u,m({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,m[1]=l;for(var o=2;o<s;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var n=a(7462),r=a(7294),s=a(3905),m=a(6010),l=a(2389),p=a(7392),o=a(7094),i=a(2466);const d="tabList__CuJ",c="tabItem_LNqP";function k(e){const{lazy:t,block:a,defaultValue:s,values:l,groupId:k,className:u}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=l??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,p.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??N.find((e=>e.props.default))?.props.value??N[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,o.U)(),[b,_]=(0,r.useState)(y),v=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=k){const e=f[k];null!=e&&e!==b&&h.some((t=>t.value===e))&&_(e)}const O=e=>{const t=e.currentTarget,a=v.indexOf(t),n=h[a].value;n!==b&&(x(t),_(n),null!=k&&w(k,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]??v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]??v[v.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,m.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":a},u)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>v.push(e),onKeyDown:S,onClick:O},s,{className:(0,m.Z)("tabs__item",c,s?.className,{"tabs__item--active":b===t})}),a??t)}))),t?(0,r.cloneElement)(N.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function u(e){const t=(0,l.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}const N="tabItem_Ymn6";function h(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,m.Z)(N,n),hidden:a},t)}const g={image:"https://i.imgur.com/mErPwqL.png",tags:["c++","python","ordered set","data structure"],last_update:{date:"2/6/2023",author:"cyctw"},toc_max_heading_level:2,description:"Ordered Set \u662f\u4e00\u7a2e \u96c6\u5408 \u8cc7\u6599\u7d50\u69cb\uff0c\u96c6\u5408\u88e1\u9762\u7684\u5143\u7d20\u6703\u4f9d\u7167\u67d0\u7a2e\u898f\u5247\u6392\u5e8f\uff0c\u50cf\u662f\u5347\u51aa\u3001\u964d\u51aa\u6392\u5217\uff0c\u6216\u662f\u81ea\u5b9a\u7fa9\u7684\u6392\u5217\u65b9\u6cd5\u3002",keywords:["docs"]},y="Ordered Set",f={unversionedId:"DataStructure/OrderedSet",id:"DataStructure/OrderedSet",title:"Ordered Set",description:"Ordered Set \u662f\u4e00\u7a2e \u96c6\u5408 \u8cc7\u6599\u7d50\u69cb\uff0c\u96c6\u5408\u88e1\u9762\u7684\u5143\u7d20\u6703\u4f9d\u7167\u67d0\u7a2e\u898f\u5247\u6392\u5e8f\uff0c\u50cf\u662f\u5347\u51aa\u3001\u964d\u51aa\u6392\u5217\uff0c\u6216\u662f\u81ea\u5b9a\u7fa9\u7684\u6392\u5217\u65b9\u6cd5\u3002",source:"@site/docs/DataStructure/OrderedSet.md",sourceDirName:"DataStructure",slug:"/DataStructure/OrderedSet",permalink:"/DataStructure/OrderedSet",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/DataStructure/OrderedSet.md",tags:[{label:"c++",permalink:"/tags/c"},{label:"python",permalink:"/tags/python"},{label:"ordered set",permalink:"/tags/ordered-set"},{label:"data structure",permalink:"/tags/data-structure"}],version:"current",lastUpdatedBy:"cyctw",lastUpdatedAt:1675612800,formattedLastUpdatedAt:"2023\u5e742\u67085\u65e5",frontMatter:{image:"https://i.imgur.com/mErPwqL.png",tags:["c++","python","ordered set","data structure"],last_update:{date:"2/6/2023",author:"cyctw"},toc_max_heading_level:2,description:"Ordered Set \u662f\u4e00\u7a2e \u96c6\u5408 \u8cc7\u6599\u7d50\u69cb\uff0c\u96c6\u5408\u88e1\u9762\u7684\u5143\u7d20\u6703\u4f9d\u7167\u67d0\u7a2e\u898f\u5247\u6392\u5e8f\uff0c\u50cf\u662f\u5347\u51aa\u3001\u964d\u51aa\u6392\u5217\uff0c\u6216\u662f\u81ea\u5b9a\u7fa9\u7684\u6392\u5217\u65b9\u6cd5\u3002",keywords:["docs"]},sidebar:"mySidebar",previous:{title:"Data Structure",permalink:"/category/data-structure"},next:{title:"Database",permalink:"/category/database"}},w={},b=[{value:"Introduction",id:"introduction",level:2},{value:"Operations",id:"operations",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Include header files",id:"include-header-files",level:3},{value:"Define type",id:"define-type",level:3},{value:"Ordered set",id:"ordered-set-1",level:3},{value:"Ordered multiset",id:"ordered-multiset",level:3},{value:"Ordered map",id:"ordered-map",level:3},{value:"Reference",id:"reference",level:3},{value:"Download package",id:"download-package",level:3},{value:"SortedList",id:"sortedlist",level:3},{value:"SortedSet",id:"sortedset",level:3},{value:"SortedDict",id:"sorteddict",level:3},{value:"Reference",id:"reference-1",level:3}],_={toc:b};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ordered-set"},"Ordered Set"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Ordered Set \u662f\u4e00\u7a2e ",(0,s.kt)("strong",{parentName:"p"},"\u96c6\u5408")," \u8cc7\u6599\u7d50\u69cb\uff0c\u96c6\u5408\u88e1\u9762\u7684\u5143\u7d20\u6703\u4f9d\u7167\u67d0\u7a2e\u898f\u5247\u6392\u5e8f\uff0c\u50cf\u662f\u5347\u51aa\u3001\u964d\u51aa\u6392\u5217\uff0c\u6216\u662f\u81ea\u5b9a\u7fa9\u7684\u6392\u5217\u65b9\u6cd5\u3002"),(0,s.kt)("p",null,"\u611f\u89ba\u6709\u9ede\u50cf\u662f Heap(\u5806\u7a4d)\uff0c\u4f46\u662f Heap \u5167\u7684\u5143\u7d20\u53ea\u4fdd\u8b49\u982d(\u6216\u5c3e)\u7684\u503c\u662f\u6975\u503c\uff0c\u4e26\u6c92\u6709\u4fdd\u8b49\u6574\u500b\u8cc7\u6599\u7d50\u69cb\u5167\u7684\u5143\u7d20\u90fd\u662f\u6392\u5e8f\u904e\u7684\u3002"),(0,s.kt)("p",null,"\u800c Ordered set \u4e5f\u53ef\u4ee5\u5206\u6210\u5169\u7a2e: "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u96c6\u5408\u5167\u4e0d\u5141\u8a31\u6709\u91cd\u8907\u503c"),(0,s.kt)("li",{parentName:"ol"},"\u96c6\u5408\u5167\u5141\u8a31\u6709\u91cd\u8907\u503c")),(0,s.kt)("h2",{id:"operations"},"Operations"),(0,s.kt)("p",null,"\u9019\u7a2e\u8cc7\u6599\u7d50\u69cb\u5e38\u898b\u7684\u64cd\u4f5c\u5982\u4e0b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Insert: ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u63d2\u5165\u4e00\u500b\u5143\u7d20"),(0,s.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))))),(0,s.kt)("li",{parentName:"ul"},"Remove: ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u79fb\u9664\u6389\u4e00\u500b\u5143\u7d20"),(0,s.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))))),(0,s.kt)("li",{parentName:"ul"},"Find:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u6aa2\u67e5\u67d0\u500b\u5143\u7d20\u5728\u4e0d\u5728\u96c6\u5408\u88e1\u9762"),(0,s.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))))),(0,s.kt)("li",{parentName:"ul"},"Find k-th element:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u627e\u51fa\u96c6\u5408\u5167\u7b2ck\u500b\u5143\u7d20\u662f\u54ea\u500b "),(0,s.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))))),(0,s.kt)("li",{parentName:"ul"},"Find insertion position of k:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u627e\u51fa k \u503c\u63d2\u5165\u96c6\u5408\u5f8c\u7684\u4f4d\u7f6e"),(0,s.kt)("li",{parentName:"ul"},"Note: k \u4e0d\u4e00\u5b9a\u8981\u5728\u96c6\u5408\u5167\uff0c\u800c\u6b64\u64cd\u4f5c\u6c92\u6709\u771f\u7684\u63d2\u5165"),(0,s.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u7684\u6642\u9593\u8907\u96dc\u5ea6 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u7686\u4ee3\u8868\u57f7\u884c\u6b64\u64cd\u4f5c\u6642\u7684",(0,s.kt)("strong",{parentName:"p"},"\u96c6\u5408\u5927\u5c0f"),"\u3002")),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)(u,{mdxType:"Tabs"},(0,s.kt)(h,{value:"C++",label:"C++",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"\u5728 C++ \u4e2d\u8b1b\u5230Ordered Set\u901a\u5e38\u6703\u60f3\u5230 ",(0,s.kt)("a",{parentName:"p",href:"https://cplusplus.com/reference/set/set/"},"set"),"\u3002\u7136\u800c set \u5728\u57f7\u884c ",(0,s.kt)("em",{parentName:"p"},"Find insertion position of k")," \u64cd\u4f5c\u6642\u53ea\u80fd\u7528 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u7684\u6642\u9593\u53bb\u505a\u5230\u3002"),(0,s.kt)("p",null,"\u56e0\u6b64\uff0c\u9019\u88e1\u8981\u4ecb\u7d39\u7684\u662f",(0,s.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/ordered-set-gnu-c-pbds/"},"Policy based data structures: Ordered Set"),"\u3002\u4ed6\u6709\u63d0\u4f9b ",(0,s.kt)("inlineCode",{parentName:"p"},"find_by_order()")," \u64cd\u4f5c\uff0c\u4e14\u53ea\u9700 ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log\\thickspace n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," \u7684\u6642\u9593\u3002"),(0,s.kt)("h3",{id:"include-header-files"},"Include header files"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <ext/pb_ds/assoc_container.hpp> // Common file\n#include <ext/pb_ds/tree_policy.hpp> // Including tree_order_statistics_node_update\nusing namespace __gnu_pbds;\n")),(0,s.kt)("h3",{id:"define-type"},"Define type"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"using ordered_set = tree<int, null_type, less<int>, rb_tree_tag, tree_order_statistics_node_update>;\n")),(0,s.kt)("p",null,"\u9019\u88e1\u5b9a\u7fa9\u7684\u4e94\u7a2etype\u5206\u5225\u70ba:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"template<\ntypename Key, // Key type\ntypename Mapped, // Mapped-policy\ntypename Cmp_Fn = std::less<Key>, // Key comparison functor\ntypename Tag = rb_tree_tag, // Specifies which underlying data structure to use\ntemplate<typename Const_Node_Iterator, typename Node_Iterator, typename Cmp_Fn_, typename Allocator_> class Node_Update = null_node_update, // A policy for updating node invariants\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7b2c\u4e8c\u500b\u53ef\u4ee5\u60f3\u6210\u662f ",(0,s.kt)("inlineCode",{parentName:"li"},"map<type1, type2>")," \u88e1\u9762\u7684\u5169\u7a2etype\u3002\u82e5\u8981\u7576\u6210",(0,s.kt)("inlineCode",{parentName:"li"},"set"),"\u4f7f\u7528\u7684\u8a71\u5247\u7b2c\u4e8c\u500b\u5ba3\u544a\u70ba",(0,s.kt)("inlineCode",{parentName:"li"},"null_type"),"\u5c31\u597d\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u500b\u662fcomparison function\uff0c\u6c7a\u5b9a\u96c6\u5408\u5167\u7684\u503c\u8981\u5982\u4f55\u6392\u5e8f\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u500b\u662f\u4f7f\u7528\u7684tree structure\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7b2c\u4e94\u500b\u662f\u66f4\u65b0 node \u7684\u65b9\u6cd5\u3002")),(0,s.kt)("h3",{id:"ordered-set-1"},"Ordered set"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'ordered_set orderedSet;\n\n// 1. Insert operation\norderedSet.insert(2);\norderedSet.insert(-5);\norderedSet.insert(16);\norderedSet.insert(1048);\n\n// 2. Find the k-th element (start from 0) operation, and return its iterator.\ncout << *orderedSet.find_by_order(0) << endl; // -5\ncout << *orderedSet.find_by_order(1) << endl; // 2\n\n// 3. Erase operation\norderedSet.erase(2);\n\ncout << *orderedSet.find_by_order(1) << endl; // 16, because 2 is removed\ncout << (orderedSet.find(1048) != end(orderedSet)) << endl; // true\ncout << (end(orderedSet) == orderedSet.find_by_order(6)) << endl; // true, because 6 > orderedSet.size()\n\n// 4. Find insertion position of k. Return the number of item that is strictly smaller than "key"\ncout << orderedSet.order_of_key(-5) << endl;  // 0\ncout << orderedSet.order_of_key(1) << endl;   // 1\n')),(0,s.kt)("h3",{id:"ordered-multiset"},"Ordered multiset"),(0,s.kt)("p",null,"\u4e0a\u8ff0\u5b9a\u7fa9\u7684\u8cc7\u6599\u7d50\u69cb\u7121\u6cd5\u5b58\u53d6\u91cd\u8907\u5143\u7d20\uff0c\u8981\u80fd\u5b58\u53d6\u91cd\u8907\u5143\u7d20\u6709\u5169\u7a2e\u5be6\u4f5c\u65b9\u6cd5:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"pair<int, int>"))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pair<int, int>")," \u7b2c\u4e00\u500bkey\u4e00\u6a23\u5b58\u63d2\u5165\u7684\u503c\uff0c\u7b2c\u4e8c\u500bkey\u5b58index(\u540c\u500b\u503c\u7684index\u8981\u4e0d\u4e00\u6a23)\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"using ordered_multiset = tree<pair<int, int>, null_type, less<pair<int, int>>, rb_tree_tag, tree_order_statistics_node_update>;\n\nordered_multiset orderedMultiset;\n\norderedMultiset.insert({2, 0});\norderedMultiset.insert({2, 1});\norderedMultiset.insert({2, 2});\norderedMultiset.insert({3, 0});\n\ncout << orderedMultiset.find_by_order(2)->first << endl; // 2\n\n// Return all element that less than 3\ncout << orderedMultiset.order_of_key({3, -1}) << endl;  // 3\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Comparison function \u6539\u6210 ",(0,s.kt)("inlineCode",{parentName:"li"},"less_equal"))),(0,s.kt)("p",null,"\u96d6\u7136\u9019\u500b\u65b9\u6cd5\u770b\u8d77\u4f86\u6bd4\u8f03\u76f4\u89c0\uff0c\u4f46\u56e0\u70ba\u6539\u4e86 comparison function\uff0c\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"erase"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lower_bound"),"\u7b49\u64cd\u4f5c\u6703\u8ddf\u539f\u672c\u7684\u6709\u4e9b\u5dee\u8ddd\uff0c\u56e0\u6b64\u5efa\u8b70\u9084\u662f\u4f7f\u7528\u7b2c\u4e00\u7a2e\u65b9\u6cd5\u8f03\u597d\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"lower_bound")," \u8207 ",(0,s.kt)("inlineCode",{parentName:"p"},"upper_bound")," \u7684\u64cd\u4f5c\u4f3c\u4e4e\u6703\u53cd\u904e\u4f86\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"using ordered_multiset = tree<int, null_type, less_equal<int>, rb_tree_tag, tree_order_statistics_node_update>;\n\nordered_multiset orderedMultiset;\norderedMultiset.insert(2);\norderedMultiset.insert(2);\norderedMultiset.insert(3);\norderedMultiset.insert(2);\n\ncout << *orderedMultiset.find_by_order(2) << endl; // 2\n\n// Return all element that less than 3\ncout << orderedMultiset.order_of_key(3) << endl;  // 3\n\n// Erase becomes tricky since we can't directly remove by orderedMultiset.erase(2)\norderedMultiset.erase(orderedMultiset.find_by_order(orderedMultiset.order_of_key(2)));\n\n// output 2 2 3\nfor(auto &ele: orderedMultiset) {\n    cout << ele << ' ';\n}\n\n")),(0,s.kt)("h3",{id:"ordered-map"},"Ordered map"),(0,s.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\u8207 Ordered set \u985e\u4f3c\uff0c\u800c\u63d2\u5165\u7684\u64cd\u4f5c\u4e5f\u652f\u63f4\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"[]"),"\u53bb\u8a2d\u503c\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"using ordered_map = tree<int, int, less<int>, rb_tree_tag, tree_order_statistics_node_update>;\n\nordered_map orderedMap;\n\n// Insert element\norderedMap[3] = 4;\norderedMap[1] = 5;\norderedMap.insert({2, 888});\n\n// Erase element\norderedMap.erase(2);\n\nauto [key, value] = *orderedMap.find_by_order(1); \ncout << key << ' ' << value << '\\n'; // 3 4\n")),(0,s.kt)("h3",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://codeforces.com/blog/entry/11080"},"https://codeforces.com/blog/entry/11080")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/how-to-store-duplicate-elements-in-ordered-set-in-cpp/"},"https://www.geeksforgeeks.org/how-to-store-duplicate-elements-in-ordered-set-in-cpp/")))),(0,s.kt)(h,{value:"Python",label:"Python",mdxType:"TabItem"},(0,s.kt)("p",null,"Python\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://grantjenks.com/docs/sortedcontainers/sortedlist.html"},"SortedList")," \u4f86\u9054\u6210\u4ee5\u4e0a\u64cd\u4f5c\u3002"),(0,s.kt)("h3",{id:"download-package"},"Download package"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip install sortedcontainers\n")),(0,s.kt)("h3",{id:"sortedlist"},"SortedList"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from sortedcontainers import SortedList\nsl = SortedList()\nsl = SortedList([1, 2])\n\n# Add element\nsl.add(2)\nsl.update([3, 5])\n\n# Remove element\nsl.remove(3) # If value not exists, raise error\nsl.discard(3) # If value not exists, do nothing\n\n\n# Find kth element\nsecondElement = sl[1] \n\nprint(sl) # 1 2 2 5\n\n# Find insertion point\nsl.bisect_left(2) # return 1. If searched value exists, return leftmost. \nsl.bisect_right(2) # return 3. If searched value exists, return rightmost. \n\n\n# clear\nsl.clear()\n\n# Optional second parameter: key comparion function\nsl_rev = SortedList([1, 2], lambda x: -x)\nprint(sl_rev) # 2, 1\n")),(0,s.kt)("h3",{id:"sortedset"},"SortedSet"),(0,s.kt)("p",null,"SortedSet \u5efa\u7acb\u5728\u539f\u751f\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"set"),"\u8207 ",(0,s.kt)("inlineCode",{parentName:"p"},"SortedList"),"\u4e4b\u4e0a\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"set"),"\u7684\u65b9\u6cd5\uff0c\u4e14\u64c1\u6709",(0,s.kt)("inlineCode",{parentName:"p"},"set"),"\u4e0d\u80fd\u5b58\u91cd\u8907\u503c\u7684\u7279\u6027\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from sortedcontainers import SortedSet\nss1 = SortedSet()\n\nss1.add(2)\nss1.update([2, 3])\nprint(ss1) # 2, 3\n\nss2 = SortedSet([3, 4, 5])\n\n# Peform built-in set operation\nss1.union(ss2)\nprint(ss1) # 2 3 4 5\n")),(0,s.kt)("h3",{id:"sorteddict"},"SortedDict"),(0,s.kt)("p",null,"SortedSet \u5efa\u7acb\u5728\u539f\u751f\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"dict"),"\u8207 ",(0,s.kt)("inlineCode",{parentName:"p"},"SortedList"),"\u4e4b\u4e0a\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"dict"),"\u7684\u65b9\u6cd5\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from sortedcontainers import SortedDict\nsd = SortedDict()\nsd[1] = 2\nsd[2] = 3\n\nprint(sd.keys()) # 1, 2\n")),(0,s.kt)("h3",{id:"reference-1"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://grantjenks.com/docs/sortedcontainers/introduction.html"},"https://grantjenks.com/docs/sortedcontainers/introduction.html")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://grantjenks.com/docs/sortedcontainers/sortedlist.html"},"https://grantjenks.com/docs/sortedcontainers/sortedlist.html"))))))}v.isMDXComponent=!0}}]);