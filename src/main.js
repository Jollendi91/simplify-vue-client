import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faAngleRight, faAngleLeft, faCaretLeft, faSpinner, faDollarSign, faChevronDown, faMoneyBillWave, faChartLine, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faTimes, faAngleRight, faAngleLeft, faCaretLeft, faSpinner, faDollarSign, faChevronDown, faMoneyBillWave, faChartLine, faCalculator, faEdit, faTrashAlt, faSave);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
