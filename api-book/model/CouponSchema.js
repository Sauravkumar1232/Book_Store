const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timeStamp = require("mongoose-timestamps");
const CouponSchema = new Schema({
  couponCode: { type: String, required: false, unique: true },
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  discountType: {
    type: String,
    required: true,
    default: "percentage",
    enum: ["percentage", "fix"],
  },
  discountValue: { type: Number, required: true },

  couponExp: { type: Date, required: true },
  createdAt: Date,
  updatedAt: Date,
});
CouponSchema.plugin(timeStamp, { index: true });
module.exports = mongoose.model("Coupon", CouponSchema);
