<script setup>
import About from '~/components/About.vue';
</script>
<template>
  <section class="w-full flex min-h-[800px] bg-[url('/images/Vector.svg')]">
    <div class="w-full h-full bg-hero-gradient">
      <Navbar />
      <Hero />
    </div>
  </section>
  <section class="flex w-full">
    <About />
  </section>
  <Logos />
  <GetStarted />
  <Stats />
  <Plan />
  <Testimonials />
  <Faqs />
  <Contact />
  <Footer />
</template>
