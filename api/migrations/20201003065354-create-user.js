'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      profile: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      twitter_id: {
        type: Sequelize.STRING
      },
      facebook_id: {
        type: Sequelize.STRING
      },
      instagram_id: {
        type: Sequelize.STRING
      },
      github_id: {
        type: Sequelize.STRING
      },
      interesting_category_id: {
        type: Sequelize.INTEGER
      },
      introduced_code: {
        type: Sequelize.STRING
      },
      access_token: {
        type: Sequelize.STRING
      },
      identification:{
        type: Sequelize.BOOLEAN
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};