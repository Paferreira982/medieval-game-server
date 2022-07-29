import express from 'express'

import Database from './app/database'
import sequelize from './app/database/SequelizeConfig'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.database()
    this.middlewares()
  }

  private database (): void {
    Database.createDatabase()
      .then(async () => {
        await sequelize.sync()
      })
  }

  private middlewares (): void {
    this.express.use(express.json())
  }
}

export default new App().express
