(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{58:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(13),o=a(28),m=a(101),u=a(39),s=a(103),f=a(112),p=a(108),E=a(113),g=a(109),b=a(107),h=a(68),v=a(110),d=a(111),y=a(114),O=a(98),j=a(100),x=a(51),T=a(36),C=a(37),S=a(38),k={orangeTheme:Object(x.a)({palette:{primary:{light:T.a[200],main:T.a[600],dark:"#EF6C00",contrastText:"black"}}}),blueTheme:Object(x.a)({palette:{primary:{light:C.a[200],main:C.a[600]}}}),greenTheme:Object(x.a)({palette:{primary:{light:S.a[200],main:S.a[600]}}})},N=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("exercises"))||[]),t=Object(o.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){localStorage.setItem("exercises",JSON.stringify(a))}),[a]);var c=Object(n.useState)(""),x=Object(o.a)(c,2),T=x[0],C=x[1],S=Object(n.useState)(k.orangeTheme),N=Object(o.a)(S,2),I=N[0],J=N[1],B=Object(O.a)((function(){return{root:{margin:"auto",marginTop:"20vh",padding:20,maxWidth:400},form:{display:"flex",alignItems:"baseline",justifyContent:"space-evenly"},center:{display:"flex",justifyContent:"space-evenly"}}}))(),w=function(){var e,t=Math.max(a.map((function(e){return e.id})));e=null==t?0:t+1,l([].concat(Object(i.a)(a),[{id:e,title:T}])),C("")};return r.a.createElement(j.a,{theme:I},r.a.createElement(m.a,{className:B.root},r.a.createElement(u.a,{variant:"h2",align:"center",gutterBottom:!0},"Exercises"),r.a.createElement("div",{className:B.center},r.a.createElement(s.a,null,r.a.createElement(f.a,{value:I,onChange:function(e){J(e.target.value)}},r.a.createElement(p.a,{value:k.orangeTheme},"Orange"),r.a.createElement(p.a,{value:k.blueTheme},"Blue"),r.a.createElement(p.a,{value:k.greenTheme},"Green")))),r.a.createElement("form",{className:B.form,onSubmit:function(e){e.preventDefault(),w()}},r.a.createElement(E.a,{name:"title",label:"Exercise",value:T,onChange:function(e){C(e.target.value)}}),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:w},"CREATE")),r.a.createElement(b.a,null,a.map((function(e){return r.a.createElement(h.a,{key:e.id},r.a.createElement(v.a,{primary:e.title}),r.a.createElement(d.a,{color:"primary",onClick:function(){return t=e.id,void l(a.filter((function(e){return e.id!==t})));var t}}," ",r.a.createElement(y.a,null)))})))))};a(66);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.59b1a704.chunk.js.map