<template>
    <div>
        <ul class="nav-links" v-if="$route.path === '/'">
            <li class="demo-account">
               <p class="link">Demo Account</p> 
            </li>
            <li class="signup">
               <p class="link">Sign up</p>
            </li>
            <li class="login">
               <p class="link">Login</p>
            </li>
        </ul>
        <ul class="nav-links" v-else-if="$route.path === '/account-setup'">
            <li class="logout-button">
               <p class="link">Logout</p> 
            </li>
        </ul>
        <ul class="nav-links" v-else>
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
    
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .nav-links {
    margin: 0;
    padding: 0;

        &:last-child {
            border-bottom: 2px solid #aaa;
        }

        li, a {
            height: 100%;
        }

        .link {
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
                padding: 0 10px;
                min-width: 75px;
                width: auto;
            }

            li {
                border-top: 0;
            }
        } 
    }
</style>
