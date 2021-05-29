<script>
    export let difficulty = '';

    // function chooseDifficulty(diff){
    //     difficulty = diff;
    // }
    const chooseDifficulty = diff => () => {
        difficulty = diff;
    }
</script>

<div class="page">
    <div class="game-screen">
        <div class="input-container">
            <h2 class="title">Difficulty level:</h2>
            <button on:click="{chooseDifficulty('easy')}" class="diff-btn easy">easy</button>
            <button on:click="{chooseDifficulty('medium')}" class="diff-btn medium">medium</button>
            <button on:click="{chooseDifficulty('hard')}" class="diff-btn hard">hard</button>
        </div>
    </div>
</div>

<style>
    .page {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .game-screen {
        width: 700px;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url("./../assets/quiz4.jpeg");
        background-size: 100% 100%;
        background-position: 40% 100%;
    }
    .input-container {
        width: 55%;
        height: 40%;
        background-color: rgba(255, 255, 255, 0.966);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .diff-btn {
        width: 150px;
        padding: 10px 0;
        border-radius: 20px;
        text-transform: uppercase;
        border: none;
        color: white;
        font-weight: 600;
    }
    .easy {
        background-color: rgb(3, 3, 126);
    }
    .medium {
        background-color: rgb(122, 122, 4);
    }
    .hard {
        background-color: rgb(141, 4, 4);
    }
</style>
