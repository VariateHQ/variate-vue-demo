import Vue from 'vue';
import App from './App.vue';

import ab from './ab';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    ab,
    router,
    render: h => h(App)
}).$mount('#app');
