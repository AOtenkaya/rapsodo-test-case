export default () => ({
  basketItems: JSON.parse(localStorage.getItem('basketItems')) || [],
});
