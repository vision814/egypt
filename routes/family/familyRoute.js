const express = require("express");
const Controller = require("../../controller/family/familyController");
const router = express.Router();
router.get("/", Controller.getData);

module.exports = router;
