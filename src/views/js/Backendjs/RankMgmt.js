import e from "view-ui-plus/dist/locale/zh-TW"

export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            editSingleSongRank: false,
            editAlbumRank: false,
            editSLRank: false,
            selectedSongRank: {
                rank_id: ''
            },
            selectedAlbumRank: {
                rank_id: ''
            },
            selectedSLRank: {
                rank_id: ''
            },
            selectedSong: {
                s_id: ''
            },
            selectedAlbum: {
                alb_id: ''
            },
            selectedSL: {
                sl_id: ''
            },
            allSong: [], // 全部歌曲暫存陣列
            allAlbum: [],// 全部專輯暫存陣列
            allSL: [],
            songRankGroup: [], // 渲染單曲排行資料的暫存陣列
            albumRankGroup: [], // 渲染專輯排行資料的暫存陣列
            SLRankGroup: [],
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
            SLColumns: [
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
                    title: '歌單名稱',
                    key: 'sl_name',
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
            this.editSLRank = false
            this.selectedAlbumRank = row.rank_id
            console.log("Row alb_name:", row.alb_name);
            console.log("Row alb_id:", row.alb_id);
            console.log(this.selectedAlbumRank)
        },
        editSongBtn(row) {
            this.editSingleSongRank = true
            this.editAlbumRank = false
            this.editSLRank = false
            this.selectedSongRank = row.rank_id
            console.log("Row s_name:", row.s_name);
            console.log("Row s_id:", row.s_id);
            console.log(this.selectedSongRank)
        },
        editSLBtn(row) {
            this.editSLRank = true
            this.editAlbumRank = false
            this.editSingleSongRank = false
            this.selectedSLRank = row.rank_id;
            console.log("Row sl_name:", row.sl_name);
            console.log("Row sl_id:", row.sl_id);
            console.log(this.selectedSLRank);
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
        saveSLBtn() {
            const selectedSLId = this.selectedSL.sl_id;
            const SLExists = this.SLRankGroup.some(SL => SL.sl_id === selectedSLId);
            if (!SLExists) {
                const url = `${this.$store.state.phpPublicPath}editSLRankMgmt.php`;
                let headers = {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                };
                const slDataToSend = {
                    rank_id: this.selectedSLRank,
                    sl_id: this.selectedSL.sl_id,
                }
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(slDataToSend),
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
                console.log(slDataToSend);
            } else {
                alert("此歌單已在排行榜內，請選擇不同歌單");
            }
        },
        closeBtn() {
            this.editSingleSongRank = false
            this.editAlbumRank = false
            this.editSLRank = false
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

        // 歌單排行渲染
        const slurl = `${this.$store.state.phpPublicPath}postSLRankMgmt.php`;
        let slHeaders = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        fetch(slurl, {
            method: "POST",
            headers: slHeaders,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("取得 data 失敗");
                }
            })
            .then((json) => {
                this.SLRankGroup = json;
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

          // fetch 全部歌單
          const fetchAllSL = () => {
            const apiURL = new URL(
                `${this.$store.state.phpPublicPath}getAllSL.php`
            );

            fetch(apiURL)
                .then((res) => res.json())
                .then((res) => (this.allSL = res))
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        fetchAllSL();
    },
}
