const express = require("express");
const Controller = require("../../controller/edu-drop-age/eduController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
