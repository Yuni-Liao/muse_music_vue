import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faLockOpen, faLock, faCakeCandles, faLocationDot, faMusic, faUserGroup, faComment, faUserLarge, faBell, faCircleUser, faCamera, faImage, faTrash, faFolderOpen, faPlay, faCirclePlay, faShuffle, faArrowRotateRight, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faMagnifyingGlass, faLockOpen, faLock, faCakeCandles, faLocationDot, faMusic, faUserGroup, faComment, faUserLarge, faBell, faCircleUser, faCamera, faImage, faTrash, faFolderOpen, faPlay, faCirclePlay, faShuffle, faArrowRotateRight, faAngleRight, faAngleLeft);

const vueApp = createApp(App)
    .use(store)
    .use(router)
    .component('fontAwesome', FontAwesomeIcon)
    .use(ViewUIPlus)
    .mount('#app')

// createApp(App).use(store).use(router).mount('#app')

