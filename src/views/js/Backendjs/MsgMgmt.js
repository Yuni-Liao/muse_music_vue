export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
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
                    title: '下架',
                    slot: 'acceptBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '駁回',
                    slot: 'rejectBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            msgDate:[],
            editBox: false,
        }
    },
    methods: {
        handleSelectAll(status) {
            this.$refs.selection.selectAll(status);
        },
        acceptBtn(row) {
            alert('下架');
        },
        rejectBtn(row) {
            alert('駁回');
        },
        allAccept() {
            alert('批次下架');
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