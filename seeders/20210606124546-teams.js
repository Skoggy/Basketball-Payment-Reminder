'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('teams', [{
      uuid: "209aaf0c-a226-40ab-aa62-a25e604c5b62",
      name: "Clippers",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "b46ba1ed-2c52-4bcd-bbac-bff786f0db8a",
      name: "Jazz",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "e2a37e34-7a16-470c-9df0-cebf0457e85f",
      name: "Lakers",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "d0d9a737-6749-444a-a2f9-dfb4923e794d",
      name: "Bulls",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "b06ff9d4-51be-4314-9609-e3a887330a25",
      name: "Magic",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "540ee336-69e9-411d-9dfb-f1eb41f67930",
      name: "Bucks",
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }
    ], {});

  },



  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('teams', null, {});
  }
};
