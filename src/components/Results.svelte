<script>
    export let name;
    export let points;

    export let showScreen;
    export let showNext = false;

    function removeScreen() {
        showScreen = false;
        showNext = true;
    }
</script>

<div class="results-screen">
    <h3 class="congrat">
        Congratulations {name} you successfully failed
    </h3>
    <h5 class="point">
        You finished with <span class="highlight">{points} points!!!</span>
    </h5>
    <button on:click={removeScreen} class="lead-btn">View Leaderboard</button>
</div>

<style>
    .results-screen {
        width: 70%;
        height: 80%;
        background-color: rgba(255, 255, 255, 0.966);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .congrat {
        color: rgb(102, 102, 102);
        font-size: 0.8rem;
        margin-bottom: 10px;
    }
    .point {
        font-size: 1.2rem;
        font-weight: 900;
        margin-bottom: 20px;
    }
    .highlight {
        color: rgb(255, 187, 0);
    }
    .lead-btn {
        width: 80%;
        padding: 10px;
        background-color: purple;
        color: white;
        font-weight: 600;
        border-radius: 20px;
        border: none;
    }
</style>
