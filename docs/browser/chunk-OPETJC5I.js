import{a as e}from"./chunk-WC2PJSB3.js";import{U as n,Za as c,_ as o,qc as p}from"./chunk-NGC62TKG.js";var C=(()=>{let t=class t{constructor(){this._HttpClient=o(p),this.cartNumber=c(0)}addProductToCart(r){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:r})}getProductsFromCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`)}deleteSpacificCartItem(r){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${r}`)}updateCartProductQuantity(r,a){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${r}`,{count:a})}clearUserCart(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart`)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{C as a};
