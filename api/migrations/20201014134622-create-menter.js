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
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      /*
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'categories',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      */
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      main_image: {
        type: Sequelize.STRING
      },
      sub_image: {
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      contract_status: {
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menters');
  }
};