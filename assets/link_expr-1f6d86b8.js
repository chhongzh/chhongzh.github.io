import{_ as c,r as t,o as r,c as s,a as n,b as o,w as l,F as _,d}from"./index-4d2226e1.js";const i={},u=o("h1",null,"链式调用",-1),f=o("div",null,"一种调用函数的方式.",-1),m=o("h2",null,"示例",-1);function p(h,x){const e=t("Code"),a=t("RouterLink");return r(),s(_,null,[u,f,n(e,{content:`<obj> -> <Func Name> <arg>... ;
`},null,8,["content"]),m,n(e,{content:`# Call foo with link expr:
"Foo!" -> foo;
# foo 会接收到 "Foo!"

"Foo!" -> foo -> bar;
# bar 会接收到 foo 处理的结果

`}),o("div",null,[n(a,{to:"/docs/grammar/index"},{default:l(()=>[d("返回上级")]),_:1})])],64)}const F=c(i,[["render",p]]);export{F as default};
