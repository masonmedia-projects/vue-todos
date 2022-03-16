import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/TodoList1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'One',
    component: One
  },
  {
    path: '/two',
    name: 'Two',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Two" */ '../views/TodoList2.vue')
  },
  {
    path: '/three',
    name: 'Three',
    component: () => import(/* webpackChunkName: "Three" */ '../views/TodoList3.vue')
  },
  {
    path: '/four',
    name: 'Four',
    component: () => import(/* webpackChunkName: "Three" */ '../views/TodoList4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
