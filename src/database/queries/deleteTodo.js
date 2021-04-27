const connection = require('../config/connection');

module.exports = (id) =>
  connection.query('Delete from todos where id = $1', [id]);
