
const express = require('express')
const app = express()
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')
const bcrypt = require("bcrypt");
const saltRounds = 10;


app.set('port', process.env.PORT || 3002)

const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Abc123',
    database: 'escola',
}

//middlewares--------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
//routes--------------------------------
app.get('/', (req, res) => {
    res.send('working')
})

app.use('/api', routes)
//server running-------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})

