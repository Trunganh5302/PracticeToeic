'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Questions', [
    {
      NameQuestion: 'Question 1-2',
      numQuestion: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 3-4',
        numQuestion: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 5-7',
        numQuestion: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 8-10',
        numQuestion: 14,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 11',
        numQuestion: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 1-5',
        numQuestion: 6,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 6-7',
        numQuestion: 8,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        NameQuestion: 'Question 8',
        numQuestion: 8,
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
