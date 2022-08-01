import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'
import Coordenate from './Coordenate'

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

City.hasOne(Coordenate)

export default City
