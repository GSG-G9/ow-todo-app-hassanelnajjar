const connection = require('../config/connection');

module.exports = () => connection.query('UPDATE todos SET checked = true');
