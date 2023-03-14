<template>
   <q-header elevated class="q-pa-sm q-mb-xl">
    <q-toolbar class = "justify-start">
      <q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <router-link to="/">
            <q-avatar class="round-5 shadow-2 q-mx-xs q-pa-lg text-center bg-white">
            </q-avatar>
        </router-link>
      </q-toolbar-title>

        <router-link to="/about" class="link">
            <q-btn class="bg-white q-mx-xl"
            label="Что такое пространственное мышление?"
            text-color="black"/>
        </router-link>

        <router-link to="/enter" class="link q-mx-sm">
          <q-btn class="bg-white"
          label="Войти"
          text-color="black"
          />
        </router-link>

        <router-link to="/register" class="link">
          <q-btn class="bg-white"
          label="Зарегестрироваться"
          text-color="black"
          />
        </router-link>
    </q-toolbar>
    
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered>
    <NavList/>
  </q-drawer> 
</template>

<script>
import { defineComponent,ref } from 'vue'
import NavList from './NavList.vue'

export default defineComponent({
    name: 'Header',
    components: {NavList},
    setup() {
      const leftDrawerOpen = ref(false)
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
    }
    },
})
</script>

<style scoped>

</style>