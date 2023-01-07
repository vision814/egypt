const Edu = require("../../models/edu-drop-age/Edu");
const getData = async (req, res) => {
  try {
    const data = await Edu.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
