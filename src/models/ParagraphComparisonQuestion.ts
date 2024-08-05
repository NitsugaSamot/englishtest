import mongoose, { Document, Schema } from 'mongoose';

interface ParagraphComparisonQuestion extends Document {
  paragraphA: string;
  paragraphB: string;
  questions: {
    questionText: string;
    correctAnswer: 'A' | 'B' | 'Both';
  }[];
  points: number;
}

const ParagraphComparisonQuestionSchema: Schema = new Schema({
  paragraphA: { type: String, required: true },
  paragraphB: { type: String, required: true },
  questions: [{
    questionText: { type: String, required: true },
    correctAnswer: { type: String, enum: ['A', 'B', 'Both'], required: true }
  }],
  points: { type: Number, default: 2.5 }
});

export default mongoose.model<ParagraphComparisonQuestion>('ParagraphComparisonQuestion', ParagraphComparisonQuestionSchema);
