<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="container">
        <div class="alert bg-success my-3">
          <h4 class="text-center" style="color: red">coupon Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">couponCode:</label>
              <input type="text" class="form-control" v-model="couponCode" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Book :</label>
              <select class="form-control" v-model="book">
                <option
                  v-for="(book, index) in bookList"
                  :key="index"
                  :value="book._id"
                >
                  {{ book.bookName }}
                </option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Discount Type:</label>
              <select class="form-control" v-model="discountType">
                <option value="percentage">Percentage</option>
                <option value="fix">Fix</option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">ExpiryOn:</label>
              <input type="date" class="form-control" v-model="couponExp" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">discountValue:</label>
              <input
                type="number"
                class="form-control"
                v-model="discountValue"
              />
            </div>

            <input
              type="submit"
              value="Book Create"
              class="btn btn-info my-3 w-100"
              @click="couponCreate()"
            />

            <input
              type="submit"
              value="All Branch"
              class="btn btn-info my-3 w-100"
              @click="allBook()"
            />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </body>
  </html>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      couponCode: "",
      discountType: "",
      couponExp: "",
      bookList: [],
      book: "",
      discountValue: "",
    };
  },
  created() {
    this.getBookList();
  },
  methods: {
    async getBookList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/book/get/all",
        });
        console.log(result, "message");
        this.bookList = result.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    async couponCreate() {
      try {
        // alert("dfghjk");
        let data = {
          couponCode: this.couponCode,
          discountType: this.discountType,
          couponExp: this.couponExp,
          book: this.book,
          discountValue: this.discountValue,
        };
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/coupon/create",
          data: data,
        });
        console.log(result, "message");
        // if (result.data.success) {
        //   // router.push({ path: "./userList" });
        //   router.push({ name: "BranchList" });
        // }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
