export default {
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      //
      editBox: false,
      columns: [
        {
          title: "編號",
          key: "no",
          width: 80,
          align: "center",
        },
        {
          title: "歌曲編號",
          key: "s_id",
          width: 100,
          align: "center",
        },
        {
          title: "提交時間",
          key: "s_length",
          width: 160,
          align: "center",
        },
        {
          title: "歌曲名稱",
          key: "s_name",
          width: 250,
          align: "center",
        },
        {
          title: "歌曲長度",
          key: "s_length",
          width: 100,
          align: "center",
        },
        {
          title: "會員帳號",
          key: "mem_acc",
          width: 250,
          align: "center",
        },
        {
          title: "歌曲狀態",
          key: "s_stat",
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
      editItem: {
        no: "",
        s_id: "",
        s_name: "",
        s_src: "",
      },
      data: [],
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
    editBtn(e) {
      this.editBox = true;
      this.editItem.no = e.no;
      this.editItem.s_id = e.s_id;
      this.editItem.s_name = e.s_name;
      this.editItem.s_src = e.s_src;
    },
    songReviewSearchBtn() {
      alert("搜尋歌曲");
    },
    closeBtn() {
      this.editBox = false;
    },
  },
};
