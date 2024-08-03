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
  options: [OptionSchema],
});

const ParagraphSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const QuestionSchema = new mongoose.Schema({
  questionType: {
    type: String,
    enum: ['complete_sentence', 'two_paragraphs', 'long_text'],
    required: true,
  },
  questionText: {
    type: String,
    required: function () {
      return this.questionType === 'complete_sentence';
    },
  },
  options: {
    type: [OptionSchema],
    required: function () {
      return this.questionType === 'complete_sentence' || this.questionType === 'long_text';
    },
  },
  correctOptionIndex: {
    type: Number,
    required: function () {
      return this.questionType === 'complete_sentence' || this.questionType === 'long_text';
    },
  },
  paragraphs: {
    type: [ParagraphSchema],
    required: function () {
      return this.questionType === 'two_paragraphs' || this.questionType === 'long_text';
    },
  },
  relatedQuestions: {
    type: [RelatedQuestionSchema],
    required: function () {
      return this.questionType === 'two_paragraphs';
    },
  },
  category: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model('Question', QuestionSchema);
export default Question;
