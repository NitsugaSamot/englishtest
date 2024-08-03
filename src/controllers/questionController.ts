import { Request, Response } from 'express';
import Question from '../models/Question';


export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getQuestionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createQuestion = async (req: Request, res: Response) => {
  const { questionType, questionText, options, correctOptionIndex, paragraphs, relatedQuestions, category } = req.body;

  const questionData = {
    questionType,
    questionText,
    options,
    correctOptionIndex,
    paragraphs,
    relatedQuestions,
    category,
  };

  const question = new Question(questionData);

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const question = await Question.findByIdAndUpdate(id, updates, { new: true });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findByIdAndDelete(id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(204).json(); // Respuesta sin contenido (204)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
