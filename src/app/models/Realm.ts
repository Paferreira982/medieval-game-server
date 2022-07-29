import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'
import City from './City'

class Realm extends Model {
  declare uuid: string
  declare name: string
  declare gold: number
  declare wood: number
  declare iron: number
  declare brick: number
  declare soldier: number
  declare player: string
}

Realm.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    player: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ROBOT'
    },

    gold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    wood: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    iron: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    brick: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    soldier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'realms',
    sequelize
  }
)

Realm.hasMany(City)

export default Realm
