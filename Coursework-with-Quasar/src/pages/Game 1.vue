<template>
  <q-page class="main-wrapper">
    <!-- Игры работают по принципу получения пути к картинке из бд и установкой класса answer на правильную -->
    <!-- Проверка работает по принципу получения данных пользователя и поиска в них пройдена ли игра -->
    <div class="mini-wrapper q-mb-lg q-pb-lg" :class="{ done: levelDone }">
      <div class="q-pt-xl q-mx-xl justify-center text-center">
        <q-icon
          v-if="cur_level !== 1"
          @click="
            cur_level--;
            refetch(); //Отправляет запрос заново с новыми данными
            res = [];
          "
          color="black"
          name="chevron_left"
          size="50px"
        />
        <h5 class="shadow-2 q-pa-md level-bar">Уровень {{ cur_level }}</h5>
        <q-icon
          v-if="cur_level !== 2"
          @click="
            cur_level++;
            refetch(); //Отправляет запрос заново с новыми данными
            res = [];
          "
          color="black"
          name="chevron_right"
          size="50px"
        />
      </div>
      <h6 v-if="levelDone" class="row justify-center">
        Вы уже прошли этот уровень, поздравляем!!!
      </h6>
      <div class="q-pt-xl justify-center row">
        <img
          :src="require('../assets/game1/' + cur_level + 'level-answer.png')"
          :class="{
            card_level_1: cur_level == 1,
            card_level_2: cur_level == 2,
          }"
        />
        <!-- Между групп с одинаковым названием можно перетаскивать. 
      pull - действие при перетаскивании put - возможность претащить list - массив с данными 
      template - выводит в цикле картинки из слота item @add - событие при добавлении -->
        <draggable
          :list="res"
          group="a"
          @add="Check"
          class="card"
          :class="{
            card_level_1: cur_level == 1,
            card_level_2: cur_level == 2,
          }"
          item-key="res.image"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              <img
                class="q-mx-md"
                :src="require('../assets/game1/' + element.image)"
                :class="{
                  card_level_1: cur_level == 1,
                  card_level_2: cur_level == 2,
                }"
                alt="img"
              />
            </div>
          </template>
        </draggable>
      </div>
      <div class="q-pt-xl justify-center row">
        <div v-if="loading || loading2">
          <div class="brain">
            <img class="brain_img" src="../assets/mozg.gif" alt="" />
          </div>
        </div>
        <!-- @vnode-mounted сработает когда появится элемент  -->
        <draggable
          v-else
          @vnode-mounted="CheckLevel()"
          :list="result.game_content"
          :sort="false"
          :group="{ name: 'a', pull: 'clone', put: 'false' }"
          :disabled="levelDone"
          item-key="result.game_content.id"
        >
          <template #item="{ element }">
            <q-img
              class="q-mx-md col-4"
              :class="{
                answer: element.is_answer,
                card_level_1: cur_level == 1,
                card_level_2: cur_level == 2,
              }"
              :src="require('../assets/game1/' + element.image)"
              alt="img"
            />
          </template>
        </draggable>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, watch } from "vue";
import { useQuasar } from "quasar";
import { useQuery, useMutation } from "@vue/apollo-composable";
import draggable from "vuedraggable";
import {
  GetLevelData,
  GetUserData,
  AddDoneLevel,
} from "../apollo/query/queryes.js";

export default defineComponent({
  name: "Game 1",
  components: { draggable },
  setup() {
    const $q = useQuasar(); // Для notify
    const cur_level = ref(1); // Текущий уровень
    const { result, loading, error, refetch } = useQuery(
      computed(() => GetLevelData),
      { levels: cur_level }
    );
    const {
      result: result2,
      loading: loading2,
      refetch: refetch2,
    } = useQuery(computed(() => GetUserData));

    const { mutate: mutate2 } = useMutation(AddDoneLevel);
    const levelDone = ref(0);
    const res = ref([]);
    const CheckLevel = () => {
      //Будет вызываться когда все данные уже получены
      if (window.Clerk.user) {
        let flag = 0;
        result2._rawValue.done_levels.forEach((element) => {
          if (element.level == cur_level.value && element.done == true) {
            flag = 1;
            levelDone.value = 1;
          } else if (flag != 1) {
            levelDone.value = 0;
          }
        });
      } else {
        levelDone.value = 0;
      }
    };
    watch(cur_level, () => {
      refetch2();
      CheckLevel();
    });
    return {
      result2,
      loading2,
      cur_level,
      result,
      loading,
      error,
      refetch,
      res,
      levelDone,
      //Methods
      Check(env) {
        //Будет вызываться когда добавляет новый элемент
        if (
          env.item.__draggable_context.element.is_answer &&
          res.value.length == 1
        ) {
          $q.notify({
            message: "Правильный ответ!",
            color: "green",
          });
          levelDone.value = 1;
          if (window.Clerk.user) {
            mutate2({ game: 1, level: cur_level.value });
          }
        } else {
          res.value = [];
          $q.notify({
            message: "Попробуй еще раз!",
            color: "red",
          });
        }
      },
      CheckLevel,
    };
  },
});
</script>
<style scoped>
.level-bar {
  display: inline;
  border-radius: 35px;
  background: #00684f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
}

.card {
  width: 100px;
  height: 100px;
}
.card_level_1 {
  width: 100px;
}
.card_level_2 {
  height: 150px;
  width: 175px;
}
.mini-wrapper {
  width: 1000px;
  background: white;
  border-radius: 50px;
}
.done {
  background-color: lightgreen;
}
.main-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.brain_img {
  width: 100px;
  height: 100px;
}
</style>
