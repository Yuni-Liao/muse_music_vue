export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            columns: [
                {
                    title: 'No',
                    key: 'allSongNo',
                    width: 230,
                    align: 'center'
                },
                {
                    title: '舊類別名稱',
                    key: 'oldTypeName',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '新類別名稱',
                    key: 'newTypeName',
                    width: 250,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editSongTypeBtn',
                    width: 250,
                    align: 'center'
                },
            ],
            data: [
                {
                    allSongNo: 1,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 2,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 3,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 4,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 5,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 6,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
                {
                    allSongNo: 7,
                    oldTypeName: '輕鬆舒眠',
                    newTypeName: '放鬆一下',
                },
            ],
            singleSongType: [
                {
                    title: 'No',
                    key: 'singleSongNo',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '歌曲名稱',
                    key: 'SongName',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '會員帳號',
                    key: 'memAcc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '歌曲類別',
                    key: 'singleSongType',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '歌曲狀態',
                    key: 'singleSongStatus',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '審核者',
                    key: 'adminAcc',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '審核時間',
                    key: 'acceptTime',
                    width: 180,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editSingleSongBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            singleSongData: [
                {
                    singleSongNo: 1,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 2,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 3,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 4,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 5,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 6,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                },
                {
                    singleSongNo: 7,
                    SongName: '夜曲',
                    memAcc: 'yuni70217',
                    singleSongType: '輕鬆',
                    singleSongStatus: '已上傳',
                    adminAcc: 'admin01',
                    acceptTime: '2023-09-15 09:15:00'
                }
            ],
        }
    },
    methods: {
        songTypeSearchBtn() {
            alert('搜索歌曲類別');
        },
        editSongTypeBtn(row) {
            alert('調整歌曲類別');
        },
        editSingleSongBtn(row) {
            alert('調整單曲類別');
        }
    }
}