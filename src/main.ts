import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Ensure dark mode by default (can be toggled by component)
document.documentElement.classList.add('dark')

createApp(App).use(router).mount('#app')
