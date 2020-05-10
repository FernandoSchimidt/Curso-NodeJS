function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var deuErro = true;
        if (deuErro) {
            callback("O envio do email falhou ");

        } else {
            callback();

        }
    }, 2000)
}
console.log('inicio de envio de email')
enviarEmail('Oi eu sou goku', 'goku@hotmail.com', (erro) => {
    if (erro == undefined) {
        console.log('Tudo ok!');
    } else {
        console.log('Deu erro !');

    }

});