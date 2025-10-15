import Interior from "../models/interior.js";

// @desc Get all Interiors
export const getInterior = async (req, res) => {
  try {
    const interior = await Interior.find();
    res.json(interior);
  } catch (err) {
    res.status(500).json({ error: "Error fetching templates" });
  }
};

// @desc Create new Interior
export const createInterior = async (req, res) => {
  try {
    const interior = new Interior(req.body);
    const saved = await interior.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Error creating template" });
  }
};
