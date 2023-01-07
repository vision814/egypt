const Grade = require("../../models/grade/Grade");
const getData = async (req, res) => {
  try {
    const data = await Grade.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
