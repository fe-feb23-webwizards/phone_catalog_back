const { phonesDetails } = require('../models');
const fs = require('fs/promises');
const path = require('path');

const demoDataDirectoryPath = path.join(
  path.dirname(path.dirname(__dirname)),
  'demodata'
);
const CDN_PREFIX =
  'https://raw.githubusercontent.com/fe-feb23-webwizards/phone_catalog_images/main/';

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
      phoneDetails.images = phoneDetails.images.map((img) => {
        return CDN_PREFIX + img;
      });

      phoneDetailsArr.push(phoneDetails);
    }

    await queryInterface.bulkInsert('phonesDetails', phoneDetailsArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phonesDetails', null, {});
  },
};
