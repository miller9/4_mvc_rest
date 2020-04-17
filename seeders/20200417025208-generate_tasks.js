'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tasks', [
      {id: 1, description: 'Grabar curso de backend', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, description: 'Editar los videos del curso', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, description: 'Subir los videos a plataforma', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};