<template>
  <q-page class="greetings">
    <div class="greetings_title">
      <p>Proкачай свой мозг с нами.</p>
    </div>
    <div class="brain">
      <img class="brain_img"
        src="https://kartinkin.net/uploads/posts/2021-07/1625834129_14-kartinkin-com-p-mozgi-oboi-krasivie-14.jpg" alt="">
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Greetings',
  setup() {
  }
})
</script>

<style>
.greetings {
  background-color: black;
  display: flex;
  justify-content: space-around;
  padding-top: 80px;
}

.greetings_title {
  color: white;
  font-size: 70px;
  font-family: 'Roboto';
  font-weight: 400;
  max-width: 300px;
  min-width: 300px;
  text-shadow: 10px 15px 15px #53daff;
  margin-left: 250px;
}

.brain {
  margin-top: 20px;
  margin-right: 90px;
}

.brain_img {
  height: 300px;
  width: 600px;
}
</style>
