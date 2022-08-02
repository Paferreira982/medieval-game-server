import { io, server } from './server'

// import Sequelize from './app/database/SequelizeConfig'
// import Infrastructure from './app/models/Infrastructure'
// import City from './app/models/City'
// import Realm from './app/models/Realm'
// import Army from './app/models/Army'
// import Coordenate from './app/models/Coordenate'
// import Flag from './app/models/Flag'
// import Hold from './app/models/Hold'
// import Map from './app/models/Map'
// import Save from './app/models/Save'

// const test = () => {
//   City.findAll()
//   Infrastructure.findAll()
//   Army.findAll()
//   Coordenate.findAll()
//   Flag.findAll()
//   Hold.findAll()
//   Map.findAll()
//   Realm.findAll()
//   Save.findAll()
// }

// setTimeout(() => {
//   Sequelize.sync()
//   console.log('sync')
// }, 2000)

io.on('connection', (socket) => {
  console.log('a user connected: ' + socket.id)
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
