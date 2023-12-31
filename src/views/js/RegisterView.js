export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            current: 0,
            member: [{
                mem_name: '',
                mem_aka: '',
                email: '',
                mem_acc:'',
                mem_psw:'',
               
            }],

            mem_id:'',

            


        }
    },
    methods: {

        registerAccountToDatabase() {
           
            // 準備要發送到伺服器的資料
            const dataToSend = new FormData();
            dataToSend.append("mem_name", this.member[0].mem_name);
            dataToSend.append("mem_aka", this.member[0].mem_aka);
            dataToSend.append("email", this.member[0].email);
        
            // 使用 fetch 送出 POST 請求到伺服器
            fetch(`${this.$store.state.phpPublicPath}register.php`, {
                method: "POST",
                body: dataToSend,
            })
            .then((response) => {
                if (!response.ok) {
                    // 可能會有的error
                    if (response.status === 400) {
                        throw new Error("註冊失敗: 伺服器請求無效 (HTTP 400)");
                    } else if (response.status === 500) {
                        throw new Error("註冊失敗: 伺服器內部錯誤 (HTTP 500)");
                    } else {
                        throw new Error("註冊失敗: 網路錯誤 (HTTP " + response.status + ")");
                    }
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data); 傳回data值
                if (data.mem_id) {
                    this.mem_id=data.mem_id;
                    alert("註冊成功");
                    // 在這裡處理成功註冊後的操作，例如導向到登入頁面
                    // data.mem_id 是新註冊的用戶的 mem_id
                    
                } else if (data.error) {
                    alert("註冊失敗: " + data.error);
                    // 處理註冊失敗的情況，顯示從伺服器收到的錯誤訊息
                }
            })
            .catch((error) => {
                console.error("Network error:", error);
                alert("註冊失敗 - 無法連接到伺服器");
            });
            this.next();
        },

       

        registerPSWToDatabase() {
            // 準備要發送到伺服器的資料
            const pswToSend = new FormData();
            pswToSend.append("mem_id", this.mem_id);
            pswToSend.append("mem_acc", this.member[0].mem_acc);
            pswToSend.append("mem_psw", this.member[0].mem_psw);
        
            // 使用 fetch 送出 POST 請求到伺服器
            fetch(`${this.$store.state.phpPublicPath}registerpsw.php`, {
                method: "POST",
                body: pswToSend,
            })
            .then((response) => {
                if (!response.ok) {
                    // 可能會有的error
                    if (response.status === 400) {
                        throw new Error("註冊失敗: 伺服器請求無效 (HTTP 400)");
                    } else if (response.status === 500) {
                        throw new Error("註冊失敗: 伺服器內部錯誤 (HTTP 500)");
                    } else {
                        throw new Error("註冊失敗: 網路錯誤 (HTTP " + response.status + ")");
                    }
                }
                return response.json();
            })
            .then((data) => {
                if (data.mem_id) {
                    alert("帳號創建成功");
                } else if (data.error) {
                    alert("帳號創建失敗: " + data.error);
                }
            })
            .catch((error) => {
                console.error("Network error:", error);
                alert("帳號創建失敗 - 無法連接到伺服器");
            });
            this.next();
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

