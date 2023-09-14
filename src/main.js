import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "view-ui-plus/dist/styles/viewuiplus.css";
import locale from "view-ui-plus/dist/locale/zh-TW";

import { library } from "@fortawesome/fontawesome-svg-core";
// import {  } from '@fortawesome/free-brands-svg-icons' //目前沒用到這種類的icon,有用到再把註解開啟 {} 填入icon駝峰式名稱
import {
  faMagnifyingGlass,
  faLockOpen,
  faLock,
  faCakeCandles,
  faLocationDot,
  faMusic,
  faUserGroup,
  faComment,
  faUserLarge,
  faBell,
  faCircleUser,
  faCamera,
  faImage,
  faTrash,
  faFolderOpen,
  faPlay,
  faCirclePlay,
  faShuffle,
  faArrowRotateRight,
  faAngleRight,
  faAngleLeft,
  faCircle,
  faHeart,
  faShare,
  faPlus,
  faTags,
  faPaperPlane,
  faEllipsisVertical,
  faThumbsUp,
  faAngleDown,
  faEllipsis,
  faCircleExclamation,
  faClock,
  faBackwardStep,
  faPause,
  faStop,
  faStepForward,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faMagnifyingGlass,
  faLockOpen,
  faLock,
  faCakeCandles,
  faLocationDot,
  faMusic,
  faUserGroup,
  faComment,
  faUserLarge,
  faBell,
  faCircleUser,
  faCamera,
  faImage,
  faTrash,
  faFolderOpen,
  faPlay,
  faCirclePlay,
  faShuffle,
  faArrowRotateRight,
  faAngleRight,
  faAngleLeft,
  faCircle,
  faHeart,
  faShare,
  faPlus,
  faTags,
  faPaperPlane,
  faEllipsisVertical,
  faThumbsUp,
  faAngleDown,
  faEllipsis,
<<<<<<< HEAD
  faCircleExclamation,
  faClock,
  faBackwardStep,
  faPause,
  faStop,
  faStepForward,
  faXmark,
=======
>>>>>>> sang
);

const vueApp = createApp(App)
  .use(store)
  .use(router)
  .component("fontAwesome", FontAwesomeIcon)
  .use(ViewUIPlus, {
    locale,
  })
  .mount("#app");


// createApp(App).use(store).use(router).mount('#app')
