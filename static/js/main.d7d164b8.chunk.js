(this.webpackJsonpdrop=this.webpackJsonpdrop||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(3),o=n.n(i),a=(n(12),n(4)),l=n(5),r=n(7),d=n(6),u=(n(13),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={btns:[{name:"Budget ",value:1},{name:"Food allergies  ",value:2},{name:"Number of people  ",value:3},{name:"Special restrictions ",value:4}],copy:[],removed:[],disabled:!0,setKeyword:"",keyword:"",search:""},s}return Object(l.a)(n,[{key:"toggle",value:function(e,t){var n=document.getElementById("btn".concat(e)),s=document.getElementById("icon".concat(e)),c=document.getElementById("icon1".concat(e));if(s.style.display="none",c.style.display="none",n.disabled){s.style.display="inline-block",c.style.display="none";var i=t.name,o=this.state.copy.indexOf(i);n.disabled=!1,this.setState({removed:this.state.copy.splice(o,1)})}else c.style.display="inline-block",s.style.display="none",n.disabled=!0,this.setState({copy:this.state.copy.concat(this.state.btns[e].name)})}},{key:"setKeyword",value:function(e){var t=this;this.setState({keyword:e}),this.state.btns.map((function(n,s){var c=n.name[0].toLowerCase();c==e?t.setState({search:t.state.btns[s].name}):console.log("no-match")}))}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{class:"out-container",children:[Object(u.jsxs)("div",{class:"inner_class",children:[Object(u.jsx)("div",{class:"input",children:Object(u.jsx)("input",{class:"input",value:this.state.keyword,placeholder:"search questions",onChange:function(t){return e.setKeyword(t.target.value)}},"random1")}),this.state.btns.map((function(t,n){return Object(u.jsx)("div",{class:"in-inner",onClick:function(){e.toggle(n,t)},children:Object(u.jsxs)("button",{id:"btn"+n,class:"btn",value:t.name,children:[Object(u.jsxs)("p",{children:[" ",t.name]}),Object(u.jsx)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",id:"icon"+n,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 6v6m0 0v6m0-6h6m-6 0H1"})}),Object(u.jsx)("svg",{class:"icon",style:{display:"none"},xmlns:"http://www.w3.org/2000/svg",id:"icon1"+n,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M1 10l2 5L15 7"})})]},t.value)})}))]}),Object(u.jsx)("h3",{children:"Selected Items :"}),Object(u.jsx)("div",{class:"second-div ",children:this.state.copy.map((function(e,t){return Object(u.jsxs)("li",{value:e,children:[e," ",t]})}))}),"search : "+this.state.search]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d7d164b8.chunk.js.map