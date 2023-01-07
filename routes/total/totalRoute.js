const express = require("express");
const popController = require("../../controller/total/totalAge");
const router = express.Router();
router.get("/", popController.getTotal);
router.get("/:city", popController.getTotalByCity);

module.exports = router;
