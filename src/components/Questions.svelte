<div class="page">
    <div class="game-screen">
        <div class="questions-screen">
            <div class="top-sec">
                <div class="lives-container">
                    <h4 class="lives-txt">5 lives left</h4>
                </div>
                <div class="points-container">
                    <h4 class="points-txt">
                        20 points
                    </h4>
                </div>
            </div>
            <div class="countdown-container">
                <h5 class="countdown-txt">10</h5>
            </div>
            <div class="question-container">
                <h3 class="question-txt">
                    who was the first president of the united states?
                </h3>
            </div>
            <div class="answers-container">
                <button class="ans-btn">Abraham Lincoln</button>
                <button class="ans-btn">Abraham Lincoln</button>
                <button class="ans-btn">Abraham Lincoln</button>
                <button class="ans-btn">Abraham Lincoln</button>
            </div>
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
    .questions-screen {
        width: 55%;
        height: 80%;
        background-color: rgba(255, 255, 255, 0.966);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .top-sec {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin-top: 10px;
    }
    .countdown-container {
        width: 50px;
        height: 50px;
        border: 3px solid blue;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
    }
    .question-container {
        width: 90%;
    }
    .answers-container {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .ans-btn {
        width: 100%;
        border: 1px solid rgb(151, 243, 14);
        padding: 10px 0;
        margin-bottom: 10px;
        border-radius: 30px;
    }
</style>