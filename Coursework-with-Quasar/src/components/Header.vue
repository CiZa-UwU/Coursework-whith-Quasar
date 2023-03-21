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
            <!-- <q-avatar class="avatar round-5 shadow-2 text-center">
              <img src="../assets/logo.jpg">
            </q-avatar> -->
        </router-link>
      </q-toolbar-title>

        <router-link to="/about" class="link">
            <q-btn class="btn"
            label="Что такое пространственное мышление?"/>
        </router-link>

          <q-btn class="btn" 
          id="auth-links"
          @click="userApi.login"
          label="Войти"
          />

        <q-btn class="btn"
          id="exit-btn"
          @click="userApi.logout" 
          label="Выйти"
          />

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
import userApi from "../sdk/user_api";
import NavList from './NavList.vue'
console.log(window.Clerk.user);
export default defineComponent({
    name: 'Header',
    components: {NavList},
    setup() {
      const leftDrawerOpen = ref(false)
      return {
        leftDrawerOpen,
        userApi,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
    }
    },
})
</script>

<style scoped>
.header{
  background-color: black;
  height: 75px;
}
.btn{
  background-color:#282d338e;
  border: 1px;
  cursor: pointer;
  font-size: 10px;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-align: center;
  font-weight: 700;
  color: white;
  box-shadow: 0 0 10px 0 #4abcdb inset, 0 0 10px 4px #43b4d3 ;
  margin-left: 30px;
}
</style>
