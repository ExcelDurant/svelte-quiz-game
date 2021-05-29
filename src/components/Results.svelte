<script>
    
	export let name;

</script>

<div class="page">
    <div class="game-screen">
        <div class="results-screen">
           <h3 class="congrat">
               Congratulations {name} you successfully failed
           </h3>
           <h5 class="point">
               You finished with <span class="highlight">20 points!!!</span>
           </h5>
           <button class="lead-btn">View Leaderboard</button>
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
    .results-screen {
        width: 55%;
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