const Population = require("../../models/population/Population");
const getData = async (req, res) => {
  try {
    const data = await Population.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
