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
            // 如果绑定的参数是函数，正常情况也应该是函数，执行
            if (binding.value && typeof binding.value === 'function') {
                binding.value(e)
            }
        }
        // 用于销毁前注销事件监听
        el.__click_outside__ = eventHandler
        document.addEventListener('click', eventHandler)
    },
    beforeUnmount(el) {
        // 移除事件监听
        document.removeEventListener('click', el.__click_outside__)
    }
}


export default {
    components: { PlayBtnBig, AddFavBtn, AddSlBtn, ShareBtn, ReportBtn, LikeMesBtn, player },
    directives: {
        clickOutside,
    },
    data() {
        return {
            id: '',
            // 新留言的內容
            newMessage: "",
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
        //播放器
        // openPlayer() {
        //     this.$refs.player.playMusic();
        // },
        openPlayer(song) {

            this.id = song;

            this.$nextTick(() => {
                // 打印歌曲的 id
                // console.log("點擊的歌曲id:", this.id);

                // 调用播放器组件的 playMusic 
                this.$refs.player.playMusic(this.id);
            });
        },
        // changeSId(newSId) {
        //     // 切換上下首--使用從子組件接收的新 id 更新 id prop
        //     this.id = newSId;
        // },
        // 創建新留言
        addNewMessage() {
            if (this.newMessage.trim() !== "") {
                // 獲取當前日期的年月日時分秒
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                const day = currentDate.getDate().toString().padStart(2, '0');
                const hours = currentDate.getHours().toString().padStart(2, '0');
                const minutes = currentDate.getMinutes().toString().padStart(2, '0');
                const seconds = currentDate.getSeconds().toString().padStart(2, '0');

                // 創建新留言對象
                const newMessageItem = {
                    userPic: "pre.jpg",
                    userName: "",
                    date: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
                    //msg_date: "",
                    message_con: this.newMessage,
                    msg_like: "0",
                    //showReportBtn: false,
                };

                // 發送新留言到後端
                fetch('${this.$store.state.phpPublicPath}postSingleMusicMsg.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: newMessageItem }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            // 清空新留言的内容
                            this.newMessage = "";

                            // 更新前台留言列表
                            this.messages.unshift(data.message); // 假设后端返回整个新留言对象
                        } else {
                            // 留言失敗
                            console.error(data.msg);
                        }
                    })
                    .catch((error) => {
                        console.error('留言發送失敗:', error);
                    });
                console.log(newMessageItem);
            }
        },

        // 預設只顯示前三筆留言
        showMore() {
            console.log('1', this.isShow);
            this.isShow = !this.isShow;
            console.log('2', this.isShow);
            this.num = this.isShow ? 3 : this.messages.length;
            this.txt = this.isShow ? '查看更多' : '收起留言'
        },
        // 預設只顯示前三首歌曲
        showMoreSong() {
            console.log('1', this.isShowSong);
            this.isShowSong = !this.isShowSong;
            console.log('2', this.isShowSong);
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
            const msgid = this.$route.params.sid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getSingleMusicMsg.php?msgid=${msgid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.messages = await response.json();
                })
            // .catch((error) => {
            //     console.error("發生錯誤:", error);
            // });
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
            // .catch((error) => {
            //     console.error("發生錯誤:", error);
            // });
        };

        // 執行 fetch
        fetchSingleMusic();
        fetchSingleMusicType();
        fetchSingleMusicMsg();
        fetchSingleMusicSong();
    }
};