import{g as u,h as g,j as t,l as o,k as f,v as h,x as a,a3 as l,a2 as i,H as m,a4 as p}from"./index-CvyjvgFp.js";import{_ as k,E as v}from"./_plugin-vue_export-helper-2ER-cJc8.js";import{a as x,E as y}from"./el-link-Bf18Akdx.js";const S={props:{title:{required:!0,type:String},date:{type:Date},author:{required:!0,type:String},show_back:{default:!0,type:Boolean}}},E={style:{padding:"0%",margin:"0%"}},w={style:{"text-align":"right",padding:"0%",margin:"0%"}},B={style:{"text-align":"right",padding:"0%",margin:"0%"}};function D(n,r,e,z,C,N){const s=p,d=x,_=y,c=v;return u(),g(c,null,{footer:t(()=>[o("div",B,[f(a(_,{size:"large",onClick:r[0]||(r[0]=T=>n.$router.push("/"))},{default:t(()=>[l("返回")]),_:1},512),[[h,e.show_back]])])]),default:t(()=>[o("h1",E,i(e.title),1),o("div",w,[a(s,{size:"large"},{default:t(()=>[l("作者: "+i(e.author)+" 发布日期: "+i(e.date==null||e.date==null?"暂无":e.date.toISOString().split("T")[0]),1)]),_:1})]),a(d),a(s,{size:"large"},{default:t(()=>[m(n.$slots,"default")]),_:3})]),_:3})}const A=k(S,[["render",D]]);export{A};