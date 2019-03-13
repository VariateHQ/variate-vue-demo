<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" testing-id="Home">Home</router-link>
            |
            <router-link to="/about" testing-id="About">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log(this.$ab.experiments());
    }
};
</script>

<style>
    html, body {
        width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
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
