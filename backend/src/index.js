const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * ► Rota / Recurso
 */

/**
 * ► Método HTTP:
 * 
 * ► GET: Buscar uma informação do back-end
 * ► POST: Criar um informação no back-end
 * ► PUT: Alterar uma informação no back-end
 * ► DELETE: Deletar uma informação no back-end
 */

/**
 * 
 * ► Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * ► Route Params: Parâmentos utilizados para identificar recursos
 * ► Request Bady: Corpo da requisição, utilizado para criar ou alterar recrusos
 */

/**
 * ► SQL: MySQL, SQLite, PostgrSQL, Oracle, Microsoft SQL Serve
 * ► NoSQL: MongoDB, CouchDB, etc
 */


app.listen(3333);