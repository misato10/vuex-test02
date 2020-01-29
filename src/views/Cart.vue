<template>
  <v-container>
    <h1>Cart</h1>
    <div v-if="cart" class="my-4">
    <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">商品名</th>
              <th class="text-left">個数</th>
              <th class="text-left"></th>
              <th class="text-left">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in getCartList" :key="item.id">
              <td><div style="padding: 20px;"><v-img :src="require('@/assets/'+ item.item_img)" width="100"></v-img></div></td>
              <td style="word-break: keep-all;">{{ item.item_name }}</td>
              <td>
                <v-select
                  v-model="item.num"
                  :items="[1,2,3,4,5]"
                  @change="selected = checkCartItem()"
                  small
                  solo
                ></v-select>
              </td>
              <td><v-btn small @click="removeCartItem(index); checkCart(); checkCartItem()">削除</v-btn></td>
              <td style="word-break: keep-all;"><b class="red--text title">¥{{ item.item_price | localeNum }}</b></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <p class="title my-4 headline">小計（{{ itemNum }}点）:<b class="red--text display-1">¥{{ totalPrice | localeNum }}</b></p>
    </div>
      <p v-if="!cart">お客様のショッピングカートに商品はありません。</p>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  data () {
    return {
      cart: false,
      select : this.index,
      itemNum: 0,
      totalPrice: 0
    }
  },
  computed: {
    ...mapGetters([
        'getCartList',
    ])
  },
  filters: {
    localeNum: function (value) {
      value = Number(value);
      return value.toLocaleString();
    }
  },
  methods: {
    checkCart(){
      if (this.getCartList.length) {
        this.cart = true;
      } else {
        this.cart = false;
      }
    },
    checkCartItem() {
      let array = this.getCartList;
      let num = 0;
      let price = 0;
      Object.keys(array).forEach(function(key) {
      num  = num + array[key]["num"];
      price = price + array[key]["item_price"] * array[key]["num"];
    });

    this.itemNum = num;
    this.totalPrice = price;

    },
    ...mapActions([
      'removeCartItem',
    ])
  },
  mounted: function() {
    this.checkCart();
    this.checkCartItem();
  }
}


</script>

