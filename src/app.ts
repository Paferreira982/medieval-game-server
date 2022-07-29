import express from 'express'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
  }

  private middlewares (): void {
    this.express.use(express.json())
  }
}

export default new App().express
