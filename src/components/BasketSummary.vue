<template>
  <v-card class="text-center">
    <v-card-title class="gray-bg">
      <v-layout row wrap>
        <v-flex xs12 mx-2 px-4>
          <h3>Basket Summary</h3>
        </v-flex>
      </v-layout>
    </v-card-title>

    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 py-9>
          <h2>SubTotal: ${{ basketSubTotal }}</h2>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BasketSummary',
  computed: {
    ...mapState(['basketItems']),
    basketSubTotal() {
      const asd = this.basketItems.reduce((sum, basketItem) => {
        const subTotal = sum + basketItem.amount * basketItem.quantity;

        return subTotal;
      }, 0);

      return asd;
    },
  },
};
</script>
