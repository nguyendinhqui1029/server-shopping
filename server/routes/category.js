const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.post(
  "/add-category",
  // productsController.IsAuthenticated,
  productsController.AddProduct
);

router.get("/get-categories/:limit/:page", productsController.GetAllProducts);

router.get("/get-categories/:id", productsController.GetProductsByID);

router.put(
  "/update-categories",
  // productsController.IsAuthenticated,
  productsController.UpdateProductsById
);

router.delete(
  "/delete-categories",
  // productsController.IsAuthenticated,
  productsController.DeleteProductById
);

module.exports = router;
