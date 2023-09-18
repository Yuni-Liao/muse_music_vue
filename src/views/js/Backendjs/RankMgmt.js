export default {
    data() {
        return {
            columns: [
                {
                    title: 'No',
                    key: 'no',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '會員編號',
                    key: 'memNo',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '單曲名稱',
                    key: 'songName',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'editBtn',
                    width: 300,
                    align: 'center'
                }
            ],
            data: [
                {
                    no: 1,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 2,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 3,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 4,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 5,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 6,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 7,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 8,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 9,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
                {
                    no: 10,
                    memNo: 'P-00001',
                    songName: '八里香'
                },
            ],
        }
    },
    methods: {
        editBtn(row) {
            alert('編輯');
        },
    },
}

