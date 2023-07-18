import express, { Application } from "express";
import cors from 'cors';
import bookRouter from './app/modules/books/books.route'
import commentRouter from './app/modules/comments/comments.route'
const app:Application = express()

app.use(cors());

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/book',bookRouter)
app.use('/api/v1/comments',commentRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app