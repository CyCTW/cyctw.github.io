"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={},a="143. Reorder List",o={unversionedId:"Algorithms/Leetcode/Reorder-List",id:"Algorithms/Leetcode/Reorder-List",title:"143. Reorder List",description:"Problem Description",source:"@site/docs/Algorithms/Leetcode/143-Reorder-List.md",sourceDirName:"Algorithms/Leetcode",slug:"/Algorithms/Leetcode/Reorder-List",permalink:"/Algorithms/Leetcode/Reorder-List",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/Algorithms/Leetcode/143-Reorder-List.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{},sidebar:"mySidebar",previous:{title:"Algorithms",permalink:"/category/algorithms"},next:{title:"3085. Minimum deletions to make string k-special",permalink:"/Algorithms/Leetcode/Minimum deletions-to-make-string-k-special"}},s={},p=[{value:"Problem Description",id:"problem-description",level:2},{value:"Thoughts",id:"thoughts",level:2},{value:"Solution",id:"solution",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"143-reorder-list"},"143. Reorder List"),(0,i.kt)("h2",{id:"problem-description"},"Problem Description"),(0,i.kt)("p",null,"You are given the head of a singly linked-list. The list can be represented as:"),(0,i.kt)("p",null,"L0 \u2192 L1 \u2192 \u2026 \u2192 Ln - 1 \u2192 Ln\nReorder the list to be on the following form:"),(0,i.kt)("p",null,"L0 \u2192 Ln \u2192 L1 \u2192 Ln - 1 \u2192 L2 \u2192 Ln - 2 \u2192 \u2026\nYou may not modify the values in the list's nodes. Only nodes themselves may be changed."),(0,i.kt)("h2",{id:"thoughts"},"Thoughts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u984c\u76ee\u8aaa\u8981 in-place \u4fee\u6539linked list"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8a66\u8457\u76f4\u63a5\u4fee\u6539linked list\uff0c\u505a\u5230 O(1) \u7a7a\u9593\u8907\u96dc\u5ea6\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8981\u628a\u9806\u5e8f\u5f9e 1->2->3->4\uff0c\u8b8a\u62101->4->2->3\uff0c\u5047\u8a2d\u8cc7\u6599\u7d50\u69cb\u662fArray\u4e0d\u662flinked list\uff0c\u6700\u76f4\u89c0\u7684\u60f3\u6cd5\u662f\u5efa\u5169\u500b iterator\uff0c\u4e00\u500b\u5f9e\u982d\u958b\u59cbiterate\uff0c\u53e6\u4e00\u500b\u5f9e\u5c3e\u958b\u59cbiterate\uff0c\u5169\u500b\u5f7c\u6b64\u8f2a\u6d41\u63d2\u5165\u8cc7\u6599\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f46\u4eca\u5929\u662f singly linked list\uff0c\u5f9e\u982diterate\u505a\u5f97\u5230\u4f46\u5f9e\u5c3e iterate \u505a\u4e0d\u5230\uff0c\u9664\u975e\u6709\u505a\u4e00\u4e9b\u6539\u8b8a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728O(1)\u7a7a\u9593\u8907\u96dc\u5ea6\u7684\u9650\u5236\u4e0b\uff0c\u53ef\u80fd\u7684\u505a\u6cd5\u662f",(0,i.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u4fee\u6539\u5f8c\u534a\u6bb5\u7684Linked list\uff0c\u8b93\u4ed6\u53cd\u904e\u4f86\u3002")),(0,i.kt)("li",{parentName:"ul"},"E.g. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1->2->3->4 => 1 -> 2,  3 <- 4"),(0,i.kt)("li",{parentName:"ul"},"1->2->3->4->5 => 1 -> 2 -> 3,  4 <- 5"))),(0,i.kt)("li",{parentName:"ul"},"\u53cd\u904e\u4f86\u5f8c\uff0c\u5c31\u53ef\u4ee5\u505a\u5230\u4e0a\u8ff0\u8b1b\u7684\u4e8b\u60c5\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u53cd\u904e\u4f86\u5f8c\u8981\u8003\u616e\u5982\u4f55\u5207\u958b\u9019\u5169\u500blinked list\u6703\u6bd4\u8f03\u597d\u505a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5047\u8a2d\u5207\u5b8c\u5f8c\u8981\u958b\u59cb\u5efalinked list\uff0c\u7b97\u6cd5\u53ef\u80fd\u6703\u9577\u9019\u6a23:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"while head and tail:\n  tmp1 = head.next\n  tmp2 = tail.next\n\n  # Start linking\n  head.next = tail\n  tail.next = tmp1\n\n  # To next\n  head = tmp1\n  tail = tmp2\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6b64\u6642\u8981\u601d\u8003\u524d\u4e00\u6b65\u9a5f\u5982\u4f55\u5207linked list\u6703\u8b93\u9019\u500b\u7b97\u6cd5\u6bd4\u8f03\u597d\u8655\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u6642\uff0c\u4e5f\u9700\u8003\u616elinked list\u9577\u5ea6\u70ba\u5947\u6578\u6216\u5076\u6578\u7684\u60c5\u6cc1\u4e0b\u8981\u600e\u9ebc\u8655\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u958bcase\u8655\u7406\u6703\u6bd4\u8f03\u5bb9\u6613\u60f3"))),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u8981\u4e0d\u5206\u958bcase\u8655\u7406(\u5947\u6578\u5076\u6578case\u4e00\u8d77\u8655\u7406)\uff0c\u6709\u500b\u65b9\u6cd5\u662f\u5728\u627e\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"mid"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"mid_next"),"\u5f8c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u628a",(0,i.kt)("inlineCode",{parentName:"li"},"mid.next"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mid_next.next")," \u8a2d\u70ba\u7a7a\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u5c0d\u5076\u6578\u9577\u5ea6\u7684case\u4f86\u8aaa\uff0c\u9019\u88e1\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"mid"),"\u70ba\u4e2d\u9593\u9760\u5de6\u908a\u7684\u9ede\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u50cf\u662f\u4e0a\u8ff0\u4f8b\u5b50\u7684\u5207\u6cd5\u5c31\u70ba\u6b64\u7a2e\u5207\u6cd5\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u9019\u6a23\u8a2d\u7f6e\u5f8c\u57f7\u884c\u4e0a\u8ff0\u7684\u6f14\u7b97\u6cd5\u4fbf\u4e0d\u6703\u6709\u554f\u984c\u4e86\u3002")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        """\n        Do not return anything, modify head in-place instead.\n        """\n        # first reverse right-half, and iterate and link\n        slow, fast = head, head\n        while fast.next and fast.next.next:\n            slow = slow.next\n            fast = fast.next.next\n\n        # slow now is in middle\n        # From slow, start reverse\n        mid = slow.next\n        prev = None\n        while mid:\n            tmp = mid.next\n            mid.next = prev\n            prev = mid\n            mid = tmp\n        # Cut off two linkedlist\n        slow.next = None\n        tail = prev\n\n        ans = head\n        # Start re-linking\n        while head and tail:\n            tmp1 = head.next\n            tmp2 = tail.next\n\n            head.next = tail\n            tail.next = tmp1\n            \n            head = tmp1\n            tail = tmp2\n        return ans\n')))}d.isMDXComponent=!0}}]);