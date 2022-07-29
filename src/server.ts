import app from './app'
import http from 'http'
import { Server } from 'socket.io'

const server = http.createServer(app)
const io = new Server(server)

export { server, io }
