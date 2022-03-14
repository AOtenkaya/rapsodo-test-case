import { mapActions, mapState } from 'vuex';
import snackbarMixin from './snackbar';

export default {
  mixins: [snackbarMixin],
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
        this.showSuccessMessage('Item\'s quantity increased successfully');
      } else {
        this.addToBasket(item);
      }
    },
    decreaseQuantity(item) {
      if (this.calculateItemQuantity(item) > 1) {
        this.decreaseItemQuantity(item);
        this.showSuccessMessage('Item\'s quantity decreased successfully');
      } else {
        this.removeFromBasket(item);
      }
    },
    removeFromBasket(item) {
      this.removeItemFromBasket(item);
      this.showSuccessMessage('Item removed from basket successfully');
    },
    addToBasket(item) {
      this.addItemToBasket(item);
      this.showSuccessMessage('Item added to basket successfully');
    },
    calculateItemQuantity(item) {
      const selectedItem = this.basketItems.find((basketItem) => basketItem.name === item.name);

      return selectedItem ? selectedItem.quantity : 0;
    },
  },
};
