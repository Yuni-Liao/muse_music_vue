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
            id: '',
            //存放所有歌曲的id
            allSid: [],
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            salid: null,
            played: 999,
            album: [],//專輯資訊 (fetch)
            songs: [],//專輯歌曲資訊 (fetch)
        };
    },
    methods: {
        //播放器
        openPlayer(song) {
            
            this.id = song;

            this.$nextTick(() => {
                // 打印歌曲的 id
                // console.log("點擊的歌曲id:", this.id);
                // console.log("點擊的專輯歌曲allSid:", this.allSid);

                 // 调用播放器组件的 playMusic 
                this.$refs.player.playMusic();
            });
        },
        changeSId(newSId) {
            // 切換上下首--使用從子組件接收的新 id 更新 id prop
            this.id = newSId;
        },
        toggleMoreBtn(albumItem) {
            albumItem.showMoreBtn = !albumItem.showMoreBtn;
        },
        closeMoreBtn(albumItem) {
            albumItem.showMoreBtn = false;
        },
        gotosinglemusic(id) {
            this.$router.push({
                name: "singlemusic",
                params: {
                    id,
                },
            });
        },
    },
    mounted() {
        this.salid = parseInt(this.$route.params.salid);
        // fetch 專輯資訊 album:[]
        const fetchSingleAlbum = () => {
            const salid = this.$route.params.salid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleAlbum.php?salid=${salid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.album = await response.json();
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };

        // fetch 專輯歌曲資訊 songs:[]
        const fetchSingleAlbumSong = () => {
            const salid = this.$route.params.salid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleAlbumSong.php?salid=${salid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.songs = await response.json();
                    // 提取所有歌曲的 s_id 并存储在一个数组中
                    this.allSid = this.songs.map((songs) => songs.id);
                    // console.log("此專輯歌曲的s_id:",this.allSid);
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };

        // 執行 fetch
        fetchSingleAlbum();
        fetchSingleAlbumSong();
    }
};