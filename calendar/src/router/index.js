import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/day',
    name: 'day',
    component: () => import(
      '../views/Day.vue'
    )
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(
      '../views/Month.vue'
    )
  },
  {
    path: '/year',
    name: 'year',
    component: () => import(
      '../views/Year.vue'
    )
  },
  {
    path: '/',
    redirect: '/day'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
