import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Flag extends Model {
  declare uuid: string
  declare name: string
  declare path: string
}

Flag.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'flags',
    sequelize
  }
)

export default Flag
