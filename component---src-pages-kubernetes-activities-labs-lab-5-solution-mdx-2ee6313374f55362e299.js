(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),b=a.n(r),l=a("NmYn"),c=a.n(l),o=a("OKom"),p=a("k4MR"),i=a("TSYQ"),s=a.n(i),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:s()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),b=r===n,l=new RegExp(n+"(?!-)"),o=a.replace(l,r);return Object(d.b)("li",{key:e,className:s()((t={},t[v.selectedItem]=b,t),v.listItem)},Object(d.b)(N.Link,{className:v.link,to:""+o},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},r))))))},n}(b.a.Component),g=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,b=e.Title,l=t.frontmatter,i=void 0===l?{}:l,s=t.relativePagePath,m=t.titleType,O=i.tabs,j=i.title,N=i.theme,v=i.description,k=i.keywords,w=n.data.site.pathPrefix,x=w?r.pathname.replace(w,""):r.pathname,T=O?x.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(d.b)(p.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:v,pageKeywords:k,titleType:m},Object(d.b)(u,{title:b?Object(d.b)(b,null):j,label:"label",tabs:O}),O&&Object(d.b)(f,{slug:x,tabs:O,currentTab:T}),Object(d.b)(g.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(y.a,{pageContext:t,location:r,slug:x,tabs:O,currentTab:T}),Object(d.b)(o.a,null))}},Ci2n:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},c={_frontmatter:l},o=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,b({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution"),Object(n.b)("p",null,"   Check ",Object(n.b)("inlineCode",{parentName:"p"},"STATUS")," column for not Ready"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"    kubectl get pods --all-namespaces\n")),Object(n.b)("p",null,"   Check the description of the deployment"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"```\nkubectl describe deployment hyper-drive\n```\n")),Object(n.b)("p",null,"   Save logs for a broken pod"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(n.b)("p",null,"   In the description you will see the following is wrong:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Selector and Label names do not match.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The Probe is TCP instead of HTTP Get.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The Service Port is 80 instead of 8080."),Object(n.b)("p",{parentName:"li"}," To fix probe, can’t kubectl edit, need to delete and recreate the deployment"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml\n")),Object(n.b)("p",{parentName:"li"}," Delete pod"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{}),"kubectl delete deployment <deployment name> -n <namespace>\n")),Object(n.b)("p",{parentName:"li"}," Can also use ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl replace")),Object(n.b)("p",{parentName:"li"}," Edit yaml, and apply"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{}),"kubectl apply -f hyper-drive.yml -n <namespace>\n")),Object(n.b)("p",{parentName:"li"}," Verify"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace>\n")))))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-5-solution-mdx-2ee6313374f55362e299.js.map