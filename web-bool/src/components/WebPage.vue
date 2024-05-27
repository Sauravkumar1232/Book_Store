<template>
  <nav
    style="margin-top: 0"
    class="navbar navbar-expand-lg navbar-light bg-body"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Book Store</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item dropdown">
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Branch"
            v-model="listQuery.name"
            @input="getBookList()"
          />
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="listQuery.name"
            @input="getBookList()"
          />
          <button class="btn btn-outline-success" type="submit">Login</button>
          <button class="btn btn-outline-success" type="submit">SignUp</button>
        </form>
      </div>
    </div>
  </nav>

  <section class="articles">
    <article v-for="(book, index) in bookList" :key="index">
      <div class="article-wrapper">
        <figure class="figure">
          <img :src="book.bookUrl" alt="Image" />
        </figure>

        <div class="article-body">
          <div class="item">
            <h2>{{ book.bookName }}</h2>
            <div>
              <!-- {{ book.shortDescription }} -->

              Price: {{ book.price }} <br />Discount: {{ book.discountValue }}
            </div>

            <a href="#" class="read-more">
              <h6 style="border: 2px solid black">
                Purchase for {{ book.price - book.discountValue }}/- only
              </h6>
              <span class="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
import axios from "axios";
// import { forEach } from "core-js/core/array";

export default {
  data() {
    return {
      bookList: [],
      coupon: "",
      totalDiscount: 0,
      bookId: "",
      listQuery: {
        name: "",
        // page: 1,
        // limit: 2,
      },
    };
  },
  created() {
    this.getBookList();
    // this.getCouponByBook(this.bookId);
  },
  methods: {
    // async getCouponByBook(bookId) {
    //   console.log("coupon by book");
    //   try {
    //     // alert("ok..");
    //     let result = await axios({
    //       method: "get",
    //       url: "http://localhost:3000/coupon/byBook/?bookId=" + bookId,
    //     });
    //     console.log(result, "message");

    //     this.totalDiscount = result.data.discountValue;

    //     console.log(this.totalDiscount);
    //     console.log("totaldis", this.totalDiscount);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async getBookList() {
      try {
        // alert("ok..");
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/book/coupon",

          params: this.listQuery,
        });
        console.log(result, "message");
        this.bookList = result.data.data;
        console.log(this.bookList);
        // if (result.data.success) {
        //   this.bookList.forEach((book) => {
        //     this.getCouponByBook(book._id);
        //   });
        // }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.navbar navbar-expand-lg navbar-light bg-body {
  backdrop-filter: blur(30px);
  box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
  border: 2px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #e9d5d5;
  z-index: 1000;
  /* margin-bottom: 150px; */
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 16px;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  margin-top: 15px;
}

article a::after {
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  cursor: pointer;
  content: "";
}

/* basic article elements styling */
article h2 {
  margin: 0 0 18px 0;
  /* // font-family: "Bebas Neue", cursive; */
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: var(--title-color);
  transition: color 0.3s ease-out;
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}

.article-body {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items horizontally center */
  justify-content: center; /* Align items vertically center */
  /* height: 100vh; Example height to center vertically within the viewport */
  padding: 24px;
}

article a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
}

article a:focus {
  outline: 1px dotted #28666e;
}

article a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
}

/* using the has() relational pseudo selector to update our custom properties */
article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

/************************ 
Generic layout (demo looks)
**************************/

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 48px 0;
  font-family: "Figtree", sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-image: linear-gradient(45deg, #7c9885, #b5b682);
  min-height: 100vh;
}

.articles {
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@media screen and (max-width: 960px) {
  article {
    container: card/inline-size;
  }
  .article-body p {
    display: none;
  }
}

@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.figure {
  width: 80%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.figure img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
