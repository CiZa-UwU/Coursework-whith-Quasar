<template>
  <q-page class="main-wrapper">

  <div class="mini-wrapper q-mb-lg q-pb-lg" :class="{'done' : levelDone}">
  <div class="q-pt-xl q-mx-xl justify-center text-center">
      <q-icon v-if="cur_level!==1" 
      @click="cur_level--;
              refetch();
              res=[];
              " 
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
                " 
        color="black" 
        name="chevron_right" 
        size="50px"
      />
    </div>
    <h6 v-if="levelDone" class="row justify-center">Вы уже прошли этот уровень, поздравляем!!!</h6>
    <div class="q-pt-xl justify-center row">
      <img :src="require('../assets/game1/'+cur_level+'level-answer.png')"
           :class="{'card_level_1' : cur_level == 1, 'card_level_2' : cur_level == 2}"
           >
      <draggable 
        :list="res" 
        group = "a" 
        @add="Check" 
        class="card"
        :class="{'card_level_1' : cur_level == 1, 'card_level_2' : cur_level == 2}"
        item-key="res.image">
        <template #item = "{ element }" >
          <div class="list-group-item">
            <img class="q-mx-md" 
              :src="require('../assets/game1/'+element.image)" 
              :class="{'card_level_1' : cur_level == 1, 'card_level_2' : cur_level == 2}"
              alt="img"
            />
          </div>
        </template>
      </draggable>
    </div>
    <div class="q-pt-xl justify-center row">
      <div v-if="loading || loading2">Загрузка</div>
      <draggable v-else
        @vnode-mounted="CheckLevel()"
        :list="result.game_content"
        :sort="false" 
        :group="{name:'a',pull:'clone',put:'false'}" 
        :disabled="levelDone" 
        item-key="result.game_content.id"
        >
        <template #item="{ element }">
          <q-img class="q-mx-md col-4" 
            :class="{'answer' : element.is_answer, 'card_level_1' : cur_level == 1, 'card_level_2' : cur_level == 2}" 
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
import { useQuasar } from 'quasar';
import { useQuery, useMutation } from '@vue/apollo-composable'
import draggable from "vuedraggable";
import { GetLevelData, GetUserData, AddNewUser, AddDoneLevel } from "../apollo/query/queryes.js"

export default defineComponent({
  name: 'Game 1',
  components: {draggable},
  setup () {
    const $q = useQuasar()
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
          $q.notify({
            message: 'Правильный ответ!',
            color: 'green'
          })
          levelDone.value = 1;
          if(window.Clerk.user){
            mutate2({"game":1,"level":cur_level.value})
          }
        }
        else{
          res.value = []
          $q.notify({
            message: 'Попробуй еще раз!',
            color: 'red'
          })
        }
      },
      CheckLevel(){
        if(window.Clerk.user){
        result2._rawValue.done_levels.forEach(element => {
          if(element.level == cur_level.value && element.game == 1 && element.done == true){
            levelDone.value = 1;
          }
          else{
            levelDone.value = 0;
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
  width: 100px;
  height: 100px;
}
.card_level_1{
  width: 100px;
}
.card_level_2{
  height: 150px;
  width: 175px;
}
.mini-wrapper {
  width: 1000px;
  background: white;
  border-radius: 50px;
}
.done{
  background-color: lightgreen;
}
.main-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
</style>