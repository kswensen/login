const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const data = require('./data/data.js');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res)=> {
    if(data.username === req.body.username && data.password === req.body.password){
        res.status(200).redirect('http://google.com');
    }
});

const port = 3005;
app.listen(port, ()=> {console.log(`Its lit on ${port} fam`)});