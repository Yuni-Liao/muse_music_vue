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
        openPlayer() {
            this.$refs.player.playMusic();
        },
        // 創建新留言
        addNewMessage() {
            if (this.newMessage.trim() !== "") {
                // 獲取當前日期的年月日時分秒
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 補零
                const day = currentDate.getDate().toString().padStart(2, '0'); // 補零
                const hours = currentDate.getHours().toString().padStart(2, '0'); // 補零
                const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // 補零
                const seconds = currentDate.getSeconds().toString().padStart(2, '0'); // 補零
        
                // 創建新留言對象，使用 Date.now() 作為唯一的 id
                const newMessageItem = {
                    id: Date.now(),
                    userPic: "pre.jpg", // 假設默認的用戶圖片
                    userName: "Your Name", // 假設新留言的用戶名
                    date: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`, // 使用當前日期時間
                    message: this.newMessage,
                    like: "0", // 初始點讚數為0
                    showReportBtn: false,
                };
        
                // 添加下面的调试语句
                console.log("Attempting to send a message:", newMessageItem);
        
                // 使用 POST 將數據發送给後端
                fetch('http://localhost/muse_music/public/api/postSingleMusicMsg.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: newMessageItem }), // 將 newMessageItem 作為對象傳遞給 JSON.stringify
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Response from server:", data); 
                    if (data.success) {
                        // 清空新留言的内容
                        this.newMessage = "";
        
                        // 更新前台留言列表
                        this.messages.unshift(newMessageItem);
                    } else {
                        // 留言失敗
                        console.error(data.msg);
                    }
                })
                .catch((error) => {
                    console.error('留言發送失敗:', error);
                });
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
                `http://localhost/muse_music/public/api/getSingleMusic.php?sid=${sid}`
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
                `http://localhost/muse_music/public/api/getSingleMusicType.php?sid=${sid}`
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
                `http://localhost/muse_music/public/api/getSingleMusicMsg.php?msgid=${msgid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.messages = await response.json();
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        //相關歌曲 (fetch) otherSongs:[]
        const fetchSingleMusicSong = () => {
            const sid = this.$route.params.sid;
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getSingleMusicSong.php?sid=${sid}`
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
};