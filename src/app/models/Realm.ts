import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

import Flag from './Flag'
import Hold from './Hold'

class Realm extends Model {
  declare uuid: string
  declare name: string
  declare gold: number
  declare wood: number
  declare iron: number
  declare brick: number
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

    player: {
      type: DataTypes.STRING,
      allowNull: true
    }

  },
  {
    tableName: 'realms',
    sequelize
  }
)

Realm.belongsTo(Flag)
Realm.hasMany(Hold)

export default Realm
