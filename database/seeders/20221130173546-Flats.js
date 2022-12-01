'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Flats', [{
        title: 'Two bed room',
        description: 'with 76 squere meter and furnshed ...',
        locaiton: '10 ospiti5 camere da letto5 letti3 bagni',
        price: 595,
        codeNo: 123,
        imageurl: 'url',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
