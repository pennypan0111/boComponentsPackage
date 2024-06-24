import 'element-plus/dist/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/secondary.css'
import './css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { BOComponent, BOMethods } from './lib/index.js'

import App from './App.vue'
import router from './router'

library.add(faCircleUser)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(BOMethods)
app.use(BOComponent)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
