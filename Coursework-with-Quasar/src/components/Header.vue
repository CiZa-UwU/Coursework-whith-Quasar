<template>
  <q-header elevated class="header q-pa-sm q-mb-xl">
    <q-toolbar class="justify-start">
      <q-toolbar-title>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <router-link to="/">
          <!-- <q-avatar class="avatar round-5 shadow-2 text-center">
              <img src="../assets/logo.jpg">
            </q-avatar> -->
        </router-link>
      </q-toolbar-title>

      <router-link to="/chat" class="link">
        <q-btn class="btn" v-if="isLogin()">Чат</q-btn>
      </router-link>
      <q-btn v-if="isLogin()" class="btn" id="exit-btn" @click="userApi.logout" label="Выйти" />
      <q-btn v-else class="btn" id="auth-links" @click="userApi.login" label="Войти" />
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
      },
      isLogin(){
        if(window.Clerk.user !== 'null' && typeof window.Clerk.user !== 'undefined'){
          return true
          
        }
        else
          return false
      }
    }
  },
})
</script>

<style scoped>
.header {
  background-color: black;
  height: 75px;
}

.btn {
  background-color: #282d338e;
  border: 1px;
  cursor: pointer;
  font-size: 10px;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-align: center;
  font-weight: 700;
  color: white;
  box-shadow: 0 0 10px 0 #4abcdb inset, 0 0 10px 4px #43b4d3;
  margin-left: 30px;
}
</style>
