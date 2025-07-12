import express from 'express';
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';

const router = express.Router();

router.post('/create', createProject);
router.get('/getAll', getProjects);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

export default router;
