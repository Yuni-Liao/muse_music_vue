export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            songRankGroup: [], // 渲染單曲排行資料的暫存陣列
            albumRankGroup: [], // 渲染專輯排行資料的暫存陣列
            songColumns: [
                {
                    title: 'No',
                    key: 'rank_id',
                    width: 230,
                    align: 'center'
                },
                {
                    title: '會員編號',
                    key: 'mem_id',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '單曲名稱',
                    key: 's_name',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 250,
                    align: 'center'
                }
            ],
            albColumns: [
                {
                    title: 'No',
                    key: 'rank_id',
                    width: 230,
                    align: 'center'
                },
                {
                    title: '會員編號',
                    key: 'mem_id',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '專輯名稱',
                    key: 'alb_name',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 250,
                    align: 'center'
                }
            ],
        }
    },
    methods: {
        editBtn(row) {
            alert('編輯');
        },
        addRank() {
            alert('編輯排行');
        }
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        // 單曲排行渲染
        const url = `http://localhost/muse_music/public/api/postSongRankMgmt.php`;
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
                this.songRankGroup = json;
            })
            .catch((error) => {
                console.log(error.message);
            });

        // 專輯排行渲染
        const alburl = `http://localhost/muse_music/public/api/postAlbumRankMgmt.php`;
        let albHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        fetch(alburl, {
            method: "POST",
            headers: albHeaders,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("取得 data 失敗");
                }
            })
            .then((json) => {
                this.albumRankGroup = json;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

