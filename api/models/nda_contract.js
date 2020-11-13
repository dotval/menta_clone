'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nda_contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  nda_contract.init({
    user_id :DataTypes.INTEGER,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'nda_contract',
    underscored: true,
  });

  return nda_contract;
};