(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),c=a("NmYn"),b=a.n(c),o=a("OKom"),l=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},O=a("pEPl"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,b=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),N=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0}),i=r===n,c=new RegExp(n+"(?!-)"),o=a.replace(c,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(N.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},n}(i.a.Component),k=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,O=s.tabs,j=s.title,N=s.theme,f=s.description,w=s.keywords,y=n.data.site.pathPrefix,x=y?r.pathname.replace(y,""):r.pathname,C=O?x.split("/").slice(-1)[0]||b()(O[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:O,homepage:!1,theme:N,pageTitle:j,pageDescription:f,pageKeywords:w,titleType:d},Object(m.b)(u,{title:i?Object(m.b)(i,null):j,label:"label",tabs:O}),O&&Object(m.b)(v,{slug:x,tabs:O,currentTab:C}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:p})),Object(m.b)(h.a,{pageContext:t,location:r,slug:x,tabs:O,currentTab:C}),Object(m.b)(o.a,null))}},o6fq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},o=b("AnchorLinks"),l=b("AnchorLink"),s={_frontmatter:c},p=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"AnchorLinks"},Object(n.b)(l,{mdxType:"AnchorLink"},"Containers"),Object(n.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(n.b)("h1",null,"Containers"),Object(n.b)("p",null,"Containers are a standard way to package an application and all its dependencies so that it can be moved between environments and run without change. They work by hiding the differences between applications inside the container so that everything outside the container can be standardized."),Object(n.b)("p",null,"For example, Docker created standard way to create images for Linux Containers."),Object(n.b)("h2",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Presentation: ",Object(n.b)("a",i({parentName:"li"},{href:"/slides/02-Containers-Basics.pdf"}),"Containers Basics"))),Object(n.b)("h2",null,"References"),Object(n.b)("h3",null,"Docker Commands"),Object(n.b)("p",null,"Below are some commands we use often on Docker."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"# Know docker version\ndocker -version\n\n# Run a container\ndocker run <image>\n\n# List containers running\ndocker ps\n\n# Stop a container\ndocker stop <container-name|container-id>\n\n# Remove a container\ndocker rm <container-name|container-id>\n\n# Login into registry\ndocker login\n\n# Build an image\ndocker build <image_name>:<tag> .\n\n# Pull the image\ndocker pull <image_name>:<tag>\n\n# Push an image\ndocker push <image_name>:<tag>\n\n# List images\ndocker images\n")),Object(n.b)("h2",null,"Activities"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",i({parentName:"tr"},{align:"left"}),"Link"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"Time"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:"left"})),Object(n.b)("td",i({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"What is a Container?"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container?"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container",target:"_blank"},"Understand Containers")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"10 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"What is an Image?"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container Image?"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container-image",target:"_blank"},"Container Images")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"10 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Docker Basics"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Set of walkthroughs that cover docker basics"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",{href:"https://www.katacoda.com/courses/docker",target:"_blank"},"Docker Basics")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"10 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:"left"})),Object(n.b)("td",i({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"Docker Lab"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Running a Sample Application on Docker"),Object(n.b)("td",i({parentName:"tr"},{align:"left"}),Object(n.b)("a",i({parentName:"td"},{href:"./containers/activities/"}),"Docker Lab")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"30 min")))),Object(n.b)("p",null,"Once you have completed these tasks, you should have a base understanding of containers and how to use Docker."))}d.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-containers-index-mdx-68c711f972c651d04971.js.map