const { sequelize } = require('../database/sequelize.test.config');

module.exports = require('./base')(sequelize);