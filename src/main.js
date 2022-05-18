import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import Alpine from 'alpinejs'
 

window.Alpine = Alpine
Alpine.start()

createApp(App).use(router).use(VueSplide).use(Alpine).mount('#app')
