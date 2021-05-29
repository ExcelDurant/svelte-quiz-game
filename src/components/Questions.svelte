<script>
    export let showScreen;
    export let showNext = false;

    // imports the points from the main component
    export let points;

    // imports the lives from the main component
    export let lives;

    // imports the questions from the main component
    export let questions;

    // sets the timer to 18 seconds
    let time = 19;

    // chooses the first question randomly
    let n = Math.floor(Math.random() * questions.length);

    // see if the answer chosen is the correct answer
    const answered = (answer) => () => {
        if (answer == questions[n].correctAns) {
            // alert("you chose the correct answer");
            // adds one point if the answer is correct
            if (time >= 12) {
                points += 3;
            } else if (time >= 8 && seconds < 12) {
                points += 2;
            } else {
                points += 1;
            }
            // deletes the current question
            questions.splice(n, 1);
            // sets back the time to 18 seconds
            time = 19;
            // executes the function to choose the next question
            nextQuestion();
        } else {
            // executes the wrong answer function
            falseAns();
        }
    };

    // wrong answer function
    function falseAns() {
        // alert("you chose the wrong answer");
        // removes one life
        lives -= 1;
        // deletes the current question
        questions.splice(n, 1);
        // sets back the time to 18 seconds
        time = 19;
        // executes the function to choose the next question
        nextQuestion();
    }

    // function that chooses the next question
    function nextQuestion() {
        n = Math.floor(Math.random() * questions.length);
    }

    // timer function
    const interval = setInterval(() => {
        time -= 1;
        // when timer reaches zero execute the wrong answer function
        if (time <= 0) {
            falseAns();
        }
    }, 1000);

    // run the logic reactively in the background
    $: if (lives <= -1) {
        showScreen = false;
        showNext = true;
    }
</script>

<div class="questions-screen">
    <div class="top-sec">
        <div class="lives-container">
            <h4 class="lives-txt">{lives} lives left</h4>
        </div>
        <div class="points-container">
            <h4 class="points-txt">
                {points} points
            </h4>
        </div>
    </div>
    <div class="countdown-container">
        <h5 class="countdown-txt">{time}</h5>
    </div>
    <div class="question-container">
        <h3 class="question-txt">
            {questions[n].question}
        </h3>
    </div>
    <div class="answers-container">
        <button on:click={answered(questions[n].answers[0])} class="ans-btn"
            >{questions[n].answers[0]}</button
        >
        <button on:click={answered(questions[n].answers[1])} class="ans-btn"
            >{questions[n].answers[1]}</button
        >
        <button on:click={answered(questions[n].answers[2])} class="ans-btn"
            >{questions[n].answers[2]}</button
        >
        <button on:click={answered(questions[n].answers[3])} class="ans-btn"
            >{questions[n].answers[3]}</button
        >
    </div>
</div>

<style>
    .questions-screen {
        width: 80%;
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
