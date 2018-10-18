const router = require("express").Router();
const serviceRoutes = require("./serviceRoutes");

// Service routes
router.use("/service", serviceRoutes);

module.exports = router;
