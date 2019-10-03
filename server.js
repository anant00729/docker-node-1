const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
//const pg = require('pg');
const { Pool, Client } = require('pg')


//pg.connect('postgres://postgres:password@localhost:5432/practicedocker');




// const _p = new Pool({
//     user : 'postgres',
//     password : '123123123',
//     host : 'localhost',
//     port : 5432,
//     database : 'quonquer'
// })
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// const _p = new Pool({
//     user : 'postgres',
//     password : '123123123',
//     host : 'localhost',
//     port : 5432,
//     database : 'quonquer'
// })


const _p = new Pool({
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


// _p.connect()
// .then(()=> console.log('successfuly connnected'))
// .catch((err) => console.log('faild to connect ' , err.message))
// .finally(() => _c.end())


app.post('/instertData', async (req,res)=> {


    const id = req.body.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const authorname = req.body.authorname
    const PublishedOn = req.body.PublishedOn
    const readtime = req.body.readtime
    const article_temp = req.body.article_temp



    

    
    let res_d
    try{

        const _c = await _p.connect()
        await _c.query('BEGIN')
        res_d = await _c.query(`INSERT INTO public."Article"(
            "ArticleID", "ArticleName", "ArticleAuthorID", "ArticleAuthorName", "PublishedOn", "ReadTime", "ArticleTemplate", "isActive")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, [id, title,id, authorname , PublishedOn , readtime ,JSON.stringify(article_temp) , 1])
        await _c.query('COMMIT')
        
        _c.release()


        res.json({Status : true, Message : '' , rowCount : res_d.rowCount})

    }catch(err){
        res.json({Status : false, Message : err.message})
        _c.release()
        
    }
})



app.get('/getAllData', async (req,res)=> {


    
    let res_d
    try{

        const _c = await _p.connect()
        await _c.query('BEGIN')
        res_d = await _c.query(`SELECT * FROM "Article"`)
        await _c.query('COMMIT')
        
        _c.release()


        for(i of res_d.rows){
            i.ArticleTemplate = JSON.parse(i.ArticleTemplate)
        }

        

        res.json({Status : true, Message : '' , rowCount : res_d.rows})

    }catch(err){
        _c.release()
        res.json({Status : false, Message : err.message})
    }
})



// app.use(express.static('client/build'))

// app.get('*', (req,res)=> {
//     //res.json({Status : true, Mesage : 'Hello all'})
//     res.sendFile(path.resolve(__dirname , 'client', 'build', 'index.html'))
// })
//app.get('/', (req, res) => res.status(200).send('hello'));
//app.get('/', (req, res) => res.status(200).send('hello'));
app.listen(PORT, () => console.log(`Server running on bb ${PORT}`));
