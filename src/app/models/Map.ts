import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'
import City from './City'

class Map extends Model {
  declare uuid: string
  declare name: string
  declare image: Blob
}

Map.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    image: {
      type: DataTypes.BLOB
    }
  },
  {
    tableName: 'maps',
    sequelize
  }
)

Map.hasMany(City)

export default Map
