const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const keys = require('./keys')

const db = knex({
  client: 'pg',
  // connection: {
  //   user:keys.pgUser,
  //   host:keys.pgHost,
  //   database:keys.pgDatabase,
  //   password:keys.pgPassword,
  //   port: keys.pgPort
  // }
  connection: keys.pgURI
});

const app = express();

app.use(morgan('combined'));
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send("database.users") })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
