import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Client from '../views/Client.vue'
import NewClient from '../components/Clients/NewClient.vue'
import EditClient from '../components/Clients/EditClient.vue'

import Categories from '../views/Categories.vue'
import NewCategorie from '../components/Categories/NewCategorie.vue'
import EditCategorie from '../components/Categories/EditCategorie.vue'


import Mode_payment from '../views/Mode_payment.vue'
import NewModePayment from '../components/ModePayment/NewModePayment.vue'
import EditModePayment from '../components/ModePayment/EditModePayment.vue'

import Products from '../views/Products.vue'
import NewProducts from '../components/Products/NewProducts'
import EditProducts from '../components/Products/EditProducts'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit-client/',
    name: 'EditClient',
    component: EditClient
  },
  {
    path: '/add-client/',
    name: 'NewClient',
    component: NewClient
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  },
  {
    path: '/edit-categorie/',
    name: 'EditCategorie',
    component: EditCategorie
  },
  {
    path: '/add-categorie/',
    name: 'NewCategorie',
    component: NewCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/mode_payment',
    name: 'Mode_payment',
    component: Mode_payment
  },
  {
    path: '/edit-modepayment/',
    name: 'EditModePayment',
    component: EditModePayment
  },
  {
    path: '/add-modepayment/',
    name: 'NewModePayment',
    component: NewModePayment
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/edit-products/',
    name: 'EditProducts',
    component: EditProducts
  },
  {
    path: '/add-products/',
    name: 'NewProducts',
    component: NewProducts
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
