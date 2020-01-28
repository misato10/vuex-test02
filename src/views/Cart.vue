<template>
  <v-container>
    <h1>Cart</h1>
      
      <v-layout row wrap>
      <v-simple-table v-if="cart">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left"></th>
              <th class="text-left">商品名</th>
              <th class="text-left">金額</th>
              <th class="text-left">個数</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in getCartList" :key="item.id">
              <td>{{ index + 1 }} </td>
              <td><div style="padding: 20px;"><v-img :src="require('@/assets/'+ item.item_img)" width="100"></v-img></div></td>
              <td>{{ item.item_name }}</td>
              <td>¥{{ item.item_price }}</td>
              <td><v-select
                v-model="item.num"
                :items="[1,2,3,4,5]"
                solo full-width="40"
              ></v-select>個</td>
              <td><v-btn small @click="removeCartItem(index); checkCart()">削除</v-btn></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <p v-if="!cart">お客様のショッピングカートに商品はありません。</p>
      </v-layout>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  data () {
    return {
      cart: false,
      select : this.index
    }
  },
  computed: {
    ...mapGetters([
        'getCartList',
    ])
  },
  methods: {
    checkCart(){
      if (this.getCartList.length) {
        this.cart = true;
      } else {
        this.cart = false;

      }
       
    },
    ...mapActions([
      'removeCartItem',
    ])
  },
  mounted: function() {
    this.checkCart();
  }
}


</script>

