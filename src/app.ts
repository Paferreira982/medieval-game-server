import express from 'express'
import Database from './app/database'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.database()
    this.middlewares()
  }

  private middlewares (): void {
    this.express.use(express.json())
  }

  private database (): void {
    Database.prepareDatabase()
  }
}

export default new App().express
