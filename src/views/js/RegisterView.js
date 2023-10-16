export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            current: 0,
            member: {
                mem_name: '',
                mem_aka: '',
                email: '',
              },

            // mem_psw: '',

            // mem_id: ''


            // member: [
            //     {email1: '', mem_aka: '' ,mem_name: ''},
            // ],
        }
    },
    methods: {

        registerAccountToDatabase() {
            // 準備要發送到伺服器的資料
            const dataToSend = new FormData();
            dataToSend.append("mem_name", this.member.mem_name);
            dataToSend.append("mem_aka", this.member.mem_aka);
            dataToSend.append("email", this.member.email);
        
            // 使用 fetch 送出 POST 請求到伺服器
            fetch("http://localhost/muse_music/public/api/register.php", {
                method: "POST",
                body: dataToSend,
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.mem_id) {
                    alert("註冊成功2");
                    // 在這裡處理成功註冊後的操作，例如導向到登入頁面
                    // data.mem_id 是新註冊的用戶的 mem_id
                } else {
                    alert("註冊失敗2");
                    // 處理註冊失敗的情況
                }
            })
            .catch((error) => {
                console.error("Network error:", error);
                alert("註冊失敗2 - 網路錯誤");
            });
        },

        next() {
            if (this.current === 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        },
        prev() {
            if (this.current === 0) {
                this.current = 3;
            } else {
                this.current -= 1;
            }
        },
    }
}

