<template>
  <div>
    <Header />
    <main>
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Services from '~/components/Services.vue';
import About from '~/components/About.vue';
import Contact from '~/components/Contact.vue';

export default {
  components: {
    Header,
    Footer,
    Services,
    About,
    Contact,
  },
};
</script>
