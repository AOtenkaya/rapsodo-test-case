<template>
  <v-card>
    <v-card-text class="text-center">
      <v-layout :class="isBasketItem ? 'row' : 'column'">
        <v-flex xs4>
          <v-img
            alt="item-photo"
            src="../assets/item-image.png"
            max-width="240"
            max-height="240"
            class="centerized"
            lazy
          />
        </v-flex>

        <v-divider/>

        <v-flex xs4 :class="isBasketItem ? 'centerized' : ''" text-start pa-2>
          <h2 class="py-1 px-6 bold">{{ item.name }}</h2>
          <h4 class="py-1 px-6">Size: {{ item.size }}</h4>
          <h4 class="py-1 px-6">Color: {{ item.color }}</h4>
          <h3 class="py-1 px-6">${{ item.amount }}</h3>
        </v-flex>

        <v-flex v-if="calculateItemQuantity(item)" xs4>
          <v-layout
            :class="isBasketItem ? 'column' : 'row'"
            justify-center align-center fill-height
          >
            <v-flex shrink>
              <v-btn text block left color="black" @click="decreaseQuantity(item)">
                  <v-icon>
                    mdi-minus
                  </v-icon>
                </v-btn>
            </v-flex>

            <v-flex md4 xs6 pa-2 :class="isBasketItem ? 'basket-quantity' : ''">
              <v-text-field
                :value="calculateItemQuantity(item)"
                name="quantity"
                type="number"
                color="black"
                outlined flat dense
                hide-details
                hide-spin-buttons
                @input="setQuantity"
              />
            </v-flex>

            <v-flex shrink>
              <v-btn text block right color="black" @click="increaseQuantity(item)">
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex v-else xs4 pa-2>
          <v-btn block @click="addToBasket(item)" class="no-text-transform">Add To Basket</v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import manageBasketItemsMixin from '../mixins/manageBasketItems';

export default {
  name: 'ItemCard',
  mixins: [manageBasketItemsMixin],
  props: {
    item: {
      type: Object,
      required: true,
    },
    isBasketItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.centerized {
  margin: auto;
}

.basket-quantity {
  width: 150px;
}
</style>
