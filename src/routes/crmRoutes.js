const addDinnerProduct = require('../controllers/crmController.js');

const routes = (app) => {
    app.route('/products')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send("GET request successfull!!");
    })
    //POST endpoint
    .post(addDinnerProduct);

    app.route("/order/:orderId")
    .put((req, res) =>
    res.send("PUT request successfull!!"))
    .delete((req, res) =>
    res.send("DELETE request successfull!!"));
}

module.exports = routes;