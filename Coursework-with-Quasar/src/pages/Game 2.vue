<template>
   <q-page>
<<<<<<< HEAD
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon v-if="cur_level!==1" @click="cur_level--;Submit();" color="darkblue" name="chevron_left" size="50px"/>
        <h5 class="shadow-2 q-pa-md" style="display: inline; border-radius: 30px;" id="color">Уровень {{ cur_level }}</h5>
        <q-icon v-if="cur_level!==3" @click = "cur_level++;Add();" color="blue" name="chevron_right" size="50px"/>
      </div>

      <div class="q-pt-xl justify-center row">
        <img class="game211" src="../assets/game2_1.1.jpg" alt="">
      </div>

      <div class="q-pt-xl justify-center row">
        <img @click="colorRed" class="game21" src="../assets/game2_1.2.jpg" alt="">
        <img @click="colorRed" class="game21" src="../assets/game2_1.3.jpg" alt="">
        <img @click="colorGreen" class="game21" src="../assets/game2_1.4.jpg" alt="">
      </div>

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else-if="result && result.game_content">
      <div>id: {{ result.game_content[0].id }}</div>
      <div>title: {{ result.game_content[0].image }}</div>
=======
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
>>>>>>> a72419b02d2a53cbeece5effdc09fb51ec4e5066
    </div>
  </q-page>
</template>

<script>
<<<<<<< HEAD
import { defineComponent,ref } from 'vue'
import { useQuery} from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent({
  setup () {
    const cur_level = ref(1)
    const { result, error, loading, refetch } = useQuery(gql`query my($levels: Int!) {
      game_content(where: {levels: {_eq:$levels}}) {
      levels
      image
      game_name
      id
      }
    }
    `,{"levels":cur_level})
    console.log(result);
    console.log(error)
=======
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
>>>>>>> a72419b02d2a53cbeece5effdc09fb51ec4e5066
    return{
      cur_level,
      result,
      loading,
      error,
      refetch,
<<<<<<< HEAD
      Add(){
        refetch()
        console.log(result);
      },
      Submit(){
        refetch()
        console.log(result);
      },
      colorRed() {
        document.getElementById("color").style.background = "red";
      },
      colorGreen() {
        document.getElementById("color").style.background = "green";
        document.getElementById("color").style.color = "white";
=======
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
>>>>>>> a72419b02d2a53cbeece5effdc09fb51ec4e5066
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
<<<<<<< HEAD

.game21:hover{
  transform: scale(1.05);
}

#color{
  color:black;
}

=======
>>>>>>> a72419b02d2a53cbeece5effdc09fb51ec4e5066
</style>
