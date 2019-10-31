<template>
  <v-container grid-list-lg>  
      <v-row>
      <v-col>
        <v-img :src="require('@/assets/'+ item[0].item_img)" ></v-img>
      </v-col>
      <v-col>
        <h1 class="display-1">{{ item[0].item_name }}</h1>
        <p class="title"><b class="font-weight-black">¥{{ item[0].item_price }}</b>+税</p>
        <p class="text-justify"> {{ item[0].item_description }}</p>
      </v-col>

      </v-row>
  </v-container>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'itemDetail',
  props: {
    itemId: Number,
  },
  computed: {
    // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
    ...mapGetters([
        'allItems'
    ]),
    item: function() {
      return this.allItems.filter(function(el) {
        return el.id == this.itemId
      }, this)
    }
  }
}


</script>
