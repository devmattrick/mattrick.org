function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(v)}function L(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function ft(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)f[l]=n.dirty[l]|c[l];return f}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,f){if(c){const o=B(n,e,i,f);t.p(o,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let x=!1;function J(){x=!0}function K(){x=!1}function W(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:W(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const s=a+1;e[s]=r,c=Math.max(s,c)}const f=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(f.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);f.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<f.length&&o[r].claim_order>=f[u].claim_order;)u++;const a=u<f.length?f[u]:null;t.insertBefore(o[r],a)}}function R(t,n){if(x){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){x&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function mt(){return k(" ")}function pt(){return k("")}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,i,c=!1){Z(t);const f=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function O(t,n,e,i){return T(t,c=>c.nodeName===n,c=>{const f=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||f.push(l.name)}f.forEach(o=>c.removeAttribute(o))},()=>i(n))}function gt(t,n,e){return O(t,n,e,V)}function xt(t,n,e){return O(t,n,e,X)}function tt(t,n){return T(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function bt(t){return tt(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}let b;function $(t){b=t}function N(){if(!b)throw new Error("Function called outside component initialization");return b}function Et(t){N().$$.on_mount.push(t)}function kt(t){N().$$.after_update.push(t)}function Nt(t,n){N().$$.context.set(t,n)}const p=[],D=[],w=[],F=[],nt=Promise.resolve();let S=!1;function et(){S||(S=!0,nt.then(H))}function j(t){w.push(t)}let A=!1;const C=new Set;function H(){if(!A){A=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];$(n),it(n.$$)}for($(null),p.length=0;D.length;)D.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];C.has(n)||(C.add(n),n())}w.length=0}while(p.length);for(;F.length;)F.pop()();S=!1,A=!1,C.clear()}}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let _;function St(){_={r:0,c:[],p:_}}function jt(){_.r||m(_.c),_=_.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function At(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ct(t,n){const e={},i={},c={$$scope:1};let f=t.length;for(;f--;){const o=t[f],l=n[f];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[f]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function vt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:f,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||j(()=>{const r=f.map(v).filter(L);o?o.push(...r):m(r),t.$$.on_mount=[]}),l.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(p.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,c,f,o,l=[-1]){const r=b;$(t);const u=t.$$={fragment:null,ctx:null,props:f,update:h,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(s,y,...q)=>{const M=q.length?q[0]:y;return u.ctx&&c(u.ctx[s],u.ctx[s]=M)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](M),a&&lt(t,s)),y}):[],u.update(),a=!0,m(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const s=Y(n.target);u.fragment&&u.fragment.l(s),s.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),H()}$(r)}class Bt{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Tt(t,n=h){let e;const i=new Set;function c(l){if(P(t,l)&&(t=l,e)){const r=!d.length;for(const u of i)u[1](),d.push(u,t);if(r){for(let u=0;u<d.length;u+=2)d[u][0](d[u+1]);d.length=0}}}function f(l){c(l(t))}function o(l,r=h){const u=[l,r];return i.add(u),i.size===1&&(e=n(c)||h),l(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:f,subscribe:o}}export{Et as A,I as B,Tt as C,R as D,X as E,xt as F,h as G,ft as H,at as I,_t as J,st as K,wt as L,ut as M,ht as N,Bt as S,Y as a,yt as b,gt as c,U as d,V as e,dt as f,tt as g,$t as h,zt as i,Mt as j,mt as k,pt as l,vt as m,bt as n,ct as o,Ct as p,qt as q,St as r,P as s,k as t,At as u,ot as v,jt as w,rt as x,Nt as y,kt as z};