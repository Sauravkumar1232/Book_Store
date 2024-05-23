const express = require("express");
const app = express();
const connect = require("./connection.js");
const cors = require("cors");
const bookRoute = require("./router/BookRoute.js");
const couponRoute = require("./router/CouponRoute.js");
const userRoute = require("./router/UserRoute.js");
app.use(cors());

connect();
app.use(express.json());
app.use(bookRoute);
app.use(couponRoute);
app.use(userRoute);

app.listen(3000, () => {
  console.log("Server started at 3000...");
});
