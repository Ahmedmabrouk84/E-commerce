import './polyfills.server.mjs';
import{a as x}from"./chunk-7YEQNOM6.mjs";import{a as w}from"./chunk-P5S6MFMH.mjs";import"./chunk-UPZVLXEB.mjs";import{Bb as r,Db as L,Fb as g,Ja as l,Na as a,V as m,Z as d,eb as h,jb as p,kb as u,lb as f,mb as n,nb as o,ob as v}from"./chunk-NLDXJT5S.mjs";import"./chunk-VVCT4QZE.mjs";function S(i,t){if(i&1&&(n(0,"div",3)(1,"div",4)(2,"div",5),v(3,"img",6),o(),n(4,"h2",7),r(5),o()()()),i&2){let c=t.$implicit;a(3),h("src",c.imageCover,l),a(2),L(" ",c.brand.name,"")}}var D=(()=>{let t=class t{constructor(){this._WishListService=m(x),this.WishListData=[],this.wishListList=[]}ngOnInit(){this._WishListService.getProductsWishList().subscribe({next:s=>{this.wishListList=s.data,console.log(s.data)}})}deletFromWishList(s){this._WishListService.deleteProductFromWishList(s).subscribe({next:e=>{this.WishListData=e.data,console.log(e),w.fire({position:"top-end",icon:"success",title:e.message,showConfirmButton:!1,timer:1500})}})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-wish-list"]],standalone:!0,features:[g],decls:6,vars:0,consts:[[1,"bg-main-light","w-75","mx-auto","my-4","rounded-4","shadow","p-4"],[1,"h2","text-center","text-main","f-weigh-800"],[1,"row","g-3"],[1,"col-md-2","text-center"],[1,"shadow","product"],[1,"img","position-relative"],["alt","",1,"w-100",3,"src"],[1,"h5"]],template:function(e,W){e&1&&(n(0,"section",0)(1,"h1",1),r(2," Wish List "),o(),n(3,"div",2),u(4,S,6,2,"div",3,p),o()()),e&2&&(a(4),f(W.wishListList))}});let i=t;return i})();export{D as WishListComponent};
