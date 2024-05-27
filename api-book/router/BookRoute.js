const express = require("express");
const bookController = require("../controller/BookController");
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const multer = require("multer");
const upload = multer({ dest: "upload/" });
router.post("/book/create", upload.any(), (req, res) => {
  bookController.createBook(req, res);
});
router.get("/book/get/all", (req, res) => {
  bookController.getBooks(req, res);
});
router.get("/book/coupon", (req, res) => {
  bookController.getBookWithCoupon(req, res);
});
router.get("/book/get", (req, res) => {
  bookController.getAll(req, res);
});
router.get("/bookView", (req, res) => {
  res.render("BookView");
});

router.get("/book/delete/:id", (req, res) => {
  bookController.deleteBook(req, res);
});
module.exports = router;
