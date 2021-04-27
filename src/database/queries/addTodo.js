const connection = require('../config/connection');

module.exports = (content) =>
  connection.query('INSERT into Todos (content) values ($1)', [content]);
