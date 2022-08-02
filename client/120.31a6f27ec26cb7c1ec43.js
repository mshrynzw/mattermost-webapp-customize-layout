"use strict";(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[120],{71120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var r=a(14494),s=a(97779),l=a(33383),o=a(22742),i=a(31055),n=a(45697),m=a.n(n),c=(a(33948),a(41637),a(74916),a(64765),a(4723),a(67294)),d=a(5977),p=a(16406),u=a(96512),h=a(44012),w=a(85163),f=a(66788),E=a(82251),g=a(927);function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class v extends c.PureComponent{constructor(e){super(e),_(this,"submit",(e=>{e.preventDefault();const t={},a=this.passwordInput.current.value;if(!a)return t.error=i._u("claim.oauth_to_email.enterPwd","Please enter a password."),void this.setState(t);const{valid:r,error:s}=i.eW(a,this.props.passwordConfig);if(!r&&s)return void this.setState({error:s});const l=this.passwordConfirmInput.current.value;if(!l||a!==l)return t.error=i._u("claim.oauth_to_email.pwdNotMatch","Passwords do not match."),void this.setState(t);t.error=null,this.setState(t),(0,w.wg)(this.props.currentType,this.props.email,a,(e=>{e.follow_link&&(window.location.href=e.follow_link)}),(e=>{this.setState({error:e.message})}))})),this.state={},this.passwordInput=c.createRef(),this.passwordConfirmInput=c.createRef()}render(){var e=null;this.state.error&&(e=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";e&&(t+=" has-error");const a="".concat(this.props.currentType===f.ZP.SAML_SERVICE?f.ZP.SAML_SERVICE.toUpperCase():i.cv(this.props.currentType)," SSO");return c.createElement("div",null,c.createElement("h3",null,c.createElement(h.Z,{id:"claim.oauth_to_email.title",defaultMessage:"Switch {type} Account to Email",values:{type:a}})),c.createElement("form",{onSubmit:this.submit},c.createElement("p",null,c.createElement(h.Z,{id:"claim.oauth_to_email.description",defaultMessage:"Upon changing your account type, you will only be able to login with your email and password."})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.oauth_to_email.enterNewPwd",defaultMessage:"Enter a new password for your {site} email account",values:{site:this.props.siteName}})),c.createElement("div",{className:t},c.createElement(g.Z,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:(0,E.t)("claim.oauth_to_email.newPwd"),defaultMessage:"New Password"},spellCheck:"false"})),c.createElement("div",{className:t},c.createElement(g.Z,{type:"password",className:"form-control",name:"passwordconfirm",ref:this.passwordConfirmInput,placeholder:{id:(0,E.t)("claim.oauth_to_email.confirm"),defaultMessage:"Confirm Password"},spellCheck:"false"})),e,c.createElement("button",{type:"submit",className:"btn btn-primary"},c.createElement(h.Z,{id:"claim.oauth_to_email.switchTo",defaultMessage:"Switch {type} to Email and Password",values:{type:a}}))))}}_(v,"propTypes",{currentType:m().string,email:m().string,siteName:m().string,passwordConfig:m().object});var b=a(12477);function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class P extends c.PureComponent{constructor(e){super(e),y(this,"preSubmit",(e=>{e.preventDefault();var t={},a=this.passwordInput.current.value;if(!a)return t.error=i._u("claim.email_to_oauth.pwdError","Please enter your password."),void this.setState(t);this.setState({password:a}),t.error=null,this.setState(t),this.submit(this.props.email,a,"")})),y(this,"submit",((e,t,a)=>{(0,w.go)(e,t,a,this.props.newType,(e=>{e.follow_link&&(window.location.href=e.follow_link)}),(e=>{this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==e.server_error_id?this.setState({error:e.message,showMfa:!1}):this.setState({showMfa:!0})}))})),this.state={showMfa:!1,password:""},this.passwordInput=c.createRef()}render(){var e=null;this.state.error&&(e=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.error)));var t="form-group";e&&(t+=" has-error");const a=this.props.newType===f.ZP.SAML_SERVICE?f.ZP.SAML_SERVICE.toUpperCase():i.cv(this.props.newType),r="".concat(a," SSO");let s;return s=this.state.showMfa?c.createElement(b.Z,{loginId:this.props.email,password:this.state.password,title:{id:(0,E.t)("claim.email_to_oauth.title"),defaultMessage:"Switch Email/Password Account to {uiType}",values:{uiType:r}},onSubmit:this.submit}):c.createElement(c.Fragment,null,c.createElement("h3",null,c.createElement(h.Z,{id:"claim.email_to_oauth.title",defaultMessage:"Switch Email/Password Account to {uiType}",values:{uiType:r}})),c.createElement("form",{onSubmit:this.preSubmit},c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_oauth.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with {type} SSO",values:{type:a}})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_oauth.ssoNote",defaultMessage:"You must already have a valid {type} account",values:{type:a}})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_oauth.enterPwd",defaultMessage:"Enter the password for your {site} account",values:{site:this.props.siteName}})),c.createElement("div",{className:t},c.createElement(g.Z,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:(0,E.t)("claim.email_to_oauth.pwd"),defaultMessage:"Password"},spellCheck:"false"})),e,c.createElement("button",{type:"submit",className:"btn btn-primary"},c.createElement(h.Z,{id:"claim.email_to_oauth.switchTo",defaultMessage:"Switch Account to {uiType}",values:{uiType:r}})))),c.createElement("div",null,s)}}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}y(P,"propTypes",{newType:m().string,email:m().string,siteName:m().string}),a(23157);class N extends c.PureComponent{constructor(e){super(e),C(this,"preSubmit",(e=>{e.preventDefault();var t={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:""};const a=this.ldapPasswordInput.current.value;if(!a)return t.ldapPasswordError=i._u("claim.ldap_to_email.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(t);const r=this.passwordInput.current.value;if(!r)return t.passwordError=i._u("claim.ldap_to_email.pwdError","Please enter your password."),void this.setState(t);const{valid:s,error:l}=i.eW(r,this.props.passwordConfig);if(!s&&l)return void this.setState({passwordError:l});const o=this.passwordConfirmInput.current.value;if(!o||r!==o)return t.confirmError=i._u("claim.ldap_to_email.pwdNotMatch","Passwords do not match."),void this.setState(t);t.password=r,t.ldapPassword=a,this.setState(t),this.submit(this.props.email,r,"",a)})),C(this,"submit",((e,t,a,r)=>{this.props.switchLdapToEmail(r||this.state.ldapPassword,this.props.email,t,a).then((e=>{let{data:t,error:a}=e;t&&t.follow_link?window.location.href=t.follow_link:a&&(a.server_error_id.startsWith("model.user.is_valid.pwd")?this.setState({passwordError:a.message,showMfa:!1}):"ent.ldap.do_login.invalid_password.app_error"===a.server_error_id?this.setState({ldapPasswordError:a.message,showMfa:!1}):this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==a.server_error_id?this.setState({serverError:a.message,showMfa:!1}):this.setState({showMfa:!0}))}))})),this.state={passwordError:"",confirmError:"",ldapPasswordError:"",serverError:"",showMfa:!0,password:"trwo"},this.ldapPasswordInput=c.createRef(),this.passwordInput=c.createRef(),this.passwordConfirmInput=c.createRef()}render(){let e=null,t="form-group";this.state.serverError&&(e=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.serverError)),t+=" has-error");let a=null,r="form-group";this.state.passwordError&&(a=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.passwordError)),r+=" has-error");let s=null,l="form-group";this.state.ldapPasswordError&&(s=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),l+=" has-error");let o=null,n="form-group";this.state.confirmError&&(o=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.confirmError)),n+=" has-error");const m=i._u("claim.ldap_to_email.ldapPwd","AD/LDAP Password");let d;return d=this.state.showMfa?c.createElement(b.Z,{loginId:this.props.email,password:this.state.password,title:{id:(0,E.t)("claim.ldap_to_email.title"),defaultMessage:"Switch AD/LDAP Account to Email/Password"},onSubmit:this.submit}):c.createElement(c.Fragment,null,c.createElement("h3",null,c.createElement(h.Z,{id:"claim.ldap_to_email.title",defaultMessage:"Switch AD/LDAP Account to Email/Password"})),c.createElement("form",{onSubmit:this.preSubmit,className:t},c.createElement("p",null,c.createElement(h.Z,{id:"claim.ldap_to_email.email",defaultMessage:"After switching your authentication method, you will use {email} to login. Your AD/LDAP credentials will no longer allow access to Mattermost.",values:{email:this.props.email}})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.ldap_to_email.enterLdapPwd",defaultMessage:"{ldapPassword}:",values:{ldapPassword:m}})),c.createElement("div",{className:l},c.createElement("input",{type:"password",className:"form-control",name:"ldapPassword",ref:this.ldapPasswordInput,placeholder:m,spellCheck:"false"})),s,c.createElement("p",null,c.createElement(h.Z,{id:"claim.ldap_to_email.enterPwd",defaultMessage:"New email login password:"})),c.createElement("div",{className:r},c.createElement(g.Z,{type:"password",className:"form-control",name:"password",ref:this.passwordInput,placeholder:{id:(0,E.t)("claim.ldap_to_email.pwd"),defaultMessage:"Password"},spellCheck:"false"})),a,c.createElement("div",{className:n},c.createElement(g.Z,{type:"password",className:"form-control",name:"passwordconfirm",ref:this.passwordConfirmInput,placeholder:{id:(0,E.t)("claim.ldap_to_email.confirm"),defaultMessage:"Confirm Password"},spellCheck:"false"})),o,c.createElement("button",{type:"submit",className:"btn btn-primary"},c.createElement(h.Z,{id:"claim.ldap_to_email.switchTo",defaultMessage:"Switch account to email/password"})),e)),c.createElement("div",null,d)}}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}C(N,"propTypes",{email:m().string,passwordConfig:m().object,switchLdapToEmail:m().func.isRequired}),a(73210);class M extends c.PureComponent{constructor(e){super(e),S(this,"preSubmit",(e=>{e.preventDefault();var t={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:""};const a=this.emailPasswordInput.current&&this.emailPasswordInput.current.value;if(!a)return t.passwordError=i._u("claim.email_to_ldap.pwdError","Please enter your password."),void this.setState(t);const r=this.ldapIdInput.current&&this.ldapIdInput.current.value.trim();if(!r)return t.ldapError=i._u("claim.email_to_ldap.ldapIdError","Please enter your AD/LDAP ID."),void this.setState(t);const s=this.ldapPasswordInput.current&&this.ldapPasswordInput.current.value;if(!s)return t.ldapPasswordError=i._u("claim.email_to_ldap.ldapPasswordError","Please enter your AD/LDAP password."),void this.setState(t);t.password=a,t.ldapId=r,t.ldapPassword=s,this.setState(t),this.submit(this.props.email,a,"",r,s)})),S(this,"submit",((e,t,a,r,s)=>{(0,w.Is)(e,t,a,r||this.state.ldapId,s||this.state.ldapPassword,(e=>{e.follow_link&&(window.location.href=e.follow_link)}),(e=>{if(this.state.showMfa||"mfa.validate_token.authenticate.app_error"!==e.server_error_id)switch(e.id){case"ent.ldap.do_login.user_not_registered.app_error":case"ent.ldap.do_login.user_filtered.app_error":case"ent.ldap.do_login.matched_to_many_users.app_error":this.setState({ldapError:e.message,showMfa:!1});break;case"ent.ldap.do_login.invalid_password.app_error":this.setState({ldapPasswordError:e.message,showMfa:!1});break;case"api.user.check_user_password.invalid.app_error":this.setState({passwordError:e.message,showMfa:!1});break;default:this.setState({serverError:e.message,showMfa:!1})}else this.setState({showMfa:!0})}))})),this.state={passwordError:"",ldapError:"",ldapPasswordError:"",serverError:"",showMfa:!1},this.emailPasswordInput=c.createRef(),this.ldapIdInput=c.createRef(),this.ldapPasswordInput=c.createRef()}render(){let e=null,t="form-group";this.state.serverError&&(e=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.serverError)),t+=" has-error");let a=null,r="form-group";this.state.passwordError&&(a=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.passwordError)),r+=" has-error");let s=null,l="form-group";this.state.ldapError&&(s=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.ldapError)),l+=" has-error");let o,n,m=null,d="form-group";return this.state.ldapPasswordError&&(m=c.createElement("div",{className:"form-group has-error"},c.createElement("label",{className:"control-label"},this.state.ldapPasswordError)),d+=" has-error"),o=this.props.ldapLoginFieldName?this.props.ldapLoginFieldName:i._u("claim.email_to_ldap.ldapId","AD/LDAP ID"),n=this.state.showMfa?c.createElement(b.Z,{loginId:this.props.email,password:this.state.password,title:{id:(0,E.t)("claim.email_to_ldap.title"),defaultMessage:"Switch Email/Password Account to AD/LDAP"},onSubmit:this.submit}):c.createElement(c.Fragment,null,c.createElement("h3",null,c.createElement(h.Z,{id:"claim.email_to_ldap.title",defaultMessage:"Switch Email/Password Account to AD/LDAP"})),c.createElement("form",{onSubmit:this.preSubmit,className:t},c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_ldap.ssoType",defaultMessage:"Upon claiming your account, you will only be able to login with AD/LDAP"})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_ldap.ssoNote",defaultMessage:"You must already have a valid AD/LDAP account"})),c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_ldap.enterPwd",defaultMessage:"Enter the password for your {site} email account",values:{site:this.props.siteName}})),c.createElement("input",{type:"text",style:L.usernameInput,name:"fakeusernameremembered"}),c.createElement("div",{className:r},c.createElement(g.Z,{type:"password",className:"form-control",name:"emailPassword",ref:this.emailPasswordInput,autoComplete:"off",placeholder:{id:(0,E.t)("claim.email_to_ldap.pwd"),defaultMessage:"Password"},spellCheck:"false"})),a,c.createElement("p",null,c.createElement(h.Z,{id:"claim.email_to_ldap.enterLdapPwd",defaultMessage:"Enter the ID and password for your AD/LDAP account"})),c.createElement("div",{className:l},c.createElement("input",{type:"text",className:"form-control",name:"ldapId",ref:this.ldapIdInput,autoComplete:"off",placeholder:o,spellCheck:"false"})),s,c.createElement("div",{className:d},c.createElement(g.Z,{type:"password",className:"form-control",name:"ldapPassword",ref:this.ldapPasswordInput,autoComplete:"off",placeholder:{id:(0,E.t)("claim.email_to_ldap.ldapPwd"),defaultMessage:"AD/LDAP Password"},spellCheck:"false"})),m,c.createElement("button",{type:"submit",className:"btn btn-primary"},c.createElement(h.Z,{id:"claim.email_to_ldap.switchTo",defaultMessage:"Switch Account to AD/LDAP"})),e)),c.createElement("div",null,n)}}S(M,"propTypes",{email:m().string,siteName:m().string,ldapLoginFieldName:m().string});const L={usernameInput:{display:"none"}};class I extends c.PureComponent{render(){const e=new URLSearchParams(this.props.location.search).get("email"),t=new URLSearchParams(this.props.location.search).get("new_type"),a=new URLSearchParams(this.props.location.search).get("old_type");return c.createElement("div",null,c.createElement(u.Z,null),c.createElement("div",{className:"col-sm-12"},c.createElement("div",{className:"signup-team__container"},c.createElement("img",{alt:"signup logo",className:"signup-team-logo",src:p.Z}),c.createElement("div",{id:"claim"},c.createElement(d.rs,null,c.createElement(d.AW,{path:"".concat(this.props.match.url,"/oauth_to_email"),render:()=>c.createElement(v,{currentType:a,email:e,siteName:this.props.siteName,passwordConfig:this.props.passwordConfig})}),c.createElement(d.AW,{path:"".concat(this.props.match.url,"/email_to_oauth"),render:()=>c.createElement(P,{newType:t,email:e,siteName:this.props.siteName})}),c.createElement(d.AW,{path:"".concat(this.props.match.url,"/ldap_to_email"),render:()=>c.createElement(N,{email:e,passwordConfig:this.props.passwordConfig,switchLdapToEmail:this.props.actions.switchLdapToEmail})}),c.createElement(d.AW,{path:"".concat(this.props.match.url,"/email_to_ldap"),render:()=>c.createElement(M,{email:e,siteName:this.props.siteName,ldapLoginFieldName:this.props.ldapLoginFieldName})}))))))}}var Z,A,k;Z=I,A="propTypes",k={location:m().shape({search:m().string.isRequired}).isRequired,siteName:m().string,ldapLoginFieldName:m().string,passwordConfig:m().shape({minimumLength:m().number.isRequired,requireLowercase:m().bool.isRequired,requireUppercase:m().bool.isRequired,requireNumber:m().bool.isRequired,requireSymbol:m().bool.isRequired}),match:m().shape({url:m().string.isRequired}).isRequired,actions:m().shape({switchLdapToEmail:m().func.isRequired}).isRequired},A in Z?Object.defineProperty(Z,A,{value:k,enumerable:!0,configurable:!0,writable:!0}):Z[A]=k;const D=(0,r.connect)((function(e){const t=(0,o.iE)(e);return{siteName:t.SiteName,ldapLoginFieldName:t.LdapLoginFieldName,passwordConfig:(0,i.lD)(t)}}),(function(e){return{actions:(0,s.bindActionCreators)({switchLdapToEmail:l.jh},e)}}))(I)},96512:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(45697),s=a.n(r),l=a(67294),o=a(86896),i=a(44012),n=a(73727),m=a(94184),c=a.n(m);const d=e=>{let{url:t,className:a,onClick:r}=e;const{formatMessage:s}=(0,o.Z)();return l.createElement("div",{id:"back_button",className:c()("signup-header",a)},l.createElement(n.Link,{onClick:r,to:t},l.createElement("span",{id:"back_button_icon",className:"fa fa-1x fa-angle-left",title:s({id:"generic_icons.back",defaultMessage:"Back Icon"})}),l.createElement(i.Z,{id:"web.header.back",defaultMessage:"Back"})))};d.propTypes={url:s().string,className:s().string,onClick:s().func},d.defaultProps={url:"/"};const p=d},71284:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(45697),s=a.n(r),l=a(67294),o=a(66788);const i=e=>{let{title:t,message:a,SVGElement:r,extraContent:s,onEnterKeyDown:i}=e;return l.createElement("div",{className:"content-layout-column",onKeyDown:e=>{i&&e.key===o.ZP.KeyCodes.ENTER[0]&&i(e)},tabIndex:0},l.createElement("div",{className:"content-layout-column-svg"},r),l.createElement("h1",{className:"content-layout-column-title"},t),l.createElement("p",{className:"content-layout-column-message"},a),s&&l.createElement("div",{className:"content-layout-column-extra-content"},s))};i.propTypes={title:s().string.isRequired,message:s().string.isRequired,SVGElement:s().node,extraContent:s().node,onEnterKeyDown:s().func};const n=i},12477:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(45697),s=a.n(r),l=(a(33948),a(74916),a(15306),a(73210),a(67294)),o=a(86896),i=a(71284),n=a(58657),m=a(96953);a(39714);const c=e=>{var t,a;return l.createElement("svg",{width:(null===(t=e.width)||void 0===t?void 0:t.toString())||"102",height:(null===(a=e.height)||void 0===a?void 0:a.toString())||"123",viewBox:"0 0 102 123",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M101.675 27.9958L99.2946 16.0841C98.9367 14.3239 97.8957 12.7705 96.3927 11.7537C85.2266 4.1723 70.423 0.223633 51.0193 0.223633C31.6156 0.223633 16.7987 4.17233 5.67264 11.7801C4.17376 12.8008 3.13398 14.3524 2.7708 16.1104L0.336967 27.9958C0.184635 28.743 0.245121 29.5171 0.511798 30.2325C0.778474 30.948 1.24096 31.5769 1.84808 32.0498C5.05752 34.5111 6.51514 37.7622 7.19714 41.8688C7.96339 46.1871 7.78096 50.6168 6.6622 54.8599C-3.27367 93.2541 13.4555 110.72 50.9524 122.777C88.3958 110.72 105.165 93.2541 95.2293 54.8599C94.1175 50.6158 93.9351 46.1876 94.6944 41.8688C95.4299 37.7622 96.8875 34.5111 100.043 32.0498C100.675 31.593 101.162 30.9705 101.451 30.2536C101.74 29.5366 101.817 28.7542 101.675 27.9958Z",fill:"#CC8F00"}),l.createElement("path",{d:"M51.019 113.063C16.9455 101.507 8.05264 87.1071 15.8088 57.1236C17.2606 51.6118 17.4932 45.8575 16.4908 40.2496C15.7615 35.2997 13.534 30.681 10.0986 26.9954L11.7568 18.8348C21.4921 12.4906 34.3433 9.41064 51.019 9.41064C67.6947 9.41064 80.5324 12.4906 90.2677 18.8348L91.9259 26.9954C88.4947 30.6822 86.2718 35.301 85.5471 40.2496C84.5448 45.8575 84.7773 51.6118 86.2291 57.1236C93.9451 87.0939 85.0925 101.572 51.019 113.063Z",fill:"var(--away-indicator)"}),l.createElement("path",{d:"M51.019 113.063C16.9455 101.507 8.05264 87.1071 15.8088 57.1236C17.2606 51.6118 17.4932 45.8575 16.4908 40.2496C15.7615 35.2997 13.534 30.681 10.0986 26.9954L11.7568 18.8348C21.4921 12.4906 34.3433 9.41064 51.019 9.41064C67.6947 9.41064 80.5324 12.4906 90.2677 18.8348L91.9259 26.9954C88.4947 30.6822 86.2718 35.301 85.5471 40.2496C84.5448 45.8575 84.7773 51.6118 86.2291 57.1236C93.9451 87.0939 85.0925 101.572 51.019 113.063Z",fill:"var(--away-indicator)"}),l.createElement("path",{d:"M51.019 52.4511V9.43701C34.3433 9.43701 21.4921 12.5169 11.7568 18.8611L10.0986 27.0217C13.534 30.7073 15.7615 35.3261 16.4908 40.276C17.2085 44.307 17.2852 48.4233 16.7181 52.4774L51.019 52.4511Z",fill:"var(--away-indicator)"}),l.createElement("path",{d:"M51.0195 113.063C85.093 101.573 93.9457 87.0941 86.2297 57.1237C85.8321 55.5847 85.5241 54.0247 85.3069 52.4512H51.0195V113.063Z",fill:"var(--away-indicator)"}),l.createElement("path",{d:"M15.809 57.1237C8.05289 87.1072 16.9457 101.507 51.0192 113.063V52.4512H16.7184C16.5058 54.0245 16.2022 55.5845 15.809 57.1237Z",fill:"#FFD470"}),l.createElement("path",{d:"M51.0195 9.43701V52.4774H85.3069C84.7377 48.423 84.8189 44.3057 85.5476 40.276C86.2723 35.3274 88.4952 30.7085 91.9264 27.0217L90.2682 18.8611C80.5731 12.4906 67.6819 9.43701 51.0195 9.43701Z",fill:"#FFD470"}),l.createElement("path",{d:"M71.0644 38.9336L43.4633 68.8118L35.4531 62.8361H31L43.4633 82.7505L75.5175 38.9336H71.0644Z",fill:"#6F370B"}))};c.propTypes={width:s().number,height:s().number};const d=c,p=e=>{let{loginId:t,password:a,title:r,subtitle:s,onSubmit:c}=e;const{formatMessage:p}=(0,o.Z)(),[u,h]=(0,l.useState)(""),[w,f]=(0,l.useState)(!1),E=e=>{e.preventDefault(),w||(f(!0),c(t,a,u))};return l.createElement(i.Z,{title:p(r||{id:"login_mfa.title",defaultMessage:"Enter MFA Token"}),message:p(s||{id:"login_mfa.subtitle",defaultMessage:"To complete the sign in process, please enter a token from your smartphone's authenticator"}),SVGElement:l.createElement(d,null),extraContent:l.createElement("div",{className:"login-mfa-form"},l.createElement(m.Z,{name:"token",containerClassName:"login-mfa-form-input",type:"text",inputSize:m.N.LARGE,value:u,onChange:e=>{let{target:{value:t}}=e;h(t.trim().replace(/\s/g,""))},placeholder:p({id:"login_mfa.token",defaultMessage:"Enter MFA Token"}),autoFocus:!0,disabled:w}),l.createElement("div",{className:"login-mfa-form-button-container"},l.createElement(n.Z,{extraClasses:"login-mfa-form-button-submit large",saving:w,disabled:!u,onClick:E,defaultMessage:p({id:"login_mfa.submit",defaultMessage:"Submit"}),savingMessage:p({id:"login_mfa.saving",defaultMessage:"Logging in…"})}))),onEnterKeyDown:e=>{u&&E(e)}})};p.propTypes={loginId:s().string.isRequired,password:s().string.isRequired,onSubmit:s().func.isRequired};const u=p},16406:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"files/ab8aa80cba445eb0fb75e6611c292567.png"}}]);
//# sourceMappingURL=120.31a6f27ec26cb7c1ec43.js.map