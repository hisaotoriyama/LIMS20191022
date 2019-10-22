'use strict';
module.exports = (sequelize, DataTypes) => {
  const producer = sequelize.define('producer', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  producer.associate = function(models) {
    // associations can be defined here
  };
  return producer;
};