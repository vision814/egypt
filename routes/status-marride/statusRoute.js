const express = require("express");
const Controller = require("../../controller/status-marride/statusController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
