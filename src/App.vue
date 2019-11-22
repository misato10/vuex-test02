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
      meta: [
        { charset: 'utf-8' },
        {
          'vmid': 'robots',
          'name': 'robots',
          'content': 'index, follow'
        },
        {
          'vmid': 'description',
          'name': 'description',
          'content': 'vue cli 、vuex 、vue router 、で制作した オンラインショップの DEMO のサイトです。'
        },
        {
          'vmid': 'og:title',
          'property': 'og:title',
          'content': 'SHOP DEMO'
        },
        {
          'vmid': 'og:image',
          'property': 'og:image',
          'content': 'https://misato-vuex-shop.netlify.com/images/ogp.png'
        },
        {
          'vmid': 'og:description',
          'property': 'og:description',
          'content': 'vue cli 、vuex 、vue router 、で制作した オンラインショップの DEMO のサイトです。'
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
        {
        'vmid': 'twitter:card',
        'name': 'twitter:card',
        'content': 'summary_large_image'
        },
        {
          'vmid': 'twitter:title',
          'name': 'twitter:title',
          'content': 'SHOP DEMO'
        },
        {
          'vmid': 'twitter:description',
          'name': 'twitter:description',
          'content': 'vue cli 、vuex 、vue router 、で制作した オンラインショップの DEMO のサイトです。'
        },
        {
          'vmid': 'twitter:image:src',
          'name': 'twitter:image:src',
          'content': 'https://misato-vuex-shop.netlify.com/images/ogp.png'
        }
      ]
    }
};
</script>
