'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nota_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Notas', key: 'id'}
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      taskRelevance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};