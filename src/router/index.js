import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeView,
  },
  {
    path: "/find",
    name: "find",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "find" */ "../views/FindView.vue"),
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () =>
      import(/* webpackChunkName: "ranking" */ "../views/RankingView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "../views/ShopView.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () =>
      import(/* webpackChunkName: "activity" */ "../views/ActivityView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/forgetpsw",
    name: "forgetpsw",
    component: () =>
      import(/* webpackChunkName: "forgetpsw" */ "../views/ForgetPsw.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    //faq的component還沒改還沒導,試試看能不能用茅點
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/AboutView.vue"),
  },
  {
    //faq的component還沒改還沒導,試試看能不能用茅點
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/AboutView.vue"),
  },

  // {
  //   //隱私權政策還沒導,之後再確認看是不是直接寫彈窗就好
  //   path: '/policy',
  //   name: 'policy',
  //   component: () => import(/* webpackChunkName: "這裡要取名" */ '../views/PolicyView.vue')
  //   //component還沒改
  // },

  {
    path: "/backend",
    name: "backend",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/Backend.vue"),
  },

  // 以下是商城商品詳情共用頁面
  {
    path: "/shopProdDetail",
    name: "shopProdDetail",
    component: () =>
      import(
        /* webpackChunkName: "shopProdDetail" */ "../views/ShopProdDetail.vue"
      ),
  },

  //以下是我的音樂庫-我的歌單
  {
    path: "/mysonglist",
    name: "mysonglist",
    component: () =>
      import(
        /* webpackChunkName: "mysonglist" */ "../views/MySonglistView.vue"
      ),
  },

  //以下歌單頁面
  {
    path: "/singlesonglist",
    name: "singlesonglist",
    component: () =>
      import(
        /* webpackChunkName: "singlesonglist" */ "../views/SingleSonglistView.vue"
      ),
  },

  //以下是單曲頁面
  {
    path: "/singlemusic",
    name: "singlemusic",
    component: () =>
      import(/* webpackChunkName: "singlemusic" */ "../views/SingleMusic.vue"),
  },
  //以下是個人主頁頁面
  {
    path: "/profilepage",
    name: "profilepage",
    component: () =>
      import(
        /* webpackChunkName: "singlemusic" */ "../views/ProfilePageView.vue"
      ),
  },
  //若網址列亂輸入,就會跳到404頁面,此區塊請固定放最下方
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
