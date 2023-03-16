<template>
<div class="board-wrapper"> 
    <div class="board">
        <BoardItem :game-status="gameStatus"  v-for="field in fields" :field="field" :key="'item-' + field.id"
        @selectField="selectField($event)"
        />
    </div>

    

    <p class="difficult">Сложность: <strong> {{ difficult }} </strong></p>
    <p class="win" v-if="isWin"> Поздравляем! Продолжаем играть</p>
    <p class="fail" v-if="isFail"> Вы проиграли. Повезет в следующий раз!</p>


    <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
    
</div>
    
</template>

<script>
import BoardItem from './BoardItem.vue'
import useGameInit from './composables/useGameInit'; // перенос логики в отдельный файл, типо фишка композишн
import useGameStart from './composables/useGameStart';
import useGameProcess from './composables/useGameProcess';
import { GAME_STATUS } from 'src/constants';
import { ref } from 'vue';

export default {
    name: 'Board',
    props: {},
    components: {
        BoardItem,
    },
    setup() {
        
        const number = 25;

        const gameStatus = ref(GAME_STATUS.NONE)

        const { difficult, fields, init } = useGameInit(number); // опять же перенос логики в отдельный файл, тут она вызывается и передает number и возвращает три переменные

        const { start, canStartGame } = useGameStart(init, fields, difficult, number, gameStatus)

        const { selectField, isWin, isFail } = useGameProcess(fields, gameStatus, difficult, start)

        return {
            number,
            difficult,
            fields,
            init,
            start,
            gameStatus,
            canStartGame,
            selectField,
            isWin,
            isFail,
        }
    },
    
}
</script>

<style scoped lang="sass">

.board-wrapper
    margin-bottom: 100px

.board
    width: 300px
    background: #eee
    margin: 0 auto

.btn
    background: #42b983cc
    color: white
    border: none
    border-radius: 2px
    padding: 10px 30px
    margin: 10px 0
    cursor: pointer
    outline: none
    &:hover
        background: #42b983
    &:disabled
       opacity: .5

.win
    color: #42b983    

.fail
    color: #ff000055
</style>