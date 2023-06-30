'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPart: {
        type: Sequelize.INTEGER
      },
      NameTest: {
        type: Sequelize.STRING
      },
      Correct: {
        type: Sequelize.STRING
      },
      Option1: {
        type: Sequelize.STRING
      },
      Option2: {
        type: Sequelize.STRING
      },
      Option3: {
        type: Sequelize.STRING
      },
      Audios: {
        type: Sequelize.STRING
      },
      Images: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};