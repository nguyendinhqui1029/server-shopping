const express = require("express");
const router = express.Router();

const typeController = require("../controllers/typeController");

router.get("/get-all-type/:limit/:page", typeController.GetAllType);

router.get("/get-type/:id", typeController.GetTypeByID);

router.post(
  "/new-type",
  typeController.IsAuthenticated,
  typeController.AddType
);

router.put(
  "/update-type",
  typeController.IsAuthenticated,
  typeController.UpdateTypeById
);

router.delete(
  "/delete-type/:id",
  typeController.IsAuthenticated,
  typeController.DeleteTypeById
);
module.exports = router;
