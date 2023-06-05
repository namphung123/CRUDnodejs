import express from 'express';
const router = express.Router();
import {
  getAllTask,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from '../controllers/tasks.js';

router.get('/', getAllTask);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
