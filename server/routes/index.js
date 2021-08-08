const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.js');
const typeRoutes = require("./type.js");
const rolesRoutes = require("./roles.js");
const productsRoutes = require("./products.js");
const categoryRoutes = require("./category.js");
const statusRoutes = require("./status.js");

router.use("/auth", authRoutes);
router.use("/type", typeRoutes);
router.use("/roles", rolesRoutes);
router.use("/products", productsRoutes);
router.use("/category", categoryRoutes);
router.use("/status", statusRoutes);
module.exports = router;