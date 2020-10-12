'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('skills', {
        // id int NOT NULL AUTO_INCREMENT,
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        // tag_id int,
        tag_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        // level int,
        level: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        // experience_years int,
        experience_years: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        // user_id int,
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
