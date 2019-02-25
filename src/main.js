import Vue from 'vue';
import App from './App.vue';

import ab from './ab.json';
import VueABTest from 'ab-vue';
import router from './router';

Vue.use(VueABTest, {
    debug: true,
    config: ab,
});

Vue.config.productionTip = false;

new Vue({
    ab,
    router,
    render: h => h(App)
}).$mount('#app');
