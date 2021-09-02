import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { dragscrollNext } from 'vue-dragscroll'
import './assets/font/font.css'

createApp(App)
  .directive('dragscroll', dragscrollNext)
  .use(router)
  .mount('#app')
