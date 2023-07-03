import express from 'express'
import path from 'path'

import pets from './routes/pets'
import questions from './routes/questions'
import answers from './routes/answers'
import chat from './routes/chat'

const server = express()

server.use('/api/v1/result', pets)
server.use('/api/v1/questions', questions)
server.use('/api/v1/answers', answers)
server.use('/api/v1/chat', chat)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
