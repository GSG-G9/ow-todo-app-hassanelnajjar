const connection = require('../config/connection');

module.exports = (checked) =>
  connection.query('UPDATE todos SET checked = $1', [checked]);
