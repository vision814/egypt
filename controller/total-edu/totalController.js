const Total = require("../../models/total-edu/Total");
const getData = async (req, res) => {
  try {
    const data = await Total.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};