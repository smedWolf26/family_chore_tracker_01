import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style.css'
import App from '@/App.vue'

const app = createApp(App)
app.mount('#app')
app.use(createPinia())
