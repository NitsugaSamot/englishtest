import mongoose, { Document, Schema } from 'mongoose';

interface SentenceCompletionQuestion extends Document {
  questionText: string;
  options: string[];
  correctOption: string;
  language: string; 
}

const SentenceCompletionQuestionSchema: Schema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true, validate: [optionsLimit, '{PATH} exceeds the limit of 10'] },
  correctOption: { type: String, required: true },
  language: { type: String, required: true }, 
});

function optionsLimit(val: string[]) {
  return val.length <= 10;
}

export default mongoose.model<SentenceCompletionQuestion>('SentenceCompletionQuestion', SentenceCompletionQuestionSchema);
