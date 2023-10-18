export default {
    data() {
        return {
            hasData: false,
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            columns: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: "#",
                    key: "no",
                    width: 80,
                    align: "center",
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
                    title: '駁回檢舉',
                    slot: 'deleteBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '下架留言',
                    slot: 'rejectBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            msgDate: [],
            //確認下架 彈窗
            deleteBox: false,
            //確認駁回 彈窗
            acceptBox: false,
        };
    },
    methods: {
        closeBtn() {
            this.deleteBox = false;
            this.acceptBox = false;
        },

        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        },

        //下架 刪掉這筆資料 且刪除該筆留言--------------------------
        acceptBtn(row) {
            // 顯示下架彈窗
            this.acceptBox = true;
            // 存儲當前行數據以便在確定時使用
            this.currentAcceptRow = row;
        },
        acceptSaveBtn() {
            if (this.currentAcceptRow) {
                const url = `${this.$store.state.phpPublicPath}deleteRepMsgAndMsg.php`;
                const formData = new FormData();
                // 傳遞參數
                formData.append("msg_id", this.currentAcceptRow.msg_id);

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
                        this.acceptBox = false;
                        // 重置當前行數據
                        this.currentAcceptRow = null;
                    });
            }
        },

        acceptBatch(selectedIds) {
            // 批次下架，selectedIds 是選中的項目的ID陣列
            for (const id of selectedIds) {
                // 根據每個 ID 執行下架操作
                const url = `${this.$store.state.phpPublicPath}deleteRepMsgAndMsg.php`;
                const formData = new FormData();
                formData.append("msg_id", id);

                fetch(url, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log(`下架成功，ID: ${id}`);
                            // 更新畫面
                            window.location.reload();
                        } else {
                            throw new Error(`下架失敗，ID: ${id}`);
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        },


        //駁回 刪掉這筆資料 但不刪除該筆留言-----------------------
        deleteBtn(row) {
            // 顯示駁回彈窗
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

        deleteBatch(selectedIds) {
            console.log('進入 deleteBatch 方法');
            // 批次駁回操作，selectedIds 是選中的項目的ID陣列
            for (const id of selectedIds) {
                // 根據每個 ID 執行駁回操作
                const url = `${this.$store.state.phpPublicPath}deleteReportMsg.php`;
                const formData = new FormData();
                formData.append("msgrep_id", id);

                fetch(url, {
                    method: "POST",
                    body: formData,
                })
                    .then((response) => {
                        if (response.ok) {
                            console.log(`駁回成功，ID: ${id}`);
                            // 更新畫面等
                            window.location.reload();
                        } else {
                            throw new Error(`駁回失敗，ID: ${id}`);
                        }
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        },
        batchAction(actionType) {
            const selectedRows = this.$refs.selection.getSelection();
            if (selectedRows.length > 0) {
                let selectedIds;
                if (actionType === 'accept') {
                    // 提取選中的 msg_id
                    selectedIds = selectedRows.map(row => row.msg_id); 
                    // 執行批量下架
                    this.acceptBatch(selectedIds); 
                } else if (actionType === 'delete') {
                    // 提取選中的 msgrep_id
                    selectedIds = selectedRows.map(row => row.msgrep_id); 
                    // 執行批量駁回
                    this.deleteBatch(selectedIds); 
                }
            }
        }
    },

    //------------------------------------------------------------
    mounted() {
        // 先檢查資料格式是否符合DB規則
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
                if (json.length > 0) {
                    // 如果有資料，設定 hasData 為 true
                    this.hasData = true;
                    // 把陣列中每個物件都添加編號
                    for (let i = 0; i < json.length; i++) {
                        json[i].no = i + 1;
                    }
                    this.msgDate = json;
                } else {
                    alert("沒有被檢舉的留言！");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    },
};