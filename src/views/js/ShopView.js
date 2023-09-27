export default {
    data() {
        return {
            // 讓圖片 build 之後能顯示
            publicPath: process.env.BASE_URL,
            // 將 localStorage 儲存在 storage 變數中
            storage: localStorage,
            // 分類篩選
            items: [
                {
                    id: 1,
                    label: '所有商品',
                    kind: 'All',
                },
                {
                    id: 2,
                    label: '黑膠唱片',
                    kind: '黑膠唱片',
                },
                {
                    id: 3,
                    label: '錄音帶',
                    kind: '錄音帶',
                },
                {
                    id: 4,
                    label: '男藝人',
                    kind: '男藝人',
                },
                {
                    id: 5,
                    label: '女藝人',
                    kind: '女藝人',
                },
                {
                    id: 6,
                    label: '樂團團體',
                    kind: '樂團團體',
                }
            ],
            // 商品：product.json
            products: [
                {
                    id: 0,
                    //prodPic: require('/public/image/ShopImage/shop_album6.jpg'),
                    prodPic: "shop_album6.jpg",
                    prodName: "Bluemage 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-20",
                    kind: "樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Bluemage 黑膠|shop_album6.jpg|890",
                    singer: "Yoyo",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 錄音帶 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Yoyo之前是冬天的天涯 Yoyo之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 1,
                    //prodPic: require('/public/image/ShopImage/shop_album1.jpg'),
                    prodPic: "shop_album1.jpg",
                    prodName: "Killbeast 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-01",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Killbeast 黑膠|shop_album1.jpg|790",
                    singer: "Bling Bling",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Bling Bling之前是冬天的天涯 Bling Bling之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 2,
                    //prodPic: require('/public/image/ShopImage/shop_album2.jpg'),
                    prodPic: "shop_album2.jpg",
                    prodName: "西城男人 黑膠",
                    prodPrice: 1190,
                    inCart: 0,
                    date: "2023-01-02",
                    kind: "男藝人樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "西城男人 黑膠|shop_album2.jpg|1190",
                    singer: "西城男人",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "西城男人之前是冬天的天涯 西城男人之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 3,
                    //prodPic: require('/public/image/ShopImage/shop_album3.png'),
                    prodPic: "shop_album3.png",
                    prodName: "Party Time 錄音帶",
                    prodPrice: 590,
                    inCart: 0,
                    date: "2023-01-03",
                    kind: "樂團團體錄音帶",
                    link: "/ShopProdDetail",
                    value: "Party Time 錄音帶|shop_album3.png|590",
                    singer: "Gaga",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Gaga之前是冬天的天涯 Gaga之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 4,
                    //prodPic: require('/public/image/ShopImage/shop_album4.jpg'),
                    prodPic: "shop_album4.jpg",
                    prodName: "Rose 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-04",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Rose 黑膠|shop_album4.jpg|890",
                    singer: "Rose",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Rose之前是冬天的天涯 Rose之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 5,
                    //prodPic: require('/public/image/ShopImage/shop_album5.jpg'),
                    prodPic: "shop_album5.jpg",
                    prodName: "Over Over 黑膠",
                    prodPrice: 1290,
                    inCart: 0,
                    date: "2023-01-05",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Over Over 黑膠|shop_album5.jpg|1290",
                    singer: "Happy",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Mekka之前是冬天的天涯 Mekka之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 6,
                    //prodPic: require('/public/image/ShopImage/shop_album6.jpg'),
                    prodPic: "shop_album6.jpg",
                    prodName: "Blackmage 黑膠",
                    prodPrice: 1020,
                    inCart: 0,
                    date: "2023-01-06",
                    kind: "樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Blackmage 黑膠|shop_album6.jpg|1020",
                    singer: "Wendy Club",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Sun之前是冬天的天涯 Sun之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 7,
                    //prodPic: require('/public/image/ShopImage/shop_album7.jpg'),
                    prodPic: "shop_album7.jpg",
                    prodName: "KKOCK 黑膠",
                    prodPrice: 990,
                    inCart: 0,
                    date: "2023-01-07",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "KKOCK 黑膠|shop_album7.jpg|990",
                    singer: "Moon",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Moon之前是冬天的天涯 Moon之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 8,
                    //prodPic: require('/public/image/ShopImage/shop_album1.jpg'),
                    prodPic: "shop_album1.jpg",
                    prodName: "Cillbeast 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-08",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Cillbeast 黑膠|shop_album1.jpg|790",
                    singer: "Ban",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Ban之前是冬天的天涯 Ban之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 9,
                    //prodPic: require('/public/image/ShopImage/shop_album2.jpg'),
                    prodPic: "shop_album2.jpg",
                    prodName: "東城男子 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-09",
                    kind: "男藝人樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "東城男子 黑膠|shop_album2.jpg|790",
                    singer: "東城男子",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "東城男子之前是冬天的天涯 東城男子之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 10,
                    //prodPic: require('/public/image/ShopImage/shop_album3.png'),
                    prodPic: "shop_album3.png",
                    prodName: "Sleep Time 錄音帶",
                    prodPrice: 1290,
                    inCart: 0,
                    date: "2023-01-10",
                    kind: "樂團團體錄音帶",
                    link: "/ShopProdDetail",
                    value: "Sleep Time 錄音帶|shop_album3.png|1290",
                    singer: "Lili",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Lili之前是冬天的天涯 Lili之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 11,
                    //prodPic: require('/public/image/ShopImage/shop_album4.jpg'),
                    prodPic: "shop_album4.jpg",
                    prodName: "Lisa 黑膠",
                    prodPrice: 790,
                    inCart: 0,
                    date: "2023-01-11",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Lisa 黑膠|shop_album4.jpg|790",
                    singer: "Lisa",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Lisa之前是冬天的天涯 Lisa之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 12,
                    //prodPic: require('/public/image/ShopImage/shop_album5.jpg'),
                    prodPic: "shop_album5.jpg",
                    prodName: "Very Very 黑膠",
                    prodPrice: 1090,
                    inCart: 0,
                    date: "2023-01-12",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Very Very 黑膠|shop_album5.jpg|1090",
                    singer: "Yappy",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Happy之前是冬天的天涯 Happy之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 13,
                    //prodPic: require('/public/image/ShopImage/shop_album6.jpg'),
                    prodPic: "shop_album6.jpg",
                    prodName: "Pinkmage 黑膠",
                    prodPrice: 690,
                    inCart: 0,
                    date: "2023-01-13",
                    kind: "樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Pinkmage 黑膠|shop_album6.jpg|690",
                    singer: "Black & White",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Black & White之前是冬天的天涯 Black & White之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 14,
                    //prodPic: require('/public/image/ShopImage/shop_album7.jpg'),
                    prodPic: "shop_album7.jpg",
                    prodName: "VVOCK 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-14",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "VVOCK 黑膠|shop_album7.jpg|890",
                    singer: "VVOCK",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "VVOCK之前是冬天的天涯 VVOCK之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 15,
                    //prodPic: require('/public/image/ShopImage/shop_album1.jpg'),
                    prodPic: "shop_album1.jpg",
                    prodName: "Drop beast 黑膠",
                    prodPrice: 1190,
                    inCart: 0,
                    date: "2023-01-15",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Drop beast 黑膠|shop_album1.jpg|1190",
                    singer: "DJ Cool",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "DJ Cool之前是冬天的天涯 DJ Cool之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 16,
                    //prodPic: require('/public/image/ShopImage/shop_album2.jpg'),
                    prodPic: "shop_album2.jpg",
                    prodName: "北區女孩 黑膠",
                    prodPrice: 890,
                    inCart: 0,
                    date: "2023-01-16",
                    kind: "女藝人樂團團體黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "北區女孩 黑膠|shop_album2.jpg|890",
                    singer: "北區女孩",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 黑膠唱片LP黑膠 專輯 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "北區女孩之前是冬天的天涯 北區女孩之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 17,
                    //prodPic: require('/public/image/ShopImage/shop_album3.png'),
                    prodPic: "shop_album3.png",
                    prodName: "Show Time 錄音帶",
                    prodPrice: 990,
                    inCart: 0,
                    date: "2023-01-17",
                    kind: "樂團團體錄音帶",
                    link: "/ShopProdDetail",
                    value: "Show Time 錄音帶|shop_album3.png|990",
                    singer: "Show",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 錄音帶 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Show之前是冬天的天涯 Show之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 18,
                    //prodPic: require('/public/image/ShopImage/shop_album4.jpg'),
                    prodPic: "shop_album4.jpg",
                    prodName: "Jisso 黑膠",
                    prodPrice: 1090,
                    inCart: 0,
                    date: "2023-01-18",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Jisso 黑膠|shop_album4.jpg|1090",
                    singer: "Jisso",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 錄音帶 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Jisso之前是冬天的天涯 Jisso之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                },
                {
                    id: 19,
                    //prodPic: require('/public/image/ShopImage/shop_album5.jpg'),
                    prodPic: "shop_album5.jpg",
                    prodName: "Money Money 黑膠",
                    prodPrice: 1390,
                    inCart: 0,
                    date: "2023-01-19",
                    kind: "女藝人黑膠唱片",
                    link: "/ShopProdDetail",
                    value: "Money Money 黑膠|shop_album5.jpg|1390",
                    singer: "Moo",
                    prodNum: "RLP139",
                    prodInf: "● 商品條碼 4710149693495 ● 音樂類型 錄音帶 ● 發行公司 昆拾 ● 發行日期 2022/12/2 ● 內裝片數 1",
                    mainDesc: "Money之前是冬天的天涯 Money之後是春天的天堂 當女人唱歌就該像個男人 男人的胸膛與女人的懷抱之間 這一片春天花會開...",
                    list: "● 原始母帶製作 ● 德國Optimal刻片、壓片、140g ● 限量發行",
                }
            ],
            currentPage: 1,
            // 商品分類篩選(All)
            currentKind: "All",
            // 商品排序
            typeOptions: [
                '商品排序',
                '上架時間(新>舊)',
                '上架時間(舊>新)',
                '價格:由高到低',
                '價格:由低到高',
            ],
            sortType: '商品排序',
            // 下拉數量選單:預設
            selectedPageSize: 20,

        }
    },
    computed: {
        // 商品分類篩選(All)
        catList() {
            if (this.currentKind === 'All') return this.products;
            return this.products.filter((v, i) => v.kind.includes(this.currentKind))
        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
        // 下拉數量選單:計算商品數量
=======
>>>>>>> dev
        
        //郭凱芸 - 下拉數量選單:計算商品數量
>>>>>>> sang
        getSelectedPageSize() {
            const startIdx = (this.currentPage - 1) * this.selectedPageSize;
            const endIdx = startIdx + this.selectedPageSize;
            return this.sortedTypeOptions.slice(startIdx, endIdx);
        },

        // 商品排序
        sortedTypeOptions() {
            const sortedProducts = this.catList.slice();
            let func = (a, b) => new Date(b.date) - new Date(a.date);
            if (this.sortType === '上架時間(舊>新)') {
                func = (a, b) => new Date(a.date) - new Date(b.date);
            }
            if (this.sortType === '價格:由高到低') {
                func = (a, b) => b.prodPrice - a.prodPrice;
            }
            if (this.sortType === '價格:由低到高') {
                func = (a, b) => a.prodPrice - b.prodPrice;
            }
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> sang
>>>>>>> dev
            return sortedProducts.sort(func);
        }
    },
    // 每次點選分類就重新回到第1頁
    watch: {
        currentKind() {
            this.currentPage = 1;
        },
        sortType() {
            this.currentPage = 1;
        },
    },
    methods: {
        // 增加商品數量
        incrementItem(item) {
            if (item.inCart >= 0) {
                item.inCart++;
            }
        },
        // 減少商品數量
        decrementItem(item) {
            if (item.inCart > 0) {
                item.inCart--;
            }
        },
        // 下拉數量選單:分頁
        handlePageChange(page) {
            console.log('handlePageChange', page)
            this.selectedPageSize = page;
        },

        handlePageSize(page) {
            // console.log('handlePageSize', page)
            this.selectedPageSize = page;
        },

        typeClick(type) {
            if (this.sortType != type) {
                this.sortType = type;
            }
        },

        // 加入購物車
        addToCart(item) {
            // 獲取已存儲的購物車數據或初始化一個空數組
            const cartItemsJSON = localStorage.getItem('cartItems');
            let cartItems = [];

            if (cartItemsJSON) {
                // 如果已經有購物車數據，則解析它
                cartItems = JSON.parse(cartItemsJSON);
            }

            // 檢查購物車中是否已經存在相同的商品
            const existingItem = cartItems.find(cartItem => cartItem.prodName === item.prodName);

            if (existingItem) {
                // 如果存在相同的商品，將它們的 inCart 數字相加
                existingItem.inCart += item.inCart;
            } else {
                // 如果不存在相同的商品，將商品添加到購物車數組
                cartItems.push(item);
            }

            // 將購物車數組轉換為 JSON 字符串
            const updatedCartItemsJSON = JSON.stringify(cartItems);

            // 使用 localStorage 存儲購物車數據
            localStorage.setItem('cartItems', updatedCartItemsJSON);
        },
    },
}
