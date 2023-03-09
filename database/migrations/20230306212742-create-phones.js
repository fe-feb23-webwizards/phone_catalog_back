'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Phones',
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        category: {
          type: Sequelize.STRING,
        },
        phoneId: {
          type: Sequelize.STRING,
        },
        itemId: {
          type: Sequelize.STRING,
        },
        name: {
          type: Sequelize.STRING,
        },
        fullPrice: {
          type: Sequelize.INTEGER,
        },
        price: {
          type: Sequelize.INTEGER,
        },
        screen: {
          type: Sequelize.STRING,
        },
        capacity: {
          type: Sequelize.STRING,
        },
        color: {
          type: Sequelize.STRING,
        },
        ram: {
          type: Sequelize.STRING,
        },
        year: {
          type: Sequelize.INTEGER,
        },
        image: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      },
      {
        updatedAt: false,
      }
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Phones');
  },
};
