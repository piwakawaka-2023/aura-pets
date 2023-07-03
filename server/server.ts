import express from 'express'
import path from 'path'

import pets from './routes/result'
import questions from './routes/questions'
import answers from './routes/answers'
import profile from './routes/users'

const server = express()

server.use('/api/v1/result', pets)
server.use('/api/v1/questions', questions)
server.use('/api/v1/answers', answers)
server.use('/api/v1/profile', profile)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
