<template>
	<div class="app">

		<img class="logo" src="../assets/zap.png" alt="">

		<h1 class="h1"> Remember Me </h1>
		<p>Запомни и открой все зеленые клетки</p>

		<Board />
	</div>


</template>

<script>
import Board from '../components/Board.vue'
export default {
	name: 'App',
	components: {
		Board,
	}
}

</script>

<style scoped lang="sass">

h1
	font-size: 40px
.app
	text-align: center
	margin-top: 40px
	font-family: Helvetica
.logo
	width: 100px

</style>