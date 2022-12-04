'use strict';
const {Model, DataTypes} = require('sequelize');
import connection from '../connection';
const initFlats = (sequelize, DataTypes) => {
  class Flats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flats.hasMany(models.User),
      Flats.hasMany(models.Bookings)
    }
  }
  Flats.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    locaiton: DataTypes.STRING,
    price: DataTypes.INTEGER,
    codeNo: DataTypes.INTEGER,
    imageurl: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flats',
  });
  return Flats;
};
export default initFlats(connection, DataTypes);