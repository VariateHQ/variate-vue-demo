<template>
  <div class="home">
    <h1>Home</h1>
    <Hero></Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero';

export default {
  name: 'home',
  components: { Hero },
}
</script>
