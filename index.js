// const http = require('http');
const express = require('express');


let app = express();


app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');

});


app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        users: [{
            name: 'Lucas Andrade',
            email: 'contato@umeet.com.br',
            id: 1
        }]
    });

});




// let server = http.createServer((req, res) => {

//     console.log('URL:', req.url);
//     console.log('METHOD:', req.method);

//     switch (req.url) {
//         case '/':
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');

//             res.end('<h1>Olá</h1>');
//             break;



//         case '/users':
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');

//             res.end(JSON.stringify({
//                 users: [{
//                     name: 'Lucas Andrade',
//                     email: 'contato@umeet.com.br',
//                     id: 1
//                 }]
//             }));
//             break;

//         default:
//             break;
//     }

//     // res.end('OK');


// });

app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor Rodando');
});