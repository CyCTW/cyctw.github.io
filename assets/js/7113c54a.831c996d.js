"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={},a="Z algorithm",o={unversionedId:"Algorithms/strings/z-algorithm",id:"Algorithms/strings/z-algorithm",title:"Z algorithm",description:"Z algorithm \u662f\u4e00\u500b\u7528\u65bc\u5b57\u4e32\u8655\u7406\u7684\u6f14\u7b97\u6cd5\u3002",source:"@site/docs/Algorithms/strings/z-algorithm.md",sourceDirName:"Algorithms/strings",slug:"/Algorithms/strings/z-algorithm",permalink:"/Algorithms/strings/z-algorithm",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Algorithms/strings/z-algorithm.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"KMP algorithm",permalink:"/Algorithms/strings/kmp"},next:{title:"two_pointer",permalink:"/Algorithms/two_pointer"}},u={},p=[{value:"\u8f38\u5165/\u8f38\u51fa",id:"\u8f38\u5165\u8f38\u51fa",level:2},{value:"\u4f7f\u7528\u60c5\u5883",id:"\u4f7f\u7528\u60c5\u5883",level:2},{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u5be6\u4f5c",id:"\u5be6\u4f5c",level:2},{value:"Naive \u6f14\u7b97\u6cd5",id:"naive-\u6f14\u7b97\u6cd5",level:3},{value:"\u512a\u5316\u5f8c\u6f14\u7b97\u6cd5",id:"\u512a\u5316\u5f8c\u6f14\u7b97\u6cd5",level:3},{value:"Code",id:"code",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"z-algorithm"},"Z algorithm"),(0,i.kt)("p",null,"Z algorithm \u662f\u4e00\u500b\u7528\u65bc\u5b57\u4e32\u8655\u7406\u7684\u6f14\u7b97\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u8f38\u5165\u8f38\u51fa"},"\u8f38\u5165/\u8f38\u51fa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input: \u5b57\u4e32s (\u9577\u5ea6\u70ban)"),(0,i.kt)("li",{parentName:"ul"},"Output: \u9663\u5217Z (\u9577\u5ea6\u70ban)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Z","[i]",": \u5f9eindex i \u958b\u59cb\uff0c\u8207 s \u7684 prefix\u76f8\u540c\u7684\u6700\u9577\u9577\u5ea6\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u6642\u9593\u8907\u96dc\u5ea6: O(n)")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u60c5\u5883"},"\u4f7f\u7528\u60c5\u5883"),(0,i.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Input: "aaaa", Output: ',"[0, 4, 3, 2, 1]")),(0,i.kt)("h2",{id:"\u5be6\u4f5c"},"\u5be6\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b9a\u7fa9Z","[0]"," \u70ba 0")),(0,i.kt)("h3",{id:"naive-\u6f14\u7b97\u6cd5"},"Naive \u6f14\u7b97\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"// \u8907\u96dc\u5ea6: O(n^2)\nvoid z_func(string s) {\n    int n = s.size();\n    vector<int> z(n);\n    for(int i = 1; i < n; i++) {\n        while(i + z[i] < n && s[z[i]] == s[i + z[i]]) {\n            z[i]++;\n        }\n    }\n    return z;\n}\n")),(0,i.kt)("h3",{id:"\u512a\u5316\u5f8c\u6f14\u7b97\u6cd5"},"\u512a\u5316\u5f8c\u6f14\u7b97\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"index i \u5f9e\u5c0f\u9020\u8a2a\u5230\u5927\uff0c\u4ee3\u8868current index\uff0c\u7528\u4f86\u8a08\u7b97Z","[i]"),(0,i.kt)("li",{parentName:"ul"},"\u7dad\u8b77index [l, r)\uff0c\u4ee3\u8868\u76ee\u524d\u6f14\u7b97\u6cd5\u627e\u5230\u7684\u6700\u53f3\u908a\u7684prefix\u7684\u7bc4\u570d")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5206\u6210\u5e7e\u7a2ecase\u4f86\u8a0e\u8ad6:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"i >= r"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u8868\u76ee\u524d\u4f4d\u7f6e\u8d85\u904e\u7d00\u9304\u7684prefix\u7bc4\u570d\uff0c\u9808\u57f7\u884cnaive \u6f14\u7b97\u6cd5\u7b97\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"z[i]")," \u7684\u503c\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: \u57f7\u884cnaive\u6f14\u7b97\u6cd5\u5f8c\uff0cr\u7684\u4f4d\u7f6e\u53ef\u80fd\u6703\u8d85\u904ei\u3002"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"i < r"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76ee\u524dindex\u5c0f\u65bc\u6700\u53f3\u908aprefix\u7684\u7bc4\u570d\uff0c\u53ef\u4ee5\u7528\u5df2\u77e5\u7684\u8cc7\u8a0a\u5e6b\u52a9\u8a08\u7b97z","[i]","\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u89c0\u5bdf\u767c\u73fe ",(0,i.kt)("inlineCode",{parentName:"li"},"s[l:r]")," \u7b49\u65bc ",(0,i.kt)("inlineCode",{parentName:"li"},"s[0:r - l]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u4ee3\u8868 ",(0,i.kt)("inlineCode",{parentName:"li"},"s[i:r] = s[i - l: r - l]")),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u53ef\u4ee5\u5f9e ",(0,i.kt)("inlineCode",{parentName:"li"},"z[i] = z[i - l]")," \u958b\u59cb\u8a08\u7b97"))),(0,i.kt)("li",{parentName:"ul"},"\u4f46z","[i-l]","\u5728\u7576 i \u63a5\u8fd1\u5b57\u4e32\u7d50\u5c3e\u6642\u4e0b\u4f5c\u70ba\u8d77\u59cb\u503c\u53ef\u80fd\u6703\u592a\u5927",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"li"},"z[i]")," \u7684\u8d77\u59cb\u503c\u9808\u8207 ",(0,i.kt)("inlineCode",{parentName:"li"},"r - i")," \u53d6mininum\u3002")))))))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"// \u8907\u96dc\u5ea6: O(n)\nvector<int> z_function(string s) {\n    int n = s.size();\n\n    vector<int> z(n);\n    int l = 0, r = 0;\n    for(int i = 1; i < n; i++) {\n        if (i < r) {\n            z[i] = min(r - i, z[i - l]);\n        }\n        \n        // run trival algo\n        while(i + z[i] < n && s[z[i]] == s[i + z[i]]) {\n            z[i]++;\n        }\n\n        if (i + z[i] > r) {\n            l = i;\n            r = i + z[i];\n        }\n    }\n    return z;\n}\n\n")))}s.isMDXComponent=!0}}]);