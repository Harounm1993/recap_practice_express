const { Pool } = require("pg");

const { db } = require("../config");

const pool = new Pool(db);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
