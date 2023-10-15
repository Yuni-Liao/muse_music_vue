export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '編號',
                    key: 'msgrep_id',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '留言內容',
                    key: 'msg_con',
                    align: 'center',
                },
                {
                    title: '檢舉人',
                    key: 'mem_name',
                    width: 150,
                    align: 'center',
                },

                {
                    title: '檢舉原因',
                    key: 'rep_rsn',
                    align: 'center'
                },
                {
                    title: '檢舉日期',
                    key: 'rep_date',
                    align: 'center'
                },
                {
                    title: '下架留言',
                    slot: 'deleteBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '駁回檢舉',
                    slot: 'rejectBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            msgDate: [],

            //確認下架彈窗
            deleteBox: false,
        };
    },
    methods: {
        closeBtn(){
            this.deleteBox = false;
        },

        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        },
        //--------------------------------------------------------
        //下架 刪掉這筆資料 且刪除該筆留言

        deleteBtn(row) {
            // 顯示刪除彈窗
            this.deleteBox = true;
            // 存儲當前行數據以便在確定時使用
            this.currentDeleteRow = row;
        },

        deleteSaveBtn() {
            if (this.currentDeleteRow) {
                const url = `${this.$store.state.phpPublicPath}deleteReportMsg.php`;
                const formData = new FormData();
                // 傳遞參數
                formData.append("msgrep_id", this.currentDeleteRow.msgrep_id);

                fetch(url, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log(response);
                            window.location.reload();
                        } else {
                            throw new Error("刪除失敗");
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
                    .finally(() => {
                        // 重置彈窗狀態
                        this.deleteBox = false;
                        // 重置當前行數據
                        this.currentDeleteRow = null;
                    });
            }
        },


        allAccept() {
            alert('批次下架');
        },

        //--------------------------------------------------------
        //駁回 刪掉這筆資料 但不刪除留言
        rejectBtn(row) {
            alert('駁回');
        },


        allReject() {
            alert('批次駁回');
        }
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        const url = `${this.$store.state.phpPublicPath}postMsgMgmt.php`;
        let headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        fetch(url, {
            method: "POST",
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("取得 data 失敗");
                }
            })
            .then((json) => {
                this.msgDate = json;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}