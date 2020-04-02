(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,n,t){"use strict";t("KKXr"),t("pIFo");var a=t("pOBw"),o=t("q1tI"),r=t.n(o),c=t("NmYn"),l=t.n(c),b=t("OKom"),i=t("k4MR"),p=t("TSYQ"),s=t.n(p),d=t("QH2O"),m=t("qKvR"),u=function(e){var n,t=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(m.b)("div",{className:s()(d.pageHeader,(n={},n[d.withTabs]=o.length,n))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},t)))))},O=t("pEPl"),j=t("BAC9"),g=function(e){var n=e.relativePagePath,t=e.repository,a=O.data.site.siteMetadata.repository,o=t||a,r=o.baseUrl,c=o.subDirectory,l=r+"/edit/"+o.branch+c+"/src/pages"+n;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},v=t("FCXl"),y=(t("Oyvg"),t("Wbzz")),h=t("I8xM");var f=function(e){var n,t;function a(){return e.apply(this,arguments)||this}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.tabs,t=e.slug,a=t.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var n,o=l()(e,{lower:!0}),r=o===a,c=new RegExp(a+"(?!-)"),b=t.replace(c,o);return Object(m.b)("li",{key:e,className:s()((n={},n[h.selectedItem]=r,n),h.listItem)},Object(m.b)(y.Link,{className:h.link,to:""+b},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:h.list},o))))))},a}(r.a.Component),x=t("MjG9");n.a=function(e){var n=e.pageContext,t=e.children,o=e.location,r=e.Title,c=n.frontmatter,p=void 0===c?{}:c,s=n.relativePagePath,d=n.titleType,O=p.tabs,j=p.title,y=p.theme,h=p.description,N=p.keywords,k=a.data.site.pathPrefix,P=k?o.pathname.replace(k,""):o.pathname,w=O?P.split("/").slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(m.b)(i.a,{tabs:O,homepage:!1,theme:y,pageTitle:j,pageDescription:h,pageKeywords:N,titleType:d},Object(m.b)(u,{title:r?Object(m.b)(r,null):j,label:"label",tabs:O}),O&&Object(m.b)(f,{slug:P,tabs:O,currentTab:w}),Object(m.b)(x.a,{padded:!0},t,Object(m.b)(g,{relativePagePath:s})),Object(m.b)(v.a,{pageContext:n,location:o,slug:P,tabs:O,currentTab:w}),Object(m.b)(b.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":""}}}')},zSoP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),o=t("013z");t("qKvR");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)}},b=l("Accordion"),i=l("AccordionItem"),p={_frontmatter:c},s=o.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(a.b)(s,r({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Solutions"),Object(a.b)(b,{mdxType:"Accordion"},Object(a.b)(i,{title:"Pod Creation",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: web\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      command: ["nginx"]\n      args: ["-g", "daemon off;", "-q"]\n      ports:\n      - containerPort: 80\n'))),Object(a.b)(i,{title:"Pod Configuration",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yoda-service-config\ndata:\n  yoda.cfg: |-\n    yoda.baby.power=100000000\n    yoda.strength=10\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: yoda-db-password\nstringData:\n  password: 0penSh1ftRul3s!\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: yoda-service\nspec:\n  serviceAccountName: yoda-svc\n  containers:\n  - name: yoda-service\n    image: bitnami/nginx\n    volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yoda-service\n    env:\n    - name: DB_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: yoda-db-password\n          key: password\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  volumes:\n  - name: config-volume\n      configMap:\n        name: yoda-service-config\n'))),Object(a.b)(i,{title:"Multiple Containers",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: vader-service-ambassador-config\ndata:\n  haproxy.cfg: |-\n    global\n        daemon\n        maxconn 256\n\n    defaults\n        mode http\n        timeout connect 5000ms\n        timeout client 50000ms\n        timeout server 50000ms\n\n    listen http-in\n        bind *:80\n        server server1 127.0.0.1:8989 maxconn 32\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: vader-service\nspec:\n  containers:\n    - name: millennium-falcon\n      image: ibmcase/millennium-falcon:1\n    - name: haproxy-ambassador\n      image: haproxy:1.7\n      ports:\n      - containerPort: 80\n      volumeMounts:\n      - name: config-volume\n        mountPath: /usr/local/etc/haproxy\n  volumes:\n  - name: config-volume\n    configMap:\n      name: vader-service-ambassador-config\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\nname: busybox\nspec:\ncontainers:\n- name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(a.b)("p",null,"   Check it with"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=jsonpath='{.status.podIP}'):80\n"))),Object(a.b)(i,{title:"Probes",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n    livenessProbe:\n      httpGet:\n        path: /healthz\n        port: 8080\n    readinessProbe:\n      httpGet:\n        path: /ready\n        port: 8080\n      initialDelaySeconds: 5\n"))),Object(a.b)(i,{title:"Debugging",mdxType:"AccordionItem"},Object(a.b)("p",null,"   Check ",Object(a.b)("inlineCode",{parentName:"p"},"STATUS")," column for not Ready"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get pods --all-namespaces\n")),Object(a.b)("p",null,"   Check the description of the deployment"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl describe deployment hyper-drive\n")),Object(a.b)("p",null,"   Save logs for borken pod"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(a.b)("p",null,"   In the deployment’s description you will see the following is wrong:"),Object(a.b)("ul",null,Object(a.b)("li",null,"Selector and Label names do not match."),Object(a.b)("li",null,"The Probe is TCP instead of HTTP Get."),Object(a.b)("li",null,"The Service Port is 80 instead of 8080.")),"To fix probe, can't kubectl edit, need to delete and recreate the deployment",Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml\n")),Object(a.b)("p",null,"   Delete pod"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl delete deployment <deployment name> -n <namespace>\n")),Object(a.b)("p",null,"   Edit yaml, and apply"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl apply -f hyper-drive.yml -n <namespace>\n")),Object(a.b)("p",null,"   Verify"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get deployment <deployment name> -n <namespace>\n"))),Object(a.b)(i,{title:"Rolling Updates",mdxType:"AccordionItem"},Object(a.b)("p",null,"  Update the deployment to the new version like so:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl set image deployment/jedi-deployment jedi-ws=bitnamy/nginx:1.18.1 --record\n")),Object(a.b)("p",null,"  Check the progress of the rolling update:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")),Object(a.b)("p",null,"  In another terminal window"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get pods -w\n")),Object(a.b)("p",null,"  Get a list of previous revisions."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl rollout history deployment/jedi-deployment\n")),Object(a.b)("p",null,"  Undo the last revision."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl rollout undo deployment/jedi-deployment\n")),Object(a.b)("p",null,"  Check the status of the rollout."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n"))),Object(a.b)(i,{title:"Cron Jobs",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: xwing-cronjob\nspec:\n  schedule: "*/1 * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: xwing-status\n            image: ibmcase/xwing-status:1.0\n            args:\n            - /usr/sbin/xwing-status.sh\n          restartPolicy: OnFailure\n')),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"kubectl get cronjob xwing-cronjob\n"))),Object(a.b)(i,{title:"Services",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Service\nmetadata:\n    name: jedi-svc\nspec:\n    type: NodePort\n    selector:\n        app: jedi\n    ports:\n    - protocol: TCP\n        port: 80\n        targetPort: 8080\n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: v1\nkind: Service\nmetadata:\nname: yoda-svc\nspec:\ntype: ClusterIP\nselector:\n    app: yoda\nports:\n- protocol: TCP\n    port: 80\n    targetPort: 8080\n"))),Object(a.b)(i,{title:"Persistent Volumes",mdxType:"AccordionItem"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'    apiVersion: v1\n    kind: PersistentVolume\n    metadata:\n      name: postgresql-pv\n    spec:\n      storageClassName: localdisk\n      capacity:\n        storage: 1Gi\n      accessModes:\n        - ReadWriteOnce\n      hostPath:\n        path: "/mnt/data"\n')),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"    apiVersion: v1\n    kind: PersistentVolumeClaim\n    metadata:\n      name: postgresql-pv-claim\n    spec:\n      storageClassName: localdisk\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Mi\n    \n")),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: postgresql-pod\n    spec:\n      containers:\n      - name: postgresql\n        image: bitnami/postgresql\n        ports:\n        - containerPort: 5432\n        env:\n        - name: MYSQL_ROOT_PASSWORD\n          value: password\n        volumeMounts:\n        - name: sql-storage\n          mountPath: /bitnami/postgresql/\n      volumes:\n      - name: sql-storage\n        persistentVolumeClaim:\n          claimName: postgresql-pv-claim\n    \n")),Object(a.b)("hr",null))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-solutions-index-mdx-85b2de2d0565c4a6a241.js.map