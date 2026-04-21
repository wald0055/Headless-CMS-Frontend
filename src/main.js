import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'   // 👈 THIS is the missing link

createApp(App).use(router).mount('#app')