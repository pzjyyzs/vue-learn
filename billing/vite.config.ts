import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vue-learn/billing/dist/', 部署到GitHub才使用
  plugins: [vue()]
})
