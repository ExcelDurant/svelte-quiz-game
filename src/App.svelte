<script>
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
	<Welcome />
	<Info />
	<Input />
	<Difficulty />
	<Questions />
	<Results />
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