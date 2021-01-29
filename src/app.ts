import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

// configurationa
dotenv.config()
import { port } from './config'
import logger from './logger'
import './database'
const app = express()

// routes


// middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
  logger.info(`Server Start Up On Port ${port} `)
})