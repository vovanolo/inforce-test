(this["webpackJsonpinforce-test"]=this["webpackJsonpinforce-test"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=n(0),i=n.n(r),o=n(37),s=n(12),d={home:"/inforce-test",products:"/inforce-test/products"},l=n(112),u=n(2);var h=n(77),j=n(15),p=n.n(j),b=n(30),m=n(11),O=n(14),f=n(45),g=n.n(f),x=n(211),v=n(212),w=n(213),y=n(216),C=n(215),k=n(214),S=n(114),N=Object(x.a)({root:{maxWidth:345},media:{height:140}});function _(e){var t=e.id,n=e.name,a=e.imageUrl,c=e.count,r=e.handleOpen,i=e.description,s=N();return Object(u.jsxs)(v.a,{className:s.root,style:{margin:"0 auto"},children:[Object(u.jsx)(o.b,{to:"".concat(d.products,"/").concat(t),style:{textDecoration:"none"},children:Object(u.jsxs)(w.a,{children:[Object(u.jsx)(k.a,{className:s.media,image:a,title:"Contemplative Reptile"}),Object(u.jsxs)(C.a,{children:[Object(u.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n}),Object(u.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:i})]}),Object(u.jsxs)(C.a,{children:["Product Count: ",c]})]})}),Object(u.jsxs)(y.a,{children:[Object(u.jsx)(o.b,{to:"".concat(d.products,"/").concat(t),style:{textDecoration:"none"},children:Object(u.jsx)(l.a,{variant:"contained",size:"small",color:"primary",children:"Learn More"})}),Object(u.jsx)(l.a,{size:"small",variant:"contained",color:"secondary",onClick:function(){return r(t)},children:"Delete"})]})]})}var U=n(19),T=n.n(U),W=n(83),P=n(171),F=n(169),z=n(167),D=n(168),E=n(166),I=n(219),A=n(108),B=n.n(A),H=n(111),M=n(227),L=n(46),R=n.n(L),Q=n(53),X=n(222),J=n(221),q=n(218),G=!0;function Y(e){var t=e.onSubmit,n=e.modalClose,a=e.initialData,c=Object(r.useState)({}),i=Object(m.a)(c,2),o=i[0],s=i[1],d=Object(r.useState)({name:"",imageUrl:"",count:0,width:0,height:0,weight:0,description:""}),h=Object(m.a)(d,2),j=h[0],p=h[1];Object(r.useEffect)((function(){a&&p(a)}),[a]),Object(r.useEffect)((function(){G=!1}),[]),Object(r.useEffect)((function(){G||b()}),[j]);var b=function(){var e={};return 0===j.name.length&&(e.name="Name can't be empty"),0===j.imageUrl.length&&(e.imageUrl="Image field can't be empty"),0===j.width&&(e.width="Width can't be zero"),0===j.height&&(e.height="Height can't be zero"),0===j.description.length&&(e.description="There is no description"),s(e),0===Object.values(e).length},f=function(e){p((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(Q.a)({},e.target.name,e.target.value))}))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b()&&t(j)},children:[Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name of Product",type:"name",fullWidth:!0,value:j.name,name:"name",onChange:f,helperText:o.name,error:!!o.name}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"description",label:"Description",type:"text",fullWidth:!0,value:j.description,name:"description",onChange:f,helperText:o.description,error:!!o.description}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"image",label:"imageUrl",type:"url",fullWidth:!0,name:"imageUrl",value:j.imageUrl,onChange:f,helperText:o.imageUrl,error:!!o.imageUrl}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"count",name:"count",label:"Count of Product",type:"number",fullWidth:!0,onChange:f,value:j.count,helperText:o.count,error:!!o.count}),Object(u.jsxs)(q.a,{container:!0,children:[Object(u.jsx)(J.a,{children:Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"width",label:"Width",name:"width",type:"number",onChange:f,value:j.width,helperText:o.width,error:!!o.width})}),Object(u.jsx)(J.a,{ml:2,children:Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"height",label:"Height",name:"height",type:"number",onChange:f,value:j.height,helperText:o.height,error:!!o.height})})]}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"weight",label:"Weight",type:"text",name:"weight",fullWidth:!0,onChange:f,value:j.weight,helperText:o.weight,error:!!o.weight}),Object(u.jsxs)(F.a,{children:[Object(u.jsx)(l.a,{onClick:n,color:"primary",children:"Cancel"}),Object(u.jsx)(l.a,{type:"submit",color:"primary",children:"Add"})]})]})}var K=Object(x.a)((function(e){return{button:{margin:e.spacing(1)}}})),V=i.a.forwardRef((function(e,t){return Object(u.jsx)(I.a,Object(O.a)({direction:"up",ref:t},e))}));var Z=n(34),$=n.n(Z),ee=n(224),te=n(228),ne=n(220),ae=n(110),ce=n.n(ae),re=n(226),ie=n(217),oe=n(225),se=n(109),de=n.n(se),le=!0;function ue(e){var t=e.onSubmit,n=e.modalClose,a=e.id,c=Object(r.useState)({}),i=Object(m.a)(c,2),o=i[0],s=i[1],d=Object(r.useState)({name:"",imageUrl:"",count:0,width:0,height:0,weight:0,description:""}),h=Object(m.a)(d,2),j=h[0],f=h[1];Object(r.useEffect)((function(){le=!1,Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://inforce-test-app.herokuapp.com/products/".concat(a));case 2:t=e.sent,f({name:t.data.name,imageUrl:t.data.imageUrl,count:t.data.count,width:t.data.size.width,height:t.data.size.height,weight:t.data.weight,description:t.data.description});case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(r.useEffect)((function(){le||g()}),[j]);var g=function(){var e={};return 0===j.name.length&&(e.name="Name can't be empty"),0===j.imageUrl.length&&(e.imageUrl="Image field can't be empty"),0!==j.width&&"0"!==j.width||(e.width="Width can't be zero"),0!==j.height&&"0"!==j.height||(e.height="Height can't be zero"),0===j.weight.length&&(e.weight="Weight is required"),0===j.description.length&&(e.description="There is no description"),s(e),0===Object.values(e).length},x=function(e){f((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(Q.a)({},e.target.name,e.target.value))}))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g()&&t(j)},children:[Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name of Product",type:"name",fullWidth:!0,value:j.name,name:"name",onChange:x,helperText:o.name,error:!!o.name}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"description",label:"Desctiption of product",type:"text",fullWidth:!0,value:j.description,name:"description",onChange:x,helperText:o.description,error:!!o.description}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"image",label:"imageUrl",type:"url",fullWidth:!0,name:"imageUrl",value:j.imageUrl,onChange:x,helperText:o.imageUrl,error:!!o.imageUrl}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"count",name:"count",label:"Count of Product",type:"number",fullWidth:!0,onChange:x,value:j.count,helperText:o.count,error:!!o.count}),Object(u.jsxs)(q.a,{container:!0,children:[Object(u.jsx)(J.a,{children:Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"width",label:"Width",name:"width",type:"number",onChange:x,value:j.width,helperText:o.width,error:!!o.width})}),Object(u.jsx)(J.a,{ml:2,children:Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"height",label:"Height",name:"height",type:"number",onChange:x,value:j.height,helperText:o.height,error:!!o.height})})]}),Object(u.jsx)(X.a,{autoFocus:!0,margin:"dense",id:"weight",label:"Weight",type:"text",name:"weight",fullWidth:!0,onChange:x,value:j.weight,helperText:o.weight,error:!!o.weight}),Object(u.jsxs)(F.a,{children:[Object(u.jsx)(l.a,{onClick:n,color:"primary",children:"Cancel"}),Object(u.jsx)(l.a,{type:"submit",color:"primary",children:"Add"})]})]})}var he=Object(x.a)((function(e){return{root:{maxWidth:"60%",margin:"0 auto"},comment:Object(O.a)(Object(O.a)({},e.typography.button),{},{padding:e.spacing(1)}),heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));var je=[{path:d.home,exact:!0,component:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o.b,{to:d.products,style:{textDecoration:"none"},children:Object(u.jsx)(l.a,{className:"main-button",variant:"contained",color:"secondary",children:"Go to products"})})})}},{path:d.products,exact:!0,component:function(){var e=K(),t=Object(r.useState)([]),n=Object(m.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),s=Object(m.a)(o,2),d=s[0],j=s[1],f=Object(r.useState)(!1),x=Object(m.a)(f,2),v=x[0],w=x[1],y=Object(r.useState)(),C=Object(m.a)(y,2),k=C[0],S=C[1];Object(r.useEffect)(Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)}))),[]);var N=function(e){S(e),j(!0)},U=function(){w(!1)},I=function(){j(!1)},A=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products?_sort=name:ASC");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products?_sort=name:DESC");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products?_sort=count:ASC");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products?_sort=count:DESC");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:g.a.title,children:"The products list"}),Object(u.jsx)("div",{className:g.a.centered,children:Object(u.jsx)(l.a,{onClick:function(){w(!0)},variant:"contained",color:"default",className:e.button,startIcon:Object(u.jsx)(B.a,{}),children:"New Product"})}),Object(u.jsx)("h3",{className:g.a.title,children:"Sort the products"}),Object(u.jsxs)("div",{className:g.a.centered,children:[Object(u.jsx)(l.a,{onClick:A,variant:"contained",color:"primary",children:"ALL"}),Object(u.jsx)(R.a,{variant:"popover",popupId:"demo-popup-menu",className:g.a.offsetX,children:function(e){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(l.a,Object(O.a)(Object(O.a)({variant:"contained",color:"primary"},Object(L.bindTrigger)(e)),{},{children:"Sort By Name"})),Object(u.jsxs)(H.a,Object(O.a)(Object(O.a)({},Object(L.bindMenu)(e)),{},{children:[Object(u.jsx)(M.a,{onClick:function(){e.close(),Q()},children:"Acending"}),Object(u.jsx)(M.a,{onClick:function(){e.close(),X()},children:"Descending"})]}))]})}}),Object(u.jsx)(R.a,{variant:"popover",popupId:"demo-popup-menu",children:function(e){return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(l.a,Object(O.a)(Object(O.a)({variant:"contained",color:"primary"},Object(L.bindTrigger)(e)),{},{children:"Sort By Count"})),Object(u.jsxs)(H.a,Object(O.a)(Object(O.a)({},Object(L.bindMenu)(e)),{},{children:[Object(u.jsx)(M.a,{onClick:function(){e.close(),J()},children:"Ascending"}),Object(u.jsx)(M.a,{onClick:function(){e.close(),q()},children:"Descending"})]}))]})}})]}),a&&a.reverse().map((function(e){return Object(u.jsx)("div",{className:g.a.offset,children:Object(u.jsx)(W.a,{children:Object(u.jsx)(_,{handleOpen:N,id:e.id,name:e.name,imageUrl:e.imageUrl,count:e.count,description:e.description})})},e.id)})),Object(u.jsxs)(P.a,{open:d,TransitionComponent:V,keepMounted:!0,onClose:I,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(u.jsx)(z.a,{children:Object(u.jsx)(D.a,{id:"alert-dialog-slide-description",children:"Are you sure to delete this product?"})}),Object(u.jsxs)(F.a,{children:[Object(u.jsx)(l.a,{onClick:I,color:"primary",children:"No"}),Object(u.jsx)(l.a,{onClick:function(){console.log(k),T.a.delete("https://inforce-test-app.herokuapp.com/products/".concat(k)).then((function(e){c((function(e){return e.filter((function(e){return e.id!==k}))})),S(null)})),j(!1)},color:"primary",children:"Yes"})]})]}),Object(u.jsxs)(P.a,{open:v,onClose:U,"aria-labelledby":"form-dialog-title",children:[Object(u.jsx)(E.a,{id:"form-dialog-title",children:"Add new Product"}),Object(u.jsxs)(z.a,{children:[Object(u.jsx)(D.a,{children:"Fill in the form to add new product"}),Object(u.jsx)(Y,{onSubmit:function(e){var t={name:e.name,imageUrl:e.imageUrl,count:e.count,size:{width:e.width,height:e.height},weight:e.weight,description:e.description};U(),T.a.post("https://inforce-test-app.herokuapp.com/products",t).then((function(e){c((function(t){return[].concat(Object(h.a)(t),[e.data])}))}))},modalClose:U})]})]})]})}},{path:d.products+"/:id",exact:!0,component:function(){var e=he(),t=Object(r.useState)(null),n=Object(m.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),o=Object(m.a)(i,2),d=o[0],j=o[1],f=Object(r.useState)(!1),g=Object(m.a)(f,2),x=g[0],v=g[1],w=Object(r.useState)(""),y=Object(m.a)(w,2),C=y[0],k=(y[1],Object(r.useState)([])),N=Object(m.a)(k,2),_=N[0],U=N[1],W=Object(r.useState)(""),F=Object(m.a)(W,2),I=(F[0],F[1]),A=Object(r.useState)(""),B=Object(m.a)(A,2),H=(B[0],B[1]),M=Object(r.useState)(0),L=Object(m.a)(M,2),R=(L[0],L[1]),Q=Object(r.useState)(0),X=Object(m.a)(Q,2),q=(X[0],X[1],Object(r.useState)("")),G=Object(m.a)(q,2),Y=(G[0],G[1],Object(r.useState)("")),K=Object(m.a)(Y,2),V=(K[0],K[1],Object(s.e)().id);Object(r.useEffect)((function(){Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()("https://inforce-test-app.herokuapp.com/products/".concat(V));case 2:t=e.sent,c(t.data),I(t.data.name),H(t.data.imageUrl),R(t.data.count),U(t.data.comments);case 8:case"end":return e.stop()}}),e)})))()}),[V]);var Z=function(){v(!1)};return Object(u.jsx)("div",{children:a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:$.a.centered,children:Object(u.jsx)(l.a,{onClick:function(){v(!0)},variant:"contained",color:"default",className:e.button,startIcon:Object(u.jsx)(de.a,{}),children:"Edit Product"})}),Object(u.jsx)("img",{className:$.a.mainImage,src:a.imageUrl,alt:""}),Object(u.jsx)("h1",{className:$.a.title,children:a.name}),Object(u.jsx)("h2",{className:$.a.subtitle,children:a.description}),Object(u.jsxs)(ee.a,{className:e.root,children:[Object(u.jsx)(te.a,{expandIcon:Object(u.jsx)(ce.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(u.jsx)(S.a,{className:e.heading,children:"Details"})}),Object(u.jsxs)(ne.a,{children:[a.size&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(S.a,{children:["widht: ",a.size.width]}),Object(u.jsx)("br",{}),Object(u.jsxs)(S.a,{ml:2,children:["height: ",a.size.height]})]}),Object(u.jsxs)(S.a,{children:["weight: ",a.weight]})]})]}),Object(u.jsx)("h2",{className:$.a.title,children:"Comments"}),Object(u.jsx)("div",{className:$.a.centered,children:Object(u.jsxs)(ie.a,{fullWidth:!0,className:e.root,variant:"outlined",children:[Object(u.jsx)(re.a,{htmlFor:"outlined-adornment-amount",children:"Comment"}),Object(u.jsx)(oe.a,{id:"outlined-adornment-amount",value:d,labelWidth:60,error:!!C,onChange:function(e){return j(e.target.value)}})]})}),Object(u.jsx)("div",{className:$.a.centered,children:Object(u.jsx)(l.a,{onClick:function(){console.log(d),T.a.post("https://inforce-test-app.herokuapp.com/comments",{description:d,product:Object(O.a)({},a)}).then((function(e){console.log(e),console.log(e.data),U((function(t){return[].concat(Object(h.a)(t),[e.data])}))}))},variant:"contained",children:"Add Comment"})}),_&&_.reverse().map((function(t){return Object(u.jsxs)("div",{className:$.a.offset,children:[Object(u.jsx)(J.a,{className:e.root,p:3,my:3,bgcolor:"text.secondary",children:t.description}),Object(u.jsx)("div",{className:$.a.centered,children:Object(u.jsx)(l.a,{onClick:function(){return function(e){T.a.delete("https://inforce-test-app.herokuapp.com/comments/".concat(e)).then((function(t){U((function(t){return t.filter((function(t){return t.id!==e}))}))}))}(t.id)},variant:"contained",color:"secondary",children:"Delete"})})]},t.id)})),Object(u.jsxs)(P.a,{open:x,onClose:Z,"aria-labelledby":"form-dialog-title",children:[Object(u.jsx)(E.a,{id:"form-dialog-title",children:"Add new Product"}),Object(u.jsxs)(z.a,{children:[Object(u.jsx)(D.a,{children:"Fill in the form to add new product"}),Object(u.jsx)(ue,{onSubmit:function(e){var t={name:e.name,imageUrl:e.imageUrl,count:e.count,size:{width:e.width,height:e.height},weight:e.weight,description:e.description};Z(),T.a.put("https://inforce-test-app.herokuapp.com/products/".concat(V),t).then((function(e){c(e.data)}))},modalClose:Z,id:a.id})]})]})]})})}}].map((function(e){return e}));n(162);function pe(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"title",children:"The inforce Test app"}),Object(u.jsx)(o.a,{children:je.map((function(e){return Object(u.jsx)(s.a,{exact:e.exact,path:e.path,component:e.component},e.path)}))})]})}c.a.render(Object(u.jsx)(pe,{}),document.getElementById("root"))},34:function(e,t,n){e.exports={title:"ProductPage_title__uNIMe",subtitle:"ProductPage_subtitle__267UQ",mainImage:"ProductPage_mainImage__arHE2",centered:"ProductPage_centered__jig0z",offset:"ProductPage_offset__1oiTw"}},45:function(e,t,n){e.exports={title:"Products_title__3Qj-C",offset:"Products_offset__1BLQf",centered:"Products_centered__1gokw",offsetX:"Products_offsetX__1T2Wx"}}},[[163,1,2]]]);
//# sourceMappingURL=main.46048188.chunk.js.map