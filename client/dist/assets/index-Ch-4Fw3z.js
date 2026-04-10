var t_=Object.defineProperty;var e_=(i,t,e)=>t in i?t_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Vt=(i,t,e)=>e_(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function ir(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function vm(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lo={duration:.5,overwrite:!1,delay:0},lf,cn,Pe,mi=1e8,Te=1/mi,Uu=Math.PI*2,n_=Uu/4,i_=0,xm=Math.sqrt,r_=Math.cos,s_=Math.sin,sn=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},dr=function(t){return typeof t=="number"},cf=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},On=function(t){return t!==!1},uf=function(){return typeof window<"u"},Va=function(t){return Oe(t)||sn(t)},ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,o_=/random\([^)]+\)/g,a_=/,\s*/g,cd=/(?:-?\.?\d|\.)+/gi,Sm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mm=/[+-]=-?[.\d]+/,l_=/[^,'"\[\]\s]+/gi,c_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ii,Fu,hf,oi={},Ql={},Em,bm=function(t){return(Ql=co(t,oi))&&Gn},ff=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},pa=function(t,e){return!e&&console.warn(t)},Tm=function(t,e){return t&&(oi[t]=e)&&Ql&&(Ql[t]=e)||oi},ma=function(){return 0},u_={suppressEvents:!0,isStart:!0,kill:!1},Ll={suppressEvents:!0,kill:!1},h_={suppressEvents:!0},df={},Or=[],Ou={},wm,Zn={},Lc={},ud=30,Il=[],pf="",mf=function(t){var e=t[0],n,r;if(Yi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Il.length;r--&&!Il[r].targetTest(e););n=Il[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Zm(t[r],n)))||t.splice(r,1);return t},ds=function(t){return t._gsap||mf(gi(t))[0]._gsap},Am=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():cf(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},ke=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},Qs=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},f_=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},jl=function(){var t=Or.length,e=Or.slice(0),n,r;for(Ou={},Or.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},gf=function(t){return!!(t._initted||t._startAt||t.add)},Cm=function(t,e,n,r){Or.length&&!cn&&jl(),t.render(e,n,!!(cn&&e<0&&gf(t))),Or.length&&!cn&&jl()},Rm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(l_).length<2?e:sn(t)?t.trim():t},Pm=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},d_=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},co=function(t,e){for(var n in e)t[n]=e[n];return t},hd=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},tc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},jo=function(t){var e=t.parent||Ie,n=t.keyframes?d_(Sn(t.keyframes)):ai;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},p_=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Dm=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},xc=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},kr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},m_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Bu=function(t,e,n,r){return t._startAt&&(cn?t._startAt.revert(Ll):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},g_=function i(t){return!t||t._ts&&i(t.parent)},fd=function(t){return t._repeat?uo(t._tTime,t=t.duration()+t._rDelay)*t:0},uo=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},ec=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yc=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Sc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yc(t),n._dirty||ps(n,t)),t},Lm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ec(t.rawTime(),e),(!e._dur||La(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},Fi=function(t,e,n,r){return e.parent&&kr(e),e._start=Le((dr(n)?n:n||t!==Ie?hi(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Dm(t,e,"_first","_last",t._sort?"_start":0),zu(e)||(t._recent=e),r||Lm(t,e),t._ts<0&&Sc(t,t._tTime),t},Im=function(t,e){return(oi.ScrollTrigger||ff("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},Nm=function(t,e,n,r,s){if(vf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wm!==jn.frame)return Or.push(t),t._lazy=[s,r],1},__=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},zu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},v_=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&__(t)&&!(!t._initted&&zu(t))||(t._ts<0||t._dp._ts<0)&&!zu(t))?0:1,a=t._rDelay,c=0,l,u,d;if(a&&t._repeat&&(c=La(0,t._tDur,e),u=uo(c,a),t._yoyo&&u&1&&(o=1-o),u!==uo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||cn||r||t._zTime===Te||!e&&t._zTime){if(!t._initted&&Nm(t,e,r,n,c))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&Bu(t,e,n,!0),t._onUpdate&&!n&&ni(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&ni(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&kr(t,1),!n&&!cn&&(ni(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},x_=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ho=function(t,e,n,r){var s=t._repeat,o=Le(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Le(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Sc(t,t._tTime=t._tDur*a),t.parent&&yc(t),n||ps(t.parent,t),t},dd=function(t){return t instanceof Cn?ps(t):ho(t,t._dur)},y_={_start:0,endTime:ma,totalDuration:ma},hi=function i(t,e,n){var r=t.labels,s=t._recent||y_,o=t.duration()>=mi?s.endTime(!1):t._dur,a,c,l;return sn(e)&&(isNaN(e)||e in r)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Sn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},ta=function(t,e,n){var r=dr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,c;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=On(c.vars.inherit)&&c.parent;o.immediateRender=On(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new We(e[0],o,e[s+1])},Yr=function(t,e){return t||t===0?e(t):e},La=function(t,e,n){return n<t?t:n>e?e:n},_n=function(t,e){return!sn(t)||!(e=c_.exec(t))?"":e[1]},S_=function(t,e,n){return Yr(n,function(r){return La(t,e,r)})},ku=[].slice,Um=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Ii},M_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return sn(r)&&!e||Um(r,1)?(s=n).push.apply(s,gi(r)):n.push(r)})||n},gi=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):sn(t)&&!n&&(Fu||!fo())?ku.call((e||hf).querySelectorAll(t),0):Sn(t)?M_(t,n):Um(t)?ku.call(t,0):t?[t]:[]},Vu=function(t){return t=gi(t)[0]||pa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?pa("Invalid scope")||hf.createElement("div"):t)}},Fm=function(t){return t.sort(function(){return .5-Math.random()})},Om=function(t){if(Oe(t))return t;var e=Yi(t)?t:{each:t},n=ms(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,l=e.axis,u=r,d=r;return sn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(u=r[0],d=r[1]),function(h,f,g){var _=(g||e).length,p=o[_],m,x,S,v,b,T,w,y,E;if(!p){if(E=e.grid==="auto"?0:(e.grid||[1,mi])[1],!E){for(w=-mi;w<(w=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(p=o[_]=[],m=c?Math.min(E,_)*u-.5:r%E,x=E===mi?0:c?_*d/E-.5:r/E|0,w=0,y=mi,T=0;T<_;T++)S=T%E-m,v=x-(T/E|0),p[T]=b=l?Math.abs(l==="y"?v:S):xm(S*S+v*v),b>w&&(w=b),b<y&&(y=b);r==="random"&&Fm(p),p.max=w-y,p.min=y,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(E>_?_-1:l?l==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=_n(e.amount||e.each)||0,n=n&&_<0?qm(n):n}return _=(p[h]-p.min)/p.max||0,Le(p.b+(n?n(_):_)*p.v)+p.u}},Hu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Le(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(dr(n)?0:_n(n))}},Bm=function(t,e){var n=Sn(t),r,s;return!n&&Yi(t)&&(r=n=t.radius||mi,t.values?(t=gi(t.values),(s=!dr(t[0]))&&(r*=r)):t=Hu(t.increment)),Yr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=mi,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-c,h=h*h+f*f):h=Math.abs(t[d]-a),h<l&&(l=h,u=d);return u=!r||l<=r?t[u]:o,s||u===o||dr(o)?u:u+_n(o)}:Hu(t))},zm=function(t,e,n,r){return Yr(Sn(t)?!e:n===!0?!!(n=0):!r,function(){return Sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},E_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},b_=function(t,e){return function(n){return t(parseFloat(n))+(e||_n(n))}},T_=function(t,e,n){return Vm(t,e,0,1,n)},km=function(t,e,n){return Yr(n,function(r){return t[~~e(r)]})},w_=function i(t,e,n){var r=e-t;return Sn(t)?km(t,i(0,t.length),e):Yr(n,function(s){return(r+(s-t)%r)%r+t})},A_=function i(t,e,n){var r=e-t,s=r*2;return Sn(t)?km(t,i(0,t.length-1),e):Yr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},ga=function(t){return t.replace(o_,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(a_);return zm(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Vm=function(t,e,n,r,s){var o=e-t,a=r-n;return Yr(s,function(c){return n+((c-t)/o*a||0)})},C_=function i(t,e,n,r){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=sn(t),a={},c,l,u,d,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Sn(t)&&!Sn(e)){for(u=[],d=t.length,h=d-2,l=1;l<d;l++)u.push(i(t[l-1],t[l]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else r||(t=co(Sn(t)?[]:{},t));if(!u){for(c in e)_f.call(a,t,c,"get",e[c]);s=function(g){return Sf(g,a)||(o?t.p:t)}}}return Yr(n,s)},pd=function(t,e,n){var r=t.labels,s=mi,o,a,c;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},ni=function(t,e,n){var r=t.vars,s=r[e],o=Pe,a=t._ctx,c,l,u;if(s)return c=r[e+"Params"],l=r.callbackScope||t,n&&Or.length&&jl(),a&&(Pe=a),u=c?s.apply(l,c):s.call(l),Pe=o,u},Ho=function(t){return kr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&ni(t,"onInterrupt"),t},Zs,Hm=[],Gm=function(t){if(t)if(t=!t.name&&t.default||t,uf()||t.headless){var e=t.name,n=Oe(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ma,render:Sf,add:_f,kill:W_,modifier:G_,rawVars:0},o={targetTest:0,get:0,getSetter:yf,aliases:{},register:0};if(fo(),t!==r){if(Zn[e])return;ai(r,ai(tc(t,s),o)),co(r.prototype,co(s,tc(t,o))),Zn[r.prop=e]=r,t.targetTest&&(Il.push(r),df[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Tm(e,r),t.register&&t.register(Gn,r,zn)}else Hm.push(t)},be=255,Go={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},Ic=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Wm=function(t,e,n){var r=t?dr(t)?[t>>16,t>>8&be,t&be]:0:Go.black,s,o,a,c,l,u,d,h,f,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Go[t])r=Go[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&be,r&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(cd),!e)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Ic(c+1/3,s,o),r[1]=Ic(c,s,o),r[2]=Ic(c-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Sm),n&&r.length<4&&(r[3]=1),r}else r=t.match(cd)||Go.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/be,o=r[1]/be,a=r[2]/be,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?c=l=0:(f=d-h,l=u>.5?f/(2-d-h):f/(d+h),c=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Xm=function(t){var e=[],n=[],r=-1;return t.split(Br).forEach(function(s){var o=s.match(Ks)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},md=function(t,e,n){var r="",s=(t+r).match(Br),o=e?"hsla(":"rgba(",a=0,c,l,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Wm(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Xm(t),c=n.c,c.join(r)!==u.c.join(r)))for(l=t.replace(Br,"1").split(Ks),d=l.length-1;a<d;a++)r+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=t.split(Br),d=l.length-1;a<d;a++)r+=l[a]+s[a];return r+l[d]},Br=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Go)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),R_=/hsl[a]?\(/,Ym=function(t){var e=t.join(" "),n;if(Br.lastIndex=0,Br.test(e))return n=R_.test(e),t[1]=md(t[1],n),t[0]=md(t[0],n,Xm(t[1])),!0},_a,jn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],c,l,u,d,h,f,g=function _(p){var m=i()-r,x=p===!0,S,v,b,T;if((m>t||m<0)&&(n+=m-e),r+=m,b=r-n,S=b-o,(S>0||x)&&(T=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,o+=S+(S>=s?4:s-S),v=1),x||(c=l(_)),v)for(f=0;f<a.length;f++)a[f](b,h,T,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Em&&(!Fu&&uf()&&(Ii=Fu=window,hf=Ii.document||{},oi.gsap=Gn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Gn.version),bm(Ql||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),Hm.forEach(Gm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},_a=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),_a=0,l=ma},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,x){var S=m?function(v,b,T,w){p(v,b,T,w),d.remove(S)}:p;return d.remove(p),a[x?"unshift":"push"](S),fo(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d}(),fo=function(){return!_a&&jn.wake()},fe={},P_=/^[\d.\-M][\d.\-,\s]/,D_=/["']/g,L_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[r]=isNaN(l)?l.replace(D_,"").trim():+l,r=c.substr(a+1).trim();return e},I_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},N_=function(t){var e=(t+"").split("("),n=fe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[L_(e[1])]:I_(t).split(",").map(Rm)):fe._CE&&P_.test(t)?fe._CE("",t):n},qm=function(t){return function(e){return 1-t(1-e)}},$m=function i(t,e){for(var n=t._first,r;n;)n instanceof Cn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},ms=function(t,e){return t&&(Oe(t)?t:fe[t]||N_(t))||e},ws=function(t,e,n,r){n===void 0&&(n=function(c){return 1-e(1-c)}),r===void 0&&(r=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Bn(t,function(a){fe[a]=oi[a]=s,fe[o=a.toLowerCase()]=n;for(var c in s)fe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=fe[a+"."+c]=s[c]}),s},Km=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Uu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*s_((u-o)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Km(a);return s=Uu/s,c.config=function(l,u){return i(t,l,u)},c},Uc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Km(n);return r.config=function(s){return i(t,s)},r};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;ws(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});fe.Linear.easeNone=fe.none=fe.Linear.easeIn;ws("Elastic",Nc("in"),Nc("out"),Nc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});ws("Circ",function(i){return-(xm(1-i*i)-1)});ws("Sine",function(i){return i===1?1:-r_(i*n_)+1});ws("Back",Uc("in"),Uc("out"),Uc());fe.SteppedEase=fe.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Te;return function(a){return((r*La(0,o,a)|0)+s)*n}}};lo.ease=fe["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return pf+=i+","+i+"Params,"});var Zm=function(t,e){this.id=i_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Am,this.set=e?e.getSetter:yf},va=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ho(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),_a||jn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ho(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(fo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,n),!s._dp||s.parent||Lm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Cm(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?uo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ec(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),yc(this),m_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ec(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=h_);var r=cn;return cn=n,gf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,dd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,dd(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(hi(this,n),On(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,On(r)),this._dur||(this._zTime=-Te),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Oe(n)?n:Pm,c=function(){var u=r.then;r.then=null,s&&s(),Oe(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},t.kill=function(){Ho(this)},i}();ai(va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var Cn=function(i){vm(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ie&&Fi(n.parent||Ie,ir(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Im(ir(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ta(0,arguments,this),this},e.from=function(r,s,o){return ta(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ta(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,jo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(r,s,hi(this,o),1),this},e.call=function(r,s,o){return Fi(this,We.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new We(r,o,hi(this,c)),this},e.staggerFrom=function(r,s,o,a,c,l,u){return o.runBackwards=1,jo(o).immediateRender=On(o.immediateRender),this.staggerTo(r,s,o,a,c,l,u)},e.staggerFromTo=function(r,s,o,a,c,l,u,d){return a.startAt=o,jo(a).immediateRender=On(a.immediateRender),this.staggerTo(r,s,a,c,l,u,d)},e.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Le(r),d=this._zTime<0!=r<0&&(this._initted||!l),h,f,g,_,p,m,x,S,v,b,T,w;if(this!==Ie&&u>c&&r>=0&&(u=c),u!==this._tTime||o||d){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,S=this._ts,m=!S,d&&(l||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=Le(u%p),u===c?(_=this._repeat,h=l):(b=Le(u/p),_=~~b,_&&_===b&&(h=l,_--),h>l&&(h=l)),b=uo(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),T&&_&1&&(h=l-h,w=1),_!==b&&!this._lock){var y=T&&b&1,E=y===(T&&_&1);if(_<b&&(y=!y),a=y?0:u%l?l:u,this._lock=1,this.render(a||(w?0:Le(_*p)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,E&&(this._lock=2,a=y?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;$m(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=x_(this,Le(a),Le(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&l&&!s&&!b&&(ni(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=-Te);break}}f=g}else{f=this._last;for(var U=r<0?r:h;f;){if(g=f._prev,(f._act||U<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(U-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(U-f._start)*f._ts,s,o||cn&&gf(f)),h!==this._time||!this._ts&&!m){x=0,g&&(u+=this._zTime=U?-Te:Te);break}}f=g}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-Te)._zTime=h>=a?1:-1,this._ts))return this._start=v,yc(this),this.render(r,s,o);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&kr(this,1),!s&&!(r<0&&!a)&&(u||a||!c)&&(ni(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(dr(s)||(s=hi(this,s,r)),!(r instanceof va)){if(Sn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(sn(r))return this.addLabel(r,s);if(Oe(r))r=We.delayedCall(0,r);else return this}return this!==r?Fi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof We?s&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return sn(r)?this.removeLabel(r):Oe(r)?this.killTweensOf(r):(r.parent===this&&xc(this,r),r===this._recent&&(this._recent=this._last),ps(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=hi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=We.delayedCall(0,s||ma,o);return a.data="isPause",this._hasPause=1,Fi(this,a,hi(this,r))},e.removePause=function(r){var s=this._first;for(r=hi(this,r);s;)s._start===r&&s.data==="isPause"&&kr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)Pr!==a[c]&&a[c].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=gi(r),c=this._first,l=dr(s),u;c;)c instanceof We?f_(c._targets,a)&&(l?(!Pr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=hi(o,r),c=s,l=c.startAt,u=c.onStart,d=c.onStartParams,h=c.immediateRender,f,g=We.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Te,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==p&&ho(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,ai({startAt:{time:hi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),pd(this,hi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),pd(this,hi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(r=Le(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=r);return ps(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,c=mi,l,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Le(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;ho(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ie._ts&&(Cm(Ie,ec(r,Ie)),wm=jn.frame),jn.frame>=ud){ud+=ri.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&ri.autoSleep&&jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||jn.sleep()}}},t}(va);ai(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var U_=function(t,e,n,r,s,o,a){var c=new zn(this._pt,t,e,0,1,ng,null,s),l=0,u=0,d,h,f,g,_,p,m,x;for(c.b=n,c.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ga(r)),o&&(x=[n,r],o(x,t,e),n=x[0],r=x[1]),h=n.match(Dc)||[];d=Dc.exec(r);)g=d[0],_=r.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Qs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=Dc.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=a,(Mm.test(r)||m)&&(c.e=0),this._pt=c,c},_f=function(t,e,n,r,s,o,a,c,l,u){Oe(r)&&(r=r(s||0,t,o));var d=t[e],h=n!=="get"?n:Oe(d)?l?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,f=Oe(d)?l?k_:tg:xf,g;if(sn(r)&&(~r.indexOf("random(")&&(r=ga(r)),r.charAt(1)==="="&&(g=Qs(h,r)+(_n(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Gu)return!isNaN(h*r)&&r!==""?(g=new zn(this._pt,t,e,+h||0,r-(h||0),typeof d=="boolean"?H_:eg,0,f),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&ff(e,r),U_.call(this,t,e,h,r,f,c||ri.stringFilter,l))},F_=function(t,e,n,r,s){if(Oe(t)&&(t=ea(t,s,e,n,r)),!Yi(t)||t.style&&t.nodeType||Sn(t)||ym(t))return sn(t)?ea(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=ea(t[a],s,e,n,r);return o},Jm=function(t,e,n,r,s,o){var a,c,l,u;if(Zn[t]&&(a=new Zn[t]).init(s,a.rawVars?e[t]:F_(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new zn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Zs))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Pr,Gu,vf=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!lf,v=t.timeline,b,T,w,y,E,U,P,F,k,R,N,L,I;if(v&&(!h||!s)&&(s="none"),t._ease=ms(s,lo.ease),t._yEase=d?qm(ms(d===!0?s:d,lo.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(F=p[0]?ds(p[0]).harness:0,L=F&&r[F.prop],b=tc(r,df),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ll:u_),_._lazy=0),o){if(kr(t._startAt=We.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&On(c),startAt:null,delay:0,onUpdate:l&&function(){return ni(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!a&&!f)&&t._startAt.revert(Ll),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),w=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&On(c),immediateRender:a,stagger:0,parent:m},b),L&&(w[F.prop]=L),kr(t._startAt=We.set(p,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(Ll):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&On(c)||c&&!g,T=0;T<p.length;T++){if(E=p[T],P=E._gsap||mf(p)[T]._gsap,t._ptLookup[T]=R={},Ou[P.id]&&Or.length&&jl(),N=x===p?T:x.indexOf(E),F&&(k=new F).init(E,L||b,t,N,x)!==!1&&(t._pt=y=new zn(t._pt,E,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(q){R[q]=y}),k.priority&&(U=1)),!F||L)for(w in b)Zn[w]&&(k=Jm(w,b,t,N,E,x))?k.priority&&(U=1):R[w]=y=_f.call(t,E,w,"get",b[w],N,x,0,r.stringFilter);t._op&&t._op[T]&&t.kill(E,t._op[T]),S&&t._pt&&(Pr=t,Ie.killTweensOf(E,R,t.globalTime(e)),I=!t.parent,Pr=0),t._pt&&c&&(Ou[P.id]=1)}U&&ig(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!I,h&&e<=0&&v.render(mi,!0,!0)},O_=function(t,e,n,r,s,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gu=1,t.vars[e]="+=0",vf(t,a),Gu=0,c?pa(e+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=ke(n)+_n(d.e)),d.b&&(d.b=u.s+_n(d.b))},B_=function(t,e){var n=t[0]?ds(t[0]).harness:0,r=n&&n.aliases,s,o,a,c;if(!r)return e;s=co({},e);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},z_=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Sn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ea=function(t,e,n,r,s){return Oe(t)?t.call(e,n,r,s):sn(t)&&~t.indexOf("random(")?ga(t):t},Qm=pf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jm={};Bn(Qm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return jm[i]=1});var We=function(i){vm(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:jo(r))||this;var c=a.vars,l=c.duration,u=c.delay,d=c.immediateRender,h=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,x=r.parent||Ie,S=(Sn(n)||ym(n)?dr(n[0]):"length"in r)?[n]:gi(n),v,b,T,w,y,E,U,P;if(a._targets=S.length?mf(S):pa("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||Va(l)||Va(u)){if(r=a.vars,v=a.timeline=new Cn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:S}),v.kill(),v.parent=v._dp=ir(a),v._start=0,h||Va(l)||Va(u)){if(w=S.length,U=h&&Om(h),Yi(h))for(y in h)~Qm.indexOf(y)&&(P||(P={}),P[y]=h[y]);for(b=0;b<w;b++)T=tc(r,jm),T.stagger=0,m&&(T.yoyoEase=m),P&&co(T,P),E=S[b],T.duration=+ea(l,ir(a),b,E,S),T.delay=(+ea(u,ir(a),b,E,S)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(E,T,U?U(b,E,S):0),v._ease=fe.none;v.duration()?l=u=0:a.timeline=0}else if(g){jo(ai(v.vars.defaults,{ease:"none"})),v._ease=ms(g.ease||r.ease||"none");var F=0,k,R,N;if(Sn(g))g.forEach(function(L){return v.to(S,L,">")}),v.duration();else{T={};for(y in g)y==="ease"||y==="easeEach"||z_(y,g[y],T,g.easeEach);for(y in T)for(k=T[y].sort(function(L,I){return L.t-I.t}),F=0,b=0;b<k.length;b++)R=k[b],N={ease:R.e,duration:(R.t-(b?k[b-1].t:0))/100*l},N[y]=R.v,v.to(S,N,F),F+=N.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return f===!0&&!lf&&(Pr=ir(a),Ie.killTweensOf(S),Pr=0),Fi(x,ir(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!l&&!g&&a._start===Le(x._time)&&On(d)&&g_(ir(a))&&x.data!=="nested")&&(a._tTime=-Te,a.render(Math.max(0,-u)||0)),p&&Im(ir(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,c=this._tDur,l=this._dur,u=r<0,d=r>c-Te&&!u?c:r<Te?0:r,h,f,g,_,p,m,x,S,v;if(!l)v_(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Le(d%_),d===c?(g=this._repeat,h=l):(p=Le(d/_),g=~~p,g&&g===p?(h=l,g--):h>l&&(h=l)),m=this._yoyo&&g&1,m&&(v=this._yEase,h=l-h),p=uo(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(S&&this._yEase&&$m(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Le(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Nm(this,u?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(h/l),this._from&&(this.ratio=x=1-x),!a&&d&&!s&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Bu(this,r,s,o),ni(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Bu(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&kr(this,1),!s&&!(u&&!a)&&(d||a||m)&&(ni(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,c){_a||jn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vf(this,l),u=this._ease(l/this._dur),O_(this,r,s,o,a,u,l,c)?this.resetTo(r,s,o,a,1):(Sc(this,0),this.parent||Dm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Pr&&Pr.vars.overwrite!==!0)._first||Ho(this),this.parent&&o!==this.timeline.totalDuration()&&ho(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?gi(r):a,l=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&p_(a,c))return s==="all"&&(this._pt=0),Ho(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},Bn(s,function(x){return _[x]=1}),s=_),s=B_(a,s)),m=a.length;m--;)if(~c.indexOf(a[m])){h=l[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xc(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ho(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ta(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ta(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ie.killTweensOf(r,s,o)},t}(va);ai(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(i){We[i]=function(){var t=new Cn,e=ku.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var xf=function(t,e,n){return t[e]=n},tg=function(t,e,n){return t[e](n)},k_=function(t,e,n,r){return t[e](r.fp,n)},V_=function(t,e,n){return t.setAttribute(e,n)},yf=function(t,e){return Oe(t[e])?tg:cf(t[e])&&t.setAttribute?V_:xf},eg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},H_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ng=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Sf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},G_=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},W_=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?xc(this,e,"_pt"):e.dep||(n=1),e=r;return!n},X_=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},ig=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},zn=function(){function i(e,n,r,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||eg,this.d=c||this,this.set=l||xf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=X_,this.m=n,this.mt=s,this.tween=r},i}();Bn(pf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return df[i]=1});oi.TweenMax=oi.TweenLite=We;oi.TimelineLite=oi.TimelineMax=Cn;Ie=new Cn({sortChildren:!1,defaults:lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=Ym;var gs=[],Nl={},Y_=[],gd=0,q_=0,Fc=function(t){return(Nl[t]||Y_).map(function(e){return e()})},Wu=function(){var t=Date.now(),e=[];t-gd>2&&(Fc("matchMediaInit"),gs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,c,l;for(a in r)o=Ii.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Fc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),gd=t,Fc("matchMedia"))},rg=function(){function i(e,n){this.selector=n&&Vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=q_++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Oe(n)&&(s=r,r=n,n=Oe);var o=this,a=function(){var l=Pe,u=o.selector,d;return l&&l!==o&&l.data.push(o),s&&(o.selector=Vu(s)),Pe=o,d=r.apply(o,arguments),Oe(d)&&o._r.push(d),Pe=l,o.selector=u,o.isReverted=!1,d};return o.last=a,n===Oe?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var r=Pe;Pe=null,n(this),Pe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof We&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Cn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof We)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),$_=function(){function i(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Yi(n)||(n={matches:n});var o=new rg(0,s||this.scope),a=o.conditions={},c,l,u;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(l in n)l==="all"?u=1:(c=Ii.matchMedia(n[l]),c&&(gs.indexOf(o)<0&&gs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Wu):c.addEventListener("change",Wu)));return u&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),nc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Gm(r)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,r){sn(t)&&(t=gi(t)[0]);var s=ds(t||{}).get,o=n?Pm:Rm;return n==="native"&&(n=""),t&&(e?o((Zn[e]&&Zn[e].get||s)(t,e,n,r)):function(a,c,l){return o((Zn[a]&&Zn[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var r=t.map(function(u){return Gn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}t=t[0]||{};var o=Zn[e],a=ds(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var d=new o;Zs._pt=0,d.init(t,n?u+n:u,Zs,0,[t]),d.render(1,d),Zs._pt&&Sf(1,Zs)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=Gn.to(t,ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(c,l,u){return s.resetTo(e,c,l,u)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,lo.ease)),hd(lo,t||{})},config:function(t){return hd(ri,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Zn[a]&&!oi[a]&&pa(e+" effect requires "+a+" plugin.")}),Lc[e]=function(a,c,l){return n(gi(a),ai(c||{},s),l)},o&&(Cn.prototype[e]=function(a,c,l){return this.add(Lc[e](a,Yi(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){fe[t]=ms(e)},parseEase:function(t,e){return arguments.length?ms(t,e):fe},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),r,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,r=Ie._first;r;)s=r._next,(e||!(!r._dur&&r instanceof We&&r.vars.onComplete===r._targets[0]))&&Fi(n,r,r._start-r._delay),r=s;return Fi(Ie,n,0),n},context:function(t,e){return t?new rg(t,e):Pe},matchMedia:function(t){return new $_(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Wu()},addEventListener:function(t,e){var n=Nl[t]||(Nl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Nl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:w_,wrapYoyo:A_,distribute:Om,random:zm,snap:Bm,normalize:T_,getUnit:_n,clamp:S_,splitColor:Wm,toArray:gi,selector:Vu,mapRange:Vm,pipe:E_,unitize:b_,interpolate:C_,shuffle:Fm},install:bm,effects:Lc,ticker:jn,updateRoot:Cn.updateRoot,plugins:Zn,globalTimeline:Ie,core:{PropTween:zn,globals:Tm,Tween:We,Timeline:Cn,Animation:va,getCache:ds,_removeLinkedListItem:xc,reverting:function(){return cn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return lf=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return nc[i]=We[i]});jn.add(Cn.updateRoot);Zs=nc.to({},{duration:0});var K_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Z_=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=K_(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Oc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,l;if(sn(s)&&(c={},Bn(s,function(u){return c[u]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}Z_(a,s)}}}},Gn=nc.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oc("roundProps",Hu),Oc("modifiers"),Oc("snap",Bm))||nc;We.version=Cn.version=Gn.version="3.14.2";Em=1;uf()&&fo();fe.Power0;fe.Power1;fe.Power2;fe.Power3;fe.Power4;fe.Linear;fe.Quad;fe.Cubic;fe.Quart;fe.Quint;fe.Strong;fe.Elastic;fe.Back;fe.SteppedEase;fe.Bounce;fe.Sine;fe.Expo;fe.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _d,Dr,js,Mf,ls,vd,Ef,J_=function(){return typeof window<"u"},pr={},ns=180/Math.PI,to=Math.PI/180,Ps=Math.atan2,xd=1e8,bf=/([A-Z])/g,Q_=/(left|right|width|margin|padding|x)/i,j_=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ev=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},iv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},og=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},rv=function(t,e,n){return t.style[e]=n},sv=function(t,e,n){return t.style.setProperty(e,n)},ov=function(t,e,n){return t._gsap[e]=n},av=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},lv=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},cv=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",kn=Ne+"Origin",uv=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in pr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Oi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=sr(r,a)}):this.tfm[t]=o.x?o[t]:sr(r,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},ag=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},hv=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(bf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ef(),(!s||!s.isStart)&&!n[Ne]&&(ag(n),r.zOrigin&&n[kn]&&(n[kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},lg=function(t,e){var n={target:t,props:[],revert:hv,save:uv};return t._gsap||Gn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},cg,Yu=function(t,e){var n=Dr.createElementNS?Dr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Dr.createElement(t);return n&&n.style?n:Dr.createElement(t)},ii=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(bf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,po(e)||e,1)||""},yd="O,Moz,ms,Ms,Webkit".split(","),po=function(t,e,n){var r=e||ls,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(yd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?yd[o]:"")+t},qu=function(){J_()&&window.document&&(_d=window,Dr=_d.document,js=Dr.documentElement,ls=Yu("div")||{style:{}},Yu("div"),Ne=po(Ne),kn=Ne+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cg=!!po("perspective"),Ef=Gn.core.reverting,Mf=1)},Sd=function(t){var e=t.ownerSVGElement,n=Yu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),js.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),js.removeChild(n),s},Md=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ug=function(t){var e,n;try{e=t.getBBox()}catch{e=Sd(t),n=1}return e&&(e.width||e.height)||n||(e=Sd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Md(t,["x","cx","x1"])||0,y:+Md(t,["y","cy","y1"])||0,width:0,height:0}:e},hg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ug(t))},Vr=function(t,e){if(e){var n=t.style,r;e in pr&&e!==kn&&(e=Ne),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(bf,"-$1").toLowerCase())):n.removeAttribute(e)}},Lr=function(t,e,n,r,s,o){var a=new zn(t._pt,e,n,0,1,o?og:sg);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},Ed={deg:1,rad:1,turn:1},fv={grid:1,flex:1},Hr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,c=Q_.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,_,p,m;if(r===o||!s||Ed[r]||Ed[o])return s;if(o!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&hg(t),(f||o==="%")&&(pr[e]||~e.indexOf("adius")))return g=m?t.getBBox()[c?"width":"height"]:t[u],ke(f?s/g*d:s/100*g);if(a[c?"width":"height"]=d+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Dr||!_.appendChild)&&(_=Dr.body),p=_._gsap,p&&f&&p.width&&c&&p.time===jn.time&&!p.uncache)return ke(s/p.width*d);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+r,g=t[u],x?t.style[e]=x:Vr(t,e)}else(f||o==="%")&&!fv[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(ls),g=ls[u],_.removeChild(ls),a.position="absolute";return c&&f&&(p=ds(_),p.time=jn.time,p.width=_[u]),ke(h?g*s/d:g&&s?d/g*s:0)},sr=function(t,e,n,r){var s;return Mf||qu(),e in Oi&&e!=="transform"&&(e=Oi[e],~e.indexOf(",")&&(e=e.split(",")[0])),pr[e]&&e!=="transform"?(s=ya(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:rc(ii(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[e]&&ic[e](t,e,n)||ii(t,e)||Am(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hr(t,e,s,n)+n:s},dv=function(t,e,n,r){if(!n||n==="none"){var s=po(e,t,1),o=s&&ii(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new zn(this._pt,t.style,e,0,1,ng),c=0,l=0,u,d,h,f,g,_,p,m,x,S,v,b;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ii(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=ii(t,e)||r,_?t.style[e]=_:Vr(t,e)),u=[n,r],Ym(u),n=u[0],r=u[1],h=n.match(Ks)||[],b=r.match(Ks)||[],b.length){for(;d=Ks.exec(r);)p=d[0],x=r.substring(c,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=h[l++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),p.charAt(1)==="="&&(p=Qs(f,p)+v),m=parseFloat(p),S=p.substr((m+"").length),c=Ks.lastIndex-S.length,S||(S=S||ri.units[e]||v,c===r.length&&(r+=S,a.e+=S)),v!==S&&(f=Hr(t,e,_,S)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<r.length?r.substring(c,r.length):""}else a.r=e==="display"&&r==="none"?og:sg;return Mm.test(r)&&(a.e=0),this._pt=a,a},bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pv=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=bd[n]||n,e[1]=bd[r]||r,e.join(" ")},mv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],pr[a]&&(c=1,a=a==="transformOrigin"?kn:Ne),Vr(n,a);c&&(Vr(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ya(n,1),o.uncache=1,ag(r)))}},ic={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new zn(t._pt,e,n,0,0,mv);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},xa=[1,0,0,1,0,0],fg={},dg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Td=function(t){var e=ii(t,Ne);return dg(e)?xa:e.substr(7).match(Sm).map(ke)},Tf=function(t,e){var n=t._gsap||ds(t),r=t.style,s=Td(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?xa:s):(s===xa&&!t.offsetParent&&t!==js&&!n.svg&&(c=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,js.appendChild(t)),s=Td(t),c?r.display=c:Vr(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):js.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$u=function(t,e,n,r,s,o){var a=t._gsap,c=s||Tf(t,!0),l=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],x=c[5],S=e.split(" "),v=parseFloat(S[0])||0,b=parseFloat(S[1])||0,T,w,y,E;n?c!==xa&&(w=f*p-g*_)&&(y=v*(p/w)+b*(-_/w)+(_*x-p*m)/w,E=v*(-g/w)+b*(f/w)-(f*x-g*m)/w,v=y,b=E):(T=ug(t),v=T.x+(~S[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(S[1]||S[0]).indexOf("%")?b/100*T.height:b)),r||r!==!1&&a.smooth?(m=v-l,x=b-u,a.xOffset=d+(m*f+x*_)-m,a.yOffset=h+(m*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(Lr(o,a,"xOrigin",l,v),Lr(o,a,"yOrigin",u,b),Lr(o,a,"xOffset",d,a.xOffset),Lr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},ya=function(t,e){var n=t._gsap||new Zm(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=ii(t,kn)||"0",u,d,h,f,g,_,p,m,x,S,v,b,T,w,y,E,U,P,F,k,R,N,L,I,q,$,D,st,at,V,tt,ot;return u=d=h=_=p=m=x=S=v=0,f=g=1,n.svg=!!(t.getCTM&&hg(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Ne]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ne]!=="none"?c[Ne]:"")),r.scale=r.rotate=r.translate="none"),w=Tf(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),l=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",I=""):I=!e&&t.getAttribute("data-svg-origin"),$u(t,I||l,!!I||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,T=n.yOrigin||0,w!==xa&&(P=w[0],F=w[1],k=w[2],R=w[3],u=N=w[4],d=L=w[5],w.length===6?(f=Math.sqrt(P*P+F*F),g=Math.sqrt(R*R+k*k),_=P||F?Ps(F,P)*ns:0,x=k||R?Ps(k,R)*ns+_:0,x&&(g*=Math.abs(Math.cos(x*to))),n.svg&&(u-=b-(b*P+T*k),d-=T-(b*F+T*R))):(ot=w[6],V=w[7],D=w[8],st=w[9],at=w[10],tt=w[11],u=w[12],d=w[13],h=w[14],y=Ps(ot,at),p=y*ns,y&&(E=Math.cos(-y),U=Math.sin(-y),I=N*E+D*U,q=L*E+st*U,$=ot*E+at*U,D=N*-U+D*E,st=L*-U+st*E,at=ot*-U+at*E,tt=V*-U+tt*E,N=I,L=q,ot=$),y=Ps(-k,at),m=y*ns,y&&(E=Math.cos(-y),U=Math.sin(-y),I=P*E-D*U,q=F*E-st*U,$=k*E-at*U,tt=R*U+tt*E,P=I,F=q,k=$),y=Ps(F,P),_=y*ns,y&&(E=Math.cos(y),U=Math.sin(y),I=P*E+F*U,q=N*E+L*U,F=F*E-P*U,L=L*E-N*U,P=I,N=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=ke(Math.sqrt(P*P+F*F+k*k)),g=ke(Math.sqrt(L*L+ot*ot)),y=Ps(N,L),x=Math.abs(y)>2e-4?y*ns:0,v=tt?1/(tt<0?-tt:tt):0),n.svg&&(I=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!dg(ii(t,Ne)),I&&t.setAttribute("transform",I))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ke(f),n.scaleY=ke(g),n.rotation=ke(_)+a,n.rotationX=ke(p)+a,n.rotationY=ke(m)+a,n.skewX=x+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(r[kn]=rc(l)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?_v:cg?pg:gv,n.uncache=0,n},rc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Bc=function(t,e,n){var r=_n(e);return ke(parseFloat(e)+parseFloat(Hr(t,"x",n+"px",r)))+r},gv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,pg(t,e)},$r="0deg",Co="0px",Kr=") ",pg=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,S=n.zOrigin,v="",b=m==="auto"&&t&&t!==1||m===!0;if(S&&(d!==$r||u!==$r)){var T=parseFloat(u)*to,w=Math.sin(T),y=Math.cos(T),E;T=parseFloat(d)*to,E=Math.cos(T),o=Bc(x,o,w*E*-S),a=Bc(x,a,-Math.sin(T)*-S),c=Bc(x,c,y*E*-S+S)}p!==Co&&(v+="perspective("+p+Kr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||o!==Co||a!==Co||c!==Co)&&(v+=c!==Co||b?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Kr),l!==$r&&(v+="rotate("+l+Kr),u!==$r&&(v+="rotateY("+u+Kr),d!==$r&&(v+="rotateX("+d+Kr),(h!==$r||f!==$r)&&(v+="skew("+h+", "+f+Kr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Kr),x.style[Ne]=v||"translate(0, 0)"},_v=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,S=parseFloat(o),v=parseFloat(a),b,T,w,y,E;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=to,l*=to,b=Math.cos(c)*d,T=Math.sin(c)*d,w=Math.sin(c-l)*-h,y=Math.cos(c-l)*h,l&&(u*=to,E=Math.tan(l-u),E=Math.sqrt(1+E*E),w*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,T*=E)),b=ke(b),T=ke(T),w=ke(w),y=ke(y)):(b=d,y=h,T=w=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=Hr(f,"x",o,"px"),v=Hr(f,"y",a,"px")),(g||_||p||m)&&(S=ke(S+g-(g*b+_*w)+p),v=ke(v+_-(g*T+_*y)+m)),(r||s)&&(E=f.getBBox(),S=ke(S+r/100*E.width),v=ke(v+s/100*E.height)),E="matrix("+b+","+T+","+w+","+y+","+S+","+v+")",f.setAttribute("transform",E),x&&(f.style[Ne]=E)},vv=function(t,e,n,r,s){var o=360,a=sn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ns:1),l=c-r,u=r+l+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),d==="cw"&&l<0?l=(l+o*xd)%o-~~(l/o)*o:d==="ccw"&&l>0&&(l=(l-o*xd)%o-~~(l/o)*o)),t._pt=h=new zn(t._pt,e,n,r,l,tv),h.e=u,h.u="deg",t._props.push(n),h},wd=function(t,e){for(var n in e)t[n]=e[n];return t},xv=function(t,e,n){var r=wd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,d,h,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=ya(n,1),Vr(n,Ne),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ne],o[Ne]=e,a=ya(n,1),o[Ne]=l);for(c in pr)l=r[c],u=a[c],l!==u&&s.indexOf(c)<0&&(f=_n(l),g=_n(u),d=f!==g?Hr(n,c,l,g):parseFloat(l),h=parseFloat(u),t._pt=new zn(t._pt,a,c,d,h-d,Xu),t._pt.u=g||0,t._props.push(c));wd(a,r)};Bn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});ic[t>1?"border"+i:i]=function(a,c,l,u,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return sr(a,g,l)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(c,f,d)}});var mg={name:"css",register:qu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,c=n.vars.startAt,l,u,d,h,f,g,_,p,m,x,S,v,b,T,w,y,E;Mf||qu(),this.styles=this.styles||lg(t),y=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Zn[_]&&Jm(_,e,n,r,t,s)))){if(f=typeof u,g=ic[_],f==="function"&&(u=u.call(n,r,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ga(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Br.lastIndex=0,Br.test(l)||(p=_n(l),m=_n(u),m?p!==m&&(l=Hr(t,_,l,m)+m):p&&(u+=p)),this.add(a,"setProperty",l,u,r,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,r,t,s):c[_],sn(l)&&~l.indexOf("random(")&&(l=ga(l)),_n(l+"")||l==="auto"||(l+=ri.units[_]||_n(sr(t,_))||""),(l+"").charAt(1)==="="&&(l=sr(t,_))):l=sr(t,_),h=parseFloat(l),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),_ in Oi&&(_==="autoAlpha"&&(h===1&&sr(t,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",0,a.visibility),Lr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in pr,S){if(this.styles.save(_),E=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ii(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var U=t.style.perspective;t.style.perspective=u,u=ii(t,"perspective"),U?t.style.perspective=U:Vr(t,"perspective")}d=parseFloat(u)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||ya(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new zn(this._pt,a,Ne,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new zn(this._pt,b,"scaleY",b.scaleY,(x?Qs(b.scaleY,x+d):d)-b.scaleY||0,Xu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(kn,0,a[kn]),u=pv(u),b.svg?$u(t,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&Lr(this,b,"zOrigin",b.zOrigin,m),Lr(this,a,_,rc(l),rc(u)));continue}else if(_==="svgOrigin"){$u(t,u,1,T,0,this);continue}else if(_ in fg){vv(this,b,_,h,x?Qs(h,x+u):u);continue}else if(_==="smoothOrigin"){Lr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){xv(this,u,t);continue}}else _ in a||(_=po(_)||_);if(S||(d||d===0)&&(h||h===0)&&!j_.test(u)&&_ in a)p=(l+"").substr((h+"").length),d||(d=0),m=_n(u)||(_ in ri.units?ri.units[_]:p),p!==m&&(h=Hr(t,_,l,m)),this._pt=new zn(this._pt,S?b:a,_,h,(x?Qs(h,x+d):d)-h,!S&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?iv:Xu),this._pt.u=m||0,S&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=nv):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=ev);else if(_ in a)dv.call(this,t,_,l,x?x+u:u);else if(_ in t)this.add(t,_,l||t[_],x?x+u:u,r,s);else if(_!=="parseTransform"){ff(_,u);continue}S||(_ in a?y.push(_,0,a[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,l||t[_])),o.push(_)}}w&&ig(this)},render:function(t,e){if(e.tween._time||!Ef())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:sr,aliases:Oi,getSetter:function(t,e,n){var r=Oi[e];return r&&r.indexOf(",")<0&&(e=r),e in pr&&e!==kn&&(t._gsap.x||sr(t,"x"))?n&&vd===n?e==="scale"?av:ov:(vd=n||{})&&(e==="scale"?lv:cv):t.style&&!cf(t.style[e])?rv:~e.indexOf("-")?sv:yf(t,e)},core:{_removeProperty:Vr,_getMatrix:Tf}};Gn.utils.checkPrefix=po;Gn.core.getStyleSaver=lg;(function(i,t,e,n){var r=Bn(i+","+t+","+e,function(s){pr[s]=1});Bn(t,function(s){ri.units[s]="deg",fg[s]=1}),Oi[r[13]]=i+","+t,Bn(n,function(s){var o=s.split(":");Oi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ri.units[i]="px"});Gn.registerPlugin(mg);var Ct=Gn.registerPlugin(mg)||Gn;Ct.core.Tween;function yv(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Sv(i,t,e){return t&&yv(i.prototype,t),i}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,Ul,ti,Ir,Nr,eo,gg,is,na,_g,lr,Ei,vg,xg=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},yg=1,Js=[],ce=[],Vi=[],ia=Date.now,Ku=function(t,e){return e},Mv=function(){var t=na.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,ce),r.push.apply(r,Vi),ce=n,Vi=r,Ku=function(o,a){return e[o](a)}},zr=function(t,e){return~Vi.indexOf(t)&&Vi[Vi.indexOf(t)+1][e]},ra=function(t){return!!~_g.indexOf(t)},En=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},Mn=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Ha="scrollLeft",Ga="scrollTop",Zu=function(){return lr&&lr.isPressed||ce.cache++},sc=function(t,e){var n=function r(s){if(s||s===0){yg&&(ti.history.scrollRestoration="manual");var o=lr&&lr.isPressed;s=r.v=Math.round(s)||(lr&&lr.iOS?1:0),t(s),r.cacheID=ce.cache,o&&Ku("ss",s)}else(e||ce.cache!==r.cacheID||Ku("ref"))&&(r.cacheID=ce.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Rn={s:Ha,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sc(function(i){return arguments.length?ti.scrollTo(i,Ke.sc()):ti.pageXOffset||Ir[Ha]||Nr[Ha]||eo[Ha]||0})},Ke={s:Ga,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:sc(function(i){return arguments.length?ti.scrollTo(Rn.sc(),i):ti.pageYOffset||Ir[Ga]||Nr[Ga]||eo[Ga]||0})},Un=function(t,e){return(e&&e._ctx&&e._ctx.selector||an.utils.toArray)(t)[0]||(typeof t=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ev=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Gr=function(t,e){var n=e.s,r=e.sc;ra(t)&&(t=Ir.scrollingElement||Nr);var s=ce.indexOf(t),o=r===Ke.sc?1:2;!~s&&(s=ce.push(t)-1),ce[s+o]||En(t,"scroll",Zu);var a=ce[s+o],c=a||(ce[s+o]=sc(zr(t,n),!0)||(ra(t)?r:sc(function(l){return arguments.length?t[n]=l:t[n]})));return c.target=t,a||(c.smooth=an.getProperty(t,"scrollBehavior")==="smooth"),c},Ju=function(t,e,n){var r=t,s=t,o=ia(),a=o,c=e||50,l=Math.max(500,c*3),u=function(g,_){var p=ia();_||p-o>c?(s=r,r=g,a=o,o=p):n?r+=g:r=s+(g-s)/(p-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},h=function(g){var _=a,p=s,m=ia();return(g||g===0)&&g!==r&&u(g),o===a||m-a>l?0:(r+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Ro=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ad=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Sg=function(){na=an.core.globals().ScrollTrigger,na&&na.core&&Mv()},Mg=function(t){return an=t||xg(),!Ul&&an&&typeof document<"u"&&document.body&&(ti=window,Ir=document,Nr=Ir.documentElement,eo=Ir.body,_g=[ti,Ir,Nr,eo],an.utils.clamp,vg=an.core.context||function(){},is="onpointerenter"in eo?"pointer":"mouse",gg=Ve.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Ve.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return yg=0},500),Sg(),Ul=1),Ul};Rn.op=Ke;ce.cache=0;var Ve=function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Ul||Mg(an)||console.warn("Please gsap.registerPlugin(Observer)"),na||Sg();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,x=n.onDrag,S=n.onPress,v=n.onRelease,b=n.onRight,T=n.onLeft,w=n.onUp,y=n.onDown,E=n.onChangeX,U=n.onChangeY,P=n.onChange,F=n.onToggleX,k=n.onToggleY,R=n.onHover,N=n.onHoverEnd,L=n.onMove,I=n.ignoreCheck,q=n.isNormalizer,$=n.onGestureStart,D=n.onGestureEnd,st=n.onWheel,at=n.onEnable,V=n.onDisable,tt=n.onClick,ot=n.scrollSpeed,G=n.capture,Q=n.allowClicks,j=n.lockAxis,ft=n.onLockAxis;this.target=a=Un(a)||Nr,this.vars=n,f&&(f=an.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,ot=ot||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ti.getComputedStyle(eo).lineHeight)||22);var gt,Tt,Qt,mt,Ut,Yt,kt,Y=this,B=0,te=0,qt=n.passive||!u&&n.passive!==!1,Xt=Gr(a,Rn),X=Gr(a,Ke),C=Xt(),M=X(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",it=ra(a),rt=a.ownerDocument||Ir,et=[0,0,0],bt=[0,0,0],dt=0,Ft=function(){return dt=ia()},At=function(Bt,ie){return(Y.event=Bt)&&f&&Ev(Bt.target,f)||ie&&z&&Bt.pointerType!=="touch"||I&&I(Bt,ie)},ct=function(){Y._vx.reset(),Y._vy.reset(),Tt.pause(),d&&d(Y)},ht=function(){var Bt=Y.deltaX=Ad(et),ie=Y.deltaY=Ad(bt),Mt=Math.abs(Bt)>=r,Kt=Math.abs(ie)>=r;P&&(Mt||Kt)&&P(Y,Bt,ie,et,bt),Mt&&(b&&Y.deltaX>0&&b(Y),T&&Y.deltaX<0&&T(Y),E&&E(Y),F&&Y.deltaX<0!=B<0&&F(Y),B=Y.deltaX,et[0]=et[1]=et[2]=0),Kt&&(y&&Y.deltaY>0&&y(Y),w&&Y.deltaY<0&&w(Y),U&&U(Y),k&&Y.deltaY<0!=te<0&&k(Y),te=Y.deltaY,bt[0]=bt[1]=bt[2]=0),(mt||Qt)&&(L&&L(Y),Qt&&(p&&Qt===1&&p(Y),x&&x(Y),Qt=0),mt=!1),Yt&&!(Yt=!1)&&ft&&ft(Y),Ut&&(st(Y),Ut=!1),gt=0},Rt=function(Bt,ie,Mt){et[Mt]+=Bt,bt[Mt]+=ie,Y._vx.update(Bt),Y._vy.update(ie),l?gt||(gt=requestAnimationFrame(ht)):ht()},Dt=function(Bt,ie){j&&!kt&&(Y.axis=kt=Math.abs(Bt)>Math.abs(ie)?"x":"y",Yt=!0),kt!=="y"&&(et[2]+=Bt,Y._vx.update(Bt,!0)),kt!=="x"&&(bt[2]+=ie,Y._vy.update(ie,!0)),l?gt||(gt=requestAnimationFrame(ht)):ht()},xt=function(Bt){if(!At(Bt,1)){Bt=Ro(Bt,u);var ie=Bt.clientX,Mt=Bt.clientY,Kt=ie-Y.x,Wt=Mt-Y.y,Zt=Y.isDragging;Y.x=ie,Y.y=Mt,(Zt||(Kt||Wt)&&(Math.abs(Y.startX-ie)>=s||Math.abs(Y.startY-Mt)>=s))&&(Qt||(Qt=Zt?2:1),Zt||(Y.isDragging=!0),Dt(Kt,Wt))}},$t=Y.onPress=function(wt){At(wt,1)||wt&&wt.button||(Y.axis=kt=null,Tt.pause(),Y.isPressed=!0,wt=Ro(wt),B=te=0,Y.startX=Y.x=wt.clientX,Y.startY=Y.y=wt.clientY,Y._vx.reset(),Y._vy.reset(),En(q?a:rt,Ei[1],xt,qt,!0),Y.deltaX=Y.deltaY=0,S&&S(Y))},O=Y.onRelease=function(wt){if(!At(wt,1)){Mn(q?a:rt,Ei[1],xt,!0);var Bt=!isNaN(Y.y-Y.startY),ie=Y.isDragging,Mt=ie&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Kt=Ro(wt);!Mt&&Bt&&(Y._vx.reset(),Y._vy.reset(),u&&Q&&an.delayedCall(.08,function(){if(ia()-dt>300&&!wt.defaultPrevented){if(wt.target.click)wt.target.click();else if(rt.createEvent){var Wt=rt.createEvent("MouseEvents");Wt.initMouseEvent("click",!0,!0,ti,1,Kt.screenX,Kt.screenY,Kt.clientX,Kt.clientY,!1,!1,!1,!1,0,null),wt.target.dispatchEvent(Wt)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&ie&&!q&&Tt.restart(!0),Qt&&ht(),m&&ie&&m(Y),v&&v(Y,Mt)}},pt=function(Bt){return Bt.touches&&Bt.touches.length>1&&(Y.isGesturing=!0)&&$(Bt,Y.isDragging)},ut=function(){return(Y.isGesturing=!1)||D(Y)},yt=function(Bt){if(!At(Bt)){var ie=Xt(),Mt=X();Rt((ie-C)*ot,(Mt-M)*ot,1),C=ie,M=Mt,d&&Tt.restart(!0)}},lt=function(Bt){if(!At(Bt)){Bt=Ro(Bt,u),st&&(Ut=!0);var ie=(Bt.deltaMode===1?c:Bt.deltaMode===2?ti.innerHeight:1)*g;Rt(Bt.deltaX*ie,Bt.deltaY*ie,0),d&&!q&&Tt.restart(!0)}},nt=function(Bt){if(!At(Bt)){var ie=Bt.clientX,Mt=Bt.clientY,Kt=ie-Y.x,Wt=Mt-Y.y;Y.x=ie,Y.y=Mt,mt=!0,d&&Tt.restart(!0),(Kt||Wt)&&Dt(Kt,Wt)}},Pt=function(Bt){Y.event=Bt,R(Y)},Gt=function(Bt){Y.event=Bt,N(Y)},pe=function(Bt){return At(Bt)||Ro(Bt,u)&&tt(Y)};Tt=Y._dc=an.delayedCall(h||.25,ct).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Ju(0,50,!0),Y._vy=Ju(0,50,!0),Y.scrollX=Xt,Y.scrollY=X,Y.isDragging=Y.isGesturing=Y.isPressed=!1,vg(this),Y.enable=function(wt){return Y.isEnabled||(En(it?rt:a,"scroll",Zu),o.indexOf("scroll")>=0&&En(it?rt:a,"scroll",yt,qt,G),o.indexOf("wheel")>=0&&En(a,"wheel",lt,qt,G),(o.indexOf("touch")>=0&&gg||o.indexOf("pointer")>=0)&&(En(a,Ei[0],$t,qt,G),En(rt,Ei[2],O),En(rt,Ei[3],O),Q&&En(a,"click",Ft,!0,!0),tt&&En(a,"click",pe),$&&En(rt,"gesturestart",pt),D&&En(rt,"gestureend",ut),R&&En(a,is+"enter",Pt),N&&En(a,is+"leave",Gt),L&&En(a,is+"move",nt)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=mt=Qt=!1,Y._vx.reset(),Y._vy.reset(),C=Xt(),M=X(),wt&&wt.type&&$t(wt),at&&at(Y)),Y},Y.disable=function(){Y.isEnabled&&(Js.filter(function(wt){return wt!==Y&&ra(wt.target)}).length||Mn(it?rt:a,"scroll",Zu),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Mn(q?a:rt,Ei[1],xt,!0)),Mn(it?rt:a,"scroll",yt,G),Mn(a,"wheel",lt,G),Mn(a,Ei[0],$t,G),Mn(rt,Ei[2],O),Mn(rt,Ei[3],O),Mn(a,"click",Ft,!0),Mn(a,"click",pe),Mn(rt,"gesturestart",pt),Mn(rt,"gestureend",ut),Mn(a,is+"enter",Pt),Mn(a,is+"leave",Gt),Mn(a,is+"move",nt),Y.isEnabled=Y.isPressed=Y.isDragging=!1,V&&V(Y))},Y.kill=Y.revert=function(){Y.disable();var wt=Js.indexOf(Y);wt>=0&&Js.splice(wt,1),lr===Y&&(lr=0)},Js.push(Y),q&&ra(a)&&(lr=Y),Y.enable(_)},Sv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Ve.version="3.14.2";Ve.create=function(i){return new Ve(i)};Ve.register=Mg;Ve.getAll=function(){return Js.slice()};Ve.getById=function(i){return Js.filter(function(t){return t.vars.id===i})[0]};xg()&&an.registerPlugin(Ve);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nt,qs,le,Ae,Jn,ve,wf,oc,Sa,sa,Wo,Wa,mn,Mc,Qu,wn,Cd,Rd,$s,Eg,zc,bg,Tn,ju,Tg,wg,Ar,th,Af,no,Cf,oa,eh,kc,Xa=1,gn=Date.now,Vc=gn(),_i=0,Xo=0,Pd=function(t,e,n){var r=Kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},Dd=function(t,e){return e&&(!Kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},bv=function i(){return Xo&&requestAnimationFrame(i)},Ld=function(){return Mc=1},Id=function(){return Mc=0},Ni=function(t){return t},Yo=function(t){return Math.round(t*1e5)/1e5||0},Ag=function(){return typeof window<"u"},Cg=function(){return Nt||Ag()&&(Nt=window.gsap)&&Nt.registerPlugin&&Nt},Ss=function(t){return!!~wf.indexOf(t)},Rg=function(t){return(t==="Height"?Cf:le["inner"+t])||Jn["client"+t]||ve["client"+t]},Pg=function(t){return zr(t,"getBoundingClientRect")||(Ss(t)?function(){return kl.width=le.innerWidth,kl.height=Cf,kl}:function(){return or(t)})},Tv=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=zr(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?Rg(s):t["client"+s])||0}},wv=function(t,e){return!e||~Vi.indexOf(t)?Pg(t):function(){return kl}},Bi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=zr(t,n))?o()-Pg(t)()[s]:Ss(t)?(Jn[n]||ve[n])-Rg(r):t[n]-t["offset"+r])},Ya=function(t,e){for(var n=0;n<$s.length;n+=3)(!e||~e.indexOf($s[n+1]))&&t($s[n],$s[n+1],$s[n+2])},Kn=function(t){return typeof t=="string"},vn=function(t){return typeof t=="function"},qo=function(t){return typeof t=="number"},rs=function(t){return typeof t=="object"},Po=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Hc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ds=Math.abs,Dg="left",Lg="top",Rf="right",Pf="bottom",_s="width",vs="height",aa="Right",la="Left",ca="Top",ua="Bottom",Ge="padding",di="margin",mo="Width",Df="Height",$e="px",pi=function(t){return le.getComputedStyle(t)},Av=function(t){var e=pi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Nd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},or=function(t,e){var n=e&&pi(t)[Qu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Nt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},ac=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ig=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},Cv=function(t){return function(e){return Nt.utils.snap(Ig(t),e)}},Lf=function(t){var e=Nt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},Rv=function(t){return function(e,n){return Lf(Ig(t))(e,n.direction)}},qa=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},nn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},en=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},$a=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ud={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ka={toggleActions:"play",anticipatePin:0},lc={top:0,left:0,center:.5,bottom:1,right:1},Fl=function(t,e){if(Kn(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in lc?lc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Za=function(t,e,n,r,s,o,a,c){var l=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=Ae.createElement("div"),_=Ss(n)||zr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?ve:n,x=t.indexOf("start")!==-1,S=x?l:u,v="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||c)&&_?"fixed;":"absolute;"),(p||c||!_)&&(v+=(r===Ke?Rf:Pf)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=v,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],Ol(g,0,r,x),g},Ol=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+mo]=1,s["border"+a+mo]=0,s[n.p]=e+"px",Nt.set(t,s)},ae=[],nh={},Ma,Fd=function(){return gn()-_i>34&&(Ma||(Ma=requestAnimationFrame(hr)))},Ls=function(){(!Tn||!Tn.isPressed||Tn.startX>ve.clientWidth)&&(ce.cache++,Tn?Ma||(Ma=requestAnimationFrame(hr)):hr(),_i||Es("scrollStart"),_i=gn())},Gc=function(){wg=le.innerWidth,Tg=le.innerHeight},$o=function(t){ce.cache++,(t===!0||!mn&&!bg&&!Ae.fullscreenElement&&!Ae.webkitFullscreenElement&&(!ju||wg!==le.innerWidth||Math.abs(le.innerHeight-Tg)>le.innerHeight*.25))&&oc.restart(!0)},Ms={},Pv=[],Ng=function i(){return en(ne,"scrollEnd",i)||cs(!0)},Es=function(t){return Ms[t]&&Ms[t].map(function(e){return e()})||Pv},$n=[],Ug=function(t){for(var e=0;e<$n.length;e+=5)(!t||$n[e+4]&&$n[e+4].query===t)&&($n[e].style.cssText=$n[e+1],$n[e].getBBox&&$n[e].setAttribute("transform",$n[e+2]||""),$n[e+3].uncache=1)},Fg=function(){return ce.forEach(function(t){return vn(t)&&++t.cacheID&&(t.rec=t())})},If=function(t,e){var n;for(wn=0;wn<ae.length;wn++)n=ae[wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));oa=!0,e&&Ug(e),e||Es("revert")},Og=function(t,e){ce.cache++,(e||!An)&&ce.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),Kn(t)&&(le.history.scrollRestoration=Af=t)},An,xs=0,Od,Dv=function(){if(Od!==xs){var t=Od=xs;requestAnimationFrame(function(){return t===xs&&cs(!0)})}},Bg=function(){ve.appendChild(no),Cf=!Tn&&no.offsetHeight||le.innerHeight,ve.removeChild(no)},Bd=function(t){return Sa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},cs=function(t,e){if(Jn=Ae.documentElement,ve=Ae.body,wf=[le,Ae,Jn,ve],_i&&!t&&!oa){nn(ne,"scrollEnd",Ng);return}Bg(),An=ne.isRefreshing=!0,oa||Fg();var n=Es("refreshInit");Eg&&ne.sort(),e||If(),ce.forEach(function(r){vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ae.slice(0).forEach(function(r){return r.refresh()}),oa=!1,ae.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),eh=1,Bd(!0),ae.forEach(function(r){var s=Bi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Bd(!1),eh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ce.forEach(function(r){vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Og(Af,1),oc.pause(),xs++,An=2,hr(2),ae.forEach(function(r){return vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),An=ne.isRefreshing=!1,Es("refresh")},ih=0,Bl=1,ha,hr=function(t){if(t===2||!An&&!oa){ne.isUpdating=!0,ha&&ha.update(0);var e=ae.length,n=gn(),r=n-Vc>=50,s=e&&ae[0].scroll();if(Bl=ih>s?-1:1,An||(ih=s),r&&(_i&&!Mc&&n-_i>200&&(_i=0,Es("scrollEnd")),Wo=Vc,Vc=n),Bl<0){for(wn=e;wn-- >0;)ae[wn]&&ae[wn].update(0,r);Bl=1}else for(wn=0;wn<e;wn++)ae[wn]&&ae[wn].update(0,r);ne.isUpdating=!1}Ma=0},rh=[Dg,Lg,Pf,Rf,di+ua,di+aa,di+ca,di+la,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zl=rh.concat([_s,vs,"boxSizing","max"+mo,"max"+Df,"position",di,Ge,Ge+ca,Ge+aa,Ge+ua,Ge+la]),Lv=function(t,e,n){io(n);var r=t._gsap;if(r.spacerIsNative)io(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Wc=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=rh.length,o=e.style,a=t.style,c;s--;)c=rh[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pf]=a[Rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=ac(t,Rn)+$e,o[vs]=ac(t,Ke)+$e,o[Ge]=a[di]=a[Lg]=a[Dg]="0",io(r),a[_s]=a["max"+mo]=n[_s],a[vs]=a["max"+Df]=n[vs],a[Ge]=n[Ge],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Iv=/([A-Z])/g,io=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Nt.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Iv,"-$1").toLowerCase())}},Ja=function(t){for(var e=zl.length,n=t.style,r=[],s=0;s<e;s++)r.push(zl[s],n[zl[s]]);return r.t=t,r},Nv=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},kl={left:0,top:0},zd=function(t,e,n,r,s,o,a,c,l,u,d,h,f,g){vn(t)&&(t=t(c)),Kn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Fl("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,x;if(f&&f.seek(0),isNaN(t)||(t=+t),qo(t))f&&(t=Nt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&Ol(a,n,r,!0);else{vn(e)&&(e=e(c));var S=(t||"0").split(" "),v,b,T,w;x=Un(e,c)||ve,v=or(x)||{},(!v||!v.left&&!v.top)&&pi(x).display==="none"&&(w=x.style.display,x.style.display="block",v=or(x),w?x.style.display=w:x.style.removeProperty("display")),b=Fl(S[0],v[r.d]),T=Fl(S[1]||"0",n),t=v[r.p]-l[r.p]-u+b+s-T,a&&Ol(a,T,r,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(c[g]=t||-.001,t<0&&(t=0)),o){var y=t+n,E=o._isStart;p="scroll"+r.d2,Ol(o,y,r,E&&y>20||!E&&(d?Math.max(ve[p],Jn[p]):o.parentNode[p])<=y+1),d&&(l=or(a),d&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+$e))}return f&&x&&(p=or(x),f.seek(h),m=or(x),f._caScrollDist=p[r.p]-m[r.p],t=t/f._caScrollDist*h),f&&f.seek(_),f?t:Math.round(t)},Uv=/(webkit|moz|length|cssText|inset)/i,kd=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===ve){t._stOrig=s.cssText,a=pi(t);for(o in a)!+o&&!Uv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Nt.core.getCache(t).uncache=1,e.appendChild(t)}},zg=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Qa=function(t,e,n){var r={};r[e.p]="+="+n,Nt.set(t,r)},Vd=function(t,e){var n=Gr(t,e),r="_scroll"+e.p2,s=function o(a,c,l,u,d){var h=o.tween,f=c.onComplete,g={};l=l||n();var _=zg(n,l,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-l,h&&h.kill(),c[r]=a,c.inherit=!1,c.modifiers=g,g[r]=function(){return _(l+u*h.ratio+d*h.ratio*h.ratio)},c.onUpdate=function(){ce.cache++,o.tween&&hr()},c.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=Nt.to(t,c),h};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(t,"wheel",n.wheelHandler),ne.isTouch&&nn(t,"touchmove",n.wheelHandler),s},ne=function(){function i(e,n){qs||i.register(Nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),th(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xo){this.update=this.refresh=this.kill=Ni;return}n=Nd(Kn(n)||qo(n)||n.nodeType?{trigger:n}:n,Ka);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,S=s.once,v=s.snap,b=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,y=s.fastScrollEnd,E=s.preventOverlaps,U=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Ke,P=!d&&d!==0,F=Un(n.scroller||le),k=Nt.core.getCache(F),R=Ss(F),N=("pinType"in n?n.pinType:zr(F,"pinType")||R&&"fixed")==="fixed",L=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=P&&n.toggleActions.split(" "),q="markers"in n?n.markers:Ka.markers,$=R?0:parseFloat(pi(F)["border"+U.p2+mo])||0,D=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(D)},at=Tv(F,R,U),V=wv(F,R),tt=0,ot=0,G=0,Q=Gr(F,U),j,ft,gt,Tt,Qt,mt,Ut,Yt,kt,Y,B,te,qt,Xt,X,C,M,z,it,rt,et,bt,dt,Ft,At,ct,ht,Rt,Dt,xt,$t,O,pt,ut,yt,lt,nt,Pt,Gt;if(D._startClamp=D._endClamp=!1,D._dir=U,p*=45,D.scroller=F,D.scroll=w?w.time.bind(w):Q,Tt=Q(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(Eg=1,n.refreshPriority===-9999&&(ha=D)),k.tweenScroll=k.tweenScroll||{top:Vd(F,Ke),left:Vd(F,Rn)},D.tweenTo=j=k.tweenScroll[U.p],D.scrubDuration=function(Mt){pt=qo(Mt)&&Mt,pt?O?O.duration(Mt):O=Nt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pt,paused:!0,onComplete:function(){return m&&m(D)}}):(O&&O.progress(1).kill(),O=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(d),xt=0,c||(c=r.vars.id)),v&&((!rs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in ve.style&&Nt.set(R?[ve,Jn]:F,{scrollBehavior:"auto"}),ce.forEach(function(Mt){return vn(Mt)&&Mt.target===(R?Ae.scrollingElement||Jn:F)&&(Mt.smooth=!1)}),gt=vn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Cv(r):v.snapTo==="labelsDirectional"?Rv(r):v.directional!==!1?function(Mt,Kt){return Lf(v.snapTo)(Mt,gn()-ot<500?0:Kt.direction)}:Nt.utils.snap(v.snapTo),ut=v.duration||{min:.1,max:2},ut=rs(ut)?sa(ut.min,ut.max):sa(ut,ut),yt=Nt.delayedCall(v.delay||pt/2||.1,function(){var Mt=Q(),Kt=gn()-ot<500,Wt=j.tween;if((Kt||Math.abs(D.getVelocity())<10)&&!Wt&&!Mc&&tt!==Mt){var Zt=(Mt-mt)/Xt,Be=r&&!P?r.totalProgress():Zt,jt=Kt?0:(Be-$t)/(gn()-Wo)*1e3||0,Ce=Nt.utils.clamp(-Zt,1-Zt,Ds(jt/2)*jt/.185),Xe=Zt+(v.inertia===!1?0:Ce),Re,xe,_e=v,un=_e.onStart,we=_e.onInterrupt,hn=_e.onComplete;if(Re=gt(Xe,D),qo(Re)||(Re=Xe),xe=Math.max(0,Math.round(mt+Re*Xt)),Mt<=Ut&&Mt>=mt&&xe!==Mt){if(Wt&&!Wt._initted&&Wt.data<=Ds(xe-Mt))return;v.inertia===!1&&(Ce=Re-Zt),j(xe,{duration:ut(Ds(Math.max(Ds(Xe-Be),Ds(Re-Be))*.185/jt/.05||0)),ease:v.ease||"power3",data:Ds(xe-Mt),onInterrupt:function(){return yt.restart(!0)&&we&&we(D)},onComplete:function(){D.update(),tt=Q(),r&&!P&&(O?O.resetTo("totalProgress",Re,r._tTime/r._tDur):r.progress(Re)),xt=$t=r&&!P?r.totalProgress():D.progress,x&&x(D),hn&&hn(D)}},Mt,Ce*Xt,xe-Mt-Ce*Xt),un&&un(D,j.tween)}}else D.isActive&&tt!==Mt&&yt.restart(!0)}).pause()),c&&(nh[c]=D),h=D.trigger=Un(h||f!==!0&&f),Gt=h&&h._gsap&&h._gsap.stRevert,Gt&&(Gt=Gt(D)),f=f===!0?h:Un(f),Kn(a)&&(a={targets:h,className:a}),f&&(g===!1||g===di||(g=!g&&f.parentNode&&f.parentNode.style&&pi(f.parentNode).display==="flex"?!1:Ge),D.pin=f,ft=Nt.core.getCache(f),ft.spacer?X=ft.pinState:(T&&(T=Un(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),ft.spacerIsNative=!!T,T&&(ft.spacerState=Ja(T))),ft.spacer=z=T||Ae.createElement("div"),z.classList.add("pin-spacer"),c&&z.classList.add("pin-spacer-"+c),ft.pinState=X=Ja(f)),n.force3D!==!1&&Nt.set(f,{force3D:!0}),D.spacer=z=ft.spacer,Dt=pi(f),Ft=Dt[g+U.os2],rt=Nt.getProperty(f),et=Nt.quickSetter(f,U.a,$e),Wc(f,z,Dt),M=Ja(f)),q){te=rs(q)?Nd(q,Ud):Ud,Y=Za("scroller-start",c,F,U,te,0),B=Za("scroller-end",c,F,U,te,0,Y),it=Y["offset"+U.op.d2];var pe=Un(zr(F,"content")||F);Yt=this.markerStart=Za("start",c,pe,U,te,it,0,w),kt=this.markerEnd=Za("end",c,pe,U,te,it,0,w),w&&(Pt=Nt.quickSetter([Yt,kt],U.a,$e)),!N&&!(Vi.length&&zr(F,"fixedMarkers")===!0)&&(Av(R?ve:F),Nt.set([Y,B],{force3D:!0}),ct=Nt.quickSetter(Y,U.a,$e),Rt=Nt.quickSetter(B,U.a,$e))}if(w){var wt=w.vars.onUpdate,Bt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),wt&&wt.apply(w,Bt||[])})}if(D.previous=function(){return ae[ae.indexOf(D)-1]},D.next=function(){return ae[ae.indexOf(D)+1]},D.revert=function(Mt,Kt){if(!Kt)return D.kill(!0);var Wt=Mt!==!1||!D.enabled,Zt=mn;Wt!==D.isReverted&&(Wt&&(lt=Math.max(Q(),D.scroll.rec||0),G=D.progress,nt=r&&r.progress()),Yt&&[Yt,kt,Y,B].forEach(function(Be){return Be.style.display=Wt?"none":"block"}),Wt&&(mn=D,D.update(Wt)),f&&(!b||!D.isActive)&&(Wt?Lv(f,z,X):Wc(f,z,pi(f),At)),Wt||D.update(Wt),mn=Zt,D.isReverted=Wt)},D.refresh=function(Mt,Kt,Wt,Zt){if(!((mn||!D.enabled)&&!Kt)){if(f&&Mt&&_i){nn(i,"scrollEnd",Ng);return}!An&&st&&st(D),mn=D,j.tween&&!Wt&&(j.tween.kill(),j.tween=0),O&&O.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Lt){return Lt.vars.immediateRender&&Lt.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Be=at(),jt=V(),Ce=w?w.duration():Bi(F,U),Xe=Xt<=.01||!Xt,Re=0,xe=Zt||0,_e=rs(Wt)?Wt.end:n.end,un=n.endTrigger||h,we=rs(Wt)?Wt.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),hn=D.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,D),ci=h&&Math.max(0,ae.indexOf(D))||0,Ye=ci,qe,Qe,Zi,As,A,H,J,Z,K,_t,St,vt,It;for(q&&rs(Wt)&&(vt=Nt.getProperty(Y,U.p),It=Nt.getProperty(B,U.p));Ye-- >0;)H=ae[Ye],H.end||H.refresh(0,1)||(mn=D),J=H.pin,J&&(J===h||J===f||J===hn)&&!H.isReverted&&(_t||(_t=[]),_t.unshift(H),H.revert(!0,!0)),H!==ae[Ye]&&(ci--,Ye--);for(vn(we)&&(we=we(D)),we=Pd(we,"start",D),mt=zd(we,h,Be,U,Q(),Yt,Y,D,jt,$,N,Ce,w,D._startClamp&&"_startClamp")||(f?-.001:0),vn(_e)&&(_e=_e(D)),Kn(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Kn(we)?we.split(" ")[0]:"")+_e:(Re=Fl(_e.substr(2),Be),_e=Kn(we)?we:(w?Nt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,mt):mt)+Re,un=h)),_e=Pd(_e,"end",D),Ut=Math.max(mt,zd(_e||(un?"100% 0":Ce),un,Be,U,Q()+Re,kt,B,D,jt,$,N,Ce,w,D._endClamp&&"_endClamp"))||-.001,Re=0,Ye=ci;Ye--;)H=ae[Ye]||{},J=H.pin,J&&H.start-H._pinPush<=mt&&!w&&H.end>0&&(qe=H.end-(D._startClamp?Math.max(0,H.start):H.start),(J===h&&H.start-H._pinPush<mt||J===hn)&&isNaN(we)&&(Re+=qe*(1-H.progress)),J===f&&(xe+=qe));if(mt+=Re,Ut+=Re,D._startClamp&&(D._startClamp+=Re),D._endClamp&&!An&&(D._endClamp=Ut||-.001,Ut=Math.min(Ut,Bi(F,U))),Xt=Ut-mt||(mt-=.01)&&.001,Xe&&(G=Nt.utils.clamp(0,1,Nt.utils.normalize(mt,Ut,lt))),D._pinPush=xe,Yt&&Re&&(qe={},qe[U.a]="+="+Re,hn&&(qe[U.p]="-="+Q()),Nt.set([Yt,kt],qe)),f&&!(eh&&D.end>=Bi(F,U)))qe=pi(f),As=U===Ke,Zi=Q(),bt=parseFloat(rt(U.a))+xe,!Ce&&Ut>1&&(St=(R?Ae.scrollingElement||Jn:F).style,St={style:St,value:St["overflow"+U.a.toUpperCase()]},R&&pi(ve)["overflow"+U.a.toUpperCase()]!=="scroll"&&(St.style["overflow"+U.a.toUpperCase()]="scroll")),Wc(f,z,qe),M=Ja(f),Qe=or(f,!0),Z=N&&Gr(F,As?Rn:Ke)(),g?(At=[g+U.os2,Xt+xe+$e],At.t=z,Ye=g===Ge?ac(f,U)+Xt+xe:0,Ye&&(At.push(U.d,Ye+$e),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Ye+$e)),io(At),hn&&ae.forEach(function(Lt){Lt.pin===hn&&Lt.vars.pinSpacing!==!1&&(Lt._subPinOffset=!0)}),N&&Q(lt)):(Ye=ac(f,U),Ye&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Ye+$e)),N&&(A={top:Qe.top+(As?Zi-mt:Z)+$e,left:Qe.left+(As?Z:Zi-mt)+$e,boxSizing:"border-box",position:"fixed"},A[_s]=A["max"+mo]=Math.ceil(Qe.width)+$e,A[vs]=A["max"+Df]=Math.ceil(Qe.height)+$e,A[di]=A[di+ca]=A[di+aa]=A[di+ua]=A[di+la]="0",A[Ge]=qe[Ge],A[Ge+ca]=qe[Ge+ca],A[Ge+aa]=qe[Ge+aa],A[Ge+ua]=qe[Ge+ua],A[Ge+la]=qe[Ge+la],C=Nv(X,A,b),An&&Q(0)),r?(K=r._initted,zc(1),r.render(r.duration(),!0,!0),dt=rt(U.a)-bt+Xt+xe,ht=Math.abs(Xt-dt)>1,N&&ht&&C.splice(C.length-2,2),r.render(0,!0,!0),K||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),zc(0)):dt=Xt,St&&(St.value?St.style["overflow"+U.a.toUpperCase()]=St.value:St.style.removeProperty("overflow-"+U.a));else if(h&&Q()&&!w)for(Qe=h.parentNode;Qe&&Qe!==ve;)Qe._pinOffset&&(mt-=Qe._pinOffset,Ut-=Qe._pinOffset),Qe=Qe.parentNode;_t&&_t.forEach(function(Lt){return Lt.revert(!1,!0)}),D.start=mt,D.end=Ut,Tt=Qt=An?lt:Q(),!w&&!An&&(Tt<lt&&Q(lt),D.scroll.rec=0),D.revert(!1,!0),ot=gn(),yt&&(tt=-1,yt.restart(!0)),mn=0,r&&P&&(r._initted||nt)&&r.progress()!==nt&&r.progress(nt||0,!0).render(r.time(),!0,!0),(Xe||G!==D.progress||w||_||r&&!r._initted)&&(r&&!P&&(r._initted||G||r.vars.immediateRender!==!1)&&r.totalProgress(w&&mt<-.001&&!G?Nt.utils.normalize(mt,Ut,0):G,!0),D.progress=Xe||(Tt-mt)/Xt===G?0:G),f&&g&&(z._pinOffset=Math.round(D.progress*dt)),O&&O.invalidate(),isNaN(vt)||(vt-=Nt.getProperty(Y,U.p),It-=Nt.getProperty(B,U.p),Qa(Y,U,vt),Qa(Yt,U,vt-(Zt||0)),Qa(B,U,It),Qa(kt,U,It-(Zt||0))),Xe&&!An&&D.update(),u&&!An&&!qt&&(qt=!0,u(D),qt=!1)}},D.getVelocity=function(){return(Q()-Qt)/(gn()-Wo)*1e3||0},D.endAnimation=function(){Po(D.callbackAnimation),r&&(O?O.progress(1):r.paused()?P||Po(r,D.direction<0,1):Po(r,r.reversed()))},D.labelToScroll=function(Mt){return r&&r.labels&&(mt||D.refresh()||mt)+r.labels[Mt]/r.duration()*Xt||0},D.getTrailing=function(Mt){var Kt=ae.indexOf(D),Wt=D.direction>0?ae.slice(0,Kt).reverse():ae.slice(Kt+1);return(Kn(Mt)?Wt.filter(function(Zt){return Zt.vars.preventOverlaps===Mt}):Wt).filter(function(Zt){return D.direction>0?Zt.end<=mt:Zt.start>=Ut})},D.update=function(Mt,Kt,Wt){if(!(w&&!Wt&&!Mt)){var Zt=An===!0?lt:D.scroll(),Be=Mt?0:(Zt-mt)/Xt,jt=Be<0?0:Be>1?1:Be||0,Ce=D.progress,Xe,Re,xe,_e,un,we,hn,ci;if(Kt&&(Qt=Tt,Tt=w?Q():Zt,v&&($t=xt,xt=r&&!P?r.totalProgress():jt)),p&&f&&!mn&&!Xa&&_i&&(!jt&&mt<Zt+(Zt-Qt)/(gn()-Wo)*p?jt=1e-4:jt===1&&Ut>Zt+(Zt-Qt)/(gn()-Wo)*p&&(jt=.9999)),jt!==Ce&&D.enabled){if(Xe=D.isActive=!!jt&&jt<1,Re=!!Ce&&Ce<1,we=Xe!==Re,un=we||!!jt!=!!Ce,D.direction=jt>Ce?1:-1,D.progress=jt,un&&!mn&&(xe=jt&&!Ce?0:jt===1?1:Ce===1?2:3,P&&(_e=!we&&I[xe+1]!=="none"&&I[xe+1]||I[xe],ci=r&&(_e==="complete"||_e==="reset"||_e in r))),E&&(we||ci)&&(ci||d||!r)&&(vn(E)?E(D):D.getTrailing(E).forEach(function(Zi){return Zi.endAnimation()})),P||(O&&!mn&&!Xa?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",jt,r._tTime/r._tDur):(O.vars.totalProgress=jt,O.invalidate().restart())):r&&r.totalProgress(jt,!!(mn&&(ot||Mt)))),f){if(Mt&&g&&(z.style[g+U.os2]=Ft),!N)et(Yo(bt+dt*jt));else if(un){if(hn=!Mt&&jt>Ce&&Ut+1>Zt&&Zt+1>=Bi(F,U),b)if(!Mt&&(Xe||hn)){var Ye=or(f,!0),qe=Zt-mt;kd(f,ve,Ye.top+(U===Ke?qe:0)+$e,Ye.left+(U===Ke?0:qe)+$e)}else kd(f,z);io(Xe||hn?C:M),ht&&jt<1&&Xe||et(bt+(jt===1&&!hn?dt:0))}}v&&!j.tween&&!mn&&!Xa&&yt.restart(!0),a&&(we||S&&jt&&(jt<1||!kc))&&Sa(a.targets).forEach(function(Zi){return Zi.classList[Xe||S?"add":"remove"](a.className)}),o&&!P&&!Mt&&o(D),un&&!mn?(P&&(ci&&(_e==="complete"?r.pause().totalProgress(1):_e==="reset"?r.restart(!0).pause():_e==="restart"?r.restart(!0):r[_e]()),o&&o(D)),(we||!kc)&&(l&&we&&Hc(D,l),L[xe]&&Hc(D,L[xe]),S&&(jt===1?D.kill(!1,1):L[xe]=0),we||(xe=jt===1?1:3,L[xe]&&Hc(D,L[xe]))),y&&!Xe&&Math.abs(D.getVelocity())>(qo(y)?y:2500)&&(Po(D.callbackAnimation),O?O.progress(1):Po(r,_e==="reverse"?1:!jt,1))):P&&o&&!mn&&o(D)}if(Rt){var Qe=w?Zt/w.duration()*(w._caScrollDist||0):Zt;ct(Qe+(Y._isFlipped?1:0)),Rt(Qe)}Pt&&Pt(-Zt/w.duration()*(w._caScrollDist||0))}},D.enable=function(Mt,Kt){D.enabled||(D.enabled=!0,nn(F,"resize",$o),R||nn(F,"scroll",Ls),st&&nn(i,"refreshInit",st),Mt!==!1&&(D.progress=G=0,Tt=Qt=tt=Q()),Kt!==!1&&D.refresh())},D.getTween=function(Mt){return Mt&&j?j.tween:O},D.setPositions=function(Mt,Kt,Wt,Zt){if(w){var Be=w.scrollTrigger,jt=w.duration(),Ce=Be.end-Be.start;Mt=Be.start+Ce*Mt/jt,Kt=Be.start+Ce*Kt/jt}D.refresh(!1,!1,{start:Dd(Mt,Wt&&!!D._startClamp),end:Dd(Kt,Wt&&!!D._endClamp)},Zt),D.update()},D.adjustPinSpacing=function(Mt){if(At&&Mt){var Kt=At.indexOf(U.d)+1;At[Kt]=parseFloat(At[Kt])+Mt+$e,At[1]=parseFloat(At[1])+Mt+$e,io(At)}},D.disable=function(Mt,Kt){if(Mt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Kt||O&&O.pause(),lt=0,ft&&(ft.uncache=1),st&&en(i,"refreshInit",st),yt&&(yt.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!R)){for(var Wt=ae.length;Wt--;)if(ae[Wt].scroller===F&&ae[Wt]!==D)return;en(F,"resize",$o),R||en(F,"scroll",Ls)}},D.kill=function(Mt,Kt){D.disable(Mt,Kt),O&&!Kt&&O.kill(),c&&delete nh[c];var Wt=ae.indexOf(D);Wt>=0&&ae.splice(Wt,1),Wt===wn&&Bl>0&&wn--,Wt=0,ae.forEach(function(Zt){return Zt.scroller===D.scroller&&(Wt=1)}),Wt||An||(D.scroll.rec=0),r&&(r.scrollTrigger=null,Mt&&r.revert({kill:!1}),Kt||r.kill()),Yt&&[Yt,kt,Y,B].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),ha===D&&(ha=0),f&&(ft&&(ft.uncache=1),Wt=0,ae.forEach(function(Zt){return Zt.pin===f&&Wt++}),Wt||(ft.spacer=0)),n.onKill&&n.onKill(D)},ae.push(D),D.enable(!1,!1),Gt&&Gt(D),r&&r.add&&!Xt){var ie=D.update;D.update=function(){D.update=ie,ce.cache++,mt||Ut||D.refresh()},Nt.delayedCall(.01,D.update),Xt=.01,mt=Ut=0}else D.refresh();f&&Dv()},i.register=function(n){return qs||(Nt=n||Cg(),Ag()&&window.document&&i.enable(),qs=Xo),qs},i.defaults=function(n){if(n)for(var r in n)Ka[r]=n[r];return Ka},i.disable=function(n,r){Xo=0,ae.forEach(function(o){return o[r?"kill":"disable"](n)}),en(le,"wheel",Ls),en(Ae,"scroll",Ls),clearInterval(Wa),en(Ae,"touchcancel",Ni),en(ve,"touchstart",Ni),qa(en,Ae,"pointerdown,touchstart,mousedown",Ld),qa(en,Ae,"pointerup,touchend,mouseup",Id),oc.kill(),Ya(en);for(var s=0;s<ce.length;s+=3)$a(en,ce[s],ce[s+1]),$a(en,ce[s],ce[s+2])},i.enable=function(){if(le=window,Ae=document,Jn=Ae.documentElement,ve=Ae.body,Nt&&(Sa=Nt.utils.toArray,sa=Nt.utils.clamp,th=Nt.core.context||Ni,zc=Nt.core.suppressOverwrites||Ni,Af=le.history.scrollRestoration||"auto",ih=le.pageYOffset||0,Nt.core.globals("ScrollTrigger",i),ve)){Xo=1,no=document.createElement("div"),no.style.height="100vh",no.style.position="absolute",Bg(),bv(),Ve.register(Nt),i.isTouch=Ve.isTouch,Ar=Ve.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=Ve.isTouch===1,nn(le,"wheel",Ls),wf=[le,Ae,Jn,ve],Nt.matchMedia?(i.matchMedia=function(l){var u=Nt.matchMedia(),d;for(d in l)u.add(d,l[d]);return u},Nt.addEventListener("matchMediaInit",function(){Fg(),If()}),Nt.addEventListener("matchMediaRevert",function(){return Ug()}),Nt.addEventListener("matchMedia",function(){cs(0,1),Es("matchMedia")}),Nt.matchMedia().add("(orientation: portrait)",function(){return Gc(),Gc})):console.warn("Requires GSAP 3.11.0 or later"),Gc(),nn(Ae,"scroll",Ls);var n=ve.hasAttribute("style"),r=ve.style,s=r.borderTopStyle,o=Nt.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=or(ve),Ke.m=Math.round(a.top+Ke.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),Wa=setInterval(Fd,250),Nt.delayedCall(.5,function(){return Xa=0}),nn(Ae,"touchcancel",Ni),nn(ve,"touchstart",Ni),qa(nn,Ae,"pointerdown,touchstart,mousedown",Ld),qa(nn,Ae,"pointerup,touchend,mouseup",Id),Qu=Nt.utils.checkPrefix("transform"),zl.push(Qu),qs=gn(),oc=Nt.delayedCall(.2,cs).pause(),$s=[Ae,"visibilitychange",function(){var l=le.innerWidth,u=le.innerHeight;Ae.hidden?(Cd=l,Rd=u):(Cd!==l||Rd!==u)&&$o()},Ae,"DOMContentLoaded",cs,le,"load",cs,le,"resize",$o],Ya(nn),ae.forEach(function(l){return l.enable(0,1)}),c=0;c<ce.length;c+=3)$a(en,ce[c],ce[c+1]),$a(en,ce[c],ce[c+2])}},i.config=function(n){"limitCallbacks"in n&&(kc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Wa)||(Wa=r)&&setInterval(Fd,r),"ignoreMobileResize"in n&&(ju=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ya(en)||Ya(nn,n.autoRefreshEvents||"none"),bg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Un(n),o=ce.indexOf(s),a=Ss(s);~o&&ce.splice(o,a?6:2),r&&(a?Vi.unshift(le,r,ve,r,Jn,r):Vi.unshift(s,r))},i.clearMatchMedia=function(n){ae.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Kn(n)?Un(n):n).getBoundingClientRect(),a=o[s?_s:vs]*r||0;return s?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},i.positionInViewport=function(n,r,s){Kn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[s?_s:vs],c=r==null?a/2:r in lc?lc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+c)/le.innerWidth:(o.top+c)/le.innerHeight},i.killAll=function(n){if(ae.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ms.killAll||[];Ms={},r.forEach(function(s){return s()})}},i}();ne.version="3.14.2";ne.saveStyles=function(i){return i?Sa(i).forEach(function(t){if(t&&t.style){var e=$n.indexOf(t);e>=0&&$n.splice(e,5),$n.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Nt.core.getCache(t),th())}}):$n};ne.revert=function(i,t){return If(!i,t)};ne.create=function(i,t){return new ne(i,t)};ne.refresh=function(i){return i?$o(!0):(qs||ne.register())&&cs(!0)};ne.update=function(i){return++ce.cache&&hr(i===!0?2:0)};ne.clearScrollMemory=Og;ne.maxScroll=function(i,t){return Bi(i,t?Rn:Ke)};ne.getScrollFunc=function(i,t){return Gr(Un(i),t?Rn:Ke)};ne.getById=function(i){return nh[i]};ne.getAll=function(){return ae.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!_i};ne.snapDirectional=Lf;ne.addEventListener=function(i,t){var e=Ms[i]||(Ms[i]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(i,t){var e=Ms[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ne.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(l,u){var d=[],h=[],f=Nt.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&vn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return vn(s)&&(s=s(),nn(ne,"refresh",function(){return s=t.batchMax()})),Sa(i).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,e.push(ne.create(l))}),e};var Hd=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Xc=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ve.isTouch?" pinch-zoom":""):"none",t===Jn&&i(ve,e)},ja={auto:1,scroll:1},Fv=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Nt.core.getCache(s),a=gn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ja[(c=pi(s)).overflowY]||ja[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ss(s)&&(ja[(c=pi(s)).overflowY]||ja[c.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},kg=function(t,e,n,r){return Ve.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&Fv,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&nn(Ae,Ve.eventTypes[0],Wd,!1,!0)},onDisable:function(){return en(Ae,Ve.eventTypes[0],Wd,!0)}})},Ov=/(input|label|select|textarea)/i,Gd,Wd=function(t){var e=Ov.test(t.target.tagName);(e||Gd)&&(t._gsapAllow=!0,Gd=e)},Bv=function(t){rs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,c,l=Un(t.target)||Jn,u=Nt.core.globals().ScrollSmoother,d=u&&u.get(),h=Ar&&(t.content&&Un(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Gr(l,Ke),g=Gr(l,Rn),_=1,p=(Ve.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,m=0,x=vn(r)?function(){return r(a)}:function(){return r||2.8},S,v,b=kg(l,t.type,!0,s),T=function(){return v=!1},w=Ni,y=Ni,E=function(){c=Bi(l,Ke),y=sa(Ar?1:0,c),n&&(w=sa(0,Bi(l,Rn))),S=xs},U=function(){h._gsap.y=Yo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(v){requestAnimationFrame(T);var q=Yo(a.deltaY/2),$=y(f.v-q);if(h&&$!==f.v+f.offset){f.offset=$-f.v;var D=Yo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",f.cacheID=ce.cache,hr()}return!0}f.offset&&U(),v=!0},F,k,R,N,L=function(){E(),F.isActive()&&F.vars.scrollY>c&&(f()>c?F.progress(1)&&f(c):F.resetTo("scrollY",c))};return h&&Nt.set(h,{y:"+=0"}),t.ignoreCheck=function(I){return Ar&&I.type==="touchmove"&&P()||_>1.05&&I.type!=="touchstart"||a.isGesturing||I.touches&&I.touches.length>1},t.onPress=function(){v=!1;var I=_;_=Yo((le.visualViewport&&le.visualViewport.scale||1)/p),F.pause(),I!==_&&Xc(l,_>1.01?!0:n?!1:"x"),k=g(),R=f(),E(),S=xs},t.onRelease=t.onGestureStart=function(I,q){if(f.offset&&U(),!q)N.restart(!0);else{ce.cache++;var $=x(),D,st;n&&(D=g(),st=D+$*.05*-I.velocityX/.227,$*=Hd(g,D,st,Bi(l,Rn)),F.vars.scrollX=w(st)),D=f(),st=D+$*.05*-I.velocityY/.227,$*=Hd(f,D,st,Bi(l,Ke)),F.vars.scrollY=y(st),F.invalidate().duration($).play(.01),(Ar&&F.vars.scrollY>=c||D>=c-1)&&Nt.to({},{onUpdate:L,duration:$})}o&&o(I)},t.onWheel=function(){F._ts&&F.pause(),gn()-m>1e3&&(S=0,m=gn())},t.onChange=function(I,q,$,D,st){if(xs!==S&&E(),q&&n&&g(w(D[2]===q?k+(I.startX-I.x):g()+q-D[1])),$){f.offset&&U();var at=st[2]===$,V=at?R+I.startY-I.y:f()+$-st[1],tt=y(V);at&&V!==tt&&(R+=tt-V),f(tt)}($||q)&&hr()},t.onEnable=function(){Xc(l,n?!1:"x"),ne.addEventListener("refresh",L),nn(le,"resize",L),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){Xc(l,!0),en(le,"resize",L),ne.removeEventListener("refresh",L),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ve(t),a.iOS=Ar,Ar&&!f()&&f(1),Ar&&Nt.ticker.add(Ni),N=a._dc,F=Nt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zg(f,f(),function(){return F.pause()})},onUpdate:hr,onComplete:N.vars.onComplete}),a};ne.sort=function(i){if(vn(i))return ae.sort(i);var t=le.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),ae.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ne.observe=function(i){return new Ve(i)};ne.normalizeScroll=function(i){if(typeof i>"u")return Tn;if(i===!0&&Tn)return Tn.enable();if(i===!1){Tn&&Tn.kill(),Tn=i;return}var t=i instanceof Ve?i:Bv(i);return Tn&&Tn.target===t.target&&Tn.kill(),Ss(t.target)&&(Tn=t),t};ne.core={_getVelocityProp:Ju,_inputObserver:kg,_scrollers:ce,_proxies:Vi,bridge:{ss:function(){_i||Es("scrollStart"),_i=gn()},ref:function(){return mn}}};Cg()&&Nt.registerPlugin(ne);var zv={value:()=>{}};function Ia(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new Vl(e)}function Vl(i){this._=i}function kv(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}Vl.prototype=Ia.prototype={constructor:Vl,on:function(i,t){var e=this._,n=kv(i+"",e),r,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((r=(i=n[s]).type)&&(r=Vv(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(i=n[s]).type)e[r]=Xd(e[r],i.name,t);else if(t==null)for(r in e)e[r]=Xd(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new Vl(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function Vv(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function Xd(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=zv,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var sh="http://www.w3.org/1999/xhtml";const Yd={svg:"http://www.w3.org/2000/svg",xhtml:sh,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ec(i){var t=i+="",e=t.indexOf(":");return e>=0&&(t=i.slice(0,e))!=="xmlns"&&(i=i.slice(e+1)),Yd.hasOwnProperty(t)?{space:Yd[t],local:i}:i}function Hv(i){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===sh&&t.documentElement.namespaceURI===sh?t.createElement(i):t.createElementNS(e,i)}}function Gv(i){return function(){return this.ownerDocument.createElementNS(i.space,i.local)}}function Vg(i){var t=Ec(i);return(t.local?Gv:Hv)(t)}function Wv(){}function Nf(i){return i==null?Wv:function(){return this.querySelector(i)}}function Xv(i){typeof i!="function"&&(i=Nf(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=new Array(o),c,l,u=0;u<o;++u)(c=s[u])&&(l=i.call(c,c.__data__,u,s))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new li(n,this._parents)}function Yv(i){return i==null?[]:Array.isArray(i)?i:Array.from(i)}function qv(){return[]}function Hg(i){return i==null?qv:function(){return this.querySelectorAll(i)}}function $v(i){return function(){return Yv(i.apply(this,arguments))}}function Kv(i){typeof i=="function"?i=$v(i):i=Hg(i);for(var t=this._groups,e=t.length,n=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(n.push(i.call(c,c.__data__,l,o)),r.push(c));return new li(n,r)}function Gg(i){return function(){return this.matches(i)}}function Wg(i){return function(t){return t.matches(i)}}var Zv=Array.prototype.find;function Jv(i){return function(){return Zv.call(this.children,i)}}function Qv(){return this.firstElementChild}function jv(i){return this.select(i==null?Qv:Jv(typeof i=="function"?i:Wg(i)))}var tx=Array.prototype.filter;function ex(){return Array.from(this.children)}function nx(i){return function(){return tx.call(this.children,i)}}function ix(i){return this.selectAll(i==null?ex:nx(typeof i=="function"?i:Wg(i)))}function rx(i){typeof i!="function"&&(i=Gg(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=[],c,l=0;l<o;++l)(c=s[l])&&i.call(c,c.__data__,l,s)&&a.push(c);return new li(n,this._parents)}function Xg(i){return new Array(i.length)}function sx(){return new li(this._enter||this._groups.map(Xg),this._parents)}function cc(i,t){this.ownerDocument=i.ownerDocument,this.namespaceURI=i.namespaceURI,this._next=null,this._parent=i,this.__data__=t}cc.prototype={constructor:cc,appendChild:function(i){return this._parent.insertBefore(i,this._next)},insertBefore:function(i,t){return this._parent.insertBefore(i,t)},querySelector:function(i){return this._parent.querySelector(i)},querySelectorAll:function(i){return this._parent.querySelectorAll(i)}};function ox(i){return function(){return i}}function ax(i,t,e,n,r,s){for(var o=0,a,c=t.length,l=s.length;o<l;++o)(a=t[o])?(a.__data__=s[o],n[o]=a):e[o]=new cc(i,s[o]);for(;o<c;++o)(a=t[o])&&(r[o]=a)}function lx(i,t,e,n,r,s,o){var a,c,l=new Map,u=t.length,d=s.length,h=new Array(u),f;for(a=0;a<u;++a)(c=t[a])&&(h[a]=f=o.call(c,c.__data__,a,t)+"",l.has(f)?r[a]=c:l.set(f,c));for(a=0;a<d;++a)f=o.call(i,s[a],a,s)+"",(c=l.get(f))?(n[a]=c,c.__data__=s[a],l.delete(f)):e[a]=new cc(i,s[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(h[a])===c&&(r[a]=c)}function cx(i){return i.__data__}function ux(i,t){if(!arguments.length)return Array.from(this,cx);var e=t?lx:ax,n=this._parents,r=this._groups;typeof i!="function"&&(i=ox(i));for(var s=r.length,o=new Array(s),a=new Array(s),c=new Array(s),l=0;l<s;++l){var u=n[l],d=r[l],h=d.length,f=hx(i.call(u,u&&u.__data__,l,n)),g=f.length,_=a[l]=new Array(g),p=o[l]=new Array(g),m=c[l]=new Array(h);e(u,d,_,p,m,f,t);for(var x=0,S=0,v,b;x<g;++x)if(v=_[x]){for(x>=S&&(S=x+1);!(b=p[S])&&++S<g;);v._next=b||null}}return o=new li(o,n),o._enter=a,o._exit=c,o}function hx(i){return typeof i=="object"&&"length"in i?i:Array.from(i)}function fx(){return new li(this._exit||this._groups.map(Xg),this._parents)}function dx(i,t,e){var n=this.enter(),r=this,s=this.exit();return typeof i=="function"?(n=i(n),n&&(n=n.selection())):n=n.append(i+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),n&&r?n.merge(r).order():r}function px(i){for(var t=i.selection?i.selection():i,e=this._groups,n=t._groups,r=e.length,s=n.length,o=Math.min(r,s),a=new Array(r),c=0;c<o;++c)for(var l=e[c],u=n[c],d=l.length,h=a[c]=new Array(d),f,g=0;g<d;++g)(f=l[g]||u[g])&&(h[g]=f);for(;c<r;++c)a[c]=e[c];return new li(a,this._parents)}function mx(){for(var i=this._groups,t=-1,e=i.length;++t<e;)for(var n=i[t],r=n.length-1,s=n[r],o;--r>=0;)(o=n[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function gx(i){i||(i=_x);function t(d,h){return d&&h?i(d.__data__,h.__data__):!d-!h}for(var e=this._groups,n=e.length,r=new Array(n),s=0;s<n;++s){for(var o=e[s],a=o.length,c=r[s]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new li(r,this._parents).order()}function _x(i,t){return i<t?-1:i>t?1:i>=t?0:NaN}function vx(){var i=arguments[0];return arguments[0]=this,i.apply(null,arguments),this}function xx(){return Array.from(this)}function yx(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length;r<s;++r){var o=n[r];if(o)return o}return null}function Sx(){let i=0;for(const t of this)++i;return i}function Mx(){return!this.node()}function Ex(i){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&i.call(a,a.__data__,s,r);return this}function bx(i){return function(){this.removeAttribute(i)}}function Tx(i){return function(){this.removeAttributeNS(i.space,i.local)}}function wx(i,t){return function(){this.setAttribute(i,t)}}function Ax(i,t){return function(){this.setAttributeNS(i.space,i.local,t)}}function Cx(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(i):this.setAttribute(i,e)}}function Rx(i,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(i.space,i.local):this.setAttributeNS(i.space,i.local,e)}}function Px(i,t){var e=Ec(i);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?Tx:bx:typeof t=="function"?e.local?Rx:Cx:e.local?Ax:wx)(e,t))}function Yg(i){return i.ownerDocument&&i.ownerDocument.defaultView||i.document&&i||i.defaultView}function Dx(i){return function(){this.style.removeProperty(i)}}function Lx(i,t,e){return function(){this.style.setProperty(i,t,e)}}function Ix(i,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(i):this.style.setProperty(i,n,e)}}function Nx(i,t,e){return arguments.length>1?this.each((t==null?Dx:typeof t=="function"?Ix:Lx)(i,t,e??"")):go(this.node(),i)}function go(i,t){return i.style.getPropertyValue(t)||Yg(i).getComputedStyle(i,null).getPropertyValue(t)}function Ux(i){return function(){delete this[i]}}function Fx(i,t){return function(){this[i]=t}}function Ox(i,t){return function(){var e=t.apply(this,arguments);e==null?delete this[i]:this[i]=e}}function Bx(i,t){return arguments.length>1?this.each((t==null?Ux:typeof t=="function"?Ox:Fx)(i,t)):this.node()[i]}function qg(i){return i.trim().split(/^|\s+/)}function Uf(i){return i.classList||new $g(i)}function $g(i){this._node=i,this._names=qg(i.getAttribute("class")||"")}$g.prototype={add:function(i){var t=this._names.indexOf(i);t<0&&(this._names.push(i),this._node.setAttribute("class",this._names.join(" ")))},remove:function(i){var t=this._names.indexOf(i);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(i){return this._names.indexOf(i)>=0}};function Kg(i,t){for(var e=Uf(i),n=-1,r=t.length;++n<r;)e.add(t[n])}function Zg(i,t){for(var e=Uf(i),n=-1,r=t.length;++n<r;)e.remove(t[n])}function zx(i){return function(){Kg(this,i)}}function kx(i){return function(){Zg(this,i)}}function Vx(i,t){return function(){(t.apply(this,arguments)?Kg:Zg)(this,i)}}function Hx(i,t){var e=qg(i+"");if(arguments.length<2){for(var n=Uf(this.node()),r=-1,s=e.length;++r<s;)if(!n.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?Vx:t?zx:kx)(e,t))}function Gx(){this.textContent=""}function Wx(i){return function(){this.textContent=i}}function Xx(i){return function(){var t=i.apply(this,arguments);this.textContent=t??""}}function Yx(i){return arguments.length?this.each(i==null?Gx:(typeof i=="function"?Xx:Wx)(i)):this.node().textContent}function qx(){this.innerHTML=""}function $x(i){return function(){this.innerHTML=i}}function Kx(i){return function(){var t=i.apply(this,arguments);this.innerHTML=t??""}}function Zx(i){return arguments.length?this.each(i==null?qx:(typeof i=="function"?Kx:$x)(i)):this.node().innerHTML}function Jx(){this.nextSibling&&this.parentNode.appendChild(this)}function Qx(){return this.each(Jx)}function jx(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ty(){return this.each(jx)}function ey(i){var t=typeof i=="function"?i:Vg(i);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function ny(){return null}function iy(i,t){var e=typeof i=="function"?i:Vg(i),n=t==null?ny:typeof t=="function"?t:Nf(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function ry(){var i=this.parentNode;i&&i.removeChild(this)}function sy(){return this.each(ry)}function oy(){var i=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function ay(){var i=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(i,this.nextSibling):i}function ly(i){return this.select(i?ay:oy)}function cy(i){return arguments.length?this.property("__data__",i):this.node().__data__}function uy(i){return function(t){i.call(this,t,this.__data__)}}function hy(i){return i.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function fy(i){return function(){var t=this.__on;if(t){for(var e=0,n=-1,r=t.length,s;e<r;++e)s=t[e],(!i.type||s.type===i.type)&&s.name===i.name?this.removeEventListener(s.type,s.listener,s.options):t[++n]=s;++n?t.length=n:delete this.__on}}}function dy(i,t,e){return function(){var n=this.__on,r,s=uy(t);if(n){for(var o=0,a=n.length;o<a;++o)if((r=n[o]).type===i.type&&r.name===i.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(i.type,s,e),r={type:i.type,name:i.name,value:t,listener:s,options:e},n?n.push(r):this.__on=[r]}}function py(i,t,e){var n=hy(i+""),r,s=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(r=0,u=a[c];r<s;++r)if((o=n[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?dy:fy,r=0;r<s;++r)this.each(a(n[r],t,e));return this}function Jg(i,t,e){var n=Yg(i),r=n.CustomEvent;typeof r=="function"?r=new r(t,e):(r=n.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),i.dispatchEvent(r)}function my(i,t){return function(){return Jg(this,i,t)}}function gy(i,t){return function(){return Jg(this,i,t.apply(this,arguments))}}function _y(i,t){return this.each((typeof t=="function"?gy:my)(i,t))}function*vy(){for(var i=this._groups,t=0,e=i.length;t<e;++t)for(var n=i[t],r=0,s=n.length,o;r<s;++r)(o=n[r])&&(yield o)}var Qg=[null];function li(i,t){this._groups=i,this._parents=t}function Na(){return new li([[document.documentElement]],Qg)}function xy(){return this}li.prototype=Na.prototype={constructor:li,select:Xv,selectAll:Kv,selectChild:jv,selectChildren:ix,filter:rx,data:ux,enter:sx,exit:fx,join:dx,merge:px,selection:xy,order:mx,sort:gx,call:vx,nodes:xx,node:yx,size:Sx,empty:Mx,each:Ex,attr:Px,style:Nx,property:Bx,classed:Hx,text:Yx,html:Zx,raise:Qx,lower:ty,append:ey,insert:iy,remove:sy,clone:ly,datum:cy,on:py,dispatch:_y,[Symbol.iterator]:vy};function bi(i){return typeof i=="string"?new li([[document.querySelector(i)]],[document.documentElement]):new li([[i]],Qg)}function yy(i){let t;for(;t=i.sourceEvent;)i=t;return i}function rr(i,t){if(i=yy(i),t===void 0&&(t=i.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var n=e.createSVGPoint();return n.x=i.clientX,n.y=i.clientY,n=n.matrixTransform(t.getScreenCTM().inverse()),[n.x,n.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[i.clientX-r.left-t.clientLeft,i.clientY-r.top-t.clientTop]}}return[i.pageX,i.pageY]}const Sy={passive:!1},Ea={capture:!0,passive:!1};function Yc(i){i.stopImmediatePropagation()}function ro(i){i.preventDefault(),i.stopImmediatePropagation()}function jg(i){var t=i.document.documentElement,e=bi(i).on("dragstart.drag",ro,Ea);"onselectstart"in t?e.on("selectstart.drag",ro,Ea):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function t0(i,t){var e=i.document.documentElement,n=bi(i).on("dragstart.drag",null);t&&(n.on("click.drag",ro,Ea),setTimeout(function(){n.on("click.drag",null)},0)),"onselectstart"in e?n.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}const tl=i=>()=>i;function oh(i,{sourceEvent:t,subject:e,target:n,identifier:r,active:s,x:o,y:a,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:i,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}oh.prototype.on=function(){var i=this._.on.apply(this._,arguments);return i===this._?this:i};function My(i){return!i.ctrlKey&&!i.button}function Ey(){return this.parentNode}function by(i,t){return t??{x:i.x,y:i.y}}function Ty(){return navigator.maxTouchPoints||"ontouchstart"in this}function wy(){var i=My,t=Ey,e=by,n=Ty,r={},s=Ia("start","drag","end"),o=0,a,c,l,u,d=0;function h(v){v.on("mousedown.drag",f).filter(n).on("touchstart.drag",p).on("touchmove.drag",m,Sy).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(v,b){if(!(u||!i.call(this,v,b))){var T=S(this,t.call(this,v,b),v,b,"mouse");T&&(bi(v.view).on("mousemove.drag",g,Ea).on("mouseup.drag",_,Ea),jg(v.view),Yc(v),l=!1,a=v.clientX,c=v.clientY,T("start",v))}}function g(v){if(ro(v),!l){var b=v.clientX-a,T=v.clientY-c;l=b*b+T*T>d}r.mouse("drag",v)}function _(v){bi(v.view).on("mousemove.drag mouseup.drag",null),t0(v.view,l),ro(v),r.mouse("end",v)}function p(v,b){if(i.call(this,v,b)){var T=v.changedTouches,w=t.call(this,v,b),y=T.length,E,U;for(E=0;E<y;++E)(U=S(this,w,v,b,T[E].identifier,T[E]))&&(Yc(v),U("start",v,T[E]))}}function m(v){var b=v.changedTouches,T=b.length,w,y;for(w=0;w<T;++w)(y=r[b[w].identifier])&&(ro(v),y("drag",v,b[w]))}function x(v){var b=v.changedTouches,T=b.length,w,y;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),w=0;w<T;++w)(y=r[b[w].identifier])&&(Yc(v),y("end",v,b[w]))}function S(v,b,T,w,y,E){var U=s.copy(),P=rr(E||T,b),F,k,R;if((R=e.call(v,new oh("beforestart",{sourceEvent:T,target:h,identifier:y,active:o,x:P[0],y:P[1],dx:0,dy:0,dispatch:U}),w))!=null)return F=R.x-P[0]||0,k=R.y-P[1]||0,function N(L,I,q){var $=P,D;switch(L){case"start":r[y]=N,D=o++;break;case"end":delete r[y],--o;case"drag":P=rr(q||I,b),D=o;break}U.call(L,v,new oh(L,{sourceEvent:I,subject:R,target:h,identifier:y,active:D,x:P[0]+F,y:P[1]+k,dx:P[0]-$[0],dy:P[1]-$[1],dispatch:U}),w)}}return h.filter=function(v){return arguments.length?(i=typeof v=="function"?v:tl(!!v),h):i},h.container=function(v){return arguments.length?(t=typeof v=="function"?v:tl(v),h):t},h.subject=function(v){return arguments.length?(e=typeof v=="function"?v:tl(v),h):e},h.touchable=function(v){return arguments.length?(n=typeof v=="function"?v:tl(!!v),h):n},h.on=function(){var v=s.on.apply(s,arguments);return v===s?h:v},h.clickDistance=function(v){return arguments.length?(d=(v=+v)*v,h):Math.sqrt(d)},h}function Ff(i,t,e){i.prototype=t.prototype=e,e.constructor=i}function e0(i,t){var e=Object.create(i.prototype);for(var n in t)e[n]=t[n];return e}function Ua(){}var ba=.7,uc=1/ba,so="\\s*([+-]?\\d+)\\s*",Ta="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Hi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ay=/^#([0-9a-f]{3,8})$/,Cy=new RegExp(`^rgb\\(${so},${so},${so}\\)$`),Ry=new RegExp(`^rgb\\(${Hi},${Hi},${Hi}\\)$`),Py=new RegExp(`^rgba\\(${so},${so},${so},${Ta}\\)$`),Dy=new RegExp(`^rgba\\(${Hi},${Hi},${Hi},${Ta}\\)$`),Ly=new RegExp(`^hsl\\(${Ta},${Hi},${Hi}\\)$`),Iy=new RegExp(`^hsla\\(${Ta},${Hi},${Hi},${Ta}\\)$`),qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ff(Ua,wa,{copy(i){return Object.assign(new this.constructor,this,i)},displayable(){return this.rgb().displayable()},hex:$d,formatHex:$d,formatHex8:Ny,formatHsl:Uy,formatRgb:Kd,toString:Kd});function $d(){return this.rgb().formatHex()}function Ny(){return this.rgb().formatHex8()}function Uy(){return n0(this).formatHsl()}function Kd(){return this.rgb().formatRgb()}function wa(i){var t,e;return i=(i+"").trim().toLowerCase(),(t=Ay.exec(i))?(e=t[1].length,t=parseInt(t[1],16),e===6?Zd(t):e===3?new Fn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?el(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?el(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Cy.exec(i))?new Fn(t[1],t[2],t[3],1):(t=Ry.exec(i))?new Fn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Py.exec(i))?el(t[1],t[2],t[3],t[4]):(t=Dy.exec(i))?el(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ly.exec(i))?jd(t[1],t[2]/100,t[3]/100,1):(t=Iy.exec(i))?jd(t[1],t[2]/100,t[3]/100,t[4]):qd.hasOwnProperty(i)?Zd(qd[i]):i==="transparent"?new Fn(NaN,NaN,NaN,0):null}function Zd(i){return new Fn(i>>16&255,i>>8&255,i&255,1)}function el(i,t,e,n){return n<=0&&(i=t=e=NaN),new Fn(i,t,e,n)}function Fy(i){return i instanceof Ua||(i=wa(i)),i?(i=i.rgb(),new Fn(i.r,i.g,i.b,i.opacity)):new Fn}function ah(i,t,e,n){return arguments.length===1?Fy(i):new Fn(i,t,e,n??1)}function Fn(i,t,e,n){this.r=+i,this.g=+t,this.b=+e,this.opacity=+n}Ff(Fn,ah,e0(Ua,{brighter(i){return i=i==null?uc:Math.pow(uc,i),new Fn(this.r*i,this.g*i,this.b*i,this.opacity)},darker(i){return i=i==null?ba:Math.pow(ba,i),new Fn(this.r*i,this.g*i,this.b*i,this.opacity)},rgb(){return this},clamp(){return new Fn(ys(this.r),ys(this.g),ys(this.b),hc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jd,formatHex:Jd,formatHex8:Oy,formatRgb:Qd,toString:Qd}));function Jd(){return`#${us(this.r)}${us(this.g)}${us(this.b)}`}function Oy(){return`#${us(this.r)}${us(this.g)}${us(this.b)}${us((isNaN(this.opacity)?1:this.opacity)*255)}`}function Qd(){const i=hc(this.opacity);return`${i===1?"rgb(":"rgba("}${ys(this.r)}, ${ys(this.g)}, ${ys(this.b)}${i===1?")":`, ${i})`}`}function hc(i){return isNaN(i)?1:Math.max(0,Math.min(1,i))}function ys(i){return Math.max(0,Math.min(255,Math.round(i)||0))}function us(i){return i=ys(i),(i<16?"0":"")+i.toString(16)}function jd(i,t,e,n){return n<=0?i=t=e=NaN:e<=0||e>=1?i=t=NaN:t<=0&&(i=NaN),new Ti(i,t,e,n)}function n0(i){if(i instanceof Ti)return new Ti(i.h,i.s,i.l,i.opacity);if(i instanceof Ua||(i=wa(i)),!i)return new Ti;if(i instanceof Ti)return i;i=i.rgb();var t=i.r/255,e=i.g/255,n=i.b/255,r=Math.min(t,e,n),s=Math.max(t,e,n),o=NaN,a=s-r,c=(s+r)/2;return a?(t===s?o=(e-n)/a+(e<n)*6:e===s?o=(n-t)/a+2:o=(t-e)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new Ti(o,a,c,i.opacity)}function By(i,t,e,n){return arguments.length===1?n0(i):new Ti(i,t,e,n??1)}function Ti(i,t,e,n){this.h=+i,this.s=+t,this.l=+e,this.opacity=+n}Ff(Ti,By,e0(Ua,{brighter(i){return i=i==null?uc:Math.pow(uc,i),new Ti(this.h,this.s,this.l*i,this.opacity)},darker(i){return i=i==null?ba:Math.pow(ba,i),new Ti(this.h,this.s,this.l*i,this.opacity)},rgb(){var i=this.h%360+(this.h<0)*360,t=isNaN(i)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,r=2*e-n;return new Fn(qc(i>=240?i-240:i+120,r,n),qc(i,r,n),qc(i<120?i+240:i-120,r,n),this.opacity)},clamp(){return new Ti(tp(this.h),nl(this.s),nl(this.l),hc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const i=hc(this.opacity);return`${i===1?"hsl(":"hsla("}${tp(this.h)}, ${nl(this.s)*100}%, ${nl(this.l)*100}%${i===1?")":`, ${i})`}`}}));function tp(i){return i=(i||0)%360,i<0?i+360:i}function nl(i){return Math.max(0,Math.min(1,i||0))}function qc(i,t,e){return(i<60?t+(e-t)*i/60:i<180?e:i<240?t+(e-t)*(240-i)/60:t)*255}const i0=i=>()=>i;function zy(i,t){return function(e){return i+e*t}}function ky(i,t,e){return i=Math.pow(i,e),t=Math.pow(t,e)-i,e=1/e,function(n){return Math.pow(i+n*t,e)}}function Vy(i){return(i=+i)==1?r0:function(t,e){return e-t?ky(t,e,i):i0(isNaN(t)?e:t)}}function r0(i,t){var e=t-i;return e?zy(i,e):i0(isNaN(i)?t:i)}const ep=function i(t){var e=Vy(t);function n(r,s){var o=e((r=ah(r)).r,(s=ah(s)).r),a=e(r.g,s.g),c=e(r.b,s.b),l=r0(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=c(u),r.opacity=l(u),r+""}}return n.gamma=i,n}(1);function Cr(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}var lh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$c=new RegExp(lh.source,"g");function Hy(i){return function(){return i}}function Gy(i){return function(t){return i(t)+""}}function Wy(i,t){var e=lh.lastIndex=$c.lastIndex=0,n,r,s,o=-1,a=[],c=[];for(i=i+"",t=t+"";(n=lh.exec(i))&&(r=$c.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:Cr(n,r)})),e=$c.lastIndex;return e<t.length&&(s=t.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?Gy(c[0].x):Hy(t):(t=c.length,function(l){for(var u=0,d;u<t;++u)a[(d=c[u]).i]=d.x(l);return a.join("")})}var np=180/Math.PI,ch={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function s0(i,t,e,n,r,s){var o,a,c;return(o=Math.sqrt(i*i+t*t))&&(i/=o,t/=o),(c=i*e+t*n)&&(e-=i*c,n-=t*c),(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a,c/=a),i*n<t*e&&(i=-i,t=-t,c=-c,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,i)*np,skewX:Math.atan(c)*np,scaleX:o,scaleY:a}}var il;function Xy(i){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(i+"");return t.isIdentity?ch:s0(t.a,t.b,t.c,t.d,t.e,t.f)}function Yy(i){return i==null||(il||(il=document.createElementNS("http://www.w3.org/2000/svg","g")),il.setAttribute("transform",i),!(i=il.transform.baseVal.consolidate()))?ch:(i=i.matrix,s0(i.a,i.b,i.c,i.d,i.e,i.f))}function o0(i,t,e,n){function r(l){return l.length?l.pop()+" ":""}function s(l,u,d,h,f,g){if(l!==d||u!==h){var _=f.push("translate(",null,t,null,e);g.push({i:_-4,x:Cr(l,d)},{i:_-2,x:Cr(u,h)})}else(d||h)&&f.push("translate("+d+t+h+e)}function o(l,u,d,h){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),h.push({i:d.push(r(d)+"rotate(",null,n)-2,x:Cr(l,u)})):u&&d.push(r(d)+"rotate("+u+n)}function a(l,u,d,h){l!==u?h.push({i:d.push(r(d)+"skewX(",null,n)-2,x:Cr(l,u)}):u&&d.push(r(d)+"skewX("+u+n)}function c(l,u,d,h,f,g){if(l!==d||u!==h){var _=f.push(r(f)+"scale(",null,",",null,")");g.push({i:_-4,x:Cr(l,d)},{i:_-2,x:Cr(u,h)})}else(d!==1||h!==1)&&f.push(r(f)+"scale("+d+","+h+")")}return function(l,u){var d=[],h=[];return l=i(l),u=i(u),s(l.translateX,l.translateY,u.translateX,u.translateY,d,h),o(l.rotate,u.rotate,d,h),a(l.skewX,u.skewX,d,h),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,d,h),l=u=null,function(f){for(var g=-1,_=h.length,p;++g<_;)d[(p=h[g]).i]=p.x(f);return d.join("")}}}var qy=o0(Xy,"px, ","px)","deg)"),$y=o0(Yy,", ",")",")"),Ky=1e-12;function ip(i){return((i=Math.exp(i))+1/i)/2}function Zy(i){return((i=Math.exp(i))-1/i)/2}function Jy(i){return((i=Math.exp(2*i))-1)/(i+1)}const Qy=function i(t,e,n){function r(s,o){var a=s[0],c=s[1],l=s[2],u=o[0],d=o[1],h=o[2],f=u-a,g=d-c,_=f*f+g*g,p,m;if(_<Ky)m=Math.log(h/l)/t,p=function(w){return[a+w*f,c+w*g,l*Math.exp(t*w*m)]};else{var x=Math.sqrt(_),S=(h*h-l*l+n*_)/(2*l*e*x),v=(h*h-l*l-n*_)/(2*h*e*x),b=Math.log(Math.sqrt(S*S+1)-S),T=Math.log(Math.sqrt(v*v+1)-v);m=(T-b)/t,p=function(w){var y=w*m,E=ip(b),U=l/(e*x)*(E*Jy(t*y+b)-Zy(b));return[a+U*f,c+U*g,l*E/ip(t*y+b)]}}return p.duration=m*1e3*t/Math.SQRT2,p}return r.rho=function(s){var o=Math.max(.001,+s),a=o*o,c=a*a;return i(o,a,c)},r}(Math.SQRT2,2,4);var _o=0,Ko=0,Do=0,a0=1e3,fc,Zo,dc=0,bs=0,bc=0,Aa=typeof performance=="object"&&performance.now?performance:Date,l0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function Of(){return bs||(l0(jy),bs=Aa.now()+bc)}function jy(){bs=0}function pc(){this._call=this._time=this._next=null}pc.prototype=Bf.prototype={constructor:pc,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?Of():+e)+(t==null?0:+t),!this._next&&Zo!==this&&(Zo?Zo._next=this:fc=this,Zo=this),this._call=i,this._time=e,uh()},stop:function(){this._call&&(this._call=null,this._time=1/0,uh())}};function Bf(i,t,e){var n=new pc;return n.restart(i,t,e),n}function tS(){Of(),++_o;for(var i=fc,t;i;)(t=bs-i._time)>=0&&i._call.call(void 0,t),i=i._next;--_o}function rp(){bs=(dc=Aa.now())+bc,_o=Ko=0;try{tS()}finally{_o=0,nS(),bs=0}}function eS(){var i=Aa.now(),t=i-dc;t>a0&&(bc-=t,dc=i)}function nS(){for(var i,t=fc,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:fc=e);Zo=i,uh(n)}function uh(i){if(!_o){Ko&&(Ko=clearTimeout(Ko));var t=i-bs;t>24?(i<1/0&&(Ko=setTimeout(rp,i-Aa.now()-bc)),Do&&(Do=clearInterval(Do))):(Do||(dc=Aa.now(),Do=setInterval(eS,a0)),_o=1,l0(rp))}}function sp(i,t,e){var n=new pc;return t=t==null?0:+t,n.restart(r=>{n.stop(),i(r+t)},t,e),n}var iS=Ia("start","end","cancel","interrupt"),rS=[],c0=0,op=1,hh=2,Hl=3,ap=4,fh=5,Gl=6;function Tc(i,t,e,n,r,s){var o=i.__transition;if(!o)i.__transition={};else if(e in o)return;sS(i,e,{name:t,index:n,group:r,on:iS,tween:rS,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:c0})}function zf(i,t){var e=Ri(i,t);if(e.state>c0)throw new Error("too late; already scheduled");return e}function Ki(i,t){var e=Ri(i,t);if(e.state>Hl)throw new Error("too late; already running");return e}function Ri(i,t){var e=i.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function sS(i,t,e){var n=i.__transition,r;n[t]=e,e.timer=Bf(s,0,e.time);function s(l){e.state=op,e.timer.restart(o,e.delay,e.time),e.delay<=l&&o(l-e.delay)}function o(l){var u,d,h,f;if(e.state!==op)return c();for(u in n)if(f=n[u],f.name===e.name){if(f.state===Hl)return sp(o);f.state===ap?(f.state=Gl,f.timer.stop(),f.on.call("interrupt",i,i.__data__,f.index,f.group),delete n[u]):+u<t&&(f.state=Gl,f.timer.stop(),f.on.call("cancel",i,i.__data__,f.index,f.group),delete n[u])}if(sp(function(){e.state===Hl&&(e.state=ap,e.timer.restart(a,e.delay,e.time),a(l))}),e.state=hh,e.on.call("start",i,i.__data__,e.index,e.group),e.state===hh){for(e.state=Hl,r=new Array(h=e.tween.length),u=0,d=-1;u<h;++u)(f=e.tween[u].value.call(i,i.__data__,e.index,e.group))&&(r[++d]=f);r.length=d+1}}function a(l){for(var u=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=fh,1),d=-1,h=r.length;++d<h;)r[d].call(i,u);e.state===fh&&(e.on.call("end",i,i.__data__,e.index,e.group),c())}function c(){e.state=Gl,e.timer.stop(),delete n[t];for(var l in n)return;delete i.__transition}}function Wl(i,t){var e=i.__transition,n,r,s=!0,o;if(e){t=t==null?null:t+"";for(o in e){if((n=e[o]).name!==t){s=!1;continue}r=n.state>hh&&n.state<fh,n.state=Gl,n.timer.stop(),n.on.call(r?"interrupt":"cancel",i,i.__data__,n.index,n.group),delete e[o]}s&&delete i.__transition}}function oS(i){return this.each(function(){Wl(this,i)})}function aS(i,t){var e,n;return function(){var r=Ki(this,i),s=r.tween;if(s!==e){n=e=s;for(var o=0,a=n.length;o<a;++o)if(n[o].name===t){n=n.slice(),n.splice(o,1);break}}r.tween=n}}function lS(i,t,e){var n,r;if(typeof e!="function")throw new Error;return function(){var s=Ki(this,i),o=s.tween;if(o!==n){r=(n=o).slice();for(var a={name:t,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=a;break}c===l&&r.push(a)}s.tween=r}}function cS(i,t){var e=this._id;if(i+="",arguments.length<2){for(var n=Ri(this.node(),e).tween,r=0,s=n.length,o;r<s;++r)if((o=n[r]).name===i)return o.value;return null}return this.each((t==null?aS:lS)(e,i,t))}function kf(i,t,e){var n=i._id;return i.each(function(){var r=Ki(this,n);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Ri(r,n).value[t]}}function u0(i,t){var e;return(typeof t=="number"?Cr:t instanceof wa?ep:(e=wa(t))?(t=e,ep):Wy)(i,t)}function uS(i){return function(){this.removeAttribute(i)}}function hS(i){return function(){this.removeAttributeNS(i.space,i.local)}}function fS(i,t,e){var n,r=e+"",s;return function(){var o=this.getAttribute(i);return o===r?null:o===n?s:s=t(n=o,e)}}function dS(i,t,e){var n,r=e+"",s;return function(){var o=this.getAttributeNS(i.space,i.local);return o===r?null:o===n?s:s=t(n=o,e)}}function pS(i,t,e){var n,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttribute(i):(o=this.getAttribute(i),c=a+"",o===c?null:o===n&&c===r?s:(r=c,s=t(n=o,a)))}}function mS(i,t,e){var n,r,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttributeNS(i.space,i.local):(o=this.getAttributeNS(i.space,i.local),c=a+"",o===c?null:o===n&&c===r?s:(r=c,s=t(n=o,a)))}}function gS(i,t){var e=Ec(i),n=e==="transform"?$y:u0;return this.attrTween(i,typeof t=="function"?(e.local?mS:pS)(e,n,kf(this,"attr."+i,t)):t==null?(e.local?hS:uS)(e):(e.local?dS:fS)(e,n,t))}function _S(i,t){return function(e){this.setAttribute(i,t.call(this,e))}}function vS(i,t){return function(e){this.setAttributeNS(i.space,i.local,t.call(this,e))}}function xS(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&vS(i,s)),e}return r._value=t,r}function yS(i,t){var e,n;function r(){var s=t.apply(this,arguments);return s!==n&&(e=(n=s)&&_S(i,s)),e}return r._value=t,r}function SS(i,t){var e="attr."+i;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=Ec(i);return this.tween(e,(n.local?xS:yS)(n,t))}function MS(i,t){return function(){zf(this,i).delay=+t.apply(this,arguments)}}function ES(i,t){return t=+t,function(){zf(this,i).delay=t}}function bS(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?MS:ES)(t,i)):Ri(this.node(),t).delay}function TS(i,t){return function(){Ki(this,i).duration=+t.apply(this,arguments)}}function wS(i,t){return t=+t,function(){Ki(this,i).duration=t}}function AS(i){var t=this._id;return arguments.length?this.each((typeof i=="function"?TS:wS)(t,i)):Ri(this.node(),t).duration}function CS(i,t){if(typeof t!="function")throw new Error;return function(){Ki(this,i).ease=t}}function RS(i){var t=this._id;return arguments.length?this.each(CS(t,i)):Ri(this.node(),t).ease}function PS(i,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ki(this,i).ease=e}}function DS(i){if(typeof i!="function")throw new Error;return this.each(PS(this._id,i))}function LS(i){typeof i!="function"&&(i=Gg(i));for(var t=this._groups,e=t.length,n=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=n[r]=[],c,l=0;l<o;++l)(c=s[l])&&i.call(c,c.__data__,l,s)&&a.push(c);return new mr(n,this._parents,this._name,this._id)}function IS(i){if(i._id!==this._id)throw new Error;for(var t=this._groups,e=i._groups,n=t.length,r=e.length,s=Math.min(n,r),o=new Array(n),a=0;a<s;++a)for(var c=t[a],l=e[a],u=c.length,d=o[a]=new Array(u),h,f=0;f<u;++f)(h=c[f]||l[f])&&(d[f]=h);for(;a<n;++a)o[a]=t[a];return new mr(o,this._parents,this._name,this._id)}function NS(i){return(i+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function US(i,t,e){var n,r,s=NS(t)?zf:Ki;return function(){var o=s(this,i),a=o.on;a!==n&&(r=(n=a).copy()).on(t,e),o.on=r}}function FS(i,t){var e=this._id;return arguments.length<2?Ri(this.node(),e).on.on(i):this.each(US(e,i,t))}function OS(i){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==i)return;t&&t.removeChild(this)}}function BS(){return this.on("end.remove",OS(this._id))}function zS(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Nf(i));for(var n=this._groups,r=n.length,s=new Array(r),o=0;o<r;++o)for(var a=n[o],c=a.length,l=s[o]=new Array(c),u,d,h=0;h<c;++h)(u=a[h])&&(d=i.call(u,u.__data__,h,a))&&("__data__"in u&&(d.__data__=u.__data__),l[h]=d,Tc(l[h],t,e,h,l,Ri(u,e)));return new mr(s,this._parents,t,e)}function kS(i){var t=this._name,e=this._id;typeof i!="function"&&(i=Hg(i));for(var n=this._groups,r=n.length,s=[],o=[],a=0;a<r;++a)for(var c=n[a],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var h=i.call(u,u.__data__,d,c),f,g=Ri(u,e),_=0,p=h.length;_<p;++_)(f=h[_])&&Tc(f,t,e,_,h,g);s.push(h),o.push(u)}return new mr(s,o,t,e)}var VS=Na.prototype.constructor;function HS(){return new VS(this._groups,this._parents)}function GS(i,t){var e,n,r;return function(){var s=go(this,i),o=(this.style.removeProperty(i),go(this,i));return s===o?null:s===e&&o===n?r:r=t(e=s,n=o)}}function h0(i){return function(){this.style.removeProperty(i)}}function WS(i,t,e){var n,r=e+"",s;return function(){var o=go(this,i);return o===r?null:o===n?s:s=t(n=o,e)}}function XS(i,t,e){var n,r,s;return function(){var o=go(this,i),a=e(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(i),go(this,i))),o===c?null:o===n&&c===r?s:(r=c,s=t(n=o,a))}}function YS(i,t){var e,n,r,s="style."+t,o="end."+s,a;return function(){var c=Ki(this,i),l=c.on,u=c.value[s]==null?a||(a=h0(t)):void 0;(l!==e||r!==u)&&(n=(e=l).copy()).on(o,r=u),c.on=n}}function qS(i,t,e){var n=(i+="")=="transform"?qy:u0;return t==null?this.styleTween(i,GS(i,n)).on("end.style."+i,h0(i)):typeof t=="function"?this.styleTween(i,XS(i,n,kf(this,"style."+i,t))).each(YS(this._id,i)):this.styleTween(i,WS(i,n,t),e).on("end.style."+i,null)}function $S(i,t,e){return function(n){this.style.setProperty(i,t.call(this,n),e)}}function KS(i,t,e){var n,r;function s(){var o=t.apply(this,arguments);return o!==r&&(n=(r=o)&&$S(i,o,e)),n}return s._value=t,s}function ZS(i,t,e){var n="style."+(i+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,KS(i,t,e??""))}function JS(i){return function(){this.textContent=i}}function QS(i){return function(){var t=i(this);this.textContent=t??""}}function jS(i){return this.tween("text",typeof i=="function"?QS(kf(this,"text",i)):JS(i==null?"":i+""))}function tM(i){return function(t){this.textContent=i.call(this,t)}}function eM(i){var t,e;function n(){var r=i.apply(this,arguments);return r!==e&&(t=(e=r)&&tM(r)),t}return n._value=i,n}function nM(i){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(i==null)return this.tween(t,null);if(typeof i!="function")throw new Error;return this.tween(t,eM(i))}function iM(){for(var i=this._name,t=this._id,e=f0(),n=this._groups,r=n.length,s=0;s<r;++s)for(var o=n[s],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=Ri(c,t);Tc(c,i,e,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new mr(n,this._parents,i,e)}function rM(){var i,t,e=this,n=e._id,r=e.size();return new Promise(function(s,o){var a={value:o},c={value:function(){--r===0&&s()}};e.each(function(){var l=Ki(this,n),u=l.on;u!==i&&(t=(i=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),r===0&&s()})}var sM=0;function mr(i,t,e,n){this._groups=i,this._parents=t,this._name=e,this._id=n}function f0(){return++sM}var Ji=Na.prototype;mr.prototype={constructor:mr,select:zS,selectAll:kS,selectChild:Ji.selectChild,selectChildren:Ji.selectChildren,filter:LS,merge:IS,selection:HS,transition:iM,call:Ji.call,nodes:Ji.nodes,node:Ji.node,size:Ji.size,empty:Ji.empty,each:Ji.each,on:FS,attr:gS,attrTween:SS,style:qS,styleTween:ZS,text:jS,textTween:nM,remove:BS,tween:cS,delay:bS,duration:AS,ease:RS,easeVarying:DS,end:rM,[Symbol.iterator]:Ji[Symbol.iterator]};const oM=i=>+i;function aM(i){return((i*=2)<=1?i*i*i:(i-=2)*i*i+2)/2}var lM={time:null,delay:0,duration:250,ease:aM};function cM(i,t){for(var e;!(e=i.__transition)||!(e=e[t]);)if(!(i=i.parentNode))throw new Error(`transition ${t} not found`);return e}function uM(i){var t,e;i instanceof mr?(t=i._id,i=i._name):(t=f0(),(e=lM).time=Of(),i=i==null?null:i+"");for(var n=this._groups,r=n.length,s=0;s<r;++s)for(var o=n[s],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Tc(c,i,t,l,o,e||cM(c,t));return new mr(n,this._parents,i,t)}Na.prototype.interrupt=oS;Na.prototype.transition=uM;function hM(i,t){var e,n=1;i==null&&(i=0),t==null&&(t=0);function r(){var s,o=e.length,a,c=0,l=0;for(s=0;s<o;++s)a=e[s],c+=a.x,l+=a.y;for(c=(c/o-i)*n,l=(l/o-t)*n,s=0;s<o;++s)a=e[s],a.x-=c,a.y-=l}return r.initialize=function(s){e=s},r.x=function(s){return arguments.length?(i=+s,r):i},r.y=function(s){return arguments.length?(t=+s,r):t},r.strength=function(s){return arguments.length?(n=+s,r):n},r}function fM(i){const t=+this._x.call(null,i),e=+this._y.call(null,i);return d0(this.cover(t,e),t,e,i)}function d0(i,t,e,n){if(isNaN(t)||isNaN(e))return i;var r,s=i._root,o={data:n},a=i._x0,c=i._y0,l=i._x1,u=i._y1,d,h,f,g,_,p,m,x;if(!s)return i._root=o,i;for(;s.length;)if((_=t>=(d=(a+l)/2))?a=d:l=d,(p=e>=(h=(c+u)/2))?c=h:u=h,r=s,!(s=s[m=p<<1|_]))return r[m]=o,i;if(f=+i._x.call(null,s.data),g=+i._y.call(null,s.data),t===f&&e===g)return o.next=s,r?r[m]=o:i._root=o,i;do r=r?r[m]=new Array(4):i._root=new Array(4),(_=t>=(d=(a+l)/2))?a=d:l=d,(p=e>=(h=(c+u)/2))?c=h:u=h;while((m=p<<1|_)===(x=(g>=h)<<1|f>=d));return r[x]=s,r[m]=o,i}function dM(i){var t,e,n=i.length,r,s,o=new Array(n),a=new Array(n),c=1/0,l=1/0,u=-1/0,d=-1/0;for(e=0;e<n;++e)isNaN(r=+this._x.call(null,t=i[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<c&&(c=r),r>u&&(u=r),s<l&&(l=s),s>d&&(d=s));if(c>u||l>d)return this;for(this.cover(c,l).cover(u,d),e=0;e<n;++e)d0(this,o[e],a[e],i[e]);return this}function pM(i,t){if(isNaN(i=+i)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(i))+1,s=(n=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,c,l;e>i||i>=r||n>t||t>=s;)switch(l=(t<n)<<1|i<e,c=new Array(4),c[l]=a,a=c,o*=2,l){case 0:r=e+o,s=n+o;break;case 1:e=r-o,s=n+o;break;case 2:r=e+o,n=s-o;break;case 3:e=r-o,n=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=n,this._x1=r,this._y1=s,this}function mM(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function gM(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Pn(i,t,e,n,r){this.node=i,this.x0=t,this.y0=e,this.x1=n,this.y1=r}function _M(i,t,e){var n,r=this._x0,s=this._y0,o,a,c,l,u=this._x1,d=this._y1,h=[],f=this._root,g,_;for(f&&h.push(new Pn(f,r,s,u,d)),e==null?e=1/0:(r=i-e,s=t-e,u=i+e,d=t+e,e*=e);g=h.pop();)if(!(!(f=g.node)||(o=g.x0)>u||(a=g.y0)>d||(c=g.x1)<r||(l=g.y1)<s))if(f.length){var p=(o+c)/2,m=(a+l)/2;h.push(new Pn(f[3],p,m,c,l),new Pn(f[2],o,m,p,l),new Pn(f[1],p,a,c,m),new Pn(f[0],o,a,p,m)),(_=(t>=m)<<1|i>=p)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-_],h[h.length-1-_]=g)}else{var x=i-+this._x.call(null,f.data),S=t-+this._y.call(null,f.data),v=x*x+S*S;if(v<e){var b=Math.sqrt(e=v);r=i-b,s=t-b,u=i+b,d=t+b,n=f.data}}return n}function vM(i){if(isNaN(u=+this._x.call(null,i))||isNaN(d=+this._y.call(null,i)))return this;var t,e=this._root,n,r,s,o=this._x0,a=this._y0,c=this._x1,l=this._y1,u,d,h,f,g,_,p,m;if(!e)return this;if(e.length)for(;;){if((g=u>=(h=(o+c)/2))?o=h:c=h,(_=d>=(f=(a+l)/2))?a=f:l=f,t=e,!(e=e[p=_<<1|g]))return this;if(!e.length)break;(t[p+1&3]||t[p+2&3]||t[p+3&3])&&(n=t,m=p)}for(;e.data!==i;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[p]=s:delete t[p],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[m]=e:this._root=e),this):(this._root=s,this)}function xM(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function yM(){return this._root}function SM(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function MM(i){var t=[],e,n=this._root,r,s,o,a,c;for(n&&t.push(new Pn(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!i(n=e.node,s=e.x0,o=e.y0,a=e.x1,c=e.y1)&&n.length){var l=(s+a)/2,u=(o+c)/2;(r=n[3])&&t.push(new Pn(r,l,u,a,c)),(r=n[2])&&t.push(new Pn(r,s,u,l,c)),(r=n[1])&&t.push(new Pn(r,l,o,a,u)),(r=n[0])&&t.push(new Pn(r,s,o,l,u))}return this}function EM(i){var t=[],e=[],n;for(this._root&&t.push(new Pn(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var r=n.node;if(r.length){var s,o=n.x0,a=n.y0,c=n.x1,l=n.y1,u=(o+c)/2,d=(a+l)/2;(s=r[0])&&t.push(new Pn(s,o,a,u,d)),(s=r[1])&&t.push(new Pn(s,u,a,c,d)),(s=r[2])&&t.push(new Pn(s,o,d,u,l)),(s=r[3])&&t.push(new Pn(s,u,d,c,l))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function bM(i){return i[0]}function TM(i){return arguments.length?(this._x=i,this):this._x}function wM(i){return i[1]}function AM(i){return arguments.length?(this._y=i,this):this._y}function Vf(i,t,e){var n=new Hf(t??bM,e??wM,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function Hf(i,t,e,n,r,s){this._x=i,this._y=t,this._x0=e,this._y0=n,this._x1=r,this._y1=s,this._root=void 0}function lp(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var In=Vf.prototype=Hf.prototype;In.copy=function(){var i=new Hf(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=lp(t),i;for(e=[{source:t,target:i._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(n=t.source[r])&&(n.length?e.push({source:n,target:t.target[r]=new Array(4)}):t.target[r]=lp(n));return i};In.add=fM;In.addAll=dM;In.cover=pM;In.data=mM;In.extent=gM;In.find=_M;In.remove=vM;In.removeAll=xM;In.root=yM;In.size=SM;In.visit=MM;In.visitAfter=EM;In.x=TM;In.y=AM;function Ai(i){return function(){return i}}function Ur(i){return(i()-.5)*1e-6}function CM(i){return i.x+i.vx}function RM(i){return i.y+i.vy}function PM(i){var t,e,n,r=1,s=1;typeof i!="function"&&(i=Ai(i==null?1:+i));function o(){for(var l,u=t.length,d,h,f,g,_,p,m=0;m<s;++m)for(d=Vf(t,CM,RM).visitAfter(a),l=0;l<u;++l)h=t[l],_=e[h.index],p=_*_,f=h.x+h.vx,g=h.y+h.vy,d.visit(x);function x(S,v,b,T,w){var y=S.data,E=S.r,U=_+E;if(y){if(y.index>h.index){var P=f-y.x-y.vx,F=g-y.y-y.vy,k=P*P+F*F;k<U*U&&(P===0&&(P=Ur(n),k+=P*P),F===0&&(F=Ur(n),k+=F*F),k=(U-(k=Math.sqrt(k)))/k*r,h.vx+=(P*=k)*(U=(E*=E)/(p+E)),h.vy+=(F*=k)*U,y.vx-=P*(U=1-U),y.vy-=F*U)}return}return v>f+U||T<f-U||b>g+U||w<g-U}}function a(l){if(l.data)return l.r=e[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(t){var l,u=t.length,d;for(e=new Array(u),l=0;l<u;++l)d=t[l],e[d.index]=+i(d,l,t)}}return o.initialize=function(l,u){t=l,n=u,c()},o.iterations=function(l){return arguments.length?(s=+l,o):s},o.strength=function(l){return arguments.length?(r=+l,o):r},o.radius=function(l){return arguments.length?(i=typeof l=="function"?l:Ai(+l),c(),o):i},o}function DM(i){return i.index}function cp(i,t){var e=i.get(t);if(!e)throw new Error("node not found: "+t);return e}function LM(i){var t=DM,e=d,n,r=Ai(30),s,o,a,c,l,u=1;i==null&&(i=[]);function d(p){return 1/Math.min(a[p.source.index],a[p.target.index])}function h(p){for(var m=0,x=i.length;m<u;++m)for(var S=0,v,b,T,w,y,E,U;S<x;++S)v=i[S],b=v.source,T=v.target,w=T.x+T.vx-b.x-b.vx||Ur(l),y=T.y+T.vy-b.y-b.vy||Ur(l),E=Math.sqrt(w*w+y*y),E=(E-s[S])/E*p*n[S],w*=E,y*=E,T.vx-=w*(U=c[S]),T.vy-=y*U,b.vx+=w*(U=1-U),b.vy+=y*U}function f(){if(o){var p,m=o.length,x=i.length,S=new Map(o.map((b,T)=>[t(b,T,o),b])),v;for(p=0,a=new Array(m);p<x;++p)v=i[p],v.index=p,typeof v.source!="object"&&(v.source=cp(S,v.source)),typeof v.target!="object"&&(v.target=cp(S,v.target)),a[v.source.index]=(a[v.source.index]||0)+1,a[v.target.index]=(a[v.target.index]||0)+1;for(p=0,c=new Array(x);p<x;++p)v=i[p],c[p]=a[v.source.index]/(a[v.source.index]+a[v.target.index]);n=new Array(x),g(),s=new Array(x),_()}}function g(){if(o)for(var p=0,m=i.length;p<m;++p)n[p]=+e(i[p],p,i)}function _(){if(o)for(var p=0,m=i.length;p<m;++p)s[p]=+r(i[p],p,i)}return h.initialize=function(p,m){o=p,l=m,f()},h.links=function(p){return arguments.length?(i=p,f(),h):i},h.id=function(p){return arguments.length?(t=p,h):t},h.iterations=function(p){return arguments.length?(u=+p,h):u},h.strength=function(p){return arguments.length?(e=typeof p=="function"?p:Ai(+p),g(),h):e},h.distance=function(p){return arguments.length?(r=typeof p=="function"?p:Ai(+p),_(),h):r},h}const IM=1664525,NM=1013904223,up=4294967296;function UM(){let i=1;return()=>(i=(IM*i+NM)%up)/up}function FM(i){return i.x}function OM(i){return i.y}var BM=10,zM=Math.PI*(3-Math.sqrt(5));function kM(i){var t,e=1,n=.001,r=1-Math.pow(n,1/300),s=0,o=.6,a=new Map,c=Bf(d),l=Ia("tick","end"),u=UM();i==null&&(i=[]);function d(){h(),l.call("tick",t),e<n&&(c.stop(),l.call("end",t))}function h(_){var p,m=i.length,x;_===void 0&&(_=1);for(var S=0;S<_;++S)for(e+=(s-e)*r,a.forEach(function(v){v(e)}),p=0;p<m;++p)x=i[p],x.fx==null?x.x+=x.vx*=o:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=o:(x.y=x.fy,x.vy=0);return t}function f(){for(var _=0,p=i.length,m;_<p;++_){if(m=i[_],m.index=_,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=BM*Math.sqrt(.5+_),S=_*zM;m.x=x*Math.cos(S),m.y=x*Math.sin(S)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(_){return _.initialize&&_.initialize(i,u),_}return f(),t={tick:h,restart:function(){return c.restart(d),t},stop:function(){return c.stop(),t},nodes:function(_){return arguments.length?(i=_,f(),a.forEach(g),t):i},alpha:function(_){return arguments.length?(e=+_,t):e},alphaMin:function(_){return arguments.length?(n=+_,t):n},alphaDecay:function(_){return arguments.length?(r=+_,t):+r},alphaTarget:function(_){return arguments.length?(s=+_,t):s},velocityDecay:function(_){return arguments.length?(o=1-_,t):1-o},randomSource:function(_){return arguments.length?(u=_,a.forEach(g),t):u},force:function(_,p){return arguments.length>1?(p==null?a.delete(_):a.set(_,g(p)),t):a.get(_)},find:function(_,p,m){var x=0,S=i.length,v,b,T,w,y;for(m==null?m=1/0:m*=m,x=0;x<S;++x)w=i[x],v=_-w.x,b=p-w.y,T=v*v+b*b,T<m&&(y=w,m=T);return y},on:function(_,p){return arguments.length>1?(l.on(_,p),t):l.on(_)}}}function VM(){var i,t,e,n,r=Ai(-30),s,o=1,a=1/0,c=.81;function l(f){var g,_=i.length,p=Vf(i,FM,OM).visitAfter(d);for(n=f,g=0;g<_;++g)t=i[g],p.visit(h)}function u(){if(i){var f,g=i.length,_;for(s=new Array(g),f=0;f<g;++f)_=i[f],s[_.index]=+r(_,f,i)}}function d(f){var g=0,_,p,m=0,x,S,v;if(f.length){for(x=S=v=0;v<4;++v)(_=f[v])&&(p=Math.abs(_.value))&&(g+=_.value,m+=p,x+=p*_.x,S+=p*_.y);f.x=x/m,f.y=S/m}else{_=f,_.x=_.data.x,_.y=_.data.y;do g+=s[_.data.index];while(_=_.next)}f.value=g}function h(f,g,_,p){if(!f.value)return!0;var m=f.x-t.x,x=f.y-t.y,S=p-g,v=m*m+x*x;if(S*S/c<v)return v<a&&(m===0&&(m=Ur(e),v+=m*m),x===0&&(x=Ur(e),v+=x*x),v<o&&(v=Math.sqrt(o*v)),t.vx+=m*f.value*n/v,t.vy+=x*f.value*n/v),!0;if(f.length||v>=a)return;(f.data!==t||f.next)&&(m===0&&(m=Ur(e),v+=m*m),x===0&&(x=Ur(e),v+=x*x),v<o&&(v=Math.sqrt(o*v)));do f.data!==t&&(S=s[f.data.index]*n/v,t.vx+=m*S,t.vy+=x*S);while(f=f.next)}return l.initialize=function(f,g){i=f,e=g,u()},l.strength=function(f){return arguments.length?(r=typeof f=="function"?f:Ai(+f),u(),l):r},l.distanceMin=function(f){return arguments.length?(o=f*f,l):Math.sqrt(o)},l.distanceMax=function(f){return arguments.length?(a=f*f,l):Math.sqrt(a)},l.theta=function(f){return arguments.length?(c=f*f,l):Math.sqrt(c)},l}function HM(i,t,e){var n,r=Ai(.1),s,o;typeof i!="function"&&(i=Ai(+i)),t==null&&(t=0),e==null&&(e=0);function a(l){for(var u=0,d=n.length;u<d;++u){var h=n[u],f=h.x-t||1e-6,g=h.y-e||1e-6,_=Math.sqrt(f*f+g*g),p=(o[u]-_)*s[u]*l/_;h.vx+=f*p,h.vy+=g*p}}function c(){if(n){var l,u=n.length;for(s=new Array(u),o=new Array(u),l=0;l<u;++l)o[l]=+i(n[l],l,n),s[l]=isNaN(o[l])?0:+r(n[l],l,n)}}return a.initialize=function(l){n=l,c()},a.strength=function(l){return arguments.length?(r=typeof l=="function"?l:Ai(+l),c(),a):r},a.radius=function(l){return arguments.length?(i=typeof l=="function"?l:Ai(+l),c(),a):i},a.x=function(l){return arguments.length?(t=+l,a):t},a.y=function(l){return arguments.length?(e=+l,a):e},a}const rl=i=>()=>i;function GM(i,{sourceEvent:t,target:e,transform:n,dispatch:r}){Object.defineProperties(this,{type:{value:i,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:n,enumerable:!0,configurable:!0},_:{value:r}})}function cr(i,t,e){this.k=i,this.x=t,this.y=e}cr.prototype={constructor:cr,scale:function(i){return i===1?this:new cr(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new cr(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var p0=new cr(1,0,0);cr.prototype;function Kc(i){i.stopImmediatePropagation()}function Lo(i){i.preventDefault(),i.stopImmediatePropagation()}function WM(i){return(!i.ctrlKey||i.type==="wheel")&&!i.button}function XM(){var i=this;return i instanceof SVGElement?(i=i.ownerSVGElement||i,i.hasAttribute("viewBox")?(i=i.viewBox.baseVal,[[i.x,i.y],[i.x+i.width,i.y+i.height]]):[[0,0],[i.width.baseVal.value,i.height.baseVal.value]]):[[0,0],[i.clientWidth,i.clientHeight]]}function hp(){return this.__zoom||p0}function YM(i){return-i.deltaY*(i.deltaMode===1?.05:i.deltaMode?1:.002)*(i.ctrlKey?10:1)}function qM(){return navigator.maxTouchPoints||"ontouchstart"in this}function $M(i,t,e){var n=i.invertX(t[0][0])-e[0][0],r=i.invertX(t[1][0])-e[1][0],s=i.invertY(t[0][1])-e[0][1],o=i.invertY(t[1][1])-e[1][1];return i.translate(r>n?(n+r)/2:Math.min(0,n)||Math.max(0,r),o>s?(s+o)/2:Math.min(0,s)||Math.max(0,o))}function KM(){var i=WM,t=XM,e=$M,n=YM,r=qM,s=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],a=250,c=Qy,l=Ia("start","zoom","end"),u,d,h,f=500,g=150,_=0,p=10;function m(R){R.property("__zoom",hp).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",E).on("dblclick.zoom",U).filter(r).on("touchstart.zoom",P).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",k).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}m.transform=function(R,N,L,I){var q=R.selection?R.selection():R;q.property("__zoom",hp),R!==q?b(R,N,L,I):q.interrupt().each(function(){T(this,arguments).event(I).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},m.scaleBy=function(R,N,L,I){m.scaleTo(R,function(){var q=this.__zoom.k,$=typeof N=="function"?N.apply(this,arguments):N;return q*$},L,I)},m.scaleTo=function(R,N,L,I){m.transform(R,function(){var q=t.apply(this,arguments),$=this.__zoom,D=L==null?v(q):typeof L=="function"?L.apply(this,arguments):L,st=$.invert(D),at=typeof N=="function"?N.apply(this,arguments):N;return e(S(x($,at),D,st),q,o)},L,I)},m.translateBy=function(R,N,L,I){m.transform(R,function(){return e(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof L=="function"?L.apply(this,arguments):L),t.apply(this,arguments),o)},null,I)},m.translateTo=function(R,N,L,I,q){m.transform(R,function(){var $=t.apply(this,arguments),D=this.__zoom,st=I==null?v($):typeof I=="function"?I.apply(this,arguments):I;return e(p0.translate(st[0],st[1]).scale(D.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof L=="function"?-L.apply(this,arguments):-L),$,o)},I,q)};function x(R,N){return N=Math.max(s[0],Math.min(s[1],N)),N===R.k?R:new cr(N,R.x,R.y)}function S(R,N,L){var I=N[0]-L[0]*R.k,q=N[1]-L[1]*R.k;return I===R.x&&q===R.y?R:new cr(R.k,I,q)}function v(R){return[(+R[0][0]+ +R[1][0])/2,(+R[0][1]+ +R[1][1])/2]}function b(R,N,L,I){R.on("start.zoom",function(){T(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(I).end()}).tween("zoom",function(){var q=this,$=arguments,D=T(q,$).event(I),st=t.apply(q,$),at=L==null?v(st):typeof L=="function"?L.apply(q,$):L,V=Math.max(st[1][0]-st[0][0],st[1][1]-st[0][1]),tt=q.__zoom,ot=typeof N=="function"?N.apply(q,$):N,G=c(tt.invert(at).concat(V/tt.k),ot.invert(at).concat(V/ot.k));return function(Q){if(Q===1)Q=ot;else{var j=G(Q),ft=V/j[2];Q=new cr(ft,at[0]-j[0]*ft,at[1]-j[1]*ft)}D.zoom(null,Q)}})}function T(R,N,L){return!L&&R.__zooming||new w(R,N)}function w(R,N){this.that=R,this.args=N,this.active=0,this.sourceEvent=null,this.extent=t.apply(R,N),this.taps=0}w.prototype={event:function(R){return R&&(this.sourceEvent=R),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(R,N){return this.mouse&&R!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&R!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&R!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(R){var N=bi(this.that).datum();l.call(R,this.that,new GM(R,{sourceEvent:this.sourceEvent,target:m,transform:this.that.__zoom,dispatch:l}),N)}};function y(R,...N){if(!i.apply(this,arguments))return;var L=T(this,N).event(R),I=this.__zoom,q=Math.max(s[0],Math.min(s[1],I.k*Math.pow(2,n.apply(this,arguments)))),$=rr(R);if(L.wheel)(L.mouse[0][0]!==$[0]||L.mouse[0][1]!==$[1])&&(L.mouse[1]=I.invert(L.mouse[0]=$)),clearTimeout(L.wheel);else{if(I.k===q)return;L.mouse=[$,I.invert($)],Wl(this),L.start()}Lo(R),L.wheel=setTimeout(D,g),L.zoom("mouse",e(S(x(I,q),L.mouse[0],L.mouse[1]),L.extent,o));function D(){L.wheel=null,L.end()}}function E(R,...N){if(h||!i.apply(this,arguments))return;var L=R.currentTarget,I=T(this,N,!0).event(R),q=bi(R.view).on("mousemove.zoom",at,!0).on("mouseup.zoom",V,!0),$=rr(R,L),D=R.clientX,st=R.clientY;jg(R.view),Kc(R),I.mouse=[$,this.__zoom.invert($)],Wl(this),I.start();function at(tt){if(Lo(tt),!I.moved){var ot=tt.clientX-D,G=tt.clientY-st;I.moved=ot*ot+G*G>_}I.event(tt).zoom("mouse",e(S(I.that.__zoom,I.mouse[0]=rr(tt,L),I.mouse[1]),I.extent,o))}function V(tt){q.on("mousemove.zoom mouseup.zoom",null),t0(tt.view,I.moved),Lo(tt),I.event(tt).end()}}function U(R,...N){if(i.apply(this,arguments)){var L=this.__zoom,I=rr(R.changedTouches?R.changedTouches[0]:R,this),q=L.invert(I),$=L.k*(R.shiftKey?.5:2),D=e(S(x(L,$),I,q),t.apply(this,N),o);Lo(R),a>0?bi(this).transition().duration(a).call(b,D,I,R):bi(this).call(m.transform,D,I,R)}}function P(R,...N){if(i.apply(this,arguments)){var L=R.touches,I=L.length,q=T(this,N,R.changedTouches.length===I).event(R),$,D,st,at;for(Kc(R),D=0;D<I;++D)st=L[D],at=rr(st,this),at=[at,this.__zoom.invert(at),st.identifier],q.touch0?!q.touch1&&q.touch0[2]!==at[2]&&(q.touch1=at,q.taps=0):(q.touch0=at,$=!0,q.taps=1+!!u);u&&(u=clearTimeout(u)),$&&(q.taps<2&&(d=at[0],u=setTimeout(function(){u=null},f)),Wl(this),q.start())}}function F(R,...N){if(this.__zooming){var L=T(this,N).event(R),I=R.changedTouches,q=I.length,$,D,st,at;for(Lo(R),$=0;$<q;++$)D=I[$],st=rr(D,this),L.touch0&&L.touch0[2]===D.identifier?L.touch0[0]=st:L.touch1&&L.touch1[2]===D.identifier&&(L.touch1[0]=st);if(D=L.that.__zoom,L.touch1){var V=L.touch0[0],tt=L.touch0[1],ot=L.touch1[0],G=L.touch1[1],Q=(Q=ot[0]-V[0])*Q+(Q=ot[1]-V[1])*Q,j=(j=G[0]-tt[0])*j+(j=G[1]-tt[1])*j;D=x(D,Math.sqrt(Q/j)),st=[(V[0]+ot[0])/2,(V[1]+ot[1])/2],at=[(tt[0]+G[0])/2,(tt[1]+G[1])/2]}else if(L.touch0)st=L.touch0[0],at=L.touch0[1];else return;L.zoom("touch",e(S(D,st,at),L.extent,o))}}function k(R,...N){if(this.__zooming){var L=T(this,N).event(R),I=R.changedTouches,q=I.length,$,D;for(Kc(R),h&&clearTimeout(h),h=setTimeout(function(){h=null},f),$=0;$<q;++$)D=I[$],L.touch0&&L.touch0[2]===D.identifier?delete L.touch0:L.touch1&&L.touch1[2]===D.identifier&&delete L.touch1;if(L.touch1&&!L.touch0&&(L.touch0=L.touch1,delete L.touch1),L.touch0)L.touch0[1]=this.__zoom.invert(L.touch0[0]);else if(L.end(),L.taps===2&&(D=rr(D,this),Math.hypot(d[0]-D[0],d[1]-D[1])<p)){var st=bi(this).on("dblclick.zoom");st&&st.apply(this,arguments)}}}return m.wheelDelta=function(R){return arguments.length?(n=typeof R=="function"?R:rl(+R),m):n},m.filter=function(R){return arguments.length?(i=typeof R=="function"?R:rl(!!R),m):i},m.touchable=function(R){return arguments.length?(r=typeof R=="function"?R:rl(!!R),m):r},m.extent=function(R){return arguments.length?(t=typeof R=="function"?R:rl([[+R[0][0],+R[0][1]],[+R[1][0],+R[1][1]]]),m):t},m.scaleExtent=function(R){return arguments.length?(s[0]=+R[0],s[1]=+R[1],m):[s[0],s[1]]},m.translateExtent=function(R){return arguments.length?(o[0][0]=+R[0][0],o[1][0]=+R[1][0],o[0][1]=+R[0][1],o[1][1]=+R[1][1],m):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},m.constrain=function(R){return arguments.length?(e=R,m):e},m.duration=function(R){return arguments.length?(a=+R,m):a},m.interpolate=function(R){return arguments.length?(c=R,m):c},m.on=function(){var R=l.on.apply(l,arguments);return R===l?m:R},m.clickDistance=function(R){return arguments.length?(_=(R=+R)*R,m):Math.sqrt(_)},m.tapDistance=function(R){return arguments.length?(p=+R,m):p},m}var fp="1.3.21";function m0(i,t,e){return Math.max(i,Math.min(t,e))}function ZM(i,t,e){return(1-e)*i+e*t}function JM(i,t,e,n){return ZM(i,t,1-Math.exp(-e*n))}function QM(i,t){return(i%t+t)%t}var jM=class{constructor(){Vt(this,"isRunning",!1);Vt(this,"value",0);Vt(this,"from",0);Vt(this,"to",0);Vt(this,"currentTime",0);Vt(this,"lerp");Vt(this,"duration");Vt(this,"easing");Vt(this,"onUpdate")}advance(i){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=m0(0,this.currentTime/this.duration,1);t=n>=1;const r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=JM(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function tE(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var eE=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Vt(this,"width",0);Vt(this,"height",0);Vt(this,"scrollHeight",0);Vt(this,"scrollWidth",0);Vt(this,"debouncedResize");Vt(this,"wrapperResizeObserver");Vt(this,"contentResizeObserver");Vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=tE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,t;(i=this.wrapperResizeObserver)==null||i.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},g0=class{constructor(){Vt(this,"events",{})}emit(i,...t){var n;const e=this.events[i]||[];for(let r=0,s=e.length;r<s;r++)(n=e[r])==null||n.call(e,...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}}off(i,t){var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const nE=100/6,yr={passive:!1};function dp(i,t){return i===1?nE:i===2?t:1}var iE=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Vt(this,"touchStart",{x:0,y:0});Vt(this,"lastDelta",{x:0,y:0});Vt(this,"window",{width:0,height:0});Vt(this,"emitter",new g0);Vt(this,"onTouchStart",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Vt(this,"onTouchMove",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});Vt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Vt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=dp(n,this.window.width),s=dp(n,this.window.height);t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,yr),this.element.addEventListener("touchstart",this.onTouchStart,yr),this.element.addEventListener("touchmove",this.onTouchMove,yr),this.element.addEventListener("touchend",this.onTouchEnd,yr)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,yr),this.element.removeEventListener("touchstart",this.onTouchStart,yr),this.element.removeEventListener("touchmove",this.onTouchMove,yr),this.element.removeEventListener("touchend",this.onTouchEnd,yr)}};const pp=i=>Math.min(1,1.001-2**(-10*i));var rE=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:c,lerp:l=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:S=!1,anchors:v=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:y=w,stopInertiaOnNavigate:E=!1}={}){Vt(this,"_isScrolling",!1);Vt(this,"_isStopped",!1);Vt(this,"_isLocked",!1);Vt(this,"_preventNextNativeScrollEvent",!1);Vt(this,"_resetVelocityTimeout",null);Vt(this,"_rafId",null);Vt(this,"isTouching");Vt(this,"time",0);Vt(this,"userData",{});Vt(this,"lastVelocity",0);Vt(this,"velocity",0);Vt(this,"direction",0);Vt(this,"options");Vt(this,"targetScroll");Vt(this,"animatedScroll");Vt(this,"animate",new jM);Vt(this,"emitter",new g0);Vt(this,"dimensions");Vt(this,"virtualScroll");Vt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Vt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Vt(this,"onTransitionEnd",i=>{var t;(t=i.propertyName)!=null&&t.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Vt(this,"onClick",i=>{const t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(r=>e.host===r.host&&e.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Vt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Vt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const l=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(c.find(g=>{var _,p,m,x,S;return g instanceof HTMLElement&&(typeof l=="function"&&(l==null?void 0:l(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||r&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-touch"))||s&&((S=g.hasAttribute)==null?void 0:S.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=r&&this.options.syncTouch,f=r&&n.type==="touchend";f&&(d=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Vt(this,"raf",i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=fp,window.lenis||(window.lenis={}),window.lenis.version=fp,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof c!="function"?c=pp:typeof c=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:c,lerp:l,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:x,autoRaf:S,anchors:v,autoToggle:b,allowNestedScroll:T,naiveDimensions:y,stopInertiaOnNavigate:E},this.dimensions=new eE(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new iE(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){const i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=i,f=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?v.left:v.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(S)?0:S)}}if(typeof h=="number"){if(h+=f,h=Math.round(h),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=m0(0,h,this.limit);if(h===this.targetScroll){c==null||c(this),l==null||l(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=pp:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){const n=Date.now();i._lenis||(i._lenis={});const r=i._lenis;let s,o,a,c,l,u,d,h,f,g;if(n-(r.time??0)>2e3){r.time=Date.now();const T=window.getComputedStyle(i);if(r.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),l=["auto"].includes(T.overscrollBehaviorX),u=["auto"].includes(T.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,a=d>f,c=h>g,r.isScrollableX=a,r.isScrollableY=c,r.scrollWidth=d,r.scrollHeight=h,r.clientWidth=f,r.clientHeight=g,r.hasOverscrollBehaviorX=l,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,c=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,l=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&c))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,x,S,v,b;if(_==="horizontal")p=Math.round(i.scrollLeft),m=d-f,x=t,S=s,v=a,b=l;else if(_==="vertical")p=Math.round(i.scrollTop),m=h-g,x=e,S=o,v=c,b=u;else return!1;return!b&&(p>=m||p<=0)?!0:(x>0?p<m:p>0)&&S&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?QM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="183",sE=0,mp=1,oE=2,Xl=1,aE=2,Jo=3,Wr=0,Vn=1,ar=2,Gi=0,oo=1,dh=2,gp=3,_p=4,lE=5,os=100,cE=101,uE=102,hE=103,fE=104,dE=200,pE=201,mE=202,gE=203,ph=204,mh=205,_E=206,vE=207,xE=208,yE=209,SE=210,ME=211,EE=212,bE=213,TE=214,gh=0,_h=1,vh=2,vo=3,xh=4,yh=5,Sh=6,Mh=7,_0=0,wE=1,AE=2,Wi=0,v0=1,Wf=2,x0=3,y0=4,S0=5,M0=6,E0=7,b0=300,Ts=301,xo=302,Zc=303,Jc=304,wc=306,Eh=1e3,ur=1001,bh=1002,ln=1003,CE=1004,sl=1005,xn=1006,Qc=1007,hs=1008,ei=1009,T0=1010,w0=1011,Ca=1012,Xf=1013,qi=1014,zi=1015,si=1016,Yf=1017,qf=1018,Ra=1020,A0=35902,C0=35899,R0=1021,P0=1022,Ci=1023,gr=1026,fs=1027,D0=1028,$f=1029,yo=1030,Kf=1031,Zf=1033,Yl=33776,ql=33777,$l=33778,Kl=33779,Th=35840,wh=35841,Ah=35842,Ch=35843,Rh=36196,Ph=37492,Dh=37496,Lh=37488,Ih=37489,Nh=37490,Uh=37491,Fh=37808,Oh=37809,Bh=37810,zh=37811,kh=37812,Vh=37813,Hh=37814,Gh=37815,Wh=37816,Xh=37817,Yh=37818,qh=37819,$h=37820,Kh=37821,Zh=36492,Jh=36494,Qh=36495,jh=36283,tf=36284,ef=36285,nf=36286,RE=3200,L0=0,PE=1,Rr="",fi="srgb",So="srgb-linear",mc="linear",ye="srgb",Is=7680,vp=519,DE=512,LE=513,IE=514,Jf=515,NE=516,UE=517,Qf=518,FE=519,xp=35044,yp="300 es",ki=2e3,Pa=2001;function OE(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function BE(){const i=gc("canvas");return i.style.display="block",i}const Sp={};function Mp(...i){const t="THREE."+i.shift();console.log(t,...i)}function I0(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=I0(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ge(...i){i=I0(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _c(...i){const t=i.join(" ");t in Sp||(Sp[t]=!0,Jt(...i))}function zE(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const kE={[gh]:_h,[vh]:Sh,[xh]:Mh,[vo]:yh,[_h]:gh,[Sh]:vh,[Mh]:xh,[yh]:vo};class bo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=Math.PI/180,rf=180/Math.PI;function Fa(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function VE(i,t){return(i%t+t)%t}function tu(i,t,e){return(1-e)*i+e*t}function Io(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class To{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),S=Math.sin(x);m=Math.sin(m*x)/S,a=Math.sin(a*x)/S,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+_*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+_*a;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ep.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ep.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eu.copy(this).projectOnVector(t),this.sub(eu)}reflect(t){return this.sub(eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new W,Ep=new To;class re{constructor(t,e,n,r,s,o,a,c,l){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],x=r[1],S=r[4],v=r[7],b=r[2],T=r[5],w=r[8];return s[0]=o*_+a*x+c*b,s[3]=o*p+a*S+c*T,s[6]=o*m+a*v+c*w,s[1]=l*_+u*x+d*b,s[4]=l*p+u*S+d*T,s[7]=l*m+u*v+d*w,s[2]=h*_+f*x+g*b,s[5]=h*p+f*S+g*T,s[8]=h*m+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=e*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nu.makeScale(t,e)),this}rotate(t){return this.premultiply(nu.makeRotation(-t)),this}translate(t,e){return this.premultiply(nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new re,bp=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const i={enabled:!0,workingColorSpace:So,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=ao(r.r),r.g=ao(r.g),r.b=ao(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _c("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _c("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[So]:{primaries:t,whitePoint:n,transfer:mc,toXYZ:bp,fromXYZ:Tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:bp,fromXYZ:Tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),i}const de=HE();function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ns;class GE{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=gc("canvas")),Ns.width=t.width,Ns.height=t.height;const r=Ns.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fr(e[n]/255)*255):e[n]=fr(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WE=0;class jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Fa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?GE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let XE=0;const ru=new W;class Dn extends bo{constructor(t=Dn.DEFAULT_IMAGE,e=Dn.DEFAULT_MAPPING,n=ur,r=ur,s=xn,o=hs,a=Ci,c=ei,l=Dn.DEFAULT_ANISOTROPY,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Fa(),this.name="",this.source=new jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==b0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eh:t.x=t.x-Math.floor(t.x);break;case ur:t.x=t.x<0?0:1;break;case bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eh:t.y=t.y-Math.floor(t.y);break;case ur:t.y=t.y<0?0:1;break;case bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=b0;Dn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,r=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(f+1)/2,b=(m+1)/2,T=(u+h)/4,w=(d+_)/4,y=(g+p)/4;return S>v&&S>b?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=w/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=y/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=y/s),this.set(n,r,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends bo{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Dn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new jf(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends YE{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class N0 extends Dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qE extends Dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class De{constructor(t,e,n,r,s,o,a,c,l,u,d,h,f,g,_,p){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,d,h,f,g,_,p)}set(t,e,n,r,s,o,a,c,l,u,d,h,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Us.setFromMatrixColumn(t,0).length(),s=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($E,t,KE)}lookAt(t,e,n){const r=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Sr.crossVectors(n,Yn),Sr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Sr.crossVectors(n,Yn)),Sr.normalize(),ol.crossVectors(Yn,Sr),r[0]=Sr.x,r[4]=ol.x,r[8]=Yn.x,r[1]=Sr.y,r[5]=ol.y,r[9]=Yn.y,r[2]=Sr.z,r[6]=ol.z,r[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],S=n[7],v=n[11],b=n[15],T=r[0],w=r[4],y=r[8],E=r[12],U=r[1],P=r[5],F=r[9],k=r[13],R=r[2],N=r[6],L=r[10],I=r[14],q=r[3],$=r[7],D=r[11],st=r[15];return s[0]=o*T+a*U+c*R+l*q,s[4]=o*w+a*P+c*N+l*$,s[8]=o*y+a*F+c*L+l*D,s[12]=o*E+a*k+c*I+l*st,s[1]=u*T+d*U+h*R+f*q,s[5]=u*w+d*P+h*N+f*$,s[9]=u*y+d*F+h*L+f*D,s[13]=u*E+d*k+h*I+f*st,s[2]=g*T+_*U+p*R+m*q,s[6]=g*w+_*P+p*N+m*$,s[10]=g*y+_*F+p*L+m*D,s[14]=g*E+_*k+p*I+m*st,s[3]=x*T+S*U+v*R+b*q,s[7]=x*w+S*P+v*N+b*$,s[11]=x*y+S*F+v*L+b*D,s[15]=x*E+S*k+v*I+b*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],x=c*f-l*h,S=a*f-l*d,v=a*h-c*d,b=o*f-l*u,T=o*h-c*u,w=o*d-a*u;return e*(_*x-p*S+m*v)-n*(g*x-p*b+m*T)+r*(g*S-_*b+m*w)-s*(g*v-_*T+p*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],x=e*a-n*o,S=e*c-r*o,v=e*l-s*o,b=n*c-r*a,T=n*l-s*a,w=r*l-s*c,y=u*_-d*g,E=u*p-h*g,U=u*m-f*g,P=d*p-h*_,F=d*m-f*_,k=h*m-f*p,R=x*k-S*F+v*P+b*U-T*E+w*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return t[0]=(a*k-c*F+l*P)*N,t[1]=(r*F-n*k-s*P)*N,t[2]=(_*w-p*T+m*b)*N,t[3]=(h*T-d*w-f*b)*N,t[4]=(c*U-o*k-l*E)*N,t[5]=(e*k-r*U+s*E)*N,t[6]=(p*v-g*w-m*S)*N,t[7]=(u*w-h*v+f*S)*N,t[8]=(o*F-a*U+l*y)*N,t[9]=(n*U-e*F-s*y)*N,t[10]=(g*T-_*v+m*x)*N,t[11]=(d*v-u*T-f*x)*N,t[12]=(a*E-o*P-c*y)*N,t[13]=(e*P-n*E+r*y)*N,t[14]=(_*S-g*b-p*x)*N,t[15]=(u*b-d*S+h*x)*N,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,_=o*u,p=o*d,m=a*d,x=c*l,S=c*u,v=c*d,b=n.x,T=n.y,w=n.z;return r[0]=(1-(_+m))*b,r[1]=(f+v)*b,r[2]=(g-S)*b,r[3]=0,r[4]=(f-v)*T,r[5]=(1-(h+m))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(g+S)*w,r[9]=(p-x)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Us.set(r[0],r[1],r[2]).length();const a=Us.set(r[4],r[5],r[6]).length(),c=Us.set(r[8],r[9],r[10]).length();s<0&&(o=-o),yi.copy(this);const l=1/o,u=1/a,d=1/c;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,e.setFromRotationMatrix(yi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,r,s,o,a=ki,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===ki)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Pa)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ki,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-r),h=-(e+t)/(e-t),f=-(n+r)/(n-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===ki)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Pa)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Us=new W,yi=new De,$E=new W(0,0,0),KE=new W(1,1,1),Sr=new W,ol=new W,Yn=new W,wp=new De,Ap=new To;class $i{constructor(t=0,e=0,n=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class U0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZE=0;const Cp=new W,Fs=new To,Qi=new De,al=new W,No=new W,JE=new W,QE=new To,Rp=new W(1,0,0),Pp=new W(0,1,0),Dp=new W(0,0,1),Lp={type:"added"},jE={type:"removed"},Os={type:"childadded",child:null},su={type:"childremoved",child:null};class Ln extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new W,e=new $i,n=new To,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new re}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Pp,t)}rotateZ(t){return this.rotateOnAxis(Dp,t)}translateOnAxis(t,e){return Cp.copy(t).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Pp,t)}translateZ(t){return this.translateOnAxis(Dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?al.copy(t):al.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(No,al,this.up):Qi.lookAt(al,No,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lp),Os.child=t,this.dispatchEvent(Os),Os.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jE),su.child=t,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lp),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,JE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,QE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new W(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ll extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ll;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function au(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=VE(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=au(o,s,t+1/3),this.g=au(o,s,t),this.b=au(o,s,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,e=fi){function n(s){s!==void 0&&parseFloat(s)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){const n=F0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return de.workingToColorSpace(pn.copy(this),t),Math.round(ue(pn.r*255,0,255))*65536+Math.round(ue(pn.g*255,0,255))*256+Math.round(ue(pn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,s=pn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=fi){de.workingToColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,r=pn.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mr),this.setHSL(Mr.h+t,Mr.s+e,Mr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mr),t.getHSL(cl);const n=tu(Mr.h,cl.h,e),r=tu(Mr.s,cl.s,e),s=tu(Mr.l,cl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new he;he.NAMES=F0;class eb extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Si=new W,ji=new W,lu=new W,tr=new W,Bs=new W,zs=new W,Ip=new W,cu=new W,uu=new W,hu=new W,fu=new Fe,du=new Fe,pu=new Fe;class wi{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Si.subVectors(t,e),r.cross(Si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Si.subVectors(r,e),ji.subVectors(n,e),lu.subVectors(t,e);const o=Si.dot(Si),a=Si.dot(ji),c=Si.dot(lu),l=ji.dot(ji),u=ji.dot(lu),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(o,tr.y),c.addScaledVector(a,tr.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return fu.setScalar(0),du.setScalar(0),pu.setScalar(0),fu.fromBufferAttribute(t,e),du.fromBufferAttribute(t,n),pu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(fu,s.x),o.addScaledVector(du,s.y),o.addScaledVector(pu,s.z),o}static isFrontFacing(t,e,n,r){return Si.subVectors(n,e),ji.subVectors(t,e),Si.cross(ji).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Si.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return wi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Bs.subVectors(r,n),zs.subVectors(s,n),cu.subVectors(t,n);const c=Bs.dot(cu),l=zs.dot(cu);if(c<=0&&l<=0)return e.copy(n);uu.subVectors(t,r);const u=Bs.dot(uu),d=zs.dot(uu);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Bs,o);hu.subVectors(t,s);const f=Bs.dot(hu),g=zs.dot(hu);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(zs,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Ip.subVectors(s,r),a=(d-u)/(d-u+(f-g)),e.copy(r).addScaledVector(Ip,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(Bs,o).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Oa{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ul.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(t.matrixWorld),this.union(ul)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),hl.subVectors(this.max,Uo),ks.subVectors(t.a,Uo),Vs.subVectors(t.b,Uo),Hs.subVectors(t.c,Uo),Er.subVectors(Vs,ks),br.subVectors(Hs,Vs),Zr.subVectors(ks,Hs);let e=[0,-Er.z,Er.y,0,-br.z,br.y,0,-Zr.z,Zr.y,Er.z,0,-Er.x,br.z,0,-br.x,Zr.z,0,-Zr.x,-Er.y,Er.x,0,-br.y,br.x,0,-Zr.y,Zr.x,0];return!mu(e,ks,Vs,Hs,hl)||(e=[1,0,0,0,1,0,0,0,1],!mu(e,ks,Vs,Hs,hl))?!1:(fl.crossVectors(Er,br),e=[fl.x,fl.y,fl.z],mu(e,ks,Vs,Hs,hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(er),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const er=[new W,new W,new W,new W,new W,new W,new W,new W],Mi=new W,ul=new Oa,ks=new W,Vs=new W,Hs=new W,Er=new W,br=new W,Zr=new W,Uo=new W,hl=new W,fl=new W,Jr=new W;function mu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Jr.fromArray(i,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),c=t.dot(Jr),l=e.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const He=new W,dl=new Ot;let nb=0;class Xi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dl.fromBufferAttribute(this,e),dl.applyMatrix3(t),this.setXY(e,dl.x,dl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Io(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Io(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Io(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Io(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Io(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xp&&(t.usage=this.usage),t}}class O0 extends Xi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class B0 extends Xi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class rn extends Xi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ib=new Oa,Fo=new W,gu=new W;class Ac{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ib.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const e=Fo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Fo,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(gu)),this.expandByPoint(Fo.copy(t.center).sub(gu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rb=0;const ui=new De,_u=new Ln,Gs=new W,qn=new Oa,Oo=new Oa,tn=new W;class Wn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OE(t)?B0:O0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return _u.lookAt(t),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(qn.min,Oo.min),qn.expandByPoint(tn),tn.addVectors(qn.max,Oo.max),qn.expandByPoint(tn)):(qn.expandByPoint(Oo.min),qn.expandByPoint(Oo.max))}qn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)tn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(tn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tn.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(t,l),tn.add(Gs)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new W,c[y]=new W;const l=new W,u=new W,d=new W,h=new Ot,f=new Ot,g=new Ot,_=new W,p=new W;function m(y,E,U){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,U),h.fromBufferAttribute(s,y),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,U),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[y].add(_),a[E].add(_),a[U].add(_),c[y].add(p),c[E].add(p),c[U].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,E=x.length;y<E;++y){const U=x[y],P=U.start,F=U.count;for(let k=P,R=P+F;k<R;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new W,v=new W,b=new W,T=new W;function w(y){b.fromBufferAttribute(r,y),T.copy(b);const E=a[y];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(T,E);const P=v.dot(c[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,P)}for(let y=0,E=x.length;y<E;++y){const U=x[y],P=U.start,F=U.count;for(let k=P,R=P+F;k<R;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,u=new W,d=new W;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new Xi(h,u,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sb=0;class wo extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=oo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const nr=new W,vu=new W,pl=new W,Tr=new W,xu=new W,ml=new W,yu=new W;class z0{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nr.copy(this.origin).addScaledVector(this.direction,e),nr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){vu.copy(t).add(e).multiplyScalar(.5),pl.copy(e).sub(t).normalize(),Tr.copy(this.origin).sub(vu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pl),a=Tr.dot(this.direction),c=-Tr.dot(pl),l=Tr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vu).addScaledVector(pl,h),f}intersectSphere(t,e){nr.subVectors(t.center,this.origin);const n=nr.dot(this.direction),r=nr.dot(nr)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,nr)!==null}intersectTriangle(t,e,n,r,s){xu.subVectors(e,t),ml.subVectors(n,t),yu.crossVectors(xu,ml);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tr.subVectors(this.origin,t);const c=a*this.direction.dot(ml.crossVectors(Tr,ml));if(c<0)return null;const l=a*this.direction.dot(xu.cross(Tr));if(l<0||c+l>o)return null;const u=-a*Tr.dot(yu);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class td extends wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Np=new De,Qr=new z0,gl=new Ac,Up=new W,_l=new W,vl=new W,xl=new W,Su=new W,yl=new W,Fp=new W,Sl=new W;class vi extends Ln{constructor(t=new Wn,e=new td){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){yl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Su.fromBufferAttribute(d,t),o?yl.addScaledVector(Su,u):yl.addScaledVector(Su.sub(e),u))}e.add(yl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),Qr.copy(t.ray).recast(t.near),!(gl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(gl,Up)===null||Qr.origin.distanceToSquared(Up)>(t.far-t.near)**2))&&(Np.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(Np),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,b=S;v<b;v+=3){const T=a.getX(v),w=a.getX(v+1),y=a.getX(v+2);r=Ml(this,m,t,n,l,u,d,T,w,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);r=Ml(this,o,t,n,l,u,d,x,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=x,b=S;v<b;v+=3){const T=v,w=v+1,y=v+2;r=Ml(this,m,t,n,l,u,d,T,w,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=p,S=p+1,v=p+2;r=Ml(this,o,t,n,l,u,d,x,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function ob(i,t,e,n,r,s,o,a){let c;if(t.side===Vn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Wr,a),c===null)return null;Sl.copy(a),Sl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Sl);return l<e.near||l>e.far?null:{distance:l,point:Sl.clone(),object:i}}function Ml(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,_l),i.getVertexPosition(c,vl),i.getVertexPosition(l,xl);const u=ob(i,t,e,n,_l,vl,xl,Fp);if(u){const d=new W;wi.getBarycoord(Fp,_l,vl,xl,d),r&&(u.uv=wi.getInterpolatedAttribute(r,a,c,l,d,new Ot)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,c,l,d,new Ot)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,c,l,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new W,materialIndex:0};wi.getNormal(_l,vl,xl,h.normal),u.face=h,u.barycoord=d}return u}class ab extends Dn{constructor(t=null,e=1,n=1,r,s,o,a,c,l=ln,u=ln,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new W,lb=new W,cb=new re;class ss{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Mu.subVectors(n,e).cross(lb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cb.getNormalMatrix(t),r=this.coplanarPoint(Mu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Ac,ub=new Ot(.5,.5),El=new W;class ed{constructor(t=new ss,e=new ss,n=new ss,r=new ss,s=new ss,o=new ss){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],x=s[12],S=s[13],v=s[14],b=s[15];if(r[0].setComponents(l-o,f-u,m-g,b-x).normalize(),r[1].setComponents(l+o,f+u,m+g,b+x).normalize(),r[2].setComponents(l+a,f+d,m+_,b+S).normalize(),r[3].setComponents(l-a,f-d,m-_,b-S).normalize(),n)r[4].setComponents(c,h,p,v).normalize(),r[5].setComponents(l-c,f-h,m-p,b-v).normalize();else if(r[4].setComponents(l-c,f-h,m-p,b-v).normalize(),e===ki)r[5].setComponents(l+c,f+h,m+p,b+v).normalize();else if(e===Pa)r[5].setComponents(c,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(t){jr.center.set(0,0,0);const e=ub.distanceTo(t.center);return jr.radius=.7071067811865476+e,jr.applyMatrix4(t.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(El.x=r.normal.x>0?t.max.x:t.min.x,El.y=r.normal.y>0?t.max.y:t.min.y,El.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k0 extends wo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Op=new De,sf=new z0,bl=new Ac,Tl=new W;class hb extends Ln{constructor(t=new Wn,e=new k0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,t.ray.intersectsSphere(bl)===!1)return;Op.copy(r).invert(),sf.copy(t.ray).applyMatrix4(Op);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const p=l.getX(g);Tl.fromBufferAttribute(d,p),Bp(Tl,p,c,r,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)Tl.fromBufferAttribute(d,g),Bp(Tl,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bp(i,t,e,n,r,s,o){const a=sf.distanceSqToPoint(i);if(a<e){const c=new W;sf.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class V0 extends Dn{constructor(t=[],e=Ts,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Da extends Dn{constructor(t,e,n=qi,r,s,o,a=ln,c=ln,l,u=gr,d=1){if(u!==gr&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fb extends Da{constructor(t,e=qi,n=Ts,r,s,o=ln,a=ln,c,l=gr){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class H0 extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ba extends Wn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function g(_,p,m,x,S,v,b,T,w,y,E){const U=v/w,P=b/y,F=v/2,k=b/2,R=T/2,N=w+1,L=y+1;let I=0,q=0;const $=new W;for(let D=0;D<L;D++){const st=D*P-k;for(let at=0;at<N;at++){const V=at*U-F;$[_]=V*x,$[p]=st*S,$[m]=R,l.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=T>0?1:-1,u.push($.x,$.y,$.z),d.push(at/w),d.push(1-D/y),I+=1}}for(let D=0;D<y;D++)for(let st=0;st<w;st++){const at=h+st+N*D,V=h+st+N*(D+1),tt=h+(st+1)+N*(D+1),ot=h+(st+1)+N*D;c.push(at,V,ot),c.push(V,tt,ot),q+=6}a.addGroup(f,q,E),f+=q,h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _r{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Ot:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new W,r=[],s=[],o=[],a=new W,c=new De;for(let f=0;f<=t;f++){const g=f/t;r[f]=this.getTangentAt(g,new W)}s[0]=new W,o[0]=new W;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ue(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(ue(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class G0 extends _r{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ot){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class db extends G0{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nd(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const wl=new W,Eu=new nd,bu=new nd,Tu=new nd;class pb extends _r{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new W){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(wl.subVectors(r[0],r[1]).add(r[0]),l=wl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Eu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,p),bu.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,p),Tu.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),bu.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Tu.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Eu.calc(c),bu.calc(c),Tu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new W().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zp(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function mb(i,t){const e=1-i;return e*e*t}function gb(i,t){return 2*(1-i)*i*t}function _b(i,t){return i*i*t}function fa(i,t,e,n){return mb(i,t)+gb(i,e)+_b(i,n)}function vb(i,t){const e=1-i;return e*e*e*t}function xb(i,t){const e=1-i;return 3*e*e*i*t}function yb(i,t){return 3*(1-i)*i*i*t}function Sb(i,t){return i*i*i*t}function da(i,t,e,n,r){return vb(i,t)+xb(i,e)+yb(i,n)+Sb(i,r)}class Mb extends _r{constructor(t=new Ot,e=new Ot,n=new Ot,r=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Ot){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(da(t,r.x,s.x,o.x,a.x),da(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eb extends _r{constructor(t=new W,e=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new W){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(da(t,r.x,s.x,o.x,a.x),da(t,r.y,s.y,o.y,a.y),da(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bb extends _r{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tb extends _r{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wb extends _r{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(fa(t,r.x,s.x,o.x),fa(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends _r{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(fa(t,r.x,s.x,o.x),fa(t,r.y,s.y,o.y),fa(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ab extends _r{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(zp(a,c.x,l.x,u.x,d.x),zp(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Ot().fromArray(r))}return this}}var Cb=Object.freeze({__proto__:null,ArcCurve:db,CatmullRomCurve3:pb,CubicBezierCurve:Mb,CubicBezierCurve3:Eb,EllipseCurve:G0,LineCurve:bb,LineCurve3:Tb,QuadraticBezierCurve:wb,QuadraticBezierCurve3:id,SplineCurve:Ab});class Cc extends Wn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*h-o;for(let S=0;S<l;S++){const v=S*d-s;g.push(v,-x,0),_.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const S=x+l*m,v=x+l*(m+1),b=x+1+l*(m+1),T=x+1+l*m;f.push(S,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class rd extends Wn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new W,h=new W,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],S=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&c===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const T=b/e;d.x=-t*Math.cos(r+T*s)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(r+T*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(T+v,1-S),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const S=u[m][x+1],v=u[m][x],b=u[m+1][x],T=u[m+1][x+1];(m!==0||o>0)&&f.push(S,v,T),(m!==n-1||c<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sd extends Wn{constructor(t=new id(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new W,c=new W,l=new Ot;let u=new W;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(f,2));function _(){for(let S=0;S<e;S++)p(S);p(s===!1?e:0),x(),m()}function p(S){u=t.getPointAt(S/e,u);const v=o.normals[S],b=o.binormals[S];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);c.x=E*v.x+y*b.x,c.y=E*v.y+y*b.y,c.z=E*v.z+y*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let v=1;v<=r;v++){const b=(r+1)*(S-1)+(v-1),T=(r+1)*S+(v-1),w=(r+1)*S+v,y=(r+1)*(S-1)+v;g.push(b,T,y),g.push(T,w,y)}}function x(){for(let S=0;S<=e;S++)for(let v=0;v<=r;v++)l.x=S/e,l.y=v/r,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sd(new Cb[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Mo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function bn(i){const t={};for(let e=0;e<i.length;e++){const n=Mo(i[e]);for(const r in n)t[r]=n[r]}return t}function Rb(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function W0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const vc={clone:Mo,merge:bn};var Pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=Rb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lb extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kp extends wo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=L0,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ib extends wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nb extends wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class X0 extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const wu=new De,Vp=new W,Hp=new W;class Ub{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vp),Hp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hp),e.updateMatrixWorld(),wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Pa||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Al=new W,Cl=new To,Di=new W;class Y0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Al,Cl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Al,Cl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new W,Gp=new Ot,Wp=new Ot;class Qn extends Y0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rf*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wr.x,wr.y).multiplyScalar(-t/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-t/wr.z)}getViewSize(t,e){return this.getViewBounds(t,Gp,Wp),e.subVectors(Wp,Gp)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fb extends Ub{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ob extends X0{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Fb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class od extends Y0{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bb extends X0{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,Xs=1;class zb extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Ws,Xs,t,e);r.layers=this.layers,this.add(r);const s=new Qn(Ws,Xs,t,e);s.layers=this.layers,this.add(s);const o=new Qn(Ws,Xs,t,e);o.layers=this.layers,this.add(o);const a=new Qn(Ws,Xs,t,e);a.layers=this.layers,this.add(a);const c=new Qn(Ws,Xs,t,e);c.layers=this.layers,this.add(c);const l=new Qn(Ws,Xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class kb extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Vb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Hb.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Hb(){this._document.hidden===!1&&this.reset()}class Gb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xp(i,t,e,n){const r=Wb(n);switch(e){case R0:return i*t;case D0:return i*t/r.components*r.byteLength;case $f:return i*t/r.components*r.byteLength;case yo:return i*t*2/r.components*r.byteLength;case Kf:return i*t*2/r.components*r.byteLength;case P0:return i*t*3/r.components*r.byteLength;case Ci:return i*t*4/r.components*r.byteLength;case Zf:return i*t*4/r.components*r.byteLength;case Yl:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:case Ch:return Math.max(i,16)*Math.max(t,8)/4;case Th:case Ah:return Math.max(i,8)*Math.max(t,8)/2;case Rh:case Ph:case Lh:case Ih:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dh:case Nh:case Uh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $h:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zh:case Jh:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jh:case tf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ef:case nf:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wb(i){switch(i){case ei:case T0:return{byteLength:1,components:1};case Ca:case w0:case si:return{byteLength:2,components:1};case Yf:case qf:return{byteLength:2,components:4};case qi:case Xf:case zi:return{byteLength:4,components:1};case A0:case C0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q0(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Xb(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,N1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Yb,alphahash_pars_fragment:qb,alphamap_fragment:$b,alphamap_pars_fragment:Kb,alphatest_fragment:Zb,alphatest_pars_fragment:Jb,aomap_fragment:Qb,aomap_pars_fragment:jb,batching_pars_vertex:t1,batching_vertex:e1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:r1,iridescence_fragment:s1,bumpmap_pars_fragment:o1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:l1,clipping_planes_pars_vertex:c1,clipping_planes_vertex:u1,color_fragment:h1,color_pars_fragment:f1,color_pars_vertex:d1,color_vertex:p1,common:m1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:_1,displacementmap_pars_vertex:v1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:S1,colorspace_fragment:M1,colorspace_pars_fragment:E1,envmap_fragment:b1,envmap_common_pars_fragment:T1,envmap_pars_fragment:w1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:B1,envmap_vertex:C1,fog_vertex:R1,fog_pars_vertex:P1,fog_fragment:D1,fog_pars_fragment:L1,gradientmap_pars_fragment:I1,lightmap_pars_fragment:N1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:F1,lights_pars_begin:O1,lights_toon_fragment:z1,lights_toon_pars_fragment:k1,lights_phong_fragment:V1,lights_phong_pars_fragment:H1,lights_physical_fragment:G1,lights_physical_pars_fragment:W1,lights_fragment_begin:X1,lights_fragment_maps:Y1,lights_fragment_end:q1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:J1,map_fragment:Q1,map_pars_fragment:j1,map_particle_fragment:tT,map_particle_pars_fragment:eT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:aT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:hT,normal_pars_vertex:fT,normal_vertex:dT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:vT,opaque_fragment:xT,packing:yT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:bT,roughnessmap_fragment:TT,roughnessmap_pars_fragment:wT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:CT,shadowmap_vertex:RT,shadowmask_pars_fragment:PT,skinbase_vertex:DT,skinning_pars_vertex:LT,skinning_vertex:IT,skinnormal_vertex:NT,specularmap_fragment:UT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:BT,transmission_fragment:zT,transmission_pars_fragment:kT,uv_pars_fragment:VT,uv_pars_vertex:HT,uv_vertex:GT,worldpos_vertex:WT,background_vert:XT,background_frag:YT,backgroundCube_vert:qT,backgroundCube_frag:$T,cube_vert:KT,cube_frag:ZT,depth_vert:JT,depth_frag:QT,distance_vert:jT,distance_frag:tw,equirect_vert:ew,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:rw,meshbasic_vert:sw,meshbasic_frag:ow,meshlambert_vert:aw,meshlambert_frag:lw,meshmatcap_vert:cw,meshmatcap_frag:uw,meshnormal_vert:hw,meshnormal_frag:fw,meshphong_vert:dw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:_w,meshtoon_frag:vw,points_vert:xw,points_frag:yw,shadow_vert:Sw,shadow_frag:Mw,sprite_vert:Ew,sprite_frag:bw},Et={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ui={basic:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:bn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:bn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new he(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:bn([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:bn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:bn([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:bn([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:bn([Et.common,Et.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:bn([Et.lights,Et.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Ui.physical={uniforms:bn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Rl={r:0,b:0,g:0},ts=new $i,Tw=new De;function ww(i,t,e,n,r,s){const o=new he(0);let a=r===!0?0:1,c,l,u=null,d=0,h=null;function f(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const v=x.backgroundBlurriness>0;S=t.get(S,v)}return S}function g(x){let S=!1;const v=f(x);v===null?p(o,a):v&&v.isColor&&(p(v,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,S){const v=f(S);v&&(v.isCubeTexture||v.mapping===wc)?(l===void 0&&(l=new vi(new Ba(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Mo(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ts.copy(S.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(ts)),l.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vi(new Cc(2,2),new yn({name:"BackgroundMaterial",uniforms:Mo(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(Rl,W0(i)),e.buffers.color.setClear(Rl.r,Rl.g,Rl.b,S,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:_,dispose:m}}function Aw(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(P,F,k,R,N){let L=!1;const I=d(P,R,k,F);s!==I&&(s=I,l(s.object)),L=f(P,R,k,N),L&&g(P,R,k,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(P,F,k,R),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,F,k,R){const N=R.wireframe===!0;let L=n[F.id];L===void 0&&(L={},n[F.id]=L);const I=P.isInstancedMesh===!0?P.id:0;let q=L[I];q===void 0&&(q={},L[I]=q);let $=q[k.id];$===void 0&&($={},q[k.id]=$);let D=$[N];return D===void 0&&(D=h(c()),$[N]=D),D}function h(P){const F=[],k=[],R=[];for(let N=0;N<e;N++)F[N]=0,k[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:R,object:P,attributes:{},index:null}}function f(P,F,k,R){const N=s.attributes,L=F.attributes;let I=0;const q=k.getAttributes();for(const $ in q)if(q[$].location>=0){const st=N[$];let at=L[$];if(at===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),st===void 0||st.attribute!==at||at&&st.data!==at.data)return!0;I++}return s.attributesNum!==I||s.index!==R}function g(P,F,k,R){const N={},L=F.attributes;let I=0;const q=k.getAttributes();for(const $ in q)if(q[$].location>=0){let st=L[$];st===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));const at={};at.attribute=st,st&&st.data&&(at.data=st.data),N[$]=at,I++}s.attributes=N,s.attributesNum=I,s.index=R}function _(){const P=s.newAttributes;for(let F=0,k=P.length;F<k;F++)P[F]=0}function p(P){m(P,0)}function m(P,F){const k=s.newAttributes,R=s.enabledAttributes,N=s.attributeDivisors;k[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),N[P]!==F&&(i.vertexAttribDivisor(P,F),N[P]=F)}function x(){const P=s.newAttributes,F=s.enabledAttributes;for(let k=0,R=F.length;k<R;k++)F[k]!==P[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function S(P,F,k,R,N,L,I){I===!0?i.vertexAttribIPointer(P,F,k,N,L):i.vertexAttribPointer(P,F,k,R,N,L)}function v(P,F,k,R){_();const N=R.attributes,L=k.getAttributes(),I=F.defaultAttributeValues;for(const q in L){const $=L[q];if($.location>=0){let D=N[q];if(D===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(D=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(D=P.instanceColor)),D!==void 0){const st=D.normalized,at=D.itemSize,V=t.get(D);if(V===void 0)continue;const tt=V.buffer,ot=V.type,G=V.bytesPerElement,Q=ot===i.INT||ot===i.UNSIGNED_INT||D.gpuType===Xf;if(D.isInterleavedBufferAttribute){const j=D.data,ft=j.stride,gt=D.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<$.locationSize;Tt++)m($.location+Tt,j.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<$.locationSize;Tt++)p($.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Tt=0;Tt<$.locationSize;Tt++)S($.location+Tt,at/$.locationSize,ot,st,ft*G,(gt+at/$.locationSize*Tt)*G,Q)}else{if(D.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)m($.location+j,D.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let j=0;j<$.locationSize;j++)p($.location+j);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let j=0;j<$.locationSize;j++)S($.location+j,at/$.locationSize,ot,st,at*G,at/$.locationSize*j*G,Q)}}else if(I!==void 0){const st=I[q];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv($.location,st);break;case 3:i.vertexAttrib3fv($.location,st);break;case 4:i.vertexAttrib4fv($.location,st);break;default:i.vertexAttrib1fv($.location,st)}}}}x()}function b(){E();for(const P in n){const F=n[P];for(const k in F){const R=F[k];for(const N in R){const L=R[N];for(const I in L)u(L[I].object),delete L[I];delete R[N]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const k in F){const R=F[k];for(const N in R){const L=R[N];for(const I in L)u(L[I].object),delete L[I];delete R[N]}}delete n[P.id]}function w(P){for(const F in n){const k=n[F];for(const R in k){const N=k[R];if(N[P.id]===void 0)continue;const L=N[P.id];for(const I in L)u(L[I].object),delete L[I];delete N[P.id]}}}function y(P){for(const F in n){const k=n[F],R=P.isInstancedMesh===!0?P.id:0,N=k[R];if(N!==void 0){for(const L in N){const I=N[L];for(const q in I)u(I[q].object),delete I[q];delete N[L]}delete k[R],Object.keys(k).length===0&&delete n[F]}}}function E(){U(),o=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Cw(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rw(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Ci&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!y)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Pw(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ss,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const x=s?0:n,S=x*4;let v=m.clippingState||null;c.value=v,v=u(g,h,S,f);for(let b=0;b!==S;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Fr=4,Yp=[.125,.215,.35,.446,.526,.582],as=20,Dw=256,Bo=new od,qp=new he;let Au=null,Cu=0,Ru=0,Pu=!1;const Lw=new W;class $p{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Lw}=s;Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Au,Cu,Ru),this._renderer.xr.enabled=Pu,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Au=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:si,format:Ci,colorSpace:So,depthBuffer:!1},r=Kp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iw(s)),this._blurMaterial=Uw(s,t,e),this._ggxMaterial=Nw(s,t,e)}return r}_compileMaterial(t){const e=new vi(new Wn,t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,r,s){const c=new Qn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qp),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Ba,new td({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,m=!0):(p.color.copy(qp),m=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const b=this._cubeSize;Ys(r,v*b,S>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ts||t.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Fr?n-g+Fr:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Ys(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(a,Bo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ys(t,p,m,3*_,2*_),r.setRenderTarget(t),r.render(a,Bo)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ge("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*as-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):as;p>as&&Jt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);const m=[];let x=0;for(let w=0;w<as;++w){const y=w/_,E=Math.exp(-y*y/2);m.push(E),w===0?x+=E:w<p&&(x+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const v=this._sizeLods[r],b=3*v*(r>S-Fr?r-S+Fr:0),T=4*(this._cubeSize-v);Ys(e,b,T,3*v,2*v),c.setRenderTarget(e),c.render(d,Bo)}}function Iw(i){const t=[],e=[],n=[];let r=i;const s=i-Fr+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Fr?c=Yp[o-i+Fr-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*f),S=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,y=T>2?0:-1,E=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];x.set(E,_*g*T),S.set(h,p*g*T);const U=[T,T,T,T,T,T];v.set(U,m*g*T)}const b=new Wn;b.setAttribute("position",new Xi(x,_)),b.setAttribute("uv",new Xi(S,p)),b.setAttribute("faceIndex",new Xi(v,m)),n.push(new vi(b,null)),r>Fr&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Kp(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Nw(i,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Uw(i,t,e){const n=new Float32Array(as),r=new W(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Zp(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Jp(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $0 extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new V0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Gi});s.uniforms.tEquirect.value=e;const o=new vi(r,s),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=xn),new zb(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function Fw(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Zc||f===Jc)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new $0(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===Zc||f===Jc,_=f===Ts||f===xo;if(g||_){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new $p(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const x=h.image;return g&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new $p(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===Zc?h.mapping=Ts:f===Jc&&(h.mapping=xo),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Ow(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&_c("WebGLRenderer: "+n+" extension not supported."),r}}}function Bw(i,t,e,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let S=0,v=x.length;S<v;S+=3){const b=x[S+0],T=x[S+1],w=x[S+2];h.push(b,T,T,w,w,b)}}else{const x=g.array;_=g.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const b=S+0,T=S+1,w=S+2;h.push(b,T,T,w,w,b)}}const p=new(g.count>=65535?B0:O0)(h,1);p.version=_;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function zw(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(h,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x]*_[x];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function kw(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:ge("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Vw(i,t,e){const n=new WeakMap,r=new Fe;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let U=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",U)};var f=U;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let b=a.attributes.position.count*v,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*T*4*d),y=new N0(w,b,T,d);y.type=zi,y.needsUpdate=!0;const E=v*4;for(let P=0;P<d;P++){const F=m[P],k=x[P],R=S[P],N=b*T*4*P;for(let L=0;L<F.count;L++){const I=L*E;g===!0&&(r.fromBufferAttribute(F,L),w[N+I+0]=r.x,w[N+I+1]=r.y,w[N+I+2]=r.z,w[N+I+3]=0),_===!0&&(r.fromBufferAttribute(k,L),w[N+I+4]=r.x,w[N+I+5]=r.y,w[N+I+6]=r.z,w[N+I+7]=0),p===!0&&(r.fromBufferAttribute(R,L),w[N+I+8]=r.x,w[N+I+9]=r.y,w[N+I+10]=r.z,w[N+I+11]=R.itemSize===4?r.w:1)}}h={count:d,texture:y,size:new Ot(b,T)},n.set(a,h),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Hw(i,t,e,n,r){let s=new WeakMap;function o(l){const u=r.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const Gw={[v0]:"LINEAR_TONE_MAPPING",[Wf]:"REINHARD_TONE_MAPPING",[x0]:"CINEON_TONE_MAPPING",[y0]:"ACES_FILMIC_TONE_MAPPING",[M0]:"AGX_TONE_MAPPING",[E0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function Ww(i,t,e,n,r){const s=new Hn(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Hn(t,e,{type:si,depthBuffer:!1,stencilBuffer:!1}),a=new Wn;a.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rn([0,2,0,0,2,0],2));const c=new Lb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new vi(a,c),u=new od(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,p=[],m=!1;this.setSize=function(x,S){s.setSize(x,S),o.setSize(x,S);for(let v=0;v<p.length;v++){const b=p[v];b.setSize&&b.setSize(x,S)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const S=s.width,v=s.height;for(let b=0;b<p.length;b++){const T=p[b];T.setSize&&T.setSize(S,v)}},this.begin=function(x,S){if(f||x.toneMapping===Wi&&p.length===0)return!1;if(_=S,S!==null){const v=S.width,b=S.height;(s.width!==v||s.height!==b)&&this.setSize(v,b)}return m===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Wi,!0},this.hasRenderPass=function(){return m},this.end=function(x,S){x.toneMapping=g,f=!0;let v=s,b=o;for(let T=0;T<p.length;T++){const w=p[T];if(w.enabled!==!1&&(w.render(x,b,v,S),w.needsSwap!==!1)){const y=v;v=b,b=y}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,c.defines={},de.getTransfer(d)===ye&&(c.defines.SRGB_TRANSFER="");const T=Gw[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(l,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const K0=new Dn,of=new Da(1,1),Z0=new N0,J0=new qE,Q0=new V0,Qp=[],jp=[],tm=new Float32Array(16),em=new Float32Array(9),nm=new Float32Array(4);function Ao(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Qp[r];if(s===void 0&&(s=new Float32Array(r),Qp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pc(i,t){let e=jp[t];e===void 0&&(e=new Int32Array(t),jp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function qw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function $w(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function Kw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;nm.set(n),i.uniformMatrix2fv(this.addr,!1,nm),Je(e,n)}}function Zw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;em.set(n),i.uniformMatrix3fv(this.addr,!1,em),Je(e,n)}}function Jw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;tm.set(n),i.uniformMatrix4fv(this.addr,!1,tm),Je(e,n)}}function Qw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function tA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function eA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function nA(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function iA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function rA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function sA(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function oA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(of.compareFunction=e.isReversedDepthBuffer()?Qf:Jf,s=of):s=K0,e.setTexture2D(t||s,r)}function aA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||J0,r)}function lA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Q0,r)}function cA(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Z0,r)}function uA(i){switch(i){case 5126:return Xw;case 35664:return Yw;case 35665:return qw;case 35666:return $w;case 35674:return Kw;case 35675:return Zw;case 35676:return Jw;case 5124:case 35670:return Qw;case 35667:case 35671:return jw;case 35668:case 35672:return tA;case 35669:case 35673:return eA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}function hA(i,t){i.uniform1fv(this.addr,t)}function fA(i,t){const e=Ao(t,this.size,2);i.uniform2fv(this.addr,e)}function dA(i,t){const e=Ao(t,this.size,3);i.uniform3fv(this.addr,e)}function pA(i,t){const e=Ao(t,this.size,4);i.uniform4fv(this.addr,e)}function mA(i,t){const e=Ao(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gA(i,t){const e=Ao(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _A(i,t){const e=Ao(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vA(i,t){i.uniform1iv(this.addr,t)}function xA(i,t){i.uniform2iv(this.addr,t)}function yA(i,t){i.uniform3iv(this.addr,t)}function SA(i,t){i.uniform4iv(this.addr,t)}function MA(i,t){i.uniform1uiv(this.addr,t)}function EA(i,t){i.uniform2uiv(this.addr,t)}function bA(i,t){i.uniform3uiv(this.addr,t)}function TA(i,t){i.uniform4uiv(this.addr,t)}function wA(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=of:o=K0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function AA(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||J0,s[o])}function CA(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Q0,s[o])}function RA(i,t,e){const n=this.cache,r=t.length,s=Pc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Je(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Z0,s[o])}function PA(i){switch(i){case 5126:return hA;case 35664:return fA;case 35665:return dA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return yA;case 35669:case 35673:return SA;case 5125:return MA;case 36294:return EA;case 36295:return bA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return RA}}class DA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uA(e.type)}}class LA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=PA(e.type)}}class IA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function im(i,t){i.seq.push(t),i.map[t.id]=t}function NA(i,t,e){const n=i.name,r=n.length;for(Du.lastIndex=0;;){const s=Du.exec(n),o=Du.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){im(e,l===void 0?new DA(a,i,t):new LA(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new IA(a),im(e,d)),e=d}}}class Zl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);NA(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function rm(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const UA=37297;let FA=0;function OA(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sm=new re;function BA(i){de._getMatrix(sm,de.workingColorSpace,i);const t=`mat3( ${sm.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case mc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function om(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+OA(i.getShaderSource(t),a)}else return s}function zA(i,t){const e=BA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const kA={[v0]:"Linear",[Wf]:"Reinhard",[x0]:"Cineon",[y0]:"ACESFilmic",[M0]:"AgX",[E0]:"Neutral",[S0]:"Custom"};function VA(i,t){const e=kA[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pl=new W;function HA(){de.getLuminanceCoefficients(Pl);const i=Pl.x.toFixed(4),t=Pl.y.toFixed(4),e=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function WA(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function XA(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qo(i){return i!==""}function am(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(i){return i.replace(YA,$A)}const qA=new Map;function $A(i,t){let e=se[t];if(e===void 0){const n=qA.get(t);if(n!==void 0)e=se[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return af(e)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(i){return i.replace(KA,ZA)}function ZA(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function um(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const JA={[Xl]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function QA(i){return JA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jA={[Ts]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function tC(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const eC={[xo]:"ENVMAP_MODE_REFRACTION"};function nC(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":eC[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iC={[_0]:"ENVMAP_BLENDING_MULTIPLY",[wE]:"ENVMAP_BLENDING_MIX",[AE]:"ENVMAP_BLENDING_ADD"};function rC(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iC[i.combine]||"ENVMAP_BLENDING_NONE"}function sC(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function oC(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=QA(e),l=tC(e),u=nC(e),d=rC(e),h=sC(e),f=GA(e),g=WA(s),_=r.createProgram();let p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`)):(p=[um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),m=[um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?se.tonemapping_pars_fragment:"",e.toneMapping!==Wi?VA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,zA("linearToOutputTexel",e.outputColorSpace),HA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qo).join(`
`)),o=af(o),o=am(o,e),o=lm(o,e),a=af(a),a=am(a,e),a=lm(a,e),o=cm(o),a=cm(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=x+p+o,v=x+m+a,b=rm(r,r.VERTEX_SHADER,S),T=rm(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(b)||"",R=r.getShaderInfoLog(T)||"",N=F.trim(),L=k.trim(),I=R.trim();let q=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,T);else{const D=om(r,b,"vertex"),st=om(r,T,"fragment");ge("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+D+`
`+st)}else N!==""?Jt("WebGLProgram: Program Info Log:",N):(L===""||I==="")&&($=!1);$&&(P.diagnostics={runnable:q,programLog:N,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:m}})}r.deleteShader(b),r.deleteShader(T),y=new Zl(r,_),E=XA(r,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,UA)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FA++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let aC=0;class lC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cC(t),e.set(t,n)),n}}class cC{constructor(t){this.id=aC++,this.code=t,this.usedTimes=0}}function uC(i,t,e,n,r,s){const o=new U0,a=new lC,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,E,U,P,F){const k=P.fog,R=F.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I=t.get(y.envMap||N,L),q=I&&I.mapping===wc?I.image.height:null,$=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const D=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,st=D!==void 0?D.length:0;let at=0;R.morphAttributes.position!==void 0&&(at=1),R.morphAttributes.normal!==void 0&&(at=2),R.morphAttributes.color!==void 0&&(at=3);let V,tt,ot,G;if($){const wt=Ui[$];V=wt.vertexShader,tt=wt.fragmentShader}else V=y.vertexShader,tt=y.fragmentShader,a.update(y),ot=a.getVertexShaderID(y),G=a.getFragmentShaderID(y);const Q=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ft=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Tt=!!y.map,Qt=!!y.matcap,mt=!!I,Ut=!!y.aoMap,Yt=!!y.lightMap,kt=!!y.bumpMap,Y=!!y.normalMap,B=!!y.displacementMap,te=!!y.emissiveMap,qt=!!y.metalnessMap,Xt=!!y.roughnessMap,X=y.anisotropy>0,C=y.clearcoat>0,M=y.dispersion>0,z=y.iridescence>0,it=y.sheen>0,rt=y.transmission>0,et=X&&!!y.anisotropyMap,bt=C&&!!y.clearcoatMap,dt=C&&!!y.clearcoatNormalMap,Ft=C&&!!y.clearcoatRoughnessMap,At=z&&!!y.iridescenceMap,ct=z&&!!y.iridescenceThicknessMap,ht=it&&!!y.sheenColorMap,Rt=it&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,xt=!!y.specularColorMap,$t=!!y.specularIntensityMap,O=rt&&!!y.transmissionMap,pt=rt&&!!y.thicknessMap,ut=!!y.gradientMap,yt=!!y.alphaMap,lt=y.alphaTest>0,nt=!!y.alphaHash,Pt=!!y.extensions;let Gt=Wi;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const pe={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:tt,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:ft,instancingColor:ft&&F.instanceColor!==null,instancingMorph:ft&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:So,alphaToCoverage:!!y.alphaToCoverage,map:Tt,matcap:Qt,envMap:mt,envMapMode:mt&&I.mapping,envMapCubeUVHeight:q,aoMap:Ut,lightMap:Yt,bumpMap:kt,normalMap:Y,displacementMap:B,emissiveMap:te,normalMapObjectSpace:Y&&y.normalMapType===PE,normalMapTangentSpace:Y&&y.normalMapType===L0,metalnessMap:qt,roughnessMap:Xt,anisotropy:X,anisotropyMap:et,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ft,dispersion:M,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:ct,sheen:it,sheenColorMap:ht,sheenRoughnessMap:Rt,specularMap:Dt,specularColorMap:xt,specularIntensityMap:$t,transmission:rt,transmissionMap:O,thicknessMap:pt,gradientMap:ut,opaque:y.transparent===!1&&y.blending===oo&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:lt,alphaHash:nt,combine:y.combine,mapUv:Tt&&g(y.map.channel),aoMapUv:Ut&&g(y.aoMap.channel),lightMapUv:Yt&&g(y.lightMap.channel),bumpMapUv:kt&&g(y.bumpMap.channel),normalMapUv:Y&&g(y.normalMap.channel),displacementMapUv:B&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:qt&&g(y.metalnessMap.channel),roughnessMapUv:Xt&&g(y.roughnessMap.channel),anisotropyMapUv:et&&g(y.anisotropyMap.channel),clearcoatMapUv:bt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(y.sheenRoughnessMap.channel),specularMapUv:Dt&&g(y.specularMap.channel),specularColorMapUv:xt&&g(y.specularColorMap.channel),specularIntensityMapUv:$t&&g(y.specularIntensityMap.channel),transmissionMapUv:O&&g(y.transmissionMap.channel),thicknessMapUv:pt&&g(y.thicknessMap.channel),alphaMapUv:yt&&g(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Y||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(Tt||yt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&Y===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:F.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Tt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ar,flipSided:y.side===Vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&y.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(m(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const E=f[y.type];let U;if(E){const P=Ui[E];U=vc.clone(P.uniforms)}else U=y.uniforms;return U}function v(y,E){let U=u.get(E);return U!==void 0?++U.usedTimes:(U=new oC(i,E,y,r),l.push(U),u.set(E,U)),U}function b(y){if(--y.usedTimes===0){const E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:w}}function hC(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fC(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fm(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,p,m){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},i[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=g,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=p,x.group=m),t++,x}function c(h,f,g,_,p,m){const x=a(h,f,g,_,p,m);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):e.push(x)}function l(h,f,g,_,p,m){const x=a(h,f,g,_,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function u(h,f){e.length>1&&e.sort(h||fC),n.length>1&&n.sort(f||hm),r.length>1&&r.sort(f||hm)}function d(){for(let h=t,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function dC(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new fm,i.set(n,[o])):r>=s.length?(o=new fm,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pC(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new he};break;case"SpotLight":e={position:new W,direction:new W,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function mC(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gC=0;function _C(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vC(i){const t=new pC,e=mC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const r=new W,s=new De,o=new De;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,x=0,S=0,v=0,b=0,T=0,w=0;l.sort(_C);for(let E=0,U=l.length;E<U;E++){const P=l[E],F=P.color,k=P.intensity,R=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===yo?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*k,d+=F.g*k,h+=F.b*k;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],k);w++}else if(P.isDirectionalLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,q=e.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=L,f++}else if(P.isSpotLight){const L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(F).multiplyScalar(k),L.distance=R,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[_]=L;const I=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,I.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=I.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=N,v++}_++}else if(P.isRectAreaLight){const L=t.get(P);L.color.copy(F).multiplyScalar(k),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=L,p++}else if(P.isPointLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){const I=P.shadow,q=e.get(P);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,q.shadowCameraNear=I.camera.near,q.shadowCameraFar=I.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=L,g++}else if(P.isHemisphereLight){const L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(k),L.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[m]=L,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==v||y.numSpotMaps!==b||y.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,y.directionalLength=f,y.pointLength=g,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=v,y.numSpotMaps=b,y.numLightProbes=w,n.version=gC++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const S=l[m];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function dm(i){const t=new vC(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function xC(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new dm(i),t.set(r,[a])):s>=o.length?(a=new dm(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MC=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],EC=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],pm=new De,zo=new W,Lu=new W;function bC(i,t,e){let n=new ed;const r=new Ot,s=new Ot,o=new Fe,a=new Ib,c=new Nb,l={},u=e.maxTextureSize,d={[Wr]:Vn,[Vn]:Wr,[ar]:ar},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:yC,fragmentShader:SC}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vi(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let m=this.type;this.render=function(T,w,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===aE&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const E=i.getRenderTarget(),U=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(N=>N.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,N=T.length;R<N;R++){const L=T[R],I=L.shadow;if(I===void 0){Jt("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();r.multiply(q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,I.mapSize.y=s.y));const $=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=$,I.map===null||k===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Jo){if(L.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Hn(r.x,r.y,{format:yo,type:si,minFilter:xn,magFilter:xn,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new Da(r.x,r.y,zi),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=gr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ln,I.map.depthTexture.magFilter=ln}else L.isPointLight?(I.map=new $0(r.x),I.map.depthTexture=new fb(r.x,qi)):(I.map=new Hn(r.x,r.y),I.map.depthTexture=new Da(r.x,r.y,qi)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=gr,this.type===Xl?(I.map.depthTexture.compareFunction=$?Qf:Jf,I.map.depthTexture.minFilter=xn,I.map.depthTexture.magFilter=xn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ln,I.map.depthTexture.magFilter=ln);I.camera.updateProjectionMatrix()}const D=I.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<D;st++){if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,st),i.clear();else{st===0&&(i.setRenderTarget(I.map),i.clear());const at=I.getViewport(st);o.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),F.viewport(o)}if(L.isPointLight){const at=I.camera,V=I.matrix,tt=L.distance||at.far;tt!==at.far&&(at.far=tt,at.updateProjectionMatrix()),zo.setFromMatrixPosition(L.matrixWorld),at.position.copy(zo),Lu.copy(at.position),Lu.add(MC[st]),at.up.copy(EC[st]),at.lookAt(Lu),at.updateMatrixWorld(),V.makeTranslation(-zo.x,-zo.y,-zo.z),pm.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),I._frustum.setFromProjectionMatrix(pm,at.coordinateSystem,at.reversedDepth)}else I.updateMatrices(L);n=I.getFrustum(),v(w,y,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===Jo&&x(I,y),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,U,P)};function x(T,w){const y=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hn(r.x,r.y,{format:yo,type:si})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,y,f,_,null)}function S(T,w,y,E){let U=null;const P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)U=P;else if(U=y.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=U.uuid,k=w.uuid;let R=l[F];R===void 0&&(R={},l[F]=R);let N=R[k];N===void 0&&(N=U.clone(),R[k]=N,w.addEventListener("dispose",b)),U=N}if(U.visible=w.visible,U.wireframe=w.wireframe,E===Jo?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:d[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=i.properties.get(U);F.light=y}return U}function v(T,w,y,E,U){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Jo)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const k=t.update(T),R=T.material;if(Array.isArray(R)){const N=k.groups;for(let L=0,I=N.length;L<I;L++){const q=N[L],$=R[q.materialIndex];if($&&$.visible){const D=S(T,$,E,U);T.onBeforeShadow(i,T,w,y,k,D,q),i.renderBufferDirect(y,null,k,D,T,q),T.onAfterShadow(i,T,w,y,k,D,q)}}}else if(R.visible){const N=S(T,R,E,U);T.onBeforeShadow(i,T,w,y,k,N,null),i.renderBufferDirect(y,null,k,N,T,null),T.onAfterShadow(i,T,w,y,k,N,null)}}const F=T.children;for(let k=0,R=F.length;k<R;k++)v(F[k],w,y,E,U)}function b(T){T.target.removeEventListener("dispose",b);for(const y in l){const E=l[y],U=T.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function TC(i,t){function e(){let O=!1;const pt=new Fe;let ut=null;const yt=new Fe(0,0,0,0);return{setMask:function(lt){ut!==lt&&!O&&(i.colorMask(lt,lt,lt,lt),ut=lt)},setLocked:function(lt){O=lt},setClear:function(lt,nt,Pt,Gt,pe){pe===!0&&(lt*=Gt,nt*=Gt,Pt*=Gt),pt.set(lt,nt,Pt,Gt),yt.equals(pt)===!1&&(i.clearColor(lt,nt,Pt,Gt),yt.copy(pt))},reset:function(){O=!1,ut=null,yt.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,ut=null,yt=null,lt=null;return{setReversed:function(nt){if(pt!==nt){const Pt=t.get("EXT_clip_control");nt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;const Gt=lt;lt=null,this.setClear(Gt)}},getReversed:function(){return pt},setTest:function(nt){nt?Q(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(nt){ut!==nt&&!O&&(i.depthMask(nt),ut=nt)},setFunc:function(nt){if(pt&&(nt=kE[nt]),yt!==nt){switch(nt){case gh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case vh:i.depthFunc(i.LESS);break;case vo:i.depthFunc(i.LEQUAL);break;case xh:i.depthFunc(i.EQUAL);break;case yh:i.depthFunc(i.GEQUAL);break;case Sh:i.depthFunc(i.GREATER);break;case Mh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=nt}},setLocked:function(nt){O=nt},setClear:function(nt){lt!==nt&&(lt=nt,pt&&(nt=1-nt),i.clearDepth(nt))},reset:function(){O=!1,ut=null,yt=null,lt=null,pt=!1}}}function r(){let O=!1,pt=null,ut=null,yt=null,lt=null,nt=null,Pt=null,Gt=null,pe=null;return{setTest:function(wt){O||(wt?Q(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(wt){pt!==wt&&!O&&(i.stencilMask(wt),pt=wt)},setFunc:function(wt,Bt,ie){(ut!==wt||yt!==Bt||lt!==ie)&&(i.stencilFunc(wt,Bt,ie),ut=wt,yt=Bt,lt=ie)},setOp:function(wt,Bt,ie){(nt!==wt||Pt!==Bt||Gt!==ie)&&(i.stencilOp(wt,Bt,ie),nt=wt,Pt=Bt,Gt=ie)},setLocked:function(wt){O=wt},setClear:function(wt){pe!==wt&&(i.clearStencil(wt),pe=wt)},reset:function(){O=!1,pt=null,ut=null,yt=null,lt=null,nt=null,Pt=null,Gt=null,pe=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,x=null,S=null,v=null,b=null,T=null,w=new he(0,0,0),y=0,E=!1,U=null,P=null,F=null,k=null,R=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),L=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),L=I>=2);let $=null,D={};const st=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),V=new Fe().fromArray(st),tt=new Fe().fromArray(at);function ot(O,pt,ut,yt){const lt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(O,nt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<ut;Pt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(pt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return nt}const G={};G[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(vo),kt(!1),Y(mp),Q(i.CULL_FACE),Ut(Gi);function Q(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function j(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ft(O,pt){return d[O]!==pt?(i.bindFramebuffer(O,pt),d[O]=pt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function gt(O,pt){let ut=f,yt=!1;if(O){ut=h.get(pt),ut===void 0&&(ut=[],h.set(pt,ut));const lt=O.textures;if(ut.length!==lt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Pt=lt.length;nt<Pt;nt++)ut[nt]=i.COLOR_ATTACHMENT0+nt;ut.length=lt.length,yt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ut)}function Tt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Qt={[os]:i.FUNC_ADD,[cE]:i.FUNC_SUBTRACT,[uE]:i.FUNC_REVERSE_SUBTRACT};Qt[hE]=i.MIN,Qt[fE]=i.MAX;const mt={[dE]:i.ZERO,[pE]:i.ONE,[mE]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[SE]:i.SRC_ALPHA_SATURATE,[xE]:i.DST_COLOR,[_E]:i.DST_ALPHA,[gE]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[yE]:i.ONE_MINUS_DST_COLOR,[vE]:i.ONE_MINUS_DST_ALPHA,[ME]:i.CONSTANT_COLOR,[EE]:i.ONE_MINUS_CONSTANT_COLOR,[bE]:i.CONSTANT_ALPHA,[TE]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(O,pt,ut,yt,lt,nt,Pt,Gt,pe,wt){if(O===Gi){_===!0&&(j(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),O!==lE){if(O!==p||wt!==E){if((m!==os||v!==os)&&(i.blendEquation(i.FUNC_ADD),m=os,v=os),wt)switch(O){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFunc(i.ONE,i.ONE);break;case gp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _p:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ge("WebGLState: Invalid blending: ",O);break}else switch(O){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gp:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _p:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",O);break}x=null,S=null,b=null,T=null,w.set(0,0,0),y=0,p=O,E=wt}return}lt=lt||pt,nt=nt||ut,Pt=Pt||yt,(pt!==m||lt!==v)&&(i.blendEquationSeparate(Qt[pt],Qt[lt]),m=pt,v=lt),(ut!==x||yt!==S||nt!==b||Pt!==T)&&(i.blendFuncSeparate(mt[ut],mt[yt],mt[nt],mt[Pt]),x=ut,S=yt,b=nt,T=Pt),(Gt.equals(w)===!1||pe!==y)&&(i.blendColor(Gt.r,Gt.g,Gt.b,pe),w.copy(Gt),y=pe),p=O,E=!1}function Yt(O,pt){O.side===ar?j(i.CULL_FACE):Q(i.CULL_FACE);let ut=O.side===Vn;pt&&(ut=!ut),kt(ut),O.blending===oo&&O.transparent===!1?Ut(Gi):Ut(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const yt=O.stencilWrite;a.setTest(yt),yt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function Y(O){O!==sE?(Q(i.CULL_FACE),O!==P&&(O===mp?i.cullFace(i.BACK):O===oE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),P=O}function B(O){O!==F&&(L&&i.lineWidth(O),F=O)}function te(O,pt,ut){O?(Q(i.POLYGON_OFFSET_FILL),(k!==pt||R!==ut)&&(k=pt,R=ut,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,ut))):j(i.POLYGON_OFFSET_FILL)}function qt(O){O?Q(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Xt(O){O===void 0&&(O=i.TEXTURE0+N-1),$!==O&&(i.activeTexture(O),$=O)}function X(O,pt,ut){ut===void 0&&($===null?ut=i.TEXTURE0+N-1:ut=$);let yt=D[ut];yt===void 0&&(yt={type:void 0,texture:void 0},D[ut]=yt),(yt.type!==O||yt.texture!==pt)&&($!==ut&&(i.activeTexture(ut),$=ut),i.bindTexture(O,pt||G[O]),yt.type=O,yt.texture=pt)}function C(){const O=D[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function it(){try{i.texSubImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function rt(){try{i.texSubImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function dt(){try{i.texStorage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function Ft(){try{i.texStorage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function At(){try{i.texImage2D(...arguments)}catch(O){ge("WebGLState:",O)}}function ct(){try{i.texImage3D(...arguments)}catch(O){ge("WebGLState:",O)}}function ht(O){V.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),V.copy(O))}function Rt(O){tt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Dt(O,pt){let ut=l.get(pt);ut===void 0&&(ut=new WeakMap,l.set(pt,ut));let yt=ut.get(O);yt===void 0&&(yt=i.getUniformBlockIndex(pt,O.name),ut.set(O,yt))}function xt(O,pt){const yt=l.get(pt).get(O);c.get(pt)!==yt&&(i.uniformBlockBinding(pt,yt,O.__bindingPointIndex),c.set(pt,yt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,D={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,x=null,S=null,v=null,b=null,T=null,w=new he(0,0,0),y=0,E=!1,U=null,P=null,F=null,k=null,R=null,V.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:j,bindFramebuffer:ft,drawBuffers:gt,useProgram:Tt,setBlending:Ut,setMaterial:Yt,setFlipSided:kt,setCullFace:Y,setLineWidth:B,setPolygonOffset:te,setScissorTest:qt,activeTexture:Xt,bindTexture:X,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:At,texImage3D:ct,updateUBOMapping:Dt,uniformBlockBinding:xt,texStorage2D:dt,texStorage3D:Ft,texSubImage2D:it,texSubImage3D:rt,compressedTexSubImage2D:et,compressedTexSubImage3D:bt,scissor:ht,viewport:Rt,reset:$t}}function wC(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):gc("canvas")}function _(C,M,z){let it=1;const rt=X(C);if((rt.width>z||rt.height>z)&&(it=z/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(it*rt.width),bt=Math.floor(it*rt.height);d===void 0&&(d=g(et,bt));const dt=M?g(et,bt):d;return dt.width=et,dt.height=bt,dt.getContext("2d").drawImage(C,0,0,et,bt),Jt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+bt+")."),dt}else return"data"in C&&Jt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,M,z,it,rt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=M;if(M===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),M===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGB8UI),z===i.UNSIGNED_SHORT&&(et=i.RGB16UI),z===i.UNSIGNED_INT&&(et=i.RGB32UI),z===i.BYTE&&(et=i.RGB8I),z===i.SHORT&&(et=i.RGB16I),z===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),z===i.UNSIGNED_INT&&(et=i.RGBA32UI),z===i.BYTE&&(et=i.RGBA8I),z===i.SHORT&&(et=i.RGBA16I),z===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){const bt=rt?mc:de.getTransfer(it);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=bt===ye?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(C,M){let z;return C?M===null||M===qi||M===Ra?z=i.DEPTH24_STENCIL8:M===zi?z=i.DEPTH32F_STENCIL8:M===Ca&&(z=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qi||M===Ra?z=i.DEPTH_COMPONENT24:M===zi?z=i.DEPTH_COMPONENT32F:M===Ca&&(z=i.DEPTH_COMPONENT16),z}function b(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){const M=C.target;M.removeEventListener("dispose",T),y(M),M.isVideoTexture&&u.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),U(M)}function y(C){const M=n.get(C);if(M.__webglInit===void 0)return;const z=C.source,it=h.get(z);if(it){const rt=it[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(C),Object.keys(it).length===0&&h.delete(z)}n.remove(C)}function E(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const z=C.source,it=h.get(z);delete it[M.__cacheKey],o.memory.textures--}function U(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let rt=0;rt<M.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)i.deleteFramebuffer(M.__webglFramebuffer[it]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=C.textures;for(let it=0,rt=z.length;it<rt;it++){const et=n.get(z[it]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(z[it])}n.remove(C)}let P=0;function F(){P=0}function k(){const C=P;return C>=r.maxTextures&&Jt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function R(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function N(C,M){const z=n.get(C);if(C.isVideoTexture&&qt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const it=C.image;if(it===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function L(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){G(z,C,M);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function I(C,M){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){G(z,C,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function q(C,M){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Q(z,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const $={[Eh]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[bh]:i.MIRRORED_REPEAT},D={[ln]:i.NEAREST,[CE]:i.NEAREST_MIPMAP_NEAREST,[sl]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},st={[DE]:i.NEVER,[FE]:i.ALWAYS,[LE]:i.LESS,[Jf]:i.LEQUAL,[IE]:i.EQUAL,[Qf]:i.GEQUAL,[NE]:i.GREATER,[UE]:i.NOTEQUAL};function at(C,M){if(M.type===zi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===Qc||M.magFilter===sl||M.magFilter===hs||M.minFilter===xn||M.minFilter===Qc||M.minFilter===sl||M.minFilter===hs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,$[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,D[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==sl&&M.minFilter!==hs||M.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function V(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const it=M.source;let rt=h.get(it);rt===void 0&&(rt={},h.set(it,rt));const et=R(M);if(et!==C.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),rt[et].usedTimes++;const bt=rt[C.__cacheKey];bt!==void 0&&(rt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&E(M)),C.__cacheKey=et,C.__webglTexture=rt[et].texture}return z}function tt(C,M,z){return Math.floor(Math.floor(C/z)/M)}function ot(C,M,z,it){const et=C.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,it,M.data);else{et.sort((ct,ht)=>ct.start-ht.start);let bt=0;for(let ct=1;ct<et.length;ct++){const ht=et[bt],Rt=et[ct],Dt=ht.start+ht.count,xt=tt(Rt.start,M.width,4),$t=tt(ht.start,M.width,4);Rt.start<=Dt+1&&xt===$t&&tt(Rt.start+Rt.count-1,M.width,4)===xt?ht.count=Math.max(ht.count,Rt.start+Rt.count-ht.start):(++bt,et[bt]=Rt)}et.length=bt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Ft=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ct=0,ht=et.length;ct<ht;ct++){const Rt=et[ct],Dt=Math.floor(Rt.start/4),xt=Math.ceil(Rt.count/4),$t=Dt%M.width,O=Math.floor(Dt/M.width),pt=xt,ut=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,$t,O,pt,ut,z,it,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function G(C,M,z){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const rt=V(C,M),et=M.source;e.bindTexture(it,C.__webglTexture,i.TEXTURE0+z);const bt=n.get(et);if(et.version!==bt.__version||rt===!0){e.activeTexture(i.TEXTURE0+z);const dt=de.getPrimaries(de.workingColorSpace),Ft=M.colorSpace===Rr?null:de.getPrimaries(M.colorSpace),At=M.colorSpace===Rr||dt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let ct=_(M.image,!1,r.maxTextureSize);ct=Xt(M,ct);const ht=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let Dt=S(M.internalFormat,ht,Rt,M.colorSpace,M.isVideoTexture);at(it,M);let xt;const $t=M.mipmaps,O=M.isVideoTexture!==!0,pt=bt.__version===void 0||rt===!0,ut=et.dataReady,yt=b(M,ct);if(M.isDepthTexture)Dt=v(M.format===fs,M.type),pt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Dt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ct.width,ct.height,0,ht,Rt,null));else if(M.isDataTexture)if($t.length>0){O&&pt&&e.texStorage2D(i.TEXTURE_2D,yt,Dt,$t[0].width,$t[0].height);for(let lt=0,nt=$t.length;lt<nt;lt++)xt=$t[lt],O?ut&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,ht,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,xt.width,xt.height,0,ht,Rt,xt.data);M.generateMipmaps=!1}else O?(pt&&e.texStorage2D(i.TEXTURE_2D,yt,Dt,ct.width,ct.height),ut&&ot(M,ct,ht,Rt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ct.width,ct.height,0,ht,Rt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Dt,$t[0].width,$t[0].height,ct.depth);for(let lt=0,nt=$t.length;lt<nt;lt++)if(xt=$t[lt],M.format!==Ci)if(ht!==null)if(O){if(ut)if(M.layerUpdates.size>0){const Pt=Xp(xt.width,xt.height,M.format,M.type);for(const Gt of M.layerUpdates){const pe=xt.data.subarray(Gt*Pt/xt.data.BYTES_PER_ELEMENT,(Gt+1)*Pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Gt,xt.width,xt.height,1,ht,pe)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,ht,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,xt.width,xt.height,ct.depth,0,xt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,xt.width,xt.height,ct.depth,ht,Rt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,xt.width,xt.height,ct.depth,0,ht,Rt,xt.data)}else{O&&pt&&e.texStorage2D(i.TEXTURE_2D,yt,Dt,$t[0].width,$t[0].height);for(let lt=0,nt=$t.length;lt<nt;lt++)xt=$t[lt],M.format!==Ci?ht!==null?O?ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,ht,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Dt,xt.width,xt.height,0,xt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ut&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt.width,xt.height,ht,Rt,xt.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,xt.width,xt.height,0,ht,Rt,xt.data)}else if(M.isDataArrayTexture)if(O){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Dt,ct.width,ct.height,ct.depth),ut)if(M.layerUpdates.size>0){const lt=Xp(ct.width,ct.height,M.format,M.type);for(const nt of M.layerUpdates){const Pt=ct.data.subarray(nt*lt/ct.data.BYTES_PER_ELEMENT,(nt+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ct.width,ct.height,1,ht,Rt,Pt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,ht,Rt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ct.width,ct.height,ct.depth,0,ht,Rt,ct.data);else if(M.isData3DTexture)O?(pt&&e.texStorage3D(i.TEXTURE_3D,yt,Dt,ct.width,ct.height,ct.depth),ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,ht,Rt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ct.width,ct.height,ct.depth,0,ht,Rt,ct.data);else if(M.isFramebufferTexture){if(pt)if(O)e.texStorage2D(i.TEXTURE_2D,yt,Dt,ct.width,ct.height);else{let lt=ct.width,nt=ct.height;for(let Pt=0;Pt<yt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Dt,lt,nt,0,ht,Rt,null),lt>>=1,nt>>=1}}else if($t.length>0){if(O&&pt){const lt=X($t[0]);e.texStorage2D(i.TEXTURE_2D,yt,Dt,lt.width,lt.height)}for(let lt=0,nt=$t.length;lt<nt;lt++)xt=$t[lt],O?ut&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,ht,Rt,xt):e.texImage2D(i.TEXTURE_2D,lt,Dt,ht,Rt,xt);M.generateMipmaps=!1}else if(O){if(pt){const lt=X(ct);e.texStorage2D(i.TEXTURE_2D,yt,Dt,lt.width,lt.height)}ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Rt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Dt,ht,Rt,ct);p(M)&&m(it),bt.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Q(C,M,z){if(M.image.length!==6)return;const it=V(C,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const et=n.get(rt);if(rt.version!==et.__version||it===!0){e.activeTexture(i.TEXTURE0+z);const bt=de.getPrimaries(de.workingColorSpace),dt=M.colorSpace===Rr?null:de.getPrimaries(M.colorSpace),Ft=M.colorSpace===Rr||bt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const At=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!At&&!ct?ht[nt]=_(M.image[nt],!0,r.maxCubemapSize):ht[nt]=ct?M.image[nt].image:M.image[nt],ht[nt]=Xt(M,ht[nt]);const Rt=ht[0],Dt=s.convert(M.format,M.colorSpace),xt=s.convert(M.type),$t=S(M.internalFormat,Dt,xt,M.colorSpace),O=M.isVideoTexture!==!0,pt=et.__version===void 0||it===!0,ut=rt.dataReady;let yt=b(M,Rt);at(i.TEXTURE_CUBE_MAP,M);let lt;if(At){O&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,Rt.width,Rt.height);for(let nt=0;nt<6;nt++){lt=ht[nt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){const Gt=lt[Pt];M.format!==Ci?Dt!==null?O?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,Gt.width,Gt.height,Dt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,$t,Gt.width,Gt.height,0,Gt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,Gt.width,Gt.height,Dt,xt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,$t,Gt.width,Gt.height,0,Dt,xt,Gt.data)}}}else{if(lt=M.mipmaps,O&&pt){lt.length>0&&yt++;const nt=X(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,$t,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ct){O?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,Dt,xt,ht[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,ht[nt].width,ht[nt].height,0,Dt,xt,ht[nt].data);for(let Pt=0;Pt<lt.length;Pt++){const pe=lt[Pt].image[nt].image;O?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,pe.width,pe.height,Dt,xt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,$t,pe.width,pe.height,0,Dt,xt,pe.data)}}else{O?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Dt,xt,ht[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,Dt,xt,ht[nt]);for(let Pt=0;Pt<lt.length;Pt++){const Gt=lt[Pt];O?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,Dt,xt,Gt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,$t,Dt,xt,Gt.image[nt])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),et.__version=rt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,z,it,rt,et){const bt=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),Ft=S(z.internalFormat,bt,dt,z.colorSpace),At=n.get(M),ct=n.get(z);if(ct.__renderTarget=M,!At.__hasExternalTextures){const ht=Math.max(1,M.width>>et),Rt=Math.max(1,M.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,Ft,ht,Rt,M.depth,0,bt,dt,null):e.texImage2D(rt,et,Ft,ht,Rt,0,bt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),te(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,ct.__webglTexture,0,B(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const it=M.depthTexture,rt=it&&it.isDepthTexture?it.type:null,et=v(M.stencilBuffer,rt),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),et,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,C)}else{const it=M.textures;for(let rt=0;rt<it.length;rt++){const et=it[rt],bt=s.convert(et.format,et.colorSpace),dt=s.convert(et.type),Ft=S(et.internalFormat,bt,dt,et.colorSpace);te(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(M),Ft,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(M),Ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(C,M,z){const it=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(M.depthTexture);if(rt.__renderTarget=M,(!rt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),it){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),at(i.TEXTURE_CUBE_MAP,M.depthTexture);const At=s.convert(M.depthTexture.format),ct=s.convert(M.depthTexture.type);let ht;M.depthTexture.format===gr?ht=i.DEPTH_COMPONENT24:M.depthTexture.format===fs&&(ht=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,ht,M.width,M.height,0,At,ct,null)}}else N(M.depthTexture,0);const et=rt.__webglTexture,bt=B(M),dt=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ft=M.depthTexture.format===fs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===gr)te(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ft,dt,et,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Ft,dt,et,0);else if(M.depthTexture.format===fs)te(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ft,dt,et,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,Ft,dt,et,0);else throw new Error("Unknown depthTexture format")}function Tt(C){const M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=it}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)gt(M.__webglFramebuffer[it],C,it);else{const it=C.texture.mipmaps;it&&it.length>0?gt(M.__webglFramebuffer[0],C,0):gt(M.__webglFramebuffer,C,0)}else if(z){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[it],C,!1);else{const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else{const it=C.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(C,M,z){const it=n.get(C);M!==void 0&&j(it.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Tt(C)}function mt(C){const M=C.texture,z=n.get(C),it=n.get(M);C.addEventListener("dispose",w);const rt=C.textures,et=C.isWebGLCubeRenderTarget===!0,bt=rt.length>1;if(bt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,o.memory.textures++),et){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Ft=0;Ft<M.mipmaps.length;Ft++)z.__webglFramebuffer[dt][Ft]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let dt=0,Ft=rt.length;dt<Ft;dt++){const At=n.get(rt[dt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&te(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const Ft=rt[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const At=s.convert(Ft.format,Ft.colorSpace),ct=s.convert(Ft.type),ht=S(Ft.internalFormat,At,ct,Ft.colorSpace,C.isXRRenderTarget===!0),Rt=B(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ht,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),at(i.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)j(z.__webglFramebuffer[dt][Ft],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft);else j(z.__webglFramebuffer[dt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,Ft=rt.length;dt<Ft;dt++){const At=rt[dt],ct=n.get(At);let ht=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,ct.__webglTexture),at(ht,At),j(z.__webglFramebuffer,C,At,i.COLOR_ATTACHMENT0+dt,ht,0),p(At)&&m(ht)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,it.__webglTexture),at(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let Ft=0;Ft<M.mipmaps.length;Ft++)j(z.__webglFramebuffer[Ft],C,M,i.COLOR_ATTACHMENT0,dt,Ft);else j(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,dt,0);p(M)&&m(dt),e.unbindTexture()}C.depthBuffer&&Tt(C)}function Ut(C){const M=C.textures;for(let z=0,it=M.length;z<it;z++){const rt=M[z];if(p(rt)){const et=x(C),bt=n.get(rt).__webglTexture;e.bindTexture(et,bt),m(et),e.unbindTexture()}}}const Yt=[],kt=[];function Y(C){if(C.samples>0){if(te(C)===!1){const M=C.textures,z=C.width,it=C.height;let rt=i.COLOR_BUFFER_BIT;const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(C),dt=M.length>1;if(dt)for(let At=0;At<M.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Ft=C.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let At=0;At<M.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const ct=n.get(M[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,it,0,0,z,it,rt,i.NEAREST),c===!0&&(Yt.length=0,kt.length=0,Yt.push(i.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Yt.push(et),kt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<M.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,bt.__webglColorRenderbuffer[At]);const ct=n.get(M[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function B(C){return Math.min(r.maxSamples,C.samples)}function te(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function qt(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Xt(C,M){const z=C.colorSpace,it=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==So&&z!==Rr&&(de.getTransfer(z)===ye?(it!==Ci||rt!==ei)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",z)),M}function X(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=N,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=Qt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function AC(i,t){function e(n,r=Rr){let s;const o=de.getTransfer(r);if(n===ei)return i.UNSIGNED_BYTE;if(n===Yf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===A0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===C0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===T0)return i.BYTE;if(n===w0)return i.SHORT;if(n===Ca)return i.UNSIGNED_SHORT;if(n===Xf)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===R0)return i.ALPHA;if(n===P0)return i.RGB;if(n===Ci)return i.RGBA;if(n===gr)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===D0)return i.RED;if(n===$f)return i.RED_INTEGER;if(n===yo)return i.RG;if(n===Kf)return i.RG_INTEGER;if(n===Zf)return i.RGBA_INTEGER;if(n===Yl||n===ql||n===$l||n===Kl)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Th||n===wh||n===Ah||n===Ch)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rh||n===Ph||n===Dh||n===Lh||n===Ih||n===Nh||n===Uh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rh||n===Ph)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lh)return s.COMPRESSED_R11_EAC;if(n===Ih)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nh)return s.COMPRESSED_RG11_EAC;if(n===Uh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fh||n===Oh||n===Bh||n===zh||n===kh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===$h||n===Kh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$h)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kh)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zh||n===Jh||n===Qh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Zh)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===tf||n===ef||n===nf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===jh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ef)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ra?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const CC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new H0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:CC,fragmentShader:RC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vi(new Cc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DC extends bo{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new PC,m={},x=e.getContextAttributes();let S=null,v=null;const b=[],T=[],w=new Ot;let y=null;const E=new Qn;E.viewport=new Fe;const U=new Qn;U.viewport=new Fe;const P=[E,U],F=new kb;let k=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=b[G];return Q===void 0&&(Q=new ou,b[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=b[G];return Q===void 0&&(Q=new ou,b[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=b[G];return Q===void 0&&(Q=new ou,b[G]=Q),Q.getHandSpace()};function N(G){const Q=T.indexOf(G.inputSource);if(Q===-1)return;const j=b[Q];j!==void 0&&(j.update(G.inputSource,G.frame,l||o),j.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",I);for(let G=0;G<b.length;G++){const Q=T[G];Q!==null&&(T[G]=null,b[G].disconnect(Q))}k=null,R=null,p.reset();for(const G in m)delete m[G];t.setRenderTarget(S),f=null,h=null,d=null,r=null,v=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",L),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ft=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=x.stencil?fs:gr,ft=x.stencil?Ra:qi);const Tt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Tt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Hn(h.textureWidth,h.textureHeight,{format:Ci,type:ei,depthTexture:new Da(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const j={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function I(G){for(let Q=0;Q<G.removed.length;Q++){const j=G.removed[Q],ft=T.indexOf(j);ft>=0&&(T[ft]=null,b[ft].disconnect(j))}for(let Q=0;Q<G.added.length;Q++){const j=G.added[Q];let ft=T.indexOf(j);if(ft===-1){for(let Tt=0;Tt<b.length;Tt++)if(Tt>=T.length){T.push(j),ft=Tt;break}else if(T[Tt]===null){T[Tt]=j,ft=Tt;break}if(ft===-1)break}const gt=b[ft];gt&&gt.connect(j)}}const q=new W,$=new W;function D(G,Q,j){q.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(j.matrixWorld);const ft=q.distanceTo($),gt=Q.projectionMatrix.elements,Tt=j.projectionMatrix.elements,Qt=gt[14]/(gt[10]-1),mt=gt[14]/(gt[10]+1),Ut=(gt[9]+1)/gt[5],Yt=(gt[9]-1)/gt[5],kt=(gt[8]-1)/gt[0],Y=(Tt[8]+1)/Tt[0],B=Qt*kt,te=Qt*Y,qt=ft/(-kt+Y),Xt=qt*-kt;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Xt),G.translateZ(qt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),gt[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const X=Qt+qt,C=mt+qt,M=B-Xt,z=te+(ft-Xt),it=Ut*mt/C*X,rt=Yt*mt/C*X;G.projectionMatrix.makePerspective(M,z,it,rt,X,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function st(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let Q=G.near,j=G.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(j=p.depthFar)),F.near=U.near=E.near=Q,F.far=U.far=E.far=j,(k!==F.near||R!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,R=F.far),F.layers.mask=G.layers.mask|6,E.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const ft=G.parent,gt=F.cameras;st(F,ft);for(let Tt=0;Tt<gt.length;Tt++)st(gt[Tt],ft);gt.length===2?D(F,E,U):F.projectionMatrix.copy(E.projectionMatrix),at(G,F,ft)};function at(G,Q,j){j===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(j.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=rf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(G){return m[G]};let V=null;function tt(G,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const j=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ft=!1;j.length!==F.cameras.length&&(F.cameras.length=0,ft=!0);for(let mt=0;mt<j.length;mt++){const Ut=j[mt];let Yt=null;if(f!==null)Yt=f.getViewport(Ut);else{const Y=d.getViewSubImage(h,Ut);Yt=Y.viewport,mt===0&&(t.setRenderTargetTextures(v,Y.colorTexture,Y.depthStencilTexture),t.setRenderTarget(v))}let kt=P[mt];kt===void 0&&(kt=new Qn,kt.layers.enable(mt),kt.viewport=new Fe,P[mt]=kt),kt.matrix.fromArray(Ut.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ut.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),mt===0&&(F.matrix.copy(kt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ft===!0&&F.cameras.push(kt)}const gt=r.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const mt=d.getDepthInformation(j[0]);mt&&mt.isValid&&mt.texture&&p.init(mt,r.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let mt=0;mt<j.length;mt++){const Ut=j[mt].camera;if(Ut){let Yt=m[Ut];Yt||(Yt=new H0,m[Ut]=Yt);const kt=d.getCameraImage(Ut);Yt.sourceTexture=kt}}}}for(let j=0;j<b.length;j++){const ft=T[j],gt=b[j];ft!==null&&gt!==void 0&&gt.update(ft,Q,l||o)}V&&V(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ot=new q0;ot.setAnimationLoop(tt),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}const es=new $i,LC=new De;function IC(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,W0(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,S,v){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=t.get(m),S=x.envMap,v=x.envMapRotation;S&&(p.envMap.value=S,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),p.envMapRotation.value.setFromMatrix4(LC.makeRotationFromEuler(es)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function NC(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function l(x,S){let v=r[x.id];v===void 0&&(g(x),v=u(x),r[x.id]=v,x.addEventListener("dispose",p));const b=S.program;n.updateUBOMapping(x,b);const T=t.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function u(x){const S=d();x.__bindingPointIndex=S;const v=i.createBuffer(),b=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=r[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,w=v.length;T<w;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,U=y.length;E<U;E++){const P=y[E];if(f(P,T,E,b)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let R=0;for(let N=0;N<k.length;N++){const L=k[N],I=_(L);typeof L=="number"||typeof L=="boolean"?(P.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,F+R,P.__data)):L.isMatrix3?(P.__data[0]=L.elements[0],P.__data[1]=L.elements[1],P.__data[2]=L.elements[2],P.__data[3]=0,P.__data[4]=L.elements[3],P.__data[5]=L.elements[4],P.__data[6]=L.elements[5],P.__data[7]=0,P.__data[8]=L.elements[6],P.__data[9]=L.elements[7],P.__data[10]=L.elements[8],P.__data[11]=0):(L.toArray(P.__data,R),R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,v,b){const T=x.value,w=S+"_"+v;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{const y=b[w];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return b[w]=T,!0}else if(y.equals(T)===!1)return y.copy(T),!0}return!1}function g(x){const S=x.uniforms;let v=0;const b=16;for(let w=0,y=S.length;w<y;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let U=0,P=E.length;U<P;U++){const F=E[U],k=Array.isArray(F.value)?F.value:[F.value];for(let R=0,N=k.length;R<N;R++){const L=k[R],I=_(L),q=v%b,$=q%I.boundary,D=q+$;v+=$,D!==0&&b-D<I.storage&&(v+=b-D),F.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=I.storage}}}const T=v%b;return T>0&&(v+=b-T),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Jt("WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}const UC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function FC(){return Li===null&&(Li=new ab(UC,16,16,yo,si),Li.name="DFG_LUT",Li.minFilter=xn,Li.magFilter=xn,Li.wrapS=ur,Li.wrapT=ur,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class OC{constructor(t={}){const{canvas:e=BE(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ei}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,p=new Set([Zf,Kf,$f]),m=new Set([ei,qi,Ca,Ra,Yf,qf]),x=new Uint32Array(4),S=new Int32Array(4);let v=null,b=null;const T=[],w=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=fi;let P=0,F=0,k=null,R=-1,N=null;const L=new Fe,I=new Fe;let q=null;const $=new he(0);let D=0,st=e.width,at=e.height,V=1,tt=null,ot=null;const G=new Fe(0,0,st,at),Q=new Fe(0,0,st,at);let j=!1;const ft=new ed;let gt=!1,Tt=!1;const Qt=new De,mt=new W,Ut=new Fe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Y(){return k===null?V:1}let B=n;function te(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gf}`),e.addEventListener("webglcontextlost",Pt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",pe,!1),B===null){const H="webgl2";if(B=te(H,A),B===null)throw te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ge("WebGLRenderer: "+A.message),A}let qt,Xt,X,C,M,z,it,rt,et,bt,dt,Ft,At,ct,ht,Rt,Dt,xt,$t,O,pt,ut,yt;function lt(){qt=new Ow(B),qt.init(),pt=new AC(B,qt),Xt=new Rw(B,qt,t,pt),X=new TC(B,qt),Xt.reversedDepthBuffer&&h&&X.buffers.depth.setReversed(!0),C=new kw(B),M=new hC,z=new wC(B,qt,X,M,Xt,pt,C),it=new Fw(E),rt=new Xb(B),ut=new Aw(B,rt),et=new Bw(B,rt,C,ut),bt=new Hw(B,et,rt,ut,C),xt=new Vw(B,Xt,z),ht=new Pw(M),dt=new uC(E,it,qt,Xt,ut,ht),Ft=new IC(E,M),At=new dC,ct=new xC(qt),Dt=new ww(E,it,X,bt,g,c),Rt=new bC(E,bt,Xt),yt=new NC(B,C,Xt,X),$t=new Cw(B,qt,C),O=new zw(B,qt,C),C.programs=dt.programs,E.capabilities=Xt,E.extensions=qt,E.properties=M,E.renderLists=At,E.shadowMap=Rt,E.state=X,E.info=C}lt(),_!==ei&&(y=new Ww(_,e.width,e.height,r,s));const nt=new DC(E,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(st,at,!1))},this.getSize=function(A){return A.set(st,at)},this.setSize=function(A,H,J=!0){if(nt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,at=H,e.width=Math.floor(A*V),e.height=Math.floor(H*V),J===!0&&(e.style.width=A+"px",e.style.height=H+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(st*V,at*V).floor()},this.setDrawingBufferSize=function(A,H,J){st=A,at=H,V=J,e.width=Math.floor(A*J),e.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,H,J,Z){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,H,J,Z),X.viewport(L.copy(G).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,H,J,Z){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,H,J,Z),X.scissor(I.copy(Q).multiplyScalar(V).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){X.setScissorTest(j=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){ot=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let Z=0;if(A){let K=!1;if(k!==null){const _t=k.texture.format;K=p.has(_t)}if(K){const _t=k.texture.type,St=m.has(_t),vt=Dt.getClearColor(),It=Dt.getClearAlpha(),Lt=vt.r,ee=vt.g,oe=vt.b;St?(x[0]=Lt,x[1]=ee,x[2]=oe,x[3]=It,B.clearBufferuiv(B.COLOR,0,x)):(S[0]=Lt,S[1]=ee,S[2]=oe,S[3]=It,B.clearBufferiv(B.COLOR,0,S))}else Z|=B.COLOR_BUFFER_BIT}H&&(Z|=B.DEPTH_BUFFER_BIT),J&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Dt.dispose(),At.dispose(),ct.dispose(),M.dispose(),it.dispose(),bt.dispose(),ut.dispose(),yt.dispose(),dt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Zt),nt.removeEventListener("sessionend",Be),jt.stop()};function Pt(A){A.preventDefault(),Mp("WebGLRenderer: Context Lost."),U=!0}function Gt(){Mp("WebGLRenderer: Context Restored."),U=!1;const A=C.autoReset,H=Rt.enabled,J=Rt.autoUpdate,Z=Rt.needsUpdate,K=Rt.type;lt(),C.autoReset=A,Rt.enabled=H,Rt.autoUpdate=J,Rt.needsUpdate=Z,Rt.type=K}function pe(A){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){const H=A.target;H.removeEventListener("dispose",wt),Bt(H)}function Bt(A){ie(A),M.remove(A)}function ie(A){const H=M.get(A).programs;H!==void 0&&(H.forEach(function(J){dt.releaseProgram(J)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,Z,K,_t){H===null&&(H=Yt);const St=K.isMesh&&K.matrixWorld.determinant()<0,vt=ci(A,H,J,Z,K);X.setMaterial(Z,St);let It=J.index,Lt=1;if(Z.wireframe===!0){if(It=et.getWireframeAttribute(J),It===void 0)return;Lt=2}const ee=J.drawRange,oe=J.attributes.position;let Ht=ee.start*Lt,Se=(ee.start+ee.count)*Lt;_t!==null&&(Ht=Math.max(Ht,_t.start*Lt),Se=Math.min(Se,(_t.start+_t.count)*Lt)),It!==null?(Ht=Math.max(Ht,0),Se=Math.min(Se,It.count)):oe!=null&&(Ht=Math.max(Ht,0),Se=Math.min(Se,oe.count));const ze=Se-Ht;if(ze<0||ze===1/0)return;ut.setup(K,Z,vt,J,It);let Ue,Me=$t;if(It!==null&&(Ue=rt.get(It),Me=O,Me.setIndex(Ue)),K.isMesh)Z.wireframe===!0?(X.setLineWidth(Z.wireframeLinewidth*Y()),Me.setMode(B.LINES)):Me.setMode(B.TRIANGLES);else if(K.isLine){let fn=Z.linewidth;fn===void 0&&(fn=1),X.setLineWidth(fn*Y()),K.isLineSegments?Me.setMode(B.LINES):K.isLineLoop?Me.setMode(B.LINE_LOOP):Me.setMode(B.LINE_STRIP)}else K.isPoints?Me.setMode(B.POINTS):K.isSprite&&Me.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)_c("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const fn=K._multiDrawStarts,zt=K._multiDrawCounts,Xn=K._multiDrawCount,me=It?rt.get(It).bytesPerElement:1,xi=M.get(Z).currentProgram.getUniforms();for(let Pi=0;Pi<Xn;Pi++)xi.setValue(B,"_gl_DrawID",Pi),Me.render(fn[Pi]/me,zt[Pi])}else if(K.isInstancedMesh)Me.renderInstances(Ht,ze,K.count);else if(J.isInstancedBufferGeometry){const fn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zt=Math.min(J.instanceCount,fn);Me.renderInstances(Ht,ze,zt)}else Me.render(Ht,ze)};function Mt(A,H,J){A.transparent===!0&&A.side===ar&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,un(A,H,J),A.side=Wr,A.needsUpdate=!0,un(A,H,J),A.side=ar):un(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),b=ct.get(J),b.init(H),w.push(b),J.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),A!==J&&A.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(b.pushLight(K),K.castShadow&&b.pushShadow(K))}),b.setupLights();const Z=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const _t=K.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){const vt=_t[St];Mt(vt,J,K),Z.add(vt)}else Mt(_t,J,K),Z.add(_t)}),b=w.pop(),Z},this.compileAsync=function(A,H,J=null){const Z=this.compile(A,H,J);return new Promise(K=>{function _t(){if(Z.forEach(function(St){M.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){K(A);return}setTimeout(_t,10)}qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Kt=null;function Wt(A){Kt&&Kt(A)}function Zt(){jt.stop()}function Be(){jt.start()}const jt=new q0;jt.setAnimationLoop(Wt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(A){Kt=A,nt.setAnimationLoop(A),A===null?jt.stop():jt.start()},nt.addEventListener("sessionstart",Zt),nt.addEventListener("sessionend",Be),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const J=nt.enabled===!0&&nt.isPresenting===!0,Z=y!==null&&(k===null||J)&&y.begin(E,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,H,k),b=ct.get(A,w.length),b.init(H),w.push(b),Qt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ft.setFromProjectionMatrix(Qt,ki,H.reversedDepth),Tt=this.localClippingEnabled,gt=ht.init(this.clippingPlanes,Tt),v=At.get(A,T.length),v.init(),T.push(v),nt.enabled===!0&&nt.isPresenting===!0){const St=E.xr.getDepthSensingMesh();St!==null&&Ce(St,H,-1/0,E.sortObjects)}Ce(A,H,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(tt,ot),kt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,kt&&Dt.addToRenderList(v,A),this.info.render.frame++,gt===!0&&ht.beginShadows();const K=b.state.shadowsArray;if(Rt.render(K,A,H),gt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&y.hasRenderPass())===!1){const St=v.opaque,vt=v.transmissive;if(b.setupLights(),H.isArrayCamera){const It=H.cameras;if(vt.length>0)for(let Lt=0,ee=It.length;Lt<ee;Lt++){const oe=It[Lt];Re(St,vt,A,oe)}kt&&Dt.render(A);for(let Lt=0,ee=It.length;Lt<ee;Lt++){const oe=It[Lt];Xe(v,A,oe,oe.viewport)}}else vt.length>0&&Re(St,vt,A,H),kt&&Dt.render(A),Xe(v,A,H)}k!==null&&F===0&&(z.updateMultisampleRenderTarget(k),z.updateRenderTargetMipmap(k)),Z&&y.end(E),A.isScene===!0&&A.onAfterRender(E,A,H),ut.resetDefaultState(),R=-1,N=null,w.pop(),w.length>0?(b=w[w.length-1],gt===!0&&ht.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Ce(A,H,J,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ft.intersectsSprite(A)){Z&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Qt);const St=bt.update(A),vt=A.material;vt.visible&&v.push(A,St,vt,J,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ft.intersectsObject(A))){const St=bt.update(A),vt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ut.copy(St.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Qt)),Array.isArray(vt)){const It=St.groups;for(let Lt=0,ee=It.length;Lt<ee;Lt++){const oe=It[Lt],Ht=vt[oe.materialIndex];Ht&&Ht.visible&&v.push(A,St,Ht,J,Ut.z,oe)}}else vt.visible&&v.push(A,St,vt,J,Ut.z,null)}}const _t=A.children;for(let St=0,vt=_t.length;St<vt;St++)Ce(_t[St],H,J,Z)}function Xe(A,H,J,Z){const{opaque:K,transmissive:_t,transparent:St}=A;b.setupLightsView(J),gt===!0&&ht.setGlobalState(E.clippingPlanes,J),Z&&X.viewport(L.copy(Z)),K.length>0&&xe(K,H,J),_t.length>0&&xe(_t,H,J),St.length>0&&xe(St,H,J),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Re(A,H,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){const Ht=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:Ht?si:ei,minFilter:hs,samples:Math.max(4,Xt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace})}const _t=b.state.transmissionRenderTarget[Z.id],St=Z.viewport||L;_t.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);const vt=E.getRenderTarget(),It=E.getActiveCubeFace(),Lt=E.getActiveMipmapLevel();E.setRenderTarget(_t),E.getClearColor($),D=E.getClearAlpha(),D<1&&E.setClearColor(16777215,.5),E.clear(),kt&&Dt.render(J);const ee=E.toneMapping;E.toneMapping=Wi;const oe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),gt===!0&&ht.setGlobalState(E.clippingPlanes,Z),xe(A,J,Z),z.updateMultisampleRenderTarget(_t),z.updateRenderTargetMipmap(_t),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Se=0,ze=H.length;Se<ze;Se++){const Ue=H[Se],{object:Me,geometry:fn,material:zt,group:Xn}=Ue;if(zt.side===ar&&Me.layers.test(Z.layers)){const me=zt.side;zt.side=Vn,zt.needsUpdate=!0,_e(Me,J,Z,fn,zt,Xn),zt.side=me,zt.needsUpdate=!0,Ht=!0}}Ht===!0&&(z.updateMultisampleRenderTarget(_t),z.updateRenderTargetMipmap(_t))}E.setRenderTarget(vt,It,Lt),E.setClearColor($,D),oe!==void 0&&(Z.viewport=oe),E.toneMapping=ee}function xe(A,H,J){const Z=H.isScene===!0?H.overrideMaterial:null;for(let K=0,_t=A.length;K<_t;K++){const St=A[K],{object:vt,geometry:It,group:Lt}=St;let ee=St.material;ee.allowOverride===!0&&Z!==null&&(ee=Z),vt.layers.test(J.layers)&&_e(vt,H,J,It,ee,Lt)}}function _e(A,H,J,Z,K,_t){A.onBeforeRender(E,H,J,Z,K,_t),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(E,H,J,Z,A,_t),K.transparent===!0&&K.side===ar&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,E.renderBufferDirect(J,H,Z,K,A,_t),K.side=Wr,K.needsUpdate=!0,E.renderBufferDirect(J,H,Z,K,A,_t),K.side=ar):E.renderBufferDirect(J,H,Z,K,A,_t),A.onAfterRender(E,H,J,Z,K,_t)}function un(A,H,J){H.isScene!==!0&&(H=Yt);const Z=M.get(A),K=b.state.lights,_t=b.state.shadowsArray,St=K.state.version,vt=dt.getParameters(A,K.state,_t,H,J),It=dt.getProgramCacheKey(vt);let Lt=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;const ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=it.get(A.envMap||Z.environment,ee),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",wt),Lt=new Map,Z.programs=Lt);let oe=Lt.get(It);if(oe!==void 0){if(Z.currentProgram===oe&&Z.lightsStateVersion===St)return hn(A,vt),oe}else vt.uniforms=dt.getUniforms(A),A.onBeforeCompile(vt,E),oe=dt.acquireProgram(vt,It),Lt.set(It,oe),Z.uniforms=vt.uniforms;const Ht=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=ht.uniform),hn(A,vt),Z.needsLights=qe(A),Z.lightsStateVersion=St,Z.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),Z.currentProgram=oe,Z.uniformsList=null,oe}function we(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function hn(A,H){const J=M.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function ci(A,H,J,Z,K){H.isScene!==!0&&(H=Yt),z.resetTextureUnits();const _t=H.fog,St=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,vt=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:So,It=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Lt=it.get(Z.envMap||St,It),ee=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,oe=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ht=!!J.morphAttributes.position,Se=!!J.morphAttributes.normal,ze=!!J.morphAttributes.color;let Ue=Wi;Z.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ue=E.toneMapping);const Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fn=Me!==void 0?Me.length:0,zt=M.get(Z),Xn=b.state.lights;if(gt===!0&&(Tt===!0||A!==N)){const je=A===N&&Z.id===R;ht.setState(Z,A,je)}let me=!1;Z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Xn.state.version||zt.outputColorSpace!==vt||K.isBatchedMesh&&zt.batching===!1||!K.isBatchedMesh&&zt.batching===!0||K.isBatchedMesh&&zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&zt.instancing===!1||!K.isInstancedMesh&&zt.instancing===!0||K.isSkinnedMesh&&zt.skinning===!1||!K.isSkinnedMesh&&zt.skinning===!0||K.isInstancedMesh&&zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&zt.instancingMorph===!1&&K.morphTexture!==null||zt.envMap!==Lt||Z.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ht.numPlanes||zt.numIntersection!==ht.numIntersection)||zt.vertexAlphas!==ee||zt.vertexTangents!==oe||zt.morphTargets!==Ht||zt.morphNormals!==Se||zt.morphColors!==ze||zt.toneMapping!==Ue||zt.morphTargetsCount!==fn)&&(me=!0):(me=!0,zt.__version=Z.version);let xi=zt.currentProgram;me===!0&&(xi=un(Z,H,K));let Pi=!1,qr=!1,Cs=!1;const Ee=xi.getUniforms(),on=zt.uniforms;if(X.useProgram(xi.program)&&(Pi=!0,qr=!0,Cs=!0),Z.id!==R&&(R=Z.id,qr=!0),Pi||N!==A){X.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ee.setValue(B,"projectionMatrix",A.projectionMatrix),Ee.setValue(B,"viewMatrix",A.matrixWorldInverse);const xr=Ee.map.cameraPosition;xr!==void 0&&xr.setValue(B,mt.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&Ee.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ee.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,qr=!0,Cs=!0)}if(zt.needsLights&&(Xn.state.directionalShadowMap.length>0&&Ee.setValue(B,"directionalShadowMap",Xn.state.directionalShadowMap,z),Xn.state.spotShadowMap.length>0&&Ee.setValue(B,"spotShadowMap",Xn.state.spotShadowMap,z),Xn.state.pointShadowMap.length>0&&Ee.setValue(B,"pointShadowMap",Xn.state.pointShadowMap,z)),K.isSkinnedMesh){Ee.setOptional(B,K,"bindMatrix"),Ee.setOptional(B,K,"bindMatrixInverse");const je=K.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ee.setValue(B,"boneTexture",je.boneTexture,z))}K.isBatchedMesh&&(Ee.setOptional(B,K,"batchingTexture"),Ee.setValue(B,"batchingTexture",K._matricesTexture,z),Ee.setOptional(B,K,"batchingIdTexture"),Ee.setValue(B,"batchingIdTexture",K._indirectTexture,z),Ee.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&Ee.setValue(B,"batchingColorTexture",K._colorsTexture,z));const vr=J.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&xt.update(K,J,xi),(qr||zt.receiveShadow!==K.receiveShadow)&&(zt.receiveShadow=K.receiveShadow,Ee.setValue(B,"receiveShadow",K.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(on.envMapIntensity.value=H.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=FC()),qr&&(Ee.setValue(B,"toneMappingExposure",E.toneMappingExposure),zt.needsLights&&Ye(on,Cs),_t&&Z.fog===!0&&Ft.refreshFogUniforms(on,_t),Ft.refreshMaterialUniforms(on,Z,V,at,b.state.transmissionRenderTarget[A.id]),Zl.upload(B,we(zt),on,z)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Zl.upload(B,we(zt),on,z),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ee.setValue(B,"center",K.center),Ee.setValue(B,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(B,"normalMatrix",K.normalMatrix),Ee.setValue(B,"modelMatrix",K.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const je=Z.uniformsGroups;for(let xr=0,Rs=je.length;xr<Rs;xr++){const ld=je[xr];yt.update(ld,xi),yt.bind(ld,xi)}}return xi}function Ye(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function qe(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,H,J){const Z=M.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=H,M.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const J=M.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const Qe=B.createFramebuffer();this.setRenderTarget=function(A,H=0,J=0){k=A,P=H,F=J;let Z=null,K=!1,_t=!1;if(A){const vt=M.get(A);if(vt.__useDefaultFramebuffer!==void 0){X.bindFramebuffer(B.FRAMEBUFFER,vt.__webglFramebuffer),L.copy(A.viewport),I.copy(A.scissor),q=A.scissorTest,X.viewport(L),X.scissor(I),X.setScissorTest(q),R=-1;return}else if(vt.__webglFramebuffer===void 0)z.setupRenderTarget(A);else if(vt.__hasExternalTextures)z.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(vt.__boundDepthTexture!==ee){if(ee!==null&&M.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(A)}}const It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(_t=!0);const Lt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[H])?Z=Lt[H][J]:Z=Lt[H],K=!0):A.samples>0&&z.useMultisampledRTT(A)===!1?Z=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?Z=Lt[J]:Z=Lt,L.copy(A.viewport),I.copy(A.scissor),q=A.scissorTest}else L.copy(G).multiplyScalar(V).floor(),I.copy(Q).multiplyScalar(V).floor(),q=j;if(J!==0&&(Z=Qe),X.bindFramebuffer(B.FRAMEBUFFER,Z)&&X.drawBuffers(A,Z),X.viewport(L),X.scissor(I),X.setScissorTest(q),K){const vt=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,vt.__webglTexture,J)}else if(_t){const vt=H;for(let It=0;It<A.textures.length;It++){const Lt=M.get(A.textures[It]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+It,Lt.__webglTexture,J,vt)}}else if(A!==null&&J!==0){const vt=M.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vt.__webglTexture,J)}R=-1},this.readRenderTargetPixels=function(A,H,J,Z,K,_t,St,vt=0){if(!(A&&A.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It){X.bindFramebuffer(B.FRAMEBUFFER,It);try{const Lt=A.textures[vt],ee=Lt.format,oe=Lt.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+vt),!Xt.textureFormatReadable(ee)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(oe)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&J>=0&&J<=A.height-K&&B.readPixels(H,J,Z,K,pt.convert(ee),pt.convert(oe),_t)}finally{const Lt=k!==null?M.get(k).__webglFramebuffer:null;X.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,Z,K,_t,St,vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(It=It[St]),It)if(H>=0&&H<=A.width-Z&&J>=0&&J<=A.height-K){X.bindFramebuffer(B.FRAMEBUFFER,It);const Lt=A.textures[vt],ee=Lt.format,oe=Lt.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+vt),!Xt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ht),B.bufferData(B.PIXEL_PACK_BUFFER,_t.byteLength,B.STREAM_READ),B.readPixels(H,J,Z,K,pt.convert(ee),pt.convert(oe),0);const Se=k!==null?M.get(k).__webglFramebuffer:null;X.bindFramebuffer(B.FRAMEBUFFER,Se);const ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await zE(B,ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_t),B.deleteBuffer(Ht),B.deleteSync(ze),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){const Z=Math.pow(2,-J),K=Math.floor(A.image.width*Z),_t=Math.floor(A.image.height*Z),St=H!==null?H.x:0,vt=H!==null?H.y:0;z.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,St,vt,K,_t),X.unbindTexture()};const Zi=B.createFramebuffer(),As=B.createFramebuffer();this.copyTextureToTexture=function(A,H,J=null,Z=null,K=0,_t=0){let St,vt,It,Lt,ee,oe,Ht,Se,ze;const Ue=A.isCompressedTexture?A.mipmaps[_t]:A.image;if(J!==null)St=J.max.x-J.min.x,vt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Lt=J.min.x,ee=J.min.y,oe=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-K);St=Math.floor(Ue.width*on),vt=Math.floor(Ue.height*on),A.isDataArrayTexture?It=Ue.depth:A.isData3DTexture?It=Math.floor(Ue.depth*on):It=1,Lt=0,ee=0,oe=0}Z!==null?(Ht=Z.x,Se=Z.y,ze=Z.z):(Ht=0,Se=0,ze=0);const Me=pt.convert(H.format),fn=pt.convert(H.type);let zt;H.isData3DTexture?(z.setTexture3D(H,0),zt=B.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),zt=B.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),zt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment);const Xn=B.getParameter(B.UNPACK_ROW_LENGTH),me=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),Pi=B.getParameter(B.UNPACK_SKIP_ROWS),qr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,oe);const Cs=A.isDataArrayTexture||A.isData3DTexture,Ee=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const on=M.get(A),vr=M.get(H),je=M.get(on.__renderTarget),xr=M.get(vr.__renderTarget);X.bindFramebuffer(B.READ_FRAMEBUFFER,je.__webglFramebuffer),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Rs=0;Rs<It;Rs++)Cs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(A).__webglTexture,K,oe+Rs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,M.get(H).__webglTexture,_t,ze+Rs)),B.blitFramebuffer(Lt,ee,St,vt,Ht,Se,St,vt,B.DEPTH_BUFFER_BIT,B.NEAREST);X.bindFramebuffer(B.READ_FRAMEBUFFER,null),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||M.has(A)){const on=M.get(A),vr=M.get(H);X.bindFramebuffer(B.READ_FRAMEBUFFER,Zi),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,As);for(let je=0;je<It;je++)Cs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,K,oe+je):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,K),Ee?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vr.__webglTexture,_t,ze+je):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vr.__webglTexture,_t),K!==0?B.blitFramebuffer(Lt,ee,St,vt,Ht,Se,St,vt,B.COLOR_BUFFER_BIT,B.NEAREST):Ee?B.copyTexSubImage3D(zt,_t,Ht,Se,ze+je,Lt,ee,St,vt):B.copyTexSubImage2D(zt,_t,Ht,Se,Lt,ee,St,vt);X.bindFramebuffer(B.READ_FRAMEBUFFER,null),X.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ee?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(zt,_t,Ht,Se,ze,St,vt,It,Me,fn,Ue.data):H.isCompressedArrayTexture?B.compressedTexSubImage3D(zt,_t,Ht,Se,ze,St,vt,It,Me,Ue.data):B.texSubImage3D(zt,_t,Ht,Se,ze,St,vt,It,Me,fn,Ue):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_t,Ht,Se,St,vt,Me,fn,Ue.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_t,Ht,Se,Ue.width,Ue.height,Me,Ue.data):B.texSubImage2D(B.TEXTURE_2D,_t,Ht,Se,St,vt,Me,fn,Ue);B.pixelStorei(B.UNPACK_ROW_LENGTH,Xn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qr),_t===0&&H.generateMipmaps&&B.generateMipmap(zt),X.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?z.setTextureCube(A,0):A.isData3DTexture?z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?z.setTexture2DArray(A,0):z.setTexture2D(A,0),X.unbindTexture()},this.resetState=function(){P=0,F=0,k=null,X.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const Jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const BC=new od(-1,1,1,-1,0,1);class zC extends Wn{constructor(){super(),this.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rn([0,2,0,0,2,0],2))}}const kC=new zC;class j0{constructor(t){this._mesh=new vi(kC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,BC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class VC extends za{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof yn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vc.clone(t.uniforms),this.material=new yn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new j0(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class mm extends za{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class HC extends za{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class GC{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ot);this._width=n.width,this._height=n.height,e=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new VC(Jl),this.copyPass.material.blending=Gi,this.timer=new Vb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mm!==void 0&&(o instanceof mm?n=!0:o instanceof HC&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WC extends za{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const XC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Eo extends za{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new Ot(t.x,t.y):new Ot(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(s,o,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Hn(s,o,{type:si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new Hn(s,o,{type:si});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=XC;this.highPassUniforms=vc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ot(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vc.clone(Jl.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,premultipliedAlpha:!0,blending:dh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new td,this._fsQuad=new j0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ot(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Eo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Eo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let r=0;r<t;r++)e.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new yn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ot(.5,.5)},direction:{value:new Ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new yn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Eo.BlurDirectionX=new Ot(1,0);Eo.BlurDirectionY=new Ot(0,1);function YC(){const i=document.getElementById("three-canvas");if(!i)return;const t=window.innerWidth,e=window.innerHeight,n=new eb,r=new Qn(55,t/e,.1,1e3);r.position.set(0,0,20);const s=new OC({canvas:i,antialias:!0,alpha:!0});s.setSize(t,e),s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.toneMapping=Wf,s.toneMappingExposure=.75,n.add(new Bb(6702,.5));const o=new Ob(58819,1,40);o.position.set(2,2,8),n.add(o);const a=[{p:[-6,4,-4],color:58819,r:.28,glow:.4},{p:[7,2,-6],color:16729440,r:.2,glow:.7},{p:[-8,-2,-3],color:58819,r:.22,glow:.35},{p:[-5,-5,-5],color:16765286,r:.22,glow:.45},{p:[4,-4,-4],color:58819,r:.22,glow:.35},{p:[2,5,-2],color:1045759,r:.18,glow:.4},{p:[9,-2,-7],color:16729440,r:.16,glow:.65},{p:[6,4,-8],color:58819,r:.16,glow:.3},{p:[-2,-7,-4],color:58819,r:.18,glow:.3},{p:[-7,1,-6],color:1045759,r:.18,glow:.4},{p:[3,-8,-6],color:58819,r:.1,glow:.2},{p:[-9,5,-8],color:1045759,r:.08,glow:.2},{p:[11,0,-10],color:58819,r:.08,glow:.2},{p:[-3,8,-5],color:16765286,r:.1,glow:.25},{p:[0,-9,-7],color:58819,r:.08,glow:.2},{p:[-8,-4,-9],color:1045759,r:.08,glow:.2}],c=[[0,1,"critical"],[0,2,"normal"],[0,3,"warning"],[0,4,"normal"],[2,5,"normal"],[5,6,"critical"],[5,7,"normal"],[6,8,"warning"],[4,9,"normal"],[9,1,"normal"],[3,7,"normal"],[7,8,"normal"],[10,4,"normal"],[11,2,"normal"],[13,5,"normal"]],l=a.map(p=>{const m=new rd(p.r,24,24),x=new kp({color:p.color,emissive:p.color,emissiveIntensity:p.glow,roughness:.2,metalness:.1}),S=new vi(m,x);return S.position.set(...p.p),n.add(S),S});c.forEach(([p,m,x])=>{const S=l[p].position,v=l[m].position,b=new W((S.x+v.x)/2+(Math.random()-.5)*2,(S.y+v.y)/2+(Math.random()-.5)*2,(S.z+v.z)/2+(Math.random()-.5)*1),T=new id(S,b,v),w=new sd(T,18,.016,4,!1),y=x==="critical"?16729440:x==="warning"?16765286:58819,E=new kp({color:y,emissive:y,emissiveIntensity:x==="critical"?.4:.15,transparent:!0,opacity:x==="critical"?.45:.2});n.add(new vi(w,E))});const u=[];for(let p=0;p<800;p++)u.push((Math.random()-.5)*140,(Math.random()-.5)*140,(Math.random()-.5)*60-10);const d=new Wn;d.setAttribute("position",new rn(u,3)),n.add(new hb(d,new k0({color:9359359,size:.028,transparent:!0,opacity:.3})));let h;try{h=new GC(s),h.addPass(new WC(n,r)),h.addPass(new Eo(new Ot(t,e),.35,.5,.28))}catch{h=null}l.forEach((p,m)=>{Ct.to(p.scale,{x:1.08,y:1.08,z:1.08,duration:2.5+Math.random()*2,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:Math.random()*3})});let f=0;ne.create({trigger:document.body,start:"top top",end:"bottom bottom",onUpdate:p=>{f=p.progress}});const g=new Gb,_=()=>{requestAnimationFrame(_);const p=g.getElapsedTime();n.rotation.y=p*.018,n.rotation.x=Math.sin(p*.008)*.04,o.intensity=.8+Math.sin(p*.9)*.2;const m=f*Math.PI*1.4;r.position.x=Math.sin(m)*4,r.position.z=Math.cos(m)*4+16,r.position.y=Math.sin(f*Math.PI)*2,r.lookAt(n.position),h?h.render():s.render(n,r)};_(),window.addEventListener("resize",()=>{const p=window.innerWidth,m=window.innerHeight;r.aspect=p/m,r.updateProjectionMatrix(),s.setSize(p,m),h&&h.setSize(p,m)})}const ko=[{sev:"CRITICAL",msg:"sg-0x3f2a1 → Port :22 EXPOSED to 0.0.0.0/0"},{sev:"CRITICAL",msg:"nacl-prod-02 → RDP :3389 open to internet"},{sev:"CRITICAL",msg:"iam-root → Root access keys exist!"},{sev:"WARN",msg:"vpc-main → VPC Flow Logs DISABLED"},{sev:"WARN",msg:"trail-prod → CloudTrail log validation off"},{sev:"WARN",msg:"alb-ext-prod → HTTP without HTTPS redirect"},{sev:"WARN",msg:"nat-gw → Single AZ deployment detected"},{sev:"OK",msg:"vpc-main → 3 subnets scanned cleanly ✓"},{sev:"OK",msg:"s3-logs-prod → Public access BLOCKED ✓"},{sev:"OK",msg:"guardduty-detector → All regions active ✓"},{sev:"OK",msg:"ec2-web-2 → Security groups clean ✓"},{sev:"OK",msg:"rds-primary → Encrypted at rest ✓"}];function qC(){const i=document.getElementById("ticker-inner");if(!i)return;function t(r){const s=document.createElement("span");s.className=`ticker-item ticker-${r.sev.toLowerCase()}`;const o=r.sev==="CRITICAL"?"🔴":r.sev==="WARN"?"🟡":"🟢";return s.innerHTML=`${o} <strong>[${r.sev}]</strong>&nbsp;${r.msg}&ensp;<span class="ticker-sep">◆</span>&ensp;`,s}[...ko,...ko,...ko].forEach(r=>i.appendChild(t(r)));const e=i.cloneNode(!0);e.id="ticker-inner-clone",i.parentElement.appendChild(e),requestAnimationFrame(()=>{const r=i.scrollWidth;Ct.set(e,{x:r}),Ct.to(i,{x:-r,duration:38,ease:"none",repeat:-1}),Ct.to(e,{x:0,duration:38,ease:"none",repeat:-1})}),setInterval(()=>{var s;const r=ko[Math.floor(Math.random()*ko.length)];i.appendChild(t(r)),r.sev==="CRITICAL"&&(Ct.fromTo(".ticker-wrap",{boxShadow:"0 0 0px transparent"},{boxShadow:"0 0 28px rgba(255,69,96,0.5)",duration:.3,yoyo:!0,repeat:1}),(s=window.SoundEngine)==null||s.criticalAlert())},5e3);const n=document.querySelector(".ticker-wrap");n&&(n.addEventListener("mouseenter",()=>Ct.globalTimeline.timeScale(0)),n.addEventListener("mouseleave",()=>Ct.globalTimeline.timeScale(1)))}function $C(){let i=null,t=!1;const e=document.getElementById("sound-toggle");function n(){return i||(i=new(window.AudioContext||window.webkitAudioContext)),i.state==="suspended"&&i.resume(),i}function r(){if(!t)return;const l=n(),u=l.createOscillator(),d=l.createGain(),h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=400,u.type="sawtooth",u.frequency.setValueAtTime(55,l.currentTime),u.frequency.exponentialRampToValueAtTime(110,l.currentTime+3),d.gain.setValueAtTime(0,l.currentTime),d.gain.linearRampToValueAtTime(.022,l.currentTime+.5),d.gain.linearRampToValueAtTime(0,l.currentTime+3.8),u.connect(h),h.connect(d),d.connect(l.destination),u.start(),u.stop(l.currentTime+4)}function s(){if(!t)return;const l=n();[440,554,659,880].forEach((u,d)=>{const h=l.createOscillator(),f=l.createGain();h.frequency.value=u,h.type="sine";const g=l.currentTime+d*.13;f.gain.setValueAtTime(0,g),f.gain.linearRampToValueAtTime(.055,g+.05),f.gain.exponentialRampToValueAtTime(.001,g+.85),h.connect(f),f.connect(l.destination),h.start(g),h.stop(g+.85)})}function o(){if(!t)return;const l=n(),u=l.createOscillator(),d=l.createGain();u.type="square",u.frequency.value=220,d.gain.setValueAtTime(.035,l.currentTime),d.gain.exponentialRampToValueAtTime(.001,l.currentTime+.28),u.connect(d),d.connect(l.destination),u.start(),u.stop(l.currentTime+.28)}function a(){if(!t)return;const l=n(),u=l.createBuffer(1,512,l.sampleRate),d=u.getChannelData(0);for(let g=0;g<512;g++)d[g]=(Math.random()*2-1)*Math.exp(-g/80);const h=l.createBufferSource(),f=l.createGain();h.buffer=u,f.gain.value=.04,h.connect(f),f.connect(l.destination),h.start()}function c(){if(!t)return;const l=n(),u=l.createOscillator(),d=l.createGain();u.type="sine",u.frequency.setValueAtTime(880,l.currentTime),u.frequency.linearRampToValueAtTime(440,l.currentTime+.15),d.gain.setValueAtTime(.04,l.currentTime),d.gain.exponentialRampToValueAtTime(.001,l.currentTime+.15),u.connect(d),d.connect(l.destination),u.start(),u.stop(l.currentTime+.15)}e&&e.addEventListener("click",()=>{t=!t,t&&r(),e.textContent=t?"♪ ON":"♪ OFF",e.style.color=t?"#00E5C3":"",a()}),window.SoundEngine={bootHum:r,shieldChime:s,criticalAlert:o,click:a,scanBeep:c,isEnabled:()=>t}}const Dl=[{icon:"▶",label:"Scan us-east-1",desc:"Run security audit on US East",key:"scan-east",action:()=>{var i;return(i=document.getElementById("run-scan-btn"))==null?void 0:i.click()}},{icon:"▶",label:"Scan eu-west-1",desc:"Run security audit on EU West",key:"scan-eu",action:()=>{var i;return(i=document.getElementById("run-scan-btn"))==null?void 0:i.click()}},{icon:"📋",label:"View Demo Report",desc:"Load latest audit findings",key:"demo",action:()=>{var i;return(i=document.getElementById("demo-report-btn"))==null?void 0:i.click()}},{icon:"🔴",label:"Filter CRITICAL",desc:"Show only critical findings",key:"filt-crit",action:()=>Iu("CRITICAL")},{icon:"🟡",label:"Filter HIGH",desc:"Show high severity findings",key:"filt-high",action:()=>Iu("HIGH")},{icon:"🟢",label:"Show All Findings",desc:"Clear active filters",key:"filt-all",action:()=>Iu("ALL")},{icon:"🗺",label:"Jump to Topology",desc:"Scroll to network map",key:"topo",action:()=>{var i;return(i=document.getElementById("topology"))==null?void 0:i.scrollIntoView({behavior:"smooth"})}},{icon:"📊",label:"Jump to Audit Table",desc:"Scroll to CIS findings table",key:"audit",action:()=>{var i;return(i=document.getElementById("audit"))==null?void 0:i.scrollIntoView({behavior:"smooth"})}},{icon:"🏠",label:"Back to Top",desc:"Return to hero section",key:"top",action:()=>window.scrollTo({top:0,behavior:"smooth"})},{icon:"🔊",label:"Toggle Sound",desc:"Enable / disable audio",key:"sound",action:()=>{var i;return(i=document.getElementById("sound-toggle"))==null?void 0:i.click()}},{icon:"🌑",label:"Scroll to Ending",desc:"Jump to ending scene",key:"end",action:()=>{var i;return(i=document.getElementById("ending"))==null?void 0:i.scrollIntoView({behavior:"smooth"})}},{icon:"⬇",label:"Export PDF",desc:"Print current report as PDF",key:"export",action:()=>window.print()}];function Iu(i){var t;(t=document.getElementById("audit"))==null||t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.querySelectorAll(".audit-row").forEach(e=>{e.style.display=i==="ALL"||e.dataset.severity===i?"":"none"}),document.querySelectorAll(".audit-filter").forEach(e=>{e.classList.toggle("active",e.dataset.filter===i)})},500)}function KC(){var d;const i=document.getElementById("cmd-palette"),t=document.getElementById("cmd-box"),e=document.getElementById("cmd-input"),n=document.getElementById("cmd-results");if(!i||!e||!n)return;let r=!1,s=0,o=[...Dl];const a=()=>{var h;r||(r=!0,i.style.display="flex",Ct.fromTo(i,{opacity:0},{opacity:1,duration:.15}),Ct.fromTo(t,{y:-14,scale:.96},{y:0,scale:1,duration:.22,ease:"power3.out"}),e.value="",l(Dl),setTimeout(()=>e.focus(),30),(h=window.SoundEngine)==null||h.click())},c=()=>{r&&Ct.to(i,{opacity:0,duration:.12,onComplete:()=>{i.style.display="none",r=!1}})};function l(h){n.innerHTML="",s=0,o=h,h.forEach((f,g)=>{const _=document.createElement("div");_.className=`cmd-item${g===0?" cmd-selected":""}`,_.innerHTML=`<span class="cmd-icon">${f.icon}</span><div class="cmd-text"><div class="cmd-label">${f.label}</div><div class="cmd-desc">${f.desc}</div></div><span class="cmd-key">${f.key}</span>`,_.addEventListener("mouseenter",()=>u(g)),_.addEventListener("click",()=>{f.action(),c()}),n.appendChild(_)})}function u(h){document.querySelectorAll(".cmd-item").forEach(g=>g.classList.remove("cmd-selected"));const f=document.querySelectorAll(".cmd-item");f[h]&&(f[h].classList.add("cmd-selected"),s=h)}e.addEventListener("input",()=>{const h=e.value.trim().toLowerCase();l(h?Dl.filter(f=>f.label.toLowerCase().includes(h)||f.desc.toLowerCase().includes(h)):Dl)}),window.addEventListener("keydown",h=>{var f;if((h.metaKey||h.ctrlKey)&&h.key==="k"){h.preventDefault(),r?c():a();return}if(h.key==="Escape"&&r){c();return}r&&(h.key==="ArrowDown"&&(h.preventDefault(),u(Math.min(s+1,o.length-1))),h.key==="ArrowUp"&&(h.preventDefault(),u(Math.max(s-1,0))),h.key==="Enter"&&((f=o[s])==null||f.action(),c()))}),i.addEventListener("click",h=>{h.target===i&&c()}),(d=document.getElementById("cmd-trigger"))==null||d.addEventListener("click",a),window.cmdPalette={open:a,close:c}}let Vo=null;function ZC(){return Vo||(Vo=document.createElement("div"),Vo.id="toast-container",document.body.appendChild(Vo)),Vo}function Xr(i,t="ok",e=3e3){const n=ZC(),r={ok:"✓",warn:"⚠",danger:"✕",info:"→"},s=document.createElement("div");s.className=`toast toast-${t}`,s.innerHTML=`
    <span class="toast-icon">${r[t]||"→"}</span>
    <span>${i}</span>
  `,n.appendChild(s),setTimeout(()=>{s.classList.add("hide"),setTimeout(()=>s.remove(),300)},e)}function ad(i,t,e=!1){const n=i.getBoundingClientRect(),r=Math.max(n.width,n.height)*1.2,s=t.clientX-n.left-r/2,o=t.clientY-n.top-r/2,a=document.createElement("span");a.className="ripple"+(e?" ripple-danger":""),a.style.cssText=`width:${r}px;height:${r}px;left:${s}px;top:${o}px`,i.appendChild(a),setTimeout(()=>a.remove(),700)}function ka(i,t,e="#00E5C3",n=10){for(let r=0;r<n;r++){const s=document.createElement("div");s.className="particle";const o=3+Math.random()*5,a=Math.PI*2*r/n+(Math.random()-.5)*.8,c=40+Math.random()*60,l=Math.cos(a)*c,u=Math.sin(a)*c;s.style.cssText=`
      width:${o}px; height:${o}px;
      left:${i-o/2}px; top:${t-o/2}px;
      background:${e};
      box-shadow: 0 0 ${o*2}px ${e};
      --dx:${l}px; --dy:${u}px;
      animation-duration:${.5+Math.random()*.5}s;
    `,document.body.appendChild(s),setTimeout(()=>s.remove(),1100)}}function JC(){const i=["hero","features","topology","audit","ending"],t=document.querySelectorAll(".nav-links a"),e=new IntersectionObserver(n=>{n.forEach(r=>{if(r.isIntersecting){const s=r.target.id;t.forEach(o=>{var c;const a=(c=o.getAttribute("href"))==null?void 0:c.replace("#","");o.classList.toggle("active",a===s)})}})},{threshold:.4});i.forEach(n=>{const r=document.getElementById(n);r&&e.observe(r)})}function QC(){document.querySelectorAll(".btn-primary, .btn-ghost, .btn-end, .audit-filter, .nav-btn").forEach(t=>{t.classList.add("ripple-host"),t.addEventListener("click",e=>{const n=t.classList.contains("btn-danger")||t.id==="run-scan-btn";ad(t,e,n)})})}function jC(){document.querySelectorAll(".feature-card").forEach(i=>{i.classList.add("ripple-host"),i.addEventListener("click",t=>{ad(i,t),ka(t.clientX,t.clientY,"#00E5C3",8),i.classList.add("card-active"),setTimeout(()=>i.classList.remove("card-active"),500)})})}function tR(){const i=document.getElementById("run-scan-btn");if(!i)return;i.onclick,i.addEventListener("click",e=>{ka(e.clientX,e.clientY,"#00E5C3",14),i.classList.add("scanning"),setTimeout(()=>i.classList.remove("scanning"),200),Xr("// Initiating security scan · aws · us-east-1","ok",4e3)});const t=document.getElementById("scan-bar");t&&new MutationObserver(()=>{parseFloat(t.style.width||"0")>=100&&Xr("// Scan complete · 2 critical findings","warn",5e3)}).observe(t,{attributes:!0,attributeFilter:["style"]})}function eR(){const i=document.getElementById("demo-report-btn");i&&i.addEventListener("click",t=>{ka(t.clientX,t.clientY,"#0FF4FF",10),Xr("// Loading demo audit report...","ok",2500),setTimeout(()=>{Xr("// 8 findings loaded · CIS Score: 74/100","warn",4e3)},2e3)})}function nR(){const i=new MutationObserver(()=>{document.querySelectorAll(".audit-row:not([data-interactive])").forEach(e=>{e.setAttribute("data-interactive","1"),e.addEventListener("click",n=>{e.classList.add("highlight"),setTimeout(()=>e.classList.remove("highlight"),800);const r=e.querySelector(".copy-resource");r&&(navigator.clipboard.writeText(r.textContent).catch(()=>{}),Xr(`// Copied: ${r.textContent.trim()}`,"ok",2e3)),ad(e,n)})})}),t=document.getElementById("audit-table-body");t&&i.observe(t,{childList:!0})}function iR(){const i=document.querySelectorAll(".section-badge"),t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(n.target.style.opacity="1",n.target.style.transform="translateY(0)",t.unobserve(n.target))})},{threshold:.5});i.forEach(e=>{e.style.opacity="0",e.style.transform="translateY(8px)",e.style.transition="opacity 0.5s ease, transform 0.5s ease",t.observe(e)})}function rR(){const i=document.getElementById("topology");if(!i)return;let t=!1;new IntersectionObserver(n=>{n[0].isIntersecting&&!t&&(t=!0,setTimeout(()=>Xr("// Topology graph loaded · 10 nodes · 11 edges","ok",3e3),1200))},{threshold:.35}).observe(i)}function sR(){document.addEventListener("keydown",i=>{(i.metaKey||i.ctrlKey)&&i.key==="k"&&Xr("// Command palette opened","ok",1500)})}function oR(){["fn1","fn2","fn3","fn4"].forEach(i=>{const t=document.getElementById(i);t&&(t.style.pointerEvents="auto",t.style.cursor="none",t.addEventListener("click",e=>{var s;const n=(s=t.querySelector(".float-node-body"))==null?void 0:s.textContent,r=i==="fn1";ka(e.clientX,e.clientY,r?"#FF4560":"#00E5C3",8),Xr(`// ${n==null?void 0:n.trim()}`,r?"danger":"ok",3e3)}))})}function aR(){document.addEventListener("click",i=>{i.target.classList.contains("copy-resource")&&ka(i.clientX,i.clientY,"#00E5C3",6)})}function lR(){QC(),jC(),tR(),eR(),nR(),iR(),rR(),sR(),oR(),aR(),JC()}Ct.registerPlugin(ne);let Nu=!1,gm=!1,_m=null;const cR=window.matchMedia("(prefers-reduced-motion: reduce)").matches;cR&&Ct.globalTimeline.timeScale(10);document.addEventListener("DOMContentLoaded",()=>{var D,st,at;const i=new rE({duration:1.4,easing:V=>Math.min(1,1.001-Math.pow(2,-10*V)),smoothWheel:!0});i.on("scroll",ne.update),Ct.ticker.add(V=>i.raf(V*1e3)),Ct.ticker.lagSmoothing(0);try{YC()}catch(V){console.warn("Three.js init failed:",V)}$C(),qC(),KC(),lR(),uR();const t=document.getElementById("cursor"),e=document.getElementById("cursor-ring");if(t&&e){const V=Ct.quickTo(t,"x",{duration:.1,ease:"power3"}),tt=Ct.quickTo(t,"y",{duration:.1,ease:"power3"}),ot=Ct.quickTo(e,"x",{duration:.22,ease:"power3"}),G=Ct.quickTo(e,"y",{duration:.22,ease:"power3"});window.addEventListener("mousemove",Q=>{V(Q.clientX),tt(Q.clientY),ot(Q.clientX),G(Q.clientY)})}window.setCursorHover=(V,tt=!1)=>{!t||!e||(Ct.to(e,{width:V?54:36,height:V?54:36,borderColor:tt?"#FF4560":"#00E5C3",duration:.2}),Ct.to(t,{backgroundColor:tt?"#FF4560":"#00E5C3",scale:V?.4:1,duration:.2}))},document.querySelectorAll("button, a, .feature-card").forEach(V=>{V.addEventListener("mouseenter",()=>window.setCursorHover(!0,V.classList.contains("hover-danger"))),V.addEventListener("mouseleave",()=>window.setCursorHover(!1))}),Ct.to("#scroll-progress",{width:"100%",ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.1}}),document.querySelectorAll(".btn-magnetic").forEach(V=>{const tt=V.querySelector("span");V.addEventListener("mousemove",ot=>{const G=V.getBoundingClientRect(),Q=ot.clientX-G.left-G.width/2,j=ot.clientY-G.top-G.height/2;Ct.to(V,{x:Q*.32,y:j*.32,duration:.4,ease:"power2.out"}),tt&&Ct.to(tt,{x:Q*.12,y:j*.12,duration:.4,ease:"power2.out"})}),V.addEventListener("mouseleave",()=>{Ct.to(V,{x:0,y:0,duration:.6,ease:"elastic.out(1,0.4)"}),tt&&Ct.to(tt,{x:0,y:0,duration:.6,ease:"elastic.out(1,0.4)"})}),V.addEventListener("mousedown",()=>Ct.to(V,{scale:.96,duration:.1})),V.addEventListener("mouseup",()=>Ct.to(V,{scale:1,duration:.4,ease:"elastic.out(1,0.4)"}))});function n(V){const tt=document.querySelector(V);if(!tt)return[];const ot=[];return tt.querySelectorAll("div").forEach(G=>{const Q=G.textContent;G.innerHTML="",Q.split("").forEach(j=>{const ft=document.createElement("span");ft.textContent=j===" "?" ":j,ft.style.display="inline-block",ft.style.willChange="transform, opacity",G.appendChild(ft),ot.push(ft)})}),ot}document.body.style.overflow="hidden";const r=n(".hero-title"),s=Ct.timeline({onComplete:()=>{var V;document.body.style.overflow="",i.start(),d(),(V=window.SoundEngine)==null||V.shieldChime()}});s.fromTo("#scanline",{scaleX:0},{scaleX:1,duration:.7,ease:"power2.inOut",transformOrigin:"left"}),s.fromTo(".boot-line",{opacity:0,x:-20},{opacity:1,x:0,stagger:.25,duration:.4},"-=0.15"),s.fromTo(".logo-char",{y:-80,rotateX:90,opacity:0},{y:0,rotateX:0,opacity:1,stagger:.045,duration:.45,ease:"back.out(1.4)"},"-=0.1"),s.to(".boot-logo",{textShadow:"0 0 120px #00E5C3, 0 0 240px rgba(0,229,195,0.3)",duration:.25,yoyo:!0,repeat:1});const o={val:0},a=document.getElementById("boot-bar"),c=document.getElementById("boot-counter");s.to(o,{val:100,duration:1.4,ease:"power1.inOut",onUpdate:()=>{a&&(a.style.width=o.val+"%"),c&&(c.textContent=Math.floor(o.val)+"%")}}),s.fromTo("#boot-status",{opacity:0},{opacity:1,duration:.4}),s.to("#overlay-top",{y:"-100%",duration:.65,ease:"power3.inOut",delay:.3}),s.to("#overlay-bottom",{y:"100%",duration:.65,ease:"power3.inOut"},"<"),s.to("#scanline, #boot-content",{opacity:0,duration:.3},"<"),s.set("#overlay",{display:"none"}),s.to("#overlay-top, #overlay-bottom",{},">"),s.fromTo(".bl",{y:-80,rotateX:95,opacity:0,scale:.8},{y:0,rotateX:0,opacity:1,scale:1,stagger:{each:.045,from:"start"},duration:.55,ease:"back.out(1.5)"},"-=0.15"),s.fromTo(".bl.accent",{textShadow:"0 0 0px rgba(0,229,195,0)"},{textShadow:"0 0 40px rgba(0,229,195,0.8)",duration:.4,yoyo:!0,repeat:1},"-=0.2"),s.fromTo("#brand-scan",{width:"0%"},{width:"100%",duration:.9,ease:"power2.inOut"},"-=0.1"),s.to("#brand-tagline",{opacity:1,y:0,duration:.5,ease:"power2.out"},"-=0.3"),r.length&&(s.fromTo(r,{y:60,rotateX:60,opacity:0},{y:0,rotateX:0,opacity:1,stagger:{amount:.5,from:"random"},duration:.45,ease:"back.out(1.2)"},"-=0.2"),Ct.to(r,{y:()=>Ct.utils.random(-200,200),x:()=>Ct.utils.random(-200,200),rotate:()=>Ct.utils.random(-180,180),opacity:0,stagger:{amount:.4,from:"random"},scrollTrigger:{trigger:".hero-title",start:"bottom 25%",scrub:1.5}})),s.fromTo(".hero-sub",{y:30,opacity:0},{y:0,opacity:1,duration:.5},"-=0.3"),s.fromTo(".cta-row",{y:20,opacity:0},{y:0,opacity:1,duration:.4},"-=0.2"),s.fromTo(".threat-meter-section",{y:20,opacity:0},{y:0,opacity:1,duration:.4},"-=0.2"),s.fromTo(".stat-strip",{y:20,opacity:0},{y:0,opacity:1,duration:.4},"-=0.1"),document.querySelectorAll(".bl").forEach((V,tt)=>{Ct.to(V,{y:tt%2===0?-6:-4,duration:2.2+Math.random()*1.5,yoyo:!0,repeat:-1,ease:"sine.inOut",delay:Math.random()*2})}),document.querySelectorAll(".feature-card").forEach(V=>{V.addEventListener("mousemove",tt=>{const ot=V.getBoundingClientRect(),G=((tt.clientX-ot.left)/ot.width*100).toFixed(1),Q=((tt.clientY-ot.top)/ot.height*100).toFixed(1);V.style.setProperty("--mx",G+"%"),V.style.setProperty("--my",Q+"%")})}),document.querySelectorAll(".stat-num").forEach(V=>{const tt=parseInt(V.dataset.target),ot={val:0};s.to(ot,{val:tt,duration:1.5,ease:"power2.out",onUpdate:()=>{V.textContent=Math.floor(ot.val)+(tt>1e3?"+":"")}},"-=0.4")});const l=[{id:"#fn1",yAmp:18,dur:3.8,phase:0},{id:"#fn2",yAmp:14,dur:4.4,phase:1.2},{id:"#fn3",yAmp:20,dur:3.2,phase:.7},{id:"#fn4",yAmp:12,dur:5,phase:2}];s.fromTo(l.map(V=>V.id).filter(V=>document.querySelector(V)),{opacity:0,scale:.85},{opacity:1,scale:1,stagger:.1,duration:.5,ease:"back.out(1.5)"},"-=1"),l.forEach(V=>{document.querySelector(V.id)&&Ct.to(V.id,{y:`+=${V.yAmp}`,duration:V.dur,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:V.phase})}),window.addEventListener("mousemove",V=>{const tt=V.clientX/window.innerWidth-.5;V.clientY/window.innerHeight-.5,l.forEach((ot,G)=>{if(!document.querySelector(ot.id))return;const Q=(G+1)*15;Ct.to(ot.id,{x:tt*Q,duration:1,ease:"power2.out",overwrite:"auto"})})});function u(V=74){const tt=2*Math.PI*54,ot=2*Math.PI*44,G=2*Math.PI*34,Q=tt*(1-V/100),j=ot*(1-.957),ft=G*(1-2/8),gt=V>70?"#00E5C3":V>40?"#FFD166":"#FF4560";Ct.to("#meter-outer",{attr:{strokeDashoffset:Q},stroke:gt,duration:1.6,ease:"power3.out"}),Ct.to("#meter-mid",{attr:{strokeDashoffset:j},duration:1.4,ease:"power3.out",delay:.15}),Ct.to("#meter-inner",{attr:{strokeDashoffset:ft},duration:1.2,ease:"power3.out",delay:.3});const Tt={val:0};Ct.to(Tt,{val:V,duration:1.8,ease:"power2.out",onUpdate:()=>{const Qt=document.getElementById("meter-score");Qt&&(Qt.textContent=Math.floor(Tt.val)+"/100")}})}ne.create({trigger:"#hero",start:"top center",once:!0,onEnter:()=>setTimeout(()=>u(74),1800)}),Ct.fromTo(".feature-card",{y:60,opacity:0},{y:0,opacity:1,stagger:.15,ease:"power2.out",scrollTrigger:{trigger:"#features",start:"top 75%",end:"bottom 45%",scrub:1}}),document.querySelectorAll(".feature-card").forEach(V=>{const tt=V.querySelectorAll(".draw-path");tt.forEach(ot=>{try{const G=ot.getTotalLength();ot.style.strokeDasharray=G,ot.style.strokeDashoffset=G}catch{}}),V.addEventListener("mouseenter",()=>{Ct.to(tt,{strokeDashoffset:0,duration:.8,ease:"power2.out"}),Ct.to(V,{y:-6,duration:.3,ease:"power2.out"})}),V.addEventListener("mouseleave",()=>{tt.forEach(ot=>{try{ot.style.strokeDashoffset=ot.getTotalLength()}catch{}}),Ct.to(V,{y:0,duration:.4,ease:"power2.out"})})});async function d(){try{const V=await fetch("/api/topology");V.ok&&(_m=await V.json())}catch{console.warn("Topology prefetch failed")}}ne.create({trigger:"#topology",start:"top 65%",once:!0,onEnter:()=>{gm||(gm=!0,Ct.fromTo("#topo-container",{opacity:0,scale:.96,y:20},{opacity:1,scale:1,y:0,duration:.9,ease:"power2.out"}),f(_m||h()))}});function h(){return{nodes:[{id:"igw-prod-01",group:"igw",type:"Internet Gateway",region:"us-east-1",status:"DANGER",rules:"Exposes VPC to internet",violations:2},{id:"vpc-main",group:"vpc",type:"VPC",region:"us-east-1",status:"WARNING",rules:"3 public subnets exposed",violations:1},{id:"subnet-pub-1a",group:"subnet",type:"Public Subnet",region:"us-east-1a",status:"WARNING",rules:"Auto-assign public IP on",violations:1},{id:"subnet-pub-1b",group:"subnet",type:"Public Subnet",region:"us-east-1b",status:"HEALTHY",rules:"Clean",violations:0},{id:"subnet-priv",group:"subnet",type:"Private Subnet",region:"us-east-1b",status:"HEALTHY",rules:"Clean",violations:0},{id:"alb-ext",group:"alb",type:"Load Balancer",region:"us-east-1",status:"HEALTHY",rules:"HTTPS redirect enabled",violations:0},{id:"ec2-web-1",group:"ec2",type:"EC2 Instance",region:"us-east-1a",status:"DANGER",rules:"Port 22 exposed to 0.0.0.0/0",violations:2},{id:"ec2-web-2",group:"ec2",type:"EC2 Instance",region:"us-east-1b",status:"HEALTHY",rules:"Clean",violations:0},{id:"rds-primary",group:"ec2",type:"RDS Primary",region:"us-east-1b",status:"HEALTHY",rules:"Encrypted at rest",violations:0},{id:"nat-gw",group:"alb",type:"NAT Gateway",region:"us-east-1a",status:"HEALTHY",rules:"Single AZ — HA risk",violations:0}],edges:[{source:"igw-prod-01",target:"vpc-main",type:"critical"},{source:"vpc-main",target:"subnet-pub-1a",type:"warning"},{source:"vpc-main",target:"subnet-pub-1b",type:"normal"},{source:"vpc-main",target:"subnet-priv",type:"normal"},{source:"subnet-pub-1a",target:"alb-ext",type:"normal"},{source:"alb-ext",target:"ec2-web-1",type:"critical"},{source:"alb-ext",target:"ec2-web-2",type:"normal"},{source:"ec2-web-1",target:"rds-primary",type:"warning"},{source:"ec2-web-2",target:"rds-primary",type:"normal"},{source:"subnet-priv",target:"nat-gw",type:"normal"},{source:"nat-gw",target:"igw-prod-01",type:"normal"}]}}function f(V){var Xt;const tt=document.getElementById("d3-graph");if(!tt)return;const ot=tt.clientWidth||860,G=tt.clientHeight||560,Q=Math.max(...V.nodes.map(X=>X.violations||0),1),j=V.nodes.map(X=>({...X,radius:g(X.group)})),ft=V.edges.map(X=>({...X})),gt=bi("#d3-graph").append("svg").attr("width","100%").attr("height","100%"),Tt=gt.append("defs");["normal","warning","critical"].forEach(X=>{Tt.append("marker").attr("id",`arr-${X}`).attr("viewBox","0 -4 8 8").attr("refX",20).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M0,-4L8,0L0,4").attr("fill",_(X))});const Qt=Tt.append("filter").attr("id","glow").attr("x","-50%").attr("y","-50%").attr("width","200%").attr("height","200%");Qt.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation","4").attr("result","blur"),Qt.append("feMerge").selectAll("feMergeNode").data(["blur","SourceGraphic"]).enter().append("feMergeNode").attr("in",X=>X);const mt=gt.append("g");gt.call(KM().scaleExtent([.25,3]).on("zoom",X=>mt.attr("transform",X.transform)));const Ut=kM(j).force("link",LM(ft).id(X=>X.id).distance(X=>X.type==="critical"?140:115)).force("charge",VM().strength(-420)).force("center",hM(ot/2,G/2)).force("collide",PM().radius(X=>X.radius+16)).force("radial",HM(X=>X.group==="vpc"?0:200,ot/2,G/2).strength(.05)).alphaDecay(.018),Yt=mt.append("g").selectAll("line").data(ft).enter().append("line").attr("stroke",X=>_(X.type)).attr("stroke-width",X=>X.type==="critical"?2.5:1.4).attr("stroke-opacity",.75).attr("stroke-dasharray",X=>X.type==="critical"?"8 4":"none").attr("marker-end",X=>`url(#arr-${X.type})`);Yt.filter(X=>X.type==="critical").each(function(){Ct.to(this,{attr:{strokeDashoffset:-24},duration:.7,ease:"none",repeat:-1})});const kt=wy().on("start",(X,C)=>{X.active||Ut.alphaTarget(.3).restart(),C.fx=C.x,C.fy=C.y}).on("drag",(X,C)=>{C.fx=X.x,C.fy=X.y}).on("end",(X,C)=>{X.active||Ut.alphaTarget(0),C.fx=null,C.fy=null}),Y=mt.append("g").selectAll("g").data(j).enter().append("g").attr("class",X=>`topo-node topo-node-${X.group}`).style("opacity",0).style("cursor","pointer").style("will-change","transform").call(kt);Y.filter(X=>X.group==="vpc").append("circle").attr("r",X=>X.radius).attr("fill","rgba(0,229,195,0.06)").attr("stroke","#00E5C3").attr("stroke-width",2).attr("stroke-dasharray","6 4");const B=Y.filter(X=>X.group==="igw");B.append("circle").attr("r",X=>X.radius).attr("fill","rgba(255,69,96,0.15)").attr("stroke","#FF4560").attr("stroke-width",2).style("filter","url(#glow)"),B.append("circle").attr("class","igw-pulse").attr("fill","none").attr("stroke","#FF4560").attr("stroke-width",1.5).call(function X(C){C.attr("r",12).attr("stroke-opacity",.9).transition().duration(1300).ease(oM).attr("r",28).attr("stroke-opacity",0).on("end",function(){bi(this).call(X)})}),Y.filter(X=>X.group==="subnet").append("rect").attr("x",X=>-X.radius).attr("y",X=>-X.radius).attr("width",X=>X.radius*2).attr("height",X=>X.radius*2).attr("rx",5).attr("fill",X=>X.status==="WARNING"?"rgba(255,209,102,0.1)":"rgba(0,229,195,0.08)").attr("stroke",X=>X.status==="WARNING"?"#FFD166":"#00E5C3").attr("stroke-width",1.5),Y.filter(X=>X.group==="alb").append("rect").attr("x",X=>-X.radius*.9).attr("y",X=>-X.radius*.9).attr("width",X=>X.radius*1.8).attr("height",X=>X.radius*1.8).attr("rx",3).attr("fill","rgba(15,244,255,0.1)").attr("stroke","#0FF4FF").attr("stroke-width",1.5).attr("transform","rotate(45)"),Y.filter(X=>X.group==="ec2").append("circle").attr("r",X=>X.radius).attr("fill",X=>X.status==="DANGER"?"rgba(255,69,96,0.2)":"rgba(255,255,255,0.08)").attr("stroke",X=>X.status==="DANGER"?"#FF4560":"rgba(255,255,255,0.35)").attr("stroke-width",1.5).style("filter",X=>`drop-shadow(0 0 ${4+(X.violations||0)/Q*18}px ${X.status==="DANGER"?"#FF4560":"#00E5C3"})`),Y.append("circle").attr("cx",X=>X.radius-3).attr("cy",X=>-X.radius+3).attr("r",4).attr("fill",X=>X.status==="DANGER"?"#FF4560":X.status==="WARNING"?"#FFD166":"#00E5C3"),Y.append("text").text(X=>X.id).attr("x",X=>X.radius+6).attr("y",4).attr("fill","rgba(255,255,255,0.5)").attr("font-family","JetBrains Mono, monospace").attr("font-size","9px");const te=document.getElementById("d3-tooltip"),qt=document.getElementById("detail-panel");Y.on("mouseover",(X,C)=>{if(te){te.querySelector(".topo-tt-id").textContent=C.id,te.querySelector(".topo-tt-type").textContent=C.type,te.querySelector(".topo-tt-region").textContent=C.region;const M=te.querySelector(".topo-tt-status");M.textContent=C.status,M.className=`topo-tt-status font-bold ${C.status==="DANGER"?"text-red":C.status==="WARNING"?"text-gold":"text-teal"}`;const z=te.querySelector(".topo-tt-rules");z&&(z.textContent=C.rules||""),Ct.to(te,{opacity:1,duration:.15})}window.setCursorHover(!0,C.status==="DANGER")}).on("mousemove",X=>{if(!te)return;const C=tt.getBoundingClientRect();Ct.set(te,{left:X.pageX-C.left+14,top:X.pageY-C.top-10})}).on("mouseout",()=>{te&&Ct.to(te,{opacity:0,duration:.15}),window.setCursorHover(!1)}).on("click",(X,C)=>{var z;if(!qt)return;qt.querySelector(".detail-id").textContent=C.id,qt.querySelector(".detail-type").textContent=C.type,qt.querySelector(".detail-region").textContent=C.region,qt.querySelector(".detail-rules").textContent=C.rules||"—",qt.querySelector(".detail-group").textContent=C.group;const M=qt.querySelector(".detail-status");M.textContent=C.status,M.className=`detail-status font-bold ${C.status==="DANGER"?"text-red":C.status==="WARNING"?"text-gold":"text-teal"}`,Ct.fromTo(qt,{x:80,opacity:0},{x:0,opacity:1,duration:.4,ease:"power3.out"}),(z=window.SoundEngine)==null||z.click()}),(Xt=document.getElementById("detail-close"))==null||Xt.addEventListener("click",()=>{Ct.to(qt,{x:80,opacity:0,duration:.3,ease:"power3.in"})}),Ut.on("tick",()=>{Yt.attr("x1",X=>X.source.x).attr("y1",X=>X.source.y).attr("x2",X=>X.target.x).attr("y2",X=>X.target.y),Y.attr("transform",X=>`translate(${X.x},${X.y})`)}),Ut.on("end",()=>Y.transition().duration(400).delay((X,C)=>C*35).style("opacity",1)),setTimeout(()=>Ct.to(".topo-node",{opacity:1,stagger:.04,duration:.35}),1400)}function g(V){return{vpc:36,subnet:22,igw:12,alb:14,ec2:10}[V]||10}function _(V){return V==="critical"?"#FF4560":V==="warning"?"#FFD166":"rgba(0,229,195,0.4)"}document.querySelectorAll(".audit-filter").forEach(V=>{V.addEventListener("click",()=>{var ot;document.querySelectorAll(".audit-filter").forEach(G=>G.classList.remove("active")),V.classList.add("active");const tt=V.dataset.filter;document.querySelectorAll(".audit-row").forEach(G=>{G.style.display=tt==="ALL"||G.dataset.severity===tt?"":"none"}),(ot=window.SoundEngine)==null||ot.click()})});function p(V,tt=!1){var Tt,Qt;const ot=document.getElementById("audit-table-body");if(!ot)return;const G=document.getElementById("audit-placeholder");G&&G.remove();const Q={CRITICAL:"text-red",HIGH:"text-gold",MEDIUM:"text-gold",LOW:"text-cyan",PASS:"text-teal"},j={CRITICAL:"w-full",HIGH:"w-4/5",MEDIUM:"w-3/5",LOW:"w-1/3",PASS:"w-full opacity-25"},ft={CRITICAL:"bg-red",HIGH:"bg-gold",MEDIUM:"bg-gold",LOW:"bg-cyan",PASS:"bg-teal"},gt=document.createElement("tr");gt.className="audit-row border-b border-white/5 hover:bg-white/3 transition-colors group cursor-none",gt.dataset.severity=V.severity,gt.innerHTML=`
      <td class="py-4 px-4"><div class="w-16 h-1.5 bg-void rounded overflow-hidden"><div class="sev-bar h-full ${ft[V.severity]} ${j[V.severity]} origin-left"></div></div></td>
      <td class="py-4 px-4 font-mono text-white/70 group-hover:text-white transition-colors text-sm">${V.ruleId}</td>
      <td class="py-4 px-4 text-white/60 text-sm">${V.title}</td>
      <td class="py-4 px-4 font-mono text-teal/80 text-sm copy-resource" title="Click to copy">${V.resource}</td>
      <td class="py-4 px-4 text-right font-mono text-sm ${Q[V.severity]} ${V.severity==="CRITICAL"?"animate-pulse":""}">${V.severity}</td>`,(Tt=gt.querySelector(".copy-resource"))==null||Tt.addEventListener("click",mt=>{var Ut;navigator.clipboard.writeText(mt.target.textContent).catch(()=>{}),Ct.fromTo(mt.target,{color:"#00E5C3"},{color:"",duration:.8}),(Ut=window.SoundEngine)==null||Ut.click()}),gt.addEventListener("mouseenter",()=>window.setCursorHover(!0,V.severity==="CRITICAL")),gt.addEventListener("mouseleave",()=>window.setCursorHover(!1)),ot.appendChild(gt),tt&&(Ct.fromTo(gt,{x:-40,opacity:0},{x:0,opacity:1,duration:.45,ease:"power2.out"}),Ct.fromTo(gt.querySelector(".sev-bar"),{scaleX:0},{scaleX:1,duration:.5,ease:"power3.out",transformOrigin:"left"}),V.severity==="CRITICAL"&&((Qt=window.SoundEngine)==null||Qt.scanBeep()))}(()=>{const V=Ct.timeline({paused:!0});V.fromTo(".pulse-ring",{scale:0,opacity:.25},{scale:3,opacity:0,duration:2.5,stagger:.4,repeat:-1,ease:"power1.out"});const tt=document.getElementById("shield-path");if(tt){try{const ot=tt.getTotalLength();tt.style.strokeDasharray=ot,tt.style.strokeDashoffset=ot}catch{}V.to(tt,{strokeDashoffset:0,duration:1.8,ease:"power2.inOut"},.2)}V.fromTo("#shield-check",{opacity:0,scale:0},{opacity:1,scale:1,duration:.5,ease:"back.out(2)",transformOrigin:"center"},"-=0.3"),V.fromTo(".end-line-1",{y:40,opacity:0},{y:0,opacity:1,duration:.6},"-=0.2"),V.fromTo(".end-line-2",{y:40,opacity:0},{y:0,opacity:1,duration:.6},"-=0.35"),V.fromTo("#end-scanline",{scaleX:0},{scaleX:1,duration:1.2,ease:"power2.inOut",transformOrigin:"left"},"-=0.4"),V.fromTo(".end-sub",{opacity:0},{opacity:1,duration:.5},"-=0.7"),V.to("#end-btn",{boxShadow:"0 0 60px rgba(0,229,195,0.6)",duration:1.2,yoyo:!0,repeat:-1,ease:"sine.inOut"}),ne.create({trigger:"#ending",start:"top 62%",once:!0,onEnter:()=>{var ot;V.play(),(ot=window.SoundEngine)==null||ot.shieldChime()}})})();const m=document.getElementById("run-scan-btn"),x=document.getElementById("scan-progress-container"),S=document.getElementById("scan-bar"),v=document.getElementById("scan-pct"),b=document.getElementById("scan-phase"),T=document.getElementById("scan-msg");x&&Ct.set(x,{xPercent:-50,y:120,opacity:0,pointerEvents:"none"});const w=()=>Ct.to(x,{y:0,opacity:1,pointerEvents:"auto",duration:.55,ease:"back.out(1.5)"}),y=(V=2.5)=>Ct.to(x,{y:120,opacity:0,pointerEvents:"none",duration:.4,delay:V});function E(V,tt=!1){S&&Ct.to(S,{width:V+"%",duration:.4,backgroundColor:tt?"#FF4560":"#00E5C3"}),v&&(v.textContent=V+"%")}m==null||m.addEventListener("click",async()=>{var V;if(!Nu){Nu=!0,Ct.to(m,{opacity:.5,scale:.97,duration:.2}),m.disabled=!0,w(),b&&(b.textContent="// STARTING",b.style.color="#00E5C3"),T&&(T.textContent="Connecting to CloudGuard API..."),E(0),(V=window.SoundEngine)==null||V.bootHum();try{const tt=await fetch("/api/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({provider:"aws",region:"us-east-1"})});if(!tt.ok)throw new Error(`API ${tt.status}`);const{jobId:ot}=await tt.json();await new Promise((G,Q)=>{const j=new EventSource(`/api/scan/${ot}/status`);let ft=null;j.onmessage=async gt=>{var kt,Y;const{phase:Tt,progress:Qt,message:mt,reportId:Ut}=JSON.parse(gt.data),Yt=(mt==null?void 0:mt.includes("CRITICAL"))||(mt==null?void 0:mt.includes("WARNING"));if(E(Qt,Yt),b&&(b.textContent="// "+Tt.toUpperCase(),b.style.color=Yt?"#FF4560":"#00E5C3"),T&&(T.textContent=mt),Ut&&(ft=Ut),Yt&&((kt=window.SoundEngine)==null||kt.criticalAlert()),Tt==="complete"){if(j.close(),ft)try{await U(ft)}catch(B){console.warn(B)}y(2),u(74),(Y=window.SoundEngine)==null||Y.shieldChime(),G()}},j.onerror=()=>{j.close(),b&&(b.textContent="// ERROR"),y(3),Q()}})}catch(tt){b&&(b.textContent="// ERROR",b.style.color="#FF4560"),T&&(T.textContent=tt.message),y(3)}finally{Nu=!1,Ct.to(m,{opacity:1,scale:1,duration:.3}),m.disabled=!1}}});async function U(V){const tt=await fetch(`/api/report/${V}`);if(!tt.ok)throw new Error("Report fetch failed");const{findings:ot,cisScore:G}=await tt.json(),Q=document.getElementById("audit-table-body");Q&&(Q.innerHTML=""),ot.forEach((ft,gt)=>setTimeout(()=>p(ft,!0),gt*95));const j=document.getElementById("cis-score");if(j&&G){const ft={val:0};Ct.to(ft,{val:G,duration:1.2,ease:"power2.out",onUpdate(){j.textContent=Math.floor(ft.val)+"/100"}})}setTimeout(()=>{var ft;return(ft=document.getElementById("audit"))==null?void 0:ft.scrollIntoView({behavior:"smooth",block:"start"})},ot.length*95+400)}(D=document.getElementById("demo-report-btn"))==null||D.addEventListener("click",async()=>{try{const V=await fetch("/api/report/demo");if(!V.ok)throw new Error("unavailable");const{findings:tt,cisScore:ot}=await V.json(),G=document.getElementById("audit-table-body");G&&(G.innerHTML=""),tt.forEach((j,ft)=>setTimeout(()=>p(j,!0),ft*80));const Q=document.getElementById("cis-score");if(Q&&ot){const j={val:0};Ct.to(j,{val:ot,duration:1.2,ease:"power2.out",onUpdate(){Q.textContent=Math.floor(j.val)+"/100"}})}u(ot||74),setTimeout(()=>{var j;return(j=document.getElementById("audit"))==null?void 0:j.scrollIntoView({behavior:"smooth",block:"start"})},tt.length*80+400)}catch(V){console.warn("Demo report:",V.message)}}),document.querySelectorAll(".feature-card[data-action]").forEach(V=>{V.addEventListener("click",()=>{var ot,G,Q,j,ft;const tt=V.dataset.action;if((ot=window.SoundEngine)==null||ot.click(),tt==="topology")(G=document.getElementById("topology"))==null||G.scrollIntoView({behavior:"smooth",block:"start"});else if(tt==="scan")(Q=document.getElementById("run-scan-btn"))==null||Q.click();else if(tt==="audit"){const gt=document.getElementById("audit-table-body");gt&&!gt.querySelector(".audit-row")?(j=document.getElementById("demo-report-btn"))==null||j.click():(ft=document.getElementById("audit"))==null||ft.scrollIntoView({behavior:"smooth",block:"start"})}})}),setTimeout(async()=>{try{const V=await fetch("/api/report/demo");if(!V.ok)return;const{findings:tt,cisScore:ot}=await V.json(),G=document.getElementById("audit-table-body");if(G&&!G.querySelector(".audit-row")){tt.forEach((j,ft)=>setTimeout(()=>p(j,!1),ft*30));const Q=document.getElementById("cis-score");Q&&ot&&(Q.textContent=ot+"/100")}}catch{}},5500);const P=document.getElementById("deploy-modal"),F=document.getElementById("deploy-box"),k=document.getElementById("deploy-terminal"),R=document.getElementById("deploy-status"),N=document.getElementById("deploy-status-text"),L=document.getElementById("deploy-url"),I=document.getElementById("deploy-copy-btn"),q=[{t:0,cls:"dim",msg:"cloudguard-deploy v4.2.1 — production build"},{t:400,cls:"dim",msg:"────────────────────────────────────────────"},{t:700,cls:"normal",msg:"$ git status"},{t:1100,cls:"ok",msg:"  On branch main — nothing to commit, working tree clean ✓"},{t:1500,cls:"normal",msg:"$ npm run build --prefix ./client"},{t:2200,cls:"ok",msg:"  vite v5.4.21 building for production..."},{t:2800,cls:"ok",msg:"  ✓ 590 modules transformed."},{t:3200,cls:"ok",msg:"  dist/assets/index.js   756.90 kB │ gzip: 215.50 kB"},{t:3600,cls:"ok",msg:"  ✓ built in 3.99s"},{t:4100,cls:"normal",msg:"$ node server/app.js --env production"},{t:4600,cls:"ok",msg:"  ✓ Express server listening on port 3000"},{t:5e3,cls:"ok",msg:"  ✓ Static assets served from /client/dist"},{t:5400,cls:"normal",msg:"$ npx localtunnel --port 3000 --subdomain cloudguard-v4"},{t:6200,cls:"ok",msg:"  ✓ Tunnel established — keepalive active"},{t:6800,cls:"ok",msg:"  ✓ bypass-tunnel-reminder header applied"},{t:7200,cls:"warn",msg:"  ⚠ CIS Score: 74/100 — 2 critical findings need remediation"},{t:7800,cls:"dim",msg:"────────────────────────────────────────────"},{t:8200,cls:"ok",msg:"  ✓ CloudGuard deployed successfully!"},{t:8700,cls:"ok",msg:"  ✓ Public URL → https://cloudguard-v4.loca.lt",final:!0}];function $(){var V;P&&(P.style.display="flex",Ct.fromTo(P,{opacity:0},{opacity:1,duration:.2}),Ct.fromTo(F,{y:30,scale:.97},{y:0,scale:1,duration:.3,ease:"power3.out"}),k&&(k.innerHTML=""),L&&(L.style.display="none"),I&&(I.style.display="none"),R&&R.classList.remove("live"),N&&(N.textContent="Initializing..."),(V=window.SoundEngine)==null||V.bootHum(),q.forEach(tt=>{setTimeout(()=>{var G;if(!k)return;const ot=document.createElement("div");ot.className=`deploy-line ${tt.cls}`,ot.textContent=tt.msg,k.appendChild(ot),k.scrollTop=k.scrollHeight,N&&(N.textContent=tt.msg.replace(/[$>✓⚠]/g,"").trim()),tt.final&&(R&&R.classList.add("live"),N&&(N.textContent="Live & Running"),L&&(L.style.display="block",L.textContent=window.location.origin||"https://cloudguard-v4.loca.lt"),I&&(I.style.display="inline-block"),(G=window.SoundEngine)==null||G.shieldChime(),Ct.fromTo(F,{boxShadow:"0 0 0 rgba(0,229,195,0)"},{boxShadow:"0 0 80px rgba(0,229,195,0.25)",duration:.8,yoyo:!0,repeat:1}))},tt.t)}))}(st=document.getElementById("end-btn"))==null||st.addEventListener("click",$),(at=document.getElementById("deploy-close"))==null||at.addEventListener("click",()=>{Ct.to(P,{opacity:0,duration:.18,onComplete:()=>{P.style.display="none"}})}),I==null||I.addEventListener("click",()=>{var tt;navigator.clipboard.writeText((L==null?void 0:L.textContent)||"").catch(()=>{});const V=I.textContent;I.textContent="COPIED ✓",setTimeout(()=>{I.textContent=V},2e3),(tt=window.SoundEngine)==null||tt.click()}),P==null||P.addEventListener("click",V=>{V.target===P&&Ct.to(P,{opacity:0,duration:.18,onComplete:()=>{P.style.display="none"}})})});function uR(){const i=document.getElementById("shader-canvas");if(!i)return;const t=i.getContext("webgl");if(!t)return;const e=()=>{var p,m;i.width=((p=i.parentElement)==null?void 0:p.offsetWidth)||window.innerWidth,i.height=((m=i.parentElement)==null?void 0:m.offsetHeight)||window.innerHeight,t.viewport(0,0,i.width,i.height)};e(),window.addEventListener("resize",e);const n="attribute vec2 a_pos; void main(){ gl_Position=vec4(a_pos,0,1); }",r=`
    precision mediump float;
    uniform float uTime;
    uniform vec2  uRes;
    uniform vec2  uMouse;
    float hexGrid(vec2 uv){
      vec2 r=vec2(1.0,1.732),h=r*0.5;
      vec2 a=mod(uv,r)-h, b=mod(uv-h,r)-h;
      return min(length(a),length(b));
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/uRes;
      vec2 mu=uMouse/uRes;
      float hex=smoothstep(0.0,0.08,hexGrid(uv*18.0));
      float plasma=sin(uv.x*8.0+uTime)*cos(uv.y*6.0+uTime*0.7)*0.5+0.5;
      float dist=distance(uv,mu);
      float ripple=sin(dist*42.0-uTime*3.2)*exp(-dist*6.0);
      vec3 teal=vec3(0.0,0.898,0.765);
      vec3 dark=vec3(0.008,0.039,0.059);
      vec3 col=mix(dark,teal,(plasma+ripple*0.6)*(1.0-hex)*0.14);
      gl_FragColor=vec4(col,1.0);
    }`,s=(p,m)=>{const x=t.createShader(p);return t.shaderSource(x,m),t.compileShader(x),x},o=t.createProgram();t.attachShader(o,s(t.VERTEX_SHADER,n)),t.attachShader(o,s(t.FRAGMENT_SHADER,r)),t.linkProgram(o),t.useProgram(o);const a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW);const c=t.getAttribLocation(o,"a_pos");t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);const l=t.getUniformLocation(o,"uTime"),u=t.getUniformLocation(o,"uRes"),d=t.getUniformLocation(o,"uMouse");let h=0,f=0;document.addEventListener("mousemove",p=>{h=p.clientX,f=i.height-p.clientY});const g=performance.now(),_=()=>{t.uniform1f(l,(performance.now()-g)/1e3),t.uniform2f(u,i.width,i.height),t.uniform2f(d,h,f),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(_)};_()}
