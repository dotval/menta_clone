'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  review.init({
    user_id:DataTypes.INTEGER,
    menter_id:DataTypes.INTEGER,
    body:DataTypes.TEXT,
    rank:DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'review',
    underscored: true,
  });
  review.associate = function(models) {
  review.belongsTo(models.user, {
    foreignKey: 'user_id',
  });
  }
  return review;
};