const Book = require("../model/BookSchema");
const Q = require("q");
const cloudinary = require("cloudinary");
const CouponSchema = require("../model/CouponSchema");
const createBook = async (req, res) => {
  try {
    console.log(req.body);
    let book = new Book(req.body);
    cloudinary.config({
      cloud_name: "ddkftpgzy",
      api_key: "279392953531995",
      api_secret: "9wYvB_-IwcU7ki8YS0WY3H9hFqw",
    });
    const uploadResult = await cloudinary.uploader.upload(req.files[0].path);
    console.log(uploadResult);
    book.bookUrl = uploadResult.url;

    await book.save();

    res.status(200).send({
      success: true,
      message: "Book created..",
      data: book,
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getBooks = async (req, res) => {
  try {
    // let books = await Book.find({}).select("bookName bookUrl");
    let books = await Book.find({});
    console.log(books);

    res.status(200).send({
      success: true,
      message: "book fetched",
      data: books,
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getBookWithCoupon = async (req, res) => {
  try {
    // let books = await Book.find({}).select("bookName bookUrl");
    let name = req.query.name;
    console.log(name, "req.query");
    let books = await Book.find({
      bookName: { $regex: new RegExp(name.toLowerCase(), "i") },
    });
    // Create an array of promises for finding coupons
    const bookPromises = books.map(async (book) => {
      const coupon = await CouponSchema.findOne({ book: book._id });

      // Clone the book object to avoid mutating the original book object
      const updatedBook = book.toObject();

      if (coupon) {
        // Apply the discount
        updatedBook.discountValue = coupon.discountValue;
      } else {
        // If no coupon, the discounted price is the same as the original price
        updatedBook.discountValue = 0;
      }
      return updatedBook;
    });

    // Wait for all promises to resolve
    const updatedBooks = await Promise.all(bookPromises);
    // console.log("newBooks", books);

    res.status(200).send({
      success: true,
      message: "book fetched",
      data: updatedBooks,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const getAll = async (req, res) => {
  console.log("Book get method");
  let name = req.query.name;
  let offSet = req.query.page ? (req.query.page - 1) * req.query.limit : 0;
  let limit = parseInt(req.query.limit ? req.query.limit : 2);
  console.log("offSet", offSet, "limit", limit);
  Q.all([
    Book.countDocuments().exec(),
    Book.find({
      bookName: { $regex: new RegExp(name.toLowerCase(), "i") },
    })
      // .populate("course")
      .skip(parseInt(offSet))
      .limit(parseInt(limit))
      .exec(),
  ]).then(function (Bookes) {
    res.status(200).send({
      message: "Book fetched",
      data: Bookes[1],
      totalcount: Bookes[0],
    });
  });
};

const deleteBook = async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.status(200).send({
      message: "book deleted",
      data: "",
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "Error ",
      err,
    });
  }
};

module.exports = {
  createBook,
  getAll,
  deleteBook,
  getBookWithCoupon,
  getBooks,
};
