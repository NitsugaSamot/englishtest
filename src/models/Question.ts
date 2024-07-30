import mongoose from 'mongoose';

const OptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [OptionSchema],
  correctOptionIndex: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model('Question', QuestionSchema);
export default Question;
