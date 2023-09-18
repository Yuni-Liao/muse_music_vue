import { createRouter, createWebHistory } from "vue-router";
import FrontEnd from "../views/FrontEnd.vue";

const routes = [
  //g2
  {
    path: "/",
    name: "frontend",
    component: FrontEnd,
    children: [
      {
        path: "",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "index" */ "../views/HomeView.vue"),
      },
      {
        path: "find",
        name: "find",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "find" */ "../views/FindView.vue"),
        meta: {
          title: "探索",
        },
      },
      {
        path: "ranking",
        name: "ranking",
        component: () =>
          import(/* webpackChunkName: "ranking" */ "../views/RankingView.vue"),
        meta: {
          title: "排行榜",
        },
      },
      {
        path: "shop",
        name: "shop",
        component: () =>
          import(/* webpackChunkName: "shop" */ "../views/ShopView.vue"),
        meta: {
          title: "周邊販售",
        },
      },
      // 以下是商城商品詳情共用頁面
      {
        //path: "shopproddetail", // 使用動態路由參數:id
        path: "shopproddetail/:id", // 使用動態路由參數:id
        name: "shopproddetail",
        component: () =>
          import(
            /* webpackChunkName: "shopProdDetail" */ "../views/ShopProdDetailView.vue"
          ),
        meta: {
          title: "商品名稱",
        },
      },
      {
        path: "shoppingsteps",
        name: "shoppingsteps",
        component: () =>
          import(
            /* webpackChunkName: "profilepage" */ "../views/ShoppingStepsView.vue"
          ),
        meta: {
          title: "結帳",
        },
      },
      {
        path: "activity",
        name: "activity",
        component: () =>
          import(
            /* webpackChunkName: "activity" */ "../views/ActivityView.vue"
          ),
        meta: {
          title: "音樂快訊",
        },
      },
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
        meta: {
          title: "登入",
        },
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(
            /* webpackChunkName: "register" */ "../views/RegisterView.vue"
          ),
        meta: {
          title: "會員註冊",
        },
      },
      {
        path: "forgetpsw",
        name: "forgetpsw",
        component: () =>
          import(/* webpackChunkName: "forgetpsw" */ "../views/ForgetPsw.vue"),
        meta: {
          title: "忘記密碼",
        },
      },

      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        meta: {
          title: "關於謬思",
        },
      },
      // {
      //   //faq的component還沒改還沒導,試試看能不能用茅點
      //   path: "faq",
      //   name: "faq",
      //   component: () =>
      //     import(/* webpackChunkName: "faq" */ "../views/FaqView.vue"),
      // },
      // {
      //   //隱私權政策還沒導,之後再確認看是不是直接寫彈窗就好
      //   path: 'policy',
      //   name: 'policy',
      //   component: () => import(/* webpackChunkName: "這裡要取名" */ '../views/PolicyView.vue')
      //   //component還沒改
      // },

      //以下是我的音樂庫-我的歌單
      {
        title: "我的歌單",
        path: "mysonglist",
        name: "mysonglist",
        component: () =>
          import(
            /* webpackChunkName: "mysonglist" */ "../views/MySonglistView.vue"
          ),
        meta: {
          title: "我的歌單",
        },
      },

      //以下歌單頁面
      {
        path: "singlesonglist",
        name: "singlesonglist",
        component: () =>
          import(
            /* webpackChunkName: "singlesonglist" */ "../views/SingleSonglistView.vue"
          ),
        meta: {
          title: "歌單",
          //把它變成歌單名稱
        },
      },

      //以下是單曲頁面
      {
        path: "singlemusic",
        name: "singlemusic",
        component: () =>
          import(
            /* webpackChunkName: "singlemusic" */ "../views/SingleMusic.vue"
          ),
        meta: {
          title: "單曲",
          //把它變成專輯名稱
        },
      },

      //以下是專輯頁面
      {
        path: "singlealbum",
        name: "singlealbum",
        component: () =>
          import(
            /* webpackChunkName: "singlealbum" */ "../views/SingleAlbum.vue"
          ),
        meta: {
          title: "專輯",
          //把它變成專輯名稱
        },
      },

      //以下是個人主頁頁面
      {
        path: "profilepageedit",
        name: "profilepageedit",
        component: () =>
          import(
            /* webpackChunkName: "profilepageedit" */ "../views/ProfilePageEditView.vue"
          ),
        meta: {
          title: "個人主頁管理",
        },
      },
      {
        path: "profilepage",
        name: "profilepagee",
        component: () =>
          import(
            /* webpackChunkName: "profilepage" */ "../views/ProfilePageView.vue"
          ),
        meta: {
          title: "個人主頁",
          //把它變成會員名稱
        },
      },
      //以下是探索音樂內頁頁面
      {
        path: "findmusic",
        name: "findmusic",
        component: () =>
          import(
            /* webpackChunkName: "findmusic" */ "../views/FindMusicView.vue"
          ),
        meta: {
          title: "探索",
        },
      },
      //以下是前台-帳號設定頁面
      {
        path: "accsetting",
        name: "accsetting",
        component: () =>
          import(
            /* webpackChunkName: "accsetting" */ "../views/AccSetting.vue"
          ),
        meta: {
          title: "帳號設定",
        },
      },
    ],
  },
  // 以下為後台登入頁面/g2/backendLogin
  {
    path: "/backendLogin",
    name: "backendLogin",
    component: () =>
      import(
        /* webpackChunkName: "backendLogin" */ "../views/Backendviews/Login.vue"
      ),
    meta: {
      title: "後台登入歌曲",
    },
  },
  ///g2/backend
  {
    path: "/backend",
    name: "backend",
    component: () =>
      import(
        /* webpackChunkName: "backend" */ "../views/Backendviews/Backend.vue"
      ),
    children: [
      // 以下為歌曲審核管理頁面
      {
        path: "songreview",
        name: "songreview",
        component: () =>
          import(
            /* webpackChunkName: "songreview" */ "../views/Backendviews/SongReview.vue"
          ),
        meta: {
          title: "歌曲審核管理",
        },
      },
      // 以下為歌曲類別管理頁面
      {
        path: "songtype",
        name: "songtype",
        component: () =>
          import(
            /* webpackChunkName: "songtype" */ "../views/Backendviews/SongType.vue"
          ),
        meta: {
          title: "歌曲類別管理",
        },
      },
      // 以下為訂單管理頁面
      {
        path: "ordermgmt",
        name: "ordermgmt",
        component: () =>
          import(
            /* webpackChunkName: "ordermgmt" */ "../views/Backendviews/OrderMgmt.vue"
          ),
        meta: {
          title: "訂單管理",
        },
      },
      // 以下為商品管理頁面
      {
        path: "prodmgmt",
        name: "prodmgmt",
        component: () =>
          import(
            /* webpackChunkName: "prodmgmt" */ "../views/Backendviews/ProdMgmt.vue"
          ),
        meta: {
          title: "商品管理",
        },
      },
      // 以下為首頁輪播管理頁面
      {
        path: "homecarousel",
        name: "homecarousel",
        component: () =>
          import(
            /* webpackChunkName: "homecarousel" */ "../views/Backendviews/HomeCarousel.vue"
          ),
        meta: {
          title: "首頁輪播管理",
        },
      },
      // 以下為機器人管理頁面
      {
        path: "robotmgmt",
        name: "robotmgmt",
        component: () =>
          import(
            /* webpackChunkName: "robotmgmt" */ "../views/Backendviews/RobotMgmt.vue"
          ),
        meta: {
          title: "機器人管理歌曲",
        },
      },
      // 以下為音樂快訊管理頁面
      {
        path: "museevent",
        name: "museevent",
        component: () =>
          import(
            /* webpackChunkName: "museevent" */ "../views/Backendviews/MuseEvent.vue"
          ),
        meta: {
          title: "音樂快訊管理",
        },
      },
      // 以下為排行榜管理頁面
      {
        path: "rankmgmt",
        name: "rankmgmt",
        component: () =>
          import(
            /* webpackChunkName: "rankmgmt" */ "../views/Backendviews/RankMgmt.vue"
          ),
        meta: {
          title: "排行榜管理",
        },
      },
      // 以下為檢舉留言管理頁面
      {
        path: "msgmgmt",
        name: "msgmgmt",
        component: () =>
          import(
            /* webpackChunkName: "msgmgmt" */ "../views/Backendviews/MsgMgmt.vue"
          ),
        meta: {
          title: "歌曲檢舉留言管理",
        },
      },
      // 以下為會員管理頁面
      {
        path: "memmgmt",
        name: "memmgmt",
        component: () =>
          import(
            /* webpackChunkName: "memmgmt" */ "../views/Backendviews/MemMgmt.vue"
          ),
        meta: {
          title: "會員管理",
        },
      },
      // 以下為管理員管理頁面
      {
        path: "admmgmt",
        name: "admmgmt",
        component: () =>
          import(
            /* webpackChunkName: "admmgmt" */ "../views/Backendviews/AdmMgmt.vue"
          ),
        meta: {
          title: "管理員管理",
        },
      },
    ],
  },
  //若網址列亂輸入,就會跳到404頁面,此區塊請固定放最下方
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFoundView.vue"),
    meta: {
      title: "404 NotFound",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} ｜ MUSE MUSIC`;
  } else {
    document.title = `MUSE MUSIC`;
  }
});

export default router;
