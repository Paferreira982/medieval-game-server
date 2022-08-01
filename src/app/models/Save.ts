import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

import Realm from './Realm'
import Map from './Map'

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

Save.hasMany(Realm)
Save.belongsTo(Map)

export default Save
