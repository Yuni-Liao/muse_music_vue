export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            //訂單詳情
            shopOrdersItem: [],

        };
    },
    
    methods: {
        
    },

    computed: {
        // 根據訂單狀態回傳boolean
        isStatActive() {
            return (status) => {
                return this.shopOrdersItem.some(order => order.ord_stat == status); 
            };
        },
    },

    mounted() {
        // fetch orders 訂單資訊
        const fetchOrdersItemArray = () => {
            const slid = this.$route.params.slid;
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getShopOrdersItemSlid.php?slid=${slid}&mem_id=${localStorage.getItem('mem_id')}`
            );
            fetch(apiURL)
            .then(async (response) => {
                const res = await response.json()
                // console.log(res)
                if (Array.isArray(res)) {
                    this.shopOrdersItem = res
                    // console.log(this.shopOrdersItem);
                } else {
                    this.$router.replace('/home/shoporders');
                }
            })
            .catch((error) => {
                this.$router.replace('/home/shoporders');
            });
        };

        // 執行fetch
        fetchOrdersItemArray();
    },

}