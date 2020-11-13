'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plan.init({
    menter_id: DataTypes.INTEGER,
    title:DataTypes.STRING,
    price: DataTypes.INTEGER,
    main_image:DataTypes.STRING,
    description:DataTypes.TEXT,
    is_subscription:DataTypes.INTEGER,
    status:DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'plan',
    underscored: true,
  });
  return plan;
};