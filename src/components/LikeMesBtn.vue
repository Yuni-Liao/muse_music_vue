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
            messages: [
                {
                    id: 1,
                    userPic: "userpic1.png",
                    userName: "Euterpe",
                    date: "2023-08-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "12"
                },
                {
                    id: 2,
                    userPic: "userpic2.png",
                    userName: "Auterpe",
                    date: "2023-06-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "24"
                },
                {
                    id: 3,
                    userPic: "userpic3.png",
                    userName: "Zuterpe",
                    date: "2023-04-23",
                    message: "dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "33"
                },
                {
                    id: 4,
                    userPic: "userpic1.png",
                    userName: "Jisoo",
                    date: "2023-07-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    like: "666"
                },
                {
                    id: 5,
                    userPic: "userpic2.png",
                    userName: "Lisa",
                    date: "2023-05-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore.",
                    like: "999"
                },
                {
                    id: 6,
                    userPic: "userpic3.png",
                    userName: "Rose",
                    date: "2023-03-23",
                    message: " rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "888"
                }
            ],
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
}

</script>

<style scoped lang="scss">
#LikeMesBtn {
    @include music_btn_circle(35px);
    background-color: $tp;
    border: 1px solid $white;
}

#LikeMesBtn.active {
    background-color: $green; /* 这里可以设置喜欢状态的背景颜色 */
}
</style>
