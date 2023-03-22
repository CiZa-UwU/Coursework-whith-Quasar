<template>

	<q-page>
		<div class="app">

			<div class="justify-center flex">
				<div class="game3_wrapper">

<img class="logo" src="../assets/zap.png" alt="">

<h1 class="h1"> Remember Me </h1>
<p>Запомни и открой все зеленые клетки</p>

<Board />
</div>
			</div>



</div>
	</q-page>
	


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

<style scoped>

h1 {
	font-size: 40px
}
	
.app {
	text-align: center;
	margin-top: 40px;
	font-family: Helvetica;
	
}


.game3_wrapper {
	padding-top: 30px;
	background: white;
	border: 10px;
	border-radius: 50px;
	width: 600px;
	max-height: 800px;
}

.logo {
	width: 100px
}
	

</style>