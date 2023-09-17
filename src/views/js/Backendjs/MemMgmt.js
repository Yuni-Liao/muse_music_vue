export default {
    data() {
        return {
            columns: [

                {
                    title: '會員編號',
                    key: 'no',
                    align: 'center',
                    width: 100,
                },
                {
                    title: '帳號',
                    key: 'acc',
                    align: 'center',
                    width: 200,
                },
                {
                    title: '使用者名稱',
                    key: 'name',
                    align: 'center',
                    width: 200,
                },
                {
                    title: '追蹤數',
                    key: 'follow',
                    align: 'center',
                    width: 100,
                },
                {
                    title: '已上傳歌曲',
                    key: 'upload_song',
                    align: 'center',
                    width: 150,
                }, {
                    title: '已建立歌單',
                    key: 'createdSongList',
                    align: 'center',
                    width: 150,
                }, {
                    title: '權限管理',
                    key: 'permission ',
                    align: 'center',
                    width: 150,
                }
            ],
            data: [
                {
                    no: 1,
                    acc: 'iamhotgirl@gmail',
                    name: 'John Brown',
                    follow: 18,
                    upload_song: 214 + ' 個',
                    createdSongList: 10 + ' 個',
                },
                {
                    no: 2,
                    acc: 'yu222@gmail',
                    name: 'Jim Green',
                    follow: 24,
                    upload_song: 659 + ' 個',
                    createdSongList: 200 + ' 個',
                },
                {
                    no: 3,
                    acc: 'soso@gmail',
                    name: 'Joe Black',
                    follow: 30,
                    upload_song: 2 + ' 個',
                    createdSongList: 0 + ' 個',
                },
                {
                    no: 4,
                    acc: '10522@gmail',
                    name: 'Jon Snow',
                    follow: 26,
                    upload_song: 29 + ' 個',
                    createdSongList: 1 + ' 個',
                },
                {
                    no: 5,
                    acc: 'yuni777@gmail',
                    name: 'John Brown',
                    follow: 18,
                    upload_song: 94 + ' 個',
                    createdSongList: 5 + ' 個',
                },
            ]
        }
    },
}