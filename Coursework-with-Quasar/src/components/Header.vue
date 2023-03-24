<template>
  <q-header elevated class="header q-pa-sm q-mb-xl">
    <q-toolbar class="justify-start">
      <q-toolbar-title>
        <q-btn  dense icon="menu" aria-label="Menu" @click="toggleLeftDrawer" class="burger-btn" />
        <router-link to="/">

          
            <q-img src="../assets/mainlogo.png" class="mainlogo">
            </q-img>
          
          
        </router-link>
      </q-toolbar-title>

      <router-link to="/chat" class="link">
        <q-btn class="btn" id="chat">Чат</q-btn>
      </router-link>
      <q-btn  class="btn" id="exitBtn" @click="userApi.logout" label="Выйти" />
      <q-btn  class="btn" id="authLinks" @click="userApi.login" label="Войти" />
    </q-toolbar>

  </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <NavList />
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'
import userApi from "../sdk/user_api";
import NavList from './NavList.vue'
export default defineComponent({
  name: 'Header',
  components: { NavList },
  setup() {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      userApi,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
})
</script>

<style scoped>
.header {
  background-color: #079270;
  height: 75px;
}

.btn {
  background-color: linear-gradient(180deg, #168B6F 3.7%, #00684F 100%);
  border: 1px;
  cursor: pointer;
  font-size: 10px;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-align: center;
  font-weight: 700;
  color: white;
  margin-left: 30px;
}

.burger-btn {
background: linear-gradient(180deg, #168B6F 3.7%, #00684F 100%);
border-radius: 8px;
}

.mainlogo {
  width: 50px;
  height: 50px;
  margin-left: 30px;
}
</style>
