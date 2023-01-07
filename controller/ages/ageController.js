const Age = require("../../models/ages/Ages");
const getData = async (req, res) => {
  try {
    const data = await Age.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
