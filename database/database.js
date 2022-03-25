const Sequelize = require("sequelize");
const connection = new Sequelize('myblog', 'root', 'VictorCQueiroz2188!',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;