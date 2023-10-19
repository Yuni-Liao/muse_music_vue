<template>
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
                <div class="summary">
                    <p>「Muse」匯聚來自世界各地的音樂創作者。</p>
                    <p>無論是流行、古典、搖滾或電子，我們的音樂庫都能滿足您各種音樂胃口。</p>
                    <p>透過「Muscic Wave」，您將探索原創音樂的美妙，享受音樂與靈魂共振的感動。</p>
                    <p>加入我們，一同沉浸於音樂的海洋，感受無限的音樂魅力！</p>
                </div>

                <h2>謬思創作者．Our Partner</h2>
                <div class="partnerwrap">
                    <div class="partnerwall" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
                        <div class="partnerwrapper" :class="{ 'active': isActive }">
                            <div v-for="(item, index) in memList" :key="index" class="partnerpic">
                                <router-link :to="`/home/profilepage/${item.mem_id}`">
                                    <img :src="`${publicPath}dataimage/member/${item.mem_pic}`" :alt="item.mem_id">
                                </router-link>
                            </div>
                        </div>

                        <div class="partnerwrapper" :class="{ 'active': isActive }">
                            <div v-for="(item, index) in memList" :key="index" class="partnerpic">
                                <router-link :to="`/home/profilepage/${item.mem_id}`">
                                    <img :src="`${publicPath}dataimage/member/${item.mem_pic}`" :alt="item.mem_id">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="faqlist">
            <h2>常見問題．FAQ</h2>
            <div v-for="(item, index) in faqArray" :key="index" class="faq" :id="`faq${index}`">
                <!-- Q -->
                <div class="question" @click="toggleQuestion(index)">
                    <div class="faqtitle">Q：</div>
                    <div class="faqcontent">{{ item.que }}</div>
                    <button class="arrow">
                        <fontAwesome v-if="!item.open" :icon="['fa', 'angle-down']" />
                        <fontAwesome v-else :icon="['fa', 'angle-up']" />
                    </button>
                </div>
                <!-- A -->
                <div class="answer" v-if="item.open">
                    <div class="faqtitle">A：</div>
                    <div class="faqcontent">{{ item.ans }}</div>
                </div>
            </div>
        </div>

        <h2>聯絡謬思．Contact MUSE</h2>
        <form class="contact" @submit.prevent="submitForm">
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
                    <option value="1">會員權限</option>
                    <option value="2">會員個人主頁</option>
                    <option value="3">會員訂單</option>
                    <option value="4">疑難解答</option>
                    <option value="5">其他回饋</option>
                </select>
            </div>
            <div class="describe">
                <span>說明</span>
                <textarea></textarea>
            </div>
            <div><input type="submit" value="提交" class="contactbtn obj_Rounded"></div>
        </form>
    </div>
</template>


<style scoped lang="scss">
@import "~@/assets/scss/page/about.scss";
</style>
<script src="./js/AboutView.js"></script>
