import { createRouter, createWebHistory } from 'vue-router'
// import MastarView from '../views/MastarView.vue'


//import LoginVue from '../views/pages/LoginVue.vue'




import HomeVue from '../views/pages/HomeVue.vue'
import CreateCustomer from '../views/pages/customer/CreateCustomer.vue'
import EditCustomer from '../views/pages/customer/EditCustomer.vue'
import AllCustomer from '../views/pages/customer/AllCustomer.vue'

import CreateEmploye from '../views/pages/employe/CreateEmploye.vue'
import EditEmploye from '../views/pages/employe/EditEmploye.vue'
import AllEmploye from '../views/pages/employe/AllEmploye.vue'


import CreateCategory from '../views/pages/category/CreateCategory.vue' 

import EditCategory from '../views/pages/category/EditCategory.vue'
import AllCategory from '../views/pages/category/AllCategory.vue'   



import CreateProduct from '../views/pages/product/CreateProduct.vue'
import EditProduct from '../views/pages/product/EditProduct.vue'
import AllProduct from '../views/pages/product/AllProduct.vue'  


import CreateOrder from '../views/pages/order/CreateOrder.vue' 
import EditOrder from '../views/pages/order/EditOrder.vue' 
import AllOrder from '../views/pages/order/AllOrder.vue'

import CreatePayment from '../views/pages/payment/CreatePayment.vue'   
import EditPayment from '../views/pages/payment/EditPayment.vue'   
import AllPayment from '../views/pages/payment/AllPayment.vue' 



const routes = [
  // {
  //   path: '/',
  //   name: 'LoginVue',
  //   component: LoginVue
  // },




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
    path: '/edit/customer/:id',
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
    path: '/edit/employe/:id',
    name: 'EditEmploye',
    component: EditEmploye
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
    path: '/edit/category/:id',
    name: 'EditCategory',
    component: EditCategory
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
    path: '/edit/product/:id',
    name: 'EditProduct',
    component: EditProduct
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
      path: '/edit/order/:id',
      name: 'EditOrder',
      component: EditOrder
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
      path: '/edit/payment/:id',
      name: 'EditPayment',
      component: EditPayment
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
