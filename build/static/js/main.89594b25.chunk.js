(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=a(9),o=a(19),m=a(34),s=a(33),u="ADD_ITEM",d="TOGGLE_COMPLETE",p="CHANGE_FILTER",E="DELETE_ITEM";var h={items:[],filter:"SHOW_ALL"};var f=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;return a.type===u?Object.assign({},t,{items:t.items.concat(a.payload)}):a.type===d?(a.payload.completed=!a.payload.completed,Object(s.a)({},t,{items:t.items.map(function(e){return e.id===a.payload.id?a.payload:e})})):a.type===E?(t.items.forEach(function(n){n.id===a.payload.id&&(e=t.items.indexOf(n))}),Object(s.a)({},t,{items:[].concat(Object(m.a)(t.items.slice(0,e)),Object(m.a)(t.items.slice(e+1)))})):a.type===p?Object.assign({},t,{filter:a.payload}):t},v=Object(o.b)(f),b=(a(53),a(21)),O=a(22),y=a(27),g=a(23),j=a(28),C=a(10),w=a.n(C);var L=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(y.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e){console.log(e.target.value),a.props.changeFilter(e.target.value)},a}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Control,{as:"select",onChange:this.handleChange},l.a.createElement("option",{value:"SHOW_ALL"},"Show All"),l.a.createElement("option",{value:"SHOW_COMPLETED"},"Show Completed"),l.a.createElement("option",{value:"SHOW_UNCOMPLETED"},"Show Uncompleted")))))}}]),t}(n.Component),S=Object(i.b)(function(e){return{filter:e.filter}},function(e){return{changeFilter:function(t){e({type:p,payload:t})}}})(L),N=a(26),k=a.n(N),T=a(17),_=a.n(T),A=a(8),W=a.n(A),x=a(41),D=a.n(x),H=a(13),I=a(24),M=a(25);H.b.add(M.b);var G=Object(i.b)(function(e){return{items:e.items,filter:e.filter}})(function(e){var t=e.items,a=e.filter,n=e.dispatch,r=[];return"SHOW_ALL"===a&&(r=t),"SHOW_COMPLETED"===a&&(r=t.filter(function(e){return e.completed})),"SHOW_UNCOMPLETED"===a&&(r=t.filter(function(e){return!1===e.completed})),l.a.createElement("div",{className:"panel"},l.a.createElement(k.a,null,l.a.createElement(_.a,null,l.a.createElement(W.a,null,l.a.createElement("h2",{className:"poiret-one"},"The List")),l.a.createElement(W.a,null,l.a.createElement(S,null))),l.a.createElement(_.a,null,l.a.createElement(W.a,null,l.a.createElement(D.a,{variant:"flush"},r.map(function(e){return l.a.createElement("div",{key:e.id,className:"list-item"},l.a.createElement("p",{onClick:function(){return n({type:d,payload:e})},className:!0===e.completed?"text-strike item":"item"},e.title),l.a.createElement("div",{className:"show-me"},l.a.createElement(I.a,{icon:"times",onClick:function(){return n({type:E,payload:e})},className:"deleteIcon fa-2x"})))}))))))}),P=a(20),B=a(11),F=a(43),U=a.n(F),J=a(42),R=a.n(J);var q=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(y.a)(this,Object(g.a)(t).call(this))).state={title:""},e.handleChange=e.handleChange.bind(Object(B.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(B.a)(e)),e}return Object(j.a)(t,e),Object(O.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(P.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.title,a=R()();this.props.addItem({title:t,completed:!1,id:a}),this.setState({title:"",qty:0})}},{key:"render",value:function(){var e=this.state.title;return l.a.createElement("div",{className:"panel"},l.a.createElement("h2",{className:"poiret-one"},"Add to the List"),l.a.createElement(w.a,{onSubmit:this.handleSubmit},l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Control,{placeholder:"enter an item",type:"text",id:"title",value:e,onChange:this.handleChange})),l.a.createElement(U.a,{variant:"primary",type:"submit",disabled:""===e.trim(),block:!0},"Add Item")))}}]),t}(n.Component),z=Object(i.b)(null,function(e){return{addItem:function(t){return e({type:u,payload:t})}}})(q);a(81);H.b.add(M.a);var $=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"portfolioBar"},l.a.createElement("div",{className:"arrowContainer"},l.a.createElement("a",{href:"https://jake-guss.herokuapp.com/portfolio"},l.a.createElement(I.a,{className:"arrow-icon",icon:"arrow-left",color:"white",size:"3x"})))),l.a.createElement(k.a,null,l.a.createElement(_.a,null,l.a.createElement(W.a,{xs:12},l.a.createElement("h1",{className:"title"},"The Greatest Redux List Ever"))),l.a.createElement(_.a,null,l.a.createElement(W.a,{sm:6},l.a.createElement(z,null)),l.a.createElement(W.a,{sm:6},l.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,{store:v},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.89594b25.chunk.js.map