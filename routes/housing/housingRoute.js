const express = require("express");
const Controller = require("../../controller/housing/housingController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
