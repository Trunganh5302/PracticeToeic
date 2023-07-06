'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tests', [
    {
        NameTest: 'Test 1',
        Right: "A: Trung Anh",
        Option1: 'A: Trung Anh',
        Option2: 'B: Trung Anh',
        Option3: 'C: Trung Anh',
        Option4: 'D: Trung Anh',
        Audios: 'Backend/src/file/13.01.mp3',
        Images: 'Backend/src/file/Javascript.png',
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
