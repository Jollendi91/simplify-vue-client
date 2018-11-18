<template>
    <nav class="app-navigation">
        <div class="navbar desktop-nav">
            <h1 class="logo-container"><span class="logo">S</span>implify</h1>
            <div>
                <ul class="nav-links">
                    <router-link tag="li" to="/dashboard" activeClass="active">
                        <p class="link">Dashboard</p>
                    </router-link>
                    <router-link tag="li" to="/edit-profile" activeClass="active">
                        <p class="link">Edit Profile</p>
                    </router-link>
                    <router-link tag="li" to="/bills" activeClass="active">
                        <p class="link">Bills</p>
                    </router-link>
                    <li class="logout-button">
                        <p class="link">Logout</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navbar mobile-nav">
            <h1 class="logo-container"><span class="logo">S</span>implify</h1>
            <div>X</div>
        </div>
        <div class="mobile-links">
            <ul class="nav-links">
                <router-link tag="li" to="/dashboard" activeClass="active">
                    <p class="link">Dashboard</p>
                </router-link>
                <router-link tag="li" to="/edit-profile" activeClass="active">
                    <p class="link">Edit Profile</p>
                </router-link>
                <router-link tag="li" to="/bills" activeClass="active">
                    <p class="link">Bills</p>
                </router-link>
                <li class="logout-button">
                    <p class="link">Logout</p>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {

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

    .nav-links {
    margin: 0;
    padding: 0;

        &:last-child {
            border-bottom: 2px solid #aaa;
        }

        li, a {
            height: 100%;
        }

        a, .link {
            font-size: 18px;
            text-decoration: none;
            color: black;
            padding: 10px 5px;
            width: 100%;
            cursor: pointer;
        }

        li {
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid #aaa;
            cursor: pointer;

            &:hover {
                background-color: #ddd;
            }
        }
        
        @media screen and (min-width: 545px) {
            display: flex;
            align-items: center;
            align-self: stretch;

            &:last-child {
                border-bottom: 0;
            }

            .link {
                text-align: center;
                border-top: 0;
                padding: 20px 10px;
                min-width: 75px;
                width: auto;
            }

            li {
                border-top: 0;
            }
        } 
    }

    .mobile-nav, .mobile-links {
        display: none;
    }
</style>
