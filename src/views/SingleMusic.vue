<template>
    <main class="singleMusic">
        <!-- 上方大圖 -->
        <div class="banner">
            <div class="overlay"></div>
            <img class="backPic" src="/image/SingleMusic/banner_songPic2.png" alt="這裡放單曲名稱">
        </div>
        <!-- 以下是 1200px 內容區 -->
        <section class="inner">
            <div class="topInf">
                <div class="singlePic">
                    <img src="/image/SingleMusic/songPic.png" alt="這裡放單曲名稱">
                </div>
                <div class="singleInf">
                    <div class="song">
                        <h1 class="songName">Say It</h1>
                        <h2 class="singer">George Makridis, Hannah Hampton</h2>
                    </div>
                    <div class="iconBar">
                        <div class="countArea">
                            <div class="timeline">
                                <p>時長</p>
                                <p>03:58</p>
                            </div>
                            <div class="played">
                                <p>播放次數</p>
                                <p>5,223</p>
                            </div>
                            <div class="liked">
                                <fontAwesome :icon="['fa', 'heart']" style="color:  #fff;" />
                                <p>68</p>
                            </div>
                            <div class="shared">
                                <fontAwesome :icon="['fa', 'share']" style="color: #fff;" />
                                <p>39</p>
                            </div>
                        </div>
                        <div class="buttonArea">
                            <button class="share">
                                <fontAwesome :icon="['fa', 'share']" style="color:#252525;" />
                            </button>
                            <button class="add">
                                <fontAwesome :icon="['fa', 'plus']" style="color:#252525" />
                            </button>
                            <button class="like">
                                <fontAwesome :icon="['fa', 'heart']" style="color:#252525" />
                            </button>
                            <button class="play">
                                <fontAwesome :icon="['fa', 'play']" size="xl" style="color:#252525" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="mainInf">
                <div class="singerInf">
                    <div class="singer">
                        <div class="singerPic">
                            <img src="/image/SingleMusic/singerPic.png" alt="singer">
                        </div>
                        <p class="singerName">George Makridis, Hannah Hampton</p>
                    </div>
                    <div class="album">
                        <div class="albumPic">
                            <img src="/image/SingleMusic/albumPic.png" alt="album">
                        </div>
                        <p>專輯</p>
                        <p class="albumName">Countlary</p>
                    </div>
                    <div class="date">
                        <p>發布時間</p>
                        <p class="releasDate"></p>
                    </div>
                    <p class="albumInf">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident beatae dolorum repellendus
                        veniam aspernatur blanditiis quae, mollitia ea consequatur non eos. Accusantium sint distinctio
                        mollitia explicabo natus quidem sequi illo?
                    </p>
                </div>
                <div class="songInf">
                    <h3>歌曲介紹</h3>
                    <p class="aboutSong">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rem fuga, est ipsum corporis eum
                        ratione fugiat laudantium cum, dolore aut enim veritatis iure, nulla accusantium eaque nostrum
                        placeat quia?
                    </p>
                    <div class="songCat">
                        <fontAwesome :icon="['fa', 'tags']" style="color:#fff;" />
                        <p class="categorize lang">西洋語系</p>
                        <p class="categorize style">嘻哈</p>
                        <p class="categorize mood">派對</p>
                    </div>
                </div>
                <div class="messageBoard">
                    <p>留言板</p>
                    <div class="sendArea">
                        <input type="text">
                        <button class="send">
                            <fontAwesome :icon="['fa', 'paper-plane']" style="color:#74EBD5;" />
                        </button>
                    </div>
                    <div class="message">
                        <div class="infBar">
                            <div class="user">
                                <div class="pic">
                                    <img src="/image/SingleMusic/userpic1.png" alt="user">
                                    <p>Euterpe</p>
                                </div>
                            </div>
                            <p class="date">
                                2023-08-23
                            </p>
                            <button class="more">
                                <fontAwesome :icon="['fa', 'ellipsis-vertical']" style="color:#aaa;" />
                            </button>
                        </div>
                        <p class="txt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora aliquam quo rem dolor
                            ipsum dolore, facilis nam tenetur unde.
                        </p>
                        <div class="likeMes">
                            <p class="likeCount">12</p>
                            <button>
                                <fontAwesome :icon="['fa', 'thumbs-up']" style="color:#aaa;" />
                            </button>
                        </div>
                    </div>
                    <p>
                        查看更多
                        <fontAwesome :icon="['fa', 'angle-down']" style="color:#fff;" />
                    </p>
                </div>
                <div class="otherSong">
                    <div class="number">1</div>
                    <div class="songPic">
                        <img src="/image/SingleMusic/othaersong1.png" alt="othersong1">
                    </div>
                    <p class="songName">
                        Fly Like
                    </p>
                    <button>
                        <fontAwesome :icon="['fa', 'share']" style="color:#252525;" />
                    </button>
                    <button class="add">
                        <fontAwesome :icon="['fa', 'plus']" style="color:#252525" />
                    </button>
                    <button class="like">
                        <fontAwesome :icon="['fa', 'heart']" style="color:#252525" />
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped lang="scss">
@import "~@/assets/scss/page/_singlemusic.scss";
</style>
<script src="./js/SingleMusic.js"></script>