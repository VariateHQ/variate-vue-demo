<template>
    <div class="home">
        <Hero></Hero>
        <HomeContent></HomeContent>
    </div>
</template>

<script>
import Hero from '@/components/Hero';
import HomeContent from '@/components/HomeContent';

export default {
    name: 'home',
    components: { Hero, HomeContent },
};
</script>
