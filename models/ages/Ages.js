const mongoose = require("mongoose");
const ages = new mongoose.Schema({});
module.exports = mongoose.model("age", ages);
