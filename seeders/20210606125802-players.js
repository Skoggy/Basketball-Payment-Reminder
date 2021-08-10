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
    await queryInterface.bulkInsert('players', [{
      uuid: "209aaf0c-a226-40ab-aa62-d15e604c5b62",
      name: "Christopher Skogstad",
      email: "Batum@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-d35e604c5b62",
      name: "Justin",
      email: "Morris@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-a25e604c5b62",
      name: "Mark Po",
      email: "Kawhi@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-b25e604c5b62",
      name: "A",
      email: "paulgeorge@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-c25e604c5b62",
      name: "Paul",
      email: "reggieJ@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-c25e604c5b69",
      name: "Mark Pe",
      email: "reggieJ@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('players', null, {});
  }
};