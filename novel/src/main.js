import { createApp } from 'vue'
import router from './router';
import '@/assets/css/reset.css';
import pinia from './store'
import './style.css';
import App from './App.vue';

createApp(App).use(router).use(pinia).mount('#app')
