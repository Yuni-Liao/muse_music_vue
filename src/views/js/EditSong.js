export default {
  data() {
    return {
      privacy: "公開",
      songData: {},
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    },
  },
  mounted() {
    const putSongData = () => {
      const obj = {};
      obj.s_id = this.$route.query.s_id;
      obj.s_img = this.$route.query.s_img;
      obj.s_name = this.$route.query.s_name;
      obj.s_intro = this.$route.query.s_intro;
      obj.show_stat = this.$route.query.show_stat;
      this.songData = obj;
    };
    putSongData();
  },
};
