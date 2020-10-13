'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile: DataTypes.TEXT,
    url: DataTypes.STRING,
    twitter_id: DataTypes.STRING,
    facebook_id: DataTypes.STRING,
    instagram_id: DataTypes.STRING,
    github_id: DataTypes.STRING,
    interesting_category_id: DataTypes.INTEGER,
    introduced_code: DataTypes.STRING,
    access_token: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });

  user.associate = function(models) {
    user.hasMany(models.skill, {
      foreignKey: 'user_id',
    });
    user.hasMany(models.career, {
      foreignKey: 'user_id',
    });
    user.hasOne(models.nda_contract, {
      foreignKey: 'user_id',
    });
    user.hasOne(models.score, {
      foreignKey: 'user_id',
    });
  }
  return user;
};