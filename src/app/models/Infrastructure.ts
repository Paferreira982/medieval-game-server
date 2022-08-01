import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Infrastructure extends Model {
  declare uuid: string
  declare lumber_level: number
  declare mine_level: number
  declare pottery_level: number
  declare storage_level: number
  declare quarter_level: number
  declare market_level: number
  declare wall_level: number
  declare farm_level: number
}

Infrastructure.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    lumber_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    mine_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    pottery_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    storage_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    quarter_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    market_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    wall_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    farm_level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    }
  },
  {
    tableName: 'infrastructures',
    sequelize
  }
)

export default Infrastructure
