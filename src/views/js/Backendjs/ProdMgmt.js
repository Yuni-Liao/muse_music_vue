export default {
  data() {
    return {
      // 讓圖片 build 之後能顯示
      publicPath: process.env.BASE_URL,

      columns: [
        {
          title: "No",
          key: "prod_id",
          width: 60,
          align: "center",
        },
        {
          title: "商品圖片",
          key: "prod_pic",
          width: 150,
          align: "center",
        },
        {
          title: "商品名稱",
          key: "prod_name",
          width: 200,
          align: "center",
        },
        {
          title: "商品分類",
          key: "prod_type",
          width: 100,
          align: "center",
        },
        {
          title: "商品售價",
          key: "prod_price",
          width: 100,
          align: "center",
        },
        {
          title: "更新時間",
          key: "prod_date",
          width: 180,
          align: "center",
        },
        {
          title: "上/下架",
          slot: "upDownBtn",
          width: 100,
          align: "center",
        },
        {
          title: "編輯",
          slot: "editBtn",
          width: 80,
          align: "center",
        },
      ],

      // 渲染資料的陣列
      productData: [],

      // 預設編輯跳窗隱藏
      editBox: false,
      //編輯商品
      editItem: {
        prod_id: "",
        prod_type: "",
        prod_name: "",
        prod_singer: "",
        prod_inf: "",
        prod_int: "",
        prod_price: "",
        prod_date: "",
        show_stat: "",
        chat_num: "",
        prod_pic: "",
      },
      //預設新增跳窗隱藏
      addBox: false,
      //新增商品
      addItem: {
        addprod_type: "",
        addprod_name: "",
        addprod_singer: "",
        addprod_inf: "",
        addprod_int: "",
        addprod_price: "",
        prod_pic: "",
        showimg: "", //用於顯示
        updateimg: false,
      },
      privacy: "公開",
    };
  },
  methods: {
    prodSearchBtn() {
      alert("搜索");
    },

    // 以下 上/下架功能相關------------------------------------------------
    toggleBtn(row) {
      this.editItem.prod_id = row.prod_id;
      this.editItem.show_stat = row.show_stat;
      console.log("指定此列的值:", this.editItem.show_stat);

      this.changeStatus();
    },
    changeStatus() {
      const url = `${this.$store.state.phpPublicPath}editProdOnOff.php`;
      const formData = new FormData();
      formData.append("prod_id", this.editItem.prod_id);
      formData.append("show_stat", this.editItem.show_stat);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("編輯失敗");
          }
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    prodBeforeChange() {
      return new Promise((resolve) => {
        this.$Modal.confirm({
          title: "提示",
          content: "確定要更改狀態嗎 ?",
          onOk: () => {
            resolve();
          },
        });
      });
    },

    // 以下編輯功能相關----------------------------------------------------
    // 編輯圖片
    img(e) {
      let that = this;
      let files = e.target.files[0];
      if (!e || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onloadend = function (e) {
        that.editItem.prod_pic = files.name;
        that.editItem.showimg = e.target.result;
        that.editItem.updateimg = true;
      };
    },
    // 編輯跳窗
    editProd(row) {
      const showimg = {
        showimg: "", //用於顯示
        updateimg: false,
      };
      // 顯示編輯跳窗
      this.editBox = true;
      // 傳入編輯數據
      this.editItem = { ...row, ...showimg };
    },
    // 編輯商品 - 確認按鈕
    saveEditBtn() {
      if (prod_id != undefined) {
        const url = `${this.$store.state.phpPublicPath}editProd.php`;
        const formData = new FormData();
        formData.append("prod_id", this.editItem.prod_id);
        formData.append("prod_name", this.editItem.prod_name);
        formData.append("prod_price", this.editItem.prod_price);
        formData.append("prod_singer", this.editItem.prod_singer);
        formData.append("prod_date", this.editItem.prod_date);
        formData.append("prod_type", this.editItem.prod_type);
        formData.append("prod_inf", this.editItem.prod_inf);
        formData.append("prod_int", this.editItem.prod_int);
        formData.append("show_stat", this.editItem.show_stat);
        if (document.getElementById("fileimg").files[0]) {
          formData.append(
            "prod_pic",
            document.getElementById("fileimg").files[0]
          );
        } else {
          formData.append("prod_pic", this.editItem.prod_pic);
        }
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              console.log(response);
            } else {
              throw new Error("編輯失敗");
            }
          })
          .then(() => {
            this.editItem = [];
            window.location.reload();
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    },
    // 關閉 新增/修改 跳窗
    closeBtn() {
      this.editBox = false;
      this.addBox = false;
    },

    // 以下新增功能相關-----------------------------------------------------
    // 新增跳窗
    addProd(row) {
      this.addItem = { ...row }; // 傳入編輯數據
      this.addBox = true; // 顯示編輯跳窗
    },
    //編輯圖片
    img2(e) {
      let that2 = this;
      let files2 = e.target.files[0];
      if (!e || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(files2);

      reader.onloadend = function (e) {
        that2.addItem.prod_pic = files2.name;
        that2.addItem.showimg = e.target.result;
        that2.addItem.updateimg = true;
      };
    },

    // 新增商品 - 確認按鈕 需修改-----------------------------
    saveAddBtn() {
      const url = `${this.$store.state.phpPublicPath}addProd.php`;
      const formData = new FormData();
      formData.append("addprod_name", this.addItem.addprod_name);
      formData.append("addprod_price", this.addItem.addprod_price);
      formData.append("addprod_singer", this.addItem.addprod_singer);
      formData.append("addprod_type", this.addItem.addprod_type);
      formData.append("addprod_inf", this.addItem.addprod_inf);
      formData.append("addprod_int", this.addItem.addprod_int);
      formData.append(
        "prod_pic",
        document.getElementById("addfileimg").files[0]
      );

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
          } else {
            throw new Error("新增失敗");
          }
        })
        .then(() => {
          this.addItem = [];
          //window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    //fetch postProdMgmt.php;
    //先檢查資料格式是否符合DB規則
    const url = `${this.$store.state.phpPublicPath}postProdMgmt.php`;
    let headers = {
      "Content-Type": "applicat ion/json",
      Accept: "application/json",
    };
    fetch(url, {
      method: "POST",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("API 錯誤回應:", response);
          throw new Error("取得 dta 失敗");
        }
      })
      .then((json) => {
        console.log("API 成功回應:", json);
        this.productData = json;
        // 將 prod_type 設定為正確的值
      })
      .catch((error) => {
        console.error("API 請求失敗:", error);
      });
  },
};
