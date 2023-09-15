<template>
    <nav>
        <ul><router-link v-for="(list, index) in listName" :key="index" :to="list.link">
                <li>
                    {{ list.title }}
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/layout/backendSideBar.scss";
</style>

<script>
export default {
    data() {
        return {
            listName: [
                { title: '會員管理', link: '#' },
                { title: '歌曲管理', link: '#' },
                { title: '網站資訊管理', link: '#' },
                { title: '周邊販售管理', link: '#' },
                { title: '檢舉留言管理', link: '#' },
                { title: '管理員帳號管理', link: '#' }
            ],
        }
    },
    // methods: {
    //     //     logOut() {
    //     //         alert('登出');
    //     //     }
    // },
}
</script>
