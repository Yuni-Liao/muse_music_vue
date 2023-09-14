export default {
    data() {
        return {
            cityName: [
                '台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'
            ],
            currentTab:
                'showMe',
            currentTabType: 'showMe',
            changePsw: [{
                title: '舊密碼'
            },
            {
                title: '新密碼'
            },
            {
                title: '確認密碼'
            },
            ],
        }
    },
    methods: {
        setCurrentTab(tabName) {
            this.currentTab = tabName;
            this.currentTabType = tabName;
        },
        saveBtn() {
            alert('確認送出');
        },

        copyLink() {
            alert('複製網址');
        },
        editAccount() {
            alert('修改帳號');
        },
        setSafeBtn() {
            alert('設定安全驗證')
        }
    }
}