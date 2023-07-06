'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NameTest: {
        type: Sequelize.STRING
      },
      Right: {
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
      Option4: {
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
    await queryInterface.dropTable('Tests');
  }
};