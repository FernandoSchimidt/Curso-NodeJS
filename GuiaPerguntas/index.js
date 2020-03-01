const express = require('express'); //importando o modulo express
const app = express(); //criando  uma instancia do expreass
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados com sucesso!');
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });


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
    //Select * from perguntas
    Pergunta.findAll({
        raw: true,
        order: [
            ['id', 'DESC'] //ordenação decrecente //ASC=crescente
            //['titulo', 'DESC'] Ordena pelo titulo, mesmo esquema do id para ordenar
        ]
    }).then(perguntas => {
        res.render('index', {
            //pega as perguntas do banco
            perguntas: perguntas //coloca as perguntas em um array 
        });
    });
});
app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});
//instalar em casa npm install body-parser --save
//instalar no trampo npm install --save sequelize  -  npm install --save mysql2
app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
});


app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id;
    //busca no banco de dados perguntas
    Pergunta.findOne({
        where: {
            id: id //pega no banco pelo id 
            //busca um dado com uma condição
        }
    }).then(pergunta => {
        if (pergunta != undefined) { //pergunta encontrada no banco
            //todas as resposta destapergunta
            Resposta.findAll({
                where: {
                    perguntaId: pergunta.id
                },
                order: [
                    ['id', 'DESC']
                ]
            }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else { //não encontrada
            res.redirect('/');
        }
    });
});
//recebe dado do formulario
app.post('/responder', (req, res) => {
    var corpo = req.body.corpo; //recebe a resposta que vem pelo text area
    var perguntaId = req.body.pergunta; //pega o id da pergunta
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/' + perguntaId);
    });
});
app.listen(8080, () => {
    console.log('App rodando')
});