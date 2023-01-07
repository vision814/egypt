const express = require("express");
const Controller = require("../../controller/housing-reason/housingReasonController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
