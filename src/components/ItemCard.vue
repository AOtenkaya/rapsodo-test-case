<template>
  <v-card>
    <v-card-text class="text-center">
      <v-layout :class="isBasketItem ? 'row' : 'column'">
        <v-flex xs4>
          <v-img
            alt="item-photo"
            src="https://rapsodocertified.b-cdn.net/wp-content/uploads/2020/01/ipad-and-hitting-monitor-1024x768.png"
            width="300"
            class="item-image"
          />
        </v-flex>

        <v-divider/>

        <v-flex xs4 class="text-start pa-2">
          <h2 class="py-1 px-6 bold">{{ item.name }}</h2>
          <h4 class="py-1 px-6">Size: {{ item.size }}</h4>
          <h4 class="py-1 px-6">Color: {{ item.color }}</h4>
          <h3 class="py-1 px-6 orange--text">${{ item.amount }}</h3>
        </v-flex>

        <v-flex xs4>
          <v-layout :class="isBasketItem ? 'column' : 'row'" justify-center align-center>
            <v-flex shrink>
              <v-btn text block left color="black">
                  <v-icon>
                    mdi-minus
                  </v-icon>
                </v-btn>
            </v-flex>

            <v-flex md4 xs6 pa-2>
              <v-text-field
                name="quantity"
                type="number"
                color="black"
                outlined flat dense
                hide-details
                hide-spin-buttons
              />
            </v-flex>

            <v-flex shrink>
              <v-btn text block right color="black" class="text-center">
                  <v-icon>
                    mdi-plus
                  </v-icon>
                </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ItemCard',
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
  components: {
  },
};
</script>

<style lang="scss" scoped>
.item-image {
  margin: auto;
}
</style>
