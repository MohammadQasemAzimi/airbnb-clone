'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flats.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    locaiton: DataTypes.STRING,
    price: DataTypes.INTEGER,
    codeNo: DataTypes.INTEGER,
    imageurl: DataTypes.STRING,
    UserId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flats',
  });
  return Flats;
};