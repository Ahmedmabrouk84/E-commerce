import{a as p}from"./chunk-X2WS24ES.js";import{a as e}from"./chunk-WC2PJSB3.js";import{U as n,_ as s,qc as c}from"./chunk-NGC62TKG.js";var d=(()=>{let t=class t{constructor(){this._HttpClient=s(c),this._AuthService=s(p)}checkoutSession(r,o){return this._HttpClient.post(`${e.baseUrl}/api/v1/orders/checkout-session/${r}?url=http:${e.baseServerUrl}`,{shippingAddress:o})}getAllUserOrders(r){return this._HttpClient.get(`${e.baseUrl}/api/v1/orders/user/${r}`)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{d as a};
