(this.webpackJsonpstarwarsreact=this.webpackJsonpstarwarsreact||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(24),r=c.n(n),i=(c(35),c(36),c(0));var l=function(){return Object(i.jsx)("header",{className:"bg-dark text-center text-white py-5",children:Object(i.jsxs)("section",{className:"container",children:[Object(i.jsx)("h1",{className:"text-warning Starfont",children:"L'index Star Wars "}),Object(i.jsx)("p",{className:"lead Starfont",children:"La base de donn\xe9e la plus lointaine de la galaxie"})]})})};var j=function(){return Object(i.jsxs)("footer",{className:"bg-dark p-2 text-center text-white",children:[Object(i.jsx)("p",{children:"Cette appli a \xe9t\xe9 cr\xe9\xe9e gr\xe2ce \xe0 React JS et a l'Api Swapi"}),Object(i.jsxs)("section",{className:"mb-4",children:[Object(i.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://facebook.com",role:"button",children:Object(i.jsx)("i",{className:"fab fa-facebook-f"})}),Object(i.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://twitter.com/",role:"button",children:Object(i.jsx)("i",{className:"fab fa-twitter"})}),Object(i.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://instagram.com",role:"button",children:Object(i.jsx)("i",{className:"fab fa-instagram"})})]})]})},o=c(10);var d=function(){return Object(i.jsx)("nav",{className:"bg-warning",children:Object(i.jsxs)("ul",{className:"nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link text-dark Starfont",to:"/acceuil",children:"Acceuil"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link text-dark Starfont",to:"/recherche",children:"Recherche"})})]})})},h=c(26),b=c(27),x=c(30),u=c(29),O=c(28),m=c.n(O);var f=function(e){return Object(i.jsx)("div",{className:"col-4 my-3",children:Object(i.jsx)("div",{className:"card text-center bg-dark",children:Object(i.jsxs)("div",{className:"card-body text-white",children:[Object(i.jsx)("h5",{className:"card-title",children:e.cards}),Object(i.jsxs)("p",{className:"card-text",children:["D\xe9couvrez les ",e.cards," de la galaxie Star Wars"]}),Object(i.jsx)("a",{href:"#",className:"btn btn-warning",children:"Par ici !"})]})})})},p=function(e){Object(x.a)(c,e);var t=Object(u.a)(c);function c(e){var a;return Object(h.a)(this,c),(a=t.call(this,e)).state={loaded:!1,error:!1,data:null,cards:null},a}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://swapi.dev/api/").then((function(t){console.log(Object.keys(t.data));var c=Object.keys(t.data).map((function(e){return Object(i.jsx)(f,{card:e})}));e.setState({loaded:!0,data:t.data,cards:c})})).catch((function(t){e.setState({loaded:!0,error:t})}))}},{key:"render",value:function(){return this.state.loaded?this.state.error?Object(i.jsxs)("p",{children:["Une erreur est survenue :-(. Message : ",this.state.error.message]}):Object(i.jsxs)("section",{className:"container",children:[Object(i.jsx)("h2",{className:"Starfont",children:"Acceuil"}),Object(i.jsx)("div",{className:"row",children:this.state.cards})]}):Object(i.jsx)("p",{children:"Vos donn\xe9es sont en cours de chargement"})}}]),c}(s.a.Component);var g=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsxs)("label",{for:"recherche",children:[" ",Object(i.jsx)("h2",{className:"Starfont",children:"Rechercher"})]}),Object(i.jsx)("input",{type:"text",class:"form-control",id:"recherche",placeholder:"Votre recherche par ID"})]})})},v=c(2);var N=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{}),Object(i.jsx)("main",{className:"container my-5",children:Object(i.jsxs)(v.c,{children:[Object(i.jsx)(v.a,{path:"/acceuil",children:Object(i.jsx)(p,{})}),Object(i.jsx)(v.a,{path:"/recherche",children:Object(i.jsx)(g,{})}),Object(i.jsx)(v.a,{path:"/",children:Object(i.jsx)(p,{})})]})})]}),Object(i.jsx)(j,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),k()}},[[61,1,2]]]);
//# sourceMappingURL=main.c7d64254.chunk.js.map