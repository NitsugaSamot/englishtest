import mongoose, { Document, Schema } from 'mongoose';

interface Option {
  option: string;
  isCorrect: boolean;
}

interface SentenceCompletionQuestion extends Document {
  questionText: string;
  options: Option[];
  correctOption: string;
  language: string;
  points: number; 
}

const SentenceCompletionQuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: { 
    type: [{ option: String, isCorrect: Boolean }], 
    required: true, 
    validate: [optionsLimit, '{PATH} exceeds the limit of 10'] 
  },
  correctOption: { type: String, required: true },
  language: { type: String, required: true },
  points: { type: Number, required: true } 
});

function optionsLimit(val: Option[]) {
  return val.length <= 10;
}

export default mongoose.model<SentenceCompletionQuestion>('SentenceCompletionQuestion', SentenceCompletionQuestionSchema);



