<template>
   <q-page class="main-wrapper">
    <div class="mini-wrapper q-mb-lg" :class="{'done' : levelDone}">
      <div class="q-pt-xl q-mx-xl justify-center text-center">
      <q-icon v-if="cur_level!==1" 
      @click="cur_level--;
              refetch();
              res=[];
              levelDone = 0" 
      color="black" 
      name="chevron_left" 
      size="50px"
      />
      <h5 class="shadow-2 q-pa-md level-bar">
        Уровень {{ cur_level }}
      </h5>
      <q-icon v-if="cur_level!==4" 
        @click ="cur_level++;
                refetch();
                res=[];
                levelDone = 0" 
        color="black" 
        name="chevron_right" 
        size="50px"
      />
    </div>
    <h6 v-if="levelDone" class="row justify-center">Вы уже прошли этот уровень, поздравляем!!!</h6>
    <div class="justify-center row">
      <img :src="require('../assets/game2/'+cur_level+'level-answer.png')">
    </div>
    <div class="q-pt-xl justify-center row">
      <div v-if="loading || loading2">
        <div class="brain">
            <img class="brain_img"
              src="../assets/mozg.gif" alt="">
        </div>
      </div>
      <div v-else @vnode-mounted="Hello()">
      <q-img v-for="(item,index) in result.game_content"
        class="q-pa-md card"
        :key="result.game_content[index].id" 
        :class="{'answer' : item.is_answer, 'card_level_1-2' : cur_level == 1, 'card_level_3' : cur_level == 3, 'card_level_4' : cur_level == 4}" 
        :src="require('../assets/game2/'+item.image)"
        @click.self="Check($event)"/>
      </div>
    </div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent,ref,computed } from 'vue'
import { useQuasar } from 'quasar';
import { useQuery, useMutation} from '@vue/apollo-composable'
import { GetLevelData, GetUserData, AddDoneLevel } from "../apollo/query/queryes.js"

export default defineComponent({
  name: 'Game 2',
  setup () {
    const cur_level = ref(1)
    const levelDone = ref(0)
    const res = ref([])
    const {result, loading, error, refetch} = useQuery(computed( () => GetLevelData ), {"levels":cur_level})
    const {result:result2,loading:loading2} = useQuery(computed( () => GetUserData))
    const { mutate : mutate2 } = useMutation(AddDoneLevel)
    const $q = useQuasar()
    return{
      cur_level,
      result,
      result2,
      loading2,
      loading,
      error,
      refetch,
      res,
      levelDone,

      //Methods
      Check(evn){
        console.log(evn.target.classList);
        if(evn.target.classList[1] == 'answer' && !levelDone.value){
          $q.notify({
            message: 'Правильный ответ!',
            color: 'green'
          })
          levelDone.value = 1
          if(window.Clerk.user){
            mutate2({"game":2,"level":cur_level.value})
          }
        }
        else if(!levelDone.value){
          $q.notify({
            message: 'Попробуй еще раз!',
            color: 'red'
          })
        }
      },
      CheckLevelDone(){
        if(window.Clerk.user){
        result2._rawValue.done_levels.forEach(element => {
          if(element.level == cur_level.value && element.game == 2 && element.done == true){
            levelDone.value = 1;
          }
        });
      }
      }
    }
  }
})
</script>

<style>
.level-bar{
  display: inline;
  border-radius: 35px;
  background: #00684F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  }
.card{
  height: 250px;
  width: 250px;
}

.mini-wrapper {

width: 1000px;
height: 840px;
background: white;
border-radius: 50px;
}

.main-wrapper {
display: flex;
justify-content: center;
padding-top: 40px;
}

.card_level_1-2{
  width: 250px;
  height: 250px;
}
.card_level_3{
  width: 200px;
  height: 150px;
}
.card_level_4{
  width: 200px;
}
.done{
  background-color: lightgreen;
}
.brain_img {
  width: 100px;
  height: 100px;
}
</style>