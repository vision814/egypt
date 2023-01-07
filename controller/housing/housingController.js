const Housing = require("../../models/housing/Housing");
const getData = async (req, res) => {
  try {
    const data = await Housing.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
