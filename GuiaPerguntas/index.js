const express = require('express'); //importando o modulo express
const app = express(); //criando  uma instancia do expreass
const bodyParser = require('body-parser');
//dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs'); //motor de html
app.use(express.static('public')); //a aplicação aceita arquivos estaticos
//Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//Rotas
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});
//instalar npm install body-parser --save
app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send(`Teste, Titulo ${titulo}, Descricao:${descricao}`);
});

app.listen(8080, () => {
    console.log('App rodando')
});