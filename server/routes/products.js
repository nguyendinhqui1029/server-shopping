const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.post(
  "/add-product",
  // productsController.IsAuthenticated,
  productsController.AddProduct
);

router.get("/get-products/:limit/:page", productsController.GetAllProducts);

router.get("/get-products/:id", productsController.GetProductsByID);

router.put(
  "/update-product",
  // productsController.IsAuthenticated,
  productsController.UpdateProductsById
);

router.delete(
  "/delete-product",
  // productsController.IsAuthenticated,
  productsController.DeleteProductById
);

module.exports = router;
