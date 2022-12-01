'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('User', [{
        name: 'Qasem',
        lastName: 'Azimi',
        phoneNumber: '00397898789',
        email: 's@g.com'
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('User', null, {});
  }
};
