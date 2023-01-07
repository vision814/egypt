const express = require("express");
const Controller = require("../../controller/edu-drop/eduController");
const router = express.Router();
router.get("/", Controller.getData);
router.get("/primary", Controller.getPrimaryData);
router.get("/secondary", Controller.getSecondaryData);
router.get("/high", Controller.getHighData);

module.exports = router;
