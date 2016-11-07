/* importar o modulo do framework express */
var express = require('express');

/* importar o modulo do consing */
var consign = require('consign');

/* importar o modulo do body-parser */
var bodyParser = require('body-parser');

/* importar o modulo do express-validation */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* setar as variaveis views engine e views do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middlaware express.static */
app.use(express.static('./app/public'));

/* configurar o middlaware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middlaware express-validation */
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;