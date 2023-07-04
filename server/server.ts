import express from 'express'
import { join } from 'node:path'

import result from './routes/result'
import questions from './routes/questions'
import answers from './routes/answers'
import profile from './routes/users'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/result', result)
server.use('/api/v1/questions', questions)
server.use('/api/v1/answers', answers)
server.use('/api/v1/profile', profile)

export default server
