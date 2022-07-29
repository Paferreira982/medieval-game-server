class Database {
  protected name: string
  protected user: string
  protected password: string
  protected host: string
  protected port: number
  protected timeZone: string

  public constructor () {
    this.name = process.env.DB_NAME || 'game'
    this.user = process.env.DB_USER || 'root'
    this.password = process.env.DB_PASSWORD || '1234'
    this.host = process.env.DB_URL || 'localhost'
    this.port = (process.env.DB_PORT) ? parseInt(process.env.DB_PORT) : 3306
    this.timeZone = process.env.DB_TZ || 'America/Sao_Paulo'
  }
}

export default Database
