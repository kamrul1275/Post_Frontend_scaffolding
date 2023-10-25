import { createRouter, createWebHistory } from 'vue-router'
// import MastarView from '../views/MastarView.vue'
import HomeVue from '../views/pages/HomeVue.vue'
import CreateCustomer from '../views/pages/customer/CreateCustomer.vue'
import EditCustomer from '../views/pages/customer/EditCustomer.vue'
import AllCustomer from '../views/pages/customer/AllCustomer.vue'

import CreateEmploye from '../views/pages/employe/CreateEmploye.vue'
import AllEmploye from '../views/pages/employe/AllEmploye.vue'

import CreateCategory from '../views/pages/category/CreateCategory.vue'
import AllCategory from '../views/pages/category/AllCategory.vue'

import CreateProduct from '../views/pages/product/CreateProduct.vue'
import AllProduct from '../views/pages/product/AllProduct.vue'  


import CreateOrder from '../views/pages/order/CreateOrder.vue' 
import AllOrder from '../views/pages/order/AllOrder.vue'

import CreatePayment from '../views/pages/payment/CreatePayment.vue'    
import AllPayment from '../views/pages/payment/AllPayment.vue'



const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
  {
    path: '/create/customer',
    name: 'CreateCustomer',
    component: CreateCustomer
  },

  {
    path: '/edit/customer',
    name: 'EditCustomer',
    component: EditCustomer
  },

  {
    path: '/all/customer',
    name: 'AllCustomer',
    component: AllCustomer
  },



//employe part.....
  {
    path: '/create/employe',
    name: 'CreateEmploye',
    component: CreateEmploye
  },

  {
    path: '/all/employe',
    name: 'AllEmploye',
    component: AllEmploye
  },


  //category part.....
  {
    path: '/create/category',
    name: 'CreateCategory',
    component: CreateCategory
  },

  {
    path: '/all/category',
    name: 'AllCategory',
    component: AllCategory
  },



  
  //product part.....
  {
    path: '/create/product',
    name: 'CreateProduct',
    component: CreateProduct
  },

  {
    path: '/all/product',
    name: 'AllProduct',
    component: AllProduct
  },


    //Order part.....
    {
      path: '/create/order',
      name: 'CreateOrder',
      component: CreateOrder
    },
  
    {
      path: '/all/order',
      name: 'AllOrder',
      component: AllOrder
    },
  

    //Order part.....
    {
      path: '/create/payment',
      name: 'CreatePayment',
      component: CreatePayment
    },
  
    {
      path: '/all/payment',
      name: 'AllPayment',
      component: AllPayment
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
