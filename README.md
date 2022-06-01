# crud-node-js
Backend em Node

instalar:

- sudo apt install nodejs

- sudo apt install npm

- npm install nodemon

to start  project do:
$ nodemon index.js

curl -X POST "http://localhost:3001/hello"

install postgres on linux
https://phoenixnap.com/kb/how-to-install-postgresql-on-ubuntu

Acessar banco de dados
 sudo su - postgres
 psql
 
Criar banco de dados
$ CREATE DATABASE testedb;
$ \c testedb;



OBS: 

caso ocorra erro em -- Erro “não foi possível obter trava /var/lib/dpkg/lock-frontend” --
http://www.bosontreinamentos.com.br/linux/erro-nao-foi-possivel-obter-trava-var-lib-dpkg-lock-frontend/

Caso ocorra erro em -- Not able to run nodemon (SyntaxError: Unexpected token) on ubuntu
https://stackoverflow.com/questions/70750949/not-able-to-run-nodemon-syntaxerror-unexpected-token-on-ubuntu
<<<<<<< HEAD
=======


ORM:
https://www.npmjs.com/package/sequelize

$ npm i sequelize # This will install v6

$ npm install --save pg pg-hstore #instalar driver
>>>>>>> ba5d0d28dc1a4dd0520133c2779d2628bda4129a
