<template>
  <v-container>
    <v-layout>
      <h1>Cart</h1>
      <p>{{ getCartList }}</p>
      <p>{{ doubleCounter }}</p>
    </v-layout>
  </v-container>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapGetters([
        'getCartList',
        'doubleCounter'
    ])
  }
}


</script>

