<template>
    <div class="hero" :style="style">
        <Button label="Primary CTA"
                testing-id="HeroPrimaryCTA"
        ></Button>
        <Button label="SecondaryCTA"
                testing-id="HeroSecondaryCTA"
        ></Button>
    </div>
</template>

<script>
import Button from '@/components/Button';

export default {
    components: { Button },
    computed: {
        style() {
            let style = '';

            if (this.backgroundImage) style += `background-image: url(${this.backgroundImage});`;
            if (this.height) style += `height: ${this.height};`;

            return style;
        },
        backgroundImage () {
            return this.attributes.heroImageSrc || 'http://placehold.it/1200x500';
        },
        height() {
            return this.attributes.heroImageHeight || '300px';
        }
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
</style>
