export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            // 謬思創作者
            userList: [
                {
                    id: 1,
                    prodPic: "aboutUser1.png",
                    link: "/profilepage",

                },
                {
                    id: 2,
                    prodPic: "aboutUser2.png",
                    link: "/profilepage",
                },
                {
                    id: 3,
                    prodPic: "aboutUser3.png",
                    link: "/profilepage",
                },
                {
                    id: 4,
                    prodPic: "aboutUser4.png",
                    link: "/profilepage",
                },
                {
                    id: 5,
                    prodPic: "aboutUser5.png",
                    link: "/profilepage",
                },
                {
                    id: 6,
                    prodPic: "aboutUser6.png",
                    link: "/profilepage",
                },
                {
                    id: 7,
                    prodPic: "aboutUser7.png",
                    link: "/profilepage",
                },
                {
                    id: 8,
                    prodPic: "aboutUser8.png",
                    link: "/profilepage",
                },
            ],

            //謬思創作者-初始輪播狀態
            isActive: true,

            // 常見問題
            // faqList: [
            //     {
            //         id: 1,
            //         question: "上傳音樂要付錢嗎？",
            //         answer: `上傳音樂作品到MUSE平台讓樂迷聆聽是完全免費的！
            //         只要註冊成為會員，並完成帳號驗證即可開始上傳作品。`,
            //         open: true,
            //     },
            //     {
            //         id: 2,
            //         question: "要怎麼上傳音樂？",
            //         answer: `音樂上傳的頁面在「會員專區」裡的「個人頁面管理」，進到頁面後點選「歌曲上傳」即可！
            //         音樂上傳後需要待管理員審核(1~3天)，經審核後作品就會在平台上線，供樂迷聆聽。`,
            //         open: false,
            //     },
            //     {
            //         id: 3,
            //         question: "上傳的音樂檔案有規定的格式嗎？",
            //         answer: `上傳的檔案須為 MP3 (MPEG-1 Audio Layer-3) 編碼格式，且位元率至少需為 192 kbit/s；
            //         如作品為 WAV / WMA / MP4 等其他編碼格式，需先自行使用轉檔軟體進行轉檔。`,
            //         open: false,
            //     },
            //     {
            //         id: 4,
            //         question: "可以上傳翻唱的作品嗎？",
            //         answer: `上傳的作品必須是你或你所屬團體的原創性作品。
            //         音樂作品中若包含他人的著作則需取得合法授權，亦須遵守MUSE之使用條款。`,
            //         open: false,
            //     },
            //     {
            //         id: 5,
            //         question: "為什麼我無法上傳音樂？",
            //         answer: `1.你的網頁瀏覽器可能需要更新，請確認瀏覽器為最新版本。
            //         2.嘗試在隱私 / 無痕模式視窗中操作，排除瀏覽器外掛 / 擴充功能的干擾。
            //         3.如若仍無法解決問題，可填寫表單獲得協助。`,
            //         open: false,
            //     },
            //     {
            //         id: 6,
            //         question: "音樂上傳後會不會被拿去賣錢？",
            //         answer: "MUSE平台為音樂人社群平台，作品僅會使用於推廣使用，不會把創作者的作品賣掉喔！",
            //         open: false,
            //     },
            //     {
            //         id: 7,
            //         question: "所有人都可以收聽我的作品嗎？",
            //         answer: "只要是經過管理員審核的作品，就會公開在MUSE平台上，所有聽眾都可以輕鬆收聽！",
            //         open: false,
            //     },
            //     {
            //         id: 8,
            //         question: "我的最愛跟建立歌單有什麼差別？",
            //         answer: `我的最愛屬於預設歌單，只要樂迷按「愛心」該首音樂就會加入我的最愛。
            //         建立歌單則是樂迷可以依照喜好創建個人歌單，並可以將喜歡的歌曲們加入到該歌單中。`,
            //         open: false,
            //     },
            //     {
            //         id: 9,
            //         question: "所有人都可以上傳音樂嗎？",
            //         answer: `作品只要是你或你所屬團體的原創性作品，每一位使用者皆可以到「會員專區」裡的「個人頁面管理」上傳音樂！
            //         音樂上傳後需要待管理員審核(1~3天)，經審核後作品就會在平台上線，供樂迷聆聽。`,
            //         open: false,
            //     },
            //     {
            //         id: 10,
            //         question: "如果有人在我的音樂底下留不當言論可以怎麼處理？",
            //         answer: "可以點選該則留言後方的「…」，點擊後會出現檢舉按鈕，管理員會再審核該則留言是否不當，經確認屬實會移除該則留言。",
            //         open: false,
            //     },
            // ],
            faqArray: [],

            //常見問題icon
            isShow: false,

            //機器人導向問題
            timer: null,

        }
    },

    methods: {
        // 獲取faq資料庫資訊
        fetchFaqArray(){
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getFaqs.php?`
              );
              fetch(apiURL).then(async (response) => {
                this.faqArray = await response.json();
                // 根據資料庫中的 'open' 值設置初始開合狀態
                this.faqArray.forEach((faq) => {
                    faq.open = faq.open === 1; // 將 1 設置為 true，0 設置為 false
                });
                this.$nextTick(() => {
                    this.scrollToTarget(this.$route.hash)
                })
            })
            .catch((error) => {
                console.error('獲取FAQ時發生錯誤', error);
            });
        },

        // 常見問題-收合
        toggleQuestion(index) {
            this.faqArray[index].open = !this.faqArray[index].open;
        },

        //謬思創作者-輪播狀態切換
        pauseAnimation(event) {
            this.isActive = false
        },
        resumeAnimation(event) {
            this.isActive = true
        },

        //機器人導向問題抓hash+錨點滾動
        async scrollToTarget(hash) {
            if (!hash) return;
            const el = document.querySelector(hash)
            console.log(el)
            await this.$nextTick()
            if (el) {
                clearTimeout(this.timer)
                const top = el.getBoundingClientRect().y;
                console.log(top)
                this.timer = setTimeout(() => {
                    if (!top || top < 0) return;
                    window.scrollTo({
                        top: top - 100,
                        behavior: 'smooth'
                    })
                    this.toggleQuestion(hash.split('#faq')[1])
                }, 200)
            }
        },

        // 顯示提交表單系統提示
        submitForm() {
            const message = "將通過信箱回復您的詢問，請靜待回復並留意信箱訊息，謝謝您。";
            alert(message);
        },
    },

    //監聽機器人導向網址的hash是否更改
    watch: {
        "$route.hash"(nVal) {
            if (nVal) {
                this.$nextTick(() => {
                    this.scrollToTarget(nVal)
                })
            }
        },
    },

    mounted() {
        //抓取機器人導向網址的hash
        console.log('mounted');
        this.scrollToTarget(this.$route.hash);

        // 獲取faq資料庫資訊
        this.fetchFaqArray();
    },

}