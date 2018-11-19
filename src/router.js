import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage.vue';
import Dashboard from './views/Dashboard.vue';
import EditProfile from './views/EditProfile.vue';
import Category from './views/Category.vue';
import Bills from './views/Bills.vue';
import AccountSetup from './views/AccountSetup.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: LandingPage },
    { path: '/account-setup', component: AccountSetup },
    { path: '/dashboard', component: Dashboard },
    { path: '/category/:id', component: Category },
    { path: '/bills', component: Bills },
    { path: '/edit-profile', component: EditProfile }
  ]
});
