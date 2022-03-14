<template>
  <v-layout row wrap justify-center pa-4>
    <v-flex md8 xs12 pa-2>
      <v-card class="align-center">
        <v-card-title class="pr-6 gray-bg">
          <h3 class="black--text">Products</h3>

          <v-spacer/>

          <router-link to="/" class="no-text-decoration">
            <v-icon class="mr-2 mb-1">mdi-keyboard-backspace</v-icon>
            <span>Continue Shopping</span>
          </router-link>
        </v-card-title>

        <v-card-text>
          <v-layout v-if="basketItems.length" row wrap>
            <v-flex xs12 v-for="(basketItem, index) in basketItems" :key="index" pa-2>
              <item-card :item="basketItem" is-basket-item/>
            </v-flex>
          </v-layout>

          <v-layout v-else row wrap py-4 align-center justify-center>
            <v-flex grow>
              <h4>
                There is no item on basket yet you can go to our
                store and add products to your basket
              </h4>
            </v-flex>

            <v-flex shrink class="mx-4 text-center">
              <router-link to="/" class="no-text-decoration">
                <v-btn
                  outlined
                  large fab
                  color="black"
                >
                  <v-icon>
                    mdi-store
                  </v-icon>
                </v-btn>
              </router-link>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex md4 xs12 pa-2>
      <basket-summary/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import ItemCard from '../components/ItemCard.vue';
import BasketSummary from '../components/BasketSummary.vue';

export default {
  name: 'Basket',
  components: {
    ItemCard,
    BasketSummary,
  },
  computed: {
    ...mapState(['basketItems']),
  },
};
</script>
