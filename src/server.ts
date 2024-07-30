import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { corsConfig } from './config/cors'
import { connectDB } from './config/db'
import questionRoutes from './routes/questionRoutes'

dotenv.config()
connectDB()

const app = express()
app.use(cors(corsConfig))

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/question', questionRoutes)


export default app