"use strict";(self["webpackChunksushi_master"]=self["webpackChunksushi_master"]||[]).push([[342],{5342:function(t,l,a){a.r(l),a.d(l,{default:function(){return M}});var s=a(3396),e=a(9242),n=a(7139),i=a(4870),_=a(907);const u={id:"cart"},c={key:0,class:"section-info"},r=(0,s._)("p",null,"В корзине нету товаров...",-1),d=[r],o={key:1,class:"cart__info"},b={class:"cart__table"},h={class:"list__table"},k=(0,s._)("thead",{class:"list__table__header"},[(0,s._)("tr",{class:"list__table__columns"},[(0,s._)("th",null,"Название"),(0,s._)("th",null,"Цена"),(0,s._)("th",null,"Количество"),(0,s._)("th",null,"Удалить")])],-1),p={class:"list__content",ref:"table"},v=["id","data-rowIndex"],w={class:"title"},y=["src"],f={class:"quantity"},g=["disabled","onClick"],m=["disabled","onClick"],C=["onClick"],q=(0,s._)("img",{src:_,alt:""},null,-1),D=[q],I={class:"cart__total"},z={class:"total"},S=(0,s._)("h2",null,"Итого:",-1),$=(0,s._)("button",{class:"btn"},"Оформить заказ",-1);var x={__name:"CartView",props:{items:{type:Array,default:[]}},setup(t){const l=t,_=(0,i.iH)([]),r=(0,s.Fl)((()=>_.value.reduce(((t,l)=>(t+=l.quantity*l.price,t)),0))),q=t=>{_.value=_.value.filter((l=>l.id!==t.id))},x=t=>a(7173)(`./${t}`);return(0,s.bv)((()=>{const t=localStorage.getItem("cartItems");_.value="undefined"!=t&&"null"!=t&&t?JSON.parse(t):l.items})),(t,l)=>((0,s.wg)(),(0,s.iD)("section",u,[0===_.value.length?((0,s.wg)(),(0,s.iD)("div",c,d)):((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",b,[(0,s._)("table",h,[k,(0,s._)("tbody",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.value,((a,i)=>((0,s.wg)(),(0,s.iD)("tr",{key:i,id:`rowId${i+1}`,"data-rowIndex":i,onDblclick:l[0]||(l[0]=(0,e.iM)((l=>t.$emit("open-task-dialog")),["stop"]))},[(0,s._)("td",w,[(0,s._)("img",{src:x(a.src),alt:""},null,8,y),(0,s._)("span",null,(0,n.zw)(a.title),1)]),(0,s._)("td",null,[(0,s._)("strong",null,(0,n.zw)(a.price),1),(0,s.Uk)(" грн ")]),(0,s._)("td",f,[(0,s._)("button",{disabled:0===a.quantity,onClick:t=>a.quantity--}," - ",8,g),(0,s._)("span",null,(0,n.zw)(a.quantity),1),(0,s._)("button",{disabled:10===a.quantity,onClick:t=>a.quantity++}," + ",8,m)]),(0,s._)("td",null,[(0,s._)("a",{href:"#",class:"trash",onClick:(0,e.iM)((t=>q(a)),["prevent"])},D,8,C)])],40,v)))),128))],512)])]),(0,s._)("div",I,[(0,s._)("div",z,[S,(0,s._)("h1",null,(0,n.zw)((0,i.SU)(r))+" грн",1)]),$])]))]))}};const H=x;var M=H}}]);
//# sourceMappingURL=342.48990aea.js.map