import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Infrastructure extends Model {
  declare uuid: string
  declare lumberLVL: number
  declare mineLVL: number
  declare potteryLVL: number
  declare storageLVL: number
  declare quarterLVL: number
  declare marketLVL: number
  declare wallLVL: number
  declare farmLVL: number
}

Infrastructure.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    lumberLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    mineLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    potteryLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    storageLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    quarterLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    marketLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    wallLVL: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    },

    farmLVL: {
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
