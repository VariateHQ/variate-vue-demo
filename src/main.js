import Vue from 'vue';
import App from './App.vue';
import { VueABTest } from 'testing-tool';

import ab from './ab.json';
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueABTest, {
    debug: true,
    config: ab,
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
