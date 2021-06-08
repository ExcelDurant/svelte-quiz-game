<script>
	import questions from "./questions";
	import { db } from "./firebase.js";

	const player = {
		name: "",
		difficulty: "",
		points: 0,
		lives: 0,
	};


	let showWelcome = true;
	let showInput = false;
	let showDiff = false;
	let showQuest = false;
	let showRes = false;
	let showLead = false;

	let playSong = true;
	let loseSong = true;
	$:if(!showWelcome) {
		playSong = showRes;
		loseSong = !playSong;
		console.log(playSong);
	}

	// function playingSound() {
	// 	if(showWelcome = true) {
	// 		console.log("true")
	// 		return true;	
	// 	} else if(!showWelcome) {
	// 		console.log("false")
	// 		return false;
	// 	}
	// }
	// $:playSong = !showLead;
	// if(showWelcome = false) {
	// 	playSong = false;
	// } else if(showLead) {
	// 	playSong = true;
	// }

	// export let name;
	import Welcome from "./components/Welcome.svelte";
	import Info from "./components/Info.svelte";
	import Input from "./components/Input.svelte";
	import Difficulty from "./components/Difficulty.svelte";
	import Questions from "./components/Questions.svelte";
	import Results from "./components/Results.svelte";
	import Leaderboard from "./components/Leaderboard.svelte";
</script>

<main>
	<!-- <h1>
		player name is {player.name} difficulty chosen is {player.difficulty}
	</h1> -->

	<div class="game-screen">
		{#if showWelcome}
			<Welcome bind:showScreen={showWelcome} bind:showNext={showInput} />
		{/if}

		{#if showInput}
			<Input
				bind:name={player.name}
				bind:showScreen={showInput}
				bind:showNext={showDiff}
			/>
		{/if}

		{#if showDiff}
			<Difficulty
				bind:lives={player.lives}
				bind:difficulty={player.difficulty}
				bind:showScreen={showDiff}
				bind:showNext={showQuest}
			/>
		{/if}

		{#if showQuest}
			<Questions
				bind:lives={player.lives}
				bind:points={player.points}
				questions={questions.questions}
				bind:showScreen={showQuest}
				bind:showNext={showRes}
			/>
		{/if}

		{#if showRes}
			<Results
				{...player}
				bind:showScreen={showRes}
				bind:showNext={showLead}
			/>
		{/if}

		{#if showLead}
			<Leaderboard name={player.name}/>
		{/if}
		
	</div>
	<h2>work in progressss...........</h2>
	<h3>by <a href="https://gnopaexcel.netlify.app" target="_blank">Excel</a></h3>
	<audio id="game-audio" src="./assets/POL-two-fat-gangsters-short.mp3" bind:paused={playSong} loop=true></audio>
	<audio id="game-audio" src="./assets/casual-game-lose-sound-effect-45947266.mp3" bind:paused={loseSong}></audio>

	<!-- <Info /> -->
</main>

<style>
	main {
		width: 100%;
		min-height: 100vh;
		background-image: url("./../assets/quiz-bg.jpg");
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.game-screen {
		width: 40%;
		max-width: 700px;
		height: 600px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: url("./../assets/quiz4.jpeg");
		background-size: 100% 100%;
		background-position: 40% 100%;
	}

	@media (max-width: 1300px) {
		.game-screen {
			width: 80%;
		}
	}

	@media (max-width: 840px) {
		.game-screen {
			width: 100%;
			height: 100vh;
			background-size: 150% 100%;
		}
	}
</style>
