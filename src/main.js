import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import config from './variate.json';
import Variate from '@variate/vue';
import router from './router';

Vue.use(ElementUI);

Vue.use(Variate, {
    debug: true,
    tracking: true,
    reporter: (event) => {
        console.log('Google Analytics: ' + event.name);
        return true;
    },
    // pageview: false,
    config,
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
