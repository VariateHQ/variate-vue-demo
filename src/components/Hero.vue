<template>
    <div class="hero" :style="style">
        <h1>{{ headline }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        backgroundImage() {
            return this.testingAttributes.backgroundImage || 'https://placehold.it/1200x500';
        },
        headline() {
            return this.testingAttributes.headline || 'Default headline';
        },
        style() {
            let style = '';

            if (this.backgroundImage) style += `background-image: url(${this.backgroundImage});`;

            return style;
        },
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
    }

    .hero h1 {
        color: white;
        text-shadow: 0 1px 3px rgba(0, 0, 0, .25)
    }
</style>
