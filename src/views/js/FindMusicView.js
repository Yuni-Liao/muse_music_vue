
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
                    id: 1,
                    styleName:"日語流行",
                    img:'image/Find/japan50.png',
                    count: 563,
                },
                {
                    id: 2,
                    styleName:"韓語流行",
                    img:'image/Find/korea50.png',
                    count: 742,
                },
                {
                    id: 3,
                    styleName:"華語流行",
                    img:'image/Find/asia50.png',
                    count: 1145,
                },
                {
                    id: 4,
                    styleName:"西洋流行",
                    img:'image/Find/western50.png',
                    count: 2637,
                },
                {
                    id: 5,
                    styleName:"其他語言",
                    img:'image/Find/animal50.png',
                    count: 452,
                },
                {
                    id: 6,
                    styleName:"流行音樂",
                    img:'image/Find/japan50.png',
                    count: 954,
                },
                {
                    id: 7,
                    styleName:"獨立音樂",
                    img:'image/Find/japan50.png',
                    count: 738,
                },
                {
                    id: 8,
                    styleName:"嘻哈",
                    img:'image/Find/japan50.png',
                    count: 653,
                },
                {
                    id: 9,
                    styleName:"搖滾",
                    img:'image/Find/japan50.png',
                    count: 452,
                },
                {
                    id: 10,
                    styleName:"藍調",
                    img:'image/Find/japan50.png',
                    count: 682,
                },
                {
                    id: 11,
                    styleName:"爵士",
                    img:'image/Find/japan50.png',
                    count: 458,
                },
                {
                    id: 12,
                    styleName:"古典",
                    img:'image/Find/japan50.png',
                    count: 142,
                },
                {
                    id: 13,
                    styleName:"快樂",
                    img:'image/Find/japan50.png',
                    count: 803,
                },
                {
                    id: 14,
                    styleName:"傷心",
                    img:'image/Find/japan50.png',
                    count: 741,
                },
                {
                    id: 15,
                    styleName:"運動",
                    img:'image/Find/japan50.png',
                    count: 683,
                },
                {
                    id: 16,
                    styleName:"輕鬆",
                    img:'image/Find/japan50.png',
                    count: 183,
                },
                {
                    id: 17,
                    styleName:"舒眠",
                    img:'image/Find/japan50.png',
                    count: 568,
                },
                {
                    id: 18,
                    styleName:"專注",
                    img:'image/Find/japan50.png',
                    count: 352,
                },
                {
                    id: 19,
                    styleName:"派對",
                    img:'image/Find/japan50.png',
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
        toggleMoreBtn(albumItem, event) {
            if (this.openAlbumItem && this.openAlbumItem !== albumItem) {
                this.openAlbumItem.showMoreBtn = false; // 關閉之前打開的
            }
            albumItem.showMoreBtn = !albumItem.showMoreBtn;
            if (albumItem.showMoreBtn) {
                event.stopPropagation();
            }
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
        
         // 建立事件聆聽:點空白處關閉
        document.addEventListener('click', this.closeMoreSpace);
    },
    beforeUnmount() {
        // 移除事件聆聽:點空白處關閉
        document.removeEventListener('click', this.closeMoreSpace);
    },
    computed: {
        openAlbumItem() {
            return this.songs.find((albumItem) => albumItem.showMoreBtn);
        },
    },
}