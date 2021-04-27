const connection = require('../config/connection');

module.exports = () => connection.query('SELECT * from todos ORDER BY id ASC');
