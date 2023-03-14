<template>
    <span class="flex justify-end q-mt-xl q-mr-xl">Уже есть аккаунт? <router-link class="q-mx-sm" to="/enter" 
    > Войдите</router-link></span>
    <div class="q-pa-md flex flex-center q-mt-xl">
      <q-form
        @submit="onSubmitReg"
        @reset="onResetReg"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="email_reg"
          label="Почта"
          hint="Email"
          type="email"
          lazy-rules
          :rules="MyMailRulesReg()"
        />

        <q-input
          filled
          v-model="name_reg"
          label="Имя"
          lazy-rules
          :rules="MyNameRulesReg()"
        />
  
        <q-input
          filled
          type="text"
          v-model="pass_reg_1"
          label="Ваш пароль"
          lazy-rules
          :rules="MyPassRulesReg()"
        />

        <q-input
          filled
          type="text"
          v-model="pass_reg_2"
          label="Подтвердите пароль"
          lazy-rules
          :rules="MyPass2RulesReg()"
        />
  
        <q-toggle v-model="accept_reg" label="I accept the license and terms" />
  
        <div>
          <q-btn label="Отправить" type="submit" color="green"/>
          <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>    
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Register",
    setup() {
        const $q = useQuasar()
        const email_reg = ref()
        const name_reg = ref()
        const pass_reg_1 = ref()
        const pass_reg_2 = ref()
        const accept_reg = ref(false)
        return{
            email_reg,
            name_reg,
            pass_reg_1,
            pass_reg_2,
            accept_reg,

            onSubmitReg(){
                if(accept_reg.value !== true){
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

            onResetReg(){
                email_reg.value = ""
                name_reg.value = ""
                pass_reg_1.value = ""
                pass_reg_2.value = ""
                accept_reg.value = ""
            },
            
            MyMailRulesReg () {
              return [ val => val && val.length > 0 || 'Введите почту']
            },
            MyNameRulesReg () {
              return [ val => val && val.length > 0 || 'Введите что нибудь']
            },
            MyPassRulesReg () {
              return [val => val !== null && val !== '' || 'Пожалуйста введите пароль']
            },
            MyPass2RulesReg () {
              return [val => val !== null && val !== '' && val !== pass_reg_1.value || 'Пароли не совдают']
            }
        }
    }
})
</script>
