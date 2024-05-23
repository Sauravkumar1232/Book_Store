const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timeStamp = require("mongoose-timestamps");
const BookSchema = new Schema({
  ISBN_No: { type: String, required: true },
  bookCode: { type: String, required: true },
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  shortDescription: { type: String, required: true },
  publisherName: { type: String, required: false },
  quantityAvailable: { type: Number, required: true },
  price: { type: Number, required: true },
  bookUrl: { type: String, required: false },
  createdAt: Date,
  updatedAt: Date,
});
BookSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Book", BookSchema);
