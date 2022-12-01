'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Flats', [{
        title: '',
        description: 'Jenny',
        locaiton: '10 ospiti5 camere da letto5 letti3 bagni',
        price: '595€ notte',
        codeNo: 'c123',
        imageurl: 'url',
        UserId: '',
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
