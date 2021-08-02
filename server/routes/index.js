const express = require("express");
const router = express.Router();

const authRoutes = require('./auth.js');
const typeRoutes = require("./type.js");

router.use("/auth", authRoutes);
router.use("/type", typeRoutes);
module.exports = router;