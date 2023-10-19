export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            // 謬思創作者
            memList: [],
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
                `${this.$store.state.phpPublicPath}getFaqs.php?`
              );
              fetch(apiURL).then(async (response) => {
                this.faqArray = await response.json();
                // 根據資料庫中的 'open' 值設置初始開合狀態
                this.faqArray.forEach((faq) => {
                    faq.open = faq.open === 1; // 將 1 設置為 true，0 設置為 false
                });
                // scroll
                this.$nextTick(() => {
                    this.scrollToTarget(this.$route.hash)
                })
            })
            .catch((error) => {
                console.error('獲取FAQ時發生錯誤', error);
            });
        },

        // 獲取member資料庫資訊
        fetchMemberArray(){
            const memURL = new URL(
                `${this.$store.state.phpPublicPath}getAboutMem.php?`
              );
              fetch(memURL).then(async (response) => {
                this.memList = await response.json();
                // console.log(this.memList)
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
            // console.log(el)
            await this.$nextTick()
            if (el) {
                clearTimeout(this.timer)
                const top = el.getBoundingClientRect().y;
                // console.log(top)
                this.timer = setTimeout(() => {
                    if (!top || top < 0) return;
                    window.scrollTo({
                        top: top - 150,
                        behavior: 'smooth'
                    })
                    // this.toggleQuestion(hash.split('#faq')[1])
                    // 如果 hash:[ ] 不存在，不執行 toggleQuestion
                    if (!hash) {
                        return;
                    }
                    const index = parseInt(hash.split('#faq')[1], 10) - 1;
                    if (!isNaN(index)) {
                        this.toggleQuestion(index);
                    }                
                }, 200)
            }
        },

        // 顯示提交表單系統提示
        submitForm() {
            const message = "將通過信箱回復您的詢問，請靜待回復並留意信箱訊息，謝謝您。";
            alert(message);
            location.reload();
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
    beforeRouteUpdate(to, from, next) {
        // 在這裡處理 hash 變化
        this.scrollToTarget(to.hash);
        next();
    },

    mounted() {
        //抓取機器人導向網址的hash
        // console.log('mounted');
        this.scrollToTarget(this.$route.hash);

        // 獲取member資料庫資訊
        this.fetchMemberArray();
        // 獲取faq資料庫資訊
        this.fetchFaqArray();
    },

}