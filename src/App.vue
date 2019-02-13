<template>
    <div id="app">
        <pre>{{ config }}</pre>
        <!--<Hero></Hero>-->
    </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
    components: { Hero },
    computed: {
        config() {
            return this.$ab;
        }
    },
    mounted() {

    }
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    pre {
        text-align: left;
        background-color: #EFEFEF;
        border: 1px solid #999999;
    }
</style>
