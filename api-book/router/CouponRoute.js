const express = require("express");
const router = express.Router();
const CouponController = require("../controller/CouponController");
router.post("/coupon/create", (req, res) => {
  CouponController.createCoupon(req, res);
});

router.get("/coupon/list", (req, res) => {
  CouponController.getAllCoupon(req, res);
});
router.get("/coupon/byCourse", (req, res) => {
  CouponController.getAllCouponByCourse(req, res);
});
router.get("/coupon/get", (req, res) => {
  CouponController.getCoupons(req, res);
});

router.delete("/coupon/delete/:id", (req, res) => {
  CouponController.deleteCoupon(req, res);
});
router.get("/coupon/forEdit/:id", (req, res) => {
  CouponController.getCouponForEdit(req, res);
});
router.put("/coupon/edit/:id", (req, res) => {
  CouponController.couponEdit(req, res);
});
module.exports = router;
