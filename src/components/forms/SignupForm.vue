<template>
    <article class="form-container">
        <font-awesome-icon class="close-btn" icon="times" @click="toggleForm()"/>
        <form class="signup-form">
            <header class="header-container">
                <h2>Ready to get started?</h2>
            </header>
            <div class="horizontal-inputs">
                <div class="form-input-container">
                    <label for="signup-username">Username</label>
                    <input 
                        name="username"
                        type="text"
                        id="signup-username"
                        ariaLabel="signup username"
                    />
                </div>
                <div class="form-input-container">
                    <label for="signup-password">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="signup-password"
                        ariaLabel="signup password"
                    />
                </div>
                <div class="form-input-container">
                    <label for="verify-password">Verify Password</label>
                    <input 
                        name="verifyPassword"
                        type="password"
                        id="verify-password"
                        ariaLabel="verify password"
                    />
                </div>
            </div>
            <div class="button-container">
                <button class="signup-btn" type="submit">Sign up</button>
            </div>
        </form>
    </article>
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

    .signup-btn {
        padding: .2em 4em;
        font-size: 1em;
        margin: .75em 5px 0;
        background-color: white;
        border: 2px solid #276A73;
        color: #276A73;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
