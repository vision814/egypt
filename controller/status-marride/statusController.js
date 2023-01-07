const Status = require("../../models/status-marride/Status");
const getData = async (req, res) => {
  try {
    const data = await Status.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
};
