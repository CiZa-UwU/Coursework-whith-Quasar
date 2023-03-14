<template>
   <q-header elevated class="header q-pa-sm q-mb-xl">
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

        <router-link to="/authorization" class="link">
          <q-btn class="bg-white"
          label="Авторизация"
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
.header{
  background: url(https://media.discordapp.net/attachments/1084917962487631913/1084921948024356965/sfsfadfadf_background_full_of_puzzles_and_games_ddbcdcf2-4472-4e91-881f-6cb5c7b09065.png?width=738&height=422);
  height: 75px;
}
</style>
