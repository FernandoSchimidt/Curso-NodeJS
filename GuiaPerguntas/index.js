const express = require('express'); //importando o modulo express
const app = express(); //criando  uma instancia do expreass

//dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs'); //motor de html
app.use(express.static('public'));//a aplicação aceita arquivos estaticos

app.get('/', (req, res) => {
   
});



app.listen(8080, () => {
    console.log('App rodando')
});