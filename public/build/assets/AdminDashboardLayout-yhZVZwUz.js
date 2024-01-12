import{f as r,g as u,r as n,o as h,c as m,a as s,b as t,w as e,h as g}from"./app-jJkQGlsA.js";const f={key:0},v={class:"container mx-auto"},p={class:"flex"},b={id:"showMenu",class:"bg-gray-200 p-4 max-w-[250px] w-[30%] hidden md:block h-screen"},w={class:"mb-4"},y=s("i",{class:"fas fa-tachometer-alt"},null,-1),x=s("span",{class:"ml-2"},"Dashboard",-1),k=s("i",{class:"fas fa-users"},null,-1),B=s("span",{class:"ml-2"},"Users",-1),A={class:"flex-grow w-[70%]"},L={class:"bg-gray-200 p-4"},M={class:"flex justify-between"},C=s("i",{id:"toggleButton",class:"fas fa-bars"},null,-1),V=[C],E=s("div",{class:"mr-4"},[s("img",{class:"h-10 w-10 rounded-full",src:"https://picsum.photos/200/300",alt:"Avatar"})],-1),N=s("div",null,[s("div",{class:"font-bold mt-2"},"Laravel Vue Admin")],-1),D={class:"flex mt-2"},I={class:"mr-4"},R=s("i",{class:"fas fa-globe"},null,-1),j={class:"mr-4"},S=s("i",{class:"fas fa-bell"},null,-1),U=s("i",{class:"fas fa-sign-out-alt"},null,-1),q={class:"p-4"},G={__name:"AdminDashboardLayout",setup(z){const c=r(),l=u(()=>c.meta.isAdmin);l.value!==!0&&(window.location.href="/");const d=()=>{document.getElementById("showMenu").classList.toggle("hidden");const a=document.getElementById("toggleButton");a.classList.toggle("fa-bars"),a.classList.toggle("fa-times")};return(i,a)=>{const o=n("router-link"),_=n("router-view");return l.value?(h(),m("div",f,[s("div",v,[s("div",p,[s("div",b,[s("div",w,[t(o,{to:{name:"admin.home"},class:"block p-2 rounded hover:bg-gray-300"},{default:e(()=>[y,x]),_:1},8,["to"]),t(o,{to:{name:"admin.users.index"},class:"block p-2 rounded hover:bg-gray-300"},{default:e(()=>[k,B]),_:1},8,["to"])])]),s("div",A,[s("div",L,[s("div",M,[s("div",{class:"flex"},[s("button",{class:"md:hidden bg-gray-200 p-2 h-12",onClick:d},V),E,N]),s("div",D,[s("div",I,[t(o,{to:"/",class:"bg-gray-300 p-2 rounded-full"},{default:e(()=>[R]),_:1})]),s("div",j,[t(o,{to:"/",class:"bg-gray-300 p-2 rounded-full"},{default:e(()=>[S]),_:1})]),s("div",null,[t(o,{to:"/",class:"bg-gray-300 p-2 rounded-full"},{default:e(()=>[U]),_:1})])])])]),s("div",q,[t(_)])])])])])):g("",!0)}}};export{G as default};
