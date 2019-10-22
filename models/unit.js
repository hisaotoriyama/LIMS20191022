'use strict';
module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define('unit', {
    producer: DataTypes.INTEGER,
    holder: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    producerid: DataTypes.INTEGER,
    producerspecification: DataTypes.STRING
  }, {
    underscored: true,
  });
  unit.associate = function(models) {
    // associations can be defined here
  };
  return unit;
};