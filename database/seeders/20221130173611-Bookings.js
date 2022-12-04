'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [{
      
      FlatId: 1,
    UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      checkin: new Date(),
      checkout: new Date(),
      guest: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
