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
      <img :src="require('../assets/game2/'+cur_level+'level-answer.png')">
    </div>
    <div class="q-pt-xl justify-center row">
      <div v-if="loading">Loading...</div>
      <img v-else v-for="(item,index) in result.game_content"
        class="q-pa-md card"
        :key="result.game_content[index].id" 
        :class="{'answer' : item.is_answer}" 
        :src="require('../assets/game2/'+item.image)"
        @click.self="Check($event)">
    </div>
  </q-page>
</template>

<script>
import { defineComponent,ref,$refs } from 'vue'
import { useQuery} from '@vue/apollo-composable'
import gql from 'graphql-tag'


export default defineComponent({
  name: 'Game 2',
  setup () {
    const cur_level = ref(1)
    const levelDone = ref(0)
    const res = ref([])
    const { result, error, loading, refetch } = useQuery(gql`query my($levels: Int!) {
      game_content(where: {levels: {_eq:$levels}}) {
        game_name
        id
        image
        is_answer
        levels
      }
    }
    `,{"levels":cur_level})
    return{
      cur_level,
      result,
      loading,
      error,
      refetch,
      res,
      levelDone,

      //Methods
      Check(evn){
        if(evn.target.classList[2] == 'answer'){
          alert("Правильный ответ!")
        }
        else{
          alert("Неправильный ответ")
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
}
.card{
  height: 250px;
  width: 250px;
}
</style>
