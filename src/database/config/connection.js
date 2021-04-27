require('dotenv').config();

const {
  env: { DATABASE_URL },
} = process;

const { Pool } = require('pg');

const ssl = {
  rejectUnauthorized: false,
};

const option = {
  connectionString: DATABASE_URL,
  ssl,
};

module.exports = new Pool(option);
