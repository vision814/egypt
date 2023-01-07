const express = require("express");
const Controller = require("../../controller/ages/ageController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
