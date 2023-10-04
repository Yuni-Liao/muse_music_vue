<template>
    <!-- <form action="about.php" method="POST"> -->
    <div class="about">
        <!-- <h1>這是關於謬思頁面</h1> -->
        <div class="banner">
            <!-- banner圖 -->
            <div class="bannerpic"><img :src="`${publicPath}image/About/aboutBanner.png`" alt="aboutBanner"></div>
            <!-- banner圖文字 -->
            <div class="bannertext en">Making Waves</div>
            <div class="bannertext ch">音樂謬思，就是音樂的發生地</div>
        </div>

        <div class="wrapper">
            <div class="wrap">
                <!-- 關於我們描述 -->
                <p class="summary">「Muse」匯聚來自世界各地的音樂創作者。<br>無論是流行、古典、搖滾或電子，我們的音樂庫都能滿足您各種音樂胃口。<br>透過「Muscic
                    Wave」，您將探索原創音樂的美妙，享受音樂與靈魂共振的感動。<br>加入我們，一同沉浸於音樂的海洋，感受無限的音樂魅力！</p>

                <h2>謬思創作者．Our Partner</h2>
                <div class="partnerwrap">
                    <div class="partnerwall" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
                        <div class="partnerwrapper" :class="{ 'active': isActive }">
                            <div v-for="(item, user) in userList" :key="user" class="partnerpic">
                                <router-link :to="`/home/profilepage`">
                                    <img :src="require(`/public/image/About/${item.prodPic}`)" :alt="item.id">
                                </router-link>
                            </div>
                        </div>

                        <div class="partnerwrapper" :class="{ 'active': isActive }">
                            <div v-for="(item, user) in userList" :key="user" class="partnerpic">
                                <router-link :to="`/home/profilepage`">
                                    <img :src="require(`/public/image/About/${item.prodPic}`)" :alt="item.id">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <h2 id="faq">常見問題．FAQ</h2>
        <div v-for="(item, index) in faqList" :key="index" class="faq" :id="`faq${index}`">
            <!-- Q -->
            <div class="question" @click="toggleQuestion(index)">
                <div class="faqtitle">Q：</div>
                <div class="faqcontent" id="que">{{ item.question }}</div>
                <button class="arrow">
                    <fontAwesome v-if="!item.open" :icon="['fa', 'angle-down']" />
                    <fontAwesome v-else :icon="['fa', 'angle-up']" />
                </button>
            </div>
            <!-- A -->
            <div class="answer" v-if="item.open">
                <div class="faqtitle">A：</div>
                <div class="faqcontent" id="ans">{{ item.answer }}</div>
            </div>
        </div>

        <h2>聯絡謬思．Contact MUSE</h2>
        <form class="contact">
            <div class="email"> 
                <span>信箱*</span>
                <input type="email" required>
            </div>
            <div class="text">
                <span>主旨*</span>
                <input type="text" required>
            </div>
            <div class="kind">
                <span>問題類型*</span>
                <select required>
                    <option value="">問題類型</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="describe">
                <span>說明</span>
                <textarea></textarea>
            </div>
            <div><input type="submit" value="提交" class="contactbtn obj_Rounded"></div>
        </form>
    </div>
<!-- </form> -->
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/about.scss";
</style>
<script src="./js/AboutView.js"></script>
