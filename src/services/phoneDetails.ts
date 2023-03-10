const { phonesDetails } = require('../../database/models');
import _ from 'lodash';
import { PhoneDetails as PhoneDetailsType } from '../types/PhoneDetails';

function normalize(phone: PhoneDetailsType) {
  const copyOfPhone = _.cloneDeep(phone);

  delete copyOfPhone.createdAt;
  return copyOfPhone;
}

function findById(phoneId: string) {
  return phonesDetails.findByPk(phoneId);
}

export const phoneDetailsServices = {
  normalize,
  findById,
};
