import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Realm extends Model {
  declare uuid: string
  declare name: string
  declare gold: number
  declare wood: number
  declare iron: number
  declare brick: number
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
    }

  },
  {
    tableName: 'realms',
    sequelize
  }
)

export default Realm
