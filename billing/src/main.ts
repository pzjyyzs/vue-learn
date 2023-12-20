import { createApp } from 'vue'
import { App } from './App'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'
import { createRouter } from 'vue-router'
import { routes } from './config/routes'
import { history } from './shared/history'

const router = createRouter({
    history: history,
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')