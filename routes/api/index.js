const router = require("express").Router();
const playersRoutes = require("./players");

// Book routes
router.use("/players", playersRoutes);

module.exports = router;
