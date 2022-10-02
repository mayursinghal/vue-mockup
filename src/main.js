import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'
import store from './store/index.js'

createApp(App).use(store).use(Router).mount('#app')
