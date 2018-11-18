<template>
    <nav>
        <div>
            <h1>Simplify</h1>
            <div>
                <ul>
                    <router-link tag="li" to="/dashboard" activeClass="active">
                        <p>Dashboard</p>
                    </router-link>
                    <router-link tag="li" to="/edit-profile" activeClass="active">
                        <p>Edit Profile</p>
                    </router-link>
                    <router-link tag="li" to="/bills" activeClass="active">
                        <p>Bills</p>
                    </router-link>
                    <li class="logout-button link">Log out</li>
                </ul>
            </div>
        </div>
        <div class="mobile-nav">
            <h1>Simplify</h1>
            <div>X</div>
        </div>
        <div class="mobile-links">
            <ul>
                <router-link tag="li" to="/dashboard" activeClass="active">
                    <p>Dashboard</p>
                </router-link>
                <router-link tag="li" to="/edit-profile" activeClass="active">
                    <p>Edit Profile</p>
                </router-link>
                <router-link tag="li" to="/bills" activeClass="active">
                    <p>Bills</p>
                </router-link>
                <li class="logout-button link">Log out</li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .mobile-nav, .mobile-links {
        display: none;
    }
</style>
