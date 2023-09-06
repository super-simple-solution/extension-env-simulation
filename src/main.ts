import App from './App.vue'
import { router } from '@/router/index'
import '@/styles/index.scss'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'highlight.js'
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())

const beforeEnterApp = () => {
  return Promise.all([])
}

beforeEnterApp().finally(() => {
  app.use(router)
  app.mount('#app')
})
