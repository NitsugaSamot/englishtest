
import express from 'express';
import { createHandler, getAllHandler, getByIdHandler, updateHandler, deleteHandler } from '../handlers/longTextQuestionHandler';

const router = express.Router();


router.post('/', createHandler);


router.get('/', getAllHandler);


router.get('/:id', getByIdHandler);


router.put('/:id', updateHandler);

router.delete('/:id', deleteHandler);

export default router;
