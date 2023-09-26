import FolBtnBig from '@/components/FolBtnBig.vue';

export default {
    component: {
        FolBtnBig,
    },
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
            foundObject:{},
            infoList: [
                {
                    id: 0,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',

                },
                {
                    id: 1,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 2,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 3,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 4,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 5,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 6,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 7,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
                {
                    id: 8,
                    img: 'activity01.png',
                    title: 'Rosalyn Live in Taipei w/ 溫蒂漫步 Wendy Wander !',
                    date: '2023年5月26日 / 星期五 / 19:00',
                    place: '台北市・THE WALL 公館',
                    singer: 'Rosalyn',
                },
            ]
        }
    },

    methods: {
        fetchActivityDetail() {
            
            const activitytId = this.$route.params.id;
            
            this.activity = getActivityById(activitytId);
        },
    },
    mounted() {
        const idToFind = parseInt(this.$route.params.id);
        this.foundObject = this.infoList.find(item => item.id === idToFind);
    },
}