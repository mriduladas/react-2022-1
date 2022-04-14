(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),a=(n(17),n(5)),i=n(2),l=n(1),o=(n(18),n(0));var r=function(e){var t=" card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},j=(n(20),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selectedYear,onChange:function(t){e.onSelectFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(21),n(22);var d=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=new Date(e.date).getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__day",children:n}),Object(o.jsx)("div",{className:"expense-date__year",children:c})]})};n(23);var u=function(e){return Object(o.jsxs)(r,{className:"expense-item",children:[Object(o.jsx)(d,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},b=(n(24),function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"No items found"}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(u,{title:e.title,amount:e.amount,date:e.date},e.id)}))})});var x=function(e){var t=Object(l.useState)("2020"),n=Object(i.a)(t,2),c=n[0],s=n[1],a=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(r,{className:"expenses",children:[Object(o.jsx)(j,{selectedYear:c,onSelectFilter:function(e){console.log("Year",e),s(e)}}),Object(o.jsx)(b,{items:a})]})})},O=(n(25),function(e){return Object(o.jsx)("div",{className:"new-expense-minimized",children:Object(o.jsx)("button",{className:"new-expense-minimized__actions",onClick:function(){e.onShowNewExpense(!0)},children:"Add NewExpense"})})}),m=n(6),p=(n(26),function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(l.useState)(""),r=Object(i.a)(a,2),j=r[0],d=r[1],u=Object(l.useState)(""),b=Object(i.a)(u,2),x=b[0],O=b[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:j,date:new Date(x)};e.onSaveExpenseData(n),s(""),d(""),O("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value),console.log("title:",e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){d(e.target.value),console.log("amount:",e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",value:x,min:"2019-01-01",step:"2022-12-31",onChange:function(e){O(e.target.value),console.log("date:",e.target.value)}})]})]}),Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{type:"submit",children:"Add Expense"})})]})})}),h=(n(27),function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(p,{onSaveExpenseData:function(t){var n=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})}),v=[{id:"e1",title:"Toilet Paper1",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var f=function(){var e,t=Object(l.useState)(v),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(l.useState)(!1),j=Object(i.a)(r,2),d=j[0],u=j[1];return e=d?Object(o.jsx)(h,{onAddExpense:function(e){s((function(t){return console.log([e].concat(Object(a.a)(t))),u(!1),[e].concat(Object(a.a)(t))}))}}):Object(o.jsx)(O,{onShowNewExpense:function(e){u(e)}}),Object(o.jsxs)("div",{children:[e,Object(o.jsx)(x,{items:c})]})};s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(f,{}))}],[[28,1,2]]]);
//# sourceMappingURL=main.6e8e02c2.chunk.js.map