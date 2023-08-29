import{_ as i,r as s,o as c,c as d,a as t,b as n,d as e,w as l,F as p,e as u}from"./index-283fd24d.js";const _={},f=n("h1",null,"If",-1),r=n("div",null,"if是一个块语句, 用于条件判断",-1),m=n("span",null,"Value1",-1),V=n("span",null,"Value 2",-1),h=u("<div><span>Op</span>可以是<span>equal</span>,<span>notequal</span>,<span>small</span>,<span>big</span>,<span>bigeual</span>,<span>smallequal</span>的一种.</div>",1);function S(v,x){const o=s("Code"),a=s("RouterLink");return c(),d(p,null,[f,r,t(o,{content:`if <Value 1> <Op> <Value 2>:
    <Statement>
else:
    <Statement>
endif

# If-elif
if <Value 1> <Op> <Value 2>:
    <Statement>
elif:
    <Statement>
endif

# If-elif-else
if <Value 1> <Op> <Value 2>:
    <Statement>
elif:
    <Statement>
else:
    <Statement>
endif
`}),n("div",null,[e("其中"),m,e("与"),V,e("必须是个"),t(a,{to:"/docs/define/value"},{default:l(()=>[e("切确的值")]),_:1}),e(", 不能是其他任何东西.")]),h,n("div",null,[t(a,{to:"/docs/grammar/_"},{default:l(()=>[e("返回上级")]),_:1})])],64)}const k=i(_,[["render",S]]);export{k as default};
