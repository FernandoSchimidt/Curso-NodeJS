const Sequelize = require('sequelize');

//conexao com o sequelize
const connection = new Sequelize('listajogos','root','F3rn@nd0',{
    host:'localhost',//servidor
    dialect:'mysql'//qual tipo de banco
}); 

module.exports = connection;

