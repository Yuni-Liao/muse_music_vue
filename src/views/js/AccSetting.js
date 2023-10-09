import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';


export default {
    setup() {
        // urlCopy 初始值
        const urlCopy = ref('');

        function copyLink() {
            copy(urlCopy.value)
        }

        // 使用 vue-clipboard3
        const { toClipboard } = useClipboard()

        const copy = async (msg) => {
            try {
                await toClipboard(msg)
                alert('複製網址成功')
            } catch (e) {
                alert('複製失敗')
            }
        }
        return {
            urlCopy,
            copyLink
        }
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            memInfo: [{
                mem_name: '',
                email: '',
                county: '',
                mem_id: '',
            }], // 暫存會員資料物件
            memChangePsw: '',
            urlCopy: '',
            editCity: false,
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
        // 個人檔案 - 編輯
        saveBtn() {
            const url = `http://localhost/muse_music/public/api/editAccSetting.php`;
            let headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            const dataToSend = {
                mem_name: this.memInfo[0].mem_name,
                email: this.memInfo[0].email,
                county: this.memInfo[0].county,
                mem_id: this.memInfo[0].mem_id,
                mem_psw: this.memChangePsw,
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(dataToSend),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("編輯失敗");
                    }
                })
                .then(() => {
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                });
            console.log(dataToSend);
        },
        // 修改居住地
        toggleEditCity() {
            this.editCity = !this.editCity;
        },

        // 安全驗證
        setSafeBtn() {
            alert('設定安全驗證')
        }
    },
    mounted() {
        //fetch 會員資料 - 編號 1 , 之後改動態
        const fetchMemberInfo = () => {
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getAccSetting.php`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => {
                    this.memInfo = res;
                    this.urlCopy = `https://tibamef2e.com/chd103/g2/home/profilepage/${this.memInfo[0].mem_id}`;
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchMemberInfo();
    }
}