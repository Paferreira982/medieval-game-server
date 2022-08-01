import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Save extends Model {
  declare uuid: string
  declare name: string
}

Save.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'saves',
    sequelize
  }
)

export default Save
