<template>
<span class="flex justify-end q-mt-xl q-mr-xl">Еще нет аккаунта? <router-link class="q-mx-sm" to="/register" 
    > Создайте сейчас</router-link></span>
    <div class="q-pa-md flex flex-center q-mt-xl">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="email"
          label="Ваша почта"
          hint="Email"
          type = "email"
          lazy-rules
          :rules="MyMailRules()"
        />
  
        <q-input
          filled
          type="password"
          v-model="pass"
          label="Ваш пароль"
          lazy-rules
          :rules="MyPassRules()"
        />
  
        <q-toggle v-model="accept" label="Я принимаю лицензионное соглашение" />
  
        <div>
          <q-btn label="Отправить" type="submit" color="green"/>
          <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>
  </template>
<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default defineComponent({
  name: 'Enter',
  setup () {
    const $q = useQuasar()

    const email = ref(null)
    const pass = ref(null)
    const accept = ref(false)

    return {
      email,
      pass,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Вы должны принять сначала лецинзионное соглашение'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Отправлено'
          })
        }
      },

      onReset () {
        email.value = null
        pass.value = null
        accept.value = false
      },
      MyMailRules () {
        return [ val => val && val.length > 0 || 'Введите что нибудь']
      },
      MyPassRules () {
        return [val => val !== null && val !== '' || 'Пожалуйста введите пароль']
      }
    }
  }
})
</script>