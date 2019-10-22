'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       producer: {
         type: Sequelize.INTEGER,
         references: {
           model: 'producers',
           key: 'id'
         }
       },
       holder: {
         type: Sequelize.INTEGER,
         references: {
           model: 'holders',
           key: 'id'
         }
       },
       status: {
         type: Sequelize.INTEGER,
         references: {
           model: 'statuses',
           key: 'id'
         }
       },
      producerid: {
        type: Sequelize.INTEGER
      },
      producerspecification: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('units');
  }
};