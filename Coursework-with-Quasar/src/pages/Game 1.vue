<template>
  <q-page class="main-wrapper">

    <div class="mini-wrapper">
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
      <q-icon v-if="cur_level!==2" 
        @click ="cur_level++;
                refetch();
                res=[];
                levelDone = 0" 
        color="black" 
        name="chevron_right" 
        size="50px"
      />
    </div>
    <div class="q-pt-xl justify-center row">
      <img :src="require('../assets/game1/'+cur_level+'level-answer.png')">
      <draggable 
        :list="res" 
        group = "a" 
        @add="Check" 
        class="card"
        item-key="res.image">
        <template #item = "{ element }" >
          <div class="list-group-item">
            <img class="q-mx-md" 
              :src="require('../assets/game1/'+element.image)" 
              alt="img"
            />
          </div>
        </template>
      </draggable>
    </div>
    <div class="q-pt-xl justify-center row">
      <div v-if="loading || loading2">Loading...</div>
      <draggable v-else
        @vnode-mounted="Hello()"
        :list="result.game_content" 
        :sort="false" 
        :group="{name:'a',pull:'clone',put:'false'}" 
        :disabled="levelDone" 
        item-key="result.game_content.id"
        >
        <template #item="{ element }">
          <img class="q-mx-md item" 
            :class="{'answer' : element.is_answer}" 
            :src="require('../assets/game1/'+element.image)" 
            alt="img"
          />
        </template>
      </draggable>
    </div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent,ref,computed } from 'vue'
import { useQuery, useMutation } from '@vue/apollo-composable'
import draggable from "vuedraggable";
import { GetLevelData, GetUserData, AddNewUser, AddDoneLevel } from "../apollo/query/queryes.js"

export default defineComponent({
  name: 'Game 1',
  components: {draggable},
  setup () {
    const cur_level = ref(1)
    const {result, loading, error, refetch} = useQuery(computed( () => GetLevelData ), {"levels":cur_level})
    const {result:result2,loading:loading2} = useQuery(computed( () => GetUserData))
    const { mutate : mutate2 } = useMutation(AddDoneLevel)
    const levelDone = ref(0)
    const res = ref([])
    return{
      result2,
      loading2,
      cur_level,
      result,
      loading,
      error,
      refetch,
      res,
      levelDone,
      //Methods
      Check(env){
        if(env.item.__draggable_context.element.is_answer && res.value.length == 1){
          alert("Правильный ответ")
          levelDone.value = 1;
          if(window.Clerk.user){
            mutate2({"game":1,"level":cur_level.value})
          }
        }
        else{
          res.value = []
          alert("Неправильный ответ")
        }
      },
      Hello(){
        if(window.Clerk.user){
        result2._rawValue.done_levels.forEach(element => {
          if(element.level == cur_level.value && element.game == 1 && element.done == true){
            console.log("Done");
            levelDone.value = 1;
          }
        });
      }
      }
    }
  }
})
</script>
<style scoped>

.level-bar{
  display: inline;
  border-radius: 35px;
  background: #00684F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  }

.card{
    width: 200px;
    height: 200px;
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

</style>