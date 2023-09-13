import { createRouter, createWebHistory } from "vue-router";
import FrontEnd from "../views/FrontEnd.vue";

const routes = [
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
      },
      {
        path: "ranking",
        name: "ranking",
        component: () =>
          import(/* webpackChunkName: "ranking" */ "../views/RankingView.vue"),
      },
      {
        path: "shop",
        name: "shop",
        component: () =>
          import(/* webpackChunkName: "shop" */ "../views/ShopView.vue"),
      },
      {
        path: "activity",
        name: "activity",
        component: () =>
          import(/* webpackChunkName: "activity" */ "../views/ActivityView.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
      },
      {
        path: "forgetpsw",
        name: "forgetpsw",
        component: () =>
          import(/* webpackChunkName: "forgetpsw" */ "../views/ForgetPsw.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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

      // 以下是商城商品詳情共用頁面
      {
        path: "shopProdDetail",
        name: "shopProdDetail",
        component: () =>
          import(
        /* webpackChunkName: "shopProdDetail" */ "../views/ShopProdDetail.vue"
          ),
      },

      //以下是我的音樂庫-我的歌單
      {
        path: "mysonglist",
        name: "mysonglist",
        component: () =>
          import(
        /* webpackChunkName: "mysonglist" */ "../views/MySonglistView.vue"
          ),
      },

      //以下歌單頁面
      {
        path: "singlesonglist",
        name: "singlesonglist",
        component: () =>
          import(
        /* webpackChunkName: "singlesonglist" */ "../views/SingleSonglistView.vue"
          ),
      },

      //以下是單曲頁面
      {
        path: "singlemusic",
        name: "singlemusic",
        component: () =>
          import(/* webpackChunkName: "singlemusic" */ "../views/SingleMusic.vue"),
      },

      //以下是專輯頁面
      {
        path: "singlealbum",
        name: "singlealbum",
        component: () =>
          import(/* webpackChunkName: "singlealbum" */ "../views/SingleAlbum.vue"),
      },

      //以下是個人主頁頁面
      {
        path: "profilepageedit",
        name: "profilepageedit",
        component: () =>
          import(
        /* webpackChunkName: "profilepageedit" */ "../views/ProfilePageEditView.vue"
          ),
      },
      {
        path: "profilepage",
        name: "profilepagee",
        component: () =>
          import(
        /* webpackChunkName: "profilepage" */ "../views/ProfilePageView.vue"
          ),
      }
    ]
  },
  // 以下為後台登入頁面
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Backendviews/Login.vue"),
  },
  {
    path: "/backend",
    name: "backend",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/Backendviews/Backend.vue"),
    children: [
      // 以下為歌曲審核管理頁面
      {
        path: "songreview",
        name: "songreview",
        component: () =>
          import(/* webpackChunkName: "songreview" */ "../views/Backendviews/SongReview.vue"),
      },
      // 以下為歌曲類別管理頁面
      {
        path: "songtype",
        name: "songtype",
        component: () =>
          import(/* webpackChunkName: "songtype" */ "../views/Backendviews/SongType.vue"),
      },
      // 以下為訂單管理頁面
      {
        path: "ordermgmt",
        name: "ordermgmt",
        component: () =>
          import(/* webpackChunkName: "ordermgmt" */ "../views/Backendviews/OrderMgmt.vue"),
      },
      // 以下為商品管理頁面
      {
        path: "prodmgmt",
        name: "prodmgmt",
        component: () =>
          import(/* webpackChunkName: "prodmgmt" */ "../views/Backendviews/ProdMgmt.vue"),
      },
      // 以下為首頁輪播管理頁面
      {
        path: "homecarousel",
        name: "homecarousel",
        component: () =>
          import(/* webpackChunkName: "homecarousel" */ "../views/Backendviews/HomeCarousel.vue"),
      },
      // 以下為機器人管理頁面
      {
        path: "robotmgmt",
        name: "robotmgmt",
        component: () =>
          import(/* webpackChunkName: "robotmgmt" */ "../views/Backendviews/RobotMgmt.vue"),
      },
      // 以下為音樂快訊管理頁面
      {
        path: "museevent",
        name: "museevent",
        component: () =>
          import(/* webpackChunkName: "museevent" */ "../views/Backendviews/MuseEvent.vue"),
      },
      // 以下為排行榜管理頁面
      {
        path: "rankmgmt",
        name: "rankmgmt",
        component: () =>
          import(/* webpackChunkName: "rankmgmt" */ "../views/Backendviews/RankMgmt.vue"),
      },
      // 以下為檢舉留言管理頁面
      {
        path: "msgmgmt",
        name: "msgmgmt",
        component: () =>
          import(/* webpackChunkName: "msgmgmt" */ "../views/Backendviews/MsgMgmt.vue"),
      },
      // 以下為會員管理頁面
      {
        path: "memmgmt",
        name: "memmgmt",
        component: () =>
          import(/* webpackChunkName: "memmgmt" */ "../views/Backendviews/MemMgmt.vue"),
      },
      // 以下為管理員管理頁面
      {
        path: "admmgmt",
        name: "admmgmt",
        component: () =>
          import(/* webpackChunkName: "admmgmt" */ "../views/Backendviews/AdmMgmt.vue"),
      },
    ]
  },
  //若網址列亂輸入,就會跳到404頁面,此區塊請固定放最下方
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
