<template>
   <q-page>
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
    </div>
  </q-page>
</template>

<script>
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
    return{
      cur_level,
      result,
      loading,
      error,
      refetch,
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
      }
    }
  }
})
</script>

<style>

.game211{
  width: 500px;
  height: 200px;
  display: inline;
}

.game21{
  width: 250px;
  height: 160px;
  display: inline;
  margin-right:10px;
  margin-bottom: 30px;
}

.game21:hover{
  transform: scale(1.05);
}

#color{

}

</style>
