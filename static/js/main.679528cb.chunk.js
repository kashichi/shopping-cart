(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(14),s=c.n(i),n=(c(21),c(7)),r=(c(22),c(15)),d=c(6),o=c(16),p=c(2),l=(c(23),c(0));function m(e){var t=e.product,c=e.onAdd;return Object(l.jsxs)("div",{className:"card col col-md-2 mt-3 mx-4",onClick:function(){return c(t)},children:[Object(l.jsx)("img",{src:t.imgUrl,className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("p",{className:"card-text text-center fs-6 position-relative",children:t.name}),Object(l.jsxs)("p",{className:"card-text text-center fw-bolder fs-4",children:["$",t.price]}),Object(l.jsx)("button",{className:"btn btn-outline-dark p-2 w-100",children:"Add to cart"})]})]})}function j(e){var t=e.products,c=e.onAdd;return Object(l.jsx)("div",{className:"container row justify-content-end mt-5",children:t.map((function(e){return Object(l.jsx)(m,{onAdd:c,product:e},e.id)}))})}var b=c(5),h=c(8),u=c(9);c(30);b.b.add(u.c);var f=function(e){var t=e.quantity;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar fixed-top navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(n.b,{to:"/",className:"navbar-brand",children:"Shopping"}),Object(l.jsx)("ul",{className:"nav justify-content-end",style:{fontSize:"0.5rem"},children:Object(l.jsxs)("li",{className:"nav-item",children:[Object(l.jsxs)(n.b,{to:"/my-cart",children:[Object(l.jsx)(h.a,{icon:"shopping-cart",size:"3x",className:"fas fa-shopping-cart fa-3x i","aria-disabled":"true"})," "]}),Object(l.jsx)("span",{className:"quantity",children:t})]})})]})})})},x=[{id:"1",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",name:"Cat Tee Black",price:10.9},{id:"2",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg",name:"Dark Thug Blue-Navy",price:29.45},{id:"3",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg",name:"Sphynx Tie Dye Wine",price:9},{id:"4",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.84c82a5a.jpg",name:"Skuul",price:14},{id:"5",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.a313534c.jpg",name:"Wine Skul",price:13.25},{id:"6",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.87b5353e.jpg",name:"Cat Tee Black",price:10.9},{id:"7",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.75f51cec.jpg",name:"Sphynx Tie Dye Grey",price:10.9},{id:"8",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.7faf6a31.jpg",name:"Danger Knife Grey",price:14.9},{id:"9",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg",name:"White DGK Script Tee",price:14.9},{id:"10",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.59b64365.jpg",name:"Born On The Streets",price:25.9},{id:"11",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.54fbf816.jpg",name:"Tso 3D Short Sleeve",price:10.9},{id:"12",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.45a051e0.jpg",name:"Cat Tee Grey",price:49.9},{id:"13",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.d78e2790.jpg",name:"Crazy Monkey Black",price:22.5},{id:"14",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.843a4713.jpg",name:"Tso 3D Black",price:18.7},{id:"15",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.06ec2c62.jpg",name:"Crazy Monkey Grey",price:134.9},{id:"16",imgUrl:"https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.4c799bac.jpg",name:"On The Streets Black",price:49}];c(31),c(32);b.b.add(u.a,u.b,u.d);var g=function(e){var t=e.item,c=e.onAdd,a=e.onRemove,i=e.onX;return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{className:" position-relative",children:[Object(l.jsx)("img",{src:t.imgUrl,alt:"...",width:"95",height:"115"}),Object(l.jsx)("p",{className:" fs-5 text",children:t.name})]}),Object(l.jsx)("td",{className:"position-relative",children:Object(l.jsxs)("p",{className:" fs-5 price",children:["$",t.price]})}),Object(l.jsx)("td",{className:"position-relative",children:Object(l.jsxs)("p",{className:" fs-5 piece",children:[Object(l.jsx)(h.a,{icon:"minus",size:"0.75x",className:"fas fa-minus fa-sm mx-3 ops",onClick:function(){return a(t)},"aria-disabled":"true"}),t.qty,Object(l.jsx)(h.a,{icon:"plus",size:"0.75x",className:"fas fa-plus fa-sm mx-3 ops",onClick:function(){return c(t)},"aria-disabled":"true"})]})}),Object(l.jsx)("td",{className:"position-relative",children:Object(l.jsxs)("p",{className:" fs-5 total",children:["$",(t.qty*t.price).toFixed(2)]})}),Object(l.jsx)("td",{className:"position-relative",children:Object(l.jsx)("span",{className:" fs-5 x",children:Object(l.jsx)(h.a,{icon:"times",size:"0.75x",className:"fas fa-times fa-sm ops",onClick:function(){return i(t)}})})})]})};function O(e){var t=e.cartItems,c=e.onAdd,a=e.onRemove,i=e.onX,s=t.reduce((function(e,t){return e+t.price*t.qty}),0);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container justify-content-end",children:[Object(l.jsx)("h1",{className:"text-center mt-5",children:"My Cart"}),0===t.length&&Object(l.jsx)("div",{children:"Cart is Empty"}),0!==t.length&&Object(l.jsxs)("table",{className:"table table-borderless mt-2",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",className:" text-center",children:"Product"}),Object(l.jsx)("th",{scope:"col",className:" text-center",children:"Price"}),Object(l.jsx)("th",{scope:"col",className:" text-center",children:"Piece"}),Object(l.jsx)("th",{scope:"col",className:" text-center",children:"Total Price"}),Object(l.jsx)("th",{})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(g,{onAdd:c,onRemove:a,item:e,onX:i},e.id)}))})]}),Object(l.jsxs)("div",{id:"check",className:"position-relative",children:[Object(l.jsxs)("h2",{id:"check-price",children:["$",s.toFixed(2)]}),Object(l.jsx)("button",{className:"btn btn-outline-dark btn-lg",onClick:function(){return alert("The total cost of the products in your cart is $".concat(s.toFixed(2)))},id:"check-btn",children:"Check Out"})]})]})})}var v=function(){var e=x,t=Object(a.useState)([]),c=Object(o.a)(t,2),i=c[0],s=c[1],n=function(e){var t=i.find((function(t){return t.id===e.id}));s(t?i.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(r.a)(i),[Object(d.a)(Object(d.a)({},e),{},{qty:1})]))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{quantity:i.reduce((function(e,t){return e+t.qty}),0)}),Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/",exact:!0,element:Object(l.jsx)(j,{onAdd:n,products:e})}),Object(l.jsx)(p.a,{path:"/my-cart",exact:!0,element:Object(l.jsx)(O,{onAdd:n,onRemove:function(e){var t=i.find((function(t){return t.id===e.id}));1===t.qty?s(i.filter((function(t){return t.id!==e.id}))):s(i.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty-1}):c})))},cartItems:i,onX:function(e){s(i.filter((function(t){return t.id!==e.id})))}})})]})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.679528cb.chunk.js.map