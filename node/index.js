const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const port = 3000;

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'db',
        port: 3307,
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    knex('people').insert({
        name: 'Pessoa '+Math.random()
    }).then(async () => {
        const peoples = await knex.from('people');
        res.render('index', {peoples: peoples});
    });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})