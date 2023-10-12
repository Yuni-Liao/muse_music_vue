import e from "view-ui-plus/dist/locale/zh-TW"

export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            editSingleSongRank: false,
            editAlbumRank: false,
            selectedSongRank: {
                rank_id: ''
            },
            selectedAlbumRank: {
                rank_id: ''
            },
            selectedSong: {
                s_id: ''
            },
            selectedAlbum: {
                alb_id: ''
            },
            allSong: [], // 全部歌曲暫存陣列
            allAlbum: [],// 全部專輯暫存陣列
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
        editAlbumBtn(row) {
            this.editAlbumRank = true
            this.editSingleSongRank = false
            this.selectedAlbumRank = row.rank_id
            console.log("Row alb_name:", row.alb_name);
            console.log("Row alb_id:", row.alb_id);
            console.log(this.selectedAlbumRank)
        },
        editSongBtn(row) {
            this.editSingleSongRank = true
            this.editAlbumRank = false
            this.selectedSongRank = row.rank_id
            console.log("Row s_name:", row.s_name);
            console.log("Row s_id:", row.s_id);
            console.log(this.selectedSongRank)
        },
        saveSongBtn() {
            const selectedSongId = this.selectedSong.s_id;
            const songExists = this.songRankGroup.some(song => song.s_id === selectedSongId);
            if (!songExists) {
                const url = `${this.$store.state.phpPublicPath}editSongRankMgmt.php`;
                let headers = {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                };
                const dataToSend = {
                    rank_id: this.selectedSongRank,
                    s_id: this.selectedSong.s_id,
                }
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
            } else {
                alert("此歌曲已在排行榜內，請選擇不同歌曲");
            }
        },
        saveAlbumBtn() {
            // 簡易的判斷如果畫面上已經有相同專輯就不能再新增,要挑別張專輯
            const selectedAlbumId = this.selectedAlbum.alb_id;
            const albumExists = this.albumRankGroup.some(album => album.alb_id === selectedAlbumId);
            if (!albumExists) {
                const url = `${this.$store.state.phpPublicPath}editAlbumRankMgmt.php`;
                let headers = {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                };
                const albDataToSend = {
                    rank_id: this.selectedAlbumRank,
                    alb_id: this.selectedAlbum.alb_id,
                }
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(albDataToSend),
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
                console.log(albDataToSend);
            } else {
                alert("此專輯已在排行榜內，請選擇不同專輯");
            }
        },
        closeBtn() {
            this.editSingleSongRank = false
            this.editAlbumRank = false
        },
    },
    mounted() {
        //先檢查資料格式是否符合DB規則
        // 單曲排行渲染
        const url = `${this.$store.state.phpPublicPath}postSongRankMgmt.php`;
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
        const alburl = `${this.$store.state.phpPublicPath}postAlbumRankMgmt.php`;
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
        // fetch 全部單曲
        const fetchAllSingleMusic = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAllSingleMusic.php`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => (this.allSong = res))
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchAllSingleMusic();
        // fetch 全部專輯
        const fetchAllAlbum = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAllAlbum.php`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => (this.allAlbum = res))
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchAllAlbum();
    },
}
