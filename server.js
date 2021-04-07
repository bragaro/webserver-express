const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')


const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'rodrigo',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/home', (req, res) => {
//     res.send('Holandaaaaaaa')
// });

// app.get('/', (req, res) => {

//     let jsonTest = {
//         Nombre: 'Rodrigo',
//         Ciudad: 'Temuco',
//         Edad: 30,
//         url: req.url
//     }

//     res.send(JSON.stringify(jsonTest));

// });

// app.get('/data', (req, res) => {

//     res.send('Hola Data!!!');

// });


app.listen(port, () => {

    console.log(`Escuchando en el puerto ${port}`);

});