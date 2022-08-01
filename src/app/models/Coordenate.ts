import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/SequelizeConfig'

class Coordenate extends Model {
  declare uuid: string
  declare name: string
}

Coordenate.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    x: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    y: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  },
  {
    tableName: 'coordenates',
    sequelize
  }
)

export default Coordenate
