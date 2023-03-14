<template>
    <q-page class="justify-center flex q-pa-lg">
      <router-link class="link" to="authorization/enter"><span class="q-mx-md text-h5">Войти</span></router-link>
      <span class="text-h5 q-mx-md">Зарегестрироваться</span>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Authorization'
  })
  </script>