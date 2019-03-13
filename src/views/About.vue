<template>
  <div class="about container">
    <h1>Send us a message</h1>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
  name: 'about',
  components: { ContactForm },
}
</script>

<style>
  .about {
    text-align: left;
  }

  .about h1 {
    text-align: center;
    margin-bottom: 2em;
  }
</style>
