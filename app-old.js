const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let jsonTest = {
            Nombre: 'Rodrigo',
            Ciudad: 'Temuco',
            Edad: 20,
            url: req.url
        }

        res.write(JSON.stringify(jsonTest));
        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando puerto 8080');