<template>
  <label for="name" class="label"></label>

  <form class="form1">
    <div class="form-group">
      <label for="name" class="label" color="white" margin-top="100px"
        >歌曲編輯</label
      >
      <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 60px 0; background-color: black">
          <img
            class="songpic"
            alt="Update Image"
            src="@/assets/image/icon/upload.jpg"
          />
          <p style="color: white">上傳封面相片</p>
          <br />
          <p style="color: white">
            ☸ 建議尺寸:500x500px以上，圖片檔案大小不可超過2MB
          </p>
        </div>
      </Upload>
    </div>

    <div class="form-group">
      <label for="song" class="label">輸入歌曲名稱</label>
      <input type="text" id="song" v-model="song" placeholder="愛的戀行曲" />
    </div>
    <div class="form-group">
      <label for="songinfo" class="label">輸入歌曲介紹</label>
      <input
        type="text"
        id="songinfo"
        v-model="songinfo"
        placeholder="《愛的戀行曲》是一張充滿情感和故事性的虛構音樂專輯，由知名音樂製作人華莉絲（Valice）精心打造。專輯集結了不同風格的歌曲，編織出一個關於愛情的動人音樂旅程。
      專輯的封面展示了一對戀人手牽手站在黃昏的海灘上，呼應了專輯的愛情主題。封面的色調溫暖柔和，透露出一種浪漫與渴望。
      專輯的第一首單曲《逐夢的翅膀》以輕快的節奏和韻律，講述著一段追逐夢想的愛情故事。歌詞中描繪了主人公們攜手共同追求夢想的場景，勾勒出愛情的堅韌和力量。
      第二首歌曲《記憶迴旋》則走著較為抒情的風格，講述著一對戀人在時光中的回憶。歌詞中穿插著過去和現在的情景，勾勒出愛情中的甜蜜瞬間和遺憾。
      專輯的高潮之一是歌曲《愛的軌跡》。這首歌以深情的鋼琴伴奏和壯闊的管弦樂編排，講述了一段跨越時空的愛情故事。歌詞中描寫了主人公們在不同的世界中相愛相守的場景，感人至深。
      專輯收尾的歌曲《永恆的約定》將情感拉到高潮，歌詞中呼應著專輯的主題，訴說著愛情的永恆和承諾。
      《愛的戀行曲》專輯透過音樂，講述了不同愛情故事，從追夢、回憶、跨越時空到永恆的愛情，營造出一個充滿情感和韻律的音樂世界，讓人感受到愛情的力量和魅力。"
      />
    </div>
    <div class="form-group">
      <label for="privacy" class="label">瀏覽權限</label>
      <select id="privacy" v-model="privacy">
        <option value="公開">公開</option>
        <option value="私人">私人</option>
      </select>
    </div>
  </form>
  <router-link to="profilepageedit"
    ><button class="button" style="margin-bottom: 150px" @click="complete">
      取消變更
    </button></router-link
  >

  <router-link to="profilepageedit"
    ><button class="button" style="margin-bottom: 150px" @click="complete">
      儲存變更
    </button></router-link
  >
</template>

<style scoped lang="scss">
@import "~@/assets/scss/page/profilepageedit";
</style>
<script src="./js/ProfilePageEditView"></script>
