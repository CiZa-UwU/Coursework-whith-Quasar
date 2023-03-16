<template>
  <div class="game2">
   <q-page>
    <div>
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon color="blue" name="chevron_left" size="50px"/>
        <h5 class="shadow-2 q-pa-md" style="display: inline; border-radius: 30px; color:white;">Уровень 1</h5>
        <q-icon color="blue" name="chevron_right" size="50px"/>
      </div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div>
        <img class="game211" src="../assets/game2_1.1.jpg" alt="">
      </div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div>
        <img @click="wrong" class="game21" src="../assets/game2_1.2.jpg" alt="">
      </div>
      <div>
        <img @click="wrong" class="game21" src="../assets/game2_1.3.jpg" alt="">
      </div>
      <div>
        <img @click="correct" class="game21" src="../assets/game2_1.4.jpg" alt="">
      </div>
    </div>
  </q-page>
  </div>
</template>

<script>
export default {
  methods:{
    wrong(){
      alert("Ты серьёзно? Попробуй ещё раз ")
    },
    correct(){
      alert("Так держать! Ты становишься умнее")
    }
  }
}
</script>

<style>
.game2{
  background-color: black;
}

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

</style>
