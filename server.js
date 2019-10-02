const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');
const { Pool, Client } = require('pg')












const _p = new Pool({
    user : 'postgres',
    password : 'password',
    host : 'localhost',
    port : 5432,
    database : 'practicedocker'
})


server.get('/', (req, res) => res.status(200).send('hello'));
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
