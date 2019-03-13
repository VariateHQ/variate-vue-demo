<template>
    <div class="button">
        <button class="btn" @click="$emit('click', {
            hello: 'world'
        })">
            Primary Button
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

            if(this.width) style += `width: ${this.width};`;
            if(this.color) style += `color: ${this.color};`;
            if(this.backgroundColor) style += `background-color: ${this.backgroundColor};`;
            if(this.borderColor) style += `border-color: ${this.borderColor};`;

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
