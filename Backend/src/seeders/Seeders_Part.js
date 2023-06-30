'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Parts', [
    {
      NamePart: 'Part 1',
      numTest: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        NamePart: 'Part 2',
        numTest: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NamePart: 'Part 3',
        numTest: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NamePart: 'Part 4',
        numTest: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NamePart: 'Part 5',
        numTest: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NamePart: 'Part 6',
        numTest: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NamePart: 'Part 7',
        numTest: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ]);
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
