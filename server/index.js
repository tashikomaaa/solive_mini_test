const express = require('express');
const path = require('path')
const app = express();
const JsonDB = require('node-json-db');
const bodyParser = require('body-parser');


const db = new JsonDB('solive_db', true, false);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/overviewApi.html`);
})
// teams endpoints
app.get('/teams', (req, res) => {
    res.send(db.getData('/teams'))
})
app.get('/team/:id', (req, res) => {
    res.send(db.getData('/teams' + req.params.id))
})
app.post('/team/create', (req, res) => {
    db.push('/teams[]', req.body, true)
    res.send({ teamCreated: true })
})
// app.put('/team/update/', (req, res) => {
//     //db.push('/teams/',)
//     res.send({ teamUpdated: true })
// })

// players endpoints
app.get('/players', (req, res) => {
    res.send(db.getData('/players'))
})
app.post('/player/create', (req, res) => {
    db.push('/players[]', req.body, true)
    res.send({ playerCreated: true })
})
// app.put('/player/upadate/', (req, res) => {
//     //db.push('/players[]')
//     res.send({ playerUpdated: true })
// })
app.listen(4000, ()=> {
    console.log('app is running on http://localhost:4000')
})