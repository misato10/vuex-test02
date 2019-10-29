<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
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
