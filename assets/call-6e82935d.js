import{_ as a,r as c,o as s,c as r,a as e,b as n,w as _,F as d,d as o}from"./index-4d2226e1.js";const u={},i=n("h1",null,"Call 语法",-1),m=n("div",null,"调用func或者是command.",-1),f=n("div",null,[o("其中, 如果是调用"),n("b",null,"函数"),o("则需传入至少一个参数或无参数. 如果是调用"),n("b",null,"指令"),o("则无参数.")],-1),h=n("h2",null,"示例",-1);function C(p,x){const t=c("Code"),l=c("RouterLink");return s(),r(d,null,[i,m,e(t,{content:`<Func | Command> <Arg> ... <Arg N> ;
`},null,8,["content"]),f,h,e(t,{content:`# Call foo:
foo;

# Call foo with args:
foo bar;
`}),n("div",null,[e(l,{to:"/docs/grammar/index"},{default:_(()=>[o("返回上级")]),_:1})])],64)}const b=a(u,[["render",C]]);export{b as default};
