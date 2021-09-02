import { createRouter, createWebHashHistory } from 'vue-router'
// import Laptop from '../views/Laptop.vue'
import Tablet from '../views/Tablet.vue'
import Phone from '../views/Phone.vue'

const routes = [
  {
    path: '/',
    name: 'Tablet',
    component: Tablet
  },
  {
    path: '/phone',
    name: 'Phone',
    component: Phone
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
