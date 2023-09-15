export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'allSongNo'
                },
                {
                    title: '舊類別名稱',
                    key: 'oldTypeName'
                },
                {
                    title: '新類別名稱',
                    key: 'newTypeName'
                },
                {
                    title: '操作',
                    slot: 'editSongTypeBtn'
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
            ],
            singleSongType: [
                {
                    title: 'No',
                    key: 'singleSongNo'
                },
                {
                    title: '歌曲名稱',
                    key: 'SongName'
                },
                {
                    title: '會員帳號',
                    key: 'memAcc'
                },
                {
                    title: '歌曲類別',
                    key: 'singleSongType'
                },
                {
                    title: '歌曲狀態',
                    key: 'singleSongStatus'
                },
                {
                    title: '審核者',
                    key: 'adminAcc'
                },
                {
                    title: '審核時間',
                    key: 'acceptTime'
                },
                {
                    title: '操作',
                    slot: 'editSingleSongBtn'
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
                }
            ],
        }
    },
    methods: {
        editSongTypeBtn(row) {
            alert('調整歌曲類別');
        },
        editSingleSongBtn(row) {
            alert('調整單曲類別');
        }
    }
}