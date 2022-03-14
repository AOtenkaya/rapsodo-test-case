import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['basketItems']),
  },
  methods: {
    ...mapActions([
      'increaseItemQuantity',
      'decreaseItemQuantity',
      'addItemToBasket',
      'removeItemFromBasket',
    ]),
    increaseQuantity(item) {
      if (this.calculateItemQuantity(item)) {
        this.increaseItemQuantity(item);
      } else {
        this.addToBasket(item);
      }
    },
    decreaseQuantity(item) {
      if (this.calculateItemQuantity(item) > 1) {
        this.decreaseItemQuantity(item);
      } else {
        this.removeItemFromBasket(item);
      }
    },
    removeFromBasket(item) {
      this.removeItemFromBasket(item);
    },
    addToBasket(item) {
      this.addItemToBasket(item);
    },
    calculateItemQuantity(item) {
      const selectedItem = this.basketItems.find((basketItem) => basketItem.name === item.name);

      return selectedItem ? selectedItem.quantity : 0;
    },
  },
};
