import{a as Me,b as Ee,c as Ae,d as Ie,e as Ne}from"./chunk-RQFMUMHO.js";import{$ as f,A as be,B as E,C as q,Ca as R,D as H,Da as x,G as T,Ga as ie,H as ye,Ha as ne,I as ve,Ia as Oe,N as Te,Na as se,O as g,Oa as Ce,P as V,Q as $,Qa as oe,Ra as ae,T as D,U as _,Ua as K,V as De,Va as Re,Wa as F,X as l,Xa as B,Z as Se,_ as L,a as Y,aa as N,b as _e,ba as Z,ca as X,fb as j,g as fe,ga as P,h as y,ha as C,ia as k,m as ge,qa as ee,r as G,sb as re,tb as U,u as I,v as me,va as A,vb as z,wa as we,xb as M,z as b,za as te}from"./chunk-L3PLJJSQ.js";var Fe=["*"];var ht=["dialog"];var Be={animation:!0,transitionTimerDelayMs:5},Ge=(()=>{let e=class e{constructor(){this.animation=Be.animation}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function ut(i){let{transitionDelay:e,transitionDuration:a}=window.getComputedStyle(i),t=parseFloat(e),n=parseFloat(a);return(t+n)*1e3}function ue(i){return typeof i=="string"}function le(i){return i!=null}function pt(i){return i&&i.then}function _t(i,e){return!e||typeof i.closest>"u"?null:i.closest(e)}function He(i){return(i||document.body).getBoundingClientRect()}function ft(i){return e=>new fe(a=>{let t=o=>i.run(()=>a.next(o)),n=o=>i.run(()=>a.error(o)),s=()=>i.run(()=>a.complete());return e.subscribe({next:t,error:n,complete:s})})}function Ve(i=document){let e=i?.activeElement;return e?e.shadowRoot?Ve(e.shadowRoot):e:null}var gt=()=>{},{transitionTimerDelayMs:mt}=Be,W=new Map,S=(i,e,a,t)=>{let n=t.context||{},s=W.get(e);if(s)switch(t.runningTransition){case"continue":return ge;case"stop":i.run(()=>s.transition$.complete()),n=Object.assign(s.context,n),W.delete(e)}let o=a(e,t.animation,n)||gt;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return i.run(()=>o()),G(void 0).pipe(ft(i));let r=new y,u=new y,c=r.pipe(ve(!0));W.set(e,{transition$:r,complete:()=>{u.next(),u.complete()},context:n});let p=ut(e);return i.runOutsideAngular(()=>{let m=b(e,"transitionend").pipe(g(c),E(({target:d})=>d===e)),h=be(p+mt).pipe(g(c));q(h,m,u).pipe(g(c)).subscribe(()=>{W.delete(e),i.run(()=>{o(),r.next(),r.complete()})})}),r.asObservable()};var $e=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var Le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),je=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var v=function(i){return i[i.Tab=9]="Tab",i[i.Enter=13]="Enter",i[i.Escape=27]="Escape",i[i.Space=32]="Space",i[i.PageUp=33]="PageUp",i[i.PageDown=34]="PageDown",i[i.End=35]="End",i[i.Home=36]="Home",i[i.ArrowLeft=37]="ArrowLeft",i[i.ArrowUp=38]="ArrowUp",i[i.ArrowRight=39]="ArrowRight",i[i.ArrowDown=40]="ArrowDown",i}(v||{});var Q=(i,e)=>e?e.some(a=>a.contains(i)):!1,ke=(i,e)=>!e||_t(i,e)!=null,bt=(()=>{let i=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(i()||e()):!1})(),yt=i=>bt?()=>setTimeout(()=>i(),100):i;function Ue(i,e,a,t,n,s,o,r){a&&i.runOutsideAngular(yt(()=>{let u=h=>{let d=h.target;return h.button===2||Q(d,o)?!1:a==="inside"?Q(d,s)&&ke(d,r):a==="outside"?!Q(d,s):ke(d,r)||!Q(d,s)},c=b(e,"keydown").pipe(g(n),E(h=>h.which===v.Escape),V(h=>h.preventDefault())),p=b(e,"mousedown").pipe(I(u),g(n)),m=b(e,"mouseup").pipe($(p),E(([h,d])=>d),ye(0),g(n));q([c.pipe(I(h=>0)),m.pipe(I(h=>1))]).subscribe(h=>i.run(()=>t(h)))}))}var ze=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function We(i){let e=Array.from(i.querySelectorAll(ze)).filter(a=>a.tabIndex!==-1);return[e[0],e[e.length-1]]}var vt=(i,e,a,t=!1)=>{i.runOutsideAngular(()=>{let n=b(e,"focusin").pipe(g(a),I(s=>s.target));b(e,"keydown").pipe(g(a),E(s=>s.which===v.Tab),$(n)).subscribe(([s,o])=>{let[r,u]=We(e);(o===r||o===e)&&s.shiftKey&&(u.focus(),s.preventDefault()),o===u&&!s.shiftKey&&(r.focus(),s.preventDefault())}),t&&b(e,"click").pipe(g(a),$(n),I(s=>s[1])).subscribe(s=>s.focus())})},Tt=(()=>{let e=class e{constructor(){this._element=l(M).documentElement}isRTL(){return(this._element.getAttribute("dir")||"").toLowerCase()==="rtl"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Dt=/\s+/,St=/  +/gi,wt={top:["top"],bottom:["bottom"],start:["left","right"],left:["left"],end:["right","left"],right:["right"],"top-start":["top-start","top-end"],"top-left":["top-start"],"top-end":["top-end","top-start"],"top-right":["top-end"],"bottom-start":["bottom-start","bottom-end"],"bottom-left":["bottom-start"],"bottom-end":["bottom-end","bottom-start"],"bottom-right":["bottom-end"],"start-top":["left-start","right-start"],"left-top":["left-start"],"start-bottom":["left-end","right-end"],"left-bottom":["left-end"],"end-top":["right-start","left-start"],"right-top":["right-start"],"end-bottom":["right-end","left-end"],"right-bottom":["right-end"]};function Ot(i,e){let[a,t]=wt[i];return e&&t||a}var Ct=/^left/,Rt=/^right/,Mt=/^start/,Et=/^end/;function At(i,e){let[a,t]=e.split("-"),n=a.replace(Ct,"start").replace(Rt,"end"),s=[n];if(t){let o=t;(a==="left"||a==="right")&&(o=o.replace(Mt,"top").replace(Et,"bottom")),s.push(`${n}-${o}`)}return i&&(s=s.map(o=>`${i}-${o}`)),s.join(" ")}function Pe({placement:i,baseClass:e},a){let t=Array.isArray(i)?i:i.split(Dt),n=["top","bottom","start","end","top-start","top-end","bottom-start","bottom-end","start-top","start-bottom","end-top","end-bottom"],s=t.findIndex(c=>c==="auto");s>=0&&n.forEach(function(c){t.find(p=>p.search("^"+c)!==-1)==null&&t.splice(s++,1,c)});let o=t.map(c=>Ot(c,a.isRTL()));return{placement:o.shift(),modifiers:[{name:"bootstrapClasses",enabled:!!e,phase:"write",fn({state:c}){let p=new RegExp(e+"(-[a-z]+)*","gi"),m=c.elements.popper,h=c.placement,d=m.className;d=d.replace(p,""),d+=` ${At(e,h)}`,d=d.trim().replace(St," "),m.className=d}},Ee,Ie,Me,{enabled:!0,name:"flip",options:{fallbackPlacements:o}},{enabled:!0,name:"preventOverflow",phase:"main",fn:function(){}}]}}function xe(i){return i}function Qe(){let i=l(Tt),e=null;return{createPopper(a){if(!e){let n=(a.updatePopperOptions||xe)(Pe(a,i));e=Ne(a.hostElement,a.targetElement,n)}},update(){e&&e.update()},setOptions(a){if(e){let n=(a.updatePopperOptions||xe)(Pe(a,i));e.setOptions(n)}},destroy(){e&&(e.destroy(),e=null)}}}function Je(i){return e=>(e.modifiers.push(Ae,{name:"offset",options:{offset:()=>i}}),e)}var vn=new Date(1882,10,12),Tn=new Date(2174,10,25);var Dn=1e3*60*60*24;var pe=1080,It=24*pe,Nt=12*pe+793,Sn=29*It+Nt,wn=11*pe+204;var Ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),kt=(()=>{let e=class e{constructor(){this.autoClose=!0,this.placement=["bottom-start","bottom-end","top-start","top-end"],this.popperOptions=t=>t,this.container=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Pt=(()=>{let e=class e{constructor(){this._disabled=!1,this.nativeElement=l(C).nativeElement,this.tabindex=0}set disabled(t){this._disabled=t===""||t===!0}get disabled(){return this._disabled}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=N({type:e,selectors:[["","ngbDropdownItem",""]],hostAttrs:[1,"dropdown-item"],hostVars:3,hostBindings:function(n,s){n&2&&(se("tabIndex",s.disabled?-1:s.tabindex),R("disabled",s.disabled))},inputs:{tabindex:"tabindex",disabled:"disabled"},standalone:!0});let i=e;return i})();var xt=(()=>{let e=class e{constructor(){this.dropdown=l(qe),this.nativeElement=l(C).nativeElement}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=N({type:e,selectors:[["","ngbDropdownMenu",""]],contentQueries:function(n,s,o){if(n&1&&K(o,Pt,4),n&2){let r;F(r=B())&&(s.menuItems=r)}},hostVars:4,hostBindings:function(n,s){n&1&&Ce("keydown.ArrowUp",function(r){return s.dropdown.onKeyDown(r)})("keydown.ArrowDown",function(r){return s.dropdown.onKeyDown(r)})("keydown.Home",function(r){return s.dropdown.onKeyDown(r)})("keydown.End",function(r){return s.dropdown.onKeyDown(r)})("keydown.Enter",function(r){return s.dropdown.onKeyDown(r)})("keydown.Space",function(r){return s.dropdown.onKeyDown(r)})("keydown.Tab",function(r){return s.dropdown.onKeyDown(r)})("keydown.Shift.Tab",function(r){return s.dropdown.onKeyDown(r)}),n&2&&R("dropdown-menu",!0)("show",s.dropdown.isOpen())},standalone:!0});let i=e;return i})(),Ft=(()=>{let e=class e{constructor(){this.dropdown=l(qe),this.nativeElement=l(C).nativeElement}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=N({type:e,selectors:[["","ngbDropdownAnchor",""]],hostAttrs:[1,"dropdown-toggle"],hostVars:3,hostBindings:function(n,s){n&2&&(te("aria-expanded",s.dropdown.isOpen()),R("show",s.dropdown.isOpen()))},standalone:!0});let i=e;return i})();var qe=(()=>{let e=class e{constructor(){this._changeDetector=l(U),this._config=l(kt),this._document=l(M),this._ngZone=l(A),this._nativeElement=l(C).nativeElement,this._destroyCloseHandlers$=new y,this._bodyContainer=null,this._positioning=Qe(),this.autoClose=this._config.autoClose,this._open=!1,this.placement=this._config.placement,this.popperOptions=this._config.popperOptions,this.container=this._config.container,this.openChange=new k}ngOnInit(){this.display||(this.display=this._nativeElement.closest(".navbar")?"static":"dynamic")}ngAfterContentInit(){this._ngZone.onStable.pipe(T(1)).subscribe(()=>{this._applyPlacementClasses(),this._open&&this._setCloseHandlers()})}ngOnChanges(t){if(t.container&&this._open&&this._applyContainer(this.container),t.placement&&!t.placement.firstChange&&(this._positioning.setOptions({hostElement:this._anchor.nativeElement,targetElement:this._bodyContainer||this._menu.nativeElement,placement:this.placement,appendToBody:this.container==="body"}),this._applyPlacementClasses()),t.dropdownClass){let{currentValue:n,previousValue:s}=t.dropdownClass;this._applyCustomDropdownClass(n,s)}t.autoClose&&this._open&&(this.autoClose=t.autoClose.currentValue,this._setCloseHandlers())}isOpen(){return this._open}open(){this._open||(this._open=!0,this._applyContainer(this.container),this.openChange.emit(!0),this._setCloseHandlers(),this._anchor&&(this._anchor.nativeElement.focus(),this.display==="dynamic"&&this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:this._anchor.nativeElement,targetElement:this._bodyContainer||this._menu.nativeElement,placement:this.placement,appendToBody:this.container==="body",updatePopperOptions:t=>this.popperOptions(Je([0,2])(t))}),this._applyPlacementClasses(),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>this._positionMenu())})))}_setCloseHandlers(){this._destroyCloseHandlers$.next(),Ue(this._ngZone,this._document,this.autoClose,t=>{this.close(),t===0&&this._anchor.nativeElement.focus()},this._destroyCloseHandlers$,this._menu?[this._menu.nativeElement]:[],this._anchor?[this._anchor.nativeElement]:[],".dropdown-item,.dropdown-divider")}close(){this._open&&(this._open=!1,this._resetContainer(),this._positioning.destroy(),this._zoneSubscription?.unsubscribe(),this._destroyCloseHandlers$.next(),this.openChange.emit(!1),this._changeDetector.markForCheck())}toggle(){this.isOpen()?this.close():this.open()}ngOnDestroy(){this.close()}onKeyDown(t){let n=t.which,s=this._getMenuElements(),o=-1,r=null,u=this._isEventFromToggle(t);if(!u&&s.length&&s.forEach((c,p)=>{c.contains(t.target)&&(r=c),c===Ve(this._document)&&(o=p)}),n===v.Space||n===v.Enter){r&&(this.autoClose===!0||this.autoClose==="inside")&&b(r,"click").pipe(T(1)).subscribe(()=>this.close());return}if(n===v.Tab){if(t.target&&this.isOpen()&&this.autoClose)if(this._anchor.nativeElement===t.target){this.container==="body"&&!t.shiftKey?(this._menu.nativeElement.setAttribute("tabindex","0"),this._menu.nativeElement.focus(),this._menu.nativeElement.removeAttribute("tabindex")):t.shiftKey&&this.close();return}else if(this.container==="body"){let c=this._menu.nativeElement.querySelectorAll(ze);t.shiftKey&&t.target===c[0]?(this._anchor.nativeElement.focus(),t.preventDefault()):!t.shiftKey&&t.target===c[c.length-1]&&(this._anchor.nativeElement.focus(),this.close())}else b(t.target,"focusout").pipe(T(1)).subscribe(({relatedTarget:c})=>{this._nativeElement.contains(c)||this.close()});return}if(u||r){if(this.open(),s.length){switch(n){case v.ArrowDown:o=Math.min(o+1,s.length-1);break;case v.ArrowUp:if(this._isDropup()&&o===-1){o=s.length-1;break}o=Math.max(o-1,0);break;case v.Home:o=0;break;case v.End:o=s.length-1;break}s[o].focus()}t.preventDefault()}}_isDropup(){return this._nativeElement.classList.contains("dropup")}_isEventFromToggle(t){return this._anchor.nativeElement.contains(t.target)}_getMenuElements(){return this._menu?this._menu.menuItems.filter(({disabled:t})=>!t).map(({nativeElement:t})=>t):[]}_positionMenu(){let t=this._menu;this.isOpen()&&t&&(this.display==="dynamic"?(this._positioning.update(),this._applyPlacementClasses()):this._applyPlacementClasses(this._getFirstPlacement(this.placement)))}_getFirstPlacement(t){return Array.isArray(t)?t[0]:t.split(" ")[0]}_resetContainer(){this._menu&&this._nativeElement.appendChild(this._menu.nativeElement),this._bodyContainer&&(this._document.body.removeChild(this._bodyContainer),this._bodyContainer=null)}_applyContainer(t=null){if(this._resetContainer(),t==="body"){let n=this._menu.nativeElement,s=this._bodyContainer=this._bodyContainer||this._document.createElement("div");s.style.position="absolute",n.style.position="static",s.style.zIndex="1055",s.appendChild(n),this._document.body.appendChild(s)}this._applyCustomDropdownClass(this.dropdownClass)}_applyCustomDropdownClass(t,n){let s=this.container==="body"?this._bodyContainer:this._nativeElement;s&&(n&&s.classList.remove(n),t&&s.classList.add(t))}_applyPlacementClasses(t){if(this._menu){t||(t=this._getFirstPlacement(this.placement)),this._nativeElement.classList.remove("dropup","dropdown"),this.display==="static"?this._menu.nativeElement.setAttribute("data-bs-popper","static"):this._menu.nativeElement.removeAttribute("data-bs-popper");let n=t.search("^top")!==-1?"dropup":"dropdown";this._nativeElement.classList.add(n),this._bodyContainer&&(this._bodyContainer.classList.remove("dropup","dropdown"),this._bodyContainer.classList.add(n))}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=N({type:e,selectors:[["","ngbDropdown",""]],contentQueries:function(n,s,o){if(n&1&&(K(o,xt,5),K(o,Ft,5)),n&2){let r;F(r=B())&&(s._menu=r.first),F(r=B())&&(s._anchor=r.first)}},hostVars:2,hostBindings:function(n,s){n&2&&R("show",s.isOpen())},inputs:{autoClose:"autoClose",dropdownClass:"dropdownClass",_open:[Se.None,"open","_open"],placement:"placement",popperOptions:"popperOptions",container:"container",display:"display"},outputs:{openChange:"openChange"},exportAs:["ngbDropdown"],standalone:!0,features:[X]});let i=e;return i})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),Bt=(()=>{let e=class e{constructor(){this._ngbConfig=l(Ge),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),w=class{constructor(e,a,t){this.nodes=e,this.viewRef=a,this.componentRef=t}},ce=class{constructor(e){this._componentType=e,this._windowRef=null,this._contentRef=null,this._document=l(M),this._applicationRef=l(re),this._injector=l(P),this._viewContainerRef=l(we),this._ngZone=l(A)}open(e,a,t=!1){this._windowRef||(this._contentRef=this._getContentRef(e,a),this._windowRef=this._viewContainerRef.createComponent(this._componentType,{injector:this._injector,projectableNodes:this._contentRef.nodes}));let{nativeElement:n}=this._windowRef.location,s=this._ngZone.onStable.pipe(T(1),me(()=>S(this._ngZone,n,({classList:o})=>o.add("show"),{animation:t,runningTransition:"continue"})));return{windowRef:this._windowRef,transition$:s}}close(e=!1){return this._windowRef?S(this._ngZone,this._windowRef.location.nativeElement,({classList:a})=>a.remove("show"),{animation:e,runningTransition:"stop"}).pipe(V(()=>{this._windowRef&&(this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView)),this._windowRef=null),this._contentRef?.viewRef&&(this._applicationRef.detachView(this._contentRef.viewRef),this._contentRef.viewRef.destroy(),this._contentRef=null)})):G(void 0)}_getContentRef(e,a){if(e)if(e instanceof ee){let t=e.createEmbeddedView(a);return this._applicationRef.attachView(t),new w([t.rootNodes],t)}else return new w([[this._document.createTextNode(`${e}`)]]);else return new w([])}},Gt=(()=>{let e=class e{constructor(){this._document=l(M)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,s=n.style,{overflow:o,paddingRight:r}=s;if(t>0){let u=parseFloat(window.getComputedStyle(n).paddingRight);s.paddingRight=`${u+t}px`}return s.overflow="hidden",()=>{t>0&&(s.paddingRight=r),s.overflow=o}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Ht=(()=>{let e=class e{constructor(){this._nativeElement=l(C).nativeElement,this._zone=l(A)}ngOnInit(){this._zone.onStable.asObservable().pipe(T(1)).subscribe(()=>{S(this._zone,this._nativeElement,(t,n)=>{n&&He(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return S(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=L({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(n,s){n&2&&(x("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),R("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[j],decls:0,vars:0,template:function(n,s){},encapsulation:2});let i=e;return i})(),J=class{update(e){}close(e){}dismiss(e){}},Vt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],$t=["animation","backdropClass"],de=class{_applyWindowOptions(e,a){Vt.forEach(t=>{le(a[t])&&(e[t]=a[t])})}_applyBackdropOptions(e,a){$t.forEach(t=>{le(a[t])&&(e[t]=a[t])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(g(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(g(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,a,t,n){this._windowCmptRef=e,this._contentRef=a,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new y,this._dismissed=new y,this._hidden=new y,e.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,o)=>{this._resolve=s,this._reject=o}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let a=this._beforeDismiss();pt(a)?a.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):a!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),a=this._backdropCmptRef?this._backdropCmptRef.instance.hide():G(void 0);e.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),a.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),H(e,a).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},he=function(i){return i[i.BACKDROP_CLICK=0]="BACKDROP_CLICK",i[i.ESC=1]="ESC",i}(he||{}),Lt=(()=>{let e=class e{constructor(){this._document=l(M),this._elRef=l(C),this._zone=l(A),this._closed$=new y,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new k,this.shown=new y,this.hidden=new y}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":ue(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(T(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,n={animation:this.animation,runningTransition:"stop"},s=S(this._zone,t,()=>t.classList.remove("show"),n),o=S(this._zone,this._dialogEl.nativeElement,()=>{},n),r=H(s,o);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let t={animation:this.animation,runningTransition:"continue"},n=S(this._zone,this._elRef.nativeElement,(o,r)=>{r&&He(o),o.classList.add("show")},t),s=S(this._zone,this._dialogEl.nativeElement,()=>{},t);H(n,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{b(t,"keydown").pipe(g(this._closed$),E(s=>s.which===v.Escape)).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(he.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let n=!1;b(this._dialogEl.nativeElement,"mousedown").pipe(g(this._closed$),V(()=>n=!1),Te(()=>b(t,"mouseup").pipe(g(this._closed$),T(1))),E(({target:s})=>t===s)).subscribe(()=>{n=!0}),b(t,"click").pipe(g(this._closed$)).subscribe(({target:s})=>{t===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!n&&this._zone.run(()=>this.dismiss(he.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let n=t.querySelector("[ngbAutofocus]"),s=We(t)[0];(n||s||t).focus()}}_restoreFocus(){let t=this._document.body,n=this._elWithFocus,s;n&&n.focus&&t.contains(n)?s=n:s=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&S(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=L({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(n,s){if(n&1&&Re(ht,7),n&2){let o;F(o=B())&&(s._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(n,s){n&2&&(te("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),x("modal d-block"+(s.windowClass?" "+s.windowClass:"")),R("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[j],ngContentSelectors:Fe,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(n,s){n&1&&(oe(),ie(0,"div",1,0)(2,"div",2),ae(3),ne()()),n&2&&x("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let i=e;return i})(),Kt=(()=>{let e=class e{constructor(){this._applicationRef=l(re),this._injector=l(P),this._environmentInjector=l(Z),this._document=l(M),this._scrollBar=l(Gt),this._activeWindowCmptHasChanged=new y,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new k;let t=l(A);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let n=this._windowCmpts[this._windowCmpts.length-1];vt(t,n.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(n.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,n,s){let o=s.container instanceof HTMLElement?s.container:le(s.container)?this._document.querySelector(s.container):this._document.body;if(!o)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new J;t=s.injector||t;let u=t.get(Z,null)||this._environmentInjector,c=this._getContentRef(t,u,n,r,s),p=s.backdrop!==!1?this._attachBackdrop(o):void 0,m=this._attachWindowComponent(o,c.nodes),h=new de(m,c,p,s.beforeDismiss);return this._registerModalRef(h),this._registerWindowCmpt(m),h.hidden.pipe(T(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=d=>{h.close(d)},r.dismiss=d=>{h.dismiss(d)},r.update=d=>{h.update(d)},h.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),p&&p.instance&&p.changeDetectorRef.detectChanges(),m.changeDetectorRef.detectChanges(),h}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(n=>n.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let n=z(Ht,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_attachWindowComponent(t,n){let s=z(Lt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(s.hostView),t.appendChild(s.location.nativeElement),s}_getContentRef(t,n,s,o,r){return s?s instanceof ee?this._createFromTemplateRef(s,o):ue(s)?this._createFromString(s):this._createFromComponent(t,n,s,o,r):new w([])}_createFromTemplateRef(t,n){let s={$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}},o=t.createEmbeddedView(s);return this._applicationRef.attachView(o),new w([o.rootNodes],o)}_createFromString(t){let n=this._document.createTextNode(`${t}`);return new w([[n]])}_createFromComponent(t,n,s,o,r){let u=P.create({providers:[{provide:J,useValue:o}],parent:t}),c=z(s,{environmentInjector:n,elementInjector:u}),p=c.location.nativeElement;return r.scrollable&&p.classList.add("component-host-scrollable"),this._applicationRef.attachView(c.hostView),new w([[p]],c.hostView,c)}_setAriaHidden(t){let n=t.parentElement;n&&t!==this._document.body&&(Array.from(n.children).forEach(s=>{s!==t&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,n)=>{t?n.setAttribute("aria-hidden",t):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let n=()=>{let s=this._modalRefs.indexOf(t);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(n,n)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let n=this._windowCmpts.indexOf(t);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),jt=(()=>{let e=class e{constructor(){this._injector=l(P),this._modalStack=l(Kt),this._config=l(Bt)}open(t,n={}){let s=Y(_e(Y({},this._config),{animation:this._config.animation}),n);return this._modalStack.open(this._injector,t,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Xe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({providers:[jt]});let i=e;return i})();var et=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var tt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),Ut={hover:["mouseenter","mouseleave"],focus:["focusin","focusout"]};function zt(i){let e=(i||"").trim();if(e.length===0)return[];let a=e.split(/\s+/).map(n=>n.split(":")).map(n=>Ut[n[0]]||n),t=a.filter(n=>n.includes("manual"));if(t.length>1)throw"Triggers parse error: only one manual trigger is allowed";if(t.length===1&&a.length>1)throw"Triggers parse error: manual trigger can't be mixed with other triggers";return t.length?[]:a}function Wt(i,e,a,t,n,s=0,o=0){let r=zt(e);if(r.length===0)return()=>{};let u=new Set,c=[],p;function m(d,O){i.addEventListener(d,O),c.push(()=>i.removeEventListener(d,O))}function h(d,O){clearTimeout(p),O>0?p=setTimeout(d,O):d()}for(let[d,O]of r)O?(m(d,()=>{u.add(d),h(()=>u.size>0&&t(),s)}),m(O,()=>{u.delete(d),h(()=>u.size===0&&n(),o)})):m(d,()=>a()?h(n,o):h(t,s));return()=>c.forEach(d=>d())}var it=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var nt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var st=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var at=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var rt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),Qt=(()=>{let e=class e{constructor(){this._ngbConfig=l(Ge),this.autoClose=!0,this.placement="auto",this.popperOptions=t=>t,this.triggers="hover focus",this.disableTooltip=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Jt=0,Yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=L({type:e,selectors:[["ngb-tooltip-window"]],hostAttrs:["role","tooltip"],hostVars:5,hostBindings:function(n,s){n&2&&(se("id",s.id),x("tooltip"+(s.tooltipClass?" "+s.tooltipClass:"")),R("fade",s.animation))},inputs:{animation:"animation",id:"id",tooltipClass:"tooltipClass"},standalone:!0,features:[j],ngContentSelectors:Fe,decls:3,vars:0,consts:[["data-popper-arrow","",1,"tooltip-arrow"],[1,"tooltip-inner"]],template:function(n,s){n&1&&(oe(),Oe(0,"div",0),ie(1,"div",1),ae(2),ne())},styles:[`ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}
`],encapsulation:2,changeDetection:0});let i=e;return i})(),On=(()=>{let e=class e{constructor(){this._config=l(Qt),this.animation=this._config.animation,this.autoClose=this._config.autoClose,this.placement=this._config.placement,this.popperOptions=this._config.popperOptions,this.triggers=this._config.triggers,this.container=this._config.container,this.disableTooltip=this._config.disableTooltip,this.tooltipClass=this._config.tooltipClass,this.openDelay=this._config.openDelay,this.closeDelay=this._config.closeDelay,this.shown=new k,this.hidden=new k,this._nativeElement=l(C).nativeElement,this._ngZone=l(A),this._document=l(M),this._changeDetector=l(U),this._ngbTooltipWindowId=`ngb-tooltip-${Jt++}`,this._popupService=new ce(Yt),this._windowRef=null,this._positioning=Qe()}set ngbTooltip(t){this._ngbTooltip=t,!t&&this._windowRef&&this.close()}get ngbTooltip(){return this._ngbTooltip}open(t){if(!this._windowRef&&this._ngbTooltip&&!this.disableTooltip){let{windowRef:n,transition$:s}=this._popupService.open(this._ngbTooltip,t??this.tooltipContext,this.animation);this._windowRef=n,this._windowRef.setInput("animation",this.animation),this._windowRef.setInput("tooltipClass",this.tooltipClass),this._windowRef.setInput("id",this._ngbTooltipWindowId),this._getPositionTargetElement().setAttribute("aria-describedby",this._ngbTooltipWindowId),this.container==="body"&&this._document.body.appendChild(this._windowRef.location.nativeElement),this._windowRef.changeDetectorRef.detectChanges(),this._windowRef.changeDetectorRef.markForCheck(),this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:this._getPositionTargetElement(),targetElement:this._windowRef.location.nativeElement,placement:this.placement,appendToBody:this.container==="body",baseClass:"bs-tooltip",updatePopperOptions:o=>this.popperOptions(Je([0,6])(o))}),Promise.resolve().then(()=>{this._positioning.update(),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>this._positioning.update())})}),Ue(this._ngZone,this._document,this.autoClose,()=>this.close(),this.hidden,[this._windowRef.location.nativeElement],[this._nativeElement]),s.subscribe(()=>this.shown.emit())}}close(t=this.animation){this._windowRef!=null&&(this._getPositionTargetElement().removeAttribute("aria-describedby"),this._popupService.close(t).subscribe(()=>{this._windowRef=null,this._positioning.destroy(),this._zoneSubscription?.unsubscribe(),this.hidden.emit(),this._changeDetector.markForCheck()}))}toggle(){this._windowRef?this.close():this.open()}isOpen(){return this._windowRef!=null}ngOnInit(){this._unregisterListenersFn=Wt(this._nativeElement,this.triggers,this.isOpen.bind(this),this.open.bind(this),this.close.bind(this),+this.openDelay,+this.closeDelay)}ngOnChanges({tooltipClass:t}){t&&this.isOpen()&&this._windowRef.setInput("tooltipClass",t.currentValue)}ngOnDestroy(){this.close(!1),this._unregisterListenersFn?.()}_getPositionTargetElement(){return(ue(this.positionTarget)?this._document.querySelector(this.positionTarget):this.positionTarget)||this._nativeElement}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=N({type:e,selectors:[["","ngbTooltip",""]],inputs:{animation:"animation",autoClose:"autoClose",placement:"placement",popperOptions:"popperOptions",triggers:"triggers",positionTarget:"positionTarget",container:"container",disableTooltip:"disableTooltip",tooltipClass:"tooltipClass",tooltipContext:"tooltipContext",openDelay:"openDelay",closeDelay:"closeDelay",ngbTooltip:"ngbTooltip"},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbTooltip"],standalone:!0,features:[X]});let i=e;return i})(),lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var Cn=new De("live announcer delay",{providedIn:"root",factory:()=>100});var ct=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})();var dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({});let i=e;return i})(),qt=[$e,Le,Ke,je,Ye,Ze,Xe,et,dt,tt,it,nt,st,ot,at,rt,lt,ct],Rn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=_({imports:[qt,$e,Le,Ke,je,Ye,Ze,Xe,et,dt,tt,it,nt,st,ot,at,rt,lt,ct]});let i=e;return i})();export{qe as a,Ze as b,Xe as c,nt as d,On as e,lt as f,Rn as g};