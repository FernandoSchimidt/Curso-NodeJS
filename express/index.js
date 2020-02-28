const express = require("express"); //importando o express
const app = express(); //inicializando o express


// rota
app.get("/", function (req, res) {
    // resposta da rota
    res.send('Welcome to my aplication');
});
//Rota com paramentro opcvional
app.get("/blog/:artigo?", function (req, res) {
    var artigo = req.params.artigo;
    if(artigo){
        res.send(`<h1>Welcome to my blog ${artigo}</h1>`);
    }else{
        res.send(`<h2>Sem artigo</h2>`)
    }
})
app.get("/youtube", function (req, res) {
    var canal = req.query["canal"];
    if(canal){
        res.send(canal);

    }else{
        res.send('Nenhum canal fornecido');
    }
})
// passando parametro na rota
app.get("/ola/:nome/:empresa", function (req, res) {
    //req => dados enviados pelo usuario
    //res => resposta que vai ser enviada pelo usuario
   
   //Salvando a req em uma variavel
    var nome = req.params.nome;
    var empresa =req.params.empresa;
    res.send(`<h1>Oi ${nome}, trabalha na ${empresa}<h1>`);
});



app.listen(4000, function (error) {
    if (error) {
        console.log("Ocorreu um erro!")
    } else {
        console.log('Servidor inicializa com sucesso!');
    }
});