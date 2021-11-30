const express = require('express'); // importa o express

function hello(argument) {
	console.log(`Olá NodeJS!! Você está utilizando ${process.version} do NodeJS.`);
}

hello();

const server = express();
server.listen(3000);
server.get('/teste', () => {
	console.log('teste');
});

server.get('/geeks', (req, res) => {
	console.log('teste - geeks');
});