const express = require("express");
const Controller = require("../../controller/population/popController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
