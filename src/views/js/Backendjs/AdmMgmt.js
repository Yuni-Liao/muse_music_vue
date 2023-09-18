export default {
    data() {
        return {
            columns: [

                {
                    title: '編號',
                    key: 'no',
                    width: 80,
                    align: 'center'
                },
                {
                    title: '管理員姓名',
                    key: 'name',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '管理員帳號',
                    key: 'acc',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '管理員密碼',
                    key: 'adminPsw',
                    width: 300,
                    align: 'center'
                },
                {
                    title: '操作',
                    slot: 'deleteBtn',
                    width: 80,
                    align: 'center'
                }
            ],
            data: [
                {
                    no: 1,
                    acc: 'admin01',
                    name: 'John Brown',
                    adminPsw: '129usd%@',
                },
                {
                    no: 2,
                    acc: 'admin02',
                    name: 'John Brown',
                    adminPsw: '129usd%@',
                },
                {
                    no: 3,
                    acc: 'admin03',
                    name: 'John Brown',
                    adminPsw: '129usd%@',
                },
                {
                    no: 4,
                    acc: 'admin04',
                    name: 'John Brown',
                    adminPsw: '329usd%@',
                },
                {
                    no: 5,
                    acc: 'admin05',
                    name: 'John Brown',
                    adminPsw: '129usd%@',
                },
            ],
        }
    },
    methods: {
        createAdmin() {
            alert('新增管理員');
        },
        deleteBtn() {
            alert('刪除管理員');
        },
    },
}

