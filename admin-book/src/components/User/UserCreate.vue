<template>
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
          <h4 class="text-center" style="color: red">User Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">firstName:</label>
              <input type="text" class="form-control" v-model="firstName" />
            </div>

            <div class="field my-3">
              <label for="" class="form-label">lastName:</label>
              <input type="text" class="form-control" v-model="lastName" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">email:</label>
              <input type="text" class="form-control" v-model="email" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">password:</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">User type:</label>
              <select class="form-control" v-model="userType">
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </div>
            <div class="field my-3">
              <label for="" class="form-label">lastLogin:</label>
              <input type="date" class="form-control" v-model="lastLogin" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">aadharCard:</label>
              <input type="text" class="form-control" v-model="aadharCard" />
            </div>

            <input
              type="submit"
              value="Book Create"
              class="btn btn-info my-3 w-100"
              @click="userCreate()"
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
      aadharCard: "",
      lastLogin: "",
      userType: "",
      password: "",
      email: "",
      lastName: "",
      firstName: "",
    };
  },
  created() {
    // this.getBookList();
  },
  methods: {
    async userCreate() {
      try {
        // alert("dfghjk");
        let data = {
          aadharCard: this.aadharCard,
          lastLogin: this.lastLogin,
          userType: this.userType,
          password: this.password,
          email: this.email,
          lastName: this.email,
          firstName: this.firstName,
        };
        let result = await axios({
          method: "post",
          url: "http://localhost:3000/user/create",
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
