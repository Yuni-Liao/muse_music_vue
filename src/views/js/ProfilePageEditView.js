export default {
  // 重推again
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,
      activeTab: 4,
      currentStep: 0,
      member: {
        coverimgURL: require(`/public/dataimage/member/1-2.jpg`),
        profileImgURL: require(`/public/dataimage/member/1-1.jpg`),
        name: "Anonyous",
        introduction:
          "桃園人，喜歡古典樂，最近嘗試個人創作，將古典樂結合搖滾，如果各位還喜歡，請追蹤我會不定時更新創作，謝謝支持~~~",
        location: "",
        socialMedia: "",
        privacy: "公開",
      },

      songs: [
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },

        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "你是我的唯一 ft. 邱比特",
          description:
            "《你是我的唯一》是一首充滿浪漫和溫馨氛圍的流行歌曲，和知名製作人邱比特組合「夢幻之音」打造。歌曲以柔和的鋼琴旋律開篇，隨後逐漸引入輕柔的吉他和溫暖的弦樂編排。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
      ],
      albumns: [
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "愛你是最美好的一件事",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "愛你是最美好的一件事",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "愛你是最美好的一件事",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
        {
          title: "愛",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。",
          privacy: "公開",
          date: "2023-08-22",
          time: "03:58",
        },
        {
          title: "愛你是最美好的一件事",
          description:
            "《愛》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。",
          privacy: "私人",
          date: "2023-07-24",
          time: "04:30",
        },
      ],
    };
  },
  methods: {
    changeTab(tabNumber) {
      this.activeTab = tabNumber;
    }, //封面相片
    coverImgChange(e) {
      let file = e.target.files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.coverloadImage);
    },
    coverloadImage(e) {
      this.member.coverimgURL = e.target.result;
    },
    //頭貼相片
    profileImgChange(e) {
      let file = e.target.files[0];
      let readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.profileloadImage);
    },
    profileloadImage(e) {
      this.member.profileImgURL = e.target.result;
    },
  },
};
