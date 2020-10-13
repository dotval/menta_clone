'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class view_menter_count extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  view_menter_count.init({
    user_id: DataTypes.INTEGER,
    menter_id: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'view_menter_count',
    underscored: true,
  });
  view_menter_count.associate = function (models) {
  }
  return view_menter_count;
};