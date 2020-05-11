function pegarId() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 5
            })
        }, 2000)
    })
}

function buscaEmaiBanco(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                email: 'FernandoSchimidt@outlook.com'
            })
        }, 2000)
    })
}

function enviarEmail(corpo, para) {
    return new Promise((res, rej) => {
        setTimeout(() => {

            var deuErro = false;
            if (!deuErro)
                res({
                    time: 6,
                    to: 'fernando@udemy.com'
                }) //Promisse ok
            else {
                rej("Fila Cheia") //foi mal eu falhei 
            }
        }, 3000)
    })
}

// function pegarUsuarios() {
//     return new Promise((res, rej) => {

//         setTimeout(() => {
//             res([{
//                     name: 'Fernando',
//                     lang: 'Js'
//                 },
//                 {
//                     name: 'Schimidt',
//                     lang: 'Angular'
//                 },
//                 {
//                     name: 'Beatriz',
//                     lang: 'Nada'
//                 },

//             ])
//         }, 3000)

//     });
// }

// async function principal() {
//     var usuarios = await pegarUsuarios();
//     console.log(usuarios);
//     console.log('Ola');
// }

// principal();

// enviarEmail('O palmeiras nao tem mundial', 'palmeiras')
//     .then(({
//         time,
//         to
//     }) => {
//         console.log(`
//             Time:${time}
//             ------------------
//             To:${to}
//         `)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// pegarId().then(({
//     id
// }) => {
//     buscaEmaiBanco(id).then(({
//         email
//     }) => {
//         enviarEmail('Hello', email).then(() => {
//             console.log(`email eviado para o usuario com id: ` + id)
//         }).catch(err => {
//             console.log(err);
//         })
//     })
// })

async function principal() {
    var id = await pegarId();
    var email = await buscaEmaiBanco(id);
    enviarEmail('ola, como vai voce', email).then(() => {
        console.log('Email enviado')
    }).catch((err) => console.log(err));
};
principal();