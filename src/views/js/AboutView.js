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