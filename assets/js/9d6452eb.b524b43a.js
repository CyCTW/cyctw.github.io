"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Basic certification Notes",l={unversionedId:"CommunicationProtocol/GraphQL/ApolloCertification/Basic",id:"CommunicationProtocol/GraphQL/ApolloCertification/Basic",title:"Basic certification Notes",description:"- schema first design",source:"@site/docs/CommunicationProtocol/GraphQL/ApolloCertification/Basic.md",sourceDirName:"CommunicationProtocol/GraphQL/ApolloCertification",slug:"/CommunicationProtocol/GraphQL/ApolloCertification/Basic",permalink:"/CommunicationProtocol/GraphQL/ApolloCertification/Basic",draft:!1,editUrl:"https://github.com/CyCTW/cyctw.github.io/tree/master/docs/CommunicationProtocol/GraphQL/ApolloCertification/Basic.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Apollo Client Cache",permalink:"/CommunicationProtocol/GraphQL/ApolloCache"},next:{title:"Lift-off-II_Resolvers",permalink:"/CommunicationProtocol/GraphQL/ApolloCertification/Lift-off-II_Resolvers"}},p={},c=[{value:"Define Schema",id:"define-schema",level:3},{value:"Query type",id:"query-type",level:3},{value:"Backend",id:"backend",level:2},{value:"Start server",id:"start-server",level:3},{value:"Create Mock data",id:"create-mock-data",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-certification-notes"},"Basic certification Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"schema first design"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Define the schema"),(0,r.kt)("li",{parentName:"ol"},"Backend implementation on GQL Server"),(0,r.kt)("li",{parentName:"ol"},"Frontend Implementation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Benefit:   ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reduce total development time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Frontend can work as soon as schema is defined."),(0,r.kt)("li",{parentName:"ul"},"Backend develop API based on same schema"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Think about data before defining schema"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In a graph, define:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"node as a object"),(0,r.kt)("li",{parentName:"ul"},"edge as a relationship between object"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Schema"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A contract between server and client:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define what GraphQL API can and can't do"),(0,r.kt)("li",{parentName:"ul"},"how clients can request or change data"),(0,r.kt)("li",{parentName:"ul"},"Abstraction that hide backend implementation."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Schema definition language (SDL)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Schema is a collection of objects that contain fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each field can be scalar or another object."),(0,r.kt)("p",{parentName:"li"},"E.g. Code challange I: "),(0,r.kt)("p",{parentName:"li"},"Define a SpaceCat type with the following fields: name of type String (non null), age of type Int, and missions of type List of Mission"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"type SpaceCat {\n    name: String!\n    age: Int\n    missions: [Mission]\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comments"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Can be oneline "" or multiline """comment"""')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"E.g. Code challange II: "),(0,r.kt)("p",{parentName:"li"},'Add a block description for the SpaceCat type (triple "double quotes") and a normal description for the name field.'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-=graphql"},'"""\nThis is a SpaceCat\n"""\ntype SpaceCat {\n    "This is name"\n    name: String!\n    age: Int\n    missions: [Mission]\n}\n')))))),(0,r.kt)("h3",{id:"define-schema"},"Define Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"A track is a group of Modules that teaches about a specific topic"\ntype Track {\n  id: ID!\n  title: String!\n  author: Author!\n  thumbnail: String\n  length: Int\n  modulesCount: Int\n}\n')),(0,r.kt)("h3",{id:"query-type"},"Query type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The fields of Query type are entry points into the rest of our schema."),(0,r.kt)("li",{parentName:"ul"},"This is top-level fields that client can query for.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type Query {\n  "Get tracks array for homepage grid"\n  tracksForHome: [Track!]!\n}\n')),(0,r.kt)("p",null,"Code Challenge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a full schema with: a type Query containing a field spaceCats to fetch a List of SpaceCat. A type SpaceCat with its subfields: id of type ID!, name of type String!, age of type Int and missions of type List of Mission. Finally define the Mission type with its subfields: id of type ID!, name of type String!, and description of type String!.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Query {\n  spaceCats: [SpaceCat]\n}\n\ntype SpaceCat {\n  id: ID!\n  name: String!\n  age: Int\n  missions: [Mission]\n}\n\ntype Mission {\n  id: ID!\n  name: String!\n  description: String!\n}\n")),(0,r.kt)("h2",{id:"backend"},"Backend"),(0,r.kt)("h3",{id:"start-server"},"Start server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Import schema and start server",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function startApolloServer() {\n    const server = new ApolloServer({      typeDefs });\n    const { url } = await startStandaloneServer(server);\n}\n")))),(0,r.kt)("h3",{id:"create-mock-data"},"Create Mock data"))}m.isMDXComponent=!0}}]);