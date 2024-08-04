import { Request, Response } from 'express';
import ParagraphComparisonQuestion from '../models/ParagraphComparisonQuestion';


export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await ParagraphComparisonQuestion.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuestionById = async (req: Request, res: Response) => {
  try {
    const question = await ParagraphComparisonQuestion.findById(req.params.id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createQuestion = async (req: Request, res: Response) => {
  const { paragraphA, paragraphB, questions } = req.body;

  const newQuestion = new ParagraphComparisonQuestion({
    paragraphA,
    paragraphB,
    questions
  });

  try {
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const updatedQuestion = await ParagraphComparisonQuestion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedQuestion) {
      res.json(updatedQuestion);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    const deletedQuestion = await ParagraphComparisonQuestion.findByIdAndDelete(req.params.id);
    if (deletedQuestion) {
      res.json({ message: 'Question deleted' });
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
