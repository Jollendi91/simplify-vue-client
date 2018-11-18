<template>
    <div>
        <div class="form-modal" v-if="displayForm">
            <div class="overlay" @click="toggleForm()"></div>
            <component :is="currentForm" :toggleForm="toggleForm"></component>
        </div>
       <nav class="app-navigation">
            <div class="navbar desktop-nav">
                <h1 class="logo-container"><font-awesome-icon icon="dollar-sign" class="logo">S</font-awesome-icon>implify</h1>
                <nav-buttons :setForm="setForm"></nav-buttons>
            </div>
            <div class="navbar mobile-nav">
                <h1 class="logo-container"><font-awesome-icon icon="dollar-sign" class="logo">S</font-awesome-icon>implify</h1>
                <div>X</div>
            </div>
            <nav-buttons class="mobile-links"></nav-buttons>
        </nav> 
    </div>
</template>

<script>
    import Buttons from './Buttons.vue';
    import LoginForm from '../forms/LoginForm.vue';
    import SignupForm from '../forms/SignupForm.vue';

    export default {
        data() {
            return {
                displayForm: false,
                currentForm: 'nav-buttons'
            }
        },
        methods: {
            setForm(form) {
                this.currentForm = form;
                this.displayForm = !this.displayForm;
            },
            toggleForm() {
                this.displayForm = !this.displayForm;
            }
        },
        components: {
            navButtons: Buttons,
            appLoginForm: LoginForm,
            appSignupForm: SignupForm
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

    .app-navigation {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 10;
        background-color: #fff;
    }

    .navbar {
        padding: 0 0 0 15px;
        border-bottom: 1px solid #DDD;
        justify-content: space-between;
        align-items: center;
    }

    .desktop-nav {
        display: flex;
    }

    .logo-container {
        font-size: 30px;
        margin-top: 15px;
        margin-bottom: 5px;
        margin-left: 15px;
    }

    .logo {
        height: 40px;
        width: 40px;
        margin-right: 3px;
        border: 2px solid;
        color: #4ABDAC;
        background-color: #276A73;
    }

    .desktop-nav .nav-links {
        display: flex;
    }

    .mobile-nav, .mobile-links {
        display: none;
    }
</style>
