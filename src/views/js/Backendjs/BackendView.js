import BackendHeader from '../../../components/Backend/BackendHeader.vue'
import BackendSideBar from '../../../components/Backend/BackendSideBar.vue'

export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            name: 'Backend',
        }
    },
    components: {
        BackendHeader,
        BackendSideBar,
    }
}