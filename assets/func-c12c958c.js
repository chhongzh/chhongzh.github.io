import{_ as s,r as c,o as r,c as l,a as o,b as n,w as u,F as d,d as e}from"./index-4d2226e1.js";const _={},f=n("h1",null,"Func 语法",-1),i=n("div",null,"用于定义一个函数.",-1),m=n("div",null,[e("其中, "),n("b",null,"Name"),e("是函数的名称, "),n("b",null,"Arg"),e("代表参数. 如果在同一个上下文的情况下, 出现了重复的函数名, 则视为重载.")],-1),h=n("h2",null,"示例",-1);function p(x,N){const t=c("Code"),a=c("RouterLink");return r(),l(d,null,[f,i,o(t,{content:`func <Name> <Arg 1> <..Arg N>:
    <Statement>;
endfunc
`},null,8,["content"]),m,h,o(t,{content:`func foo:
    # bar
endfunc

func bar foo:
    # foo
endfunc
`}),n("div",null,[o(a,{to:"/docs/grammar/index"},{default:u(()=>[e("返回上级")]),_:1})])],64)}const g=s(_,[["render",p]]);export{g as default};
