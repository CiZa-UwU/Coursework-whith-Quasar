<template>
   <q-page>
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon color="blue" name="chevron_left" size="50px"/>
        <h5 class="shadow-2 q-pa-md" style="display: inline; border-radius: 30px;" id="color">Уровень 1</h5>
        <q-icon color="blue" name="chevron_right" size="50px"/>
      </div>

      <div class="q-pt-xl justify-center row">
        <img class="game211" src="../assets/game2_1.1.jpg" alt="">
      </div>

      <div class="q-pt-xl justify-center row">
        <img @click="colorRed" class="game21" src="../assets/game2_1.2.jpg" alt="">
        <img @click="colorRed" class="game21" src="../assets/game2_1.3.jpg" alt="">
        <img @click="colorGreen" class="game21" src="../assets/game2_1.4.jpg" alt="">
      </div>
  </q-page>
</template>

<script>
export default {
  methods:{
   colorRed() {
    document.getElementById("color").style.background = "red";
    },
    colorGreen() {
    document.getElementById("color").style.background = "green";
    document.getElementById("color").style.color = "white";
    }
  }
}
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
