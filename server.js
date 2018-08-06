const express = require('express')
const app = express()
const hbs = require('hbs');
//PUERTO

const port = process.env.port || 3000;
//Helpers
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))

//**Express HBS engine */
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home')
})

app.get('/about', function(req, res) {

    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})