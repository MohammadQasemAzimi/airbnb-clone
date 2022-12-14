'use strict';

const { NOW, DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Users', [{
        id:1,
        name: 'Qasem',
        lastName: 'Azimi',
        phoneNumber: '00397898789',
        email: 's@g.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
