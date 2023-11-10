import{_ as a,r as s,o as c,c as i,a as t,b as e,w as l,F as _,d as n}from"./index-4d2226e1.js";const d={},u=e("h1",null,"Iter 语法",-1),m=e("div",null,"遍历元素.",-1),h=e("div",null,[e("b",null,"List"),n("是需要遍历的对象, 而"),e("b",null,"Var Name"),n("就是遍历的结果将会存在哪里.")],-1),p=e("h2",null,"示例",-1);function f(x,N){const o=s("Code"),r=s("RouterLink");return c(),i(_,null,[u,m,t(o,{content:`iter <List> <Var Name>:
    <Statements>;
enditer
`}),h,p,t(o,{content:`iter [1,2,3,4] i:
    get i;
    print;
enditer
`}),e("div",null,[t(r,{to:"/docs/grammar/index"},{default:l(()=>[n("返回上级")]),_:1})])],64)}const k=a(d,[["render",f]]);export{k as default};
