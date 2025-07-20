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
      bedrooms_ground_floor,
      bedrooms_first_floor,
      bedrooms_second_floor,
      bathrooms_ground_floor,
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
      bedrooms_ground_floor,
      bedrooms_first_floor,
      bedrooms_second_floor,
      bathrooms_ground_floor,
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
    const packages = await Package.find().sort({ price: 1 }); 
    res.json(packages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch packages." });
  }
};

// Update a package
export const updatePackage = async (req, res) => {
  try {
    const updated = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package updated", package: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating package", error });
  }
};

// Delete a package
export const deletePackage = async (req, res) => {
  try {
    const deleted = await Package.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting package", error });
  }
};

export const getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ message: "Error fetching package", error });
  }
}