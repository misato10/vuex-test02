<template>
  <v-container grid-list-lg>
    
      <h1>Home page</h1>
      <!--<p>Counter is:{{ allItems }} </p>-->
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
/*import HelloWorld from '@/components/HelloWorld.vue'*/

export default {
  name: 'home',
  components: {
    /*HelloWorld*/
  },
  /*computed: {
    counter(){
     return this.$store.getters.allItems;
    }
  }*/
  computed: {
        // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
        ...mapGetters([
          'allItems'
        ])
      }
}


</script>
