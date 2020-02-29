const Sequelize = require('sequelize');

//conexao com o sequelize
const connection = new Sequelize('guiaperguntas','root','172203',{
    host:'localhost',//servidor
    dialect:'mysql'//qual tipo de banco
}); 

module.exports = connection;

