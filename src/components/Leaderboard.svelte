<script>
    export let name;

    import { db } from "./../firebase.js";
    let results = [];
    db.collection("results")
        .orderBy("points", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                results = [...results, doc.data()];
            });
            console.log("Current data: ", results);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
</script>

<div class="leaderboard-screen">
    <h2 class="title">leaderboard</h2>
    <div class="leaderboard-container">
        <table class="leader-table">
            <tr>
                <th>position</th>
                <th>name</th>
                <th>difficulty</th>
                <th>status</th>
                <th>points</th>
                <th>date</th>
            </tr>

            <!-- show loading spinner while waiting for results -->
            {#if results.length == 0}
                <tr>
                    <div class="donutSpinner" />
                </tr>
            {/if}

            {#each results as result, i}
                <tr class:user={result.name === name}>
                    <td>{i + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.difficulty}</td>
                    <td>{result.status}</td>
                    <td>{result.points}</td>
                    <td>{result.date}</td>
                </tr>
            {/each}
        </table>
    </div>
</div>

<style>
    .leaderboard-screen {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.966);
        text-align: center;
        overflow: auto;
    }
    .title {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-family: cursive;
        margin: 20px auto;
    }
    .leaderboard-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: auto;
        overflow: auto;
    }
    .leader-table {
        width: auto;
        border-collapse: separate;
        border-spacing: 0 8px;
        /* overflow: scroll; */
    }
    th {
        text-transform: capitalize;
        color: purple;
        font-weight: 600;
        font-size: 21px;
    }
    td {
        padding: 10px 0;
    }
    .user {
        color: rgb(252, 25, 63);
    }
    .donutSpinner {
        display: inline-block;
        border: 7px solid hsl(222 100% 95%);
        border-left-color: hsl(243 80% 62%);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: donut-spin 1.2s linear infinite;
    }

    @media (max-width: 840px) {
        .leader-table {
            border-spacing: 0;
        }
        th {
            font-size: 15px;
        }
        td {
            font-size: 13px;
        }
    }

    @keyframes donut-spin {
        to {
            transform: rotate(1turn);
        }
    }
</style>
