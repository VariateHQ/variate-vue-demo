<template>
    <div class="button">
        <button class="btn" :style="style" v-if="visible">
            Secondary Button
        </button>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: () => 'Purchase'
        },
    },
    computed: {
        visible() {
            if(typeof this.testingAttributes.visible !== 'undefined') {
                return this.testingAttributes.visible;
            }

            return true;
        },
        style() {
            let style = '';

            if(this.testingAttributes.width) style += `width: ${this.testingAttributes.width};`;
            if(this.testingAttributes.color) style += `color: ${this.testingAttributes.color};`;
            if(this.testingAttributes.backgroundColor) style += `background-color: ${this.testingAttributes.backgroundColor};`;
            if(this.testingAttributes.borderColor) style += `border-color: ${this.testingAttributes.borderColor};`;

            return style;
        },
    },
    methods: {
        click() {
            // this.$ab.trackGoal('cta-clicks');

            // Going to another page
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn {
        font-size: 16px;
        padding: 8px 15px;
        margin: 0 5px;
        border-color: lightgrey;
        background-color: lightgrey;
    }
</style>
