import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";
import player from "@/components/player.vue";

const clickOutside = {
    mounted(el, binding) {
        function eventHandler(e) {
            if (el.contains(e.target)) {
                return false
            }
            if (binding.value && typeof binding.value === 'function') {
                binding.value(e)
            }
        }

        el.__click_outside__ = eventHandler
        document.addEventListener('click', eventHandler)
    },
    beforeUnmount(el) {
        // 移除全局點擊事件監聽
        window.removeEventListener("click", this.handleGlobalClick);
    }
}


export default {
    components: { PlayBtnBig, AddFavBtn, AddSlBtn, ShareBtn, ReportBtn, LikeMesBtn, player },
    directives: {
        clickOutside,
    },
    data() {
        return {
            login_mem_id: "",
            id: '',
            // 新留言的內容
            msg_con: '',
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            songs: [], //歌曲資訊 (fetch)
            messages: [], //留言資訊 (fetch)
            otherSongs: [], //相關歌曲 (fetch)
            songTypes: [], //歌曲類別 (fetch)
            isShow: true,
            isShowSong: true,
            num: 3,
            num2: 3,
            txt: '查看更多',
            txt2: '查看更多',
            icon: 'arrayIcon',
        };
    },

    beforeDestroy() {
        // 監聽點擊事件
        window.removeEventListener("click", this.handleGlobalClick);
    },
    methods: {
        openPlayer(song) {
            this.id = song;
            this.$nextTick(() => {
                this.$refs.player.playMusic(this.id);
            });
        },

        // changeSId(newSId) {
        //     // 切換上下首--使用從子組件接收的新 id 更新 id prop
        //     this.id = newSId;
        // },

        // 創建新留言
        addNewMessage() {
            if (this.msg_con !== "") {
                const url = `${this.$store.state.phpPublicPath}postSingleMusicMsg.php`;
                let headers = {
                    Accept: "application/json",
                };

                // 創建新留言對象
                const formData = new FormData();
                formData.append("mem_id", this.login_mem_id);
                //formData.append("msg_id", this.msg_id);
                formData.append("s_id", this.sid);
                formData.append("msg_con", this.msg_con);
                //formData.append("msg_like", this.msg_like);
                console.log(this.msg_con);

                // 發送新留言到後端
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log('完成！');
                        } else {
                            throw new Error("新增失敗");
                        }
                    })
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error("發生錯誤:", error);
                    });
            }
        },


        // gotosinglemusic(sid) {
        //     this.$router.push({
        //         name: "singlemusic",
        //         params: {
        //             sid,
        //         },
        //     });
        // },
        // 預設只顯示前三筆留言
        showMore() {
            //console.log('1', this.isShow);
            this.isShow = !this.isShow;
            //console.log('2', this.isShow);
            this.num = this.isShow ? 3 : this.messages.length;
            this.txt = this.isShow ? '查看更多' : '收起留言'
        },
        // 預設只顯示前三首歌曲
        showMoreSong() {
            //console.log('1', this.isShowSong);
            this.isShowSong = !this.isShowSong;
            //console.log('2', this.isShowSong);
            this.num2 = this.isShowSong ? 3 : this.otherSongs.length;
            this.txt2 = this.isShowSong ? '查看更多' : '收起歌曲'
        },
        toggleSongs() {
            this.showAllSongs = !this.showAllSongs;
        },
        toggleReportBtn(messageItem) {
            // 切換按鈕模式
            messageItem.showReportBtn = !messageItem.showReportBtn;
        },
        closeReportBtn(messageItem) {
            console.log(messageItem)
            messageItem.showReportBtn = false
        },
        toggleIcon() {
            this.isShowSong = !this.isShowSong;
        },
    },
    mounted() {
        this.login_mem_id = localStorage.getItem('mem_id');
        //this.login_mem_pic = localStorage.getItem('mem_pic');
        this.sid = parseInt(this.$route.params.sid);
        //歌曲資訊 (fetch) songs:[]
        const fetchSingleMusic = () => {
            const sid = this.$route.params.sid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleMusic.php?sid=${sid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.songs = await response.json();
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        //歌曲類別 (fetch) songTypes:[]
        const fetchSingleMusicType = () => {
            const sid = this.$route.params.sid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleMusicType.php?sid=${sid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.songTypes = await response.json();
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        //留言資訊 (fetch) messages:[]
        const fetchSingleMusicMsg = () => {
            const msg_id = this.$route.params.sid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleMusicMsg.php?msgid=${msg_id}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.messages = await response.json();
                    console.log(this.messages)
                })
            //console.log(this.messages);
            .catch((error) => {
                console.error("發生錯誤:", error);
            });
        };
        //相關歌曲 (fetch) otherSongs:[]
        const fetchSingleMusicSong = () => {
            const sid = this.$route.params.sid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleMusicSong.php?sid=${sid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.otherSongs = await response.json();
                })
            .catch((error) => {
                console.error("發生錯誤:", error);
            });
        };

        // 執行 fetch
        fetchSingleMusic();
        fetchSingleMusicType();
        fetchSingleMusicMsg();
        fetchSingleMusicSong();
    }
}