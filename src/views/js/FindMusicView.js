
import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";

export default {
    components: { 
        PlayBtnBig, 
        AddFavBtn, 
        AddSlBtn, 
        ShareBtn, 
        ReportBtn, 
        LikeMesBtn 
    },
    data() {
        return {
            songs: [
                {
                    id: 1,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                    singer: "Lisa",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 2,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                    singer: "Rose",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 3,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                    singer: "Apple Apple",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 4,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                    singer: "Cat Dog",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 5,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                    singer: "Ruby",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 6,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                    singer: "Lisa",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 7,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                    singer: "Rose",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 8,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                    singer: "Apple Apple",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 9,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                    singer: "Cat Dog",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                },
                {
                    id: 10,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                    singer: "Ruby",
                    time: "03:00",
                    link: "profilepage",
                    showMoreBtn: false,
                }
            ]
        }
    },
    methods: {
        toggleMoreBtn(albumItem) {
            albumItem.showMoreBtn = !albumItem.showMoreBtn;
        },
        closeMoreBtn(albumItem) {
            albumItem.showMoreBtn = false;
        }
    }
}