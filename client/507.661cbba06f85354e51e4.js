"use strict";(self.webpackChunk_mattermost_webapp=self.webpackChunk_mattermost_webapp||[]).push([[507],{51507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(14494),s=a(97779),n=a(85163),o=a(45697),i=a.n(o),c=(a(33948),a(41637),a(74916),a(64765),a(23157),a(15306),a(67294)),l=a(44012),p=a(16429),m=a(95795),u=a(89262),h=a(45288);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class f extends c.PureComponent{constructor(e){super(e),d(this,"handleAllow",(()=>{const e=new URLSearchParams(this.props.location.search),t={responseType:e.get("response_type"),clientId:e.get("client_id"),redirectUri:e.get("redirect_uri"),state:e.get("state"),scope:e.get("store")};this.props.actions.allowOAuth2(t).then((e=>{let{data:t,error:a}=e;t&&t.redirect?window.location.href=t.redirect:a&&this.setState({error:a.message})}))})),d(this,"handleDeny",(()=>{const e=new URLSearchParams(this.props.location.search).get("redirect_uri");e&&(e.startsWith("https://")||e.startsWith("http://"))?window.location.href=e+"?error=access_denied":u.m.replace("/error")})),this.state={}}componentDidMount(){const e=document.getElementById("antiClickjack");e&&e.parentNode&&e.parentNode.removeChild(e);const t=new URLSearchParams(this.props.location.search).get("client_id");t&&!/^[a-z0-9]+$/.test(t)||this.props.actions.getOAuthAppInfo(t).then((e=>{let{data:t}=e;t&&this.setState({app:t})}))}render(){const e=this.state.app;if(!e)return null;let t,a;return t=e.icon_url?e.icon_url:p.Z,this.state.error&&(a=c.createElement("div",{className:"prompt__error form-group"},c.createElement(m.Z,{error:this.state.error}))),c.createElement("div",{className:"container-fluid"},c.createElement("div",{className:"prompt"},c.createElement("div",{className:"prompt__heading"},c.createElement("div",{className:"prompt__app-icon"},c.createElement("img",{alt:"prompt icon",src:t,width:"50",height:"50"})),c.createElement("div",{className:"text"},c.createElement(h.Z,{id:"authorize.title",defaultMessage:"Authorize **{appName}** to Connect to Your **Mattermost** User Account",values:{appName:e.name}}))),c.createElement("p",null,c.createElement(h.Z,{id:"authorize.app",defaultMessage:"The app **{appName}** would like the ability to access and modify your basic information.",values:{appName:e.name}})),c.createElement("h2",{className:"prompt__allow"},c.createElement(h.Z,{id:"authorize.access",defaultMessage:"Allow **{appName}** access?",values:{appName:e.name}})),c.createElement("div",{className:"prompt__buttons"},c.createElement("button",{type:"submit",className:"btn btn-link authorize-btn",onClick:this.handleDeny},c.createElement(l.Z,{id:"authorize.deny",defaultMessage:"Deny"})),c.createElement("button",{type:"submit",className:"btn btn-primary authorize-btn",onClick:this.handleAllow},c.createElement(l.Z,{id:"authorize.allow",defaultMessage:"Allow"}))),a))}}d(f,"propTypes",{location:i().shape({search:i().string.isRequired}).isRequired,actions:i().shape({getOAuthAppInfo:i().func.isRequired,allowOAuth2:i().func.isRequired}).isRequired});const g=(0,r.connect)(null,(function(e){return{actions:(0,s.bindActionCreators)({getOAuthAppInfo:n.jI,allowOAuth2:n.yT},e)}}))(f)}}]);
//# sourceMappingURL=507.661cbba06f85354e51e4.js.map