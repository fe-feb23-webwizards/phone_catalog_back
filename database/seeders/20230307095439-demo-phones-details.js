const { phonesDetails } = require('../models');
const fs = require('fs/promises');
const path = require('path');

const demoDataDirectoryPath = path.join(path.dirname(path.dirname(__dirname)), 'demodata');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const demoPhonesDirectory = path.join(demoDataDirectoryPath, 'phones');
    const files = await fs.readdir(demoPhonesDirectory);


    const phoneDetailsArr = [];

    for (const file of files) {
      const filePath = path.join(demoPhonesDirectory, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const phoneDetails = JSON.parse(content);
      phoneDetails.description = JSON.stringify(phoneDetails.description);
      phoneDetailsArr.push(phoneDetails);
    }

    await queryInterface.bulkInsert('phonesDetails', phoneDetailsArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phonesDetails', null, {});
  },
};
