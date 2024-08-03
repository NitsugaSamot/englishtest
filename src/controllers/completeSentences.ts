import { Request, Response } from 'express';
import SentenceCompletionQuestion from '../models/SentenceCompletionQuestion';

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const question = new SentenceCompletionQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await SentenceCompletionQuestion.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const question = await SentenceCompletionQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const question = await SentenceCompletionQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const question = await SentenceCompletionQuestion.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener idiomas únicos
export const getLanguages = async (req: Request, res: Response) => {
  try {
    const languages = await SentenceCompletionQuestion.distinct('language');
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
