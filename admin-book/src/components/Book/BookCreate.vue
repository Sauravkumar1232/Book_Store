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
          <h4 class="text-center" style="color: red">Book Create</h4>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <!--either get or post-->
            <div class="field my-3">
              <label for="" class="form-label">ISBN_No:</label>
              <input type="text" class="form-control" v-model="ISBN_No" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Book Code:</label>
              <input type="text" class="form-control" v-model="bookCode" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Book Name:</label>
              <input type="text" class="form-control" v-model="bookName" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">authorName:</label>
              <input type="text" class="form-control" v-model="authorName" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">shortDescription:</label>
              <input
                type="text"
                class="form-control"
                v-model="shortDescription"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">publisherName:</label>
              <input type="text" class="form-control" v-model="publisherName" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">quantityAvailable:</label>
              <input
                type="number"
                class="form-control"
                v-model="quantityAvailable"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">price:</label>
              <input type="text" class="form-control" v-model="price" />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">price:</label>
              <input type="file" class="form-control" ref="file" />
            </div>

            <input
              type="submit"
              value="Book Create"
              class="btn btn-info my-3 w-100"
              @click="bookCreate()"
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
      file: "",
      price: "",
      quantityAvailable: "",
      publisherName: "",
      shortDescription: "",
      authorName: "",
      bookName: "",
      bookCode: "",
      ISBN_No: "",
    };
  },
  methods: {
    async bookCreate() {
      try {
        // alert("dfghjk");
        let data = new FormData();

        data.append("price", this.price),
          data.append("quantityAvailable", this.quantityAvailable),
          data.append("publisherName", this.publisherName),
          data.append("shortDescription", this.shortDescription),
          data.append("authorName", this.authorName),
          data.append("bookName", this.bookName),
          data.append("bookCode", this.bookCode),
          data.append("ISBN_No", this.ISBN_No),
          data.append("file", this.$refs.file.files[0]);
        //  quantityAvailable: this.quantityAvailable,
        // publisherName: this.publisherName,
        // shortDescription: this.shortDescription,
        // authorName: this.authorName,
        // bookName: this.bookName,
        // bookCode: this.bookCode,
        // ISBN_No: this.ISBN_No,

        let result = await axios({
          method: "post",
          url: "http://localhost:3000/book/create",
          data: data,
          header: {
            "Content-Type": "multipart/form-data",
          },
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
