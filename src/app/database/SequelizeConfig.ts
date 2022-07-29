import { Sequelize } from 'sequelize'
import DatabaseConfig from './Database'

class SequelizeConfig extends DatabaseConfig {
  public sequelize: Sequelize

  public constructor () {
    super()
    this.sequelize = new Sequelize(this.name, this.user, this.password, {
      dialect: 'mariadb',
      host: this.host,
      port: this.port,
      timezone: this.timeZone,
      logging: false
    })
  }
}

export default new SequelizeConfig().sequelize
