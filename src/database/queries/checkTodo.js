const connection = require('../config/connection');

module.exports = (id) =>
  connection.query('UPDATE todos SET checked = NOT checked where id = $1', [
    id,
  ]);
