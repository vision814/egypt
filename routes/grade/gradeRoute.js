const express = require("express");
const Controller = require("../../controller/grade/gradeController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
