const Quali = require("../../models/qualification/Qualification");
const getData = async (req, res) => {
  try {
    const data = await Quali.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
