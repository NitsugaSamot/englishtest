import { createLongTextQuestion, getLongTextQuestions, getLongTextQuestionById, updateLongTextQuestion, deleteLongTextQuestion } from '../controllers/longTextQuestionController';

export const createHandler = async (req, res) => {
  await createLongTextQuestion(req, res);
};

export const getAllHandler = async (req, res) => {
  await getLongTextQuestions(req, res);
};

export const getByIdHandler = async (req, res) => {
  await getLongTextQuestionById(req, res);
};

export const updateHandler = async (req, res) => {
  await updateLongTextQuestion(req, res);
};

export const deleteHandler = async (req, res) => {
  await deleteLongTextQuestion(req, res);
};
