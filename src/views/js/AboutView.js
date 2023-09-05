export default {
    //script寫在這裡
    // <!-- 此處為測試文字,可以改掉重新編輯 -->

    data() {
        return {
            navli: [
                { title: '最新消息', link: "./news.html" },
                { title: '關於品牌', link: "./aboutus.html" },
                { title: '啤酒介紹', link: "./classic-beer.html" },
                { title: '美味料理', link: "./food.html" },
                { title: '我要外帶', link: "./takeout.html" },
                { title: '美味據點', link: "./location.html" },
            ],
            productlist: [
                {
                    name: '無肉不歡拼盤',
                    enname: 'Meat Lovers Platter',
                    imgsrc: './images/cart_meet.png',
                    price: 990,
                    count: 1
                },
                {
                    name: '德式綜合香腸',
                    enname: 'Assorted German Sausages',
                    imgsrc: './images/cart_sau.png',
                    price: 580,
                    count: 2
                },
                {
                    name: '培根奶油寬麵',
                    enname: 'Fettuccine Carbonara',
                    imgsrc: './images/cart_noodle.png',
                    price: 620,
                    count: 1
                }
            ]
        }
    },
    computed: {
        prodCount() {
            return this.productlist.length
        },
        parsePrice() {
            let total = 0
            for (let index = 0; index < this.productlist.length; index++) {
                const accumulator = this.productlist[index].price * this.productlist[index].count
                total += accumulator
            }
            return total;
        }
    },
    methods: {
        plus(item) {
            item.count++;
        },
        minus(item, index) {
            if (item.count <= 1) {
                this.productlist.splice(index, 1)
            };
            item.count--;
        },
        totalprice(count, price) {
            return count * price;
        },
        removeCart(index) {
            this.productlist.splice(index, 1);
        },
    }
}