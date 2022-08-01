import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class City extends Model {
  declare uuid: string
  declare name: string
}

City.init(
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
    tableName: 'cities',
    sequelize
  }
)

export default City
