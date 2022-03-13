import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products,
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/Basket.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
