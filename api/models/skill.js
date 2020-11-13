'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  skill.init({
    tag_id: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    experience_years: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'skill',
    underscored: true,
  });

  return skill;
};