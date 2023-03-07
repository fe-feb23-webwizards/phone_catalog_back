import { SortBy } from '../types/SortBy.mjs';
import db from '../../models/index.js';

function normalize(phone) {
  const copyOfPhone = { ...phone };

  delete copyOfPhone.createdAt;

  return copyOfPhone;
}

async function getMany(page, perPage, sortBy) {
  let loadedData;

  switch (sortBy) {
  case SortBy.Alphabetically:
    loadedData = await db.Phones.findAll({
      order: ['name'],
      raw: true,
    });
    break;

  case SortBy.Cheapest:
    loadedData = await db.Phones.findAll({
      order: ['price'],
      raw: true,
    });
    break;

  default:
    loadedData = await db.Phones.findAll({
      order: [['year', 'DESC']],
      raw: true,
    });
    break;
  }

  const phonesToSkip = perPage * (page - 1);
  const result = loadedData
    .slice(phonesToSkip, phonesToSkip + perPage)
    .map(normalize);

  return {
    result,
    loadedData: loadedData.length,
  };
}

function findById(phoneId) {
  return db.Phones.findByPk(phoneId);
}

export const phonesServices = {
  normalize,
  getMany,
  findById,
};
