const { sequelize } = require('../database/sequelize');

module.exports = require('./base')(sequelize);