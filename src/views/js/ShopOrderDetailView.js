export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,

            //用來存儲查找到的物件
            foundObject: [],

            shopOrdersItem: [],

        };
    },
    methods: {
        // fetchshopOrdersItemDetail(){
        //     const prouductId = this.$route.params.ord_id;
        //     this.prouduct = getProuductById(prouductId);
        // },

        fetchOrdersItemArray(){
            const slid = this.$route.params.ord_id;
            fetch(`http://localhost/muse_music/public/api/getShopOrdersItemSlid.php?slid=${slid}`).then(async (response) => {
                this.shopOrdersItem = await response.json();
                const idToFind = this.$route.params.ord_id;
                this.foundObject = this.shopOrdersItem.find((item) => item.id === idToFind);
            })
            .catch((error) => {
                console.error('獲取OrdersItem時發生錯誤', error);
            });
        }
        
    },

    computed: {
        // 根據訂單狀態回傳boolean
        isStatActive() {
            return (status) => {
                return this.foundObject.ord_stat === status;
            };
        },
    },



    mounted() {
        //根據路由參數中的 id 值來查找並定位
        // const idToFind = parseInt(this.$route.params.ord_id);
        // this.foundObject = this.shopOrdersItem.find(item => item.ord_id === idToFind);

    //    // this.slid = parseInt(this.$route.params.slid); 

        // // fetch orders 訂單資訊
        // const fetchOrdersItemArray = () => {
        //     const slid = this.$route.params.slid;
        //     const apiURL = new URL(
        //         `http://localhost/muse_music/public/api/getShopOrdersItemSlid.php?slid=${slid}`
        //     );
        //     fetch(apiURL)
        //     .then(async (response) => {
        //         this.shopOrdersItem = await response.json();
        //         //console.log('Shop Orders Item:', this.shopOrdersItem); // 新增這行
 
        //     })
        //     .catch((error) => {
        //         console.error('獲取OrdersItem時發生錯誤', error);
        //     });
        // };


        // 執行fetch
        this.fetchOrdersItemArray();

    },

}