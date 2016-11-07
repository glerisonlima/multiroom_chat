/* importar as configurações */
var app = require('./config/server');

/* parametrizar a porta de esculta */
var server = app.listen(80, function(){
	console.log('Servidor online');
});

var io = require('socket.io').listen(server);
app.set('io' , io);
/* criar a conexão por websocket */
io.on('connection', function(socket){
	console.log("Usuario conectou");

	socket.on('disconnect', function(){
		console.log("Usuario desconectou");
	});

	socket.on('msgParaServidor', function(data){
		socket.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaCliente',
			{apelido: data.apelido, mensagem: data.mensagem}
		);
	});
	
});