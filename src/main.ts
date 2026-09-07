import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Ensure dark mode by default (can be toggled by component)
document.documentElement.classList.add('dark')

createApp(App).use(vuetify).use(router).mount('#app')
