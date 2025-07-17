import express from 'express'; 
import { createPackage, getAllPackages, updatePackage, deletePackage } from '../controllers/packageController.js';
import {verifyAdminToken} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create',verifyAdminToken, createPackage);
router.get("/getAll", getAllPackages);
router.put("/update/:id",verifyAdminToken, updatePackage);
router.delete("/delete/:id",verifyAdminToken, deletePackage);

export default router; 
