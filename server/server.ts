import express from 'express'
import path from 'path'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

export default server
