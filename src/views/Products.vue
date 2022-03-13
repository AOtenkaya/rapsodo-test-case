<template>
  <v-layout row wrap justify-center>
    <v-flex xs8>
      <v-layout row wrap>
        <v-flex v-for="(product, index) in productList" :key="index" xs12 md6 lg4 pa-4>
          <item-card :item="product"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import ItemCard from '../components/ItemCard.vue';

export default {
  name: 'Products',
  components: {
    ItemCard,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.fetchProductList()
      .then(({ data }) => {
        this.productList = data;
      });
  },
  methods: {
    ...mapActions(['fetchProductList']),
  },
};
</script>
