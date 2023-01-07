const Edu = require("../../models/edu-drop/Edu");
const Primary = require("../../models/edu-drop/Primary");
const Secondary = require("../../models/edu-drop/Secondary");
const High = require("../../models/edu-drop/High");
const getData = async (req, res) => {
  try {
    const data = await Edu.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const getPrimaryData = async (req, res) => {
  try {
    const data = await Primary.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getSecondaryData = async (req, res) => {
  try {
    const data = await Secondary.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const getHighData = async (req, res) => {
  try {
    const data = await High.find();
    res.json(data);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getData,
  getPrimaryData,
  getSecondaryData,
  getHighData,
};
