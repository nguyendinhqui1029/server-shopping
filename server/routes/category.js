const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.post(
  "/add-category",
  // categoryController.IsAuthenticated,
  categoryController.AddCategory
);

router.get("/get-categories/:limit/:page", categoryController.GetAllCategory);

router.get("/get-categories/:id", categoryController.GetCategoryByID);

router.put(
  "/update-categories",
  // categoryController.IsAuthenticated,
  categoryController.UpdateCategorysById
);

router.delete(
  "/delete-categories/:id",
  // categoryController.IsAuthenticated,
  categoryController.DeleteCategoryById
);

module.exports = router;
