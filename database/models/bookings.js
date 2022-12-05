'use strict';
const {Model, DataTypes} = require('sequelize');
import connection from '../connection';
const initBooking = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookings.belongsTo(models.User),
      Bookings.belongsTo(models.Flats)
    }
  }
  Bookings.init({
    FlatId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    guest: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};
export default initBooking(connection, DataTypes);