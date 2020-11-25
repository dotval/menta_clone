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
      menter.belongsTo(models.user);//ユーザーに属する
      //menter.belongsTo(models.category);//カテゴリーに属する
      menter.hasMany(models.plan);//プランを複数持つ
      //menter.belongsToMany(models.tag,{through:models.tag_menter});//タグ-メンターの中間テーブルを作成して多対多
      menter.hasMany(models.view_menter_count);
      menter.hasMany(models.review);
    }
  };
  menter.init({
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    main_image: DataTypes.STRING,
    sub_image: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    contract_status: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'menter',
    underscored: true,
  });
  return menter;
};