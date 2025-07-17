import express from 'express';
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import {verifyAdminToken} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create',verifyAdminToken, createProject);
router.get('/getAll', getProjects);
router.put('/update/:id',verifyAdminToken, updateProject);
router.delete('/delete/:id',verifyAdminToken, deleteProject);

export default router;
