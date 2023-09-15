const { Sequelize } = require('sequelize');
const path = require('path');

const storage = path.join(__dirname, 'app.test.sqlite');
const options = {
    dialect: 'sqlite',
    storage,
    logging: false,
};
const sequelize = new Sequelize(options);

// console.log(`singleton sequelize`, options);

async function connect() {
    try {
        await sequelize.authenticate();
        // console.log(`Connection to database ${storage}: OK`);
    } catch (error) {
        console.error(`Connection to database ${storage}: KO`, error);
    }
}

async function sync() {
    try {
        await sequelize.sync();
        // console.log(`Models synchronized to database ${storage}: OK`);
    } catch (error) {
        console.error(`Models synchronized to database ${storage}: KO`, error);
    }
}

connect()
    .then(() => sync())
    .catch((error) => {
        console.log(error);
    })

module.exports = {
    sequelize,
    connect,
    sync,
};