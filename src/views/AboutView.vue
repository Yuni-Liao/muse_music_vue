<template>
    <div class="about">
        <!-- <h1>這是關於謬思頁面</h1> -->
        <div class="banner"><img src="/image/About/aboutBanner.png" alt="aboutBanner"></div>
        <div class="bannertext">Making Waves</div>
        <div class="bannertext">音樂謬思，就是音樂的發生地</div>

        <p class="summary">「Muse」匯聚來自世界各地的音樂創作者。
            無論是流行、古典、搖滾或電子，我們的音樂庫都能滿足您各種音樂胃口。
            透過「Muscic Wave」，您將探索原創音樂的美妙，享受音樂與靈魂共振的感動。
            加入我們，一同沉浸於音樂的海洋，感受無限的音樂魅力！</p>

        <h2>謬思創作者．Our Partner</h2>
        <div class="slider">
            <div class="slide">
                <div v-for="(item, user) in userList" :key="user" class="slide-item">
                    <img :src="require(`/public/image/About/${item.prodPic}`)" alt="item.id">
                </div>
            </div>
        </div>

        <h2>常見問題．FAQ</h2>
        <div v-for="(item, index) in faqList" :key="index" class="faq">
            <div class="question" @click="toggleQuestion(index)">
                <div class="faqtitle">Q：</div>
                <div class="faqcontent">{{ item.question }}</div>
            </div>
            <div class="answer" v-if="item.open">
                <div class="faqtitle">A：</div>
                <div class="faqcontent">{{ item.answer }}</div>
            </div>
        </div>

        <h2>聯絡謬思．Contact MUSE</h2>
        <form>

            信箱*<input type="email" required>
            主旨*<input type="text" required>
            問題類型*<select required>
                <option value="">問題類型</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            說明<textarea rows="14" cols="68"></textarea>
            <input type="submit" value="送出" class="btn_S_Border obj_Rounded">
        </form>

    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/about.scss";
</style>
<script src="./js/AboutView.js"></script>
