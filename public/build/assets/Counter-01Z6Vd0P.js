import{i as s,c as r,a as n,t as u,u as o,o as a}from"./app-D1rvhtJL.js";const c=s("store",{state:()=>({count:0}),actions:{increment(){this.count++}}}),d={__name:"Counter",setup(l){const t=c();return(i,e)=>(a(),r("div",null,[n("p",null,"Count: "+u(o(t).count),1),n("button",{onClick:e[0]||(e[0]=p=>o(t).increment()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Increment ")]))}};export{d as default};