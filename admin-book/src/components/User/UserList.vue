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
          <h4 class="text-center" style="color: red">user List</h4>
        </div>
      </div>
      <!-- <input
          type="text"
          class="form-control"
          placeholder="Enter Branch"
          v-model="listQuery.name"
          @input="getuserList()"
        /> -->

      <table class="table">
        <caption>
          <!-- Branch List -->
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>password</th>
            <th>userType</th>
            <th>lastLogin</th>
            <th>aadharCard</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr v-for="(user, index) in userList" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.userType }}</td>
            <td>{{ user.lastLogin }}</td>
            <td>{{ user.aadharCard }}</td>

            <td>
              <input
                class="edit"
                type="submit"
                value="Edit"
                @click="openEditPage(user._id)"
              />
              <input
                class="delete"
                type="submit"
                value="Delete"
                @click="deleteBranch(user._id)"
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
      userList: [],
      // listQuery: {
      //   name: "",
      //   page: 1,
      //   limit: 2,
      // },
      // nop: 1,
    };
  },
  created() {
    this.getuserList();
  },
  methods: {
    async getuserList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/user/list",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.userList = result.data.data;
        // this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped></style>
