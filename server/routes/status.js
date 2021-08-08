const express = require("express");
const router = express.Router();

const statusController = require("../controllers/statusController");

router.post(
  "/add-status",
  // productsController.IsAuthenticated,
  statusController.AddStatus
);

router.get("/get-status/:limit/:page", statusController.GetAllStatus);

router.get("/get-status/:id", statusController.GetStatusByID);

router.put(
  "/update-status",
  // statusController.IsAuthenticated,
  statusController.UpdateStatusById
);

router.delete(
  "/delete-status/:id",
  // statusController.IsAuthenticated,
  statusController.DeleteStatusById
);

module.exports = router;
