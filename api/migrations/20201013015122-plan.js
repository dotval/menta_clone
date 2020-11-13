'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menter_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      main_image:{
        allowNull: false,
        type: Sequelize.STRING
      },
      description:{
        allowNull: false,
        type: Sequelize.TEXT
      },
      is_subscription:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status:{
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
  });
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
