(function(){"use strict";var t={7521:function(t,e,a){var o=a(5130),n=a(6768);const r=(0,n.Lk)("div",{id:"calendar-background-wrapper"},[(0,n.Lk)("div",{id:"calendar-background"})],-1),i={id:"calendar"};function l(t,e,a,o,l,s){const d=(0,n.g2)("calendar-date");return(0,n.uX)(),(0,n.CE)(n.FK,null,[r,(0,n.Lk)("div",i,[(0,n.bF)(d)])],64)}var s=a(4232);const d={id:"calendar-month"},h=(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[(0,n.Lk)("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"})],-1),c=[h],u=(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[(0,n.Lk)("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"})],-1),v=[u],f={id:"calendar-dates"},g=["onClick"],m={class:"date"},k={class:"date-day"},y={class:"date-day-of-month"},M={class:"date-day-of-week"},D={key:0,class:"date-title"},p=(0,n.Lk)("div",{class:"date-title-dot"},null,-1),w={key:0,class:"active-day-indicator"},L={class:"modal"},b={class:"modal-header"},C={class:"date-day"},O={class:"date-day-of-month"},S={class:"date-day-of-week"},N={class:"modal-body"},x={class:"modal-footer"};function Y(t,e,a,r,i,l){return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",d,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...e)=>t.previousMonth&&t.previousMonth(...e))},c),(0,n.Lk)("span",null,(0,s.v_)(t.monthYear),1),(0,n.Lk)("button",{onClick:e[1]||(e[1]=(...e)=>t.nextMonth&&t.nextMonth(...e))},v)]),(0,n.Lk)("div",f,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.data,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{onClick:a=>t.showModal(e),key:a,class:(0,s.C4)(["date-wrapper active-month",{"active-day":e.isToday}])},[(0,n.Lk)("div",m,[(0,n.Lk)("div",k,[(0,n.Lk)("h2",y,(0,s.v_)(e.day),1),(0,n.Lk)("h2",M,(0,s.v_)(e.dayName),1)]),e.note?((0,n.uX)(),(0,n.CE)("div",D,[p,(0,n.Lk)("h2",null,(0,s.v_)(e.note),1)])):(0,n.Q3)("",!0)]),e.isToday?((0,n.uX)(),(0,n.CE)("div",w)):(0,n.Q3)("",!0)],10,g)))),128))]),t.modal?((0,n.uX)(),(0,n.CE)("div",{key:0,id:"calendar-modal",onClick:e[5]||(e[5]=(0,o.D$)(((...e)=>t.closeModal&&t.closeModal(...e)),["self"]))},[(0,n.Lk)("div",L,[(0,n.Lk)("div",b,[(0,n.Lk)("div",C,[(0,n.Lk)("h2",O,(0,s.v_)(t.modalData.day)+" "+(0,s.v_)(t.modalData.monthName),1),(0,n.Lk)("h2",S,(0,s.v_)(t.modalData.dayName),1)])]),(0,n.Lk)("div",N,[(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.modalData.note=e)},null,512),[[o.Jo,t.modalData.note]])]),(0,n.Lk)("div",x,[(0,n.Lk)("button",{onClick:e[3]||(e[3]=(...e)=>t.closeModal&&t.closeModal(...e))},"Close"),(0,n.Lk)("button",{onClick:e[4]||(e[4]=(...e)=>t.saveNote&&t.saveNote(...e))},"Save")])])])):(0,n.Q3)("",!0)],64)}a(4114);var _={data(){return{currentDay:null,data:[],monthYear:null,modal:!1,modalData:{},storeKey:"CALENDAR_STORE",storedNotes:{},activeMonth:null}},created(){const t=new Date;this.currentDay=this.formatDate(t),this.activeMonth=this.firstDayOfMonth(t),console.log(this.activeMonth),this.getCalendar()},methods:{getCalendar(){this.storedNotes=this.getStore();const t=new Date(this.activeMonth);this.getMonthYear(t);const e=t.getFullYear(),a=t.getMonth(),o=new Date(e,a,1),n=new Date(o.getTime()-24*(o.getDay()-1)*60*60*1e3),r=`${e}-${a}`;let i=n,l=this.getYearMonth(i);this.data=[this.getDateData(i)];while(1){if(i=new Date(i.getTime()+864e5),l=this.getYearMonth(i),l>r&&1===i.getDay())break;this.data.push(this.getDateData(i))}},getStore(){let t=localStorage.getItem(this.storeKey);if(t)try{t=JSON.parse(t)}catch(e){console.log(e.message),t={}}else t={};return t},getMonthYear(t){this.monthYear=t.toLocaleString("en",{month:"long"})+" "+t.getFullYear()},getYearMonth(t){return t.getFullYear()+"-"+t.getMonth()},formatDate(t){const e=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0"),o=t.getFullYear();return[o,e,a].join("-")},firstDayOfMonth(t){const e=t.getFullYear(),a=t.getMonth(),o=new Date(e,a,1);return this.formatDate(o)},getDateData(t){const e=this.formatDate(t),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let o=null;return this.storedNotes[e]&&(o=this.storedNotes[e]),{date:e,day:t.getDate(),dayName:a[t.getDay()],isToday:e===this.currentDay,monthName:t.toLocaleString("en",{month:"short"}),note:o}},showModal(t){this.modal=!this.modal,this.modalData=t},closeModal(){this.modal=!this.modal},saveNote(){const t=this.getStore();t[this.modalData.date]=this.modalData.note,localStorage.setItem(this.storeKey,JSON.stringify(t)),this.closeModal(),this.getCalendar()},previousMonth(){const t=new Date(this.activeMonth);this.activeMonth=this.firstDayOfMonth(new Date(t.setMonth(t.getMonth()-1))),console.log(this.activeMonth),this.getCalendar()},nextMonth(){const t=new Date(this.activeMonth);this.activeMonth=this.firstDayOfMonth(new Date(t.setMonth(t.getMonth()+1))),console.log(this.activeMonth),this.getCalendar()}}},E=_,F=a(1241);const T=(0,F.A)(E,[["render",Y]]);var j=T,X={name:"App",components:{CalendarDate:j}};const K=(0,F.A)(X,[["render",l]]);var A=K;(0,o.Ef)(A).mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,r){if(!o){var i=1/0;for(h=0;h<t.length;h++){o=t[h][0],n=t[h][1],r=t[h][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){t.splice(h--,1);var d=n();void 0!==d&&(e=d)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[o,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,i=o[0],l=o[1],s=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var h=s(a)}for(e&&e(o);d<i.length;d++)r=i[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(h)},o=self["webpackChunkvue_calendar"]=self["webpackChunkvue_calendar"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(7521)}));o=a.O(o)})();
//# sourceMappingURL=app.3fc4a711.js.map