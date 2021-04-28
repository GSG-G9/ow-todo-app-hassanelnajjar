const connection = require('../config/connection');

module.exports = () =>
  connection.query('SELECT * from todos where checked = false ORDER BY id ASC');
