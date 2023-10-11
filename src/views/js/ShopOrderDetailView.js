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
                `${this.$store.state.phpPublicPath}getShopOrdersItemSlid.php?slid=${slid}`
            );
            fetch(apiURL)
            .then(async (response) => {
                this.shopOrdersItem = await response.json();
                // console.log(this.shopOrdersItem);
            })
            .catch((error) => {
                console.error('獲取OrdersItem時發生錯誤', error);
            });
        };

        // 執行fetch
        fetchOrdersItemArray();
    },

}