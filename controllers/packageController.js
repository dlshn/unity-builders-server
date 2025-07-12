// controllers/packageController.js
import Package from '../models/package.js'; 

// @desc   Create a new package
// @route  POST /api/packages/create 
// @access Public
export const createPackage = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      Square_feets,
      location,
      bedrooms_first_floor,
      bedrooms_second_floor,
      bathrooms_first_floor,
      bathrooms_second_floor,
      urls
    } = req.body;

    // Validation: Check all required fields
    if (!title || !description || !price || !Square_feets || !urls || urls.length !== 4) {
      return res.status(400).json({ message: 'Missing required fields or images' });
    }

    const newPackage = new Package({
      title,
      description,
      price,
      Square_feets,
      location,
      bedrooms_first_floor,
      bedrooms_second_floor,
      bathrooms_first_floor,
      bathrooms_second_floor,
      urls
    });

    await newPackage.save();
    res.status(201).json({ message: 'Package created successfully', package: newPackage });

  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch packages." });
  }
};