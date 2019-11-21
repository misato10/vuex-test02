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
  metaInfo: {
      title: 'SHOP DEMO',
      titleTemplate: null,
      link: [
        {
          vmid: 'canonical',
          rel: 'canonical',
          href: 'https://misato-vuex-shop.netlify.com/'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        {
          'vmid': 'description',
          'property': 'description',
          'content': '「ITエンジニア」や「ITやりたいけどよくわからない」、「ITなにそれ？」って方へ技術支援などを目的としたチームです。'
        },
        {
          'vmid': 'og:title',
          'property': 'og:title',
          'content': 'SHOP DEMO'
        },
        {
          'vmid': 'og:image',
          'property': 'og:image',
          'content': 'https://misato-vuex-shop.netlify.com/assets/images/ogp.png'
        },
        {
          'vmid': 'og:description',
          'property': 'og:description',
          'content': '「ITエンジニア」や「ITやりたいけどよくわからない」、「ITなにそれ？」って方へ技術支援などを目的としたチームです。'
        },
        {
          'vmid': 'og:type',
          'property': 'og:type',
          'content': 'website'
        },
        {
          'vmid': 'og:url',
          'property': 'og:url',
          'content': 'https://misato-vuex-shop.netlify.com/'
        },
      ]
    }
};
</script>
