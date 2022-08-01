import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Army extends Model {
  declare uuid: string
  declare spearmen: number
  declare swordsmen: number
  declare knights: number
  declare archers: number
}

Army.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    spearmen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    swordsmen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    knights: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },

    archers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'armies',
    sequelize
  }
)

export default Army
