const mongoose = require("mongoose");
const total = new mongoose.Schema({});
module.exports = mongoose.model("total-drop", total);
