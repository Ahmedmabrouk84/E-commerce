import './polyfills.server.mjs';
import{a as _}from"./chunk-P5S6MFMH.mjs";import{a as F}from"./chunk-4MXZPTIR.mjs";import"./chunk-GTSSCL6B.mjs";import{a as V}from"./chunk-N2JTKOFB.mjs";import"./chunk-UPZVLXEB.mjs";import{l as M}from"./chunk-OSVV6JAO.mjs";import{Bb as s,Db as f,Fb as B,Hb as E,Ja as k,Lb as O,Na as l,Nb as w,V as h,Ya as y,Z as S,cb as g,eb as x,ha as m,ia as u,ib as b,kb as P,lb as T,mb as c,nb as o,ob as C,rb as v,tb as p,tc as I,ub as d}from"./chunk-NLDXJT5S.mjs";import"./chunk-VVCT4QZE.mjs";var D=(n,a)=>a.product.id,Y=n=>["/orders",n];function $(n,a){if(n&1){let r=v();c(0,"button",7),p("click",function(){m(r);let t=d();return u(t.clearCart())})("click",function(){m(r);let t=d();return u(t.clearCart())}),s(1," Clear Cart "),C(2,"i",8),o()}}function j(n,a){if(n&1){let r=v();c(0,"div",5)(1,"div",9)(2,"div",10),C(3,"img",11),o()(),c(4,"div",12)(5,"div",13)(6,"div",14)(7,"h3",15),s(8),o(),c(9,"p",16),s(10),O(11,"currency"),o(),c(12,"button",17),p("click",function(){let t=m(r).$implicit,i=d();return u(i.deleteItem(t.product.id))}),C(13,"i",18),s(14," Remove "),o()(),c(15,"div",19)(16,"span",20),p("click",function(){let t=m(r).$implicit,i=d();return u(i.updateCount(t.product.id,t.count+1))}),C(17,"i",21),o(),c(18,"p",22),s(19),o(),c(20,"span",23),p("click",function(){let t=m(r).$implicit,i=d();return u(i.updateCount(t.product.id,t.count-1))}),C(21,"i",24),o()()()()()}if(n&2){let r=a.$implicit;l(3),x("src",r.product.imageCover,k)("alt",r.product.title),l(5),f(" ",r.product.title," "),l(2),f(" Price:",w(11,5,r.price,"GBP")," "),l(9),f(" ",r.count," ")}}function L(n,a){if(n&1&&(c(0,"button",6),s(1,"Confirme Order"),o()),n&2){let r=d();x("routerLink",E(1,Y,r.detailesOfCart()._id))}}var H=(()=>{let a=class a{constructor(){this._CartService=h(V),this._ToastrService=h(F),this.detailesOfCart=y({}),this.checkOnBtnClear=!1}ngOnInit(){this.detailesOfCartSubscription=this._CartService.getProductsFromCart().subscribe({next:e=>{console.log(e.data),this.detailesOfCart.set(e.data),this.detailesOfCart().totalCartPrice===0?this.checkOnBtnClear=!1:this.checkOnBtnClear=!0},error:e=>{console.log(e)}})}deleteItem(e){this.detailesOfCartSubscription=this._CartService.deleteSpacificCartItem(e).subscribe({next:t=>{console.log(t.data),this.detailesOfCart.set(t.data),this._CartService.cartNumber.set(t.numOfCartItems),_.fire(" Item  Deleted successfully")},error:t=>{console.log(t)}})}updateCount(e,t){t>0&&(this.detailesOfCartSubscription=this._CartService.updateCartProductQuantity(e,t).subscribe({next:i=>{console.log(i),this.detailesOfCart.set(i.data),this._ToastrService.success("Products Of Your Cart's, Quantity is Updating","Fresh cart")},error:i=>{console.log(i)}}))}clearCart(){this.detailesOfCartSubscription=this._CartService.clearUserCart().subscribe({next:e=>{console.log(e),_.fire({title:"Are you sure For Clear Your Cart ?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#0aad0a",cancelButtonColor:"#d33",confirmButtonText:"Yes, Clear It"}).then(t=>{t.isConfirmed&&(e.message==="success"&&(this.detailesOfCart.set({}),this.checkOnBtnClear=!1,this._CartService.cartNumber.set(e.numOfCartItems)),_.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success"}))})},error:e=>{console.log(e),_.fire("Falid To Clear Data.")}})}ngOnDestroy(){this.detailesOfCartSubscription?.unsubscribe()}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=S({type:a,selectors:[["app-cart"]],standalone:!0,features:[B],decls:11,vars:6,consts:[[1,"bg-main-light","w-75","mx-auto","my-4","rounded-4","shadow","p-4"],[1,"d-flex","justify-content-between"],[1,"h2","f-weight-800","text-main"],[1,"btn","btn-outline-danger","f-weight-600"],[1,"text-main","h5","text-center","f-weight-600","my-3"],[1,"row","mb-1","border-bottom","align-items-center"],[1,"btn-main","my-2","f-weight-600",3,"routerLink"],[1,"btn","btn-outline-danger","f-weight-600",3,"click"],[1,"px-1","fa-solid","fa-trash-can"],[1,"col-md-1"],[1,"img"],[1,"w-100",3,"src","alt"],[1,"col-md-11"],[1,"d-flex","justify-content-between","align-items-center"],[1,"py-2"],[1,"h5"],[1,"m-0","mb-2","text-main"],[1,"btn","border-0","p-0",3,"click"],[1,"fa-regular","fa-trash-can","icon","text-danger"],[1,"d-flex","gap-2","align-items-center","justify-content-between"],[1,"text-main",3,"click"],[1,"fa-solid","fa-circle-plus","icon"],[1,"f-weight-600","m-0"],[3,"click"],[1,"fa-solid","fa-circle-minus","icon","text-danger"]],template:function(t,i){t&1&&(c(0,"section",0)(1,"div",1)(2,"h1",2),s(3,"Cart Shop"),o(),g(4,$,3,0,"button",3),o(),c(5,"p",4),s(6),O(7,"currency"),o(),P(8,j,22,8,"div",5,D),g(10,L,2,3,"button",6),o()),t&2&&(l(4),b(4,i.checkOnBtnClear==!0?4:-1),l(2),f(" Total Cart Price : ",w(7,3,i.detailesOfCart().totalCartPrice,"GBP")," "),l(2),T(i.detailesOfCart().products),l(2),b(10,i.checkOnBtnClear==!0?10:-1))},dependencies:[I,M],styles:['section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;position:relative}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{position:absolute;content:"";background-color:#0aad0a;width:3.5rem;height:.3125rem;border-bottom-right-radius:.625rem;border-top-left-radius:.625rem;left:10%;bottom:-.625rem;transition:.6s}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover:after{width:6.25rem}']});let n=a;return n})();export{H as CartComponent};
