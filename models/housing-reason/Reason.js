const mongoose = require("mongoose");
const reason = new mongoose.Schema({});
module.exports = mongoose.model("housing-reason", reason);
