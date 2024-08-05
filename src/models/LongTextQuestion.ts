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

const RelatedQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  options: {
    type: [OptionSchema],
    required: true,
  },
});

const LongTextQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  relatedQuestions: {
    type: [RelatedQuestionSchema],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const LongTextQuestion = mongoose.model('LongTextQuestion', LongTextQuestionSchema);
export default LongTextQuestion;
