import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/TodoList1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Version 1',
    component: One
  },
  // {
  //   path: '/two',
  //   name: 'Version 2',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Two" */ '../views/TodoList2.vue')
  // },
  {
    path: '/two',
    name: 'Version 2',
    component: () => import(/* webpackChunkName: "Three" */ '../views/TodoList3.vue')
  },
  {
    path: '/three',
    name: 'Version 3',
    component: () => import(/* webpackChunkName: "Four" */ '../views/TodoList4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
