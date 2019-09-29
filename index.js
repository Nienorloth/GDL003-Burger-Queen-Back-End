const express = require('express');
const routes = require('./src/routes/crmRoutes');

const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) =>  res.send( `Node and express server is running on port ${PORT}` )
);

 app.listen(PORT, () => 
    console.log(`Your server is runing on port ${PORT}`)
 );