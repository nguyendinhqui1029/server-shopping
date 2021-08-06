const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.js');
const typeRoutes = require("./type.js");
const rolesRoutes = require("./roles.js");
const productsRoutes = require("./products.js");

router.use("/auth", authRoutes);
router.use("/type", typeRoutes);
router.use("/roles", rolesRoutes);
router.use("/products", productsRoutes);
module.exports = router;