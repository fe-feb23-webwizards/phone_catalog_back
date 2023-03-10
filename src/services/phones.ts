// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Phones } = require('../../database/models');
import { Phone as PhoneType } from '../types/Phone';
import { SortBy } from '../types/SortBy';

function normalize(phone: PhoneType) {
  const copyOfPhone = { ...phone };
  return copyOfPhone;
}

async function getMany(page: number, perPage: number, sortBy: string) {
  let loadedData: PhoneType[];

  try {
    switch (sortBy) {
    case SortBy.Alphabetically:
      loadedData = await Phones.findAll({
        order: ['name'],
        raw: true,
      });
      break;

    case SortBy.Cheapest:
      loadedData = await Phones.findAll({
        order: ['price'],
        raw: true,
      });
      break;

    default:
      loadedData = await Phones.findAll({
        order: [['year', 'DESC']],
        raw: true,
      });
      break;
    }
  } catch (e) {
    console.error(e);
    loadedData = [];
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

function findById(phoneId: string) {
  return Phones.findByPk(phoneId);
}

export const phonesServices = {
  normalize,
  getMany,
  findById,
};
