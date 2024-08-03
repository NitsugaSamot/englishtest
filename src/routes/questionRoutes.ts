import express from 'express';
import {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from '../controllers/questionController';
import { handleValidationError, handleGenericError } from '../handlers/questionHandler';

const router = express.Router();

router.get('/', getAllQuestions); 
router.get('/:id', getQuestionById); 
router.post('/', createQuestion); 
router.put('/:id', updateQuestion); 
router.delete('/:id', deleteQuestion); 


router.use(handleValidationError);
router.use(handleGenericError);

export default router;
