const HealthAdvice = require("../models/healthAdvice");

const createHealthAdvice = async (req, res) => {
  try {
    const newAdvice = await HealthAdvice.create(req.body);
    res.status(201).json(newAdvice);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const getHealthAdvice = async (req, res) => {
  try {
    const allAdvice = await HealthAdvice.find().populate("products");
    res.status(200).json(allAdvice);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const getAHealthAdvice = async (req, res) => {
  try {
    const { id } = req.params;
    const advice = await HealthAdvice.findById(id).populate("products");
    if (!advice) {
      return res.status(404).json({status: "error", message:"Health Advice not found"});
    }
    res.status(200).json(advice);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const updateHealthAdvice = async (req, res) => {
  try {
    const { id } = req.params;
    const advice = await HealthAdvice.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(advice);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const deleteHealthAdvice = async (req, res) => {
  try {
    const { id } = req.params;
    const advice = await HealthAdvice.findByIdAndDelete(id);
    res.status(200).json(advice);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const searchHealthAdvice = async (req, res) => {
  try {
    const query = req.query.query || "";
    // If no query, return empty or limit to a few
    if (!query) return res.status(200).json([]);
    const advices = await HealthAdvice.find({
      $or: [
        { conditionName: { $regex: query, $options: "i" } },
        { keySymptoms: { $regex: query, $options: "i" } },
        { healthAdvice: { $regex: query, $options: "i" } }
      ],
    }).populate("products");
    res.status(200).json(advices);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  createHealthAdvice,
  getHealthAdvice,
  getAHealthAdvice,
  updateHealthAdvice,
  deleteHealthAdvice,
  searchHealthAdvice,
};
