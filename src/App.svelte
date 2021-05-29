<script>
	import questions from './questions';
	const player = {
		name:'',
		difficulty:'',
		points:0,
		lives:0
	}
	// export let name;
	import Welcome from './components/Welcome.svelte';
	import Info from './components/Info.svelte';
	import Input from './components/Input.svelte';
	import Difficulty from './components/Difficulty.svelte';
	import Questions from './components/Questions.svelte';
	import Results from './components/Results.svelte';
	import Leaderboard from './components/Leaderboard.svelte';
</script>

<main>
	<h1>player name is {player.name} difficulty chosen is {player.difficulty}</h1>
	<Welcome />
	<Input bind:name={player.name}/>
	<Info />
	<Difficulty bind:lives={player.lives} bind:difficulty={player.difficulty} />
	<Questions lives={player.lives} points={player.points} questions={questions.questions}/>
	<Results name={player.name} />
	<Leaderboard />
</main>

<style>
	main {
		widows: 100%;
		min-height: 100vh;
		background-image: url('./../assets/quiz-bg.jpg');
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>