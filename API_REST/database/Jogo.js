const sequelize = require('sequelize');
const connection = require('./database');

// tabela
const Jogo = connection.define('jogos', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    price: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    year: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Jogo.sync({
    force: false
}).then(() => {

});

module.exports = Jogo;