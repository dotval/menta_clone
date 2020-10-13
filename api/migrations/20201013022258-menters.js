'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('menters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING
      },
      main_image:{
        allowNull: false,
        type: Sequelize.STRING
      },
      sub_image:{
        allowNull: false,
        type: Sequelize.STRING
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description:{
        allowNull: false,
        type: Sequelize.TEXT
      },
      status:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      contract_status:{
        allowNull: false,
        type: Sequelize.INTEGER
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
    }
  )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
