<script>
    export let name;
    function handleClick() {
        if (name !== "") {
            alert("your name is " + name);
        } else {
            alert("please enter your name to continue");
        }
    }
</script>

<div class="page">
    <div class="game-screen">
        <div class="input-container">
            <h2 class="title">Please enter your name to continue</h2>
            <input
                type="text"
                placeholder="name here"
                class="name-in"
                bind:value={name}
            />
            <button on:click={handleClick} class="submit-btn">Continue</button>
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
        height: 80%;
        background-color: rgba(255, 255, 255, 0.966);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }
    .title {
        font-size: 2rem;
    }
    .name-in {
        width: 80%;
        border-radius: 20px;
        padding-left: 15px;
        outline: none;
        border: 1px solid rgb(247, 4, 247);
        color: rgb(247, 4, 247);
    }
    .name-in:focus {
        border: 2px solid purple;
    }
    .submit-btn {
        padding: 10px 30px;
        border-radius: 20px;
        border: none;
        background-color: purple;
        color: white;
        font-weight: 600;
        font-size: 23px;
    }
    .submit-btn:hover {
        background-color: rgb(238, 6, 238);
    }
</style>
