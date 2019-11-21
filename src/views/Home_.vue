<template>
  <v-container grid-list-lg>  
      <h1>Home page</h1>
      <!--<p>Counter is:{{ allItems }} </p>-->
      <p>{{ allItems }}</p>
      <v-layout row wrap>
      <v-flex v-for="item in allItems" :key="item.id" d-flex xs6 md3 class="my-4">
        <v-card :to="'/item/' + item.id">
            <img width="100%" :src="require('@/assets/'+ item.item_img)" alt="">
            <v-card-title>{{item.item_name}}</v-card-title>
            <v-card-subtitle><b>￥{{ item.item_price }}</b> +税</v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data: function () {
   // return {
    //  tittle: metas,
      //description: 'このサイトは vue cli 、vue router 、vuexを使用したデモサイトです。',
      //ogp: '/assets/images/ogp.png'
    //}
  },
  components: {
  },
  computed: {
    // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
    ...mapGetters([
      'allItems',
      //'metas'
    ]),
  },
  metaInfo () {
      return {
        //title: allItems,
      }
    }
}


</script>
