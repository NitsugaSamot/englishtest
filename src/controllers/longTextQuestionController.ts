import LongTextQuestion from '../models/LongTextQuestion';

export const createLongTextQuestion = async (req, res) => {
  try {
    const longTextQuestion = new LongTextQuestion(req.body);
    await longTextQuestion.save();
    res.status(201).json(longTextQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getLongTextQuestions = async (req, res) => {
  try {
    const longTextQuestions = await LongTextQuestion.find();
    res.status(200).json(longTextQuestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLongTextQuestionById = async (req, res) => {
  try {
    const longTextQuestion = await LongTextQuestion.findById(req.params.id);
    if (!longTextQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(longTextQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLongTextQuestion = async (req, res) => {
  try {
    const longTextQuestion = await LongTextQuestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!longTextQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(longTextQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLongTextQuestion = async (req, res) => {
  try {
    const longTextQuestion = await LongTextQuestion.findByIdAndDelete(req.params.id);
    if (!longTextQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
