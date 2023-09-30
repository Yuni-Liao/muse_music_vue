<template>
    <nav>
        <ul>
            <Menu accordion mode="vertical" active-name="1-2" :open-names="['0']" width="100%">
                <MenuItem name="0-1" to="/backend/memmgmt" type="primary" class="sidebar_item">會員管理</MenuItem>
                <Submenu name="1" style="margin: -30px 0;">
                    <template #title>
                        歌曲管理
                    </template>
                    <MenuItem name=" 1-1" to="/backend/songreview">歌曲審核管理</MenuItem>
                    <!-- <MenuItem name="1-2" to="/backend/songtype">歌曲類別管理</MenuItem> -->
                </Submenu>
                <Submenu name="2" style="margin: -50px 0;">
                    <template #title>
                        網站資訊管理
                    </template>
                    <MenuItem name="2-1" to="/backend/homecarousel">首頁輪播管理</MenuItem>
                    <MenuItem name="2-2" to="/backend/museevent">音樂快訊管理</MenuItem>
                    <MenuItem name="2-3" to="/backend/rankmgmt">排行榜管理</MenuItem>
                    <MenuItem name="2-4" to="/backend/robotmgmt">機器人管理</MenuItem>
                </Submenu>
                <Submenu name="3" style="margin: -30px 0;">
                    <template #title>
                        周邊販售管理
                    </template>
                    <MenuItem name="3-1" to="/backend/ordermgmt">訂單管理</MenuItem>
                    <MenuItem name="3-2" to="/backend/prodmgmt">商品管理</MenuItem>
                </Submenu>
                <MenuItem name="0-2" to="/backend/msgmgmt" class="sidebar_item">檢舉留言管理</MenuItem>
                <MenuItem name="0-3" to="/backend/admmgmt" class="sidebar_item">管理員帳號管理</MenuItem>
            </Menu>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
@import "~@/assets/scss/layout/backendSideBar.scss";
</style>

<!-- <script>
export default {
    data() {
        return {
            listName: [
                { title: '會員管理', link: '#' },
                { subMenu: '歌曲管理', link: '#' },
                { subMenu: '網站資訊管理', link: '#' },
                { subMenu: '周邊販售管理', link: '#' },
                { title: '檢舉留言管理', link: '#' },
                { title: '管理員帳號管理', link: '#' }
            ],
        }
    },
}
</script> -->



            <!-- <Menu active-name="1-2" :open-names="['1']">
                <Submenu name="4">
                    <template #title>
                        Navigation Three
                    </template>
                    <MenuItem name="4-1">Option 9</MenuItem>
                    <MenuItem name="4-2">Option 10</MenuItem>
                    <MenuItem name="4-3">Option 11</MenuItem>
                    <MenuItem name="4-4">Option 12</MenuItem>
                </Submenu>
            </Menu> -->