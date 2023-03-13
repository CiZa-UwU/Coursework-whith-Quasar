<template>
    <q-list>
      <q-item-label header>
        <h5 class="justify-center">Игры:</h5>
      </q-item-label>
      
      <q-card class="my-card q-pa-md q-ma-md">
      <img src="../assets/7-qhqmkQQiA.jpg">
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="games" class="link" style="text-decoration: none; color: black;">
                <q-item-label>Соедини половинки</q-item-label>
                <q-item-label caption>Перейти</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    </q-list>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavList',
    setup() {
        
    },
})
</script>
