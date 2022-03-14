import axios from 'axios';

export default {
  fetchProductList() {
    return axios.get('https://test-case-eeca77cfvq-ue.a.run.app/');
  },
  increaseItemQuantity({ commit }, item) {
    commit('increaseItemQuantity', item);
  },
  decreaseItemQuantity({ commit }, item) {
    commit('decreaseItemQuantity', item);
  },
  addItemToBasket({ commit }, item) {
    commit('addItemToBasket', item);
  },
  removeItemFromBasket({ commit }, item) {
    commit('removeItemFromBasket', item);
  },
};
