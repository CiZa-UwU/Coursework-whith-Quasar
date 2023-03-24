<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
    <q-page-container class="hi">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import  Header  from '../components/Header.vue';

export default defineComponent({
  name: 'MainLayout',
  components : {Header},

  setup () {

  }
})
</script>

<style>
.link{
  text-decoration: none; color: black;
}

.hi {
  background: url('../assets/Фон1.jpg');
  background-size: cover;
  background-position: center;
}
</style>