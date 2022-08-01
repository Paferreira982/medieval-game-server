import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Hold extends Model {
  declare uuid: string
  declare customName: string
}

Hold.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    customName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'holdings',
    sequelize
  }
)

export default Hold
