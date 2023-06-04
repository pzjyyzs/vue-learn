import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/day',
    name: 'DayPage',
    component: () => import(
      '../views/Day.vue'
    )
  },
  {
    path: '/month',
    name: 'MonthPage',
    component: () => import(
      '../views/Month.vue'
    )
  },
  {
    path: '/year',
    name: 'YearPage',
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
