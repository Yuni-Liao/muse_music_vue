
export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            activeTab: 1,
            name: "",
            introduction: "",
            location: "",
            socialMedia: "",
        };
    },
    methods: {
        changeTab(tabNumber) {
            this.activeTab = tabNumber;
        },
    },

};