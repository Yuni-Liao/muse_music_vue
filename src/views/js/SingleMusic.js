import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";

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
        // 添加事件监听
        document.addEventListener('click', eventHandler)
    },
    beforeUnmount(el) {
        // 移除事件监听
        document.removeEventListener('click', el.__click_outside__)
    }
}


export default {
    components: { PlayBtnBig, AddFavBtn, AddSlBtn, ShareBtn, ReportBtn, LikeMesBtn },
    directives: {
        clickOutside,
    },
    data() {
        return {
            // 新留言的內容
            newMessage: "",
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            //歌曲清單
            songs: [
                {
                    id: 1,
                    songPic: "songPic.png",
                    bannerPic: "banner_songPic1.png",
                    songName: "Say It",
                    singer: "George Makridis, Hannah Hampton",
                    singerPic: "singerPic.png",
                    albumPic: "albumPic.png",
                    album: "Countlary",
                    date: "2023-08-22",
                    albumInf: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
                    songInf: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
                    type1: "西洋語系",
                    type2: "嘻哈",
                    type3: "派對",
                    time: "03:58",
                    played: "5,223",
                    liked: "68",
                    shared: "39"
                }
            ],
            messages: [
                {
                    id: 1,
                    userPic: "userpic1.png",
                    userName: "Euterpe",
                    date: "2023-08-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "12",
                    showReportBtn: false,
                },
                {
                    id: 2,
                    userPic: "userpic2.png",
                    userName: "Auterpe",
                    date: "2023-06-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem .",
                    like: "24",
                    showReportBtn: false,
                },
                {
                    id: 3,
                    userPic: "userpic3.png",
                    userName: "Zuterpe",
                    date: "2023-04-23",
                    message: "dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ",
                    like: "33",
                    showReportBtn: false,
                },
                {
                    id: 4,
                    userPic: "userpic1.png",
                    userName: "Jisoo",
                    date: "2023-07-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    like: "666",
                    showReportBtn: false,
                },
                {
                    id: 5,
                    userPic: "userpic2.png",
                    userName: "Lisa",
                    date: "2023-05-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore.",
                    like: "999",
                    showReportBtn: false,
                }
            ],
            otherSongs: [
                {
                    id: 1,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                },
                {
                    id: 2,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                },
                {
                    id: 3,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                },
                {
                    id: 4,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                },
                {
                    id: 5,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                }
            ],
            // showAllMessages: true,
            // showAllSongs: true,
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
        // 創建新留
        addNewMessage() {
            if (this.newMessage.trim() !== "") {
                // 創建新留言對象，使用 Date.now() 作為唯一的 id
                const newMessageItem = {
                    id: Date.now(),
                    userPic: "userpic1.png", // 假設您有一個默認的用戶圖片
                    userName: "Your Name", // 假設您希望新留言的用戶名稱為 "Your Name"
                    date: new Date().toISOString().slice(0, 10), // 使用當前日期
                    message: this.newMessage,
                    like: "0", // 初始點贊數為0
                    showReportBtn: false,
                };

                // 使用 unshift 方法將新留言插入到 messages 數組的開頭
                this.messages.unshift(newMessageItem);

                // 清空新留言的內容
                this.newMessage = "";
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
        methods: {
            toggleIcon() {
                this.isShowSong = !this.isShowSong;
            },
        },
    },
};