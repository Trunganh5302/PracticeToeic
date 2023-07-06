'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test.init({
    NameTest: DataTypes.STRING,
    Right: DataTypes.STRING,
    Option1: DataTypes.STRING,
    Option2: DataTypes.STRING,
    Option3: DataTypes.STRING,
    Option4: DataTypes.STRING,
    Audios: DataTypes.STRING,
    Images: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};