import express from 'express'
import path from 'path'

import pets from './routes/pets'

const server = express()

server.use('/api/v1/result', pets)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
