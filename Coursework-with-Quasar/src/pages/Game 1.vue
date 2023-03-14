<template>
  <q-page>
    <div>
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon color="black" name="chevron_left" size="50px"/>
        <h5 class="shadow-2 q-pa-md" style="display: inline; border-radius: 30px;">Уровень 1</h5>
        <q-icon color="black" name="chevron_right" size="50px"/>
      </div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div class="bg-red q-ma-sm" style="width: 200px; height: 200px; display: inline;">Первая половина</div>
      <div class="bg-green q-ma-sm" style="width: 200px; height: 200px; display: inline;">Вторая половина</div>
    </div>
    <div class="q-pt-xl justify-center row">
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 1</div>
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 2</div>
      <div class="bg-grey q-ma-sm" style="width: 200px; height: 200px; display: inline;">Выбор 3</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Game 1'
})
</script>