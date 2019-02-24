<template>
  <div class="home">
    <Hero v-for="product in products" :key="product.id"></Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
  name: 'home',
  components: {
    Hero
  },
  data() {
    return {
      products: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
      ]
    }
  }
}
</script>
