import{a5 as m,o as p,a6 as s,ad as n,a9 as l,g as b,h as f,j as r,m as g,a3 as e,x as _,l as t,aa as v,ac as k}from"./index-CvyjvgFp.js";/* empty css                  */import{A as c}from"./Article-CNR4t2JY.js";import"./_plugin-vue_export-helper-2ER-cJc8.js";import"./el-link-Bf18Akdx.js";const x=t("br",null,null,-1),y=t("br",null,null,-1),B=t("br",null,null,-1),E=t("br",null,null,-1),N=t("br",null,null,-1),w=t("br",null,null,-1),C=t("br",null,null,-1),T=t("br",null,null,-1),V=t("br",null,null,-1),j=t("br",null,null,-1),A=t("br",null,null,-1),D=t("br",null,null,-1),S={components:{Article:c}},G=Object.assign(S,{__name:"ServerError",setup(z){const o="ServerError",u=new Date("2024-3-30"),a=m(),d=()=>{s(o,"重置地址"),v.value=null,l({title:"重置成功",message:"页面将会在3秒后重新加载...",position:"bottom-right",type:"success"}),setTimeout(()=>{location.reload()},3e3)},h=()=>{n.commit("server_is_alive"),n.commit("bypass"),l({title:"提示",message:"强制绕过检查, 接下来遇到的错误将不会被处理.",position:"bottom-right",type:"warning"}),s(o,"Back to homepage"),a.push("/")};return p(()=>{s(o,"检查是否有Error"),n.state.is_server_alive&&(s(o,"没问题为什么要来???"),l({title:"提示",message:"没问题为什么要来?",position:"bottom-right",type:"info"}),a.push("/"))}),(M,O)=>{const i=k;return b(),f(c,{title:"Don't Panic! 不要紧张",author:"chhongzh",date:g(u)},{default:r(()=>[e(" 哟!"),x,e(" 你的服务器配置看起来不正常"),y,B,e(" (我早就猜到了你会来这里看解决办法?......!)"),E,N,w,e(" 好吧, 那么让我来告诉你解决方法吧:"),C,e(" 1. 可能是服务端没有启动成功. 尝试启动服务器并重试."),T,e(" 2. 可能是服务器地址配置错误, 要不点击下面的按钮来重置?"),V,_(i,{onClick:d,type:"danger"},{default:r(()=>[e("点我重置服务器地址~")]),_:1}),j,e(" 3. 如果你坚信, 这不是一个错误. 那么点击下面按钮来标记这不是错误"),A,_(i,{onClick:h},{default:r(()=>[e("标记不是个错误")]),_:1}),D]),_:1},8,["date"])}}});export{G as default};