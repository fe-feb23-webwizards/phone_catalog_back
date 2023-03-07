import _ from 'lodash';

import db from '../../models/index.js';

function normalize(phone) {
  const copyOfPhone = _.cloneDeep(phone);

  delete copyOfPhone.createdAt;

  return copyOfPhone;
}

function findById(phoneId) {
  return db.PhoneDetails.findByPk(phoneId);
}

export const phoneDetailsServices = {
  normalize,
  findById,
};
