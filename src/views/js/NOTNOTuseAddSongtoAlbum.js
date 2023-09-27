export default {
  data() {
    return {
      checked: 0,
      songs: [
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: false,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: false,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: true,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: false,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: false,
        },

        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
          isChecked: false,
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
          isChecked: false,
        },
      ],
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    },
    updateCount(e) {
      //console.log(e.target.checked);
      if (e.target.checked == true) {
        this.checked++;
      } else {
        this.checked--;
      }
    },
  },
};
