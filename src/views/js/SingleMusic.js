import PlayBtnBig from "@/components/PlayBtnBig.vue";
import AddFavBtn from "@/components/AddFavBtn.vue";
import AddSlBtn from "@/components/AddSlBtn.vue";
import ShareBtn from "@/components/ShareBtn.vue";
import ReportBtn from "@/components/ReportBtn.vue";
import LikeMesBtn from "@/components/LikeMesBtn.vue";

export default {
    components: { PlayBtnBig, AddFavBtn, AddSlBtn, ShareBtn, ReportBtn, LikeMesBtn },
    data() {
        return {
            //歌曲清單
            songs: [
                {
                    id: 1,
                    songPic: "songPic.png",
                    bannerPic: "banner_songPic1.png",
                    songName: "Say It",
                    singer: "George Makridis, Hannah Hampton",
                    singerPic: "singerPic.png",
                    albumPic: "albumPic.png",
                    album: "Countlary",
                    date: "2023-08-22",
                    albumInf: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio mollitia explicabo natus quidem sequi illo?",
                    songInf: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum placeat quia?",
                    type1: "西洋語系",
                    type2: "嘻哈",
                    type3: "派對",
                    time: "03:58",
                    played: "5,223",
                    liked: "68",
                    shared: "39"
                }
            ],
            messages: [
                {
                    id: 1,
                    userPic: "userpic1.png",
                    userName: "Euterpe",
                    date: "2023-08-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.",
                    like: "12",
                    showReportBtn: false
                },
                {
                    id: 2,
                    userPic: "userpic2.png",
                    userName: "Auterpe",
                    date: "2023-06-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem .",
                    like: "24",
                    showReportBtn: false
                },
                {
                    id: 3,
                    userPic: "userpic3.png",
                    userName: "Zuterpe",
                    date: "2023-04-23",
                    message: "dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore, facilis nam tenetur unde.Lorem ",
                    like: "33",
                    showReportBtn: false
                },
                {
                    id: 4,
                    userPic: "userpic1.png",
                    userName: "Jisoo",
                    date: "2023-07-23",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    like: "666",
                    showReportBtn: false
                },
                {
                    id: 5,
                    userPic: "userpic2.png",
                    userName: "Lisa",
                    date: "2023-05-23",
                    message: "facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor ipsum dolore.",
                    like: "999",
                    showReportBtn: false
                }
            ],
            otherSongs: [
                {
                    id: 1,
                    albumPic: "othaersong1.png",
                    name: "Fly Like",
                },
                {
                    id: 2,
                    albumPic: "othaersong2.png",
                    name: "Tired",
                },
                {
                    id: 3,
                    albumPic: "othaersong3.png",
                    name: "Want To Go Home",
                },
                {
                    id: 4,
                    albumPic: "othaersong1.png",
                    name: "Sleep",
                },
                {
                    id: 5,
                    albumPic: "othaersong2.png",
                    name: "Bed",
                }
            ],
            showAllMessages: true,
            showAllSongs: true,
            showReportBtn: false,
        };
    },
    methods: {
        toggleMessages() {
            this.showAllMessages = !this.showAllMessages;
        },
        toggleSongs() {
            this.showAllSongs = !this.showAllSongs;
        },
        toggleReportBtn(messageItem) {
            messageItem.showReportBtn = !messageItem.showReportBtn;
        },
    },
};