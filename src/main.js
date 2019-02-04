import Vue from 'vue';
import App from './App.vue';
import { VueABTest } from 'testing-tool';

import ab from './ab.json';

Vue.config.productionTip = false;

Vue.use(VueABTest, {
    debug: true,
    config: ab,
});

new Vue({
    render: h => h(App),
}).$mount('#app');
