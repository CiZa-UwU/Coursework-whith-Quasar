(globalThis["webpackChunkcoursework_whith_quasar"]=globalThis["webpackChunkcoursework_whith_quasar"]||[]).push([[331],{935:(e,l,r)=>{"use strict";r.d(l,{Ie:()=>n,Lv:()=>s,fI:()=>t});var a=r(8010);const n=a.ZP`query GetLevelData($levels: Int!) {
    game_content(where: {levels: {_eq:$levels}}) {
      game_name
      id
      image
      is_answer
      levels
    }
  }`,s=a.ZP`query GetUserData{
    done_levels{
      user_id
      level
      game
      done
    }
  }
  `,t=(a.ZP`
    mutation AddNewUser {
      insert_done_levels(objects: 
       {  
         level:1
         game:1
       }) 
       {
        affected_rows  
       }
      }`,a.ZP`
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
      }`)},9331:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>E});var a=r(9835),n=r(6970),s=r(7348),t=r.n(s);const c=e=>((0,a.dD)("data-v-09a8bba0"),e=e(),(0,a.Cn)(),e),o={class:"q-pt-xl q-mx-xl justify-center text-center"},i={class:"shadow-2 q-pa-md level-bar"},v={key:0,class:"row justify-center"},g={class:"q-pt-xl justify-center row"},u=["src"],_={class:"list-group-item"},d=["src"],m={class:"q-pt-xl justify-center row"},p={key:0},w=c((()=>(0,a._)("div",{class:"brain"},[(0,a._)("img",{class:"brain_img",src:t(),alt:""})],-1))),f=[w];function k(e,l,s,t,c,w){const k=(0,a.up)("q-icon"),h=(0,a.up)("draggable"),b=(0,a.up)("q-img"),x=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(x,{class:"main-wrapper"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,n.C_)(["mini-wrapper q-mb-lg q-pb-lg",{done:e.levelDone}])},[(0,a._)("div",o,[1!==e.cur_level?((0,a.wg)(),(0,a.j4)(k,{key:0,onClick:l[0]||(l[0]=l=>{e.cur_level--,e.refetch(),e.res=[]}),color:"black",name:"chevron_left",size:"50px"})):(0,a.kq)("",!0),(0,a._)("h5",i," Уровень "+(0,n.zw)(e.cur_level),1),2!==e.cur_level?((0,a.wg)(),(0,a.j4)(k,{key:1,onClick:l[1]||(l[1]=l=>{e.cur_level++,e.refetch(),e.res=[]}),color:"black",name:"chevron_right",size:"50px"})):(0,a.kq)("",!0)]),e.levelDone?((0,a.wg)(),(0,a.iD)("h6",v,"Вы уже прошли этот уровень, поздравляем!!!")):(0,a.kq)("",!0),(0,a._)("div",g,[(0,a._)("img",{src:r(1309)("./"+e.cur_level+"level-answer.png"),class:(0,n.C_)({card_level_1:1==e.cur_level,card_level_2:2==e.cur_level})},null,10,u),(0,a.Wm)(h,{list:e.res,group:"a",onAdd:e.Check,class:(0,n.C_)(["card",{card_level_1:1==e.cur_level,card_level_2:2==e.cur_level}]),"item-key":"res.image"},{item:(0,a.w5)((({element:l})=>[(0,a._)("div",_,[(0,a._)("img",{class:(0,n.C_)(["q-mx-md",{card_level_1:1==e.cur_level,card_level_2:2==e.cur_level}]),src:r(6235)("./"+l.image),alt:"img"},null,10,d)])])),_:1},8,["list","onAdd","class"])]),(0,a._)("div",m,[e.loading||e.loading2?((0,a.wg)(),(0,a.iD)("div",p,f)):((0,a.wg)(),(0,a.j4)(h,{key:1,onVnodeMounted:l[2]||(l[2]=l=>e.CheckLevel()),list:e.result.game_content,sort:!1,group:{name:"a",pull:"clone",put:"false"},disabled:e.levelDone,"item-key":"result.game_content.id"},{item:(0,a.w5)((({element:l})=>[(0,a.Wm)(b,{class:(0,n.C_)(["q-mx-md col-4",{answer:l.is_answer,card_level_1:1==e.cur_level,card_level_2:2==e.cur_level}]),src:r(6235)("./"+l.image),alt:"img"},null,8,["class","src"])])),_:1},8,["list","disabled"]))])],2)])),_:1})}var h=r(499),b=r(1446),x=r(4886),q=r(3130),y=r.n(q),C=r(935);const D=(0,a.aZ)({name:"Game 1",components:{draggable:y()},setup(){const e=(0,b.Z)(),l=(0,h.iH)(1),{result:r,loading:n,error:s,refetch:t}=(0,x.aM)((0,a.Fl)((()=>C.Ie)),{levels:l}),{result:c,loading:o}=(0,x.aM)((0,a.Fl)((()=>C.Lv))),{mutate:i}=(0,x.Db)(C.fI),v=(0,h.iH)(0),g=(0,h.iH)([]);return{result2:c,loading2:o,cur_level:l,result:r,loading:n,error:s,refetch:t,res:g,levelDone:v,Check(r){r.item.__draggable_context.element.is_answer&&1==g.value.length?(e.notify({message:"Правильный ответ!",color:"green"}),v.value=1,window.Clerk.user&&i({game:1,level:l.value})):(g.value=[],e.notify({message:"Попробуй еще раз!",color:"red"}))},CheckLevel(){window.Clerk.user&&c._rawValue.done_levels.forEach((e=>{e.level==l.value&&1==e.game&&1==e.done&&(v.value=1)}))}}}});var j=r(1639),I=r(9885),Z=r(2857),L=r(335),O=r(9984),U=r.n(O);const $=(0,j.Z)(D,[["render",k],["__scopeId","data-v-09a8bba0"]]),E=$;U()(D,"components",{QPage:I.Z,QIcon:Z.Z,QImg:L.Z})},6830:(e,l,r)=>{e.exports=r.p+"img/1level-1.9327ec72.png"},8247:(e,l,r)=>{e.exports=r.p+"img/1level-2.32746aca.png"},4916:(e,l,r)=>{e.exports=r.p+"img/1level-3.3be5cc37.png"},5945:(e,l,r)=>{e.exports=r.p+"img/1level-answer.df081613.png"},9460:(e,l,r)=>{e.exports=r.p+"img/2level-1.51a75794.png"},4969:(e,l,r)=>{e.exports=r.p+"img/2level-2.64c3e4da.png"},3665:(e,l,r)=>{e.exports=r.p+"img/2level-3.594a1842.png"},9646:(e,l,r)=>{e.exports=r.p+"img/2level-answer.4736ce54.png"},7348:(e,l,r)=>{e.exports=r.p+"img/mozg.53fe93a5.gif"},6235:(e,l,r)=>{var a={"./1level-1.png":6830,"./1level-2.png":8247,"./1level-3.png":4916,"./1level-answer.png":5945,"./2level-1.png":9460,"./2level-2.png":4969,"./2level-3.png":3665,"./2level-answer.png":9646};function n(e){var l=s(e);return r(l)}function s(e){if(!r.o(a,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=6235},1309:(e,l,r)=>{var a={"./1level-answer.png":5945,"./2level-answer.png":9646};function n(e){var l=s(e);return r(l)}function s(e){if(!r.o(a,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=1309}}]);