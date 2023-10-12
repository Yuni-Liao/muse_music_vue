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
            // 設置初始值
            s_id: '', 
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //用來存儲查找到的風格
            foundObject: {},
            //內頁
            styles: [],
            songs: []
        }
    },
    methods: {
        stopPropagation(event) {
            event.stopPropagation(); // 阻止事件冒泡，子元素的点击不会触发父元素的点击事件
        },
        fetchSongDetail() {
            fetch(`${this.$store.state.phpPublicPath}getFindStyle.php?`)
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
        // openPlayer() {
        //     this.$refs.player.playMusic();
        // },
        openPlayer(song) {
            
            this.s_id = song;
            
            this.$nextTick(() => {
                // 打印歌曲的 s_id
                // console.log("點擊的歌曲s_id:", this.s_id);

                 // 调用播放器组件的 playMusic 
                this.$refs.player.playMusic(this.s_id);
            });
        },
        changeSId(newSId) {
            // 切換上下首--使用從子組件接收的新 s_id 更新 s_id prop
            this.s_id = newSId;
        },
    },
    mounted() {
        this.fetchSongDetail();
        const fetchSongList = () => {
            const mcat_id = this.$route.params.mcat_id;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getFindSongList.php?mcat_id=${mcat_id}`
            );
            fetch(apiURL)
            .then(async (response) => {
                this.songs = await response.json();
            })
            .catch((error) => {
                console.error("發生錯誤:", error);
            });
        };
        fetchSongList();

        //建立事件聆聽:點空白處關閉
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