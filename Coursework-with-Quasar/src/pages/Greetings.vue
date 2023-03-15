<template>
    <q-page class="greetings">
      <div class="greetings_title">
        <p>Proкачай свой мозг с нами.</p>
      </div>
      <div class="brain">
        <img class="brain_img" src="https://i.gifer.com/origin/86/867536d1390d47a35f0c0e29ed9aef0f.gif" alt="">
      </div>>
    </q-page>
  </template>

  <script>
  import { defineComponent } from 'vue'
  import { useQuery } from '@vue/apollo-composable'
  import gql from 'graphql-tag'

  export default defineComponent({
    name: 'Greetings',
    setup () {
    }
  })
  </script>

  <style>
  .greetings{
   background-color: black;
   display: flex;
   justify-content: space-around;
   padding-top:80px;
  }

  .greetings_title{
    color: white;
    font-size: 70px;
    font-family: 'Roboto';
    font-weight: 400;
    max-width: 300px;
    text-shadow:10px 15px 15px #53daff;
    margin-left: 250px;
  }

  .brain{
    margin-top:20px;
    margin-right:90px;
  }

  .brain_img{
    height:300px;
    width:600px;
  }
  </style>
