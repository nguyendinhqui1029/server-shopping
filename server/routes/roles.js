const express = require("express");
const router = express.Router();

const rolesController = require("../controllers/rolesController");


router.post(
  "/new-role",
  rolesController.IsAuthenticated,
  rolesController.AddRoles
);

router.get("/get-roles/:limit/:page", rolesController.GetAllRoles);

router.get("/get-roles/:id", rolesController.GetRolesByID);

router.put(
  "/update-role",
  rolesController.IsAuthenticated,
  rolesController.UpdateRolesById
);

router.delete(
  "/delete-role",
  rolesController.IsAuthenticated,
  rolesController.DeleteRolesById
);

module.exports = router;
