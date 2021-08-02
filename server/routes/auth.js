const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signin", userController.SignIn);

router.post(
  "/new-user",
  userController.IsAuthenticated,
  userController.AddUser
);

router.get("/get-users/:limit/:page", userController.getAllUser);

router.put(
  "/update-user",
  userController.IsAuthenticated,
  userController.UpdateUser
);

module.exports = router;
