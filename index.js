const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); //27017
console.log(`Your URL is ${process.env.mongourl}`); // mongoURL
const jwt = require('jsonwebtoken');


//mongoose connection to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongourl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(error => {
    console.log("Could not connect to the database.Exiting now...", error);
    process.exit();
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//require routes
const routes = require('./src/routes/crmRoutes');
routes(app);

//starting the server
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Kawaii Burgers"});
});

// Launch our app on port
app.listen(process.env.PORT, () => 
    console.log(`Your server is runing on port ${process.env.PORT}`)
 );