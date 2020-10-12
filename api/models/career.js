'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class career extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  career.init({
    description: DataTypes.STRING,
    start_year:DataTypes.INTEGER,
    start_month:DataTypes.INTEGER,
    end_year:DataTypes.INTEGER,
    end_mouth:DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'career',
    underscored: true,
  });

  return career;
};