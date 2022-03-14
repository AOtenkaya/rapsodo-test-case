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
      'setItemQuantity',
    ]),
    increaseQuantity(item) {
      if (this.calculateItemQuantity(item) > 0 && this.calculateItemQuantity(item) < item.stock) {
        this.increaseItemQuantity(item);
        this.showSuccessMessage('Item\'s quantity increased successfully');
      } else if (this.calculateItemQuantity(item) >= item.stock) {
        this.showErrorMessage('You reached item\'s stock. Can\'t increased quantity');
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
      console.log('aaa');
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
    setQuantity(value) {
      if (value === '0') {
        this.removeFromBasket(this.item);
      } else if (value <= this.item.stock) {
        const params = {
          item: this.item,
          newQuantity: Number(value),
        };

        this.setItemQuantity(params);
      } else {
        const params = {
          item: this.item,
          newQuantity: Number(this.item.stock),
        };
        this.setItemQuantity(params);
        this.showErrorMessage('Your requested quentity was bigger than stock. Quantity setted to stock');
      }
    },
  },
};
