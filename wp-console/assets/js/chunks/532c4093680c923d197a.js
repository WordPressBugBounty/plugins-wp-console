"use strict";(self.wpConsoleWebpack=self.wpConsoleWebpack||[]).push([[192],{192:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(609),o=n(87),s=n(427),c=n(723),a=n(508),r=n(626),p=n(350);const i=(0,a.A)({select:["fetchingLog","clearingLog","log","extraInfo"],dispatch:["setNotice","startFetchingLog","finishFetchingLog","setLog","setExtraInfo"]})((e=>{const{fetchingLog:t,clearingLog:n,log:a,extraInfo:i}=e;return(0,o.useEffect)((()=>{(0,r.A)(e)}),[]),(0,l.createElement)("div",{id:"wp-console-panel-debug-log"},t||n?(0,l.createElement)("div",{className:"wp-console-spinner"},(0,l.createElement)(s.Spinner,null),t?(0,c.sprintf)(
// translators: %s: Fetching debug.log indicator
// translators: %s: Fetching debug.log indicator
(0,c.__)("Fetching %s","wp-console"),"debug.log"):(0,c.sprintf)(
// translators: %s: Clearing debug.log indicator
// translators: %s: Clearing debug.log indicator
(0,c.__)("Clearing %s","wp-console"),"debug.log"),"..."):(0,l.createElement)(o.Fragment,null,a?(0,l.createElement)(o.Fragment,null,"API_ERROR"===a?(0,l.createElement)("pre",null):(0,l.createElement)("pre",null,a)):(0,l.createElement)("p",{className:"empty-content"},(0,l.createElement)("span",null,(0,l.createElement)(p.Yc,{width:"29",height:"29"})," ",(0,c.__)("Your debug.log is empty","wp-console")))),i.php_version&&(0,l.createElement)("div",{className:"extra-info"},(0,c.__)("CURRENT TIME","wp-console"),":"," ",i.current_time," ",i.timezone,(0,l.createElement)("span",{className:"wp-console-separator"}),(0,c.__)("PHP VERSION","wp-console"),":"," ",i.php_version))}))}}]);
//# sourceMappingURL=532c4093680c923d197a.js.map