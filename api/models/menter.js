'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  menter.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    main_image: DataTypes.STRING,
    sub_image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'menter',
    underscored: true,
  });
  menter.associate = function (models) {
    menter.hasMany(models.plan, {
      foreignKey: 'menter_id',
    });
    menter.hasMany(models.view_menter_count, {
      foreignKey: 'menter_id',
    });
    menter.hasMany(models.review, {
      foreignKey: 'menter_id',
    });
  }
  return menter;
};