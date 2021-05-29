<script>
	import questions from "./questions";
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
				name={player.name}
				points={player.points}
				bind:showScreen={showRes}
				bind:showNext={showLead}
			/>
		{/if}

		{#if showLead}
			<Leaderboard />
		{/if}
	</div>

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
		height: 700px;
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
			height: 80vh;
		}
	}
</style>
