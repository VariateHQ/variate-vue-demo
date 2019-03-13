<template>
    <div class="hero" :style="style">
        <h1>{{ headline }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        backgroundImage() {
            return this.testingAttributes.backgroundImage || 'hero.jpg';
        },
        headline() {
            return this.testingAttributes.headline || 'Variate Vue Demo';
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
        background-color: rgb(33, 165, 197);
    }

    .hero h1 {
        color: white;
        text-shadow: 0 1px 10px rgba(42, 42, 42, 1)
    }
</style>
