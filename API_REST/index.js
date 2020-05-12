const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./database/database');
const Jogo = require('./database/Jogo');

const cors = require('cors');
app.use(cors());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados com sucesso!');
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//rota da pagina inicial
app.get('/', (req, res) => {
    Jogo.findAll({}).then(jogos => {
        res.statusCode = 200;
        res.json(jogos)
    })
})

//lista todos os games
app.get('/games', (req, res) => {
    // res.statusCode = 200;
    // res.json(DB.games);
    Jogo.findAll({}).then(jogos => {
        res.statusCode = 200;
        res.json(jogos)
    })
})

//lista um game pelo id
app.get('/game/:id', (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        var id = req.params.id;

        Jogo.findOne({
            where: {
                id: id
            }
        }).then(jogo => {
            res.json(jogo)
        })
    }
});

app.post('/game', (req, res) => {
    var {
        name,
        price,
        year
    } = req.body;
    Jogo.create({
        name: name,
        price: price,
        year: year
    }).then(() => {
        res.redirect('/');
    })
});

//deletando jogos
app.delete('/game/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(404);
    } else {
        var id = parseInt(req.params.id)
        Jogo.destroy({
                where: {
                    id: id
                }
            })
            .then(deletedRecord => {
                if (deletedRecord === 1) {
                    res.status(200).json({
                        message: "Deleted successfully"
                    });
                    res.redirect('/');

                } else {
                    res.status(404).json({
                        message: "record not found"
                    })
                }
            }).catch(function (error) {
                res.status(500).json(error);
            });
    }
});
//Editando jogos
app.put('/game/:id', (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(404);
    } else {
        var id = parseInt(req.params.id)
        var {
            name,
            price,
            year
        } = req.body;
        Jogo.update({
                name: name,
                price: price,
                year: year
            }, {
                where: {
                    id: id
                }
            })
            .then((updatedFile) => {
                if (updatedFile == 1) {
                    res.status(200).json({
                        message: "Updated successfully"
                    });
                } else {
                    res.status(404).json({
                        message: "record not found"
                    })
                }
            }).catch(err => console.log(err))
    }

})

app.listen(3000, () => {
    console.log('API Rodando')
});