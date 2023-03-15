<template>
    <q-list>
      <q-item-label header>
        <h5 class="justify-center">Игры:</h5>
      </q-item-label>

      <q-card class="my-card q-pa-md q-ma-md">
      <img src="https://media.discordapp.net/attachments/1084917962487631913/1085265393574236200/the_apple_divided_into_two_parts_one_part_of_the_ap_f213ffcc-4c26-422d-b5b1-7ec2161f36a8.png?width=738&height=422">
      <q-list class="list_background">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="game-1" class="link">
                <q-item-label>Соедини половинки</q-item-label>
                <q-item-label caption>Перейти</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card class="my-card q-pa-md q-ma-md">
      <img src="https://media.discordapp.net/attachments/1084917962487631913/1084921429163769856/sfsfadfadf_background_for_header_in_site_puzzles_games_and_brai_72671b22-88ce-4dc8-a89b-e7247e292af7.png?width=738&height=422">
      <q-list class="list_background">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <router-link to="game-2" class="link">
                <q-item-label>Найди правильный ответ</q-item-label>
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
<style>
::-webkit-scrollbar{
  width: 5px;
}

::-webkit-scrollbar-track{
  background-color: black;
}

::-webkit-scrollbar-thumb{
  background-color: #000000;
  border-radius: 8px;
}
</style>
