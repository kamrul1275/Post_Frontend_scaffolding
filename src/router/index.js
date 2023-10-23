import { createRouter, createWebHistory } from 'vue-router'
import MastarView from '../views/pages/HomeVue.vue'
import CreateCustomer from '../views/pages/customer/CreateCustomer.vue'
import AllCustomer from '../views/pages/customer/AllCustomer.vue'

const routes = [
  {
    path: '/',
    name: 'MastarView',
    component: MastarView
  },
  {
    path: '/create/customer',
    name: 'CreateCustomer',
    component: CreateCustomer
  },

  {
    path: '/all/customer',
    name: 'AllCustomer',
    component: AllCustomer
  },



  // {
  //   path: '/createc/employee',
  //   name: 'CreateEmployee',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/pages/CreateC.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
