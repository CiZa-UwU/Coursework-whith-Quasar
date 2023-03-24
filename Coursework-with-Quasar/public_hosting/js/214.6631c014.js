(globalThis["webpackChunkcoursework_whith_quasar"]=globalThis["webpackChunkcoursework_whith_quasar"]||[]).push([[214],{935:(e,l,n)=>{"use strict";n.d(l,{Ie:()=>s,Lv:()=>a,fI:()=>o});var r=n(8010);const s=r.ZP`query GetLevelData($levels: Int!) {
    game_content(where: {levels: {_eq:$levels}}) {
      game_name
      id
      image
      is_answer
      levels
    }
  }`,a=r.ZP`query GetUserData{
    done_levels{
      user_id
      level
      game
      done
    }
  }
  `,o=(r.ZP`
    mutation AddNewUser {
      insert_done_levels(objects: 
       {  
         level:1
         game:1
       }) 
       {
        affected_rows  
       }
      }`,r.ZP`
    mutation AddDoneLevel($level: Int!, $game: Int!) {
      insert_done_levels(objects: 
       {  
         level:$level
         game:$game
         done:true
       }) 
       {
        affected_rows  
       }
      }`)},2214:(e,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>I});var r=n(9835),s=n(6970),a=n(1957),o=n(7348),t=n.n(o);const v={class:"q-pt-xl q-mx-xl justify-center text-center"},g={class:"shadow-2 q-pa-md level-bar"},c={key:0,class:"row justify-center"},i={class:"justify-center row"},p=["src"],u={class:"q-pt-xl justify-center row"},d={key:0},m=(0,r._)("div",{class:"brain"},[(0,r._)("img",{class:"brain_img",src:t(),alt:""})],-1),_=[m],w=["src"];function f(e,l,o,t,m,f){const k=(0,r.up)("q-icon"),h=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(h,{class:"main-wrapper"},{default:(0,r.w5)((()=>[(0,r._)("div",{class:(0,s.C_)(["mini-wrapper q-mb-lg",{done:e.levelDone}])},[(0,r._)("div",v,[1!==e.cur_level?((0,r.wg)(),(0,r.j4)(k,{key:0,onClick:l[0]||(l[0]=l=>{e.cur_level--,e.refetch(),e.res=[],e.levelDone=0}),color:"black",name:"chevron_left",size:"50px"})):(0,r.kq)("",!0),(0,r._)("h5",g," Уровень "+(0,s.zw)(e.cur_level),1),4!==e.cur_level?((0,r.wg)(),(0,r.j4)(k,{key:1,onClick:l[1]||(l[1]=l=>{e.cur_level++,e.refetch(),e.res=[],e.levelDone=0}),color:"black",name:"chevron_right",size:"50px"})):(0,r.kq)("",!0)]),e.levelDone?((0,r.wg)(),(0,r.iD)("h6",c,"Вы уже прошли этот уровень, поздравляем!!!")):(0,r.kq)("",!0),(0,r._)("div",i,[(0,r._)("img",{src:n(3019)("./"+e.cur_level+"level-answer.png")},null,8,p)]),(0,r._)("div",u,[e.loading||e.loading2?((0,r.wg)(),(0,r.iD)("div",d,_)):((0,r.wg)(),(0,r.iD)("div",{key:1,onVnodeMounted:l[3]||(l[3]=l=>e.CheckLevelDone())},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.result.game_content,((o,t)=>((0,r.wg)(),(0,r.iD)("img",{class:(0,s.C_)(["q-pa-md",{answer:o.is_answer,"card_level_1-2":1==e.cur_level,card_level_3:3==e.cur_level,card_level_4:4==e.cur_level}]),key:e.result.game_content[t].id,src:n(8864)("./"+o.image),onClick:l[2]||(l[2]=(0,a.iM)((l=>e.Check(l)),["self"]))},null,10,w)))),128))],512))])],2)])),_:1})}var k=n(499),h=n(1446),x=n(4886),b=n(935);const D=(0,r.aZ)({name:"Game 2",setup(){const e=(0,k.iH)(1),l=(0,k.iH)(0),n=(0,k.iH)([]),{result:s,loading:a,error:o,refetch:t}=(0,x.aM)((0,r.Fl)((()=>b.Ie)),{levels:e}),{result:v,loading:g}=(0,x.aM)((0,r.Fl)((()=>b.Lv))),{mutate:c}=(0,x.Db)(b.fI),i=(0,h.Z)();return{cur_level:e,result:s,result2:v,loading2:g,loading:a,error:o,refetch:t,res:n,levelDone:l,Check(n){console.log(n.target.classList),"answer"!=n.target.classList[1]||l.value?l.value||i.notify({message:"Попробуй еще раз!",color:"red"}):(i.notify({message:"Правильный ответ!",color:"green"}),l.value=1,window.Clerk.user&&c({game:2,level:e.value}))},CheckLevelDone(){window.Clerk.user&&v._rawValue.done_levels.forEach((n=>{n.level==e.value&&2==n.game&&1==n.done&&(l.value=1)}))}}}});var y=n(1639),q=n(9885),C=n(2857),j=n(9984),L=n.n(j);const Z=(0,y.Z)(D,[["render",f]]),I=Z;L()(D,"components",{QPage:q.Z,QIcon:C.Z})},329:(e,l,n)=>{e.exports=n.p+"img/1level-1.ec2b30c7.png"},7971:(e,l,n)=>{e.exports=n.p+"img/1level-2.117e97ce.png"},9526:(e,l,n)=>{e.exports=n.p+"img/1level-3.326c9769.png"},3184:(e,l,n)=>{e.exports=n.p+"img/1level-answer.1bf0206e.png"},9704:(e,l,n)=>{e.exports=n.p+"img/2level-1.711f067d.png"},5335:(e,l,n)=>{e.exports=n.p+"img/2level-2.f08b74c5.png"},5824:(e,l,n)=>{e.exports=n.p+"img/2level-3.7bf8bc0f.png"},6971:(e,l,n)=>{e.exports=n.p+"img/2level-answer.0da19037.png"},2895:(e,l,n)=>{e.exports=n.p+"img/3level-1.1d475399.png"},848:(e,l,n)=>{e.exports=n.p+"img/3level-2.d6a33603.png"},571:(e,l,n)=>{e.exports=n.p+"img/3level-3.585b30e2.png"},3850:(e,l,n)=>{e.exports=n.p+"img/3level-4.9591417a.png"},6506:(e,l,n)=>{e.exports=n.p+"img/3level-answer.d2b9a9d8.png"},9387:(e,l,n)=>{e.exports=n.p+"img/4level-1.e1821b64.png"},8192:(e,l,n)=>{e.exports=n.p+"img/4level-2.885cafb7.png"},2027:(e,l,n)=>{e.exports=n.p+"img/4level-3.6ae1f4cf.png"},2204:(e,l,n)=>{e.exports=n.p+"img/4level-answer.6c2a3aa3.png"},7348:(e,l,n)=>{e.exports=n.p+"img/mozg.53fe93a5.gif"},8864:(e,l,n)=>{var r={"./1level-1.png":329,"./1level-2.png":7971,"./1level-3.png":9526,"./1level-answer.png":3184,"./2level-1.png":9704,"./2level-2.png":5335,"./2level-3.png":5824,"./2level-answer.png":6971,"./3level-1.png":2895,"./3level-2.png":848,"./3level-3.png":571,"./3level-4.png":3850,"./3level-answer.png":6506,"./4level-1.png":9387,"./4level-2.png":8192,"./4level-3.png":2027,"./4level-answer.png":2204};function s(e){var l=a(e);return n(l)}function a(e){if(!n.o(r,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=8864},3019:(e,l,n)=>{var r={"./1level-answer.png":3184,"./2level-answer.png":6971,"./3level-answer.png":6506,"./4level-answer.png":2204};function s(e){var l=a(e);return n(l)}function a(e){if(!n.o(r,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=3019}}]);