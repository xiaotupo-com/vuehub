import 'bulma/css/bulma.min.css'

import './assets/main.css'

import './styles/fonts/iconfont.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers'

createApp(App).use(router).mount('#app')
