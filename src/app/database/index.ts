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

  public async createDatabase (): Promise<void> {
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
