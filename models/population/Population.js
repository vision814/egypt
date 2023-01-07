const mongoose = require("mongoose");
const popSchema = new mongoose.Schema({});
module.exports = mongoose.model("population", popSchema);
