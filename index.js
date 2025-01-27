require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//mongoose connection to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURL, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(error => {
    console.log("Could not connect to the database. Exiting now...", error);
    process.exit();
});

//require cors
app.use(cors());

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//require routes
const routes = require('./src/routes/crmRoutes');
routes(app);

//starting the server
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Kawaii Burgers API"});
});

// Launch our app on port
app.listen(process.env.PORT, () => 
    console.log(`Your server is runing on port ${process.env.PORT}`)
 );
