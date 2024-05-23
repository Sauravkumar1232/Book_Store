const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
router.post("/user/create", (req, res) => {
  userController.createUser(req, res);
});

router.get("/user/list", (req, res) => {
  userController.getAllUser(req, res);
});

router.get("/user/get", (req, res) => {
  userController.getUsers(req, res);
});

router.delete("/user/delete/:id", (req, res) => {
  userController.deleteUser(req, res);
});
router.get("/user/forEdit/:id", (req, res) => {
  userController.getUserForEdit(req, res);
});
router.put("/user/edit/:id", (req, res) => {
  userController.userEdit(req, res);
});
module.exports = router;
