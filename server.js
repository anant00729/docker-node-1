const express = require('express');
const server = express();
const PORT = 3000;
//const pg = require('pg');
const { Pool, Client } = require('pg')


//pg.connect('postgres://postgres:password@localhost:5432/practicedocker');


const _c = new Client({
    user : 'postgres',
    password : 'password',
    host : 'db',
    port : 5432,
    database : 'practicedocker'
})



// _p.connect()
// .then(()=> console.log('successfuly connnected'))
// .catch((err) => console.log('faild to connect ' , err.message))
// .finally(() => _p.end())


_c.connect()
.then(()=> console.log('successfuly connnected'))
.catch((err) => console.log('faild to connect ' , err.message))
.finally(() => _c.end())







server.get('/', (req, res) => res.status(200).send('hello'));
server.listen(PORT, () => console.log(`Server running on bb ${PORT}`));
