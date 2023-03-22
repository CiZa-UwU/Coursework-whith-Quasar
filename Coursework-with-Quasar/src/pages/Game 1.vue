<template>
  <q-page>
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
      <div v-if="loading">Loading...</div>
      <draggable v-else 
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
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'
import { useQuery, useMutation} from '@vue/apollo-composable'
import draggable from "vuedraggable";
import gql from 'graphql-tag'


export default defineComponent({
  name: 'Game 1',
  components: {draggable},
  setup () {
    const cur_level = ref(1)
    const levelDone = ref(0)
    const res = ref([])
    const ABC = useQuery(gql`query my2($level_1_game_1: Boolean!) {
       done_levels(where: {level_1_game_1: {_eq:$level_1_game_1}}) {
         user_id
         level_1_game_1
       }
     }
     `,{"level_1_game_1":false})
     const {result,loading,error,refetch} = useQuery(gql`query my($levels: Int!) {
      game_content(where: {levels: {_eq:$levels}}) {
        game_name
        id
        image
        is_answer
        levels
      }
    }
    `,{"levels":cur_level})

    // const {mutate} = useMutation(gql`mutation MyMutation {
    // insert_done_levels(objects: 
    // {  
    //  level_1_game_1: false,
    //  level_1_game_2: false,
    //  level_2_game_1: false,
    //  level_2_game_2: false,
    //  level_3_game_2: false,
    //  level_4_game_2: false}) 
    //  {
    //   affected_rows  
    //  }
    // }`)
    console.log(ABC.result);
    // mutate()
    return{
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
          return
        }
        else{
          res.value = []
          alert("Неправильный ответ")
        }
      },
    }
  }
})
</script>
<style>
  .level-bar{
    display: inline;
    border-radius: 35px;
  }
  .card{
    width: 200px;
    height: 200px;
  }
</style>