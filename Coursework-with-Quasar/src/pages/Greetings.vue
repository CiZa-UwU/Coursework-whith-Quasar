<template>
  <q-page class="main-wrapper">
    <div class="row justify-center q-pt-xl">
      <div class="mini-wrapper col-9 super justify-start items-center q-pa-xl">

          

            <div class="text-container">
              <h1> Открой мир пространства вместе с нами! </h1>

        <h3> Добро пожаловать на сайт, посвященный развитию <b>пространственного мышления</b> у детей! Мы верим, что пространственное мышление является важной компетенцией, которая может помочь детям лучше ориентироваться в трехмерном пространстве, представлять и визуализировать объекты и их отношения друг к другу.</h3>

<h3>На нашем сайте вы найдете множество полезных <b>игр</b>, которые помогут детям развивать и улучшать свое пространственное мышление.

Спасибо, что посетили наш сайт, и мы надеемся, что наши материалы помогут вашим детям развить свое пространственное мышление и достигнуть успеха в будущем!  </h3>

          <router-link to="game-1" class="link">
          <q-btn class="main_btn" text-color="white">
            Начать играть!
          </q-btn>
        </router-link>

          </div>

          <div class="q-pr-lg">
            <img src="../assets/pict.png" class="main_image"/>
          </div>

          
          

          

      </div>
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

<style lang="sass">

.mini-wrapper 
  background: white
  h1
    font-family: 'Playfair Display'
    font-style: normal
    font-weight: 900
    font-size: 54px
    line-height: 100%
    background: linear-gradient(180deg, #168B6F 0%, #005540 100%)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    background-clip: text
    text-fill-color: transparent
  h3
    font-family: 'Lato'
    font-style: normal
    font-weight: 300
    font-size: 18px
    line-height: 130%
    color: #4F4F4F
    opacity: 0.7

.super
  display: flex

.main_btn
  background: linear-gradient(180deg, #168B6F 3.7%, #00684F 100%)
  box-shadow: 0px 4px 0px #005540
  border-radius: 8px
  max-width: 180px
  height: 50px

.main_image
  width: 100%
  height: auto
  max-width: 100%
  display: block

.text-container
  max-width: 60%



@media (max-width: 1271px)
    .text-container
      max-width: 100%
    .main_image
      display: none

@media (max-width: 1271px)
    .mini-wrapper 
      background: white
      h1
        font-family: 'Playfair Display'
        font-style: normal
        font-weight: 900
        font-size: 34px
        line-height: 100%
        background: linear-gradient(180deg, #168B6F 0%, #005540 100%)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        background-clip: text
        text-fill-color: transparent
      h3
        font-family: 'Lato'
        font-style: normal
        font-weight: 300
        font-size: 14px
        line-height: 130%
        color: #4F4F4F
        opacity: 0.7

</style>
