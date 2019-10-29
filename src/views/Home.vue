<template>
  <v-container>
    
      <h1>Home page</h1>
      <p>Counter is:{{ allItems }} </p>
      <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
      <v-flex xs12 sm4 class="my-4">
        <v-card v-for="item in allItems" :key="item.id" class="mx-auto">
          <v-card-title>{{item.item_name}}</v-card-title>
          <v-img :src="require('@/assets/'+ item.item_img)" alt=""></v-img>
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
