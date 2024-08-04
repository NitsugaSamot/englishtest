
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { corsConfig } from './config/cors';
import { connectDB } from './config/db';
import longTextQuestionRoutes from './routes/longTextQuestionRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import completeSentences from './routes/completeSentence';
import questionRoutes from './routes/questionRoutes'

dotenv.config();
connectDB();

const app = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 

app.use('/api/question', completeSentences);
app.use('/api/secondSection', questionRoutes);
app.use('/api/thirdSection', longTextQuestionRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

export default app;
