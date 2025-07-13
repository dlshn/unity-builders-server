import express from 'express'; 
import { createPackage, getAllPackages, updatePackage, deletePackage } from '../controllers/packageController.js';

const router = express.Router();

router.post('/create', createPackage);
router.get("/getAll", getAllPackages);
router.put("/update/:id", updatePackage);
router.delete("/delete/:id", deletePackage); 

export default router; 
