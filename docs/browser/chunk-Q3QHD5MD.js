import{a as V,b as C,c as N,d as q,g as R,h as A,i as G,j as B,l as D}from"./chunk-RJPPZXY3.js";import{a as M}from"./chunk-X2WS24ES.js";import{l as T}from"./chunk-KGVPFQ6V.js";import{g as F}from"./chunk-4QM3FWZE.js";import"./chunk-WC2PJSB3.js";import{Cb as d,Gb as S,Jb as w,Oa as a,_ as f,ba as h,db as p,fb as u,fc as b,jb as m,la as v,ma as y,nb as l,ob as o,pb as g,sb as P,ub as x,vb as _}from"./chunk-NGC62TKG.js";var E=(n,r)=>({"is-valid":n,"is-invalid":r});function k(n,r){n&1&&(l(0,"p",11),d(1,"Email is Required"),o())}function j(n,r){n&1&&(l(0,"p",11),d(1,"Enter Valid Email"),o())}function $(n,r){if(n&1&&(l(0,"div",7),p(1,k,2,0,"p",11)(2,j,2,0,"p",11),o()),n&2){let t,i,e=_(2);a(),m(1,(t=e.verifyEmail.get("email"))!=null&&t.getError("required")?1:-1),a(),m(2,(i=e.verifyEmail.get("email"))!=null&&i.getError("email")?2:-1)}}function I(n,r){if(n&1){let t=P();l(0,"form",3),x("ngSubmit",function(){v(t);let e=_();return y(e.setEmailSubmit())}),l(1,"div",4)(2,"label",5),d(3,"Email"),o(),g(4,"input",6),p(5,$,3,2,"div",7),o(),l(6,"div",8)(7,"div",9)(8,"button",10),d(9," Verify Email "),o()()()()}if(n&2){let t,i,e=_();u("formGroup",e.verifyEmail),a(4),u("ngClass",w(4,E,!((t=e.verifyEmail.get("email"))!=null&&t.errors)&&(((t=e.verifyEmail.get("email"))==null?null:t.touched)||((t=e.verifyEmail.get("email"))==null?null:t.dirty)),((t=e.verifyEmail.get("email"))==null?null:t.errors)&&(((t=e.verifyEmail.get("email"))==null?null:t.touched)||((t=e.verifyEmail.get("email"))==null?null:t.dirty)))),a(),m(5,(i=e.verifyEmail.get("email"))!=null&&i.errors&&((i=e.verifyEmail.get("email"))!=null&&i.touched||(i=e.verifyEmail.get("email"))!=null&&i.dirty)?5:-1),a(3),u("disabled",e.verifyEmail.invalid)}}function U(n,r){n&1&&(l(0,"p",11),d(1,"Reset Code is Required"),o())}function z(n,r){n&1&&(l(0,"p",11),d(1,"Code must be at least 6 chars"),o())}function H(n,r){if(n&1&&(l(0,"div",7),p(1,U,2,0,"p",11)(2,z,2,0,"p",11),o()),n&2){let t,i,e=_(2);a(),m(1,(t=e.verifyCode.get("resetCode"))!=null&&t.getError("required")?1:-1),a(),m(2,(i=e.verifyCode.get("resetCode"))!=null&&i.getError("pattern")?2:-1)}}function J(n,r){if(n&1){let t=P();l(0,"form",3),x("ngSubmit",function(){v(t);let e=_();return y(e.setCodeSubmit())}),l(1,"div",4)(2,"label",12),d(3,"Reset Code"),o(),g(4,"input",13),p(5,H,3,2,"div",7),o(),l(6,"div",8)(7,"div",9)(8,"button",10),d(9," Verify Code "),o()()()()}if(n&2){let t,i,e=_();u("formGroup",e.verifyCode),a(4),u("ngClass",w(4,E,!((t=e.verifyCode.get("resetCode"))!=null&&t.errors)&&(((t=e.verifyCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyCode.get("resetCode"))==null?null:t.dirty)),((t=e.verifyCode.get("resetCode"))==null?null:t.errors)&&(((t=e.verifyCode.get("resetCode"))==null?null:t.touched)||((t=e.verifyCode.get("resetCode"))==null?null:t.dirty)))),a(),m(5,(i=e.verifyCode.get("resetCode"))!=null&&i.errors&&((i=e.verifyCode.get("resetCode"))!=null&&i.touched||(i=e.verifyCode.get("resetCode"))!=null&&i.dirty)?5:-1),a(3),u("disabled",e.verifyCode.invalid)}}function K(n,r){n&1&&(l(0,"p",11),d(1,"Email is Required"),o())}function L(n,r){n&1&&(l(0,"p",11),d(1,"Enter Valid Email"),o())}function O(n,r){if(n&1&&(l(0,"div",7),p(1,K,2,0,"p",11)(2,L,2,0,"p",11),o()),n&2){let t,i,e=_(2);a(),m(1,(t=e.restePassword.get("email"))!=null&&t.getError("required")?1:-1),a(),m(2,(i=e.restePassword.get("email"))!=null&&i.getError("email")?2:-1)}}function Q(n,r){n&1&&(l(0,"p",11),d(1,"New Password is Required"),o())}function W(n,r){n&1&&(l(0,"p",11),d(1,"New Password must be at least 6 chars"),o())}function X(n,r){if(n&1&&(l(0,"div",7),p(1,Q,2,0,"p",11)(2,W,2,0,"p",11),o()),n&2){let t,i,e=_(2);a(),m(1,(t=e.restePassword.get("newPassword"))!=null&&t.getError("required")?1:-1),a(),m(2,(i=e.restePassword.get("newPassword"))!=null&&i.getError("pattern")?2:-1)}}function Y(n,r){if(n&1){let t=P();l(0,"form",3),x("ngSubmit",function(){v(t);let e=_();return y(e.setNewPasswordSubmit())}),l(1,"div",4)(2,"label",5),d(3,"Email"),o(),g(4,"input",14),p(5,O,3,2,"div",7),o(),l(6,"div",4)(7,"label",15),d(8,"New Password"),o(),g(9,"input",16),p(10,X,3,2,"div",7),o(),l(11,"div",8)(12,"div",9)(13,"button",10),d(14," Verify Acoint "),o()()()()}if(n&2){let t,i,e,c,s=_();u("formGroup",s.restePassword),a(4),u("ngClass",w(6,E,!((t=s.restePassword.get("email"))!=null&&t.errors)&&(((t=s.restePassword.get("email"))==null?null:t.touched)||((t=s.restePassword.get("email"))==null?null:t.dirty)),((t=s.restePassword.get("email"))==null?null:t.errors)&&(((t=s.restePassword.get("email"))==null?null:t.touched)||((t=s.restePassword.get("email"))==null?null:t.dirty)))),a(),m(5,(i=s.restePassword.get("email"))!=null&&i.errors&&((i=s.restePassword.get("email"))!=null&&i.touched||(i=s.restePassword.get("email"))!=null&&i.dirty)?5:-1),a(4),u("ngClass",w(9,E,!((e=s.restePassword.get("newPassword"))!=null&&e.errors)&&(((e=s.restePassword.get("newPassword"))==null?null:e.touched)||((e=s.restePassword.get("newPassword"))==null?null:e.dirty)),((e=s.restePassword.get("newPassword"))==null?null:e.errors)&&(((e=s.restePassword.get("newPassword"))==null?null:e.touched)||((e=s.restePassword.get("newPassword"))==null?null:e.dirty)))),a(),m(10,(c=s.restePassword.get("newPassword"))!=null&&c.errors&&((c=s.restePassword.get("newPassword"))!=null&&c.touched||(c=s.restePassword.get("newPassword"))!=null&&c.dirty)?10:-1),a(3),u("disabled",s.restePassword.invalid)}}var se=(()=>{let r=class r{constructor(){this.step=1,this._FormBuilder=f(B),this._AuthService=f(M),this._Router=f(F),this._ToastrService=f(T),this.verifyEmail=this._FormBuilder.group({email:[null,[C.required,C.email]]}),this.verifyCode=this._FormBuilder.group({resetCode:[null,[C.required,C.pattern(/^\w{6,}$/)]]}),this.restePassword=this._FormBuilder.group({email:[this.verifyEmail.get("email")?.value,[C.required,C.email]],newPassword:[null,[C.required,C.pattern(/^\w{6,}$/)]]})}setEmailSubmit(){let i=this.verifyEmail.get("email")?.value;this.restePassword.get("email")?.patchValue(i),this._AuthService.setVerifyEmail(this.verifyEmail.value).subscribe({next:e=>{console.log(e),e.statusMsg==="success"&&(this.step=2,this._ToastrService.success(e.message,"Fresh Cart"))},error:e=>{console.log(e)}})}setCodeSubmit(){this._AuthService.setVerifyCode(this.verifyCode.value).subscribe({next:i=>{i.status==="Success"&&(console.log(i),this.step=3)}})}setNewPasswordSubmit(){this._AuthService.setNewPassword(this.restePassword.value).subscribe({next:i=>{console.log(i),i.status==="Success"&&(localStorage.setItem("userToken",i.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"]))}})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=h({type:r,selectors:[["app-forgot-password"]],standalone:!0,features:[S],decls:6,vars:1,consts:[[1,"bg-main-light","p-3","my-5","shadow","rounded-4"],[1,"h2","f-weight-600","text-main","text-center","mt-2","mb-3"],[3,"formGroup"],[3,"ngSubmit","formGroup"],[1,"my-3"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control","mt-1",3,"ngClass"],[1,"alert","alert-danger"],[1,"my-2"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"btn-main","d-block",3,"disabled"],[1,"m-0"],["for","resetCode"],["type","text","formControlName","resetCode","id","resetCode",1,"form-control","mt-1",3,"ngClass"],["readonly","","formControlName","email","type","email","id","email",1,"form-control","mt-1",3,"ngClass"],["for","newPassword"],["type","Password","formControlName","newPassword","id","newPassword",1,"form-control","mt-1",3,"ngClass"]],template:function(e,c){e&1&&(l(0,"section",0)(1,"h1",1),d(2,"Forgot Password"),o(),p(3,I,10,7,"form",2)(4,J,10,7)(5,Y,15,12),o()),e&2&&(a(3),m(3,c.step===1?3:c.step===2?4:c.step===3?5:-1))},dependencies:[D,R,V,N,q,A,G,b]});let n=r;return n})();export{se as ForgotPasswordComponent};
