<template>
    <div id="app">
        <div id="nav">
            <el-menu :default-active="$route.name" mode="horizontal" :router="true">
                <el-menu-item index="home" :route="{ path: '/' }">Home</el-menu-item>
                <el-menu-item index="about" :route="{ path: '/about' }">About</el-menu-item>
            </el-menu>
        </div>
        <router-view/>
    </div>
</template>

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
        color: #265B8D;
    }

    .container {
        max-width: 960px;
        margin: 60px auto 0;
    }

    .el-menu {
        display: flex;
        justify-content: center;
    }
</style>
