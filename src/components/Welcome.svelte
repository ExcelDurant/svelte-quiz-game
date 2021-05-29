<div class="page">
    <div class="txt-container">
        <h1 class="title">
            troptop <br />
            quiz
        </h1>
        <div class="btm-sec">
            <button class="start-btn">start playing</button>
            <button class="how-btn">How to play?</button>
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
    .txt-container {
        width: 600px;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: url('./../assets/quiz4.jpeg');
        background-size: 100% 100%;
        background-position: 40% 100%;
    }
    .title {
        color: white;
        font-weight: 900;
        text-align: center;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        transform: rotate(-5deg);
        font-size: 5rem;
        line-height: 0.7;
        margin-top: 20px;
    }
    .btm-sec {
        display: flex;
        flex-direction: column;
    }
    .start-btn {
        padding: 15px 45px;
        border-radius: 30px;
        color: purple;
        background-color: white;
        margin-bottom: 30px;
        text-transform: uppercase;
    }
    .how-btn {
        background-color: rgba(0, 0, 0, 0.514);
        color: purple;
        border: none;
    }
</style>
