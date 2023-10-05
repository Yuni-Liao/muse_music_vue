import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";
import player from "@/components/player.vue";

export default {
    components: { PlayBtnBig, AddFavBtn, AddSlBtn, ShareBtn, ReportBtn, LikeMesBtn, player },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            album: [
                {
                    id: 1,
                    bannerPic: "banner_albumPic1.png",
                    singer: "George Makridis, Hannah Hampton",
                    singerPage: "/profilepage",
                    singerPic: "singerPic.png",
                    albumPic: "albumPic.png",
                    albumName: "Countlary",
                    date: "2023-08-22",
                    albumInf: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
                    played: "2,855",
                    shared: "39"
                }
            ],
            songs: [
                {
                    id: 1,
                    songPic: "othaersong1.png",
                    name: "Fly Like",
                    singer: "Lisa",
                    time: "03:00",
                    showMoreBtn: false,
                },
                {
                    id: 2,
                    songPic: "othaersong2.png",
                    name: "Tired",
                    singer: "Lisa",
                    time: "03:00",
                    showMoreBtn: false,
                },
                {
                    id: 3,
                    songPic: "othaersong3.png",
                    name: "Want To Go Home",
                    singer: "Lisa",
                    time: "03:00",
                    showMoreBtn: false,
                },
                {
                    id: 4,
                    songPic: "othaersong1.png",
                    name: "Sleep",
                    singer: "Lisa",
                    time: "03:00",
                    showMoreBtn: false,
                },
                {
                    id: 5,
                    songPic: "othaersong2.png",
                    name: "Bed",
                    singer: "Lisa",
                    time: "03:00",
                    showMoreBtn: false,
                }
            ],
            //album: [],//專輯資訊 (fetch)
            //songs: [],//專輯歌曲資訊 (fetch)
        };
    },
    methods: {
        //獲取專輯資訊
        // fetchSingleAlbum() {
        //     const salid = this.$route.params.salid;
        //     const apiURL = new URL(
        //         `http://localhost/muse_music/public/api/getSingleAlbum.php?slid=${salid}`
        //     );
        //     fetch(apiURL)
        //         .then(async (response) => {
        //             this.album = await response.json();
        //         })
        //         .catch((error) => {
        //             console.error("發生錯誤:", error);
        //         });
        // },
        //獲取專輯歌曲資訊
        // fetchSingleAlbumSong() {
        //     const salid = this.$route.params.salid;
        //     const apiURL = new URL(
        //         `http://localhost/muse_music/public/api/getSingleAlbumSong.php?slid=${salid}`
        //     );
        //     fetch(apiURL)
        //         .then(async (response) => {
        //             this.songs = await response.json();
        //         })
        //         .catch((error) => {
        //             console.error("發生錯誤:", error);
        //         });
        // },
        //播放器
        openPlayer() {
            this.$refs.player.playMusic();
        },
        toggleMoreBtn(albumItem) {
            albumItem.showMoreBtn = !albumItem.showMoreBtn;
        },
        closeMoreBtn(albumItem) {
            albumItem.showMoreBtn = false;
        }
    },
    mounted() {
        // 獲取專輯資訊
        //this.fetchSingleAlbum();
        //獲取專輯歌曲資訊
        //this.fetchSingleAlbumSong();
    }
};