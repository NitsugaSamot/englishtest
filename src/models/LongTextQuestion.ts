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

const ParagraphSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const LongTextQuestionSchema = new mongoose.Schema({
  paragraphs: {
    type: [ParagraphSchema],
    required: true,
  },
  relatedQuestions: {
    type: [new mongoose.Schema({
      text: {
        type: String,
        required: true,
      },
      options: {
        type: [OptionSchema],
        required: true,
      }
    })],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const LongTextQuestion = mongoose.model('LongTextQuestion', LongTextQuestionSchema);
export default LongTextQuestion;
