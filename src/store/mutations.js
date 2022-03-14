export default {
  increaseItemQuantity(state, item) {
    state.basketItems.find((basketItem) => basketItem.name === item.name).quantity += 1;
    localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
  },
  decreaseItemQuantity(state, item) {
    state.basketItems.find((basketItem) => basketItem.name === item.name).quantity -= 1;
    localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
  },
  addItemToBasket(state, item) {
    const newItem = {
      ...item,
      quantity: 1,
    };

    state.basketItems = [
      ...state.basketItems,
      newItem,
    ];

    localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
  },
  removeItemFromBasket(state, item) {
    const basketItemIndex = state.basketItems
      .findIndex((basketItem) => basketItem.name === item.name);

    state.basketItems.splice(basketItemIndex, 1);

    localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
  },
  setItemQuantity(state, params) {
    const foundItem = state.basketItems
      .find((basketItem) => basketItem.name === params.item.name);

    foundItem.quantity = params.newQuantity;

    localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
  },
};
