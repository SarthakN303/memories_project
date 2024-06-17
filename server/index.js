import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
const PORT = process.env.PORT || 8000
import connectToMongo from './db.js'
import postRoutes from './routes/postRoutes.js'

const app = express()
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// Routes
app.use('/posts', postRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
connectToMongo()
