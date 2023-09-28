<template>
    <div class="path_page">
        <div class="path_wrap">
            <h1 class="path_title" id="path_title">MUSE MUSIC</h1>
            <router-link to="/home">
                <div class="path_front_box">
                    <h3>前台</h3>
                </div>
            </router-link>
            <router-link to="/backendLogin">
                <div class="path_backend_box">
                    <h3>後台</h3>
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

    // RWD
    @include s {
        background-image: url("/public/image/Path/path_h5_bg.jpg");
        background-position: 60%;
    }

    .path_wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;

        // RWD
        @include s {
            justify-content: space-around;
        }

        .path_title {
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
            @include layout(100%);
            font-weight: 900;
            font-size: $superBig ;
            text-align: center;
            padding: 5%;
            color: transparent;
            background-image: linear-gradient(to right, $blue, $pink 100%);
            -webkit-background-clip: text;
            background-clip: text;
            text-shadow: -5.5px -5.5px 5px rgba(#fff, 0.3), 6.5px 6.5px 1px $green;

            // RWD
            @include s {
                text-shadow: -5.5px -5.5px 5px rgba(#fff, 0.3), 6.5px 6.5px 1px $white;
            }
        }

        .path_front_box,
        .path_backend_box {
            @include rect(300px);
            font-size: $big;
            border-radius: 100%;
            background: repeating-radial-gradient(circle,
                    #373781 0%,
                    #9e1243 1%,
                    $dark 2%);
            border: 4px solid $pink;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: .3s;

            // RWD
            @include s {
                font-size: $big;
                @include rect(150px);
                background: repeating-radial-gradient(circle,
                        #004D83 0%,
                        #075277 1%,
                        $dark 2%);
                border: 4px solid #e28583;
                color: rgb(246, 246, 181);
                font-weight: 600;
            }
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