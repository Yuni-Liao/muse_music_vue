<template>
    <button id="LikeMesBtn" @click="LikeMesBtn()" :class="{ active: messageItem.isLiked }">
        <fontAwesome :icon="['fa', 'thumbs-up']" style="color: #ffffff" />
    </button>
</template>
<script>
export default {
    name: "LikeMesBtn",
    props: {
        messageItem: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            messages:[],
            likeCount: 0,
        }
    },
    methods: {
        LikeMesBtn() {
            if (!this.messageItem.isLiked) {
                this.messageItem.like++;
            } else {
                this.messageItem.like--;
            }
            this.messageItem.isLiked = !this.messageItem.isLiked;
        },
    },
    mounted(){
        //this.sid = parseInt(this.$route.params.sid);
        //留言資訊 (fetch) messages:[]
        const fetchSingleMusicMsg = () => {
            const msgid = this.$route.params.msgid;
            const apiURL = new URL(
                `http://localhost/muse_music/public/api/getSingleMusicMsg.php?$msgid=${msgid}`
            );
            fetch(apiURL)
                .then(async (response) => {
                    this.messages = await response.json();
                })
                .catch((error) => {
                    console.error("發生錯誤:", error);
                });
        };
        // 執行 fetch
        fetchSingleMusicMsg();
    }
}

</script>

<style scoped lang="scss">
#LikeMesBtn {
    @include music_btn_circle(35px);
    background-color: $tp;
    border: 1px solid $white;
    line-height: $fh;
    align-content: center;
    justify-content: center;
    align-items: center;
}

#LikeMesBtn.active {
    background-color: $green; 
}
</style>
