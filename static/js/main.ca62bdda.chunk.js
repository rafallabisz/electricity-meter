(this.webpackJsonplicznik=this.webpackJsonplicznik||[]).push([[0],{138:function(e,t,a){},148:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(127),s=a.n(c),r=(a(138),a(103)),o=a(158),l=a(159),d=a(160),j=a(44),h=a.n(j),b=a.p+"static/media/background.3b070342.jpg",p=a(53),m=a(33),x=a(163),O=a(157),u=a(165),f=a(162),g=a(161),v=a(164),k=a(166),y=a(128),w=a.n(y),N=a(129),A=a.n(N),S=(a(124),a(141),a(54)),C=a.n(S),D=a(8);function z(e){for(var t=[e],a=1;a<7;a+=1)t.push(C()(e).add(a,"days").toDate());return t}function _(e){return{from:C()(e).startOf("week").toDate(),to:C()(e).endOf("week").toDate()}}p.a([O.a,u.a,f.a,x.a,k.a,g.a,v.a]);var B=[{date:"17-05-2021",data:[2.15,1.75,0,0,0,0,0]},{date:"10-05-2021",data:[1.1,2.75,1.1,.82,1.41,2.18,2.01]},{date:"03-05-2021",data:[.85,1.1,1.05,1.4,1.1,2.98,2.01]}],W=function(e){var t=z(_(new Date).from),a=Object(n.useState)(t),i=Object(r.a)(a,2),c=i[0],s=i[1],j=C()(c[0]).format("DD-MM-YYYY");return Object(n.useEffect)((function(){var e,t={},a=document.getElementById("main"),n=m.b(a),i=c.map((function(e){return C()(e).format("DD-MM-YYYY")})),s=B.filter((function(e){return e.date===j}));console.log(s,"dataSeries");t.configParameters={rotate:{min:-90,max:90},align:{options:{left:"left",center:"center",right:"right"}},verticalAlign:{options:{top:"top",middle:"middle",bottom:"bottom"}},position:{options:["left","right","top","bottom","inside","insideTop","insideLeft","insideRight","insideBottom","insideTopLeft","insideTopRight","insideBottomLeft","insideBottomRight"].reduce((function(e,t){return e[t]=t,e}),{})},distance:{min:0,max:100}},t.config={rotate:90,align:"left",verticalAlign:"middle",position:"insideBottom",distance:15,onChange:function(){var e={normal:{rotate:t.config.rotate,align:t.config.align,verticalAlign:t.config.verticalAlign,position:t.config.position,distance:t.config.distance}};n.setOption({series:[{label:e},{label:e},{label:e},{label:e}]})}};var r={show:!0,position:t.config.position,distance:t.config.distance,align:t.config.align,verticalAlign:t.config.verticalAlign,rotate:t.config.rotate,formatter:"{c}  {name|{a}}",fontSize:16,rich:{name:{}}};(e={title:{textStyle:{color:"gray",fontSize:18},text:s.length?"\u015arednie zu\u017cycie w ci\u0105gu dnia":"Brak danych",left:"center",top:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"0"},toolbox:{show:!1,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:[{type:"category",axisTick:{show:!1},data:i}],yAxis:[{type:"value"}],series:[{name:"kWh/doba",type:"bar",barGap:0,label:r,emphasis:{focus:"series"},data:s[0]?s[0].data:[]}]})&&n.setOption(e,!0)}),[c,j]),Object(D.jsx)("main",{className:h.a.mainWrap,style:{background:"url(".concat(b,")")},children:Object(D.jsx)(o.a,{children:Object(D.jsx)(l.a,{children:Object(D.jsxs)(d.a,{children:[Object(D.jsx)("h3",{children:"Wykres"}),Object(D.jsx)("h6",{children:"Wybierz dat\u0119"}),Object(D.jsx)(w.a,{showOutsideDays:!0,selectedDays:c,onDayClick:function(e){s(z(_(e).from))},onWeekClick:function(e,t,a){s(t)},localeUtils:A.a,locale:"pl",className:h.a.calendarBgc}),Object(D.jsx)("div",{id:"main",style:{height:"500px"}})]})})})})},I=a.p+"static/media/electricity-meter.38beccaa.jpg",L=(a(143),a(131));C.a.locale("pl");var P=function(e){var t=Object(n.useState)(.85),a=Object(r.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(!1),j=Object(r.a)(s,2),p=j[0],m=j[1];Object(n.useEffect)((function(){var e=setInterval((function(){return c(x(.2,2))}),1e3);return function(){clearInterval(e)}}),[i]);var x=function(e,t){return Math.random()*(t-e+.5)};return Object(D.jsx)("main",{className:h.a.mainWrap,style:{background:"url(".concat(b,")")},children:Object(D.jsx)(o.a,{children:Object(D.jsxs)(l.a,{children:[Object(D.jsxs)(d.a,{children:[Object(D.jsxs)("h5",{children:["Licznik ",Object(D.jsx)("b",{children:"V705048953698419"})]}),Object(D.jsx)("div",{children:Object(D.jsx)("img",{src:I,alt:"licznik pr\u0105du",width:300})})]}),Object(D.jsx)(d.a,{children:Object(D.jsxs)("section",{className:h.a.containerData,children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Data: "}),Object(D.jsx)("span",{children:"".concat(C()().format("L")," ").concat(C()().format("LTS"))})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Adres PPE "}),Object(D.jsx)("span",{children:"00-000 Miasto, ulica 1/2"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Sprzedawca "}),Object(D.jsx)("span",{children:"Energa-Obr\xf3t SA"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Okres umowy "}),Object(D.jsx)("span",{children:"Od 2013-01-01"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Numer PPE "}),Object(D.jsx)("span",{children:"PL003700000000009"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Taryfa "}),Object(D.jsx)("span",{children:"G12"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Aktualne zu\u017cycie "}),Object(D.jsx)("span",{children:"".concat(i.toFixed(2)," kWh/doba")})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Minimalne zu\u017cycie w ci\u0105gu dnia "}),Object(D.jsx)("span",{children:"0.05 kWh/doba"})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{className:h.a.title,children:"Maksymalne zu\u017cycie w ci\u0105gu dnia "}),Object(D.jsx)("span",{children:"2.97 kWh/doba"})]}),Object(D.jsxs)("div",{className:h.a.zoneContainer,children:[Object(D.jsx)("span",{onClick:function(){return m(!1)},children:"Strefa dzienna"}),Object(D.jsx)(L.a,{checked:p,onChange:function(){m((function(e){return!e}))},onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch",id:"material-switch"}),Object(D.jsx)("span",{onClick:function(){return m(!0)},children:"Strefa nocna"})]})]})})]})})})},Y=a(101),E=a(30),M={main:"/electricity-meter",dashboard:"/dashboard"},T=(a(148),function(){return Object(D.jsx)("nav",{className:"navbar navbar-light nav-bg",children:Object(D.jsxs)("ul",{className:"navbar-nav nav-wrap",children:[Object(D.jsx)("li",{className:"nav-item active",children:Object(D.jsx)(Y.b,{to:M.main,className:"nav-link",activeClassName:"active-nav",children:"LICZNIK"})}),Object(D.jsx)("li",{className:"nav-item active",children:Object(D.jsx)(Y.b,{to:M.dashboard,className:"nav-link",activeClassName:"active-nav",children:"WYKRESY"})})]})})}),F=function(e){return Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(T,{}),Object(D.jsxs)(E.c,{children:[Object(D.jsx)(E.a,{exact:!0,path:M.main,component:P}),Object(D.jsx)(E.a,{exact:!0,path:M.dashboard,component:W})]})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,167)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root")),K()},44:function(e,t,a){e.exports={mainWrap:"App_mainWrap__3cU5K",title:"App_title__2IKHo",containerData:"App_containerData__3B-Ea",zoneContainer:"App_zoneContainer__2cvoh",calendarBgc:"App_calendarBgc__S-PA8"}}},[[152,1,2]]]);
//# sourceMappingURL=main.ca62bdda.chunk.js.map