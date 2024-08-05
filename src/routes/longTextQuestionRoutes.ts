import express from 'express';
import {
  createLongTextQuestion,
  getLongTextQuestions,
  getLongTextQuestionById,
  updateLongTextQuestion,
  deleteLongTextQuestion,
} from '../controllers/longTextQuestionController';

const router = express.Router();

router.post('/', createLongTextQuestion);
router.get('/', getLongTextQuestions);
router.get('/:id', getLongTextQuestionById);
router.put('/:id', updateLongTextQuestion);
router.delete('/:id', deleteLongTextQuestion);

export default router;
