const express = require('express');
const routes = require('./src/routes/crmRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
   useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

//starting the server
app.get('/', (req, res) =>  res.send( `Node and express server is running on port ${PORT}` )
);

 app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );