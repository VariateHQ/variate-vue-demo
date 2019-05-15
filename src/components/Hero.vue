<template>
    <div class="hero" :style="styles">
        <h1>{{ headline }}</h1>
    </div>
</template>

<script>
import { mapAttributes, mapStyles } from '@variate/vue';

export default {
    computed: {
        ...mapAttributes([
            'headline',
            'backgroundImage',
        ]),
        ...mapStyles('styles', {
            backgroundImage: `url(%s)`,
        }),
    },
};
</script>

<style>
    .hero {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        background-size: cover;
        background-position: center;
        background-color: rgb(33, 165, 197);
    }

    .hero h1 {
        color: white;
        text-shadow: 0 1px 10px rgba(42, 42, 42, 1)
    }
</style>
