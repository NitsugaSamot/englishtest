// src/models/TestResult.ts
import mongoose from 'mongoose';

const TestResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    default: 20,
  },
  resultType: {
    type: String,
    enum: ['advanced', 'intermediate-advanced', 'intermediate', 'beginner'],
    required: true,
  },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
      },
      selectedOptionIndex: {
        type: Number,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TestResult = mongoose.model('TestResult', TestResultSchema);
export default TestResult;
