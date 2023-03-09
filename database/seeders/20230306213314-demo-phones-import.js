'use strict';

const { Phones } = require('../models');

const fs = require('fs/promises');
const path = require('path');

const demoDataDirectoryPath = path.join(
  path.dirname(path.dirname(__dirname)),
  'demodata'
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const phonesJsonContent = JSON.parse(
      await fs.readFile(path.join(demoDataDirectoryPath, 'phones.json'))
    );
    await queryInterface.bulkInsert('Phones', phonesJsonContent, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(Phones.tableName, null, {});
  },
};
