const { Pool } = require('pg');

const { db } = require('../config');

// Write code below:

const pool = new Pool(db);

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// Write code above ^^^
