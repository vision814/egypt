const Family = require("../../models/family/Family");
const getData = async (req, res) => {
  try {
    const data = await Family.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
