// Import BOElLoading, BOElMessageBox, and BOComponent dependencies
import BOLoading from './BOLoading'
import BOMessageBox from './BOMessageBox'
import BOTopHeader from '../components/BOTopHeader/BOTopHeader.vue'
import BOTopMenu from '../components/BOTopMenu/BOTopMenu.vue'
import BOMenuItem from '../components/BOMenuItem/BOMenuItem.vue'
import BOMenuGroup from '../components/BOMenuGroup/BOMenuGroup.vue'
import BOLayoutHeader from '../components/BOLayoutHeader/BOLayoutHeader.vue'
import BOLayoutMenu from '../components/BOLayoutMenu/BOLayoutMenu.vue'
import BOCountdown from '../components/BOCountdown/BOCountdown.vue'

// Import Bootstrap CSS and other CSS dependencies
import 'bootstrap/dist/css/bootstrap.css'
import '../css/main.css'

// Define BOMethods module to install BOLoading and BOMessageBox
const BOMethods = {
  install: (app) => {
    app.use(BOLoading)
    app.use(BOMessageBox)
  }
}

// Define BOComponent module to register BOComponent component globally
const BOComponent = {
  install: (app) => {
    app.component('BOTopHeader', BOTopHeader)
    app.component('BOTopMenu', BOTopMenu)
    app.component('BOMenuItem', BOMenuItem)
    app.component('BOMenuGroup', BOMenuGroup)
    app.component('BOLayoutHeader', BOLayoutHeader)
    app.component('BOLayoutMenu', BOLayoutMenu)
    app.component('BOCountdown', BOCountdown)
  }
}

// Export BOMethods and BOComponent modules
export { BOMethods, BOComponent }
