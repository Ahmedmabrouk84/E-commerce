import './polyfills.server.mjs';
import{a as B,b as R,c as V,d as j}from"./chunk-KCP5Y4CT.mjs";import{a as H}from"./chunk-P5S6MFMH.mjs";import{a as G}from"./chunk-4MXZPTIR.mjs";import"./chunk-GTSSCL6B.mjs";import{a as z}from"./chunk-N2JTKOFB.mjs";import"./chunk-UPZVLXEB.mjs";import{h as F}from"./chunk-OSVV6JAO.mjs";import{Bb as c,Cb as m,Db as M,Fb as T,Gb as E,Ja as b,Lb as I,Na as a,Nb as k,V as d,Z as x,cb as p,eb as g,ha as S,ia as D,ib as f,jb as C,kb as v,lb as h,mb as n,nb as o,ob as u,pb as P,qb as w,rb as O,tb as y,tc as A,ub as _}from"./chunk-NLDXJT5S.mjs";import"./chunk-VVCT4QZE.mjs";var N=()=>[1,2,3,4,5];function U(t,r){if(t&1&&(n(0,"div"),u(1,"img",15),o()),t&2){let i=_().$implicit;a(),g("src",i,b)("alt",i)}}function $(t,r){t&1&&p(0,U,2,2,"ng-template",5)}function q(t,r){t&1&&(n(0,"span",12),u(1,"i",16),o())}function J(t,r){t&1&&(n(0,"span",12),u(1,"i",17),o())}function K(t,r){if(t&1){let i=O();n(0,"section")(1,"h1",0),c(2,"Details of Product"),o(),n(3,"div",1)(4,"div",2)(5,"div",3)(6,"owl-carousel-o",4),P(7),v(8,$,1,0,null,5,C),w(),o()()(),n(10,"div",6)(11,"div",7)(12,"h2"),c(13),o(),n(14,"p",8),c(15),o(),n(16,"h3",9),c(17),o(),n(18,"div",10)(19,"span",11),c(20),I(21,"currency"),o(),n(22,"div",12),v(23,q,2,0,"span",12,C),p(25,J,2,0,"span",12),n(26,"span",13),c(27),o()()(),n(28,"button",14),y("click",function(){S(i);let e=_();return D(e.addToCart(e.productDetails.id))}),c(29,"+Add To Cart"),o()()()()()}if(t&2){let i=_();a(6),g("options",i.customOptionsProduct),a(2),h(i.productDetails.images),a(5),m(i.productDetails.title),a(2),m(i.productDetails.description),a(2),m(i.productDetails.category.name),a(3),m(k(21,7,i.productDetails.price,"GBP")),a(3),h(E(10,N).slice(0,i.productDetails.ratingsAverage)),a(2),f(25,i.productDetails.ratingsAverage%2!==0?25:-1),a(2),M("",i.productDetails.ratingsAverage," ")}}var rt=(()=>{let r=class r{constructor(){this._ActivatedRoute=d(F),this._ProductsService=d(B),this._CartService=d(z),this._ToastrService=d(G),this.productDetails=null,this.customOptionsProduct={loop:!0,mouseDrag:!0,autoplay:!0,touchDrag:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this.productDetailsSubscription=this._ActivatedRoute.paramMap.subscribe({next:s=>{console.log(s);let e=s.get("id");this._ProductsService.getSpecificProduct(e).subscribe({next:l=>{this.productDetails=l.data,console.log(this.productDetails)},error:l=>{console.log(l)}})}})}addToCart(s){this.productDetailsSubscription=this._CartService.addProductToCart(s).subscribe({next:e=>{console.log(e),this._CartService.cartNumber.set(e.numOfCartItems),H.fire({position:"top-end",icon:"success",title:e.message,showConfirmButton:!1,timer:1500})},error:e=>{console.log(e)}})}ngOnDestroy(){this.productDetailsSubscription?.unsubscribe()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=x({type:r,selectors:[["app-details"]],standalone:!0,features:[T],decls:1,vars:1,consts:[[1,"text-main","text-center"],[1,"row","align-items-center"],[1,"col-md-3"],[1,"main-slider"],[3,"options"],["carouselSlide",""],[1,"col-md-9"],[1,"details"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","my-2"],[1,"weight-600","text-main"],[1,""],[1,"text-muted","ms-1"],[1,"btn-main","w-100",3,"click"],[1,"w-100","mb-2",3,"src","alt"],[1,"fas","fa-star","text-warning"],[1,"fa-solid","fa-star-half-stroke","text-warning"]],template:function(e,l){e&1&&p(0,K,30,11,"section"),e&2&&f(0,l.productDetails?0:-1)},dependencies:[j,V,R,A],styles:['.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600}.details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-weight:800}.weight-600[_ngcontent-%COMP%]{font-weight:600}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:800;text-align:center;margin-block:1.5625rem;position:relative}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{position:absolute;content:"";background-color:#0aad0a;width:3.125rem;height:.3125rem;border-bottom-right-radius:.625rem;border-top-left-radius:.625rem;left:46%;bottom:-.625rem;transition:.5s}section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover:after{width:6.25rem}']});let t=r;return t})();export{rt as DetailsComponent};
