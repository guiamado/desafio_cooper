import Vue from 'vue';
import Router from 'vue-router';
import Pedidos from './views/Pedidos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos,
    },
    {
      path: '/produtos',
      name: 'produto',
      component: () => import(/* webpackChunkName: "about" */ './views/Produtos.vue'),
    },
  ],
});
