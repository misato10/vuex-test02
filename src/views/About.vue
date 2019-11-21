<template>
  <v-container>
    <v-layout>
      <h1>About page</h1>
    </v-layout>
  </v-container>
</template>


<script>

export default {
  name: 'About',
  data: function () {
   return {
    title: 'ABOUT',
    description: 'このページはABOUTページです。',
    }
  },
  metaInfo () {
    return {
      title: this.title + ' | SHOP DEMO',
      meta: [
        { charset: 'utf-8' },
        {
          'vmid': 'description',
          'property': 'description',
          'content': this.description
        },
        {
          'vmid': 'og:title',
          'property': 'og:title',
          'content': this.title + ' | SHOP DEMO'
        },
        {
          'vmid': 'og:description',
          'property': 'og:description',
          'content': this.description
        },
        {
          'vmid': 'og:url',
          'property': 'og:url',
          'content': 'https://misato-vuex-shop.netlify.com/about/'
        },
        {
          'vmid': 'twitter:title',
          'name': 'twitter:title',
          'content': this.title + ' | SHOP DEMO'
        },
        {
          'vmid': 'twitter:description',
          'name': 'twitter:description',
          'content': this.description
        },
      ]
    }
  }
};
</script>
