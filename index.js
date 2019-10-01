const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 27017;

//mongoose connection to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:4T7HwVnZsLbls6ey@kawaiiburger-hk9yw.mongodb.net/kawaii?retryWrites=true&w=majority', {
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

app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );