import mariadb from 'mariadb'
import DatabaseConfig from './Database'

class Database extends DatabaseConfig {
  private pool: mariadb.Pool
  private connection: mariadb.PoolConnection

  constructor () {
    super()

    this.pool = mariadb.createPool({
      host: this.host,
      user: this.user,
      password: this.password,
      connectionLimit: 5
    })
  }

  public async prepareDatabase (): Promise<void> {
    return this.pool.getConnection()
      .then(connection => {
        this.connection = connection
        this.connection.query(`
          SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${this.name}'
        `).then(response => {
          if (!response[0]) this.createDatabase()
        })
      })
      .catch(error => { console.error(error) })
      .finally(() => {
        if (this.connection) this.connection.end()
      })
  }

  private async createDatabase (): Promise<void> {
    return this.pool.getConnection()
      .then(connection => {
        this.connection = connection
        this.connection.query(`CREATE DATABASE IF NOT EXISTS ${this.name}`)
      })
      .catch(error => { console.error(error) })
      .finally(() => {
        if (this.connection) this.connection.end()
      })
  }
}

export default new Database()
