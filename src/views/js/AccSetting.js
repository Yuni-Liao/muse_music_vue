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
            copyLink,
        }
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            login_mem_id: '',
            memInfo: [{
                mem_id: '',
                mem_name: '',
                email: '',
                county: '',
                mem_psw: '',
            }], // 暫存會員資料物件
            urlCopy: '',
            editCity: false,
            cityName: [
                '台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'
            ],
            currentTab:
                'showMe',
            currentTabType: 'showMe',
            changePsw: [{
                title: '舊密碼',
                oldPsw: '',
            },
            {
                title: '新密碼',
                newPsw: '',
            },
            {
                title: '確認密碼',
                confiremAgainPsw: '', // 確認密碼
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
            const url = `${this.$store.state.phpPublicPath}editAccSetting.php`;
            let headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
            };
            const dataToSend = {
                mem_name: this.memInfo[0].mem_name,
                email: this.memInfo[0].email,
                county: this.memInfo[0].county,
                mem_id: this.memInfo[0].mem_id,
            };

            // 判斷 新密碼 && 確認密碼不為空值
            if (this.changePsw[1].newPsw !== '' && this.changePsw[2].confiremAgainPsw !== '') {
                // 判斷 舊密碼必須與DB相同
                if (this.changePsw[0].oldPsw === this.memInfo[0].mem_psw) {
                    dataToSend.mem_psw = this.changePsw[2].confiremAgainPsw;
                } else {
                    alert('請確認已輸入欄位的正確性');
                    return;
                }
            } else {
                // 若沒有要改密碼就傳回原本的密碼給data
                dataToSend.mem_psw = this.memInfo[0].mem_psw;
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
        },
        changeNewPsw() {
            if (this.changePsw[0].oldPsw === this.memInfo[0].mem_psw) { } else {
                alert('密碼有錯誤')
            }
        },
    },
    mounted() {
        //fetch 會員資料 
        this.login_mem_id = localStorage.getItem('mem_id');
        const fetchMemberInfo = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAccSetting.php?mem_id=${this.login_mem_id}`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => {
                    this.memInfo = res;
                    this.urlCopy = `https://tibamef2e.com/chd103/g2/home/profilepage/${this.login_mem_id}`;
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        console.log(this.memInfo)
        fetchMemberInfo();
    }
}