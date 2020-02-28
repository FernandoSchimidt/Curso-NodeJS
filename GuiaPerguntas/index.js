const express = require('express'); //importando o modulo express
const app = express(); //criando  uma instancia do expreass

//dizendo para o express usar o ejs como view engine
app.set('view engine', 'ejs'); //motor de html

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: 'Doritos',preco: 3.14},
         {nome: 'Coca-Cola',preco: 5.00},
          {nome: 'Leite',preco: 3.00}
    ]
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: 'TI9',
        msg: exibirMsg,
        produtos:produtos
    });
});



app.listen(8080, () => {
    console.log('App rodando')
});