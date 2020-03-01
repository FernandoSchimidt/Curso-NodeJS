const Sequelize = require('sequelize');
const connection = require('./database'); //importa conexao


const Resposta = connection.define('respostas', {//cria tabela no banco
    //criar campos
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({
    force: false //nao recria se ja existir
}).then(() => {

});

module.exports = Resposta;