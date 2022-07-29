import { io, server } from './server'
// import Infrastructure from './app/models/Infrastructure'
// import City from './app/models/City'
// import Sequelize from './app/database/SequelizeConfig'
// import Realm from './app/models/Realm'

// setTimeout(() => {
//   Sequelize.sync().then(() => {
//     City.findAll()
//     Infrastructure.findAll()
//     Realm.findAll()
//   })
//   console.log('sync')
// }, 2000)

io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id)
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
