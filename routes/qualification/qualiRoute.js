const express = require("express");
const Controller = require("../../controller/qualification/qualiController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
