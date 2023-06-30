'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      idPart: 1,
      NameTest: 'Test 1',
      Correct: 'A: Trung Anh',
      Option1: 'A: Trung Anh',
      Option2: 'B: Đẹp trai',
      Option3: 'C: Đá bóng hay',
      Audios: '...',
      Images: '...',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
