(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){},27:function(e,a,t){e.exports=t.p+"static/media/twitter.3d74e8bf.png"},28:function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},31:function(e,a,t){e.exports=t(52)},41:function(e,a,t){},42:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=t(7),o=t(30),m=t(29),i=t(3),u=function(e,a){switch(a.type){case"FORM_REQUEST":return Object(i.a)({},e,{user:a.payload});case"GET_USERS":return""===a.payload?Object(i.a)({},e,{users:[]}):e;case"ADD_USERS":return Object(i.a)({},e,{users:[].concat(Object(m.a)(e.users),[a.payload])});case"REQUEST_DATA":return Object(i.a)({},e,{rickAndMortyState:{data:a.payload}});case"GET_DATA_ID":return Object(i.a)({},e,{user:e.users.find(function(e){return e.id===a.payload})||[]});case"EDIT_DATA_ID":return Object(i.a)({},e,{users:e.users.map(function(e){return e.id===a.payload.id?Object(i.a)({},e,{firstName:a.payload.firstName,lastName:a.payload.lastName,email:a.payload.email,avatarUrl:a.payload.avatarUrl,jobTitle:a.payload.jobTitle,twitter:a.payload.twitter,id:a.payload.id,name:a.payload.name}):e})});case"ERASE_DATA_ID":return Object(i.a)({},e,{users:e.users.filter(function(e){return e.id!==a.payload})});case"GET_SEARCH_VIDEO_BADGES":return""===a.payload?Object(i.a)({},e,{searchResultBadges:[]}):void 0!==e.users?Object(i.a)({},e,{searchResultBadges:e.users.filter(function(e){return e.name.toLowerCase().includes(a.payload.toLowerCase())||e.twitter.toLowerCase().includes(a.payload.toLowerCase())||e.jobTitle.toLowerCase().includes(a.payload.toLowerCase())})}):e;case"GET_SEARCH_VIDEO_RANDM":return""===a.payload?Object(i.a)({},e,{searchResultRAndM:[]}):e.rickAndMortyState.data.length>0?Object(i.a)({},e,{searchResultRAndM:e.rickAndMortyState.data.filter(function(e){return e.name.toLowerCase().includes(a.payload.toLowerCase())||e.species.toLowerCase().includes(a.payload.toLowerCase())||e.status.toLowerCase().includes(a.payload.toLowerCase())})}):e;default:return e}},d=t(13),E=t(2),p=t(20),f=t.n(p),g=t(26),v=t(10),N=(t(19),t(9)),b=t.n(N),_=function(e){return{type:"FORM_REQUEST",payload:e}},y=(t(41),function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),h=(t(42),{getSearchVideoBadges:function(e){return{type:"GET_SEARCH_VIDEO_BADGES",payload:e}},getSearchVideoRAndM:function(e){return{type:"GET_SEARCH_VIDEO_RANDM",payload:e}}}),x=Object(s.b)(null,h)(function(e){var a=e.getSearchVideoBadges,t=e.getSearchVideoRAndM;return a(""),t(""),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"main"},r.a.createElement("input",{name:"search",type:"text",className:"input",placeholder:"Search...",onChange:function(e){a(e.target.value),t(e.target.value)}})))}),S=t(27),w=t.n(S),O=function(e){var a=e.stateBadge;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list-unstyled"},a.length>0&&a.map(function(e){return r.a.createElement(d.b,{className:"text-reset text-decoration-none",to:"/BadgeEdit/".concat(e.id),key:e.id},r.a.createElement("li",{className:"Badges__list-li"},r.a.createElement("img",{src:e.avatarUrl,alt:"logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"Badges__list-name"},e.firstName," ",e.lastName),r.a.createElement("p",{className:"Badges__list-twitter"},r.a.createElement("img",{src:w.a,alt:"twitter"}),"@",e.twitter),r.a.createElement("p",{className:"Badges__list-jobTitle"},e.jobTitle))))})))},B=function(e){var a=e.stateBadge;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"list-unstyled"},a.length>0&&a.map(function(e){return r.a.createElement("a",{className:"text-reset text-decoration-none",href:"https://rickandmortyapi.com/",key:e.id},r.a.createElement("li",{className:"Badges__list-li"},r.a.createElement("img",{src:e.image,alt:"logo"}),r.a.createElement("div",null,r.a.createElement("p",{className:"Badges__list-name"},e.name),r.a.createElement("p",{className:"Badges__list-name"},"Species:"," ",e.species),r.a.createElement("p",{className:"Badges__list-jobTitle"},"Status:"," ",e.status))))})))},j={requestData:function(e){return{type:"REQUEST_DATA",payload:e}},getUsers:function(e){return{type:"GET_USERS",payload:e}}},A=Object(s.b)(function(e){return{rickAndMortyState:e.rickAndMortyState,searchResultRAndM:e.searchResultRAndM,users:e.users,searchResultBadges:e.searchResultBadges}},j)(function(e){var a=e.rickAndMortyState,t=void 0===a?{data:[]}:a,l=e.searchResultRAndM,c=void 0===l?[]:l,s=e.users,o=void 0===s?[]:s,m=e.searchResultBadges,i=void 0===m?[]:m,u=e.getUsers,d=Object(n.useState)(1),E=Object(v.a)(d,2),p=E[0],N=E[1],_=Object(n.useState)(!1),h=Object(v.a)(_,2),S=h[0],w=h[1],j=Object(n.useState)(!1),A=Object(v.a)(j,2),D=A[0],T=A[1],R=function(){var a=Object(g.a)(f.a.mark(function a(n){var r,l;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://rickandmortyapi.com/api/character?page=".concat(n),{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}});case 3:return r=a.sent,a.next=6,r.json();case 6:l=a.sent,1===p?e.requestData(l.results):e.requestData([].concat(t.data,l.results)),w(!1),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(0),w(!1),T(!0),console.log(a.t0);case 16:case"end":return a.stop()}},a,null,[[0,11]])}));return function(e){return a.apply(this,arguments)}}();Object(n.useEffect)(function(){R(p),w(!0)},[p]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:b.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement(x,null),r.a.createElement("div",{className:"Badges__list"},r.a.createElement(O,{stateBadge:i}),r.a.createElement(B,{stateBadge:c}))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement("button",{onClick:function(a){0===o.length&&u(""),e.history.push("/BadgeNew")},className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",null,r.a.createElement(O,{stateBadge:o}),r.a.createElement(B,{stateBadge:t.data}))),D&&r.a.createElement("p",null,"Something went wrong."),S&&r.a.createElement("div",{className:"Badges__buttons-button"},r.a.createElement(y,null)),r.a.createElement("div",{className:"Badges__buttons-button"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),N(p+1)}}," More Badges"))))}),D=t(12),T=t(17),R=t.n(T),C=(t(46),t(47),Object(s.b)(function(e){return{user:e.user}},null)(function(e){var a=e.user,t=e.firstName,n=void 0===t?a.firstName:t,l=e.lastName,c=void 0===l?a.lastName:l,s=e.avatarUrl,o=void 0===s?a.avatarUrl:s,m=e.jobTitle,i=void 0===m?a.jobTitle:m,u=e.twitter,d=void 0===u?a.twitter:u;return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:b.a,alt:"Logo"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:o,alt:"Avatar"}),r.a.createElement("h1",null,n,r.a.createElement("br",null),c)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,i),r.a.createElement("div",null,"@",d)),r.a.createElement("div",{className:"Badge__footer"},"#Developer"))})),I={formRequest:_,addUsers:function(e){return{type:"ADD_USERS",payload:e}}},U=Object(s.b)(function(e){return{users:e.users}},I)(function(e){var a=e.users,t=void 0===a?[]:a;var l=Object(n.useState)({firstName:"Andr\xe9s",lastName:"Garc\xeda",avatarUrl:"https://s.gravatar.com/avatar/f5e615490b0f1825ee0157aed73da46a?d=identicon",email:"andres.fgp@hotmail.com",jobTitle:"Frontend Engineer",twitter:"andfgp",id:"8000",name:""}),c=Object(v.a)(l,2),s=c[0],o=c[1],m=R()(s.email);s.avatarUrl="https://s.gravatar.com/avatar/".concat(m,"?d=identicon"),s.name="".concat(s.firstName," ").concat(s.lastName);var u=function(e){s.id=function(){var e=(new Date).getTime(),a=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(a+n)%16|0,a=Math.floor(a/16)),("x"===t?n:n&&11).toString(16)})}(),o(Object(i.a)({},s,Object(D.a)({},e.target.name,e.target.value)))};e.formRequest(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{src:b.a,alt:"",className:"img-flui"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(C,null)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",null,r.a.createElement("h1",null,"New Attendant"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault();try{t.some(function(e){return e.id===s.id})||(e.addUsers(s),e.history.push("/"))}catch(n){console.log("error",n)}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:u,type:"text",name:"firstName",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:u,type:"text",name:"lastName",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:u,type:"email",name:"email",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Tittle"),r.a.createElement("input",{onChange:u,type:"text",name:"jobTitle",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:u,type:"text",name:"twitter",className:"form-control"})),r.a.createElement("button",{className:"btn btn-primary"}," Save")))))))}),M=(t(48),{formRequest:_,getDataId:function(e){return{type:"GET_DATA_ID",payload:e}},editDataId:function(e){return{type:"EDIT_DATA_ID",payload:e}},eraseDataId:function(e){return{type:"ERASE_DATA_ID",payload:e}}}),L=Object(s.b)(function(e){return{user:e.user,users:e.users}},M)(function(e){var a=e.user,t=e.users,l=e.match.params.id,c=t.filter(function(e){return e.id===l}),s=Object(n.useState)(c[0]),o=Object(v.a)(s,2),m=o[0],u=o[1],d=R()(a.email);a.avatarUrl="https://s.gravatar.com/avatar/".concat(d,"?d=identicon"),a.name="".concat(a.firstName," ").concat(a.lastName);var E=function(e){u(Object(i.a)({},m,Object(D.a)({},e.target.name,e.target.value)))};e.formRequest(m);Object(n.useEffect)(function(){!function(){try{e.getDataId(l)}catch(a){console.log(a)}}()},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{src:b.a,alt:"",className:"img-flui"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(C,null)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",null,r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.editDataId(a),e.history.push("/")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:E,type:"text",name:"firstName",className:"form-control",defaultValue:m.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:E,type:"text",name:"lastName",className:"form-control",defaultValue:m.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:E,type:"email",name:"email",className:"form-control",defaultValue:m.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Tittle"),r.a.createElement("input",{onChange:E,type:"text",name:"jobTitle",className:"form-control",defaultValue:m.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:E,type:"text",name:"twitter",className:"form-control",defaultValue:m.twitter})),r.a.createElement("button",{className:"btn btn-primary"}," Edit"),r.a.createElement("button",{className:"btn btn-danger ",onClick:function(){return a=l,e.eraseDataId(a),void e.history.goBack();var a}}," Erase")))))))}),k=t(28),V=t.n(k),F=(t(49),function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(d.b,{to:"/",className:"Navbar__brand"},r.a.createElement("img",{className:"Navbar__brand-logo",src:V.a,alt:"Logo"}),r.a.createElement("span",{className:"fw-light"},"Home"),r.a.createElement("span",{className:"fw-bold"},"Conf"))))}),G=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,null),a))},q=function(e){return r.a.createElement(d.a,null,r.a.createElement(G,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:A}),r.a.createElement(E.a,{exact:!0,path:"/BadgeNew",component:U}),r.a.createElement(E.a,{exact:!0,path:"/BadgeEdit/:id",component:L}))))},J=(t(50),t(51),localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{}),H=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Q=Object(o.a)(u,J,H);Q.subscribe(function(){localStorage.setItem("reduxState",JSON.stringify(Q.getState()))}),c.a.render(r.a.createElement(s.a,{store:Q},r.a.createElement(q,null)),document.getElementById("app"))},9:function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"}},[[31,1,2]]]);
//# sourceMappingURL=main.059a9f62.chunk.js.map