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
                    title: '來源',
                    key: 'source',
                    width: 100,
                    align: 'center'
                },
                {
                    title: '留言帳號',
                    key: 'msgAcc',
                    width: 150,
                    align: 'center',
                },
                {
                    title: '留言內容',
                    key: 'msgContent',
                    align: 'center',
                },
                {
                    title: '檢舉原因',
                    key: 'reason',
                    align: 'center'
                },
                {
                    title: '檢舉日期',
                    key: 'reasonDate',
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'acceptBtn',
                    width: 100,
                    align: 'center'
                },
                {
                    title: ' ',
                    slot: 'rejectBtn',
                    width: 100,
                    align: 'center'
                }
            ],
            data: [
                {
                    source: '音樂快訊',
                    msgAcc: 'yuni70217',
                    msgContent: 'Lisa瘋馬秀上空嗎?期待期待啦😍😍😍😍😍',
                    reason: '豬哥不要汙染Lisa!!!!',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '沒文化的人',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '粗鄙言論',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '他媽是多屌?講話很難聽',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '他媽是多屌?講話很難聽',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '他媽是多屌?講話很難聽',
                    reasonDate: '2023-09-15'
                },
                {
                    source: '歌曲',
                    msgAcc: 'yuni70217',
                    msgContent: '這首比我媽還屌ㄟ',
                    reason: '他媽是多屌?講話很難聽',
                    reasonDate: '2023-09-15'
                }
            ]
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
    }
}