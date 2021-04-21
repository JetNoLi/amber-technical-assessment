const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsDocSwagger = require('express-jsdoc-swagger');
const jsOptions = require('./setupSwagger');

//import route handlers
const users = require('./routes/users');

const app = express();

//Enable CORS to access API on local machine in react app
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Enable Open API documentation
jsDocSwagger(app)(jsOptions);

//Use route handlers
app.use('/users/', users);

//Define port
const port = 8000;

//Define mongoDB connection string and connect to mongoDB
const connectString = "mongodb+srv://dbTestUser:dbTestPassword@cluster0.fk38z.mongodb.net/TechnicalProblemAmber?retryWrites=true&w=majority";
mongoose.connect(connectString, {useNewUrlParser:true, writeConcern: { j: true}, useUnifiedTopology: true});

//Create and Launch Server
const server = app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});