const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 27017;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:4T7HwVnZsLbls6ey@kawaiiburger-hk9yw.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then( () => console.log('conectado a cluster'))
.catch(() => console.error(':c'));

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./src/routes/crmRoutes');
routes(app);

//starting the server
app.get('/', (req, res) =>  res.send( `Node and express server is running on port ${PORT}` )
);

 app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );