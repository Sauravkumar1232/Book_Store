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
          <h4 class="text-center" style="color: red">Coupon List</h4>
        </div>
      </div>
      <!-- <input
        type="text"
        class="form-control"
        placeholder="Enter Branch"
        v-model="listQuery.name"
        @input="getcouponList()"
      /> -->

      <table class="table">
        <caption>
          <!-- Branch List -->
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>couponCode</th>
            <th>Book Name</th>
            <th>discountType</th>
            <th>discountValue</th>
            <th>couponExp</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(coupon, index) in couponList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ coupon.couponCode }}</td>
            <td>{{ coupon.book.bookName }}</td>
            <td>{{ coupon.discountType }}</td>
            <td>{{ coupon.discountValue }}</td>
            <td>{{ coupon.couponExp }}</td>

            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(coupon._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deleteBranch(coupon._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li
            v-for="n in nop"
            :key="n"
            class="page-item page-link"
            @click="getData(n)"
          >
            {{ n }}
          </li>
        </ul>
      </nav> -->
    </body>
  </html>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      couponList: [],
      // listQuery: {
      //   name: "",
      //   page: 1,
      //   limit: 2,
      // },
      // nop: 1,
    };
  },
  created() {
    this.getcouponList();
  },
  methods: {
    async getcouponList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/coupon/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.couponList = result.data.data;
        // this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
