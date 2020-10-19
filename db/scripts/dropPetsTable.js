const { query } = require('../index');

async function dropSOCPetsTable() {
  // Write code below:

  await query(`DROP TABLE school_of_code_pets`);

  // Write code above ^^^

  console.log(`The table has been dropped`);
}

dropSOCPetsTable();
