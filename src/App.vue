<template>
  <v-app>
    <Header/>
    <v-content>
    <v-slide-y-reverse-transition origin="center center" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </v-slide-y-reverse-transition>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/include/Header.vue'
import Footer from './components/include/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
