export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            modal: false,
            columns: [
                {
                    title: '編號',
                    key: 'mem_id',
                    align: 'center',
                    width: 70,
                },
                {
                    title: '帳號',
                    key: 'mem_acc',
                    align: 'center',
                    width: 285,
                },
                {
                    title: '使用者名稱',
                    key: 'mem_name',
                    align: 'center',
                    width: 255,
                },
                {
                    title: '粉絲數量',
                    key: 'fol_num',
                    align: 'center',
                    width: 100,
                },
                {
                    title: '已上傳歌曲',
                    key: 'song_count',
                    align: 'center',
                    width: 120,
                }, {
                    title: '已建立歌單',
                    key: 'alb_count',
                    align: 'center',
                    width: 120,
                },
                // {
                //     title: '操作',
                //     slot: 'pauseBtn',
                //     align: 'center',
                //     width: 90,
                // }
                // {
                //     title: '更多',
                //     slot: 'viewBtn',
                //     align: 'center',
                //     width: 80,
                // },
            ],
            //資料裡撈到的
            data: [],
            // 搜尋
            value3: '',
            //搜尋用
            filteredData: [],
        }
    },
    methods: {
        searchMembers() {
            const keyword1 = this.value3.trim().toLowerCase();

            console.log('Keyword 1:', keyword1);

            // 使用關鍵字進行過濾
            this.filteredData = this.data.filter(member => {

                const memIdMatch = member.mem_id.toLowerCase().includes(keyword1);
                const memAccMatch = member.mem_acc.toLowerCase().includes(keyword1);

                return memIdMatch || memAccMatch;
            });

            // console.log('Filtered Data:', this.filteredData);
        },
        togglePause(row) {
            // 切换停權狀態
            row.paused = !row.paused;
        },
        // viewBtn() {
        //     this.modal = true;
        // },
        // memSearchBtn() {
        //     alert('搜尋會員');
        // }
    },
    mounted() {
        // fetch 全部會員
        const fetchAll = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getMemberCount.php`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => {
                    this.data = res;
                    // 初始化时设置 filteredData
                    this.filteredData = res;
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchAll();
    },
}