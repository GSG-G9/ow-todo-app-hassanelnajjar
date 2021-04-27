const connection = require('../config/connection');

module.exports = () =>
  connection.query('Delete from todos where checked = true');
