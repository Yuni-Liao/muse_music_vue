<template>
  <div>
    <div class="progress-bar">
      <div :style="{ width: progressWidth + '%' }"></div>
    </div>
    <Breadcrumb separator=">" class="breadcrumb">
      <BreadcrumbItem><router-link to="/">首頁</router-link></BreadcrumbItem>
      <BreadcrumbItem
        ><router-link to="/shop">周邊商品</router-link></BreadcrumbItem
      >
      <BreadcrumbItem
        ><router-link to="/shoppingsteps"></router-link>購物車</BreadcrumbItem
      >
    </Breadcrumb>
    <div class="checkout-steps">
      <div :class="{ active: currentStep === 1 }">1.選取商品加入購物車</div>
      <div class="arrow">></div>
      <div :class="{ active: currentStep === 2 }">2.填寫收件資料與付款方式</div>
      <div class="arrow">></div>
      <div :class="{ active: currentStep === 3 }">3.完成訂單</div>
    </div>

    <div class="checkout">
      <div v-if="currentStep === 1">
        <p>已加入購物車商品</p>
        <button @click="completeStep">
          <router-link to="/shop">◄ 繼續選購其他商品</router-link>
        </button>
        <button @click="nextStep">進入結帳 ►</button>
        <div class="shopinst">
          <div class="shoptitle">
            購物說明
          </div>
          <div class="shopcont">
            您可以至首頁選擇商品繼續購物，全部選完後再點按上方的結帳按鈕。<br>
            <br>
            • 預購CD依發行日寄出,請單獨下單,如與其它CD併購,將與預購CD發行日同時寄出,不另分次寄送。<br>
            • 訂單如因個人因素需取消,限定於訂單完成48小時內(例假日不算)通知取消。<br>
            • 進口商品與限量預購商品訂單為專單，訂單完成後恕不接受取消。<br>
            • 請留意您的訂購是否有未發行商品。<br>
            • 若遇缺貨本公司保留接受訂單與否的權利。<br>
            • 本公司保留接受訂單與否的權利。<br>
            • 贈品如有海報，若未購買海報筒將用折疊的方式。
          </div>
        </div>
      </div>
      <div v-else-if="currentStep === 2">
        <div class="paytitle">
          填寫資料
        </div>
        <div class="shopline"></div>
        <div class="form-group">
          <label for="name" class="label">收件人</label>
          <input type="text" id="name" v-model="name" placeholder="" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>

          <label for="phone" class="label">連絡電話</label>
          <input type="phone" id="phone" v-model="phone" placeholder="" />
          <span v-if="errors.phone" class="error">{{ errors.phone }}</span>

          <label for="addressf" class="label">收件地址</label>
          <input type="text" id="address" v-model="address" placeholder="" />

          <!-- <label for="county_box">請選取送貨地址</label>
          <select name="county" id="county_box" v-model="selectedCounty">
            <option value="">選擇縣市</option>
            <option v-for="(value, key) in counties" :key="key" :value="key">
              {{ value }}
            </option>
          </select>

          <select name="district" id="district_box" v-model="selectedDistrict">
            <option value="">選擇鄉鎮市區</option>
            <option v-for="(value, key) in availableDistricts" :key="key" :value="key">
              {{ value }}
            </option>
          </select>

          <input
            type="text"
            id="zipcode_box"
            placeholder="郵遞區號"
            v-model="zipcode"
          /> -->

          <label for="ship" class="label">運送方式</label>
          <select id="ship" v-model="shippingMethod">
            <option value="">請選擇運送方式</option>
            <option value="standard">標準運送</option>
            <option value="express">快遞運送</option>
            <option value="express">急件運送</option>
          </select>
          <span v-if="errors.shippingMethod" class="error">{{
            errors.shippingMethod
          }}</span>

          <label for="pay" class="label">付款方式</label>
          <select id="pay" v-model="paymentMethod">
            <option value="">請選擇付款方式</option>
            <option value="credit_card">信用卡</option>
            <option value="paypal">PayPal</option>
            <option value="credit_card">貨到付款</option>
          </select>
          <span v-if="errors.paymentMethod" class="error">{{
            errors.paymentMethod
          }}</span>
        </div>
        <button @click="nextStep">確認結帳 ►</button>
      <div class="shopinst">
        <div class="shoptitle">
          購物說明
        </div>
        <div class="shopcont">
          您可以至首頁選擇商品繼續購物，全部選完後再點按上方的結帳按鈕。<br>
          <br>
          • 預購CD依發行日寄出,請單獨下單,如與其它CD併購,將與預購CD發行日同時寄出,不另分次寄送。<br>
          • 訂單如因個人因素需取消,限定於訂單完成48小時內(例假日不算)通知取消。<br>
          • 進口商品與限量預購商品訂單為專單，訂單完成後恕不接受取消。<br>
          • 請留意您的訂購是否有未發行商品。<br>
          • 若遇缺貨本公司保留接受訂單與否的權利。<br>
          • 本公司保留接受訂單與否的權利。<br>
          • 贈品如有海報，若未購買海報筒將用折疊的方式。
        </div>
      </div>
    </div>
      
      <div v-else>
        <div class="paytitle">
          完成訂單
        </div>
        <div class="shopline"></div>
        <p>已完成訂購，預計2~3天內出貨，感謝您的支持!</p>
        <button @click="completeStep">
          <router-link to="/shop">會員專區</router-link>
        </button>
        <button @click="completeStep">
          <router-link to="/">回到首頁</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const database = {
  基隆市: {
    仁愛區: "200",
    信義區: "201",
    中正區: "202",
    中山區: "203",
    安樂區: "204",
    暖暖區: "205",
    七堵區: "206",
  },
  臺北市: {
    中正區: "100",
    大同區: "103",
    中山區: "104",
    松山區: "105",
    大安區: "106",
    萬華區: "108",
    信義區: "110",
    士林區: "111",
    北投區: "112",
    內湖區: "114",
    南港區: "115",
    文山區: "116",
  },
  新北市: {
    萬里區: "207",
    金山區: "208",
    板橋區: "220",
    汐止區: "221",
    深坑區: "222",
    石碇區: "223",
    瑞芳區: "224",
    平溪區: "226",
    雙溪區: "227",
    貢寮區: "228",
    新店區: "231",
    坪林區: "232",
    烏來區: "233",
    永和區: "234",
    中和區: "235",
    土城區: "236",
    三峽區: "237",
    樹林區: "238",
    鶯歌區: "239",
    三重區: "241",
    新莊區: "242",
    泰山區: "243",
    林口區: "244",
    蘆洲區: "247",
    五股區: "248",
    八里區: "249",
    淡水區: "251",
    三芝區: "252",
    石門區: "253",
  },
  宜蘭縣: {
    宜蘭市: "260",
    頭城鎮: "261",
    礁溪鄉: "262",
    壯圍鄉: "263",
    員山鄉: "264",
    羅東鎮: "265",
    三星鄉: "266",
    大同鄉: "267",
    五結鄉: "268",
    冬山鄉: "269",
    蘇澳鎮: "270",
    南澳鄉: "272",
    釣魚臺列嶼: "290",
  },
  新竹市: { 東區: "300", 北區: "300", 香山區: "300" },
  新竹縣: {
    竹北市: "302",
    湖口鄉: "303",
    新豐鄉: "304",
    新埔鎮: "305",
    關西鎮: "306",
    芎林鄉: "307",
    寶山鄉: "308",
    竹東鎮: "310",
    五峰鄉: "311",
    橫山鄉: "312",
    尖石鄉: "313",
    北埔鄉: "314",
    峨眉鄉: "315",
  },
  桃園市: {
    中壢區: "320",
    平鎮區: "324",
    龍潭區: "325",
    楊梅區: "326",
    新屋區: "327",
    觀音區: "328",
    桃園區: "330",
    龜山區: "333",
    八德區: "334",
    大溪區: "335",
    復興區: "336",
    大園區: "337",
    蘆竹區: "338",
  },
  苗栗縣: {
    竹南鎮: "350",
    頭份市: "351",
    三灣鄉: "352",
    南庄鄉: "353",
    獅潭鄉: "354",
    後龍鎮: "356",
    通霄鎮: "357",
    苑裡鎮: "358",
    苗栗市: "360",
    造橋鄉: "361",
    頭屋鄉: "362",
    公館鄉: "363",
    大湖鄉: "364",
    泰安鄉: "365",
    銅鑼鄉: "366",
    三義鄉: "367",
    西湖鄉: "368",
    卓蘭鎮: "369",
  },
  臺中市: {
    中區: "400",
    東區: "401",
    南區: "402",
    西區: "403",
    北區: "404",
    北屯區: "406",
    西屯區: "407",
    南屯區: "408",
    太平區: "411",
    大里區: "412",
    霧峰區: "413",
    烏日區: "414",
    豐原區: "420",
    后里區: "421",
    石岡區: "422",
    東勢區: "423",
    和平區: "424",
    新社區: "426",
    潭子區: "427",
    大雅區: "428",
    神岡區: "429",
    大肚區: "432",
    沙鹿區: "433",
    龍井區: "434",
    梧棲區: "435",
    清水區: "436",
    大甲區: "437",
    外埔區: "438",
    大安區: "439",
  },
  彰化縣: {
    彰化市: "500",
    芬園鄉: "502",
    花壇鄉: "503",
    秀水鄉: "504",
    鹿港鎮: "505",
    福興鄉: "506",
    線西鄉: "507",
    和美鎮: "508",
    伸港鄉: "509",
    員林市: "510",
    社頭鄉: "511",
    永靖鄉: "512",
    埔心鄉: "513",
    溪湖鎮: "514",
    大村鄉: "515",
    埔鹽鄉: "516",
    田中鎮: "520",
    北斗鎮: "521",
    田尾鄉: "522",
    埤頭鄉: "523",
    溪州鄉: "524",
    竹塘鄉: "525",
    二林鎮: "526",
    大城鄉: "527",
    芳苑鄉: "528",
    二水鄉: "530",
  },
  南投縣: {
    南投市: "540",
    中寮鄉: "541",
    草屯鎮: "542",
    國姓鄉: "544",
    埔里鎮: "545",
    仁愛鄉: "546",
    名間鄉: "551",
    集集鎮: "552",
    水里鄉: "553",
    魚池鄉: "555",
    信義鄉: "556",
    竹山鎮: "557",
    鹿谷鄉: "558",
  },
  嘉義市: { 東區: "600", 西區: "600" },
  嘉義縣: {
    番路鄉: "602",
    梅山鄉: "603",
    竹崎鄉: "604",
    阿里山鄉: "605",
    中埔鄉: "606",
    大埔鄉: "607",
    水上鄉: "608",
    鹿草鄉: "611",
    太保市: "612",
    朴子市: "613",
    東石鄉: "614",
    六腳鄉: "615",
    新港鄉: "616",
    民雄鄉: "621",
    大林鎮: "622",
    溪口鄉: "623",
    義竹鄉: "624",
    布袋鎮: "625",
  },
  雲林縣: {
    斗南鎮: "630",
    大埤鄉: "631",
    虎尾鎮: "632",
    土庫鎮: "633",
    褒忠鄉: "634",
    東勢鄉: "635",
    臺西鄉: "636",
    崙背鄉: "637",
    麥寮鄉: "638",
    斗六市: "640",
    林內鄉: "643",
    古坑鄉: "646",
    莿桐鄉: "647",
    西螺鎮: "648",
    二崙鄉: "649",
    北港鎮: "651",
    水林鄉: "652",
    口湖鄉: "653",
    四湖鄉: "654",
    元長鄉: "655",
  },
  臺南市: {
    中西區: "700",
    東區: "701",
    南區: "702",
    北區: "704",
    安平區: "708",
    安南區: "709",
    永康區: "710",
    歸仁區: "711",
    新化區: "712",
    左鎮區: "713",
    玉井區: "714",
    楠西區: "715",
    南化區: "716",
    仁德區: "717",
    關廟區: "718",
    龍崎區: "719",
    官田區: "720",
    麻豆區: "721",
    佳里區: "722",
    西港區: "723",
    七股區: "724",
    將軍區: "725",
    學甲區: "726",
    北門區: "727",
    新營區: "730",
    後壁區: "731",
    白河區: "732",
    東山區: "733",
    六甲區: "734",
    下營區: "735",
    柳營區: "736",
    鹽水區: "737",
    善化區: "741",
    大內區: "742",
    山上區: "743",
    新市區: "744",
    安定區: "745",
  },
  高雄市: {
    新興區: "800",
    前金區: "801",
    苓雅區: "802",
    鹽埕區: "803",
    鼓山區: "804",
    旗津區: "805",
    前鎮區: "806",
    三民區: "807",
    楠梓區: "811",
    小港區: "812",
    左營區: "813",
    仁武區: "814",
    大社區: "815",
    東沙群島: "817",
    南沙群島: "819",
    岡山區: "820",
    路竹區: "821",
    阿蓮區: "822",
    田寮區: "823",
    燕巢區: "824",
    橋頭區: "825",
    梓官區: "826",
    彌陀區: "827",
    永安區: "828",
    湖內區: "829",
    鳳山區: "830",
    大寮區: "831",
    林園區: "832",
    鳥松區: "833",
    大樹區: "840",
    旗山區: "842",
    美濃區: "843",
    六龜區: "844",
    內門區: "845",
    杉林區: "846",
    甲仙區: "847",
    桃源區: "848",
    那瑪夏區: "849",
    茂林區: "851",
    茄萣區: "852",
  },
  屏東縣: {
    屏東市: "900",
    三地門鄉: "901",
    霧臺鄉: "902",
    瑪家鄉: "903",
    九如鄉: "904",
    里港鄉: "905",
    高樹鄉: "906",
    鹽埔鄉: "907",
    長治鄉: "908",
    麟洛鄉: "909",
    竹田鄉: "911",
    內埔鄉: "912",
    萬丹鄉: "913",
    潮州鎮: "920",
    泰武鄉: "921",
    來義鄉: "922",
    萬巒鄉: "923",
    崁頂鄉: "924",
    新埤鄉: "925",
    南州鄉: "926",
    林邊鄉: "927",
    東港鎮: "928",
    琉球鄉: "929",
    佳冬鄉: "931",
    新園鄉: "932",
    枋寮鄉: "940",
    枋山鄉: "941",
    春日鄉: "942",
    獅子鄉: "943",
    車城鄉: "944",
    牡丹鄉: "945",
    恆春鎮: "946",
    滿州鄉: "947",
  },
  臺東縣: {
    臺東市: "950",
    綠島鄉: "951",
    蘭嶼鄉: "952",
    延平鄉: "953",
    卑南鄉: "954",
    鹿野鄉: "955",
    關山鎮: "956",
    海端鄉: "957",
    池上鄉: "958",
    東河鄉: "959",
    成功鎮: "961",
    長濱鄉: "962",
    太麻里鄉: "963",
    金峰鄉: "964",
    大武鄉: "965",
    達仁鄉: "966",
  },
  花蓮縣: {
    花蓮市: "970",
    新城鄉: "971",
    秀林鄉: "972",
    吉安鄉: "973",
    壽豐鄉: "974",
    鳳林鎮: "975",
    光復鄉: "976",
    豐濱鄉: "977",
    瑞穗鄉: "978",
    萬榮鄉: "979",
    玉里鎮: "981",
    卓溪鄉: "982",
    富里鄉: "983",
  },
  金門縣: {
    金沙鎮: "890",
    金湖鎮: "891",
    金寧鄉: "892",
    金城鎮: "893",
    烈嶼鄉: "894",
    烏坵鄉: "896",
  },
  連江縣: { 南竿鄉: "209", 北竿鄉: "210", 莒光鄉: "211", 東引鄉: "212" },
  澎湖縣: {
    馬公市: "880",
    西嶼鄉: "881",
    望安鄉: "882",
    七美鄉: "883",
    白沙鄉: "884",
    湖西鄉: "885",
  },
};
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      stepLabels: ["填寫基本資料", "選擇運送方式", "選擇付款方式"],
      name: "",
      phone: "",
      address: "",
      shippingMethod: "",
      paymentMethod: "",
      errors: {},
      counties: Object.keys(database),
      districts: database,
      selectedCounty: "",
      selectedDistrict: "",
      zipcode: "",
    };
  },
  computed: {
    availableDistricts() {
      if (!this.selectedCounty || !this.districts[this.selectedCounty]) {
        return {};
      }

      return this.districts[this.selectedCounty];
    },
  },
  watch: {
    selectedCounty: function () {
      this.selectedDistrict = "";
      this.zipcode = "";
    },
    selectedDistrict: function () {
      this.zipcode = this.districts[this.selectedCounty][this.selectedDistrict];
    },
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    completeStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    validateForm() {
      this.errors = {};

      if (this.currentStep === 1) {
        if (!this.name) {
          this.errors.name = "請輸入收件人";
        }

        if (!this.phone) {
          this.errors.phone = "請輸入連絡電話";
        }

        if (!this.address) {
          this.errors.address = "請輸入收件地址";
        }
      } else if (this.currentStep === 2) {
        if (!this.shippingMethod) {
          this.errors.shippingMethod = "請選擇運送方式";
        }
      } else if (this.currentStep === 3) {
        if (!this.paymentMethod) {
          this.errors.paymentMethod = "請選擇付款方式";
        }
      }

      if (Object.keys(this.errors).length === 0) {
      }
    },
  },
};
</script>

<style scoped>
button {
  color: #74ebd5;
  background-color: transparent;
  border: #74ebd5 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 40px;
}

a {
  text-decoration: none;
  color: #74ebd5;
}
.shopline{
  height: 3px;
  background-color:white;
  width:94%;
  align-items: center;
  margin: 30px;
}
.paytitle{
  text-align: center;
  font-size: 24px;
}
.input-group {
  width: 50%;
  height: 50px;
  background-color: black;
  justify-content: left;
  align-items: left;
}
input,
textarea {
  background-color: transparent;
  color: white;
  border: 1px white solid;
  width: 50%;
}

.label {
  width: 150px;
  color: white;
  margin-right: 10px;
  display: flex;
  justify-content: center;
}
.ivu-breadcrumb a {
  color: white;
}
.step {
  color: white;
}
.checkout {
  color: white;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.progress-bar {
  margin-bottom: 20px;
  padding: 80px;
}

p {
  padding: 50px;
  font-size: 24px;
  color: #fe1c6c;
}
.shoptitle{
  font-size: 24px;
  text-align: left;
  padding: 40px;
}
.shopcont{
  padding: 50px;
  text-align: left;
  align-items: center;
  border: white 3px solid;
  margin: 0px 50px;
}

.checkout-steps {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 100px;
  margin: 50px;
  border: 2px white solid;
}

.checkout-steps div {
  flex: 1;
  text-align: center;
  padding: 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
}

.completeStep {
  padding: 100px;
  display: flex;
}

.checkout-steps .active {
  color: #fe1c6c;
}
</style>
