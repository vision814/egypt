const mongoose = require("mongoose");
const status = new mongoose.Schema({});
module.exports = mongoose.model("status-marrid", status);
