(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),c=a.n(r),o=a("NmYn"),i=a.n(o),l=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},O=a("pEPl"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,c=r.baseUrl,o=r.subDirectory,i=c+"/edit/"+r.branch+o+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},v=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),h=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),c=r===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,r);return Object(d.b)("li",{key:e,className:p()((t={},t[h.selectedItem]=c,t),h.listItem)},Object(d.b)(y.Link,{className:h.link,to:""+l},e))}));return Object(d.b)("div",{className:h.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:h.list},r))))))},n}(c.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,O=b.tabs,j=b.title,y=b.theme,h=b.description,N=b.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,P=O?k.split("/").slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:O,homepage:!1,theme:y,pageTitle:j,pageDescription:h,pageKeywords:N,titleType:u},Object(d.b)(m,{title:c?Object(d.b)(c,null):j,label:"label",tabs:O}),O&&Object(d.b)(f,{slug:k,tabs:O,currentTab:P}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(v.a,{pageContext:t,location:r,slug:k,tabs:O,currentTab:P}),Object(d.b)(l.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')},ypvJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},l=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,c({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"Setup minikube"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{}),"minikube start --network-plugin=cni\nkubectl apply -f https://docs.projectcalico.org/v3.9/manifests/calico.yaml\nkubectl -n kube-system set env daemonset/calico-node FELIX_IGNORELOOSERPF=true\nkubectl -n kube-system get pods | grep calico-node\n")),Object(n.b)("p",null,"Create secured pod"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-secure-pod\n  labels:\n    app: secure-app\nspec:\n  containers:\n  - name: nginx\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n")),Object(n.b)("p",null,"Create client pod"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-client-pod\nspec:\n  containers:\n  - name: busybox\n    image: radial/busyboxplus:curl\n    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]\n')),Object(n.b)("p",null,"Create a policy to allow only client pods with label ",Object(n.b)("inlineCode",{parentName:"p"},'allow-access: "true"')," to access secure pod"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-9-index-mdx-ada961d92f9bf17081a7.js.map