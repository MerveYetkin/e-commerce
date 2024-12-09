import { createApp } from 'vue'
import '@/assets/css/main.css'
import App from '@/app/App.vue'
import router from '@/app/router/index.js'
import '@mdi/font/css/materialdesignicons.css'


import 'swiper/css/pagination';




createApp(App).use(router).mount('#app')
