const { query } = require('../index');

async function createSOCPetsTable() {
  // Write code below:

  const res = await query(
    `CREATE TABLE IF NOT EXISTS school_of_code_pets (
              pet_id SERIAL PRIMARY KEY, 
              human TEXT,
              pet TEXT,
              pet_name TEXT,
              pet_age INT,
              friendly BOOLEAN
              )`
  );

  // Write code above ^^^
  console.log(`Log: created school_of_code_pets table`);
}

createSOCPetsTable();
