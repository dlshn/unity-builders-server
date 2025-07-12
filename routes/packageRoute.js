import express from 'express';
import { createPackage, getAllPackages } from '../controllers/packageController.js';

const router = express.Router();

router.post('/create', createPackage);
router.get("/getAll", getAllPackages);

export default router; 
