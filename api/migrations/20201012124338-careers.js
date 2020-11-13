'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('careers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    description:{
      allowNull: false,
      type: Sequelize.STRING
    },
    start_year :{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    start_month :{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    end_year :{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    end_mouth :{
      allowNull: false,
      type: Sequelize.INTEGER
    },
    user_id: {
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
