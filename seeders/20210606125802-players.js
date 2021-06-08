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
      name: "Nicolas Batum",
      email: "Batum@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-d35e604c5b62",
      name: "Marcus Morris",
      email: "Morris@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-a25e604c5b62",
      name: "Kawhi Leonard",
      email: "Kawhi@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-b25e604c5b62",
      name: "Paul George",
      email: "paulgeorge@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-c25e604c5b62",
      name: "Reggie Jackson",
      email: "reggieJ@fake.com",
      teamId: 1,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-e25e604c5b62",
      name: "Rudy Gobert",
      email: "rudyG@fake.com",
      teamId: 2,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-f25e604c5b62",
      name: "Royce O'Neale",
      email: "royceo@fake.com",
      teamId: 2,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-g25e604c5b62",
      name: "Bojan Bogdanovic",
      email: "bojanb@fake.com",
      teamId: 2,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-h25e604c5b62",
      name: "Joe Ingles",
      email: "joei@fake.com",
      teamId: 2,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-i25e604c5b62",
      name: "Donovan Mitchell",
      email: "donm@fake.com",
      teamId: 2,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-j25e604c5b62",
      name: "Marc Gasol",
      email: "marcg@fake.com",
      teamId: 3,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-k25e604c5b62",
      name: "Anthony Davis",
      email: "anthonyd@fake.com",
      teamId: 3,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-l25e604c5b62",
      name: "Lebron James",
      email: "lebronJames@fake.com",
      teamId: 3,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-m25e604c5b62",
      name: "K. Caldwell-Pope",
      email: "kcpope@fake.com",
      teamId: 3,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-n25e604c5b62",
      name: "Dennis Schroder",
      email: "denniss@fake.com",
      teamId: 3,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-o25e604c5b62",
      name: "Thaddeus Young",
      email: "tyoung@fake.com",
      teamId: 4,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-p25e604c5b62",
      name: "Lauri Markkanen",
      email: "lauriM@fake.com",
      teamId: 4,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-q25e604c5b62",
      name: "Garrett Temple",
      email: "gtemple@fake.com",
      teamId: 4,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-r25e604c5b62",
      name: "Patrick Williams",
      email: "pwilliams@fake.com",
      teamId: 4,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-s25e604c5b62",
      name: "Coby White",
      email: "cwhite@fake.com",
      teamId: 4,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-u25e604c5b62",
      name: "Mo Bamba",
      email: "mbamba@fake.com",
      teamId: 5,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-v25e604c5b62",
      name: "Moritz Wagner",
      email: "mwagner@fake.com",
      teamId: 5,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-w25e604c5b62",
      name: "Dwayne Bacon",
      email: "dbacon@fake.com",
      teamId: 5,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-x25e604c5b62",
      name: "Garry Harris",
      email: "gharris@fake.com",
      teamId: 5,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-y25e604c5b62",
      name: "Cole Anthony",
      email: "canthony@fake.com",
      teamId: 5,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-ya5e604c5b62",
      name: "Brook Lopez",
      email: "blopez@fake.com",
      teamId: 6,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-yb5e604c5b62",
      name: "Giannis Antetokounmpo",
      email: "gianns@fake.com",
      teamId: 6,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-yc5e604c5b62",
      name: "P.J. Tucker",
      email: "pjtucker@fake.com",
      teamId: 6,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-yd5e604c5b62",
      name: "Khris Middleton",
      email: "khris@fake.com",
      teamId: 6,
      amountOwed: 0,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    {
      uuid: "209aaf0c-a226-40ab-aa62-ye5e604c5b62",
      name: "Jrue Holiday",
      email: "jholiday@fake.com",
      teamId: 6,
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