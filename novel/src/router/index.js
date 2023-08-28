import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/index',
        name: 'index',
        component: () => import(
            '../views/main/main.vue'
        )
    },
    {
        path: '/',
        redirect: '/index'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router