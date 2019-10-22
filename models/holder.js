'use strict';
module.exports = (sequelize, DataTypes) => {
  const holder = sequelize.define('holder', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  holder.associate = function(models) {
    // associations can be defined here
  };
  return holder;
};