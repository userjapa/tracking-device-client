import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Tracking = () => import(/* webpackChunkName: "tracking" */ '../views/Tracking.vue')
const About = () => import(/* webpackChunkName: "tracking" */ '../views/About.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tracking',
    component: Tracking
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
