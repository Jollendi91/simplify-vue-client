<template>
    <div class="form-modal">
        <div class="overlay" @click="toggleForm()"></div>
        <article class="form-container">
            <font-awesome-icon class="close-btn" icon="times" @click="toggleForm()"/>
            <form class="login-form">
                <header class="header-container">
                    <h2>Let's get logged in!</h2>
                </header>
                <div class="horizontal-inputs">
                    <div class="form-input-container">
                        <label class="login-username">Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="login-username"
                            ariaLabel="Login Username"
                        />
                    </div>
                    <div class="form-input-container">
                        <label class="login-password">Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="login-password"
                            ariaLabel="Login password"
                        />
                    </div>
                </div>
                <div class="button-container">
                <button>Login</button>
                </div>
            </form>
        </article>
    </div>
</template>

<script>
    export default {
        props: {
            toggleForm: Function
        }
    }
</script>

<style scoped lang="scss">
    .form-modal {
      position: absolute;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        article {
            background-color: white;
            z-index: 1;
            margin: 0 10px;
        } 
    }

    .form-container {
        width: 100%;
        max-width: 600px;
        margin: auto;
        border-radius: 5px;
        position: fixed;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 1.5em;
        color: white;
        cursor: pointer;
        z-index: 1;
    }

    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #276A73;
        color: white;
        position: relative;

        @media screen and (min-width: 800px) {
        border-radius: 5px 5px 0 0;
        }
    }

    .horizontal-inputs {
        padding: 20px 10px;

        .form-input-container {
            margin: 10px 0;
        }
    }

    label {
        font-size: 1.3em;
        padding: 10px;
    }

    .button-container {
        padding-bottom: 20px;
    }

    button {
        padding: .2em 2em;
        font-size: 1em;
        margin: .75em 5px 0;
        border: 2px solid #276A73;
        border-radius: 5px;
        color: #276A73;
        font-weight: bold;
    }
</style>
