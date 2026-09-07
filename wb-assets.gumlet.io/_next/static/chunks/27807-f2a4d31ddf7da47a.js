(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27807,98130],{98130:function(B,q,I){"use strict";I.d(q,{Bu:function(){return S}});var a=I(67294),o=I(45697);function F(s,n){if(!(s instanceof n))throw TypeError("Cannot call a class as a function")}function P(s,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function M(s,n,r){return n&&P(s.prototype,n),r&&P(s,r),s}function E(s,n){if(typeof n!="function"&&n!==null)throw TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&x(s,n)}function O(s){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(s)}function x(s,n){return(x=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r})(s,n)}function A(s){var n=(function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}})();return function(){var r,t=O(s);return r=n?Reflect.construct(t,arguments,O(this).constructor):t.apply(this,arguments),r&&(typeof r=="object"||typeof r=="function")?r:(function(e){if(e===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e})(this)}}function d(s,n){(n==null||n>s.length)&&(n=s.length);for(var r=0,t=Array(n);r<n;r++)t[r]=s[r];return t}function S(s){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,t=String(s);if(r===0)return t;var e=t.match(/(.*?)([0-9]+)(.*)/),f=e?e[1]:"",l=e?e[3]:"",u=e?e[2]:t,h=u.length>=r?u:(((function(i){if(Array.isArray(i))return d(i)})(n=Array(r))||(function(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)})(n)||(function(i,m){if(i){if(typeof i=="string")return d(i,void 0);var c=Object.prototype.toString.call(i).slice(8,-1);if(c==="Object"&&i.constructor&&(c=i.constructor.name),c==="Map"||c==="Set")return Array.from(i);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(i,void 0)}})(n)||(function(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()).map(function(){return"0"}).join("")+u).slice(-1*r);return"".concat(f).concat(h).concat(l)}var z={daysInHours:!1,zeroPadTime:2},N=(function(s){E(r,s);var n=A(r);function r(){var t;return F(this,r),t=n.apply(this,arguments),t.state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval(function(){t.state.count-1==0?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState(function(e){return{count:e.count-1}})},1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState(function(f){return{count:f.count+e}},t.startCountdown)},t}return M(r,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,a.cloneElement)(this.props.children,{count:this.state.count}):null}}]),r})(a.Component);N.propTypes={count:o.number,children:o.element,onComplete:o.func};var _=(function(s){E(r,s);var n=A(r);function r(t){var e;if(F(this,r),(e=n.call(this,t)).mounted=!1,e.initialTimestamp=e.calcOffsetStartTimestamp(),e.offsetStartTimestamp=e.props.autoStart?0:e.initialTimestamp,e.offsetTime=0,e.legacyMode=!1,e.legacyCountdownRef=null,e.tick=function(){var l=e.calcTimeDelta(),u=l.completed&&!e.props.overtime?void 0:e.props.onTick;e.setTimeDeltaState(l,void 0,u)},e.setLegacyCountdownRef=function(l){e.legacyCountdownRef=l},e.start=function(){if(!e.isStarted()){var l=e.offsetStartTimestamp;e.offsetStartTimestamp=0,e.offsetTime+=l?e.calcOffsetStartTimestamp()-l:0;var u=e.calcTimeDelta();e.setTimeDeltaState(u,"STARTED",e.props.onStart),e.props.controlled||u.completed&&!e.props.overtime||(e.clearTimer(),e.interval=window.setInterval(e.tick,e.props.intervalDelay))}},e.pause=function(){e.isPaused()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.setTimeDeltaState(e.state.timeDelta,"PAUSED",e.props.onPause))},e.stop=function(){e.isStopped()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.offsetTime=e.offsetStartTimestamp-e.initialTimestamp,e.setTimeDeltaState(e.calcTimeDelta(),"STOPPED",e.props.onStop))},e.isStarted=function(){return e.isStatus("STARTED")},e.isPaused=function(){return e.isStatus("PAUSED")},e.isStopped=function(){return e.isStatus("STOPPED")},e.isCompleted=function(){return e.isStatus("COMPLETED")},t.date){var f=e.calcTimeDelta();e.state={timeDelta:f,status:f.completed?"COMPLETED":"STOPPED"}}else e.legacyMode=!0;return e}return M(r,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date===t.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,f=t.now,l=t.precision,u=t.controlled,h=t.overtime;return(function(i){var m,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=c.now,p=y===void 0?Date.now:y,w=c.precision,D=c.controlled,v=c.offsetTime,b=c.overtime;m=typeof i=="string"?new Date(i).getTime():i instanceof Date?i.getTime():i,D||(m+=v===void 0?0:v);var C=D?m:m-p(),T=Math.round(1e3*parseFloat(((b?C:Math.max(0,C))/1e3).toFixed(Math.min(20,Math.max(0,w===void 0?0:w))))),k=Math.abs(T)/1e3;return{total:T,days:Math.floor(k/86400),hours:Math.floor(k/3600%24),minutes:Math.floor(k/60%60),seconds:Math.floor(k%60),milliseconds:Number((k%1*1e3).toFixed()),completed:T<=0}})(e,{now:f,precision:l,controlled:u,offsetTime:this.offsetTime,overtime:h})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,f){var l=this;if(this.mounted){var u=t.completed&&!this.state.timeDelta.completed,h=t.completed&&e==="STARTED";return u&&!this.props.overtime&&this.clearTimer(),this.setState(function(i){var m=e||i.status;return t.completed&&!l.props.overtime?m="COMPLETED":e||m!=="COMPLETED"||(m="STOPPED"),{timeDelta:t,status:m}},function(){f&&f(l.state.timeDelta),l.props.onComplete&&(u||h)&&l.props.onComplete(t,h)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t,e,f,l,u,h,i,m,c,y,p,w,D=this.props,v=D.daysInHours,b=D.zeroPadTime,C=D.zeroPadDays,T=this.state.timeDelta;return Object.assign(Object.assign({},T),{api:this.getApi(),props:this.props,formatted:(t={daysInHours:v,zeroPadTime:b,zeroPadDays:C},e=T.days,f=T.hours,l=T.minutes,u=T.seconds,i=(h=Object.assign(Object.assign({},z),t)).daysInHours,m=h.zeroPadTime,y=(c=h.zeroPadDays)===void 0?m:c,p=Math.min(2,m),w=i?S(f+24*e,m):S(f,p),{days:i?"":S(e,y),hours:w,minutes:S(l,p),seconds:S(u,p)})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,f=t.children,l=t.onComplete;return(0,a.createElement)(N,{ref:this.setLegacyCountdownRef,count:e,onComplete:l},f)}var u=this.props,h=u.className,i=u.overtime,m=u.children,c=u.renderer,y=this.getRenderProps();if(c)return c(y);if(m&&this.state.timeDelta.completed&&!i)return(0,a.cloneElement)(m,{countdown:y});var p=y.formatted,w=p.days,D=p.hours,v=p.minutes,b=p.seconds;return(0,a.createElement)("span",{className:h},y.total<0?"-":"",w,w?":":"",D,":",v,":",b)}}]),r})(a.Component);_.defaultProps=Object.assign(Object.assign({},z),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),_.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},q.ZP=_},97005:function(B,q,I){var a=I(67294),o=a&&typeof a=="object"&&"default"in a?a:{default:a};(function(P){if(!P||typeof window>"u")return;let M=document.createElement("style");M.setAttribute("type","text/css"),M.innerHTML=P,document.head.appendChild(M)})(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);let F=a.forwardRef(function({style:P={},className:M="",autoFill:E=!1,play:O=!0,pauseOnHover:x=!1,pauseOnClick:A=!1,direction:d="left",speed:S=50,delay:z=0,loop:N=0,gradient:_=!1,gradientColor:s="white",gradientWidth:n=200,onFinish:r,onCycleComplete:t,onMount:e,children:f},l){let[u,h]=a.useState(0),[i,m]=a.useState(0),[c,y]=a.useState(1),[p,w]=a.useState(!1),D=a.useRef(null),v=l||D,b=a.useRef(null),C=a.useCallback(()=>{if(b.current&&v.current){let g=v.current.getBoundingClientRect(),L=b.current.getBoundingClientRect(),R=g.width,j=L.width;(d==="up"||d==="down")&&(R=g.height,j=L.height),y(E&&R&&j&&j<R?Math.ceil(R/j):1),h(R),m(j)}},[E,v,d]);a.useEffect(()=>{if(p&&(C(),b.current&&v.current)){let g=new ResizeObserver(()=>C());return g.observe(v.current),g.observe(b.current),()=>{g&&g.disconnect()}}},[C,v,p]),a.useEffect(()=>{C()},[C,f]),a.useEffect(()=>{w(!0)},[]),a.useEffect(()=>{typeof e=="function"&&e()},[]);let T=a.useMemo(()=>E?i*c/S:i<u?u/S:i/S,[E,u,i,c,S]),k=a.useMemo(()=>Object.assign(Object.assign({},P),{"--pause-on-hover":!O||x?"paused":"running","--pause-on-click":!O||x&&!A||A?"paused":"running","--width":d==="up"||d==="down"?"100vh":"100%","--transform":d==="up"?"rotate(-90deg)":d==="down"?"rotate(90deg)":"none"}),[P,O,x,A,d]),W=a.useMemo(()=>({"--gradient-color":s,"--gradient-width":typeof n=="number"?`${n}px`:n}),[s,n]),U=a.useMemo(()=>({"--play":O?"running":"paused","--direction":d==="left"?"normal":"reverse","--duration":`${T}s`,"--delay":`${z}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":E?"auto":"100%"}),[O,d,T,z,N,E]),H=a.useMemo(()=>({"--transform":d==="up"?"rotate(90deg)":d==="down"?"rotate(-90deg)":"none"}),[d]),$=a.useCallback(g=>[...Array(Number.isFinite(g)&&g>=0?g:0)].map((L,R)=>o.default.createElement(a.Fragment,{key:R},a.Children.map(f,j=>o.default.createElement("div",{style:H,className:"rfm-child"},j)))),[H,f]);return p?o.default.createElement("div",{ref:v,style:k,className:"rfm-marquee-container "+M},_&&o.default.createElement("div",{style:W,className:"rfm-overlay"}),o.default.createElement("div",{className:"rfm-marquee",style:U,onAnimationIteration:t,onAnimationEnd:r},o.default.createElement("div",{className:"rfm-initial-child-container",ref:b},a.Children.map(f,g=>o.default.createElement("div",{style:H,className:"rfm-child"},g))),$(c-1)),o.default.createElement("div",{className:"rfm-marquee",style:U},$(c))):null});q.Z=F}}]);
