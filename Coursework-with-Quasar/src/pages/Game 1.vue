<template>
  <q-page>
    <div>
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon v-if="cur_level!==1" @click="cur_level--;Submit();" color="black" name="chevron_left" size="50px"/>
        <h5 class="shadow-2 q-pa-md" style="display: inline; border-radius: 30px;">Уровень {{ cur_level }}</h5>
        <q-icon v-if="cur_level!==3" @click = "cur_level++;Add();" color="black" name="chevron_right" size="50px"/>
      </div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div class="bg-red q-ma-sm" style="width: 200px; height: 200px; display: inline;">Первая половина</div>
      <div class="bg-green q-ma-sm" style="width: 200px; height: 200px; display: inline;">Вторая половина</div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 1 уровень </div>
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 2</div>
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 3</div>
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
  name: 'Game 1',
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
    }
  }
})
</script>