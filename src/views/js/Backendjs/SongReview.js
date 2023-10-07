export default {
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      columns: [
        {
          title: "編號",
          key: "no",
          width: 80,
          align: "center",
        },
        {
          title: "提交時間",
          key: "submitTime",
          width: 160,
          align: "center",
        },
        {
          title: "歌曲名稱",
          key: "songName",
          width: 250,
          align: "center",
        },
        {
          title: " ",
          key: "playMuz",
          width: 30,
          //slot插槽,播放音樂鈕
        },
        {
          title: "時長",
          key: "timeRange",
          width: 100,
          align: "center",
        },
        {
          title: "會員帳號",
          key: "memberAcc",
          width: 200,
          align: "center",
        },
        {
          title: "歌曲狀態",
          key: "songStatus",
          width: 100,
          align: "center",
        },
        {
          title: "操作",
          slot: "editBtn",
          width: 100,
          align: "center",
        },
      ],
      data: [],
      //   data: [
      //     {
      //       no: 1,
      //       submitTime: "2023-09-15 00:23:00",
      //       songName: "天黑黑",
      //       albumName: "天氣晴朗",
      //       timeRange: "03:02:01",
      //       memberAcc: "yuniqaq",
      //       songStatus: "待審核",
      //     },
      //     {
      //       no: 2,
      //       submitTime: "2023-09-15 00:23:00",
      //       songName: "天亮亮",
      //       albumName: "地球漫步",
      //       timeRange: "02:02:58",
      //       memberAcc: "yuni70217",
      //       songStatus: "待審核",
      //     },
      //     {
      //       no: 3,
      //       submitTime: "2023-09-15 00:23:00",
      //       songName: "小黑人",
      //       albumName: "",
      //       timeRange: "01:30:26",
      //       memberAcc: "yuniqqq",
      //       songStatus: "待審核",
      //     },
      //     {
      //       no: 4,
      //       submitTime: "2023-09-15 00:23:00",
      //       songName: "賀新年",
      //       albumName: "",
      //       timeRange: "02:30:11",
      //       memberAcc: "yuniliao7",
      //       songStatus: "待審核",
      //     },
      //     {
      //       no: 5,
      //       submitTime: "2023-09-15 00:23:00",
      //       songName: "只是一首歌",
      //       albumName: "紀念溫蒂",
      //       timeRange: "01:02:01",
      //       memberAcc: "yuni70wwq",
      //       songStatus: "待審核",
      //     },
      //   ],
    };
  },
  mounted() {
    //fetch 個人主頁會員資料
    const fetchReviewSong = () => {
      const apiURL = new URL(
        `http://localhost/muse_music/public/api/getReviewSong.php`
      );

      fetch(apiURL)
        .then((res) => res.json())
        .then((res) => (this.data = res))
        .catch((error) => {
          console.error("發生錯誤:", error);
        });
    };
    fetchReviewSong();
  },
  methods: {
    editBtn() {
      alert("編輯審核");
    },
    songReviewSearchBtn() {
      alert("搜尋歌曲");
    },
  },
};
