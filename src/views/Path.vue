<template>
    <div class="path_page">
        <div class="path_wrap">
            <h1 id="path_title">MUSE MUSIC</h1>
            <router-link to="/home">
                <div class="path_front_box">
                    <span>前台</span>
                </div>
            </router-link>
            <router-link to="/backend">
                <div class="path_backend_box">
                    <span>後台</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.path_page {
    @include layout(100%);
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-image: url("/public/image/Path/path_bg.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-position: 100%;

    .path_wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        #path_title {
            width: 100%;
            font-size: $superBig;
            font-weight: 900;
            text-align: center;
            padding: 1.5%;
            color: transparent;
            background-image: linear-gradient(to right, $blue, $pink 100%);
            -webkit-background-clip: text;
            background-clip: text;
            text-shadow: -5.5px -5.5px 5px rgba(#fff, 0.3), 6.5px 6.5px 1px $green;
        }

        .path_front_box,
        .path_backend_box {
            @include rect(200px);
            font-size: $big;
            border-radius: 100%;
            /* background-image: linear-gradient(35deg, #373781, #9e1243 50%); */
            background: repeating-radial-gradient(circle,
                    #373781 0%,
                    #9e1243 1%,
                    $dark 2%);
            border: 4px solid $pink;
            color: $white;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: .3s;
        }

        .path_front_box:hover,
        .path_backend_box:hover {
            box-shadow: 10px 10px 20px #000;
            text-shadow: 15px 10px 10px #000;
            transition: .3s;
            animation: upup 1s infinite ease-in-out;
        }
    }
}

@keyframes upup {
    0% {
        transform: translateY(-10px);
    }

    50% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(-10px);
    }
}
</style>

<script>
export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            //
        }
    }
}
</script>