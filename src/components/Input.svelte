<script>
    export let name;
    export let showScreen;
    export let showNext = false;
    function handleClick() {
        if (name !== "") {
            // alert("your name is " + name);
            showScreen = false;
            showNext = true;
        } else {
            alert("please enter your name to continue");
        }
    }
</script>

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

<style>
    .input-container {
        width: 90%;
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
