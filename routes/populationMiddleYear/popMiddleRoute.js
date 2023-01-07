const express = require("express");
const Controller = require("../../controller/populationMiddleYear/popMiddleController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
