(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),s=a("NmYn"),o=a.n(s),l=a("OKom"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,o=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),y=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),i=r===n,s=new RegExp(n+"(?!-)"),l=a.replace(s,r);return Object(d.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(d.b)(f.Link,{className:y.link,to:""+l},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},r))))))},n}(i.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,f=b.theme,y=b.description,w=b.keywords,x=n.data.site.pathPrefix,C=x?r.pathname.replace(x,""):r.pathname,k=m?C.split("/").slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:f,pageTitle:O,pageDescription:y,pageKeywords:w,titleType:u},Object(d.b)(h,{title:i?Object(d.b)(i,null):O,label:"label",tabs:m}),m&&Object(d.b)(N,{slug:C,tabs:m,currentTab:k}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:r,slug:C,tabs:m,currentTab:k}),Object(d.b)(l.a,null))}},ZFaO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},o={_frontmatter:s},l=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Container Health Issues"),Object(n.b)("p",null,"The first issue is caused by application instances entering an unhealthy state and responding to user requests with error messages. Unfortunately, this state does not cause the container to stop, so the Kubernetes cluster is not able to detect this state and restart the container. Luckily, the application has an internal endpoint that can be used to detect whether or not it is healthy. This endpoint is ",Object(n.b)("inlineCode",{parentName:"p"},"/healthz")," on port ",Object(n.b)("inlineCode",{parentName:"p"},"8080"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Your first task will be to ",Object(n.b)("em",{parentName:"li"},"create a probe")," to check this endpoint periodically.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If the endpoint returns an ",Object(n.b)("strong",{parentName:"li"},"error")," or ",Object(n.b)("strong",{parentName:"li"},"fails")," to respond, the probe will detect this and the cluster will restart the container.")))),Object(n.b)("h3",null,"Container Startup Issues"),Object(n.b)("p",null,"Another issue is caused by new pods when they are starting up. The application takes a few seconds after startup before it is ready to service requests. As a result, some users are getting error message during this brief time."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To fix this, you will need to ",Object(n.b)("em",{parentName:"p"},"create another probe"),". To detect whether the application is ",Object(n.b)("inlineCode",{parentName:"p"},"ready"),", the probe should simply make a request to the root endpoint, ",Object(n.b)("em",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"em"},"/ready"),", on port ",Object(n.b)("inlineCode",{parentName:"em"},"8080")),". If this request succeeds, then the application is ready.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Also set a ",Object(n.b)("inlineCode",{parentName:"p"},"initial delay")," of ",Object(n.b)("inlineCode",{parentName:"p"},"5 seconds")," for the probes."))),Object(n.b)("p",null,"Here is the Pod yaml file,  ",Object(n.b)("strong",{parentName:"p"},"add")," the probes, then ",Object(n.b)("strong",{parentName:"p"},"create")," the pod in the cluster to test it."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n")))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-4-index-mdx-6c6a8e10561f16ddefcf.js.map