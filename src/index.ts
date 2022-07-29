import { io, server } from './server'

io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id)
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
