<script>
    export let name;
    export let points;
    export let difficulty;

    export let showScreen;
    export let showNext = false;

    let status;
    let showLoading = false;

    let date =
        new Date().toJSON().slice(0, 10).replace(/-/g, "/") +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes();

    import { db } from "./../firebase.js";

    const statuses = {
        one: "the cow🐄",
        two: "the pig🐖",
        three: "the mosquito🦟",
        four: "the fowl🍗",
        five: "the donkey🦙",
        six: "the lizard🦎",
        seven: "the sage",
        eigth: "le goat",
        nine: "UNBEATABLE",
        ten: "OMNI-MAN",
    };

    if (points <= 10) {
        status = statuses.one;
    } else if (points <= 20 && points > 10) {
        status = statuses.two;
    } else if (points <= 30 && points > 20) {
        status = statuses.three;
    } else if (points <= 40 && points > 30) {
        status = statuses.four;
    } else if (points <= 50 && points > 40) {
        status = statuses.five;
    } else if (points <= 80 && points > 50) {
        status = statuses.six;
    } else if (points <= 90 && points > 80) {
        status = statuses.seven;
    } else if (points <= 100 && points > 90) {
        status = statuses.eigth;
    } else if (points <= 110 && points > 100) {
        status = statuses.nine;
    } else {
        status = statuses.ten;
    }

    function removeScreen() {
        showLoading = true;
        db.collection("results")
            .add({
                name: name,
                points: points,
                difficulty: difficulty,
                status: status,
                date: date,
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                showScreen = false;
                showNext = true;
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                window.alert("Something went wrong. Please try again");
            });
    }
</script>

<div class="results-screen">
    <h3 class="congrat">
        Congratulations {name} you successfully failed at {date}
    </h3>
    <h5 class="point">
        You finished with <span class="highlight">{points} points!!!</span>
    </h5>
    <h3 class="congrat">status: {status}</h3>
    <button on:click={removeScreen} class="lead-btn">View Leaderboard</button>
    {#if showLoading}
        <h4 class="loading-txt">
            sending your results please wait............
        </h4>
    {/if}
</div>

<style>
    .results-screen {
        width: 90%;
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
