import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
});

router.beforeEach((to, from, next) => {
    // Custom route logic
    // ...
    router.app.$ab.initialize({
        view: to,
        targeting: {
            country: 'Canada',
            state: 'BC'
        }
    }, next);
});

export default router;
