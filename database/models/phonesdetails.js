'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class phonesDetails extends Model {
    static associate() {
      //
    }
  }
  phonesDetails.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      namespaceId: DataTypes.STRING,
      name: DataTypes.STRING,
      capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
      capacity: DataTypes.STRING,
      priceRegular: DataTypes.INTEGER,
      priceDiscount: DataTypes.INTEGER,
      colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
      color: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
      description: DataTypes.JSON,
      screen: DataTypes.STRING,
      resolution: DataTypes.STRING,
      processor: DataTypes.STRING,
      ram: DataTypes.STRING,
      camera: DataTypes.STRING,
      zoom: DataTypes.STRING,
      cell: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: 'phonesDetails',
      createdAt: true,
      updatedAt: false,
    }
  );
  return phonesDetails;
};
