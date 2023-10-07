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
            songs: []
        }
    },
    methods: {
        fetchSongDetail() {
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
        // fetchSongList() {
        //     const apiURL = new URL(
        //         `http://localhost/muse_music/public/api/getFindSongList.php?`
        //     );
        //     fetch(apiURL).then(async (response) => {
        //         this.songs = await response.json();
        //     });
        //     console.log(this.songs);
        // },
        
      


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
        this.fetchSongDetail();

        const fetchSongList = () => {
            const mcat_id = this.$route.params.mcat_id;
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getFindSongList.php?mcat_id=${mcat_id}`
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