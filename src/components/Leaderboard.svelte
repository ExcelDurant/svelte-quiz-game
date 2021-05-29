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
            <tr>
                <td>1</td>
                <td>Excel Durant</td>
                <td>hard</td>
                <td>le goat</td>
                <td>120</td>
                <td>29/05/2021</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Excel Durant</td>
                <td>hard</td>
                <td>le goat</td>
                <td>120</td>
                <td>29/05/2021</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Excel Durant</td>
                <td>hard</td>
                <td>le goat</td>
                <td>120</td>
                <td>29/05/2021</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Excel Durant</td>
                <td>hard</td>
                <td>le goat</td>
                <td>120</td>
                <td>29/05/2021</td>
            </tr>
        </table>
    </div>
</div>

<style>
    .leaderboard-screen {
        width: 80%;
        height: 80%;
        background-color: rgba(255, 255, 255, 0.966);
        /* border-radius: 30px; */
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        overflow-y: scroll;
    }
    .title {
        font-size: 2.5rem;
        text-transform: uppercase;
        font-family: cursive;
    }
    .leaderboard-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    .leader-table {
        width: 100%;
    }
    th {
        text-transform: capitalize;
        color: purple;
        font-weight: 600;
        font-size: 21px;
    }
    td {
        font-size: 15px;
    }
</style>
