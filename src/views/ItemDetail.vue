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
        <v-btn color="primary" dark @click.stop="dialog = true">カートに入れる</v-btn>
        <v-dialog v-model="dialog" max-width="620">
          <v-card>
            <v-card-title class="headline">以下の商品をカートに追加しました。</v-card-title>
            <div class="d-flex flex-row mb-6">
              <v-col style="width: 50%;">
                <v-img :src="require('@/assets/'+ item[0].item_img)" ></v-img>
              </v-col>
              <v-col style="width: 50%;">
                <p class="font-weight-black title">{{ item[0].item_name }}</p>
                <p><b class="font-weight-black">¥{{ item[0].item_price }}</b>+税</p>
              </v-col>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary darken-1"
                text
                @click="dialog = false; addCartList(item[0])"
              >買い物を続ける</v-btn>

              <v-btn 
                color="primary darken-1"
                text
                @click="dialog = false; addCartList(item[0]); goCart()">レジに進む</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      </v-row>
  </v-container>
</template>


<script>
import { mapActions , mapGetters } from 'vuex';

export default {
  name: 'itemDetail',
  props: {
    itemId: Number,
  },
  data () {
      return {
        dialog: false,
      }
    },
  computed: {
    // ゲッターを、スプレッド演算子（object spread operator）を使って computed に組み込む
    ...mapGetters([
        'allItems',
        'getCartList',
        'doubleCounter'
    ]),
    item: function() {
      return this.allItems.filter(function(el) {
        return el.id[0] == this.itemId
      }, this)
    }
  },
  methods: {
    ...mapActions([
      'addCartList',
      'increment',
    ]),
    goCart() {
      this.$router.push({ path: '/cart/' });
    }
  },
  metaInfo () {
    return {
      title: this.item[0].item_name + ' | Vue Shop demo',
      meta: [
        { charset: 'utf-8' },
        {
          'vmid': 'description',
          'name': 'description',
          'content': this.item[0].item_description
        },
        {
          'vmid': 'og:title',
          'property': 'og:title',
          'content': this.item[0].item_name + ' | Vue Shop demo',
        },
        {
          'vmid': 'og:description',
          'property': 'og:description',
          'content': this.item[0].item_description
        },
        {
          'vmid': 'og:url',
          'property': 'og:url',
          'content': 'https://misato-vuex-shop.netlify.com/item/'+ this.item[0].id + '/'
        },
        {
          'vmid': 'twitter:title',
          'name': 'twitter:title',
          'content': this.item[0].item_name + ' | Vue Shop demo',
        },
        {
          'vmid': 'twitter:description',
          'name': 'twitter:description',
          'content': this.item[0].item_description
        },
      ]
    }
  }
}


</script>
