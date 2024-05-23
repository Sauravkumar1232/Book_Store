const Coupon = require("../model/CouponSchema");

const createCoupon = async (req, res) => {
  try {
    console.log(req.body);
    let coupon = new Coupon(req.body);
    await coupon.save();

    res.status(200).send({
      success: true,
      message: "Coupon created..",
      data: coupon,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllCoupon = async (req, res) => {
  try {
    let coupon = await Coupon.find({}).populate("book");
    console.log(coupon);

    res.status(200).send({
      message: "Coupon fetched",
      data: coupon,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteCoupon = async (req, res) => {
  try {
    await Coupon.deleteOne({ _id: req.params.id });
    res.status(200).send({
      message: "Coupon deleted",
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
  createCoupon,
  getAllCoupon,
  deleteCoupon,
};
