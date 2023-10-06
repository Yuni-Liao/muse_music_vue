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
            styles: [],
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
        fetchMusicDetail() {
            fetch(`http://localhost/muse_music/public/api/getFindStyle.php?`)
            .then(async (response) => {
                this.styles = await response.json();
                const idToFind = this.$route.params.mcat_id;
                this.foundObject = this.styles.find((item) => item.mcat_id === idToFind);
            })
                .catch((error) => {
                    console.error('發生錯誤:', error);
                });
        },
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
    },
    mounted() {
        this.fetchMusicDetail();
        // const idToFind = parseInt(this.$route.params.id);
        // this.foundObject = this.styles.find(item => item.id === idToFind);
        
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