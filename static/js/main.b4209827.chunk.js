(this["webpackJsonpmy-contribution"]=this["webpackJsonpmy-contribution"]||[]).push([[0],{113:function(e,t,a){e.exports=a(157)},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(118),a(119),a(98)),i=a(29),s=(a(120),a(85)),u=a.n(s),m=function(){return r.a.createElement("div",{className:"page_not_Found_main"},r.a.createElement("img",{src:u.a,alt:"wrongPage"}),r.a.createElement("h2",null,"OUPS ! La page que tu recherche n'existe pas !"))},p=a(61),d=a.n(p),f=a(86),h=a(16),g=a(15),E=a(187),b=a(199),v=a(200),O=a(194),y=a(201),j=a(96),w=a.n(j),_=a(97),S=a.n(_),k=a(205),N=a(100),x=a(190),P=(a(122),a(89)),I=a.n(P),C=a(91),B=a.n(C),T=a(62);a(123),a(125);a(128).config();T.initializeApp({apiKey:"AIzaSyBBC3jq66M04gzyGxT1IpZW3rxt_LFXENk",authDomain:"my-contribution-fa178.firebaseapp.com",databaseURL:"https://my-contribution-fa178.firebaseio.com",projectId:"my-contribution-fa178",storageBucket:"my-contribution-fa178.appspot.com",messagingSenderId:"394502965932",appId:"1:394502965932:web:ffe012a24d3f9f3a8f2d09",measurementId:"G-549XSR6D0K"});var A=T,D=Object(E.a)((function(e){return{button:{margin:e.spacing(1),width:"20%"},centeredEmptyListMessage:{display:"flex",alignItems:"center",width:"100%",flexDirection:"column"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3)}}})),z=A.firestore(),U=function(){var e=D();return r.a.createElement("div",{className:e.centeredEmptyListMessage},r.a.createElement("h2",null,"Oops, Our dataBase seems to be empty, It may just be temporary"),r.a.createElement(x.a,{variant:"contained",color:"primary",size:"large",className:e.button,startIcon:r.a.createElement(B.a,null),onClick:function(){z.collection("repos").add({data1:"i am a DATA",link:"iamalink.com",age:30}).then((function(e){console.log("Datas successfully added => id = ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}},"Add a new project to our dataBase"))},R=a(192),L=a(195),W=a(193),G=Object(E.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),M=function(e){var t=G();return r.a.createElement(R.a,{className:t.root},r.a.createElement(W.a,null,r.a.createElement(O.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.repoPath),r.a.createElement(O.a,{variant:"h5",component:"h2"},e.repoName),r.a.createElement(O.a,{className:t.pos,color:"textSecondary"},e.repoUrl),r.a.createElement(O.a,{variant:"body2",component:"p"},e.repoDesc?e.repoDesc:"Un repo public de ".concat(e.repoOwner))),r.a.createElement(L.a,null,r.a.createElement("a",{href:e.repoUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(x.a,{size:"small"},"Voir le repo..."))))},V=Object(E.a)({root:{display:"flex",flexWrap:"wrap"}}),F=function(e){var t=V();return r.a.createElement("div",{className:t.root},e.datas.length<1?r.a.createElement(U,null):e.datas.map((function(e,t){return r.a.createElement(M,{key:t,repoOwner:e.repoOwner,repoPath:e.repoPath,repoName:e.repoName,repoUrl:e.repoUrl,repoDesc:e.repoDesc})})))},J=a(203),K=a(92),q=a.n(K),X=a(63);var Y={userToken:null,userProfileObject:null};var Z=a(93),$=Object(Z.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_TOKEN":return Object(X.a)({},e,{userToken:t.value});case"SAVE_USER_PROFILE":return Object(X.a)({},e,{userProfileObject:t.value});default:return e}}),{userToken:window.localStorage.getItem("token"),userProfileObject:JSON.parse(window.localStorage.getItem("user"))}),H=a(198);var Q=a(202),ee=a(204),te=a(95),ae=a.n(te),ne=A.firestore();var re=a(44),oe=Object(E.a)((function(e){return{form:{display:"flex",flexDirection:"column"},selectPlaceholder:{textAlign:"center"},submitProjectButton:{marginTop:"3%"}}})),ce=function(e){var t=e.userDatas,a=e.onLoaded,o=oe(),c=r.a.useState(""),l=Object(h.a)(c,2),i=l[0],s=l[1],u=r.a.useState(null),m=Object(h.a)(u,2),p=m[0],d=m[1],f=Object(re.useToasts)().addToast;return Object(n.useEffect)((function(){a(!0)})),r.a.createElement("form",{className:o.form},r.a.createElement(ee.a,{defaultValue:t.userName,variant:"outlined"}),r.a.createElement(Q.a,{onChange:function(e){s(e.target.value),t.repos.forEach((function(t){t.name===e.target.value&&d({repoName:t.name,repoUrl:t.html_url,repoDesc:t.description,repoPath:t.full_name,repoOwner:t.owner.login})}))},value:i,displayEmpty:!0},r.a.createElement(k.a,{value:"",disabled:!0},r.a.createElement("p",{className:o.selectPlaceholder},"S\xe9lectionner un repo")),t.repos.map((function(e){return r.a.createElement(k.a,{key:e.id,value:e.name},e.name)}))),null!==p&&r.a.createElement("div",null,r.a.createElement("h2",null,"Aper\xe7u"),r.a.createElement(M,{repoOwner:p.repoOwner,repoPath:p.repoPath,repoName:p.repoName,repoUrl:p.repoUrl,repoDesc:p.repoDesc}),r.a.createElement(x.a,{variant:"contained",color:"default",onClick:function(){var e;(e=p,new Promise((function(t,a){ne.collection("repos").doc(e.repoName).set(e).then((function(){return t("success")})).catch((function(e){return a(e)}))}))).then((function(e){return f("Your project has been succefully added",{appearance:"success"})})).catch((function(e){return f("Your project is already in our database...",{appearance:"error"})}))},className:o.submitProjectButton,startIcon:r.a.createElement(ae.a,null)},"Upload")))},le=Object(E.a)((function(e){return{loadingWrapper:{margin:"auto",textAlign:"center"}}})),ie=function(e){var t=le(),a=Object(n.useState)({}),o=Object(h.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(!1),s=Object(h.a)(i,2),u=s[0],m=s[1],p=function(){var e=$.getState().userToken,t=$.getState().userProfileObject.login;m(!1),q.a.get("https://api.github.com/user/repos",{headers:{Authorization:"Bearer "+e}}).then((function(e){var a,n;(a=t,n=e.data,new Promise((function(e,t){e({userName:a,repos:n})}))).then((function(e){l(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.error("ERROR",e)}))};Object(n.useEffect)((function(){c.repos||p()}),[l,c]);return r.a.createElement(re.ToastProvider,null,r.a.createElement("div",null,c.repos?r.a.createElement((function(e){var t=Object(re.useToasts)().addToast;return console.log(e),r.a.createElement(ce,{onLoaded:function(){u||(console.log("test"),t("Saved Successfully",{appearance:"success"}),m(!0))},userDatas:c})}),null):r.a.createElement("div",{className:t.loadingWrapper},r.a.createElement("h2",null,"Chargement des donn\xe9es..."),r.a.createElement("h4",null,"Nous r\xe9cup\xe9rons vos donn\xe9es github..."),r.a.createElement(H.a,null))))},se=new A.auth.GithubAuthProvider;se.addScope("public_repo").addScope("read:user");var ue=function(){return A.auth().signInWithPopup(se).then((function(e){var t,a;$.dispatch((t=e.credential.accessToken,window.localStorage.setItem("token",t),{type:"SAVE_TOKEN",value:t})),$.dispatch((a=e.additionalUserInfo.profile,window.localStorage.setItem("user",JSON.stringify(a)),{type:"SAVE_USER_PROFILE",value:a})),console.log($.getState())})).catch((function(e){console.log(e.message)}))},me=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Connectez-vous avec Github"),r.a.createElement(x.a,{onClick:function(){return ue()},variant:"contained",color:"primary"},"Je me connecte"))},pe=Object(E.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),de=function(e){var t=pe(),a=Object(n.useState)(!1),o=Object(h.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(null),s=Object(h.a)(i,2),u=s[0],m=s[1];Object(n.useEffect)((function(){null===u&&A.auth().onAuthStateChanged((function(e){e&&m(e)})),!0===e.show?!c&&p():c&&d()}));var p=function(){l(!0),e.callBack(!0)},d=function(){l(!1),e.callBack(!1)};return r.a.createElement(J.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:c,onClose:function(){return d()}},r.a.createElement("div",{className:t.paper},u?r.a.createElement(ie,{userData:u}):me()))},fe=Object(E.a)((function(e){return{root:{flexGrow:1,zIndex:0},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},main_body_section:{marginTop:"5%",justifyContent:"center",display:"flex",marginBottom:"30px"},main_img_container:Object(g.a)({position:"relative",display:"flex",justifyContent:"center",width:"30%"},e.breakpoints.only("xs"),{fontSize:"0.9em",width:"70%"}),main_intro_text:{position:"absolute",top:"25%"},main_intro_img:{width:"100%"},sectionTitle_main_content:{display:"flex",width:"100%",backgroundColor:"#3F51B5",justifyContent:"space-between"},main_content_title:{padding:"10px",color:"white"},alert:{zIndex:"1000"}}})),he=A.firestore();function ge(){var e=fe(),t=r.a.useState(null),a=Object(h.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),i=Object(h.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(!1),p=Object(h.a)(m,2),g=p[0],E=p[1],j=function(){c(null)};return Object(n.useEffect)((function(){$.getState(),s.length<1&&he.collection("repos").get().then((function(e){var t=[];e.forEach(function(){var e=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push(a.data());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u(t)}))})),r.a.createElement("div",{className:e.root},r.a.createElement(de,{callBack:function(e){return E(e)},show:g}),r.a.createElement(b.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(y.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null)),r.a.createElement(O.a,{variant:"h6",className:e.title},"My contribution"),r.a.createElement("div",null,r.a.createElement(y.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(S.a,null)),r.a.createElement(N.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:!1,onClose:j},r.a.createElement(k.a,{onClick:j},"Profile"),r.a.createElement(k.a,{onClick:j},"My account"))))),r.a.createElement("section",{className:e.main_body_section},r.a.createElement("div",{id:"main_div_img_container",className:e.main_img_container},r.a.createElement("img",{id:"main_intro_img",className:e.main_intro_img,src:I.a,alt:"versioning-img"}),r.a.createElement("h2",{className:e.main_intro_text},"Ne cherchez plus de projets, vous venez de les trouver"))),r.a.createElement("section",null,r.a.createElement("div",{className:e.sectionTitle_main_content},r.a.createElement("h2",{className:e.main_content_title},"Open source projects"),r.a.createElement(x.a,{onClick:function(){E(!0)},color:"secondary"},"Ajouter un projet")),r.a.createElement(F,{datas:s})))}var Ee=function(){return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(ge,null)),r.a.createElement(i.a,{path:"/*"},r.a.createElement(m,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a.p+"static/media/undraw_page_not_found_su7k.6695af99.svg"},89:function(e,t,a){e.exports=a.p+"static/media/undraw_version_control_9bpv.bd6fb7a3.svg"}},[[113,1,2]]]);
//# sourceMappingURL=main.b4209827.chunk.js.map