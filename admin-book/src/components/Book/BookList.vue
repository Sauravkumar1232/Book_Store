<template>
  'Book length' {{ bookList.length }}
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
          <h4 v-if="true" class="text-center" style="color: red">Book List</h4>
          <!-- <div v-if="!bookList && bookList < 0">
            {{ bookList.length }}
            <button class="btn btn-primary">Add Book</button>
          </div> -->
        </div>
      </div>

      <div v-if="bookList.length <= 0">
        <button class="btn btn-primary" @click="addBook()">Add Book</button>
      </div>
      <div v-else-if="bookList.length > 0">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Branch"
          v-model="listQuery.name"
          @input="getBookList()"
        />
        <table class="table">
          <caption>
            <!-- Branch List -->
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>ISBN_No</th>
              <th>Book Code</th>
              <th>Book Name</th>
              <th>shortDescription</th>
              <th>authorName</th>
              <th>publisherName</th>
              <th>quantityAvailable</th>
              <th>price</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody class="tbody">
            <tr v-for="(book, index) in bookList" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ book.ISBN_No }}</td>
              <td>{{ book.bookCode }}</td>
              <td>{{ book.bookName }}</td>
              <td>{{ book.shortDescription }}</td>
              <td>{{ book.authorName }}</td>
              <td>{{ book.publisherName }}</td>
              <td>{{ book.quantityAvailable }}</td>
              <td>{{ book.price }}</td>

              <td>
                <input
                  class="edit"
                  type="submit"
                  value="Edit"
                  @click="openEditPage(book._id)"
                />
                <input
                  class="delete"
                  type="submit"
                  value="Delete"
                  @click="deleteBranch(book._id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="...">
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
        </nav>
      </div>
    </body>
  </html>
</template>
<script>
import router from "@/routes";
import axios from "axios";

export default {
  data() {
    return {
      bookList: [],
      listQuery: {
        name: "",
        page: 1,
        limit: 2,
      },
      nop: 1,
    };
  },
  created() {
    this.getBookList();
  },
  methods: {
    addBook() {
      router.push({ path: "/book/create" });
    },
    async getBookList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/book/get",
          params: this.listQuery,
        });
        console.log(result, "message");
        this.bookList = result.data.data;
        this.nop = Math.ceil(result.data.totalcount / this.listQuery.limit);
      } catch (err) {
        console.log(err);
      }
    },
    getData(n) {
      this.listQuery.page = n;
      this.getBookList();
    },
  },
};
</script>
<style scoped></style>
