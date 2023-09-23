
import PlayBtnBig from "@/components/PlayBtnBig.vue";
import player from '@/components/player.vue';
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";

export default {
    components: {
        PlayBtnBig,
        player,
        AddFavBtn,
        AddSlBtn,
        ShareBtn,
        ReportBtn,
        LikeMesBtn
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            //用來存儲查找到的風格
            foundObject: {},
            //內頁
            styles: [
                {
                    id: 0,
                    styleName:"日語流行",
                    count: 563,
                },
                {
                    id: 1,
                    styleName:"韓語流行",
                    count: 742,
                },
                {
                    id: 2,
                    styleName:"華語流行",
                    count: 1145,
                },
                {
                    id: 3,
                    styleName:"西洋流行",
                    count: 2637,
                },
                {
                    id: 4,
                    styleName:"其他語言",
                    count: 452,
                },

            ],
            songs: [
                {
                    id: 1,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                    singer: "Lisa",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 2,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                    singer: "Rose",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 3,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                    singer: "Apple Apple",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 4,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                    singer: "Cat Dog",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 5,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                    singer: "Ruby",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 6,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                    singer: "Lisa",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 7,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                    singer: "Rose",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 8,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                    singer: "Apple Apple",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 9,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                    singer: "Cat Dog",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 10,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                    singer: "Ruby",
                    time: "03:00",
                    link: "/home/profilepage",
                    showMoreBtn: false,
                }
            ]
        }
    },
    methods: {
        toggleMoreBtn(albumItem) {
            albumItem.showMoreBtn = !albumItem.showMoreBtn;
        },
        closeMoreBtn(albumItem) {
            albumItem.showMoreBtn = false;
        },
        openPlayer() {
            this.$refs.player.playMusic();
        },
        fetchFindMusic() {
            // 使用路由參數中的探索內頁ID來獲取內頁資訊
            const styleId = this.$route.params.id;
            // 根據styles裡的ID獲取詳情數據 將獲取到的數據賦值給 this.style
            this.style = getStyleById(styleId);
        },
    },
    mounted() {
        const idToFind = parseInt(this.$route.params.id);
        this.foundObject = this.styles.find(item => item.id === idToFind);
    },
}