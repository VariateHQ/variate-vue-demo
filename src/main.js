import Vue from 'vue';
import App from './App.vue';

import config from './variate.json';
import VueABTest from 'variate-vue';
import router from './router';

Vue.use(VueABTest, {
    debug: true,
    config: config,
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
