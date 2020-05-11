import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Info from '../views/Info.vue'
import Dashboard from '../views/Dashboard.vue'
import ProdottiOutlet from '../views/ProdottiOutlet'
import Prodotti from '../views/Prodotti.vue'
import Azienda from '../views/Azienda.vue'
import Store from '../views/Store.vue'
import Contatti from '../views/Contatti.vue'
import Checkout from '../views/Checkout.vue'
import Outlet from '../views/Outlet'
import firebase from 'firebase';


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/azienda',
      name: 'azienda',
      component: Azienda
    },
    {
      path: '/multimarca',
      name: 'multimarca',
      component: Outlet
    },
    {
      path: '/produzione-interna',
      name: 'produzione-interna',
      component: Store
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: Contatti
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'info',
          name: 'info',
          component: Info
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'prodotti',
          name: 'prodotti',
          component: Prodotti
        },
        {
          path: 'prodotti-multimarca',
          name: 'prodottimultimarca',
          component: ProdottiOutlet
        },
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next ('login');
  else if (!requiresAuth && currentUser) next ('admin');
  else next();
});

export default router;
