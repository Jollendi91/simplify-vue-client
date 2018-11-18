<template>
    <nav class="app-navigation">
        <div class="navbar desktop-nav">
            <h1 class="logo-container"><font-awesome-icon icon="dollar-sign" class="logo">S</font-awesome-icon>implify</h1>
            <nav-buttons></nav-buttons>
        </div>
        <div class="navbar mobile-nav">
            <h1 class="logo-container"><font-awesome-icon icon="dollar-sign" class="logo">S</font-awesome-icon>implify</h1>
            <div>X</div>
        </div>
        <nav-buttons class="mobile-links"></nav-buttons>
    </nav>
</template>

<script>
    import Buttons from './Buttons.vue';
    export default {
        components: {
            navButtons: Buttons
        }
    }
</script>

<style scoped lang="scss">
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
