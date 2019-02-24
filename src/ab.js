import Vue from 'vue';
import ab from './ab.json';
import VueABTest from 'ab-vue';

Vue.use(VueABTest, {
    debug: true,
    config: ab,
});
