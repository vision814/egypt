const express = require("express");
const Controller = require("../../controller/total-edu/totalController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
