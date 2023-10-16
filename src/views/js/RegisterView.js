export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            current: 0,
            email1: '',
            // mem_psw: '',
            mem_name: '',
            mem_aka: '',
            // mem_id: ''
        }
    },
    methods: {

        registerAccountToDatabase() {
            // 準備要發送到伺服器的資料
            const dataToSend = new FormData();
            dataToSend.append("mem_name", this.mem_name);
            dataToSend.append("mem_aka", this.mem_aka);
            dataToSend.append("email", this.email1);
            // dataToSend.append("mem_psw", this.mem_psw); // 添加密碼

            
            // 使用 fetch 送出 POST 請求到伺服器
            fetch("http://localhost/muse_music/public/api/register.php", {
                method: "POST",
                body: dataToSend,
            })
            // .then((response) => response.json())
            // .then((data) => {
            //     if (data.mem_id) {
            //         alert("註冊成功");
            //         // 在這裡處理成功註冊後的操作，例如導向到登入頁面
            //         // data.mem_id 是新註冊的用戶的 mem_id
            //     } else {
            //         alert("註冊失敗");
            //         // 處理註冊失敗的情況
            //     }
            // })
        },

        // login() {
        //     console.log("登入中...");

        //     // 錯誤驗證 暫定
        //     if (!this.validateEmail(this.member.mem_acc)) {
        //         this.emailInvalid = true;
        //         alert("請輸入有效的電子信箱，需有1個英文或數字");
        //         return;
        //     } else {
        //         this.emailInvalid = false;
        //     }

        //     if (!this.validatePassword(this.member.mem_psw)) {
        //         this.passwordInvalid = true;
        //         alert("請輸入有效的密碼，需有1個英文或數字");
        //         return;
        //     } else {
        //         this.passwordInvalid = false;
        //     }

        //     const dataToSend = new FormData();

        //     dataToSend.append("mem_acc", this.member.mem_acc);
        //     dataToSend.append("mem_psw", this.member.mem_psw);

        //     fetch("http://localhost/muse_music/public/api/logIn.php", {
        //         method: "POST",
        //         body: dataToSend,
        //     })
        //         .then((response) => response.json())
        //         .then((data) => {
        //             if (data.message === "登入成功") {
        //                 alert("登入成功");
        //                 // 從資料庫撈會員姓名
        //                 const mem_name = data.mem_name;

        //                 // 綁定id
        //                 const mem_id = data.mem_id;
        //                 alert(`Hi! ${mem_name}  歡迎回到 MuseMusic！ 會員編號 (ID: ${mem_id})`);

        //                 //會員id localStorage暫存
        //                 localStorage.setItem('mem_id', mem_id);
        //                 localStorage.setItem('mem_name', mem_name);
        //                 window.location.reload();

        //                 // 導回首頁 錨點在homepage
        //                 window.location.href = "/home";
        //             } else {
        //                 alert("帳戶密碼不正確");
        //             }
        //         });
        // },
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

